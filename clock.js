/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let  img;
function preload(){
  img_1=loadImage('1plate.png');
  img_hour=loadImage('1meat.png');
  img_minute=loadImage('1asparagus.png');
  img_seconds=loadImage('green_pea');


}

function draw_clock(obj) {
    let hours = obj.hours;
    let minute = obj. minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  
 
  text("Second:"+seconds, 80, 100);
  text("Hours:"+hours, 50, 50);
  





  let seconds_radius=map(seconds,0,59,1,150);
  ellipse(100,100,seconds_radius);
   



    fill(255, 255, 0);
   
  
    image(img_1,width/2-200,height/4-70, 400, 400)
  
 



  
  

}
