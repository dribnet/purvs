function Particle() {
  //this.x = x;
  //this.y = y;
  this.pos = createVector(random(width),random(height));
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxspeed = 3;

  this.prevPos = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed)
    this.pos.add(this.vel);
    this.acc.mult(0);

    // this.x = constrain(this.x, 0,width);
    // this.y = constrain(this.y, 0,height);
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

  this.show = function() {
    var px = floor(this.pos.x)
    var py = floor(this.pos.y)
    var col = img.get(px,py);
    var mask1 = mask.get(px,py);
    stroke(col[0],col[1],col[2], 100);
    if(mask1[0] > 128){
      strokeWeight(1);
    } else {
    strokeWeight(25);
    }
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();

  }
  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
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
