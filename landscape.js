

function Landscape(rows,cols,rowHeight,colWidth){

  var pattern1 = new Pattern(rows,cols,rowHeight,colWidth,30,-1,-1,255);
  var pattern2 = new Pattern(rows,cols,rowHeight,colWidth,50,255,255,255);
  //var pattern3 = new Pattern(rows,cols,rowHeight,colWidth,150,-1,-1,255);


  this.drawLandscape = function(){

    noStroke();


    background(168, 204, 255);
    //pattern1.drawPattern();
    fill(25,45,73);
    rect(0,(rows-1)*0.3*rowHeight,width,height);
    pattern1.drawPattern(rows*0.3,rows);
    pattern2.drawPattern(round(rows*0.07),rows*0.15);
  //  pattern3.drawPattern();

  }




}
