
var nSeed;

function setup() {
  createCanvas(960, 500);

  nSeed = 0;
 
}



function generateShape(){

    beginShape();
  fill(69, 91, 52);
  strokeWeight(0.5);
  for (var i = 0; i < 50; i++) {
    var ang = map(i, 0, 50, 0, TWO_PI);
    var rad = 200 * noise(i * 0.01, i*0.01);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);

    line(0, 0, x, y);
  }
  endShape(CLOSE);
 
  
}

function draw() {
  background(199, 219, 249);

  push();
  translate(width/2, height/2);
  generateShape();
  pop();

  

}



function refreshNoise(){
  nSeed += 1;
   noiseSeed(nSeed);
   console.log(nSeed);
}

function mousePressed(){
  refreshNoise();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


//code based on : http://genekogan.com/code/p5js-perlin-noise/
