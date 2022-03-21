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



  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
 let millis = obj.millis

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
  customColours.push(color(255, 0, 0)) // red 22
  customColours.push(color(255, 0, 63)) // redRedPink 23
  customColours.push(color(255, 0, 127)) // redPink 24
  customColours.push(color(255, 0, 191)) // redPinkPink 25
  customColours.push(color(255, 0, 255)) // pink 26
  customColours.push(color(220, 0, 255)) // pinkPinkPurple 27
  customColours.push(color(191, 0, 255)) // pinkPurple 28

  let howManyColours = customColours.length;

  let minutesColourMap = int(map(obj.minutes, 0,59, 0, howManyColours-1))
 let hoursColourMap = int(map(obj.hours, 0, 23, 0, howManyColours-1))




  noStroke();
  fill(customColours[minutesColourMap]); // dark aqua circle thats minutes hand -- I want to put minuteColour in here
  ellipse(480, 250, 400);
  fill(255, 179, 110); //  lolly orange
  ellipse(480, 250, 350); // circle that removes green center

  fill(customColours[hoursColourMap]); // dark blue circle thats hour hand --  I want to put hourColour in here
  ellipse(480, 250, 300); // centre
  fill(255, 179, 110); //  lolly orange
  ellipse(480, 250, 250); // circle that removes blue centre center

  /// Hour text signs

  fill(97, 139, 255); // lighter blue than before
  ellipse(480, 40, 75) // hour 12 circle spray paint

  fill(255, 179, 110); // lolly orange
  textSize(50);
  textAlign(CENTER, CENTER)
  text("12", 477, 40); // 12 hour text


  fill(255, 217, 122); // pastel yellow
  ellipse(690, 250, 75) // hour 3 circle spray paint

  fill(255, 179, 110); // lolly orange
  textSize(50);
  textAlign(CENTER, CENTER)
  text("3", 690, 250); // 12 hour text


  fill(122, 255, 209) // pastel green
  ellipse(480, 460, 75); // hour 6 circle spray paint

  fill(255, 179, 110); // lolly orange
  textSize(50);
  textAlign(CENTER, CENTER)
  text("6", 480, 461); // 12 hour text


  fill(255, 127, 97); // pastel red
  ellipse(270, 250, 75) // hour 9 circle spray paint

  fill(255, 179, 110); // lolly orange
  textSize(50);
  textAlign(CENTER, CENTER)
  text("9", 270, 250); // 12 hour text




let hourCanMap = map(obj.hours,0,23,0,12);
let minuteCanMap = map(obj.minutes,0,59,0,6)

push();
translate(width/2,height/2);
rotate(hourCanMap);
imageMode(CENTER);
image(hourCan3, 0,0);
pop();
push();
translate(width/2,height/2);
rotate (minuteCanMap);
imageMode(CENTER);
image(minuteCan3,0,0);
pop();



}
