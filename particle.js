
class Particle
{

  constructor(posX = 0, posY = 0, posZ = 0, scaleX = 20, scaleY = 20, scaleZ = 20)
  {
    //Vector3() gets Initialized as (0,0,0)
    this.pos = new THREE.Vector3(posX, posY, posZ);
    this.vel = new THREE.Vector3(0, 4, 0);
    this.acc = new THREE.Vector3(0,0,0);

    //DRAWING
    //Draw SphereGeometry
    this.geometry = new THREE.SphereGeometry(scaleX, scaleY, scaleZ); //Default

    //Create material
    this.material = new THREE.MeshLambertMaterial({color: 0xF3FFE2});

    //Create mesh
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z); //set initial position.
    console.log(this.mesh.position);
  }

  //force function
  applyForce(force)
  {
    acc.add(force);
  }

  //update function
  update()
  {
    //Vector addition.
    this.vel.add(this.acc);
    console.log("Position: ", this.mesh.position.add(this.vel)); //set new position.

    //Vector multiplication
    this.acc.multiplyScalar(0);

  }

  //returns mesh
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
}
