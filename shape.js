

/**

Draws an individual shape. It could be part of the landscape or the
wallpaper. Uses the mode to determine the color of the shapes.

*/


function Shape(shapeType,sColor,lineColor,sSize,leftX,rightX,topY,bottomY,colWidth,rowHeight ,mode,perl,lakeChance,snowChance,treeColOffset){

  var tileType;

  //need to set all environment pieces to their proper colors here
  if(shapeType == 3 && mode == true){
    lineColor = color(123,182,91);
    }
  if(shapeType == 6 && mode == true){
    sColor = color(200+random(-20,55));
    lineColor = color(60);
  }
  if(shapeType == 7 && mode == true){
      sColor = color(123-treeColOffset,182-treeColOffset,91+perl*120);
      lineColor = color(42, 71, 49+ random(-20,55) );
  }
  if(shapeType == 8 && mode == true){
      sColor = color(96-treeColOffset, 155-treeColOffset, 102+perl*80);
      lineColor = color(42, 71, 49+ random(-20,55) );
  }
  if(shapeType == 11 && mode == true){
    sColor = color(186+ random(-10,10), 178, 147+ random(-10,10));
    lineColor = color(66, 53, 43+ random(-20,55));
  }
  if(shapeType == 12 && mode == true){
    sColor = color(150);
    lineColor = color(50);
  }
  if(shapeType == 13 && mode == true){
    sColor = color(240, 242, 147);
    lineColor = color (165, 155, 119);
  }
  if(shapeType == 14 && mode == true){
    sColor = color(200+random(-20,55));
    lineColor = color(60);
  }


 if(perl>snowChance){
   tileType = "snow";
 }
 else if(perl<lakeChance){
   tileType = "lake";
 }
 else{
   tileType = "grass";
 }


var perlMult = perl*100;

  this.createShape = function(){

    if(mode == true){

      //grass / snow
      noStroke();
      fill(169+perlMult, 234+perlMult, 156+perlMult);
      rect(leftX,topY,colWidth,rowHeight);

      //lake
      if(tileType == "lake"){
        fill(193+perl*20, 217+perl*20, 255+perl*20);
        rect(leftX,topY,colWidth,rowHeight);
      }

    }

    fill(sColor);
    stroke(lineColor);


    //don't want to draw shapes on top of lake tiles
    if(tileType == "lake"){
      return;
    }


    //giant list of shapes. in future these could be
    //seperated out into their own classes.


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


      line(leftX+(colWidth/2),topY+rowHeight/2,leftX+(colWidth/2),bottomY);
      triangle(leftX,topY+(rowHeight/2),leftX+(colWidth/2),topY-(rowHeight/2),rightX,topY+(rowHeight/2));

      if(tileType == "snow"){
        fill(255);
        //noStroke();
        triangle(leftX+(colWidth*0.15),topY+(rowHeight*0.3),leftX+(colWidth/2),topY-(rowHeight/2),rightX-(colWidth*0.15),topY+(rowHeight*0.3));
      }

    }
    //smalltree
    else if(shapeType == 8){

      line(leftX+(colWidth/2),topY+rowHeight/2,leftX+(colWidth/2),bottomY);
      triangle(leftX+(colWidth*0.2),topY+(rowHeight/2),leftX+(colWidth/2),topY-(rowHeight*0.1),rightX-(colWidth*0.2),topY+(rowHeight/2));

    //  if(tileType == "snow"){
      //  fill(255);
        //noStroke();
      //  triangle(leftX+(colWidth*0.15),topY+(rowHeight*0.3),leftX+(colWidth/2),topY-(rowHeight/2),rightX-(colWidth*0.15),topY+(rowHeight*0.3));
    //  }


    }
    //rect4
    else if(shapeType==9){

      rect(leftX+colWidth/2,topY-rowHeight,sSize/2,sSize/2);
      rect(rightX+colWidth,topY+rowHeight/2,sSize/2,sSize/2);
      rect(leftX+colWidth/2,bottomY+rowHeight,sSize/2,sSize/2);
      rect(leftX-colWidth,topY+rowHeight/2,sSize/2,sSize/2);

    }
    //circle4
    else if (shapeType == 10){
      ellipse(leftX+colWidth/2,topY-rowHeight,sSize/2,sSize/2);
      ellipse(rightX+colWidth,topY+rowHeight/2,sSize/2,sSize/2);
      ellipse(leftX+colWidth/2,bottomY+rowHeight,sSize/2,sSize/2);
      ellipse(leftX-colWidth,topY+rowHeight/2,sSize/2,sSize/2);
    }
    //house
    else if (shapeType == 11){

      rect(leftX,topY,colWidth-1,rowHeight-1);
      fill(183, 156, 126+random(-20,20));
      rect(leftX+colWidth/3,topY+rowHeight/4,colWidth/3,rowHeight/4);
      triangle(leftX,topY,leftX+(colWidth/2),topY-(rowHeight/2),rightX,topY);
      rect(leftX+colWidth/3,topY+rowHeight/1.5,colWidth/3,rowHeight/3);

    }
    //obelisk
    else if (shapeType == 12){


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
    else if (shapeType == 13){

      line(leftX+(colWidth/2),bottomY-(rowHeight/3),leftX+(colWidth/2),bottomY);
      ellipse(leftX+(colWidth/1.9),bottomY-(rowHeight/3),colWidth/4,rowHeight/4);

    }

    //cave
    else if(shapeType == 14){


      quad(leftX-colWidth,bottomY-1,leftX-(colWidth*0.3),topY-rowHeight/2,rightX-(colWidth*0.7),topY-rowHeight/2,rightX,bottomY-1);

      fill(120);
      triangle(leftX-(colWidth*0.3),bottomY-1,leftX,topY+rowHeight/3,leftX+(colWidth*0.3),bottomY-1);

      //fill(193, 217, 255);
      //noStroke();
      //rect(leftX,topY,colWidth,rowHeight);

    }


}




}
