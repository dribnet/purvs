
//import processing.opengl.*;

/**

This is the main method for the landscape drawer / wallpaper drawer.
This class controls keyboard input, and other high level variables.

*/


var wallpaperMode;
var wallpaper;
var landscape;
var rows = 40;
var cols = 80;
var colWidth;
var rowHeight;


function setup () {
  createCanvas(960, 500, P2D);
  wallpaperMode = false;
  colWidth = width/cols;
  rowHeight = height/rows;
  shapeNum = 18;
  //translate(width/3,0);
  //wallpaper = new Wallpaper(rows,cols,rowHeight,colWidth);


  drawCanvas();

}

//draws the canvas, will either draw wallpaper or landscape.
function drawCanvas(){

  if(wallpaperMode == true){
  drawWallpaper();
  }
  else{
  drawLandscape();
  }


}

function draw () {

  if(wallpaperMode == false){
    return;
  }
/*

  var mouseCol = round(mouseX/colWidth);
 var mouseRow = round(mouseY/rowWidth);

 if (mouseCol==0 || mouseRow == 0){
   return;
 }

  var type = round(random(0,shapeNum));

  //var sType = types[row][col];

  var r = random(0,255);
  var g = random(0,255);

  var sColor = color(r,g,255,150*0.3);
  var lineColor = color(r,g,255-30,150*0.95);
  var sSize = (colWidth/2)* round(random(1,3));
  var sRotate = random(-2,1);


  drawShape(mouseRow,mouseCol,sColor,lineColor,150,type,sSize,sRotate);
 //sShape = shapeTypes[mouseRow][mouseCol-1];
//  drawShape(mouseRow,mouseCol-1,100,sShape);
//  sShape = shapeTypes[mouseRow][mouseCol+1];
//  drawShape(mouseRow,mouseCol+1,100,sShape);


  //drawShape(round(random(0,rows-1)),round(random(0,cols-1)),150,shapeTypes3);

*/

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  if (key == " "){
    wallpaperMode = !wallpaperMode;
    drawCanvas();
  }
}




function mouseClicked(){
    if(mouseButton == LEFT){
      drawCanvas();
   }
   if(mouseButton == RIGHT){

   }


}


//creates a new wallpaper and draws it
function drawWallpaper(){


  wallpaper = new Wallpaper(rows,cols,rowHeight,colWidth);
  wallpaper.drawWallpaper();

}


//creates a new landscape and draws it
function drawLandscape(){


  landscape = new Landscape(rows,cols,rowHeight,colWidth);
  landscape.drawLandscape();

}
