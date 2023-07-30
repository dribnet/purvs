/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
var offset = 0;

var numbers = {
  zero: [],
  one: [],
  two: [],
  three: [],
  four: [],
  five: [],
  six: [],
  seven: [],
  eight: [],
  nine: [],
};



function draw_clock(obj) {
  angleMode(DEGREES);
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(0,5,10); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);

  
  if(offset > 30) offset = -30;
  offset += 0.5;

  var offs = abs(offset);

  

  noStroke();
  let noiseScale = 0.02
  let c1 = color(0,5,5,30);
  let c2 = color(0,120,120,30);
  for(let x = 0; x < width; x+=15) {
    for(let y = 0; y < innerHeight; y+=15) {
      var val = noise(x*noiseScale,y*noiseScale);
      var col = lerpColor(c1,c2,val/1.5);
      var distance = map(dist(x, y, width/2, height/2), 0, width/1.2, 1, 0.1);
      fill(lerpColor(color(0,0,0,0), col, distance));
      var rand = random(1,1.5);
      
      var size = map(distance, 1, 0.1, 100, 30);
      ellipse(x,y,size,size);
    }
  }

  drawCircle(1.5, width/2, height/2.1, 150+offs);
  drawCircle(2, width/1.9, height/1.8, 70-offs);
  drawCircle(1.2, width/2.1, height/1.9, 0-offs);
  drawCircle(2.3, width/2, height/2, 200-offs);
  drawCircle(1.9, width/1.9, height/2, 30+offs);
  drawCircle(1.8, width/2.1, height/2.1, 140-offs);
  drawCircle(0.9, width/1.95, height/1.9, 90+offs);

  generateStars();

  for(let i = 0; i < 12; i++) {
    fill(200,200,250,4);
    ellipse(width/2, height/2, width*(pow(0.8, i)), width*(pow(0.8, i)));
  }

  fill(0,0,100,50);
  rect(0,0,width,height);


  drawStar(200, 200);


}

function drawCircle(scale, x, y, rot) {
  push();
  translate(x, y);
  rotate(rot);
  noFill();
  stroke(255, 255, 255, 30);
  strokeWeight(0.3);
  beginShape();
  var inc = 5;
  for(let i = 0; i < 50; i++) {
    inc += 20
    let len = scale*(200 + (i%3)*12);
    let v = p5.Vector.fromAngle(inc, len);
    curveVertex(v.x, v.y);
  }
  endShape();
  pop();
}

function generateStars() {
  push();
  translate(width/2, height/2);
  let noiseScale = 0.02;
  let a = 0;
  for(let i = 0; i < 200; i++) {
    a += 97;
    let len = map(noise(0, i), 0, 1, 10, width/2);
    let v = p5.Vector.fromAngle(a, len);
    drawStar(v.x, v.y, noise(i, 0)*2);
  }  
  for(let i = 0; i < 50; i++) {
    a += 97;
    let len = map(noise(0, i), 0, 1, 1, width/4);
    let v = p5.Vector.fromAngle(a, len);
    drawStar(v.x, v.y, noise(i, 0)*2);
  }  
  pop();
}

function drawStar(x, y, scale) {
  let off = (abs(offset)/30*5);
  fill(220, 220, 255, 4);
  for(let i = 0; i < 4; i++) {
    circle(x, y, off+10*scale*1.2*(pow(0.8, i)));
  }
  fill(255, 100);
  circle(x, y, off/4+1.5*scale);
}


