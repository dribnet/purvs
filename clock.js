/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function preload(){
  img = loadImage('Sun_CC.png');
}

function draw_clock(obj) {
angleMode(DEGREES);
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off




//clock with no bounce
  let millis = obj.millis;
  let seconds = obj.seconds;
  let minutes = obj.minutes;
  let hours = obj.hours;


  background(50); //  beige
  fill(200); // dark grey
  textSize(10);
  textAlign(CENTER, CENTER);
  text("Hours: " + hours, 40, 30);
  text("Minutes: " + minutes, 40, 45);
  text("Seconds: " + seconds, 40, 60);
  text("Millis: " + millis, 40, 75);


  // let bounce1 = map(obj.millis, 0, 999, 0, TWO_PI);
  // let phase1 = sin(bounce1);
  // let y_bounce1 = map(phase1, -1, 1, -10, 10);

  // let bounce2 = map((obj.millis+100), 0, 999, 0, TWO_PI);
  // let phase2 = sin(bounce2);
  // let y_bounce2 = map(phase2, -1, 1, -10, 10);

  // let bounce3 = map(obj.millis, 0, 999, 0, TWO_PI);
  // let phase3 = sin(bounce3);
  // let y_bounce3 = map(phase3, -1, 1, -10, 10);

  // let bounce4 = map((obj.millis+100), 0, 999, 0, TWO_PI);
  // let phase4 = sin(bounce4);
  // let y_bounce4 = map(phase4, -1, 1, -10, 10);




  
  let hours_radius = map(hours, 0, 59, 80, 80);
  fill(249, 140, 255);// pink
  //ellipse(width /2, 275, hours_radius);
  image (img, width/2 -35 , height/2 -35, hours_radius, 80);
  let rotH = map(minutes + (seconds/1000.0), 0, 59, -90, 270);
  let minutes_radius = map(minutes, 0, 59, 55, 55);

  push();
    translate(width/2, height/2);
    rotate(rotH);
    fill(140,255,251); //blue
    ellipse(150,0,minutes_radius);
    
    let rotM = map(seconds + (millis/1000.0), 0, 59, 0, 360);
    let seconds_radius = map(seconds, 0, 59, 35, 35);
    let rotS = map(millis, 0,999,0, 360)
    
        push();
          translate (150,0);
          rotate (rotM);
          fill(175, 133, 255); //purple
          ellipse(70,0,seconds_radius);
                
          let millis_radius = map(millis, 0, 999, 15, 15);
                push();
                  translate (70,0);
                  rotate (rotS);
                  fill(255, 165, 0); // orange
                  ellipse(30,0, millis_radius);
              
                pop();

    pop ();  

  pop();
      
    }






// BACKUPPFirst clock made, the circles that get bigger and smaller based on the time, Circles also bounce up and down :)
//   let millis = obj.millis;
//   let seconds = obj.seconds;
//   let minutes = obj.minutes;
//   let hours = obj.hours;


//   background(50); //  beige
//   fill(200); // dark grey
//   textSize(10);
//   textAlign(CENTER, CENTER);
//   text("Hours: " + hours, width / 2, 30);
//   text("Minutes: " + minutes, width / 2, 45);
//   text("Seconds: " + seconds, width / 2, 60);
//   text("Millis: " + millis, width / 2, 75);


//   let bounce1 = map(obj.millis, 0, 999, 0, TWO_PI);
//   let phase1 = sin(bounce1);
//   let y_bounce1 = map(phase1, -1, 1, -10, 10);

//   let bounce2 = map((obj.millis+100), 0, 999, 0, TWO_PI);
//   let phase2 = sin(bounce2);
//   let y_bounce2 = map(phase2, -1, 1, -10, 10);

//   let bounce3 = map(obj.millis, 0, 999, 0, TWO_PI);
//   let phase3 = sin(bounce3);
//   let y_bounce3 = map(phase3, -1, 1, -10, 10);

//   let bounce4 = map((obj.millis+100), 0, 999, 0, TWO_PI);
//   let phase4 = sin(bounce4);
//   let y_bounce4 = map(phase4, -1, 1, -10, 10);




  
//   let hours_radius = map(hours, 0, 59, 70, 90);
//   fill(249, 140, 255);// pink
//   ellipse(width /2, 275 + y_bounce1, hours_radius);
//   let rotH = map(minutes, 0, 59, 0, TWO_PI);
//   let minutes_radius = map(minutes, 0, 59, 50, 70);

//   push();
//     translate(width/2, 275 + y_bounce1);
//     rotate(rotH);
//     fill(140,255,251); //blue
//     ellipse(100,0,minutes_radius);
    
//     let rotM = map(seconds, 0, 59, 0, TWO_PI);
//     let seconds_radius = map(seconds, 0, 59, 30, 50);
    
//     push ();
//       translate (10,10 + y_bounce2);
//       rotate (rotM);
//       fill(175, 133, 255); //purple
//       ellipse(100,0,seconds_radius);
//     pop ()  

//   pop();

  


//   //let secondsWithFraction   = seconds + (millis / 1000.0);
//   //let seconds_radius = map(secondsWithFraction, 0, 59, 30, 50);
//   //fill(175, 133, 255); // purple
//   //ellipse(width / 3 * 2, 350 + y_bounce3, seconds_radius);
//   let rotS = map(millis, 0,999,0, TWO_PI)
  


  

//   let millis_radius = map(millis, 0, 999, 10, 30);

//   push();
//     translate (width / 3 * 2, 350 + y_bounce3);
//     rotate (rotS);
//     fill(255, 165, 0); // orange
//     ellipse(75,0, millis_radius);

//   pop();



// }





//Clock that made the millis orbitting the seconds and thats it. Backup save :)
// let millis = obj.millis;
// let seconds = obj.seconds;
// let minutes = obj.minutes;
// let hours = obj.hours;


// background(50); //  beige
// fill(200); // dark grey
// textSize(30);
// textAlign(CENTER, CENTER);
// text("Hours: " + hours, width / 2, 120);
// text("Minutes: " + minutes, width / 2, 160);
// text("Seconds: " + seconds, width / 2, 200);
// text("Millis: " + millis, width / 2, 240);


// let bounce1 = map(obj.millis, 0, 999, 0, TWO_PI);
// let phase1 = sin(bounce1);
// let y_bounce1 = map(phase1, -1, 1, -10, 10);

// let bounce2 = map((obj.millis+100), 0, 999, 0, TWO_PI);
// let phase2 = sin(bounce2);
// let y_bounce2 = map(phase2, -1, 1, -10, 10);

// let bounce3 = map(obj.millis, 0, 999, 0, TWO_PI);
// let phase3 = sin(bounce3);
// let y_bounce3 = map(phase3, -1, 1, -10, 10);

// let bounce4 = map((obj.millis+100), 0, 999, 0, TWO_PI);
// let phase4 = sin(bounce4);
// let y_bounce4 = map(phase4, -1, 1, -10, 10);




// let hours_radius = map(hours, 0, 59, 70, 90);
// fill(249, 140, 255);// pink
// ellipse(width / 3, 350 + y_bounce1, hours_radius);

// let minuteswithFraction = minutes + (seconds / 1000.0);
// let minutes_radius = map(minuteswithFraction, 0, 59, 50, 70);
// fill(140, 255, 251) // blue
// ellipse(width / 2, 350 + y_bounce2, minutes_radius);


// let secondsWithFraction   = seconds + (millis / 1000.0);
// let seconds_radius = map(secondsWithFraction, 0, 59, 30, 50);
// fill(175, 133, 255); // purple
// let rotS = map(seconds, 0,59,0, TWO_PI)
// ellipse(width / 3 * 2, 350 + y_bounce3, seconds_radius);

// let millis_radius = map(millis, 0, 999, 10, 30);

// push();
//   translate (width / 3 * 2, 350 + y_bounce3);
//   rotate (rotS);
//   fill(255, 165, 0); // orange
//   ellipse(75,0, millis_radius);

// pop();



// }




// 25 July Tuesday, Horizons Clock Orbits
// angleMode(DEGREES);
//     background(253, 196, 255);
//     stroke(255);
//     strokeWeight(3);
//     textAlign(CENTER, CENTER);
//     textSize(80);
 

//     let hourC = color(255, 250, 115); // light yellow
//     let minuteC = color(171,225,239); // light blue
//     let secondC = color(140, 255, 140); // light green
    

//     drawHour(250,200,obj.hours,hourC,minuteC);

//     drawMinute(450,350,obj.minutes,minuteC,secondC);

//     drawSecond(650,200,obj.seconds,secondC,hourC);
  
//     noStroke();
//     fill(255);
//     ellipse(450, 100, 100);

//     fill(253, 196, 255);

//     if(obj.hours < 5 || obj.hours > 19 ) {
//         ellipse(475, 100, 100);// night 
//     }    
//     else if(obj.hours >=5 && obj.hours < 7 ){
//         ellipse(450, 120, 100);//  dawn 
//     }
//     else if (obj.hours >=17 && obj.hours <= 19 ){
//         ellipse(450, 65, 100);//  dusk 
//     }
//     else{
//         fill(255);
//         ellipse(450, 100, 100);
//     }

// }



// function drawHour(x,y,curHour,Hc,Mc){
//     fill(Hc);
//     let hoursMap = map(curHour,0,23, 0,360);
//     let colorLerpMap = map(curHour, 0,23, 0,1);
//     let betweenColor= lerpColor(Hc,Mc,colorLerpMap);

//     push();
//         translate(x,y);
//         ellipse(0,0, 200);
//         rotate(hoursMap);
//         translate(0,-130);
//         fill(betweenColor);
//         ellipse(0,0, 30);
//     pop();
// }


// function drawMinute(x,y, curMin,Mc,Sc){
//     fill(Mc);
//     let minuteMap = map(curMin, 0,59, 0, 360);
//     let colorLerpMap = map(curMin, 0,59, 0,1);
//     let betweenColor= lerpColor(Mc,Sc,colorLerpMap);

//     push();
//     translate(x,y);
//     ellipse(0,0, 200);
//     rotate(minuteMap);
//     fill(betweenColor);
//     ellipse(0,-130, 30);
//     pop();
// }

// function drawSecond(x,y,curSec,Sc,Hc){
//     fill(Sc);
//     let colorLerpMap = map(curSec, 0,59, 0,1);
//     let secondMap = map(curSec, 0,59, 0, 360);
//     let betweenColor= lerpColor(Sc,Hc,colorLerpMap);

//     push();
//     translate(x,y);
//     ellipse(0,0, 200);
//     rotate(secondMap);
//     fill(betweenColor);
//     ellipse(0,-130, 30);
//     pop();
// }



