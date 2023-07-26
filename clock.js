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

let imgLamp;
function preload(){
  imgLamp = loadImage('img/street_light2.png');
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
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  var grey = color(99, 101, 102);
  var black = color(1, 4, 31);
  var lightBlueGrey = color(84, 105, 120);
  var blackSky = color(24, 5, 120);
  var blueSky = color(27, 125, 245);

  // changing the background according to the time of day. 
  let currentColor = color(0);

  if (hours > 6 && hours <= 9){
    currentColor = lerpSkyColor(blackSky, blueSky, 6.0, 9.0, hours)
  }
  else if (hours > 9 && hours <= 18){
    currentColor = blueSky;
  }
  else if (hours > 18 && hours <= 21){
    currentColor = lerpSkyColor(blueSky, blackSky, 18.0, 21.0, hours)
  }
  else{
    currentColor = blackSky;
  }

  // brackground gradient because city causes it to always be a little light 
  for(let y = 0; y < height; y++){
    var n = map(y, 0, height, 0, 1);
    let newc = lerpColor(currentColor, color(200), n);
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

  // drawing the stars or the clouds 
  noStroke();
  for (let i =0; i < 200; i+=2){
    if (hours < 6 || hours > 18) { // night time
      fill(starsColor1);
      star(randomList[i], randomList[i+1], 5, 11.6, 3);    
      fill(starsColor2);
      star(randomList[i], randomList[i+1], 11.6, 5, 3);
    } else{
      // reset to start
      let secondsResetsAfterFive = (seconds + randomList[i]) % 20;
      let secondsWithFraction = secondsResetsAfterFive + (millis / 1000.0);

      let startX = map(secondsWithFraction, 0, 10, -240, width+240);

      drawCloud(startX*0.5, randomList[i+1]);

    }
  }

  // moving moon and sun 
  let hoursFraction = hours + (minutes / 60.0);
  if (hours < 6){ // moving down MOON in the morning 
    drawMoon(map(hoursFraction, 0, 5, -50, 200));
  } else if (hours > 17){ // moving up MOON in the evening 
    drawMoon(map(hoursFraction, 18, 23, 500, 150));
  } else if (hours > 6 && hours < 13){ // moving up SUN in the morning 
    drawSun(map(hoursFraction, 7, 11, 500, 150));
  } else {
    drawSun(map(hoursFraction, 13, 17, 150, 150)); // moving down SUN in the afternoon
  }
  

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
  windows(hours, 4, 6, 175, 35, 175, 45, 25, 25);

  // windows for minutes - middle building
  windows(minutes, 10, 6, 357, 20, 285, 29, 15, 25);

  // windows for seconds - right building
  windows(seconds, 4, 15, 570, 45, 85, 25, 35, 20);

  // street lights
  if (hours < 6 || hours > 18) { // night time
    tint(255);
    for (let i =20; i< width; i+=170){
      image(imgLamp, i, height-90, 100, 100);
    }
  } else{
    tint(100);
    for (let i =20; i< width; i+=170){
      image(imgLamp, i, height-90, 100, 100);
    }
  }
  
}

// Creating windows in their respective areas and buildings, placing them randomly. 
function windows(time, iMax, jMax, x, x1, y, y1, width, height){
  // make random window placements when they turn on 
  let windowPlacement = [];
  for (let i = 1; i <= iMax; i++){
    for (let j = 1; j <= jMax; j++){
      windowPlacement.push(new p5.Vector(x+(x1*i), y+(y1*j))); // a vector is an object carrying x, y and z coordinates 
    }
  }
  shuffleArray(windowPlacement); 

  // draw windows 
  let timecount = 0;
  for (let i=0; i < windowPlacement.length; i++){
    fill(230, 199, 23, 255);
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

// from ChatGBT 
function drawCloud(x, y) {
  noStroke();
  fill(255, 255, 255, 50); // Set the color of the cloud to white

  var step = 100 / (6 - 1); // Calculate the horizontal spacing between circles
  var offset = 100 / 6; // Offset to center the cloud

  // Loop through and draw the circles that form the cloud
  for (var i = 0; i < 6; i++) {
    var cx = x - 100 / 2 + i * step;
    var cy = y + cos(i * PI / (6 - 1)) * 100 / 4;
    var diameter = 100 / 2 - abs(cy - y) + offset;

    ellipse(cx, cy, diameter);
  }
}

// to change background according to time from https://stackoverflow.com/questions/60196138/lerp-background-colour-based-on-time-of-day 
function lerpSkyColor(from, to, startTime, endTime, hours){
  const lerpAmt = map(hours, startTime, endTime, 0, 1)
  return lerpColor(color(from), color(to), lerpAmt)
}

// My own function which draws a moon and moves according to the y coordinate 
function drawMoon(moveY){
  var moonColor = color(230, 199, 23);
  var moonDot = color(171, 151, 39);
  fill(moonColor); 
  ellipse(width / 2, height / 2 - 70 + moveY, 350);

  // moon dots 
  fill(moonDot);
  ellipse(400, 230 + moveY, 80); // big dot
  ellipse(350, 180 + moveY, 30); // smaller 

  ellipse(480, 70 + moveY, 70); // big dot
  ellipse(560, 120 + moveY, 40); // medium 
  ellipse(520, 170 + moveY, 20); // smaller 

  ellipse(530, 270 + moveY, 40); // medium 
}

// from ChatGBT and modified it
function drawSun(moveY) {
  let numRays = 50;
  let sunRadius = 175;
  let x = width / 2;
  let y = height / 2 - 70 + moveY;
  noStroke();
  fill(230, 199, 23); // Set the color of the sun to yellow

  // Calculate the angle between each ray
  var angleStep = TWO_PI / numRays;

  strokeWeight(5);
  stroke(245, 185, 88); // light orange
  // Draw sun rays using lines
  for (var i = 0; i < numRays; i++) {
    var angle = i * angleStep;

    // Calculate the start and end points of each ray
    var startX = x + cos(angle) * sunRadius;
    var startY = y + sin(angle) * sunRadius;
    var endX = x + cos(angle + PI) * (sunRadius + sunRadius / 2);
    var endY = y + sin(angle + PI) * (sunRadius + sunRadius / 2);

    line(startX, startY, endX, endY);
  }

  // Draw the sun's body as an ellipse
  ellipse(x, y, sunRadius * 2);
}
