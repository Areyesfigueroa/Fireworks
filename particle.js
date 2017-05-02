
class Particle
{
  //<Params>Scene</Params> Required
  //<Params>x, y, z</Params> Optional, Vector position of the particle.
  //<Params>scaleX, scaleY, scaleZ</Params> Optional, Size of the particle.
  constructor(scene, firework = false, posX = 0, posY = 0, posZ = 0, scaleX = 5, scaleY = 5, scaleZ = 0)
  {
    //POSITION, VELOCITY, ACCELERATION
    this.pos = new THREE.Vector3(posX, posY, posZ); //sets origin position

    var randomVel = Math.floor(Math.random() * 10) + 5; //randomize velocity vector.
    if(firework)
    {
      //IF FIREWORK HAS NOT EXPLODED.
      //Vector goes straight up.
      this.vel = new THREE.Vector3(0, randomVel, 0); //velocity
    }
    else
    {
      //IF FIREWORK EXPLODES.
      //Randomize the direction of your vectors. So that particles shoot everywhere.

      var xDir = Math.floor(Math.random()*2) + 0; // this will get a number between 1 and 99;
      xDir *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

      var yDir = Math.floor(Math.random()*2) + 0; // this will get a number between 1 and 99;
      yDir *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

      var zDir = Math.floor(Math.random()*2) + 0; // this will get a number between 1 and 99;
      zDir *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

      var force = 2; //Balance between Gravity and Velocity. To get the correct effect

      //Plug In New Random Directions to the new Vector3 velocity.
      this.vel = new THREE.Vector3(xDir * force, yDir * force ,0); //velocity, 2D for now.
      console.log(xDir, yDir, zDir);
    }
    this.acc = new THREE.Vector3(0,0,0); //acceleration


    //DRAWING
    //Draw SphereGeometry
    this.geometry = new THREE.SphereGeometry(scaleX, scaleY, scaleZ); //Default

    //Create material
    this.material = new THREE.MeshLambertMaterial({color: 0xF3FFE2});

    //Create mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z); //set initial position.

    //console.log(this.mesh.position);
  }

  //force function
  applyForce(force)
  {
    this.acc.add(force);
  }

  //update function
  update()
  {
    //Vector addition.
    this.vel.add(this.acc);
    this.mesh.position.add(this.vel); //set new position.
    this.pos.add(this.vel); //keep track of mesh position.

    //Vector multiplication
    this.acc.multiplyScalar(0);
  }

  //Deprecated
  getMesh()
  {
    return this.mesh;
  }

  //getMeshPos
  getPos()
  {
    return this.mesh.position;
  }

  //setsMeshPos
  setPos(x = 0, y = 0, z = -5000)
  {
    this.mesh.position.set(x, y, z);
  }

  //setsMeshPos using a passed Vector3
  setVectorPos(position)
  {
    this.mesh.position.set(position);
  }

  //Add the object to the scene.
  show()
  {
    if (this.mesh != null)
    {
      scene.add(this.mesh);
    }
    else
    {
      //console.log("NULL PARTICLE")
    }
  }
}
