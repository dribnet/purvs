let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
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

  // background(230, 230, 250);
  drops.forEach(drop => {
    drop.fall();
    drop.show();
  });

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
    saveBlocksImages();
    // saveArtworkImage(outputFile);
  }
}


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
      // ellipse(this.x, this.y, 5, 5);
      // rect(this.x, this.y + this.len, 5, 5);
      if (!this.hitMask) {
        for(let i = 0;i <3 ;i++) {
          particles.push(new Particle(this.x, this.y));
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

class Particle {

  constructor(x, y) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-0.5, 0.5), random(-1, 0));
    this.position = createVector(x, y);
    this.lifespan = 455;
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
    this.size+=0.01
  }

  display() {
    var col = sourceImg.get(this.position.x, this.position.y);
    noStroke();
    // fill(127, this.lifespan);
    fill(col[0], col[1], col[2]);
    ellipse(this.position.x, this.position.y, this.size,this.size);
  }

  isDead() {
    return this.lifespan < 0;
  }
}

