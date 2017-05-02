
class Particle
{
  //<Params>Scene</Params> Required
  //<Params>x, y, z</Params> Optional, Vector position of the particle.
  //<Params>scaleX, scaleY, scaleZ</Params> Optional, Size of the particle.
  constructor(scene, posX = 0, posY = 0, posZ = 0, scaleX = 10, scaleY = 10, scaleZ = 0)
  {
    //Vector3() gets Initialized as (0,0,0)
    this.pos = new THREE.Vector3(posX, posY, posZ); //sets origin position

    var randomVel = Math.floor(Math.random() * 12) + 5; //randomize velocity vector.

    this.vel = new THREE.Vector3(0, randomVel, 0); //velocity
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

    //Vector multiplication
    this.acc.multiplyScalar(0);
  }

  getCurrentPos()
  {
    return this.mesh.position;
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
      console.log("NULL PARTICLE")
    }
  }
}
