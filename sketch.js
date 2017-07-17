var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  // rotation in degrees
  angleMode(DEGREES);
}

// global variables for colors
var bg_color = "#white";
var fg_color1 = "#5b412a";
var fg_color2 = "#7b611a";
var stroke_color = "#c78a5b";
var skin_tone = "#ffe3d8";
var nose_tone = "#fcdbcf";
var blush_color = "#f9ab90";
var hat_color_green = "#7bbc60";
var hat_color_red = "#ce4a4a";
var eye_color = "#83cbff";

function draw () {
  // background color
  background(bg_color);
  // stroke color
  stroke(bg_color)
  ellipse();
  head(hat_color_red,960/4,500/2,0);
  head(hat_color_green,2.5*960/4,500/2,30);
}


function head(hatCol,xoff,yoff,rot) { //(color, xOffset, yOffset, rotation)

  push();
  //move to position, rotate
  translate(xoff, yoff);
  rotate(rot);
  
  //hat base
  stroke(hatCol);
  fill(hatCol);
  ellipse(0,-115,200,110);

  //face
  stroke(blush_color)
  fill(skin_tone);
  ellipse(0, 0, 220, 250);

  //set fill to match background color
  fill(bg_color);
  // draw two eyes
  ellipse(-35, -25, 60, 80);
  ellipse( 35, -25, 60, 80);

  //set fill back to foreground for eyeballs
  noStroke();
  fill(eye_color);
  ellipse(-35, -10, 35, 45);
  ellipse( 35, -10, 35, 45);
  fill("black");
  ellipse(-35, -10, 22, 32);
  ellipse( 35, -10, 22, 32);

 //nose with blush color
 stroke(blush_color);
  fill(nose_tone);
  ellipse( 0, 15, 65, 55);

  //hat brim
  stroke(bg_color);
  fill(hatCol);
  ellipse(0,-102,150,45);
  fill("white");
  ellipse(0,-140,40,40);

  //bounding box
  fill(255,0);
  stroke(blush_color);
  rect(-160,-160,300,300);
  moustache_6(140,45);
  pop();

  
}

function moustache_6(wid, yOff){
  push()

  var y;
  for(var i = 0; i < 6; i++){
    
    y = (i % 2)*wid/2;

    switch(i){
      case 5 :
      y = 0;
      break;
      case 4 : 
      y = wid/24;
      break;
      case 3 : 
      y = 2 * wid/24;
    }

  x = i - 2.5;

    fill("brown");
    noStroke();
    ellipse(x * wid/6, y+yOff, 12 * wid/60);
    console.log(y)
  }
  pop();
}


function moustache_2(){}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
