

function Landscape(rows,cols,rowHeight,colWidth){


  var pattern1 = new Pattern(rows,cols,rowHeight,colWidth,30,-1,-1,255,true);
  var pattern2 = new Pattern(rows,cols,rowHeight,colWidth,50,255,255,255,true);
  //var pattern3 = new Pattern(rows,cols,rowHeight,colWidth,150,-1,-1,255);


  this.drawLandscape = function(){

    noStroke();


    //background(168, 204, 255);
    background(255);
    //pattern1.drawPattern();

    pattern1.drawEnvironment();
  //  pattern3.drawPattern();

  }




}
