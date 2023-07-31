// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  textSize(250);
  textAlign(CENTER, CENTER);
  //text("01 : 12 ", width/2, height/2);
  let millis = obj.millis;

  if (millis <300){
  background (0,0,0);
  }
  else {
background (255,105,180);

  }

  //thousands place
  clock (110,155,20,20);
  clock (95,170,20,20);
  clock (90,190,20,20);
  clock (88,210,20,20);
  clock (86,230,20,20);
  clock (86,250,20,20);
  clock (88,270,20,20);
  clock (95,290,20,20);
  clock (110,305,20,20);

  clock (130,150,20,20);
  clock (150,155,20,20);
  clock (165,170,20,20);
  clock (172,190,20,20);
  clock (176,210,20,20);
  clock (178,230,20,20);
  clock (176,250,20,20);
  clock (174,270,20,20);
  clock (168,290,20,20);
  clock (153,305,20,20);
  clock (132,312,20,20);


  //hundreds place 
  clock (285,150,20,20);
  clock (285,170,20,20);
  clock (285,190,20,20);
  clock (285,210,20,20);
  clock (285,230,20,20);
  clock (285,250,20,20);
  clock (285,270,20,20);
  clock (285,290,20,20);
  clock (285,310,20,20);

  clock (267,160,20,20);
  clock (250,170,20,20);
  clock (232,180,20,20);

  // : 

  clock (445,200,20,20);
  clock (445,305,20,20);

  //tens place value
  clock (635,150,20,20);
  clock (635,170,20,20);
  clock (635,190,20,20);
  clock (635,210,20,20);
  clock (635,230,20,20);
  clock (635,250,20,20);
  clock (635,270,20,20);
  clock (635,290,20,20);
  clock (635,310,20,20);

  clock (618,160,20,20);
  clock (600,170,20,20);
  clock (582,180,20,20);

  //ones place value 

  clock (760,150,20,20);
  clock (740,155,20,20);
  clock (725,170,20,20);
  clock (720,190,20,20);

  clock (780,155,20,20);
  clock (795,170,20,20);
  clock (800,190,20,20);
  clock (795,210,20,20);
  clock (780,225,20,20);
  clock (766,240,20,20);
  clock (752,255,20,20);
  clock (738,270,20,20);
  clock (723,285,20,20);
  clock (715,305,20,20);
  clock (735,305,20,20);
  clock (755,305,20,20);
  clock (775,305,20,20);
  clock (795,305,20,20);
  clock (815,305,20,20);

}
function clock (x,y,wd,ht){
  let millis = obj.millis;
  if (millis < 300) {
    fill(200);
  }
  else {
    fill(0);
  }

  ellipse(x,y,wd,ht);
}
