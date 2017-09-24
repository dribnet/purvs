
/**

Draws the basic pattern which is used to create both the
wallpaper and the landscape.

*/


function Pattern (rows,cols,rowHeight,colWidth,opac,red,green,blue,mode){


  var randomNum;
  var shapeNum = 18;
  var totalPopulation;

  var snowChance;

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
  var lake;

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

      snowChance = random(0,0.8);

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
      obelisk = 1 + round(random(0,2));
      flower = 1 + round(random(1,2)) ;
      lake = 7;
    }
  else{

    snowChance = 0;
    empty = 45;
    bigRect = 20;
    smallRect = 10;
    grass = 4;
    bigCircle = 20;
    flatLine = 10
    rock = 10;
    tree = 0;
    rect4 = 20;
    circle4 = 20;
    house = 0;
    obelisk = 4;
    flower = 4;
    lake = 0;

  }

    populations = [empty,bigRect,smallRect,grass,bigCircle,flatLine,rock,tree,rect4,circle4,house,obelisk,flower,lake];
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

    stroke(53,74,42);

    fill(123,182,91);
    rect(width*0.1,height*0.1,width*0.15,height*0.3);

    textAlign(CENTER);
    fill(53,74,42);
    noStroke();
    var lineHeight = height*0.02;
    text("POPULATIONS", width*0.178,height*0.15);

    text("Space = " + round(populations[0]),width*0.178,height*0.15+(lineHeight*2));
    text("Grass = " + round(populations[3]),width*0.178,height*0.15+(lineHeight*3));
    text("Rock = " + round(populations[6]),width*0.178,height*0.15+(lineHeight*4));
    text("Tree = " + round(populations[7]),width*0.178,height*0.15+(lineHeight*5));
    text("House = " + round(populations[10]),width*0.178,height*0.15+(lineHeight*6));
    text("Obelisk = " + round(populations[11]),width*0.178,height*0.15+(lineHeight*7));
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

    var snow;

    if(random(0,1)<= snowChance){
      snow = true;
    }
    else{
      snow = false;
    }

    var shapeType = sType;
    var leftX = col*colWidth;
    var rightX = (col+1)*colWidth;
    var topY = row*rowHeight;
    var bottomY = (row+1)*rowHeight;


    var shape = new Shape(shapeType,sColor,lineColor,sSize,leftX,rightX,topY,bottomY,colWidth,rowHeight,mode,snow);
    shape.createShape();

    pop();


  }



}
