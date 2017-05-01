
class Particle
{
  constructor(x, y, z)
  {
    //Vector3() gets Initialized as (0,0,0)
    this.pos = new THREE.Vector3(x, y, z);
    this.vel = new THREE.Vector3(0, 0, 0);
    this.acc = new THREE.Vector3(0,0,0);
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
    this.pos.add(this.vel);

    this.acc.multiply(0);
  }

  getMesh()
  {
    //Draw SphereGeometry
    var geometry = new THREE.SphereGeometry(this.x, this.y, this.z);

    //Create material
    var material = new THREE.MeshLambertMaterial({color: 0xF3FFE2});

    //Create mesh
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0,0,0-1000);

    //add to scene. AKA return the mesh.
    return mesh;

  }
}

/*
Particle(x, y, z)
{
  //Vector3() gets Initialized as (0,0,0)
  var pos = new THREE.Vector3(x, y, z);
  var vel = new THREE.Vector3(0, 0, 0);
  var acc = new THREE.Vector3(0,0,0);


  //force function
  var applyForce = function(force)
  {
    acc.add(force);
  }

  //update function
  var update = function()
  {
    //Vector addition.
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

}*/
