/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
//This function is loading all of my images in
function preload(){
  img_sun = loadImage('sun.png');
  img_uranus = loadImage('uranus.png');
  img_purple = loadImage('purple.png');
  img_green = loadImage('green.png');
  img_star = loadImage('star.png');
  img_blob = loadImage('blob.png');
}

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




//clock with no bounce
  let millis = obj.millis;
  let seconds = obj.seconds;
  let minutes = obj.minutes;
  let hours = obj.hours;
  let alarm = obj.seconds_until_alarm;


  let background_c = map(seconds, 0,59,0,50); //sets the background colour, makes it so that the background colour is always changing based on the seconds.

  if(alarm > 0 && alarm <5){ //if statement for the alarm
    background_c = map(alarm, 5, 0, 50, 240);
  }
  else if(alarm == 0){//creates the strobe effect when alarm is going off
    if(millis < 500) {
      background_c = 0;
    }
    else {
      background_c = (255,255,255);
    }
  }
  
  
  background(background_c); 
  //TEXT FOR DEBUGGING
  // fill(200); 
  // textSize(10);
  // textAlign(CENTER, CENTER);
  // text("Hours: " + hours, 40, 30);
  // text("Minutes: " + minutes, 40, 45);
  // text("Seconds: " + seconds, 40, 60);
  // text("Millis: " + millis, 40, 75);


  angleMode(RADIANS);//set the angle mode to radians so that I can use the sinwave to make my images bounce
  let bounce1 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase1 = sin(bounce1);
  let y_bounce1 = map(phase1, -1, 1, -3, 3);

  let bounce2 = map((obj.millis+100), 0, 999, 0, TWO_PI);
  let phase2 = sin(bounce2);
  let y_bounce2 = map(phase2, -2, 2, -4, 4);

  let bounce3 = map(obj.millis, 0, 999, 0, TWO_PI);
  let phase3 = sin(bounce3);
  let y_bounce3 = map(phase3, -3, 3, -5, 5);

  let bounce4 = map((obj.millis+100), 0, 999, 0, TWO_PI);
  let phase4 = sin(bounce4);
  let y_bounce4 = map(phase4, -4, 4, -6, 6);

  
  //STAR IMAGES, these 23 if statments control how many stars are on the screen based on what hour it is. These star images represent what the hour is.
  if (hours == 1){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
  }
  else if (hours == 2){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20, 20);
  }
  else if (hours == 3){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20);
  }
  else if (hours == 4){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20);
    image (img_star, 300, 45 + y_bounce4, 30,30);
  }
  else if (hours == 5){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
  }
  else if (hours == 6){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
  }
  else if (hours == 7){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
  }
  else if (hours == 8){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
  }
  else if (hours == 9){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
  }
  else if (hours == 10){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
  }
  else if (hours == 11){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
  }
  else if (hours == 12){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);
  }
  else if (hours == 13){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
  }
  else if (hours == 14){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
    image (img_star, 175, 300 + y_bounce2, 20,20);
  }
  else if (hours == 15){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
    image (img_star, 175, 300 + y_bounce2, 20,20);
    image (img_star, 260, 175 + y_bounce3, 20,20);
  }
  else if (hours == 16){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
    image (img_star, 175, 300 + y_bounce2, 20,20);
    image (img_star, 260, 175 + y_bounce3, 20,20);
    image (img_star, 150, 150 + y_bounce4, 30,30);
  }
  else if (hours == 17){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
    image (img_star, 175, 300 + y_bounce2, 20,20);
    image (img_star, 260, 175 + y_bounce3, 20,20);
    image (img_star, 150, 150 + y_bounce4, 30,30);
    image (img_star, 130, 330 + y_bounce1, 30,30);
  }
  else if (hours == 18){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
    image (img_star, 175, 300 + y_bounce2, 20,20);
    image (img_star, 260, 175 + y_bounce3, 20,20);
    image (img_star, 150, 150 + y_bounce4, 30,30);
    image (img_star, 130, 330 + y_bounce1, 30,30);
    image (img_star, 410, 270 + y_bounce2, 20,20);
  }
  else if (hours == 19){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
    image (img_star, 175, 300 + y_bounce2, 20,20);
    image (img_star, 260, 175 + y_bounce3, 20,20);
    image (img_star, 150, 150 + y_bounce4, 30,30);
    image (img_star, 130, 330 + y_bounce1, 30,30);
    image (img_star, 410, 270 + y_bounce2, 20,20);
    image (img_star, 660, 130 + y_bounce3, 20,20);
  }
  else if (hours == 20){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
    image (img_star, 175, 300 + y_bounce2, 20,20);
    image (img_star, 260, 175 + y_bounce3, 20,20);
    image (img_star, 150, 150 + y_bounce4, 30,30);
    image (img_star, 130, 330 + y_bounce1, 30,30);
    image (img_star, 410, 270 + y_bounce2, 20,20);
    image (img_star, 660, 130 + y_bounce3, 20,20);
    image (img_star, 630, 300 + y_bounce4, 30,30);
  }
  else if (hours == 21){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
    image (img_star, 175, 300 + y_bounce2, 20,20);
    image (img_star, 260, 175 + y_bounce3, 20,20);
    image (img_star, 150, 150 + y_bounce4, 30,30);
    image (img_star, 130, 330 + y_bounce1, 30,30);
    image (img_star, 410, 270 + y_bounce2, 20,20);
    image (img_star, 660, 130 + y_bounce3, 20,20);
    image (img_star, 630, 300 + y_bounce4, 30,30);
    image (img_star, 600, 275 + y_bounce1, 30,30);
  }
  else if (hours == 22){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
    image (img_star, 175, 300 + y_bounce2, 20,20);
    image (img_star, 260, 175 + y_bounce3, 20,20);
    image (img_star, 150, 150 + y_bounce4, 30,30);
    image (img_star, 130, 330 + y_bounce1, 30,30);
    image (img_star, 410, 270 + y_bounce2, 20,20);
    image (img_star, 660, 130 + y_bounce3, 20,20);
    image (img_star, 630, 300 + y_bounce4, 30,30);
    image (img_star, 600, 275 + y_bounce1, 30,30);
    image (img_star, 820, 100 + y_bounce2, 20,20);
  }
  else if (hours == 23){
    image (img_star, 90, 60 + y_bounce1, 30, 30);
    image (img_star, 230, 200 + y_bounce2, 20,20);
    image (img_star, 115, 400 + y_bounce3, 20,20,);
    image (img_star, 300, 45 + y_bounce4, 30, 30);
    image (img_star, 30, 260 + y_bounce1, 30, 30);
    image (img_star, 270, 430 + y_bounce2, 20,20);
    image (img_star, 550, 60 + y_bounce3, 20,20);
    image (img_star, 700, 200 + y_bounce4, 30,30);
    image (img_star, 575, 400 + y_bounce1, 30,30);
    image (img_star, 760, 45 + y_bounce2, 20,20);
    image (img_star, 900, 260 + y_bounce3, 20,20);
    image (img_star, 730, 430 + y_bounce4, 30,30);

    image (img_star, 120, 120 + y_bounce1, 30,30);
    image (img_star, 175, 300 + y_bounce2, 20,20);
    image (img_star, 260, 175 + y_bounce3, 20,20);
    image (img_star, 150, 150 + y_bounce4, 30,30);
    image (img_star, 130, 330 + y_bounce1, 30,30);
    image (img_star, 410, 270 + y_bounce2, 20,20);
    image (img_star, 660, 130 + y_bounce3, 20,20);
    image (img_star, 630, 300 + y_bounce4, 30,30);
    image (img_star, 600, 275 + y_bounce1, 30,30);
    image (img_star, 820, 100 + y_bounce2, 20,20);
    image (img_star, 860, 310 + y_bounce3, 20,20);
  }
  
  angleMode(DEGREES);//set the anglemode back to Degrees so that my planets can orbit normally.


  let sun_radius = map(hours, 0, 24, 80, 80);
  let hours_radius = map(hours, 0, 24, 0, 60);//map for the middle of the sun, which will get larger based on what the hour is
  fill(253, 179, 83);// orange
  noStroke ();
  image (img_sun, width/2 -40 , height/2 -40, sun_radius, 80);
  ellipse(width /2, height/2, hours_radius);
  let rotH = map(minutes + (seconds/1000.0), 0, 59, -90, 270); //rotation map for the minutes planet to follow
  let minutes_radius = map(minutes, 0, 59, 55, 55);


  push();//first push to move the minutes planet to where it needs to be
    translate(width/2, height/2);
    rotate(rotH);
    fill(140,255,251); //blue
    image (img_uranus, 150-27.5,0-27.5,minutes_radius,55);
    let rotM = map(seconds + (millis/1000.0), 0, 59, 0, 360);
    let seconds_radius = map(seconds, 0, 59, 35, 35);
    let rotS = map(millis, 0,999,0, 360)
    
        push(); //second push to move the seconds planet to where it needs to be
          translate (150,0);
          rotate (rotM);
          fill(175, 133, 255); //purple
          image (img_purple, 70-17.5,0-17.5,seconds_radius,35);  
          let millis_radius = map(millis, 0, 999, 15, 15);

                  push(); //third push to move the millis planet to where it needs to be
                    translate (70,0);
                    rotate (rotS);
                    fill(255, 165, 0); // orange
                    image (img_green, 30-7.5, 0-7.5, millis_radius, 15);
                
                  pop();

        pop ();  

  pop();
}