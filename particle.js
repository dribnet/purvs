function Particle() {
  this.pos = createVector(random(width),random(height)); //create particle at random location on screen
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxspeed = 3;

  this.prevPos = this.pos.copy();

  //physics engine
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed)
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);

  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

  //display function
  this.show = function() {

    //get position of pixel on input image
    var px = floor(this.pos.x)
    var py = floor(this.pos.y)
    //get colour value based on position of pixel on input image
    var col = img.get(px,py);
    var mask1 = mask.get(px,py);

    //stroke colour based on colour value based on position of pixel on the input image
    stroke(col[0],col[1],col[2], 100);

    //if in side mask draw thicker line else draw thinner line
    if(mask1[0] > 128){
      strokeWeight(0.5);
    } else {
      strokeWeight(0.2)
    }

    line(this.pos.x, this.pos.y,this.prevPos.x, this.prevPos.y)
    this.updatePrev();
    

  }
  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  //Keep particles contained in canvas
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0){
    this.pos.x = width;
    this.updatePrev();
    }
    if (this.pos.y > height){
    this.pos.x = 0;
    this.updatePrev();
    }
    if (this.pos.y < 0){
    this.pos.y = height;
    this.updatePrev();
  }
}
}