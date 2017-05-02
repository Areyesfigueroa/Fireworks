class Firework
{
  constructor(scene)
  {

    this.maxWidth = 300;
    this.minWidth = -150; //origin.
    this.height = -300;
    this.gravity = new THREE.Vector3(0, -0.2, 0);

    //PARTICLE
    var randomPosX = Math.floor(Math.random() * this.maxWidth) + this.minWidth;
    this.firework = new Particle(scene, randomPosX, this.height, -1000); //width is a random number between two values.
  }

  update()
  {
    this.firework.applyForce(this.gravity);
    this.firework.update();
  }

  show()
  {
    this.firework.show(); //add to scene
  }

}
