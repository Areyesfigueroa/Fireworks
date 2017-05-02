class Firework
{
  constructor(scene)
  {
    //PARTICLE VARIABLES
    this.color = Math.random() * 0xffffff; //generate random color
    this.explosionAmmount = Math.floor(Math.random()*100) + 30; //generate random ammount fom 30 to 60
    this.maxWidth = 300;
    this.minWidth = -150; //origin.
    this.height = -300;
    this.gravity = new THREE.Vector3(0, -0.2, 0);

    //EXPLOSION VARIABLES
    this.exploded = false; //check if object exploded.
    this.particles = []; //hold our particles

    //PARTICLE
    var randomPosX = Math.floor(Math.random() * this.maxWidth) + this.minWidth;
    this.firework = new Particle(scene, true, this.color, randomPosX, this.height, -1000);
  }

  update()
  {
    //the particle exploded
    if(!this.exploded)
    {
      //Apply physics.
      this.firework.applyForce(this.gravity);
      this.firework.update();

      //if firework reached Y-axis Apex.
      if(this.firework.vel.y <= 0)
      {
        this.exploded = true;
        this.explode(); //Explode.
      }
    }

    //Better to go backwards.
    for(var i = this.particles.length - 1; i >= 0; i--)
    {
      //console.log("Apply New Particle physics");
      //Balance between Gravity and Velocity. To get the correct effect
      this.particles[i].applyForce(this.gravity);
      this.particles[i].update();

      if(this.particles[i].done())
      {
        this.particles[i].remove();
        this.particles.splice(i, 1);
      }
    }
  }

  done()
  {
    if(this.exploded && this.particles.lenght == 0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  explode()
  {
    //console.log("BOOM");
    this.firework.remove();

    //Create Particle Explosion!!!
    for(var i = 0; i < this.explosionAmmount; i++)
    {
      //Create Particle Instance at the current firework position.
      var p = new Particle(scene, false, this.color, this.firework.pos.x, this.firework.pos.y, this.firework.pos.z);
      this.particles.push(p);
    }
  }


  show()
  {
    //If it has not exploded
    if(!this.exploded)
    {
      this.firework.show(); //add to scene
    }
    else
    {
        //console.log("Exploded: ", this.exploded);
        for(var i = 0; i < this.particles.length; i++)
        {
          this.particles[i].show();
        }
    }



  }

}
