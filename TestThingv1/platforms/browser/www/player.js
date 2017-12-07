function Player() {
  this.x = width/2 - 8;
  this.y = height/2 - 8;
  this.xspeed = 0;
  this.yspeed = 0;
  this.name = ' '; 
  
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.update = function() {
    this.x = this.x + this.xspeed*20;
    this.y = this.y + this.yspeed*20;

    this.x = constrain(this.x, 0, width-21);
    this.y = constrain(this.y, 0, height-21);
  }

  this.show = function() {
    fill(255);
    stroke(0);
    rect(this.x, this.y, 20, 20);
  }

  this.scroll = function() {
    //checks up
    if (this.x > 259 && this.x < 321 && this.y < 5) {
      this.y = 575;
      roadv ++;
      console.log(roadh, ',', roadv);
      //checks down
    } else if (this.x > 259 && this.x < 321 && this.y > 578) {
      this.y = 25;
      roadv --;
      console.log(roadh, ',', roadv);
      //checks right
    } else if (this.x > 578 && this.y > 259 && this.y < 321) {
      this.x = 25;
      roadh ++;
      console.log(roadh, ',', roadv);
      //checks left
    } else if (this.x < 5 && this.y > 259 && this.y < 321) {
      this.x = 575;
      roadh --;
      console.log(roadh, ',', roadv);
    }

  }
}