const canvasWidth = 960;
const canvasHeight = 500;

function setup () {
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  angleMode(DEGREES);
}

const colorFront = [230, 230, 230];
const colorBack = [30, 30, 30];

function draw () {
  textAlign(CENTER);
  background(30);
  fill(255);

  textFont("Helvetica Neue")
  textSize(0 + (mouseX / width)*72);
  text("Hello", width/2 , height/2);

}
