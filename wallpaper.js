/**
Draws a basic wallpaper by creating 3 layers of the pattern on
top of eachother.
**/

function Wallpaper(rows,cols,rowHeight,colWidth){

  var pattern1 = new Pattern(rows,cols,rowHeight,colWidth,30,-1,-1,255);
  var pattern2 = new Pattern(rows,cols,rowHeight,colWidth,50,-1,-1,255);
  var pattern3 = new Pattern(rows,cols,rowHeight,colWidth,150,-1,-1,255);


  this.drawWallpaper = function(){

    background(255);
    pattern1.drawPattern();
    pattern2.drawPattern();
    pattern3.drawPattern();

  }




}
