var scl = 5; //scale to multiply by
var rainAmt = 40 // the amount of rain to apply (larger number = less rain)

var maskLines = [];  //array of horizontal lines 
var rain = []; //array of random vertical lines

var num = 0; // a counter 

var xSZ = 216; //width (x Size)
var ySZ = 384; //heigh (y Size)

sourceImg = null;
maskImg = null;

function randomize(array) { //randomize the array
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
}

function preload() {
  sourceImg = loadImage("3.jpg");
  maskImg = loadImage("3.png");
}

function setup() {
  main_canvas = createCanvas(xSZ * scl, ySZ * scl);
  main_canvas.parent('canvasContainer');

  
  imageMode(CENTER);
  background(20);
  sourceImg.loadPixels();
  maskImg.loadPixels();

  for (i = 0; i < ySZ; i++) { //nested loop that goes through each pixel
    for (j = 0; j < xSZ; j++) {
      rain[i * xSZ + j] = [];  //creates an array at each pixel
      rain[i * xSZ + j][0] = j * scl; //stores x as first value in each pixel of the array
      rain[i * xSZ + j][1] = i * scl; //stores y as second value in each pixel of the array

      pix = sourceImg.get(rain[i * xSZ + j][0], rain[i * xSZ + j][1]); 
      mask = maskImg.get(rain[i * xSZ + j][0], rain[i * xSZ + j][1]);

      if (mask[0] > 50) { //when mask brigthness is greater that 50 take that pixels x and y and store it in a the maskLines array
        maskLines[num] = []; //creates an array at num 
        maskLines[num][0] = rain[i * xSZ + j][0] * scl; //
        maskLines[num][1] = rain[i * xSZ + j][1] * scl;
        num++;
      } else {

      }
    }
  }
  rain = randomize(rain); //randomize rain array
}



function draw() {

  for (c = 0; c < rain.length / rainAmt; c++) {
    let alphaValue = random(50,255); //chooses a random alpha level to apply to the rain
    let r = random(25); //random value for the length of the rain
    stroke(190, alphaValue);
    strokeWeight(1);
  
    line(rain[c][0], rain[c][1], rain[c][0], rain[c][1] + r);
  }
  for (num = 0; num < maskLines.length - 1; num++) {
    stroke('rgba(230,230,230,0.8)');
    strokeWeight(3);
    if (abs(maskLines[num][0] - maskLines[num + 1][0]) < 60 && abs(maskLines[num][1] - maskLines[num + 1][1]) < 10) {
      line(maskLines[num][0], maskLines[num][1], maskLines[num + 1][0], maskLines[num + 1][1]);
    }
  }
  noLoop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}