
var rows = 40;
var cols = 70;
var colWidth;
var rowWidth;
var randomNum;
var shapeNum;
var shapeTypes;
var shapeColors;


function setup () {
  createCanvas(960, 500);
  background(255);
  colWidth = width/cols;
  rowWidth = height/rows;
  shapeNum = 10;

  shapeTypes = new Array(rows);
  shapeTypes2 = new Array(rows);
  shapeTypes3 = new Array(rows);
  shapeColors = new Array(rows);
  r = new Array(rows);
  g = new Array(rows);
  b = new Array(rows);
  shapeSize = new Array(rows);
  shapeRotate = new Array(rows);


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

    }
  }

  randomizeValues();
  drawWallpaper();


}

function draw () {

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


function mouseClicked(){

    randomizeValues();
    drawWallpaper();

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
      shapeRotate[row][col] = random(-10,10);
      //shapeSize[row][col]

    }

  }

}


function drawWallpaper(){

  //background(255);
  background(237, 245, 255);

  drawLayer(30,shapeTypes);
  drawLayer(80,shapeTypes2);
  drawLayer(150,shapeTypes3);


}


function drawLayer(opac,types){


  strokeWeight(1);

    for(var row = 0; row< rows-1; row++){
      for(var col = 0; col< cols-1; col++){

          push();
          fill(r[row][col],g[row][col],255,opac*0.3);
          stroke(r[row][col],g[row][col],255,opac);
          strokeWeight(1);

          sSize = shapeSize[row][col];
          sRotate = shapeRotate[row][col];

          rotate(radians(sRotate));

          var shapeType = types[row][col];
          var leftX = col*colWidth;
          var rightX = (col+1)*colWidth;
          var topY = row*rowWidth;
          var bottomY = (row+1)*rowWidth;


          if(shapeType == 1){
            rect(leftX+(colWidth/2),topY+(rowWidth/2),sSize,sSize);
          }
          else if(shapeType == 2){
            //noFill();
            rect(leftX,topY,sSize,sSize);
          }
          else if(shapeType == 3){

            //ellipse(col*colWidth,row*rowWidth,sSize,sSize);
            line(leftX+(colWidth/2),topY+(rowWidth/2),rightX+(colWidth/2),bottomY+(rowWidth/2));
            line(rightX+(colWidth/2),topY+(rowWidth/2),leftX+(colWidth/2),bottomY+(rowWidth/2));
          }
          else if(shapeType == 4){
              ellipse(leftX,topY,sSize,sSize);
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


          pop();

      }

    }




}
