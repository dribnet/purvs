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
 
  //waterdrops positioning
  let xposDrop = [30,30,50,50,80,100,120,150,160,160,190,210,240,250,260,280,300,300,350,350,380,380,390,390,450,510,550,550]; //x position for the water drops for 0-59 seconds

  drawWaterdrops (xposDrop[0],20); //1 //30,20
  drawWaterdrops (xposDrop[1], 430); //2 //30,430
  drawWaterdrops (xposDrop[2], 160); //3 //50,160
  drawWaterdrops (xposDrop[3], 300); //4 //50,300
  drawWaterdrops (xposDrop[4], 80); //5 //80,80
  drawWaterdrops (xposDrop[5], 370); //6 //100,370
  drawWaterdrops (xposDrop[6], 210); //7 //120,210
  drawWaterdrops (xposDrop[7], 30); //8 //150,30
  drawWaterdrops (xposDrop[8], 320); //9 //160,320
  drawWaterdrops (xposDrop[9], 450); //10 //160,450
  drawWaterdrops (xposDrop[10], 130); //11 //190,130
  drawWaterdrops (xposDrop[11], 230); //12 //210,230
  drawWaterdrops (xposDrop[12], 10); //13 //240,10
  drawWaterdrops (xposDrop[13], 430); //14 //250,430
  drawWaterdrops (xposDrop[14], 310); //15 //260,310
  drawWaterdrops (xposDrop[15], 50); //16 //280,50
  drawWaterdrops (xposDrop[16], 150); //17 //300,150
  drawWaterdrops (xposDrop[17], 380); //18 //300,380
  drawWaterdrops (xposDrop[18], 20); //19 //350,20
  drawWaterdrops (xposDrop[19], 250); //20 //350,250
  drawWaterdrops (xposDrop[20], 100); //21 //380,100
  drawWaterdrops (xposDrop[21], 320); //22 //380,320
  drawWaterdrops (xposDrop[22], 190); //23 //390,190
  drawWaterdrops (xposDrop[23], 420); //24 //390,420
  drawWaterdrops (xposDrop[24], 20); //25 //450,20
  drawWaterdrops (xposDrop[25], 10); //26 //510,10
  drawWaterdrops (xposDrop[26], 300); //27 //550,300
  drawWaterdrops (xposDrop[27], 80); //28 //550,80
  drawWaterdrops (560, 180); //29 //560,180
  drawWaterdrops (580, 430); //30 //580,430
  drawWaterdrops (590, 20); //31 //590,20
  drawWaterdrops (600, 230); //32 //600,230
  drawWaterdrops (600, 100); //31 //600,100
  drawWaterdrops (610, 350); //32 //610,350
  drawWaterdrops (650, 170); //33 //650,170
  drawWaterdrops (660, 40); //34 //660,40
  drawWaterdrops (670, 270); //35 //670,270
  drawWaterdrops (680, 440); //36 //680,440
  drawWaterdrops (700, 350); //37 //700,350
  drawWaterdrops (710, 10); //38 //710,10
  drawWaterdrops (720, 110); //39 //720,110
  drawWaterdrops (730, 200); //40 //730,200
  drawWaterdrops (760, 280); //41 //760,280
  drawWaterdrops (770, 400); //42 //770,400
  drawWaterdrops (790, 30); //43 //790,30
  drawWaterdrops (800, 150); //44 //800,150
  drawWaterdrops (840, 250); //45 //840,250
  drawWaterdrops (850, 80); //46 //850,80
  drawWaterdrops (860, 350); //47 //860,350
  drawWaterdrops (880, 180); //48 //880,180
  drawWaterdrops (900, 450); //49 //900,450
  drawWaterdrops (900, 20); //50 //900,20
  drawWaterdrops (930, 120); //51 //930,120
  drawWaterdrops (920, 300); //52 //920, 300
  drawWaterdrops (820, 450); //53 //820,450
  drawWaterdrops (10, 250); //54 //10,250
  drawWaterdrops (290, 240); //55 //290,240
  drawWaterdrops (130, 140); //56 //130,140
  drawWaterdrops (200, 380); //57 //200,380
  drawWaterdrops (330, 460); //58 //330,460
  drawWaterdrops (20, 100); //59 //20,100
 
 

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


 

}

let leafx = 20;
let leafy = 20;
let Leafx = 70;
let dropx = 60;
let dropy = 60;

//left leaves function
function drawLeaf(leafx, leafy) {
  fill(18, 181, 121); //light green
  stroke(1, 50, 32); //dark green
  strokeWeight(1.5);
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
  strokeWeight(1.5);
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


 function drawWaterdrops(dropx, dropy) {

  fill(27, 149, 224);
  noStroke();
  beginShape();
  curveVertex(dropx,dropy); //top //60,60
  curveVertex(dropx, dropy); //top //60,60
  curveVertex(dropx + 5, dropy +25); //right side //65,85
  curveVertex(dropx, dropy + 30); //bottom //60,90
  curveVertex(dropx - 5, dropy + 25); //left side //55,85
  endShape(CLOSE);

//   //waterdrops
//   // strokeWeight(5);
//   // point(60, 60); //top
//   // point(75, 95); //right
//   // point(60, 110); //bottom
//   // point(45, 95); //left

//   //waterdrops

//   fill(27, 149, 224);
//   noStroke();
//   beginShape();
//   curveVertex(dropx,dropy); //top //60,60
//   curveVertex(dropx,dropy); //top //60,60
//   curveVertex(dropx + 15,dropy + 35); //right side //75,95
//   curveVertex(dropx, dropy + 50); //bottom //60,110
//   curveVertex(dropx - 15, dropy+35); //left side //45,95
//   endShape(CLOSE);

 }
