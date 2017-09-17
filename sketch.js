
//import processing.opengl.*;

var rows = 40;
var cols = 70;
var colWidth;
var rowWidth;
var randomNum;
var shapeNum;
var shapeTypes;
var shapeColors;
var thingSize = 1;
var specialNum = 150;


function setup () {
  createCanvas(960, 500,P2D);
  background(255);
  background(237, 245, 255);
  colWidth = width/cols;
  rowWidth = height/rows;
  shapeNum = 18;

  shapeTypes = new Array(rows);
  shapeTypes2 = new Array(rows);
  shapeTypes3 = new Array(rows);
  shapeColors = new Array(rows);
  r = new Array(rows);
  g = new Array(rows);
  b = new Array(rows);
  shapeSize = new Array(rows);
  shapeRotate = new Array(rows);
  shapeLayers = new Array(rows);
  specialShapeRow = new Array(specialNum);
  specialShapeCol = new Array(specialNum);


  for(var row = 0; row< rows; row++){
      shapeTypes[row]=new Array(cols);
      shapeTypes2[row]=new Array(cols);
      shapeTypes3[row]=new Array(cols);
      shapeColors[row]=new Array(cols);
      r[row] = new Array(cols);
      g[row] = new Array(cols);
      b[row] = new Array(cols);
      shapeSize[row]=new Array(cols);
      shapeRotate[row]=new Array(cols);
      shapeLayers[row]=new Array(cols);

    for(var col = 0; col< cols; col++){

      shapeTypes[row][col] = 0;
      shapeTypes2[row][col]= 0;
      shapeTypes3[row][col]= 0;
      shapeColors[row][col] = 0;
      r[row][col] = 0;
      g[row][col] = 0;
      b[row][col] = 0;
      shapeSize[row][col] = 0;
      shapeRotate[row][col] = 0;
      shapeLayers[row][col] = 0;

    }
  }



  randomizeValues();
  drawWallpaper();


}

function draw () {

  //drawWallpaper();

//  for(var i = 0; i< specialNum; i++){


  //  row = specialShapeRow[i];
  //  col = specialShapeCol[i];
  //  shapeSize[row][col]=shapeSize[row][col]+1;
  //  drawShape(row,col,30,shapeTypes3);

//  }

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



}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


function mouseClicked(){

    if(mouseButton == LEFT){
      randomizeValues();
      drawWallpaper();
   }
   if(mouseButton == RIGHT){
    // background(255);
   }
  //  drawWallpaper();

}



function randomizeValues(){

  for(var row = 0; row< rows-1; row++){
    for(var col = 0; col< cols-1; col++){

      randomNum = round(random(0,shapeNum));
      shapeTypes[row][col] = randomNum;
      randomNum = round(random(0,shapeNum));
      shapeTypes2[row][col] = randomNum;
      randomNum = round(random(0,shapeNum));
      shapeTypes3[row][col] = randomNum;
      shapeColors[row][col] = random(0,255);
      r[row][col] = random(0,255);
      g[row][col] = random(0,255);
      b[row][col] = random(0,255);
      shapeSize[row][col] = (colWidth/2)* round(random(1,3));
      shapeRotate[row][col] = random(-2,1);
      shapeLayers[row][col] = round(random(1,5));
      //shapeSize[row][col]

    }

  }

  for(var i = 0; i<specialNum; i++){

      specialShapeRow[i]=round(random(0,rows));
      specialShapeCol[i]=round(random(0,cols));


  }



}


function drawWallpaper(){



  background(255);
  //background(29, 18, 45);

  drawLayer(30,shapeTypes);
  drawLayer(80,shapeTypes2);
  drawLayer(150,shapeTypes3);

//  drawLayer2();



}


function drawLayer(opac,types){


  strokeWeight(1);
  var darkness = 20;

    for(var row = 0; row< rows-1; row++){
      for(var col = 0; col< cols-1; col++){

          var sType = types[row][col];
          var sColor = color(r[row][col],g[row][col],255,opac*0.3);
          var lineColor = color(r[row][col],g[row][col],255-darkness,opac*0.95);
          var sSize = shapeSize[row][col];
          var sRotate = shapeRotate[row][col];

          drawShape(row,col,sColor,lineColor,opac,sType,sSize,sRotate);

      }

    }

}

function drawLayer2(){

   drawShape(round(random(0,rows-1)),round(random(0,cols-1)),150,shapeTypes3);


}

function drawShape(row,col,sColor,lineColor,opac,type,sSize,sRotate){



  push();
  fill(sColor);
  stroke(lineColor);
  strokeWeight(1);


  rotate(radians(sRotate));

  var shapeType = type;
  var leftX = col*colWidth;
  var rightX = (col+1)*colWidth;
  var topY = row*rowWidth;
  var bottomY = (row+1)*rowWidth;




  if(shapeType == 1){
    rect(leftX+(colWidth/2),topY+(rowWidth/2),sSize,sSize);
    rect(leftX+(colWidth/2)+sSize/4,topY+(rowWidth/2)+sSize/4,sSize/2,sSize/2);
  }
  else if(shapeType == 2){
    //noFill();
    rect(leftX,topY,sSize,sSize);
    rect(leftX+sSize/4,topY+sSize/4,sSize/2,sSize/2);
  }
  else if(shapeType == 3){

    //ellipse(col*colWidth,row*rowWidth,sSize,sSize);
    line(leftX+(colWidth/2),topY+(rowWidth/2),rightX+(colWidth/2),bottomY+(rowWidth/2));
    line(rightX+(colWidth/2),topY+(rowWidth/2),leftX+(colWidth/2),bottomY+(rowWidth/2));
  }
  else if(shapeType == 4){
      ellipse(leftX,topY,sSize,sSize);
      ellipse(leftX,topY,sSize/2,sSize/2);
  }
  else if (shapeType== 5){
    line(leftX,topY+(rowWidth/2),rightX,topY+(rowWidth/2));
  }
  else if(shapeType==6){
    quad(leftX,topY+(rowWidth/2),leftX+(colWidth/2),topY,rightX,topY+(rowWidth/2),leftX+(colWidth/2),bottomY);
  }
  else if(shapeType==7){
    line(leftX+(colWidth/2),topY+(rowWidth/2),rightX+(colWidth/2),bottomY+(rowWidth/2));
  }
  else if(shapeType==8){

    rect(leftX+colWidth/2,topY-rowWidth,sSize/2,sSize/2);
    rect(rightX+colWidth,topY+rowWidth/2,sSize/2,sSize/2);
    rect(leftX+colWidth/2,bottomY+rowWidth,sSize/2,sSize/2);
    rect(leftX-colWidth,topY+rowWidth/2,sSize/2,sSize/2);

  }
  else if (shapeType == 9){
    ellipse(leftX+colWidth/2,topY-rowWidth,sSize/2,sSize/2);
    ellipse(rightX+colWidth,topY+rowWidth/2,sSize/2,sSize/2);
    ellipse(leftX+colWidth/2,bottomY+rowWidth,sSize/2,sSize/2);
    ellipse(leftX-colWidth,topY+rowWidth/2,sSize/2,sSize/2);
  }


  pop();



}
