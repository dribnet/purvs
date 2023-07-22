/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  background(210); //  light grey
  textSize(40);
  textAlign(CENTER, CENTER);


  let Seconds = obj.seconds
  let Minutes = obj.minutes

  // let Seconds_Radius = map(Seconds, 0, 59, 1, 150);
  //let MinutesY = map(Minutes, 0, 59, 1, 150);

  // noStroke();
  // text("Seconds: " + Seconds, width / 2, 200), 

  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, 150);

  // fill(140, 255, 251) // blue
  // noStroke();
  // ellipse(width / 2, MinutesY, 100); // minutes moving up and down

  // fill(175, 133, 255); // purple
  // noStroke();
  // ellipse( width / 3 * 2, 350, Seconds_Radius); //circle expanding

  //plant stalk
  let linex = 480;
  let liney = 75; //originally 55

  stroke(1, 50, 32); //dark green
  strokeWeight(8);
  line(linex, liney, linex, liney + 265);

  //Plant pot
  let quadx = 405;
  let quady = 370; //originally 350
  let rectx = 395;
  let recty = 340; //originally 320

  fill(0, 206, 209); //dark turquoise
  noStroke();
  //quad(10, 30, 80, 30, 70, 90, 20, 90); //10,30,80,30,70,90,20,90
  quad(quadx, quady, quadx + 150, quady, quadx + 130, quady + 100, quadx + 20, quady + 100); // 405, 350, 555, 350, 535, 450, 425, 450 //goes from right to left, x then y...
  rect(rectx, recty, 170, 30); //collar of plant pot //395, 320, 170, 30

  stroke(140, 255, 251); //light turquoise
  strokeWeight(5);
  line(395, 370, 565, 370); //line on collar of plant pot //395, 350, 565, 350

  ystep = 48
  for (let i = 0; i < 6; i++) {
    drawLeaf(425, 42 + (ystep * i));
  }

  for (let i = 0; i < 6; i++) {
    drawrightLeaf(535, 42 + (ystep * i));
  }

  //waterdrops
  strokeWeight(8);
  point(60, 60);
  point(80, 90);
  point(60, 110);
  point(40, 90);

  fill(27, 149, 224);
  noStroke();
  beginShape();
  curveVertex(60,60);
  curveVertex(60,60);
  curveVertex(80,90);
  curveVertex(60,110);
  curveVertex(40,90);
  endShape(CLOSE);

}

let leafx = 20
let leafy = 20
let Leafx = 70

//left leaves function
function drawLeaf(leafx, leafy) {
  fill(18, 181, 121); //light green
  stroke(1, 50, 32); //dark green
  strokeWeight(2);
  beginShape();
  curveVertex(leafx, leafy); //20,20
  curveVertex(leafx, leafy); //20/, 20
  curveVertex(leafx + 10, leafy + 30); //30, 50
  curveVertex(leafx + 20, leafy + 50); //40,70
  curveVertex(leafx + 50, leafy + 50); //70,70
  curveVertex(leafx + 50, leafy + 30); //70,50
  curveVertex(leafx + 10, leafy + 10); //30, 30
  endShape(CLOSE);
}

//right leaves function
function drawrightLeaf(Leafx, leafy) {
  fill(18, 181, 121); //light green
  stroke(1, 50, 32); //dark green
  strokeWeight(2);
  beginShape();
  curveVertex(Leafx, leafy); //70,20
  curveVertex(Leafx, leafy); //70,20
  curveVertex(Leafx - 10, leafy + 30); //60,50
  curveVertex(Leafx - 20, leafy + 50); //50,70
  curveVertex(Leafx - 50, leafy + 50); //20,70
  curveVertex(Leafx - 50, leafy + 30); //20,50
  curveVertex(Leafx - 10, leafy + 10); //60,30
  endShape(CLOSE);
}

//   strokeWeight(5)
// point(70,20); //20 
// point(60,50); //30
// point(50,70); //40
// point(20,70); //70
// point(20,50); //70
// point(60,30); //30
