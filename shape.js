function Shape(shapeType,sColor,lineColor,sSize,leftX,rightX,topY,bottomY,colWidth,rowHeight ,mode){


  if(shapeType == 3){
    lineColor = color(123,182,91);
    }
  if(shapeType == 6){
    sColor = color(200+random(-20,55));
    lineColor = color(60);
  }
  if(shapeType == 7){
      sColor = color(123,182,91+random(-20,55));
      lineColor = color(42, 71, 49);
  }
  if(shapeType == 10){
    sColor = color(186, 178, 147);
    lineColor = color(66, 53, 43);
  }
  if(shapeType == 11){
    sColor = color(150);
    lineColor = color(50);
  }
  if(shapeType == 12){
    sColor = color(240, 242, 147);
    lineColor = color (165, 155, 119);
  }



  this.createShape = function(){

    fill(sColor);
    stroke(lineColor);

    //bigrect
    if(shapeType == 1){
      rect(leftX,topY,sSize,sSize);
      rect(leftX+sSize/4,topY+sSize/4,sSize/2,sSize/2);
    }
    //smallrect
    else if(shapeType == 2){
      //noFill();
      rect(leftX,topY,sSize,sSize);
      rect(leftX+sSize/4,topY+sSize/4,sSize/2,sSize/2);
    }
    //grass
    else if(shapeType == 3){
      strokeWeight(2);
      line(leftX,bottomY-(rowHeight/5),leftX,bottomY);
      line(leftX+(colWidth/2),bottomY-(rowHeight/3),leftX+(colWidth/2),bottomY);
      line(rightX,bottomY-(rowHeight/5),rightX,bottomY);
    }
    //bigcircle
    else if(shapeType == 4){
        ellipse(leftX,topY,sSize,sSize);
        ellipse(leftX,topY,sSize/2,sSize/2);
    }
    //flatline
    else if (shapeType== 5){
      line(leftX,topY+(rowHeight/2),rightX,topY+(rowHeight/2));
    }
    //rock
    else if(shapeType==6){

      triangle(leftX,topY+(rowHeight/2),leftX+(colWidth/2),topY,rightX,topY+(rowHeight/2));
    }
    //tree
    else if(shapeType==7){

      line(leftX+(colWidth/2),topY+(rowHeight/2),leftX+(colWidth/2),bottomY+(rowHeight/2));
      triangle(leftX,topY+(rowHeight),leftX+(colWidth/2),topY,rightX,topY+(rowHeight));

    }
    //rect4
    else if(shapeType==8){

      rect(leftX+colWidth/2,topY-rowHeight,sSize/2,sSize/2);
      rect(rightX+colWidth,topY+rowHeight/2,sSize/2,sSize/2);
      rect(leftX+colWidth/2,bottomY+rowHeight,sSize/2,sSize/2);
      rect(leftX-colWidth,topY+rowHeight/2,sSize/2,sSize/2);

    }
    //circle4
    else if (shapeType == 9){
      ellipse(leftX+colWidth/2,topY-rowHeight,sSize/2,sSize/2);
      ellipse(rightX+colWidth,topY+rowHeight/2,sSize/2,sSize/2);
      ellipse(leftX+colWidth/2,bottomY+rowHeight,sSize/2,sSize/2);
      ellipse(leftX-colWidth,topY+rowHeight/2,sSize/2,sSize/2);
    }
    //house
    else if (shapeType == 10){

      rect(leftX,topY,colWidth,rowHeight);
      rect(leftX+colWidth/3,topY+rowHeight/4,colWidth/3,rowHeight/4);
      triangle(leftX,topY,leftX+(colWidth/2),topY-(rowHeight/2),rightX,topY);
      rect(leftX+colWidth/3,topY+rowHeight/1.5,colWidth/3,rowHeight/3);

    }
    //obelisk
    else if (shapeType == 11){


      beginShape();
      vertex(leftX+(colWidth*0.35),bottomY);
      vertex(leftX+(colWidth*0.65),bottomY);
      vertex(leftX+(colWidth*0.65),topY);
      vertex(leftX+(colWidth*0.5),topY-(rowHeight*0.2));
      vertex(leftX+(colWidth*0.35),topY);

      endShape(CLOSE);

      //ellipse(leftX,topY,colWidth/4,rowHeight/2);
      //ellipse(leftX,topY+rowHeight/3,colWidth/4,rowHeight/2);

    }
    //flower
    else if (shapeType == 12){

      line(leftX+(colWidth/2),bottomY-(rowHeight/3),leftX+(colWidth/2),bottomY);
      ellipse(leftX+(colWidth/1.9),bottomY-(rowHeight/3),colWidth/4,rowHeight/4);

    }


}




}
