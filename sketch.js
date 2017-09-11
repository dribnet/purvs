
var rows = 20;
var cols = 35;
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
  shapeNum = 2;

  shapeTypes = new Array(rows);
  shapeColors = new Array(rows);

  for(var row = 0; row< rows; row++){
      shapeTypes[row]=new Array(cols);
      shapeColors[row]=new Array(cols);
    for(var col = 0; col< cols; col++){

      shapeTypes[row][col] = 0;
      shapeColors[row][col] = 0;

    }
  }

  randomizeValues();


}

function draw () {

    background(255);
    strokeWeight(1);

    for(var row = 0; row< rows-1; row++){
      for(var col = 0; col< cols-1; col++){

          fill(shapeColors[row][col]);

          stroke(0);



          if(shapeTypes[row][col] == 1){
            rect(col*colWidth+(colWidth/2),row*rowWidth+(rowWidth/2),colWidth,rowWidth);
          }
          else if(shapeTypes[row][col] == 2){
            noFill();
            rect(col*colWidth,row*rowWidth,colWidth*2,rowWidth*2);
          }
          else{
            line(col*colWidth+(colWidth/2),row*rowWidth+(rowWidth/2),((col+1)*colWidth)+(colWidth/2),(row+1)*rowWidth+(rowWidth/2));
          }

      }
    }


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
      shapeColors[row][col] = random(0,255);

    }

  }



}
