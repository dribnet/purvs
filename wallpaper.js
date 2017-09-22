/**
Draws a basic wallpaper by creating 3 layers of the pattern on
top of eachother.
**/

function Wallpaper(rows,cols,rowHeight,colWidth){

  var red = 0;
  var green = 0;
  var blue = 0;

  var rand = round(random(0,3));
  //rand = 2;
  print(rand);

  if(rand==1){
    red = 255;
    blue = -1;
    green = -1;
  }
  else if (rand==2){
    red = -1;
    blue = 255;
    green = -1;
  }
  else{
    red = -1;
    blue = -1;
    green = 255;
  }



  var pattern1 = new Pattern(rows,cols,rowHeight,colWidth,30,red,green,blue,false);
  var pattern2 = new Pattern(rows,cols,rowHeight,colWidth,50,red,green,blue,false);
  var pattern3 = new Pattern(rows,cols,rowHeight,colWidth,150,red,green,blue,false);


  this.drawWallpaper = function(){

    if(rand == 3){
      background(109, 150, 112);
    }
    else if(rand == 1){
      background(183, 91, 108);
    }
    else{
      background(58, 83, 140);
    }
    pattern1.drawPattern();
    pattern2.drawPattern();
    pattern3.drawPattern();

  }




}
