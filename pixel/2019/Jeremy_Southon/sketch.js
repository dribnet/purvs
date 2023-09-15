let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "my_input2.jpg";
let maskFile = "my_mask2.png";
let outputFile = "artwork_3.png";
let customPixel;

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}
var drops = [];
var particles = [];

function setup() {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');
  img = loadImage('dansHead.png');
  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();

  for (var i = 0; i < sourceImg.width; i += 1) {
    drops.push(new Drop(i));
  }


}


function draw() {

  // Draw and update the rain.
  drops.forEach(drop => {
    drop.show();
    drop.fall();
  });


  // update & remove timed out particles if any
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 500) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // }
  }
}

function keyTyped() {
  if (key == '!') {
    // saveBlocksImages();
    saveArtworkImage(outputFile);
  }
}


/**
 * Class that represents a rain drop.
 * Handles its movement, and displaying.
 */
class Drop {

  constructor(x) {
    this.x = x;
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.yspeed = map(this.z, 0, 20, 1, 5);
    this.hitMask = false;
  }
  
  fall() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }

    var col = sourceImg.get(this.x, this.y);
    let mask = maskImg.get(this.x, this.y); // corresponding x&y in the mask
    //check if rain has hit mask
    if (mask[0] > 128) {
      noStroke();
      fill(col[0], col[1], col[2]);
      if (!this.hitMask) {
        for (let i = 0; i < 12; i++) {
          particles.push(new Particle(this.x+random(-10,10), this.y));
        }
      }
      this.hitMask = true;
    }

    
  }

  show() {
    var thick = map(this.z, 0, 20, 1, 3);
    var col = sourceImg.get(this.x, this.y);
    let mask = maskImg.get(this.x, this.y); // corresponding x&y in the mask

    if (mask[0] < 128) {
      //display logic for background layer.  
      strokeWeight(thick);
      stroke(col[0], col[1], col[2]);
      line(this.x, this.y, this.x, this.y + this.len);
    }
  }
}


/**
 * Particle class used to simulate the splash water effect once the rain its the mask layer.
 * 
 */
class Particle {

  constructor(x, y) {
    this.acceleration = createVector(0, 0.1);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = createVector(x, y);
    this.lifespan = 500;
    this.size = 3;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.size += 0.02
  }

  display() {

    let mask = maskImg.get(this.position.x, this.position.y); // corresponding x&y in the mask
      var col = sourceImg.get(this.position.x, this.position.y);
      noStroke();
      fill(col[0], col[1], col[2],this.lifespan);
      ellipse(this.position.x, this.position.y, random(1,4), random(1,4));
      stroke(col)
      // point(this.position.x,this.position.y)
    // }
  }

  isDead() {
    return this.lifespan < 0;
  }
}

