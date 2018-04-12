const canvasWidth = 960;
const canvasHeight = 500;

const colorFront  = "#333332";
const colorBack   = "#e2e2e0";
const colorStroke = "#e2e2e0";

function setup () {

  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  rectMode(CENTER);

  fill(colorFront);
  stroke(colorStroke);

  noLoop();
}

function draw () {
  background(colorBack);

  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;
  fill(colorFront);
  rect(center_x, center_y, 150, 150)
  //translate(width/2,height/2);
  noFill();
  //stroke(255,0,225)

  strokeWeight(20);
  beginShape();
  vertex(405,175)
  quadraticVertex(700,360,405,325)
  endShape();

  //references
  //point(405,175) //1
  //point(555,175) //2
  //point(405,325) //3
  //point(555,325) //4

}