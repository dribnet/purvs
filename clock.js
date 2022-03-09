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

    background(255,179,110); //  lolly orange



// when the variables are moved up here the whole clock just goes blank.

  noStroke();
  fill(95, 179, 150);// dark aqua circle thats minutes hand -- I want to put minuteColour in here
  ellipse(480, 250, 400);
  fill(255,179,110);  //  lolly orange
  ellipse(480,250,350); // circle that removes green center

  fill(59, 91, 179); // dark blue circle thats hour hand --  I want to put hourColour in here
  ellipse(480, 250, 300); // centre
  fill(255,179,110);  //  lolly orange
  ellipse(480,250,250); // circle that removes blue centre center

/// Hour text signs

  fill(97,139,255); // lighter blue than before
  ellipse(480, 40,75) // hour 12 circle spray paint

  fill(255,179,110); // lolly orange
  textSize(50);
  textAlign(CENTER,CENTER)
  text("12", 477, 40); // 12 hour text


  fill(255,217,122); // pastel yellow
  ellipse(690, 250,75) // hour 3 circle spray paint

  fill(255,179,110); // lolly orange
  textSize(50);
  textAlign(CENTER,CENTER)
  text("3", 690, 250); // 12 hour text


  fill(122, 255, 209) // pastel green
  ellipse(480, 460, 75); // hour 6 circle spray paint

  fill(255,179,110); // lolly orange
  textSize(50);
  textAlign(CENTER,CENTER)
  text("6", 480, 461); // 12 hour text


  fill(255,127,97); // pastel red
  ellipse(270, 250,75) // hour 9 circle spray paint

  fill(255,179,110); // lolly orange
  textSize(50);
  textAlign(CENTER,CENTER)
  text("9", 270, 250); // 12 hour text


  fill(500); // white
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Le clock", width / 2, 200);

// images
// these images are going to act as the hour and minute hands.
// i thought that by using the same image code as i did last year it would work.
// I can't figure ot how to get the images to show.


let firstRun = true
let hourCan = [];
let minuteCan = [];


if (firstRun) {
rectMode(CENTER);
  hourCan.push(loadImage('hourCan.png'));
  minuteCan.push(loadImage('minuteCan.png'));

  firstRun = false

}
// minute and hour hand varibales

  let hours = obj.hours;
  let minutes = obj.minutes;
 let seconds = obj.seconds;
  let millis = obj.millis
  let alarm = object.seconds_until_alarm


  // minute and hour hands / circles
// this is the code that Phobe created On the class of 10/03, I thought it would be useful in my colorMode
// I've used this code as i want my Hour circle and minute circle to change colour with time.
  let blue = color(0, 89, 255);
  let yellow = color(255, 175, 0);
  let minuteMap = map(minutes, 0, 59, 0, 1);
 let hourMap = map(hours, 0, 23, 0, 1);
  let minuteColour = lerpColor(blue, yellow, minuteMap);
  let hourColour = lerpColor(yellow, blue, hourMap);
