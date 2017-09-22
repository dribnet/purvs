
/**

Draws the basic pattern which is used to create both the
wallpaper and the landscape.

*/


function Pattern (rows,cols,rowHeight,colWidth,opac,red,green,blue,mode){


  var randomNum;
  var shapeNum = 18;
  var totalPopulation;

  var empty;
  var bigRect;
  var smallRect;
  var grass;
  var bigCircle;
  var flatLine;
  var rock;
  var tree;
  var rect4;
  var circle4;
  var house;
  var person;
  var flower;

  var populations;




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

  this.initPopulations = function(){

    if(mode == true){
      empty = 45 + round(random(-30,80));
      bigRect = 0;
      smallRect = 0;
      grass = 10+ round(random(-5,15));
      bigCircle = 0;
      flatLine = 8+ round(random(-4,5));
      rock = 5 + round(random(-4,15));
      tree = 20 + round(random(-5,20));
      rect4 = 0;
      circle4 = 0;
      house = 1 + round(random(-1,2));
      person = 1;
      flower = 5;
    }
  else{
    empty = 45;
    bigRect = 20;
    smallRect = 10;
    grass = 0;
    bigCircle = 20;
    flatLine = 10
    rock = 10;
    tree = 0;
    rect4 = 20;
    circle4 = 20;
    house = 0;
    person = 0;
    flower = 0;

  }

    populations = [empty,bigRect,smallRect,grass,bigCircle,flatLine,rock,tree,rect4,circle4,house,person,flower];
    totalPopulation = 0;

    for(var i = 0; i < populations.length; i++){
        totalPopulation = totalPopulation + populations[i];
    }


  }




  this.getShape = function(row,col){



    var total = 0;
    var shape;


    var rand = (round(random(0,totalPopulation)));

    //print("rand = " + rand);

    for(var i = 0; i < populations.length; i++){

      //print("populations" + i + " = " + populations[i]);
      total=total+populations[i];
      //print("total = " + total);
      if(total > rand){
        shape = i;
        //print("got! i = " + i);
        break;
      }


    }


    //print("shape = " + shape);

    return shape;

  }



  // randomize all values for drawing the shapes
  this.randomizeValues = function (){

    this.initPopulations();


    for(var row = 0; row< rows-1; row++){
      for(var col = 0; col< cols-1; col++){

        //randomNum = round(random(0,shapeNum));
        //shapeTypes[row][col] = randomNum;
        shapeTypes[row][col] = this.getShape(row,col);

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

      for(var row = 0; row< rows; row++){
        for(var col = 0; col< cols; col++){

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

  this.drawEnvironment = function(){

    for(var row = 0; row< rows; row++){
      for(var col = 0; col< cols; col++){

        var sColor = color(255);
        var sType = shapeTypes[row][col];
        var sSize = shapeSize[row][col];

        this.drawShape(row,col,sColor,0,sType,2,0);

      }

    }

    stroke(0);
    fill(255);
    rect(width*0.1,height*0.1,width*0.15,height*0.3);

    textAlign(CENTER);
    fill(0);
    noStroke();
    var lineHeight = height*0.02;
    text("POPULATIONS", width*0.178,height*0.15);

    text("Space = " + round(populations[0]),width*0.178,height*0.15+(lineHeight*2));
    text("Grass = " + round(populations[3]),width*0.178,height*0.15+(lineHeight*3));
    text("Rock = " + round(populations[6]),width*0.178,height*0.15+(lineHeight*4));
    text("Tree = " + round(populations[7]),width*0.178,height*0.15+(lineHeight*5));
    text("House = " + round(populations[10]),width*0.178,height*0.15+(lineHeight*6));
    text("Person = " + round(populations[11]),width*0.178,height*0.15+(lineHeight*7));
    text("Flower = " + round(populations[12]),width*0.178,height*0.15+(lineHeight*8));
    //for(var i = 0; i<populations.length; i++){
    //  text(round(populations[i]),width*0.12,height*0.15+(i*height*0.02));
    //}


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
      rect(leftX,topY,sSize,sSize);
      rect(leftX+sSize/4,topY+sSize/4,sSize/2,sSize/2);
    }
    else if(shapeType == 2){
      //noFill();
      rect(leftX,topY,sSize,sSize);
      rect(leftX+sSize/4,topY+sSize/4,sSize/2,sSize/2);
    }
    else if(shapeType == 3){

      line(leftX,bottomY-(rowHeight/5),leftX,bottomY);
      line(leftX+(colWidth/2),bottomY-(rowHeight/3),leftX+(colWidth/2),bottomY);
      line(rightX,bottomY-(rowHeight/5),rightX,bottomY);
    }
    else if(shapeType == 4){
        ellipse(leftX,topY,sSize,sSize);
        ellipse(leftX,topY,sSize/2,sSize/2);
    }
    else if (shapeType== 5){
      line(leftX,topY+(rowHeight/2),rightX,topY+(rowHeight/2));
    }
    else if(shapeType==6){
      triangle(leftX,topY+(rowHeight/2),leftX+(colWidth/2),topY,rightX,topY+(rowHeight/2));
    }
    else if(shapeType==7){
      line(leftX+(colWidth/2),topY+(rowHeight/2),leftX+(colWidth/2),bottomY+(rowHeight/2));
      fill(sColor);
      triangle(leftX,topY+(rowHeight),leftX+(colWidth/2),topY,rightX,topY+(rowHeight));

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
    else if (shapeType == 10){

      fill(sColor);
      rect(leftX,topY,colWidth,rowHeight);
      rect(leftX+colWidth/3,topY+rowHeight/4,colWidth/3,rowHeight/4);
      triangle(leftX,topY,leftX+(colWidth/2),topY-(rowHeight/2),rightX,topY);
      rect(leftX+colWidth/3,topY+rowHeight/1.5,colWidth/3,rowHeight/3);

    }
    else if (shapeType == 11){

      ellipse(leftX,topY,colWidth/4,rowHeight/2);
      ellipse(leftX,topY+rowHeight/3,colWidth/4,rowHeight/2);

    }
    else if (shapeType == 12){

      line(leftX+(colWidth/2),bottomY-(rowHeight/3),leftX+(colWidth/2),bottomY);
      ellipse(leftX+(colWidth/1.9),bottomY-(rowHeight/3),colWidth/4,rowHeight/4);

    }


    pop();


  }



}
