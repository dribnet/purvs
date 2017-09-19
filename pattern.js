
/**

Draws the basic pattern which is used to create both the
wallpaper and the landscape.

*/


function Pattern (rows,cols,rowHeight,colWidth,opac,red,green,blue){

  var wallpaperMode;
  var wallpaper;

  var randomNum;
  var shapeNum = 18;


  var shapeTypes = new Array(rows);
  var r = new Array(rows);
  var g = new Array(rows);
  var b = new Array(rows);
  var shapeSize = new Array(rows);
  var shapeRotate = new Array(rows);



  for(var row = 0; row< rows; row++){

      shapeTypes[row]=new Array(cols);
      r[row] = new Array(cols);
      g[row] = new Array(cols);
      b[row] = new Array(cols);
      shapeSize[row]=new Array(cols);
      shapeRotate[row]=new Array(cols);

    for(var col = 0; col< cols; col++){

      shapeTypes[row][col] = 0;
      r[row][col] = 0;
      g[row][col] = 0;
      b[row][col] = 0;
      shapeSize[row][col] = 0;


    }
  }



  // randomize all values for drawing the shapes
  this.randomizeValues = function (){


    for(var row = 0; row< rows-1; row++){
      for(var col = 0; col< cols-1; col++){

        randomNum = round(random(0,shapeNum));
        shapeTypes[row][col] = randomNum;
        if(red == -1){
          r[row][col] = random(0,255);
        }
        else{
          r[row][col] = red;
        }
        if(green == -1){
          g[row][col] = random(0,255);
        }
        else{
          g[row][col] = green;
        }
        if(blue == -1){
        b[row][col] = random(0,255);
        }
        else{
          b[row][col] = blue;
        }
        shapeSize[row][col] = (colWidth/2)* round(random(1,3));
        shapeRotate[row][col] = random(-2,1);

      }

    }



  }


this.randomizeValues();



//goes through all the rows and cols and determines
// the shape type
  this.drawPattern = function (){


    strokeWeight(1);
    var darkness = 20;

      for(var row = 0; row< rows-1; row++){
        for(var col = 0; col< cols-1; col++){

            var sType = shapeTypes[row][col];
            var sColor = color(r[row][col],g[row][col],b[row][col],opac*0.3);
            //var sColor = color(0,0,0,0);
            //var lineColor = color(255,opac);
            var lineColor = color(r[row][col],g[row][col],b[row][col]-darkness,opac*0.95);
            var sSize = shapeSize[row][col];
            var sRotate = shapeRotate[row][col];



            this.drawShape(row,col,sColor,lineColor,sType,sSize,sRotate);


        }

      }


  }




//draws the individual shapes
  this.drawShape = function(row,col,sColor,lineColor,sType,sSize,sRotate){


    push();
    fill(sColor);
    stroke(lineColor);
    strokeWeight(1);


    rotate(radians(sRotate));

    var shapeType = sType;
    var leftX = col*colWidth;
    var rightX = (col+1)*colWidth;
    var topY = row*rowHeight;
    var bottomY = (row+1)*rowHeight;



    if(shapeType == 1){
      rect(leftX+(colWidth/2),topY+(rowHeight/2),sSize,sSize);
      rect(leftX+(colWidth/2)+sSize/4,topY+(rowHeight/2)+sSize/4,sSize/2,sSize/2);
    }
    else if(shapeType == 2){
      //noFill();
      rect(leftX,topY,sSize,sSize);
      rect(leftX+sSize/4,topY+sSize/4,sSize/2,sSize/2);
    }
    else if(shapeType == 3){

      //ellipse(col*colWidth,row*rowWidth,sSize,sSize);
      line(leftX+(colWidth/2),topY+(rowHeight/2),rightX+(colWidth/2),bottomY+(rowHeight/2));
      line(rightX+(colWidth/2),topY+(rowHeight/2),leftX+(colWidth/2),bottomY+(rowHeight/2));
    }
    else if(shapeType == 4){
        ellipse(leftX,topY,sSize,sSize);
        ellipse(leftX,topY,sSize/2,sSize/2);
    }
    else if (shapeType== 5){
      line(leftX,topY+(rowHeight/2),rightX,topY+(rowHeight/2));
    }
    else if(shapeType==6){
      quad(leftX,topY+(rowHeight/2),leftX+(colWidth/2),topY,rightX,topY+(rowHeight/2),leftX+(colWidth/2),bottomY);
    }
    else if(shapeType==7){
      line(leftX+(colWidth/2),topY+(rowHeight/2),rightX+(colWidth/2),bottomY+(rowHeight/2));
    }
    else if(shapeType==8){

      rect(leftX+colWidth/2,topY-rowHeight,sSize/2,sSize/2);
      rect(rightX+colWidth,topY+rowHeight/2,sSize/2,sSize/2);
      rect(leftX+colWidth/2,bottomY+rowHeight,sSize/2,sSize/2);
      rect(leftX-colWidth,topY+rowHeight/2,sSize/2,sSize/2);

    }
    else if (shapeType == 9){
      ellipse(leftX+colWidth/2,topY-rowHeight,sSize/2,sSize/2);
      ellipse(rightX+colWidth,topY+rowHeight/2,sSize/2,sSize/2);
      ellipse(leftX+colWidth/2,bottomY+rowHeight,sSize/2,sSize/2);
      ellipse(leftX-colWidth,topY+rowHeight/2,sSize/2,sSize/2);
    }


    pop();


  }



}
