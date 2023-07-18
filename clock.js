/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
// creating random arrays
let randomList = [585, 526, 901, 119, 200, 523, 911, 182, 60, 125, 209, 482, 919, 837, 777, 731, 201, 940, 953, 772, 329, 871, 951, 415, 
  885, 614, 519, 580, 242, 9, 933, 864, 553, 323, 339, 882, 146, 811, 793, 736, 534, 723, 834, 10, 421, 672, 746, 330, 796, 11, 474, 669, 
  517, 584, 163, 661, 522, 79, 452, 516, 855, 19, 765, 673, 151, 285, 737, 130, 853, 450, 913, 131, 621, 273, 797, 711, 631, 761, 160, 674, 
  844, 427, 159, 81, 410, 838, 662, 887, 863, 38, 499, 920, 705, 960, 75, 543, 467, 219, 37, 169, 813, 698, 268, 426, 216, 15, 564, 706, 
  605, 587, 798, 821, 599, 808, 717, 369, 229, 494, 598, 250, 636, 724, 269, 848, 532, 184, 884, 816, 288, 76, 510, 468, 172, 866, 108, 
  577, 435, 74, 492, 387, 860, 690, 142, 930, 571, 166, 959, 651, 846, 817, 829, 883, 189, 251, 727, 684, 751, 726, 136, 787, 814, 231, 
  839, 109, 138, 148, 638, 344, 862, 396, 957, 234, 315, 576, 579, 602, 171, 857, 733, 906, 157, 152, 174, 44, 218, 535, 301, 784, 87, 
  144, 194, 490, 739, 275, 942, 310, 394, 533, 105, 316];

let xBuilding = [73, 330, 553, 126, 790, 10, 790, 704];
let yBuilding = [256, 272, 280, 347, 354, 267, 325, 309];
let widthBuilding = [104, 122, 195, 187, 161, 100, 96, 138];

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
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  var darkNightSky = color(17, 65, 102);
  var moonColor = color(230, 199, 23);
  var moonDot = color(171, 151, 39);
  var grey = color(99, 101, 102);
  var black = color(1, 4, 31);
  var lightBlueGrey = color(84, 105, 120);



  background(darkNightSky);

  // pulsing stars 
  var starsPulsing = 0;
  if (seconds % 2 == 0){ // every other millis, make transparency go other way
    starsPulsing = map(millis, 0, 999, 0, 255);
  } else{
    starsPulsing = map(millis, 0, 999, 255, 0);
  }
  var starsColor = color(230, 199, 23, starsPulsing);
  // drawing the stars 
  stroke(starsColor);
  strokeWeight(5);
  for (let i =0; i < 200; i+=2){
    point(randomList[i], randomList[i+1]);
  }

  // moon 
  noStroke();
  fill(moonColor); 
  ellipse(width / 2, height / 2 - 70, 350);

  // moon dots 
  fill(moonDot);
  ellipse(400, 230, 80); // big dot
  ellipse(350, 180, 30); // smaller 

  ellipse(480, 70, 70); // big dot
  ellipse(560, 120, 40); // medium 
  ellipse(520, 170, 20); // smaller 

  ellipse(530, 270, 40); // medium 

  // background buildings
  stroke(grey);
  strokeWeight(4);
  fill(black); 
  for (let i =0; i< 10; i++){
    let heightdiff = yBuilding[i];
    rect(xBuilding[i], yBuilding[i], widthBuilding[i], 200+heightdiff, 20); // 5th number is radius of corners
  }

  // three buildings 
  stroke(lightBlueGrey);
  rect(200, height-300, 150, 300, 20);
  rect(370, height-200, 210, 200, 20);
  rect(600, height-400, 200, 400, 20);

  // windows 
  // hours - left building 
  noStroke();
  var windowsGoingOn = 0;
  let hourscount = 0;
  let breakit = false;
  for (let i=1; i<=4; i++){
    for (let j=1; j<=6; j++){

      // how would you make this just work on the window being drawn and not all the other ones?
      if (seconds == 0 && minutes == 0){
        windowsGoingOn = map(millis, 0, 999, 0, 255);
        fill(230, 199, 23, windowsGoingOn);
      }else{
        fill(230, 199, 23, 255);
      }
      rect(175+(35*i), 175+(45*j), 25, 25, 5);
      
      if (hours == hourscount){
        breakit = true;
        break;
      }
      hourscount++;
    }
    if (breakit){
      break;
    }
  }

  // windows for minutes - middle building
  breakit = false;
  let minutescount = 0;
  for (let i=1; i<=10; i++){
    for (let j=1; j<=6; j++){

      // how would you make this just work on the window being drawn and not all the other ones?
      if (seconds == 0){
        windowsGoingOn = map(millis, 0, 999, 0, 255);
        fill(230, 199, 23, windowsGoingOn);
      }else{
        fill(230, 199, 23, 255);
      }
      rect(357+(20*i), 285+(29*j), 15, 25, 5);
      
      if (minutes == minutescount){
        breakit = true;
        break;
      }
      minutescount++;
    }
    if (breakit){
      break;
    }
  }

    // windows for seconds - right building
    breakit = false;
    let secondscount = 0;
    for (let i=1; i<=4; i++){
      for (let j=1; j<=15; j++){
  
        // how would you make this just work on the window being drawn and not all the other ones?
        if (millis == 0){
          windowsGoingOn = map(millis, 0, 999, 0, 255);
          fill(230, 199, 23, windowsGoingOn);
        }else{
          fill(230, 199, 23, 255);
        }
        rect(570+(45*i), 85+(25*j), 35, 20, 5);
        
        if (seconds == secondscount){
          breakit = true;
          break;
        }
        secondscount++;
      }
      if (breakit){
        break;
      }
    }
}
