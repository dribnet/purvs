/*
 * us p5.js to draw a clock on a 960x500 canvas
 */

//day and night values
var tc = 0;
var bg = 0;
var tm = 0;
var am = "am";
var pm = "pm";
var time;

//changing time values
var hour_bubble = 0;
var hour_bubble_time = 0;
var day_change = 0;

var sec_bubble = 0;
var sec_bubble_time = 0;

//bubble value radia changing
var mil_tri = 0;
var mil_tri1 = 0;
var mil_tri2 = 0;

var mil_tri3 = 0;
//testing values -->revert if not working
var change_mil
var change_mil1 = 0;
var change_mil2 = 1000;

//alarm values
var radia_x = 900;
var radia_y = 0;


function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    
    
    let h = obj.hours;
    let min = obj.minutes;
    let sec = obj.seconds;
    let mil =  obj.millis;
    let until_alarm = obj.seconds_until_alarm;

    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
    

    bg = map(h,0, 23, 255, 0);
    tc = map(h,0,23,0,255);

    if(until_alarm > 0){
      radia_x = 0;
      radia_y = 900;
      tc = map(mil,0, 1000, 255, 0);
      tm = tc;
    } else if(until_alarm == 0){
      bg = map(mil,0, 1000, 255, 0);
      tc = map(mil,0, 1000, 255, 0);

    } else {
      bg = map(h,0, 23, 255, 0);
      tc = map(h,0,23,0,255);
      radia_x = 900;
      radia_y = 0;
    }
    

    //background and time fill values

    //hourly colour changes
    hour_bubble = map(h,0,23,0,150);
    hour_bubble_time = map(min,0,4,0,900);

    //secondly colour/shape changes
    sec_bubble = map(sec,0,59,255,0);
    sec_bubble_time = map(mil,0,1000,radia_x,radia_y);

    //mill-sec colour value changes + radia sizes
    mil_tri = map(mil,0,1000,0,138);
    mil_tri1 = map(mil,0,1000,0,14);
    mil_tri2 = map(mil,0,1000,0,8);
    mil_tri3 = map(h,0,59,0,900);

    background(bg);

    nerv_clock();
    //House_wallpaper();
    fill(tm); // dark grey
    textSize(92);
    textFont('Impact');
    //textSize(99);

    //fill(255);
    //text("Seconds until alarm: " + until_alarm, 10, 102);
    //values for the hourly time, converting 7 to 07 hours
    if(h < 10){ 
      text('0' + h, 155, 235); 
    }else{
      text(h + '', 155, 235); 
    }

    //values for the minute time, converting 7 to 07 minutes
    if(min < 10){ 
      text('0' + min,375, 235);
    }else{
      text(min + "",375, 235);
    }

    //values for the seconds time, converting 7 to 07 seconds
    if(sec < 10){ 
      text('0' + sec, 265, 345);
    }else{
      text(sec + "", 265, 345);
    }

    //am to pm values changes
    fill(tc); 
    text(time + "", 470, 340);
    // am to pm changes depending on the 0-23 hour setting
    if(h > 12){
      time = pm;
      tm = 0;
     }    else{
      time = am;
      tm = 255;
     }
   
    //background reset section
    if(bg == 255){
        bg == 0;
    }

}

function nerv_clock(){
  ellipseMode(RADIUS); // testing-hour-bubble
  fill(hour_bubble); // revert if not working
  ellipse(200,200, day_change, day_change);

  ellipseMode(RADIUS); // measures the seconds via radia
  fill(138,14,8); // sec is mapped to mil_sec 
  ellipse(530,310, sec_bubble_time, sec_bubble_time);

  strokeWeight(3);
  fill(138,14,8);
  quad(100,200,200,100,300,200,200,300);

  fill(138,14,8);
  quad(210,310,310,210,410,310,310,410);

  fill(138,14,8);
  quad(320,200,420,100,520,200,420,300);

  fill(mil_tri,mil_tri1,mil_tri2);
  quad(430,310,530,210,630,310,530,410);

  //quad(150, 200, 250, 120, 350, 200, 250, 280);
  //  first point - heading this way -->
  //quad(255, 290, 355, 210, 450, 290, 355, 370);
  //quad(360, 380, 460, 300, 550, 380, 460, 470);

}

function House_wallpaper(){

  //old-revert if fully scratched
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

