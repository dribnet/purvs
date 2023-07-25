// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  //text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);

  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  fill(200); //grey/white
  ellipse(100+40,140, 30, 30);


  
  fill(200); //grey/white
  ellipse(100+40,170, 30, 30);

  fill(200); //grey/white
  ellipse(70+40,170, 30, 30); //numberflare
  
  fill(200); //grey/white
  ellipse(100+40,200, 30, 30);

  fill(200);
  ellipse(100+40,230, 30, 30);

  fill(200);
  ellipse(100+40,260, 30, 30);

  fill(200);
  ellipse(100+40,290, 30, 30);

  fill(200);
  ellipse(100+40,320, 30, 30);

  fill(200);
  ellipse(100+40,350, 30, 30);

  fill(200);
  ellipse(100+40,380, 30, 30);

  //second '1'

  fill(200); //grey/white
  ellipse(300+40,140, 30, 30);
  
  fill(200); //grey/white
  ellipse(300+40,170, 30, 30);

  fill(200); //grey/white
  ellipse(270+40,170, 30, 30); //numberflare
  
  fill(200); //grey/white
  ellipse(300+40,200, 30, 30);

  fill(200);
  ellipse(300+40,230, 30, 30);

  fill(200);
  ellipse(300+40,260, 30, 30);

  fill(200);
  ellipse(300+40,290, 30, 30);

  fill(200);
  ellipse(300+40,320, 30, 30);

  fill(200);
  ellipse(300+40,350, 30, 30);

  fill(200);
  ellipse(300+40,380, 30, 30);

//dots
fill(200);
ellipse(width/2,170, 30, 30);

fill(200);
ellipse(width/2,350, 30, 30);

//minutesnumbers

fill(200);
  ellipse(630,140, 30, 30);

  fill(200);
  ellipse(660,140, 30, 30);

  fill(200);
  ellipse(690,140, 30, 30);

fill(200);
  ellipse(600,170, 30, 30);

  fill(200);
  ellipse(600,200, 30, 30);

fill(200);
  ellipse(600,230, 30, 30);

  fill(200);
  ellipse(600,260, 30, 30);

  fill(200);
  ellipse(600,290, 30, 30);

  fill(200);
  ellipse(600,320, 30, 30);

  fill(200);
  ellipse(600,350, 30, 30);

  fill(200);
  ellipse(630,380, 30, 30);

  fill(200);
  ellipse(660,380, 30, 30);

  fill(200);
  ellipse(690,380, 30, 30);

  //rightside
  fill(200);
  ellipse(720,170, 30, 30);

  fill(200);
  ellipse(720,200, 30, 30);

fill(200);
  ellipse(720,230, 30, 30);

  fill(200);
  ellipse(720,260, 30, 30);

  fill(200);
  ellipse(720,290, 30, 30);

  fill(200);
  ellipse(720,320, 30, 30);

  fill(200);
  ellipse(720,350, 30, 30);

  //second '0' --------------
  fill(200);
  ellipse(830,140, 30, 30);

  fill(200);
  ellipse(860,140, 30, 30);

  fill(200);
  ellipse(890,140, 30, 30);

fill(200);
  ellipse(800,170, 30, 30);

  fill(200);
  ellipse(800,200, 30, 30);

fill(200);
  ellipse(800,230, 30, 30);

  fill(200);
  ellipse(800,260, 30, 30);

  fill(200);
  ellipse(800,290, 30, 30);

  fill(200);
  ellipse(800,320, 30, 30);

  fill(200);
  ellipse(800,350, 30, 30);

  fill(200);
  ellipse(830,380, 30, 30);

  fill(200);
  ellipse(860,380, 30, 30);

  fill(200);
  ellipse(890,380, 30, 30);

  //rightside
  fill(200);
  ellipse(920,170, 30, 30);

  fill(200);
  ellipse(920,200, 30, 30);

fill(200);
  ellipse(920,230, 30, 30);

  fill(200);
  ellipse(920,260, 30, 30);

  fill(200);
  ellipse(920,290, 30, 30);

  fill(200);
  ellipse(920,320, 30, 30);

  fill(200);
  ellipse(920,350, 30, 30);

}



