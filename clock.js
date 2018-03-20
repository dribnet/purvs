/*
 * us p5.js to draw a clock on a 960x500 canvas
 */
var tc = 0;
var bg = 0;



function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
    
    let h = obj.hours;
    let min = obj.minutes;
    let sec = obj.seconds;
    let mil =  obj.millis;
    bg = map(sec,0, 59, 0, 255);
    background(bg);

    nerv_clock();
    //House_wallpaper();
    tc = map(sec,0,59,255,0);
    fill(tc); // dark grey
    textSize(92);
    textFont('Impact');
    text(h + " ",160, 235);
    text(min + " ",265, 345);
    text(sec + "", 370, 235);
    text(mil + "", 720, 250);

    if(bg == 255){
        bg == 0;
    }

    


}

function nerv_clock(){

  strokeWeight(3);
  fill(255,33,23);
  quad(100,200,200,100,300,200,200,300);
  quad(210,310,310,210,410,310,310,410);

  quad(320,200,420,100,520,200,420,300);
  quad(430,310,620,210,820,310,620,410);

  //quad(150, 200, 250, 120, 350, 200, 250, 280);
  //  first point - heading this way -->
  //quad(255, 290, 355, 210, 450, 290, 355, 370);
  //quad(360, 380, 460, 300, 550, 380, 460, 470);



}

function House_wallpaper(){

  
  strokeWeight(2);
  


  //house bits
  //chimney
  fill(113,0,2);
  rect(120,300,20,40);

  // the woof
  fill(160,100,39);
  triangle(75,369,170,305,265,369);

  //main house
  fill(215,176,119);
  rect(100,369,135,80);

  //circle window
  //fill(255);
  //ellipse(170,345, 30, 30);

  //door
  fill(87,52,20);
  rect(120,400,25,50,30);

  //window
  fill(255);
  rect(180,390,25,25);

  //the hill  
  fill(32,112,22);
  ellipse(480,650,1290,500);

  
}
