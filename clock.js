/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
// creating random arrays
const randomList = [585, 526, 901, 119, 200, 523, 911, 182, 60, 125, 209, 482, 919, 837, 777, 731, 201, 940, 953, 772, 329, 871, 951, 415, 
  885, 614, 519, 580, 242, 9, 933, 864, 553, 323, 339, 882, 146, 811, 793, 736, 534, 723, 834, 10, 421, 672, 746, 330, 796, 11, 474, 669, 
  517, 584, 163, 661, 522, 79, 452, 516, 855, 19, 765, 673, 151, 285, 737, 130, 853, 450, 913, 131, 621, 273, 797, 711, 631, 761, 160, 674, 
  844, 427, 159, 81, 410, 838, 662, 887, 863, 38, 499, 920, 705, 960, 75, 543, 467, 219, 37, 169, 813, 698, 268, 426, 216, 15, 564, 706, 
  605, 587, 798, 821, 599, 808, 717, 369, 229, 494, 598, 250, 636, 724, 269, 848, 532, 184, 884, 816, 288, 76, 510, 468, 172, 866, 108, 
  577, 435, 74, 492, 387, 860, 690, 142, 930, 571, 166, 959, 651, 846, 817, 829, 883, 189, 251, 727, 684, 751, 726, 136, 787, 814, 231, 
  839, 109, 138, 148, 638, 344, 862, 396, 957, 234, 315, 576, 579, 602, 171, 857, 733, 906, 157, 152, 174, 44, 218, 535, 301, 784, 87, 
  144, 194, 490, 739, 275, 942, 310, 394, 533, 105, 316];

const xBuilding = [73, 330, 553, 126, 790, 10, 790, 704];
const yBuilding = [256, 272, 280, 347, 354, 267, 325, 309];
const widthBuilding = [104, 122, 195, 187, 161, 100, 96, 138];

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
  for(let y=0; y<height; y++){
    var n = map(y, 0, height, 0, 1);
    let newc = lerpColor(darkNightSky, color(235), n);
    stroke(newc);
    line(0, y, width, y);
  }

  // pulsing stars 
  var starsPulsing = 0;
  var starsPulsing2 = 0;
  if (seconds % 2 == 0){ // every other millis, make transparency go other way
    starsPulsing = map(millis, 0, 999, 50, 200);
  } 
  else{
    starsPulsing = map(millis, 0, 999, 200, 50);
  }
  if (seconds % 2 == 0){
    starsPulsing2 = map(millis, 0, 999, 200, 50);
  } 
  else{
    starsPulsing2 = map(millis, 0, 999, 50, 200);
  }

  var starsColor1 = color(230, 199, 23, starsPulsing);
  var starsColor2 = color(230, 199, 23, starsPulsing2);

  // drawing the stars 
  noStroke();
  for (let i =0; i < 200; i+=2){
    fill(starsColor1);
    star(randomList[i], randomList[i+1], 5, 11.6, 3);
    fill(starsColor2);
    star(randomList[i], randomList[i+1], 11.6, 5, 3);
  }

  // moon
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
    // background building windows 
    stroke(163, 162, 93); // dark yellow 
    strokeWeight(2);
    rect(xBuilding[i]+10, yBuilding[i]+10, widthBuilding[i]-50, 200, 5);
    stroke(grey);
    strokeWeight(4);
  }

  // three buildings 
  stroke(lightBlueGrey);
  rect(200, height-300, 150, 300, 20);
  rect(370, height-200, 210, 200, 20);
  rect(600, height-400, 200, 400, 20);

  // windows 
  // hours - left building 
  noStroke();
  windows(millis, hours, 4, 6, 175, 35, 175, 45, 25, 25);

  // windows for minutes - middle building
  windows(millis, minutes, 10, 6, 357, 20, 285, 29, 15, 25);

  // windows for seconds - right building
  windows(millis, seconds, 4, 15, 570, 45, 85, 25, 35, 20);
}

// Creating windows in their respective areas and buildings, placing them randomly. 
function windows(millis, time, iMax, jMax, x, x1, y, y1, width, height){
  // fade in windows 
  var windowsGoingOn = map(millis, 0, 999, 0, 255);
  // make random window placements when they turn on 
  let windowPlacement = [];
  for (let i = 1; i <= iMax; i++){
    for (let j = 1; j <= jMax; j++){
      windowPlacement.push(new p5.Vector(x+(x1*i), y+(y1*j))); // a vector is an object carrying x, y and z coordinates 
    }
  }
  shuffleArray(windowPlacement); 
  
  let maxTime = iMax * jMax;

  let timecount = 0;
  for (let i=0; i < windowPlacement.length; i++){

    // how would you make this just work on the window being drawn and not all the other ones?
    if (i == time){
      fill(230, 199, 23, windowsGoingOn); 
      // could add this to some text of the actual time. blinking. 
    }else{
      fill(230, 199, 23, 255);
    }
    rect(windowPlacement[i].x, windowPlacement[i].y, width, height, 5);
    
    if (time == timecount){
      break;
    }
    timecount++;
  }
}

// Function to shuffle the elements in the array according to the Fisher-Yates shuffle algorithm and adding a random numbers array
function shuffleArray(arr) {
  let randomNumbers = [0.23405879432578, 0.9085432875432, 0.4325876215437281, 0.5467358362, 0.3459867189257438, 0.534672895, 0.23459876432590,
                      0.345982754893027, 0.44568784392057483, 0.74583920574893, 0.954738234, 0.32490578489032, 0.45937589430257, 0.5437892057849, 0.12349867290157];
  let count = 0;
  let currentIndex = arr.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining index randomly
    let randomIndex = Math.floor(randomNumbers[count] * currentIndex); // the random number is where the random function would go 
    currentIndex--;

    if (count == 14){
      count = 0;
    }else{
      count++;
    }

    // Swap the current element with the random element
    let temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }
}

//star function from p5.js reference
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}