const canvasWidth = 960;
const canvasHeight = 500;

var font;

var textTyped = "Test"
var drawMode = 1;
var fontSize = 250;
var pointDensity= 8;

var colors;
var textImg;

function preload(){
 font = loadFont('moonGetHeavy.otf');
}


function setup () {
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  angleMode(DEGREES);

  frameRate(25);
  rectMode(CENTER);

  colors = [color(65, 105, 185), color(245, 95, 80), color(15, 233, 118)];
  pixelDensity(1);

  setupText();
}

function setupText() {
  // create an offscreen graphics object to draw the text into
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textSize(fontSize)
  textImg.text(textTyped, 100, fontSize + 50);
  textImg.loadPixels();
}

//const colorFront = [230, 230, 230];
const colorBack = [255, 255, 255];

function draw () {
  background(colorBack);

  for (var x = 0; x < textImg.width; x += pointDensity) {
    for (var y = 0; y < textImg.height; y += pointDensity) {
      // Calculate the index for the pixels array from x and y
      var index = (x + y * textImg.width) * 4;
      // Get the red value from image
      var r = textImg.pixels[index];

      if (r < 128) {

        if(drawMode == 1){
          strokeWeight(1);

          var noiseFac = map(mouseX, 0, width, 0, 1);
          var lengthFac = map(mouseY, 0, height, 0.01, 1);


          push();
          translate(x, y);
          rotate(frameCount);
          line(0, 0, fontSize * lengthFac, 0);
          pop();
        }

      }
    }
  }
}



