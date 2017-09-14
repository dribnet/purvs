
var nSeed;
var rand = 30;

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

      if (i < 11 && i > 0){
      x+= rand+((i/3)-15);
    }else if (i==11){
      y+= 4;
      x+=2;
    }
    else if (i==12){
      y+= i-9;
    }else if (i==13){
      y+= i-11;
    }else if(i ==49){
      x-=5;
    }



    curveVertex(x, y);
  }
  endShape(CLOSE);

  stroke(219, 237, 154, 255);

  for (var i = 0; i < 50; i++) {
        var ang = map(i, 0, 50, 0, TWO_PI);
    var rad = 200 * noise(i * 0.01, i*0.01);
    var x = rad * cos(ang);
    var y = rad * sin(ang);

        if (i < 11 && i > 0){
      x+= rand+((i/3)-15);
    }else if (i==11){
      y+= 4;
      x+=2;
    }
    else if (i==12){
      y+= 1;
    }



    
    if (i%2 == 1){
    line(45, 0, x, y);
    }
}
 
  
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

   rand = random(25, 35);
 
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
