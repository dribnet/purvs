

function Landscape(rows,cols,rowHeight,colWidth){

  var rand = round(random(-5,20));
  rows = round(rows+rand/2);
  cols = cols+rand;
  colWidth = width/cols;
  rowHeight = height/rows;

  var popOpac = 0;
  var opacIncrease = 2;


  var pattern1 = new Pattern(rows,cols,rowHeight,colWidth,30,-1,-1,255,true);
  var pattern2 = new Pattern(rows,cols,rowHeight,colWidth,50,255,255,255,true);
  //var pattern3 = new Pattern(rows,cols,rowHeight,colWidth,150,-1,-1,255);


  this.drawLandscape = function(){

    noStroke();


    //background(168, 204, 255);
    background(169, 234+random(0,5), 156);
    //background(255);
    //pattern1.drawPattern();

    pattern1.drawEnvironment();
    pattern1.printPopulations();
    //pattern1.drawPopulations();

  }

  this.drawBlock = function(){




  }




}
