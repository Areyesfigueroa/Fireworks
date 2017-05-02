class Firework
{
  constructor(scene)
  {
    //Variables
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
    //If it exitst.
    if(this.firework != null)
    {
      this.firework.applyForce(this.gravity);
      this.firework.update();

      //if the velocity is >= 0 dissapear. TESTING
      if(this.firework.vel.y <= 0)
      {
        this.firework = null;
      }
    }

  }

  show()
  {
    if(this.firework != null)
    {
      this.firework.show(); //add to scene
    }
    else
    {
        console.log("NULL FIREWORK")
    }
  }

}
