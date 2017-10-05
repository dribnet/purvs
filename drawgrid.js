/*
 * This is the funciton to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  
  // debug - show border
p5.noFill();
p5.stroke(255, 0, 0);
p5.rect(0, 0, 255, 255);

p5.ellipse(x1,y1,255,255);

let rows = 15;
let cols = 15;

let minX = 0;
let maxX = 255;
let minY = 0;
let maxY = 255;

let colWidth = maxX/cols;
let rowHeight = maxY/rows;


let leftX = 0;
let rightX = 255;
let topY = 0;
let bottomY = 255;

let sSize = rightX-leftX;

let shapeType = 6;





  p5.stroke(0);
  p5.fill(255);
  // debug - show border

    //grass
    if(shapeType == 1){
      p5.strokeWeight(2);
      p5.line(leftX,bottomY-(rowHeight/5),leftX,bottomY);
      p5.line(leftX+(colWidth/2),bottomY-(rowHeight/3),leftX+(colWidth/2),bottomY);
      p5.line(rightX,bottomY-(rowHeight/5),rightX,bottomY);
    }
    //flatline
    else if (shapeType== 2){
      p5.line(leftX,topY+(rowHeight/2),rightX,topY+(rowHeight/2));
    }
    //rock
    else if(shapeType==3){

      p5.triangle(leftX,topY+(sSize/2),leftX+(sSize/2),topY,rightX,topY+(sSize/2));
    }

    //tree
    else if(shapeType==4){


      p5.line(leftX+(colWidth/2),topY+rowHeight/2,leftX+(colWidth/2),bottomY);
      p5.triangle(leftX,topY+(rowHeight/2),leftX+(colWidth/2),topY-(rowHeight/2),rightX,topY+(rowHeight/2));

      if(tileType == "snow"){
        p5.fill(255);
        //noStroke();
        p5.triangle(leftX+(colWidth*0.15),topY+(rowHeight*0.3),leftX+(colWidth/2),topY-(rowHeight/2),rightX-(colWidth*0.15),topY+(rowHeight*0.3));
      }

    }
    //smalltree
    else if(shapeType == 5){

      p5.line(leftX+(colWidth/2),topY+rowHeight/2,leftX+(colWidth/2),bottomY);
      p5.triangle(leftX+(colWidth*0.2),topY+(rowHeight/2),leftX+(colWidth/2),topY-(rowHeight*0.1),rightX-(colWidth*0.2),topY+(rowHeight/2));




    }

    //house
    else if (shapeType == 6){

      p5.rect(leftX,topY,colWidth-1,rowHeight-1);
      p5.fill(183, 156, 126+p5.random(-20,20));
      p5.rect(leftX+colWidth/3,topY+rowHeight/4,colWidth/3,rowHeight/4);
      p5.triangle(leftX,topY,leftX+(colWidth/2),topY-(rowHeight/2),rightX,topY);
      p5.rect(leftX+colWidth/3,topY+rowHeight/1.5,colWidth/3,rowHeight/3);

    }
    //obelisk
    else if (shapeType == 7){


      p5.beginShape();
      p5.vertex(leftX+(colWidth*0.35),bottomY);
      p5.vertex(leftX+(colWidth*0.65),bottomY);
      p5.vertex(leftX+(colWidth*0.65),topY);
      p5.vertex(leftX+(colWidth*0.5),topY-(rowHeight*0.2));
      p5.vertex(leftX+(colWidth*0.35),topY);

      p5.endShape(CLOSE);

    }
    //flower
    else if (shapeType == 8){

      p5.line(leftX+(colWidth/2),bottomY-(rowHeight/3),leftX+(colWidth/2),bottomY);
      p5.ellipse(leftX+(colWidth/1.9),bottomY-(rowHeight/3),colWidth/4,rowHeight/4);

    }

    //cave
    else if(shapeType == 9){


      p5.quad(leftX-colWidth,bottomY-1,leftX-(colWidth*0.3),topY-rowHeight/2,rightX-(colWidth*0.7),topY-rowHeight/2,rightX,bottomY-1);

      p5.fill(120);
      p5.triangle(leftX-(colWidth*0.3),bottomY-1,leftX,topY+rowHeight/3,leftX+(colWidth*0.3),bottomY-1);



    }


}
