const canvasWidth = 960;
const canvasHeight = 500;


// 3 letters 16 parameters
const letterA = {
  "arcX" : 0 ,
  "arcY" : 0 ,
  "arcW" : 100 ,
  "arcH" : 150 ,
  "arcStart" : 300,

  "curveX" : 110,
  "curveY" : 90,
  "clnth" : 120,
  "cGap" : 40,
  "cAngle" : 140,

  "elpsX" : 5,
  "elpsY" : 15,
  "elpsLnth" : 35,
  "elpsGap" : 25,
  "elpsSize" : 18,
  "eAngle" : 0
}


const letterB = {
  "arcX" : 40 ,
  "arcY" : -35 ,
  "arcW" : 70 ,
  "arcH" : 90 ,
  "arcStart" : 30,

  "curveX" : -30,
  "curveY" : -160,
  "clnth" : 110,
  "cGap" : 50,
  "cAngle" : 110,

  "elpsX" : 0,
  "elpsY" : 45,
  "elpsLnth" : 30,
  "elpsGap" : 25,
  "elpsSize" : 17,
  "eAngle" : 0
}


const letterC = {
  "arcX" : -20 ,
  "arcY" : 5 ,
  "arcW" : 160 ,
  "arcH" : 130 ,
  "arcStart" : 270,

  "curveX" : 10,
  "curveY" : -430,
  "clnth" : 90,
  "cGap" : 50,
  "cAngle" : 140,

  "elpsX" : 0,
  "elpsY" : 45,
  "elpsLnth" : 40,
  "elpsGap" : 35,
  "elpsSize" : 22,
  "eAngle" : 270
}


// color settings
const colorFont1  = "#f6f600"; // Yellow
const colorFont2  = "#ed1e79"; // Pink
const colorFont3  = "#2fade3" ; // Blue
const colorBack    = "#f0f1e1"; // YellowWhite
const colorStroke  = "#0b282a"; //Black



function setup () {
  // canvas
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  // with no animation, redrawing the screen is not necessary
  noLoop();
}



function drawLetter(posx, posy, letterData) {

  //arc
  let ax = posx+letterData["arcX"];
  let ay = posy+letterData["arcY"];
  let aw = letterData["arcW"];
  let ah = letterData["arcH"];
  let as = letterData["arcStart"];

  // wave curve
  let cx = posx+letterData["curveX"];
  let cy = posx+letterData["curveY"];
  let cl = letterData["clnth"];
  let cg = letterData["cGap"];
  let a = letterData["cAngle"];

  // six ellipse
  let ex = posx+letterData["elpsX"];
  let ey = posy+letterData["elpsY"];
  let el = letterData["elpsLnth"];
  let eg = letterData["elpsGap"];
  let es = letterData["elpsSize"];
  let b = letterData["eAngle"];


  // draw arc
  angleMode(DEGREES);
  fill(colorFont3);
  strokeCap(ROUND);
  stroke(colorStroke);
  strokeWeight(5);
  arc(ax,ay,aw,ah,as,as+180,CHORD);


  // draw wave curve
  stroke(colorFont2);
  noFill();
  strokeWeight(16);
  bezier(cx,cy,cx+cos(a)*cl,cy-sin(a)*cl,cx+cos(90-a)*cg,cy+sin(90-a)*cg, cx+cos(a)*cl+cos(90-a)*cg,cy-sin(a)*cl+sin(90-a)*cg)


  // draw six ellipse
  fill(colorFont1);
  noStroke();
  ellipse(ex,ey,es,es);
  ellipse(ex+cos(b)*el,ey+sin(b)*el,es,es);
  ellipse(ex+cos(b)*el*2,ey+sin(b)*el*2,es,es);

  ellipse(ex+cos(90-b)*eg,ey+sin(90-b)*eg,es,es);
  ellipse(ex+cos(b)*el+cos(90-b)*eg,ey+sin(b)*el+sin(90-b)*eg,es,es);
  ellipse(ex+cos(b)*el*2+cos(90-b)*eg,ey+sin(b)*el*2+sin(90-b)*eg,es,es);
  
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
