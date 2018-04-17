const canvasWidth = 960;
const canvasHeight = 500;

let fW = canvasWidth*0.1;
let fH = canvasHeight*0.1;
let fX = canvasWidth*0.25;
let fY = canvasHeight*0.25;

var letter = [];

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one

              "numStroke": 3   

  "angle1": 80,
  "offsetx1": 0,
  "offsety1": 35,
  "curve1": 1,
   
  "angle2": 80,
  "offsetx2": 0,
  "offsety2": 35,
  "curve2": 1,

  "angle3": 80,
  "offsetx3": 0,
  "offsety3": 35,
  "curve3": 1,

  "angle4": 80,
  "offsetx4": 0,
  "offsety4": 35,
  "curve4": 1,
 *
 */

const letterA = {
  "numStroke": 3,   

  "angle1": 225,
  "offsetx1": 0,
  "offsety1": 0,
  "curve1": 0,
   
  "angle2": 0,
  "offsetx2": 0,
  "offsety2": 50,
  "curve2": 0,

  "angle3": 315,
  "offsetx3": 0,
  "offsety3": 0,
  "curve3": 0,
}

const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(0);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
  //frameRate(30);

  angleMode(DEGREES); 
  //textFont(font);
}

function aStroke(x, y, angle, curve){
  this.x = x; 
  this.y = y;
  this.angle = angle;
  this.curve = curve;

  this.length;
  this.rA;
  this.depth;
  this.tAngle; 
  this.shaping = [];

  this.gap = true;
  this.gap2 = 0;

  this.drawing = function(){
    this.lenCal();
    //stroke(1);
    fill(255);
    //rotate(this.angle);
    //translate(this.x, this.y);
    beginShape(LINES);
    if(this.curve == 0){
      for(i = 0; i < this.length; i++){
        let cX = map(i, 0, this.length, this.x, this.x+fW);
        let cY = map(i, 0, this.length, this.y, this.depth+fY);
        this.shaping.push(cX, cY);
        this.shaping.push(cX + 8, cY);
        if(this.gap == true){
          vertex(cX, cY);
          vertex(cX + 8, cY);
          //this.gap = false;
        }
        else{
          //if(this.gap2 > 1){
            this.gap = true;
            this.gap2 = 0;
          //}
          //else{
            this.gap2 = this.gap2+1;
         // };
          }
        };
      };
      //for(n = 0; n < this.shaping.length; n++){console.log(this.shaping[n])};
      //line(this.length+100, this.y+100, this.x + this.length, this.length);
      endShape();
    }
  

this.lenCal = function(){
  if(this.angle%90 == 0){
    this.length = fW;
    this.depth = (((this.length^2)-(fW^2))^0.5);
  }
  else{
  	this.tAngle = 90*((Math.floor(angle/90)));
    this.rA = angle - ((Math.floor(angle/90)*90));
    this.length = Math.floor((fW*((1-Math.sin(this.rA)))));
    this.depth = (((this.length^2)-(fW^2))^0.5);
  } 
  return length;
  };
}

function drawLetter(numStroke, posx, posy, letterData) {

  if(numStroke == 4){
  	console.log(4);
  	let angle = letterData["angle4"];
    let pos2x = posx + letterData["offsetx4"];
    let pos2y = posy + letterData["offsety4"];
    let curve = letterData["curve4"];
  	letter.push(new aStroke(pos2x, pos2y, angle, curve));
  }
  if(numStroke == 3){
  	console.log(3);
  	let angle = letterData["angle3"];
    let pos2x = posx + letterData["offsetx3"];
    let pos2y = posy + letterData["offsety3"];
    let curve = letterData["curve3"];
  	//letter.push(new aStroke(300,300,315,0));
  }
  if(numStroke == 2){
  	console.log(2);
  	let angle = letterData["angle2"];
    let pos2x = posx + letterData["offsetx2"];
    let pos2y = posy + letterData["offsety2"];
    let curve = letterData["curve2"];
  	letter.push(new aStroke(200,200,225,0));
  }
  if(numStroke == 1){
  	console.log(1);
  	let angle = letterData["angle1"];
    let pos2x = posx + letterData["offsetx1"];
    let pos2y = posy + letterData["offsety1"];
    let curve = letterData["curve1"];
  	letter.push(new aStroke(100, 100, 315, 0));
  }
  if(numStroke >= 1){drawLetter(numStroke-1, posx, posy, letterData)}
  else{fullDraw()};
}

function draw () {
  // clear screen
  background(colorBack);

  // draw the letters A, B, C from saved data
  drawLetter(letterA["numStroke"], 0, 0, letterA);
  //translate(fX, fY/2);
   //rotate(360-225, 0);'
  //console.log();
}

function fullDraw(){
	for(i = 0; i < letter.length; i++){
		letter[i].drawing();
	}
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

