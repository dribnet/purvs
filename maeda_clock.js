// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  black
  noFill(); // dark grey
  
  strokeWeight(2);

  var x = 405;
  var y = 120;
  var redS = 35;
  var yellowS = redS-5;
  var blueS = yellowS-5;
  


  //red 1
  stroke(255,0,0);

  circle(x, y, redS);

  circle(x-redS, y+redS, redS);

  circle(x, y+redS, redS);
  circle(x, y+(redS*2), redS);
  circle(x, y+(redS*3), redS);
  circle(x, y+(redS*4), redS);
  circle(x, y+(redS*5), redS);
  circle(x, y+(redS*6), redS);


  //yellow circles
  stroke(255,255,0); //yellow

  var XLC = x-105; //300
  var YLC = y+redS; //160

  circle(XLC, YLC, yellowS);
  circle(XLC, YLC+redS, yellowS);
  circle(XLC, YLC+(redS*2), yellowS);
  circle(XLC, YLC+(redS*3), yellowS);
  circle(XLC, YLC+(redS*4), yellowS);

  circle(XLC+redS, y, yellowS);
  circle(XLC+(redS*2), y, yellowS);
  circle(XLC+(redS*3), y, yellowS);

  var spce = 140;

  circle(XLC+spce, YLC, yellowS);
  circle(XLC+spce, YLC+redS, yellowS);
  circle(XLC+spce, YLC+(redS*2), yellowS);
  circle(XLC+spce, YLC+(redS*3), yellowS);
  circle(XLC+spce, YLC+(redS*4), yellowS);

  circle(XLC+redS, y+(redS*6), yellowS);
  circle(XLC+(redS*2), y+(redS*6), yellowS);
  circle(XLC+(redS*3), y+(redS*6), yellowS);

  //blue 0

  stroke(0,0,255); //blue

  circle(XLC, YLC, blueS);
  circle(XLC, YLC+redS, blueS);
  circle(XLC, YLC+(redS*2), blueS);
  circle(XLC, YLC+(redS*3), blueS);
  circle(XLC, YLC+(redS*4), blueS);

  circle(XLC+redS, y, blueS);
  circle(XLC+(redS*2), y, blueS);
  circle(XLC+(redS*3), y, blueS);

  circle(XLC+spce, YLC, blueS);
  circle(XLC+spce, YLC+redS, blueS);
  circle(XLC+spce, YLC+(redS*2), blueS);
  circle(XLC+spce, YLC+(redS*3), blueS);
  circle(XLC+spce, YLC+(redS*4), blueS);

  circle(XLC+redS, y+(redS*6), blueS);
  circle(XLC+(redS*2), y+(redS*6), blueS);
  circle(XLC+(redS*3), y+(redS*6), blueS);

  

  //RIGHT NUMBERS
  //red first

  x = 615;

  stroke(255,0,0);

  circle(x, y, redS);

  circle(x-redS, y+redS, redS);

  circle(x, y+redS, redS);
  circle(x, y+(redS*2), redS);
  circle(x, y+(redS*3), redS);
  circle(x, y+(redS*4), redS);
  circle(x, y+(redS*5), redS);
  circle(x, y+(redS*6), redS);

  
  
  //yellow

  stroke(255,255,0); 

  var XLC = x-105; //300
  var YLC = y+redS; //160

  circle(XLC, YLC, yellowS);
  circle(XLC, YLC+redS, yellowS);
  circle(XLC, YLC+(redS*2), yellowS);

  circle(XLC+redS, YLC+(redS*3), yellowS);
  circle(XLC+(redS*2), YLC+(redS*3), yellowS);
  circle(XLC+(redS*3), YLC+(redS*3), yellowS);
  

  circle(XLC+redS, y, yellowS);
  circle(XLC+(redS*2), y, yellowS);
  circle(XLC+(redS*3), y, yellowS);

  var spce = 140;

  circle(XLC+spce, YLC, yellowS);
  circle(XLC+spce, YLC+redS, yellowS);
  circle(XLC+spce, YLC+(redS*2), yellowS);
  circle(XLC+spce, YLC+(redS*3), yellowS);
  circle(XLC+spce, YLC+(redS*4), yellowS);

  circle(XLC+redS, y+(redS*6), yellowS);
  circle(XLC+(redS*2), y+(redS*6), yellowS);
  circle(XLC+(redS*3), y+(redS*6), yellowS);



  //blue

  stroke(0,0,255); //blue

  circle(XLC, YLC, blueS);
  circle(XLC, YLC+redS, blueS);
  circle(XLC, YLC+(redS*2), blueS);
  circle(XLC, YLC+(redS*3), blueS);
  circle(XLC, YLC+(redS*4), blueS);

  circle(XLC+redS, YLC+redS, blueS);
  circle(XLC+(redS*2), YLC+redS, blueS);
  circle(XLC+(redS*3), YLC+redS, blueS);


  circle(XLC+redS, y, blueS);
  circle(XLC+(redS*2), y, blueS);
  circle(XLC+(redS*3), y, blueS);

  circle(XLC+spce, YLC+(redS*2), blueS);
  circle(XLC+spce, YLC+(redS*3), blueS);
  circle(XLC+spce, YLC+(redS*4), blueS);

  circle(XLC+redS, y+(redS*6), blueS);
  circle(XLC+(redS*2), y+(redS*6), blueS);
  circle(XLC+(redS*3), y+(redS*6), blueS);





}
