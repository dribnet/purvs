
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
  colWidth = width/cols;
  rowWidth = height/rows;
  shapeNum = 10;

  shapeTypes = new Array(rows);
  shapeColors = new Array(rows);
  shapeSize = new Array(rows);
  shapeRotate = new Array(rows);

  for(var row = 0; row< rows; row++){
      shapeTypes[row]=new Array(cols);
      shapeColors[row]=new Array(cols);
      shapeSize[row]=new Array(cols);
      shapeRotate[row]=new Array(cols);
    for(var col = 0; col< cols; col++){

      shapeTypes[row][col] = 0;
      shapeColors[row][col] = 0;
      shapeSize[row][col] = 0;
      shapeRotate[row][col] = 0;

    }
  }

  randomizeValues();


}

function draw () {

  background(255);
  strokeWeight(1);




    for(var row = 0; row< rows-1; row++){
      for(var col = 0; col< cols-1; col++){


          push();
          fill(shapeColors[row][col],50);
          stroke(0);
          strokeWeight(1);

          sSize = shapeSize[row][col];
          sRotate = shapeRotate[row][col];

          rotate(radians(sRotate));

          var shapeType = shapeTypes[row][col];

          if(shapeType == 1){
            rect(col*colWidth+(colWidth/2),row*rowWidth+(rowWidth/2),sSize,sSize);
          }
          else if(shapeType == 2){
            //noFill();
            rect(col*colWidth,row*rowWidth,sSize,sSize);
          }
          else if(shapeType == 3){

            ellipse(col*colWidth,row*rowWidth,sSize,sSize);
            line(col*colWidth+(colWidth/2),row*rowWidth+(rowWidth/2),((col+1)*colWidth)+(colWidth/2),(row+1)*rowWidth+(rowWidth/2));
          }
          else if(shapeType == 4){
              ellipse(col*colWidth,row*rowWidth,sSize,sSize);
          }
          else if (shapeType== 5){
            line(col*colWidth,row*rowWidth+(rowWidth/2),(col+1)*colWidth,row*rowWidth+(rowWidth/2));
          }


          pop();

      }

    }


    strokeWeight(5);
    noFill();
    //ellipse(width-(width*0.25),height,height*0.4,height*0.4);


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}


function mouseClicked(){

    randomizeValues();

}

function randomizeValues(){

  for(var row = 0; row< rows-1; row++){
    for(var col = 0; col< cols-1; col++){

      randomNum = round(random(0,shapeNum));
      shapeTypes[row][col] = randomNum;
      shapeColors[row][col] = random(0,150);
      shapeSize[row][col] = (colWidth/2)* round(random(1,3));
      shapeRotate[row][col] = random(-10,10);
      //shapeSize[row][col]

    }

  }



}
