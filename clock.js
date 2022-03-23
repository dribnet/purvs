/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let hourCan3;
let minuteCan3;
function preload(){

hourCan3 = loadImage('hourCan3.png');
minuteCan3 = loadImage('minuteCan3.png');


}


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



  background(255, 179, 110); //  lolly orange

// brick background
  push();
  stroke(135,0,0);
  strokeWeight(5);

  line(1000,50,0,50); // horizontal
  line(1000,150,0,150); // horizontal
  line(1000,250,0,250); // horizontal
  line(1000,350,0,350); // horizontal
  line(1000,450,0,450); // horizontal

//**************GROUP1*************
//*************VERTICAL************

  line(50,50,50,0)// set one
  line(50,150,50,250) // set one
  line(50,350,50,450) // set one

  line(300,50,300,0)// set two
  line(300,150,300,250) // set two
  line(300,350,300,450) // set two

  line(550,50,550,0)// set three
  line(550,150,550,250) // set three
  line(550,350,550,450) // set three


  line(800,50,800,0)// set four
  line(800,150,800,250) // set four
  line(800,350,800,450) // set four

//**************GROUP2*************
//*************VERTICAL************

  line(175,150,175,50)// set one
  line(175,350,175,250)// set one
  line(175,550,175,450)// set one

  line(425,150,425,50) // set two
  line(425,350,425,250) // set two
  line(425,550,425,450) // set two

  line(675,150,675,50) // set three
  line(675,350,675,250) // set three
  line(675,550,675,450) // set three

  line(925,150,925,50) // set four
  line(925,350,925,250) // set four
  line(925,550,925,450) // set four

  pop();

//hour variables
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
 let millis = obj.millis;
 let alarm = obj.seconds_until_alarm;

//colour array
  let customColours = []
  customColours.push(color(127, 0, 255)) // purple 1
  customColours.push(color(85, 0, 255)) // purplePurpleBlue 2
  customColours.push(color(63, 0, 255)) // purpleBlue 3
  customColours.push(color(31, 0, 255)) // purpleBlueBlue 4
  customColours.push(color(0, 0, 255)) // blue 5
  customColours.push(color(0, 127, 255)) // blueBlueGreen 6
  customColours.push(color(0, 255, 255)) // blueGreen 7
  customColours.push(color(0, 255, 127)) // blueGreenGreen 8
  customColours.push(color(0, 255, 0)) // green 9
  customColours.push(color(63, 255, 0)) // greenGreenYellow 10
  customColours.push(color(127, 255, 0)) // greenYellow 11
  customColours.push(color(191, 255, 0)) // greenYellowYellow 12
  customColours.push(color(255, 255, 0)) // yellow 13
  customColours.push(color(255, 102, 0)) // yellowYellowOrange 14
  customColours.push(color(255, 205, 0)) // yellowOrange 15
  customColours.push(color(255, 175, 0)) // yellowOrangeOrange 16
  customColours.push(color(255, 155, 0)) // orange 17
  customColours.push(color(255, 100, 0)) // orangeOrangeRed 18
  customColours.push(color(255, 77, 0)) // orangeRed 19
  customColours.push(color(255, 37,0 )) // orangeRedRed 20
  customColours.push(color(255, 0, 0)) // red 21
  customColours.push(color(255, 0, 63)) // redRedPink 22
  customColours.push(color(255, 0, 127)) // redPink 23
  customColours.push(color(255, 0, 191)) // redPinkPink 24
  customColours.push(color(255, 0, 255)) // pink 25
  customColours.push(color(220, 0, 255)) // pinkPinkPurple 26
  customColours.push(color(191, 0, 255)) // pinkPurple 27

  //Should i cut this down to 24?

  let howManyColours = customColours.length;

  let minutesColourMap = int(map(obj.minutes, 0,59, 0, howManyColours-1))
 let hoursColourMap = int(map(obj.hours, 0, 23, 0, howManyColours-1))


/// **********OLD CODE***************

// Minute spray paint can (hand)

//  fill(customColours[minutesColourMap]); // dark aqua circle thats minutes hand
//  ellipse(480, 250, 400);
//  fill(255, 179, 110); //  lolly orange
//  ellipse(480, 250, 350); // circle that removes green center

//hour spray paint can (hand)
  //fill(customColours[hoursColourMap]); // dark blue circle thats hour hand
  //ellipse(480, 250, 300); // centre
//  fill(255, 179, 110); //  lolly orange
//  ellipse(480, 250, 250); // circle that removes blue centre center


noStroke();
//Hour and minute hand maps

let hourCanMap = map(obj.hours,0,23,0,12.56); // map for spray paint Can which will be the hour hand
let minuteCanMap = map(obj.minutes,0,59,0,6.28) // map for spray paint Can which will be the minute hand

//minute paint
// Phoebe gave me this code my orignal is below

//let minArcLegth = map(obj.minutes, 0, 59, 3.76) // first I thought to change how the arc is drawn.
let hourArcLegth = map(obj.hours,0,23,0,12.56)
let minArcLegth = map(obj.minutes,0,59,0,6.28) // added presision is needed, 6 does not work here.
push();
strokeJoin(ROUND);
strokeWeight(30);
noFill();
translate(490, 400);
line (0,0,1000,1)
stroke(customColours[minutesColourMap]);
translate(-10, -150)
rotate(-3.14/2)
arc(0, 0, 370, 370, 0, minArcLegth); // so this is the simplest option
pop();
// end of phoebes code

// hour paint
push();
strokeJoin(ROUND);
strokeWeight(30);
noFill();
translate(490, 400);
line (0,0,1000,1)
stroke(customColours[hoursColourMap]);
translate(-10, -150)
rotate(-3.14/2)
arc(0, 0, 280, 280, 0, hourArcLegth);
pop();


//My Orignal code

//push();
//strokeJoin(ROUND);
//strokeWeight(30);
//noFill();
//translate(490, 400);

//let amil1 = map(minutes, 0, 59, 0, 6);
//stroke(customColours[minutesColourMap]);
//arc(-10, -150, 370, 370,0, minuteCanMap); // 110
//pop();

/// Hour text signs 12, 3, 6, 9
textFont('Impact');

//12
fill(97, 139, 255); // lighter blue than before
ellipse(480, 40, 90) // hour 12 circle spray paint
ellipse(485,75,40) // paint
ellipse(460,65,40,60)// paint
ellipse(510,60,30,50)// paint
ellipse(502,90,20,30)// paint
ellipse(502,90 + millis,10) // paint drips
ellipse(460,40 + millis/2 ,10) // paints drips
ellipse(482,70 + millis/3,10)// paints drips

fill(255, 179, 110); // lolly orange
textSize(50);
textAlign(CENTER, CENTER)
text("12", 477, 40); // 12 hour text
//********************

//3
fill(255, 217, 122); // pastel yellow
ellipse(690, 250, 90) // hour 3 circle spray paint
ellipse(695,285,40) // paint
ellipse(670,275,40,60)// paint
ellipse(720,270,30,50)// paint
ellipse(712,300,20,30)// paint
ellipse(712,300 + millis,10) // paint drips
ellipse(670,250 + millis/2 ,10) // paints drips
ellipse(692,280 + millis/3,10)// paints drips

fill(255, 179, 110); // lolly orange
textSize(50);
textAlign(CENTER, CENTER)
text("3", 690, 250); // 12 hour text
//********************

//6
fill(122, 255, 209) // pastel green
ellipse(480, 460, 90); // hour 6 circle spray paint
ellipse(485,495,40) // paint
ellipse(460,485,40,60)// paint
ellipse(510,480,30,50)// paint
ellipse(502,510,20,30)// paint
// no need for drips

fill(255, 179, 110); // lolly orange
textSize(50);
textAlign(CENTER, CENTER)
text("6", 480, 461); // 12 hour text
//********************

//9
fill(255, 127, 97); // pastel red
ellipse(270, 250, 90) // hour 9 circle spray paint
ellipse(275,285,40) // paint
ellipse(250,275,40,60)// paint
ellipse(300,270,30,50)// paint
ellipse(292,300,20,30)// paint
ellipse(292,300 + millis,10) // paint drips
ellipse(250,250 + millis/2 ,10) // paints drips
ellipse(272,280 + millis/3,10)// paints drips

fill(255, 179, 110); // lolly orange
textSize(50);
textAlign(CENTER, CENTER)
text("9", 270, 250); // 12 hour text


//The images of the spray paint cans (hour and minute hands)
//rotation code

push(); // spray paint can, minute hand
translate(width/2,height/2);
rotate (minuteCanMap);
imageMode(CENTER);
image(minuteCan3,0,0);
pop();
push(); // spray paint can, hour hand
translate(width/2,height/2);
rotate(hourCanMap);
imageMode(CENTER);
image(hourCan3, 0,0);
pop();

//seconds corner counter green circle etc

let moveSecondsText = 0; // moves seconds text to center if single digit
if(obj.seconds <10){
  moveSecondsText = 0;
}

push();
fill(60,255,59); // bright green
ellipse(150,100,140) // main circle
ellipse(155,135,70) // paint
ellipse(125,150,40,70)// paint
ellipse(150,160,30,70)// paint
ellipse(172,150,60,70)// paint
ellipse(120,50,60) // paint
ellipse(180,40,40) // paint
ellipse(85,100,30,40) // paint
ellipse(210,120,40,50) // paint
ellipse(172,150 + millis,10) // paint drips
ellipse(130,150 + millis/2 ,10) // paints drips
ellipse(152,180 + millis/3,10)// paints drips

textSize(80);
fill(255, 179, 110); // lolly orange
text(obj.seconds, 150 + moveSecondsText,100);
pop();

//alarm

if(alarm < 0) {
// nothing happens, no countdown, nothing.
}
else if(alarm == 0 && millis > 500) {
  // blue
  fill(255,0,0,100);
  ellipse(480,250,0 + millis/2);


  fill(255,0,0); // bright red
  strokeWeight(8)
  stroke(255);
  textSize(1 + millis/4); // text increses in size, this text is the biggiest and in the middle
  textAlign(CENTER, CENTER);
  textFont('Impact');
    text("WAKE UP!!!",480, 250); // thought that these words would be appropriate.

    textSize(0 + millis/8);
    text("WAKE UP!!!",480 - millis/3, 450); // bottom left

    textSize(0 + millis/8);
    text("WAKE UP!!!",480 + millis/3, 450);// bottom right

    textSize(0 + millis/8);
    text("WAKE UP!!!",480 + millis/3, 50); // top right

    textSize(0 + millis/8);
    text("WAKE UP!!!",480 - millis/3, 50); //top left

}




 // experiment

//push();
//strokeJoin(ROUND);
//strokeWeight(10);
//noFill();
//translate(480, 300);
//let amil = map(hours, 0, 23, 0, 12);
//stroke(hoursColourMap);
//arc(-10, -150, 140, 140, 0, amil);
//pop();









}
