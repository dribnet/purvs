/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
let secondBarWidth2 = 0;
let secondBarHeight = 0;

let a, b;
let c, v;

//function setup(){
//    a = width / 2;
//    b = height;
//}
      a = 850;
      b = 120;
      c = 850;
      v = 120;
      d = 850;
      s = 120;
      n = 850;
      z = 120;

function draw_clock(obj) {
    createCanvas(950, 500);
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
    
    var x = 30;
    var y = 30;
    
    

//    let hours = obj.hours;
//    hourBarWidth   = map(hours, 0, 23, 0, width);
    
    
    //let seconds = obj.seconds;
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let second = obj.second;
    let alarmsec = obj.seconds_until_alarm
    
     //let hourBarWidth   = map(hours, 0, 23, 0, width);
    //let minuteBarWidth = map(minutes, 0, 59, 0, width);
    
    secondBarHeight = map(hours, 0, 59, height/2.2, 10);

    secondBarHeighthalf = map(hours, 0, 59, height/4, 5);

    secondBarHeight = map(minutes, 0, 59, height/2.2, 10);

    secondBarHeighthalf = map(minutes, 0, 59, height/4, 5);
    
    secondBarHeight = map(seconds, 0, 59, height/2.2, 10);

    secondBarHeighthalf = map(seconds, 0, 59, height/4, 5);

    secondBarWidth = map(alarmsec, 0, 20, 0, 800);
    secondBarWidth2 = map(hours, 0, 59, 0, 130);
    secondBarWidth2 = map(minutes, 0, 59, 0, 130);
    secondBarWidth2 = map(seconds, 0, 59, 0, 130);
    //let secondBarWidth3 = map(seconds, 0, 59, 0, 130);

    background(255);

//     if(seconds > 10){
//         weirdShape(800, 400);
//     } if(seconds == 1){
//         weirdShape(700, 400);
//     }

//     if(seconds > 10){
//         vertBar(150, 50, 30, 230);
//     }
    
//if(hours = 0){
//    hours > 10;
//}
    
    //minutes = minutes + 1;
//if(minutes > 30){
//    minutes = minutes + 1;
// if(minutes < 0)
//        minutes = 0;
//}//else{
  //  minutes < 0;
    //minutes = minutes + 1;
//} 
    
    
//    if(minutes > 30){
//      minutes = minutes+1;
//    }else if(minutes < 0){
//    minutes = 0;
//    }
    
    
    
//else if (a > 100) {
     //fill(0);
    //ellipse(250, 250, 100 ,100);
 //}
    
//     if(seconds > 1){
//         //draw 1 in the first number slot
//         vertBar(50, 50, 30, 230);
//     }
      if(hours == 1){
         //draw 1 in the second slot
         vertBar(300, 50, 30, 230);
          
     }else if(hours == 2){
         //draw 2 in the second slot 
         halfvertBar(350, 50, 30, 130);
         halfvertBar(250, 150, 30, 130);
         horiBar(250, 50);
         horiBar(250, 150);
         horiBar(250, 250);
         
     }else if(hours == 3){
         //draw 3 in the second slot
         vertBar(350, 50, 30, 230);
         horiBar(250, 50);
         horiBar(250, 150);
         horiBar(250, 250);
         
     }else if(hours == 4){
         //draw 4 in the second slot
         vertBar(350, 50, 30, 230);
         halfvertBar(250, 50, 30, 130);
         horiBar(250, 150);
         
     }else if(hours == 5){
         //draw 5 in the second slot
         halfvertBar(250, 50, 30, 130);
         halfvertBar(350, 150, 30, 130);
         horiBar(250, 50);
         horiBar(250, 150);
         horiBar(250, 250);
         
       }else if(hours == 6){
         //draw 6 in the second slot
         vertBar(250, 50, 30, 230);
          halfvertBar(350, 150, 30, 130);
          horiBar(250, 150);
          horiBar(250, 250);
           
       }else if(hours == 7){
         //draw 7 in the second slot
         horiBar(250, 50);
         vertBar(350, 50, 30, 230);
           
       }else if(hours == 8){
         //draw 8 in the second slot
            vertBar(250, 50, 30, 230);
            vertBar(350, 50, 30, 230);
            horiBar(250, 50);
            horiBar(250, 150);
            horiBar(250, 250);
           
       }else if(hours == 9){
         //draw 9 in the second slot
            halfvertBar(250, 50, 30, 130);
            vertBar(350, 50, 30, 230);
            horiBar(250, 50);
            horiBar(250, 150);
           
       }else if(hours == 10){
         //draw 10 in the second slot
            vertBar(150, 50, 30, 230);
            vertBar(250, 50, 30, 230);
            vertBar(350, 50, 30, 230);
            horiBar(250, 50);
            horiBar(250, 250);
           
       }else if(hours == 11){
         //draw 11 in the second slot
            vertBar(150, 50, 30, 230);
            vertBar(250, 50, 30, 230);
           
       }else if(hours == 12){
         //draw 12 in the second slot
            vertBar(150, 50, 30, 230);
            halfvertBar(350, 50, 30, 130);
            halfvertBar(250, 150, 30, 130);
            horiBar(250, 50);
            horiBar(250, 150);
            horiBar(250, 250);
           
       }else if(hours == 13){
         //draw 13 in the second slot
            vertBar(150, 50, 30, 230);
            vertBar(350, 50, 30, 230);
            horiBar(250, 50);
            horiBar(250, 150);
            horiBar(250, 250);
           
       }else if(hours == 14){
         //draw 14 in the second slot
            vertBar(150, 50, 30, 230);
            vertBar(350, 50, 30, 230);
            halfvertBar(250, 50, 30, 130);
            horiBar(250, 150);
           
       }else if(hours == 15){
         //draw 15 in the second slot
            vertBar(150, 50, 30, 230);
            halfvertBar(250, 50, 30, 130);
            halfvertBar(350, 150, 30, 130);
            horiBar(250, 50);
            horiBar(250, 150);
            horiBar(250, 250);
           
       }else if(hours == 16){
         //draw 16 in the second slot
            vertBar(150, 50, 30, 230);
            vertBar(250, 50, 30, 230);
          halfvertBar(350, 150, 30, 130);
          horiBar(250, 150);
          horiBar(250, 250);
           
       }else if(hours == 17){
         //draw 17 in the second slot
            vertBar(150, 50, 30, 230);
            horiBar(250, 50);
         vertBar(350, 50, 30, 230);
           
       }else if(hours == 18){
         //draw 18 in the second slot
            vertBar(150, 50, 30, 230);
             vertBar(250, 50, 30, 230);
            vertBar(350, 50, 30, 230);
            horiBar(250, 50);
            horiBar(250, 150);
            horiBar(250, 250);
           
       }else if(hours == 19){
         //draw 19 in the second slot
            vertBar(150, 50, 30, 230);
            halfvertBar(250, 50, 30, 130);
            vertBar(350, 50, 30, 230);
            horiBar(250, 50);
            horiBar(250, 150);
           
       }else if(hours == 20){
         //draw 20 in the second slot
            halfvertBar(150, 50, 30, 130);
           halfvertBar(50, 150, 30, 130);
           horiBar(50, 50);
           horiBar(50, 150);
           horiBar(50, 250);
           vertBar(250, 50, 30, 230);
           vertBar(350, 50, 30, 230);
           horiBar(250, 50);
           horiBar(250, 250);
           
       }else if(hours == 21){
         //draw 21 in the second slot
            halfvertBar(150, 50, 30, 130);
           halfvertBar(50, 150, 30, 130);
           horiBar(50, 50);
           horiBar(50, 150);
           horiBar(50, 250);
           vertBar(250, 50, 30, 230);
            
       }else if(hours == 22){
         //draw 22 in the second slot
           halfvertBar(150, 50, 30, 130);
           halfvertBar(50, 150, 30, 130);
           horiBar(50, 50);
           horiBar(50, 150);
           horiBar(50, 250);
           halfvertBar(350, 50, 30, 130);
           halfvertBar(250, 150, 30, 130);
           horiBar(250, 50);
           horiBar(250, 150);
           horiBar(250, 250);
            
       }else if(hours == 23){
         //draw 23 in the second slot
           halfvertBar(150, 50, 30, 130);
           halfvertBar(50, 150, 30, 130);
           horiBar(50, 50);
           horiBar(50, 150);
           horiBar(50, 250);
           vertBar(350, 50, 30, 230);
           horiBar(250, 50);
           horiBar(250, 150);
           horiBar(250, 250);
           
       }else if(hours == 0){
         //draw 0 in the second slot
         vertBar(250, 50, 30, 230);
         vertBar(350, 50, 30, 230);
         horiBar(250, 50);
         horiBar(250, 250);
         vertBar(50, 50, 30, 230);
         vertBar(150, 50, 30, 230);
         horiBar(50, 50);
         horiBar(50, 250);
           
     }
    

    
    if(minutes == 1){
         //draw 0 in the third slot?
         vertBar(450, 50, 30, 230);
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 250);
         //draw 1 in the last slot
         vertBar(700, 50, 30, 230);
     }else if(minutes == 2){
         //draw 0 in the third slot?
         vertBar(450, 50, 30, 230);
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 250);
         //draw 2 in the last slot
         halfvertBar(750, 50, 30, 130);
         halfvertBar(650, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 3){
         //draw 0 in the third slot?
         vertBar(450, 50, 30, 230);
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 250);
         //draw 3 in the last slot
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 4){
         //draw 0 in the third slot?
         vertBar(450, 50, 30, 230);
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 250);
         //draw 4 in the last slot
         vertBar(750, 50, 30, 230);
         halfvertBar(650, 50, 30, 130);
         horiBar(650, 150);
     }else if(minutes == 5){
         //draw 0 in the third slot?
         vertBar(450, 50, 30, 230);
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 250);
         //draw 5 in the last slot
         halfvertBar(650, 50, 30, 130);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 6){
         //draw 0 in the third slot?
         vertBar(450, 50, 30, 230);
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 250);
         //draw 6 in the last slot
         vertBar(650, 50, 30, 230);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 7){
         //draw 0 in the third slot?
         vertBar(450, 50, 30, 230);
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 250);
         //draw 7 in the last slot
         horiBar(650, 50);
         vertBar(750, 50, 30, 230);
     }else if(minutes == 8){
         //draw 0 in the third slot?
         vertBar(450, 50, 30, 230);
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 250);
         //draw 8 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 9){
         //draw 0 in the third slot?
         vertBar(450, 50, 30, 230);
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 250);
         //draw 9 in the last slot
         halfvertBar(650, 50, 30, 130);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
     }else if(minutes == 10){
         //draw 0 in the third slot?
         vertBar(500, 50, 30, 230);
         //draw 10 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 250);
     }else if(minutes == 11){
         //draw 0 in the third slot?
         vertBar(500, 50, 30, 230);
         //draw 11 in the last slot
         vertBar(650, 50, 30, 230);
     }else if(minutes == 12){
         //draw 0 in the third slot?
         vertBar(500, 50, 30, 230);
         //draw 12 in the last slot
         halfvertBar(750, 50, 30, 130);
         halfvertBar(650, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 13){
         //draw 0 in the third slot?
         vertBar(500, 50, 30, 230);
         //draw 13 in the last slot
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 14){
         //draw 0 in the third slot?
         vertBar(500, 50, 30, 230);
         //draw 14 in the last slot
         vertBar(750, 50, 30, 230);
         halfvertBar(650, 50, 30, 130);
         horiBar(650, 150);
     }else if(minutes == 15){
         //draw 0 in the third slot?
         vertBar(500, 50, 30, 230);
         //draw 15 in the last slot
         halfvertBar(650, 50, 30, 130);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 16){
         //draw 0 in the third slot?
         vertBar(500, 50, 30, 230);
         //draw 16 in the last slot
         vertBar(650, 50, 30, 230);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 17){
         //draw 0 in the third slot?
         vertBar(500, 50, 30, 230);
         //draw 17 in the last slot
         horiBar(650, 50);
         vertBar(750, 50, 30, 230);
     }else if(minutes == 18){
         //draw 0 in the third slot?
         vertBar(500, 50, 30, 230);
         //draw 18 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 19){
         //draw 0 in the third slot?
         vertBar(500, 50, 30, 230);
         //draw 19 in the last slot
         halfvertBar(650, 50, 30, 130);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
     }else if(minutes == 20){
         //draw 0 in the third slot?
         halfvertBar(550, 50, 30, 130);
         halfvertBar(450, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 20 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 250);
     }else if(minutes == 21){
         //draw 0 in the third slot?
         halfvertBar(550, 50, 30, 130);
         halfvertBar(450, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 21 in the last slot
         vertBar(700, 50, 30, 230);
     }else if(minutes == 22){
         //draw 0 in the third slot?
         halfvertBar(550, 50, 30, 130);
         halfvertBar(450, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 22 in the last slot
         halfvertBar(750, 50, 30, 130);
         halfvertBar(650, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 23){
         //draw 0 in the third slot?
         halfvertBar(550, 50, 30, 130);
         halfvertBar(450, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 23 in the last slot
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 24){
         //draw 0 in the third slot?
         halfvertBar(550, 50, 30, 130);
         halfvertBar(450, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 24 in the last slot
         vertBar(750, 50, 30, 230);
         halfvertBar(650, 50, 30, 130);
         horiBar(650, 150);
     }else if(minutes == 25){
         //draw 0 in the third slot?
         halfvertBar(550, 50, 30, 130);
         halfvertBar(450, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 25 in the last slot
         halfvertBar(650, 50, 30, 130);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 26){
         //draw 0 in the third slot?
         halfvertBar(550, 50, 30, 130);
         halfvertBar(450, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 26 in the last slot
         vertBar(650, 50, 30, 230);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 27){
         //draw 0 in the third slot?
         halfvertBar(550, 50, 30, 130);
         halfvertBar(450, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 27 in the last slot
         horiBar(650, 50);
         vertBar(750, 50, 30, 230);
     }else if(minutes == 28){
         //draw 0 in the third slot?
         halfvertBar(550, 50, 30, 130);
         halfvertBar(450, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 28 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 29){
         //draw 0 in the third slot?
         halfvertBar(550, 50, 30, 130);
         halfvertBar(450, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 29 in the last slot
         halfvertBar(650, 50, 30, 130);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
     }else if(minutes == 30){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 30 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 250);
     }else if(minutes == 31){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 31 in the last slot
         vertBar(700, 50, 30, 230);
     }else if(minutes == 32){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 32 in the last slot
         halfvertBar(750, 50, 30, 130);
         halfvertBar(650, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 33){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 33 in the last slot
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 34){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 34 in the last slot
         vertBar(750, 50, 30, 230);
         halfvertBar(650, 50, 30, 130);
         horiBar(650, 150);
     }else if(minutes == 35){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 35 in the last slot
         halfvertBar(650, 50, 30, 130);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 36){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 36 in the last slot
         vertBar(650, 50, 30, 230);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 37){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 37 in the last slot
         horiBar(650, 50);
         vertBar(750, 50, 30, 230);
     }else if(minutes == 38){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 38 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 39){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 39 in the last slot
         halfvertBar(650, 50, 30, 130);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
     }else if(minutes == 40){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         halfvertBar(450, 50, 30, 130);
         horiBar(450, 150);
         //draw 40 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 250);
     }else if(minutes == 41){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         halfvertBar(450, 50, 30, 130);
         horiBar(450, 150);
         //draw 41 in the last slot
         vertBar(700, 50, 30, 230);
     }else if(minutes == 42){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         halfvertBar(450, 50, 30, 130);
         horiBar(450, 150);
         //draw 42 in the last slot
         halfvertBar(750, 50, 30, 130);
         halfvertBar(650, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 43){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         halfvertBar(450, 50, 30, 130);
         horiBar(450, 150);
         //draw 43 in the last slot
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 44){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         halfvertBar(450, 50, 30, 130);
         horiBar(450, 150);
         //draw 44 in the last slot
         vertBar(750, 50, 30, 230);
         halfvertBar(650, 50, 30, 130);
         horiBar(650, 150);
     }else if(minutes == 45){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         halfvertBar(450, 50, 30, 130);
         horiBar(450, 150);
         //draw 45 in the last slot
         halfvertBar(650, 50, 30, 130);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 46){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         halfvertBar(450, 50, 30, 130);
         horiBar(450, 150);
         //draw 46 in the last slot
         vertBar(650, 50, 30, 230);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 47){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         halfvertBar(450, 50, 30, 130);
         horiBar(450, 150);
         //draw 47 in the last slot
         horiBar(650, 50);
         vertBar(750, 50, 30, 230);
     }else if(minutes == 48){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         halfvertBar(450, 50, 30, 130);
         horiBar(450, 150);
         //draw 48 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 49){
         //draw 0 in the third slot?
         vertBar(550, 50, 30, 230);
         halfvertBar(450, 50, 30, 130);
         horiBar(450, 150);
         //draw 49 in the last slot
         halfvertBar(650, 50, 30, 130);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
     }else if(minutes == 50){
         //draw 0 in the third slot?
         halfvertBar(450, 50, 30, 130);
         halfvertBar(550, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 50 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 250);
     }else if(minutes == 51){
         //draw 0 in the third slot?
         halfvertBar(450, 50, 30, 130);
         halfvertBar(550, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 51 in the last slot
         vertBar(700, 50, 30, 230);
     }else if(minutes == 52){
         //draw 0 in the third slot?
         halfvertBar(450, 50, 30, 130);
         halfvertBar(550, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 52 in the last slot
         halfvertBar(750, 50, 30, 130);
         halfvertBar(650, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 53){
         //draw 0 in the third slot?
         halfvertBar(450, 50, 30, 130);
         halfvertBar(550, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 53 in the last slot
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 54){
         //draw 0 in the third slot?
         halfvertBar(450, 50, 30, 130);
         halfvertBar(550, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 54 in the last slot
         vertBar(750, 50, 30, 230);
         halfvertBar(650, 50, 30, 130);
         horiBar(650, 150);
     }else if(minutes == 55){
         //draw 0 in the third slot?
         halfvertBar(450, 50, 30, 130);
         halfvertBar(550, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 55 in the last slot
         halfvertBar(650, 50, 30, 130);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 56){
         //draw 0 in the third slot?
         halfvertBar(450, 50, 30, 130);
         halfvertBar(550, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 56 in the last slot
         vertBar(650, 50, 30, 230);
         halfvertBar(750, 150, 30, 130);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 57){
         //draw 0 in the third slot?
         halfvertBar(450, 50, 30, 130);
         halfvertBar(550, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 57 in the last slot
         horiBar(650, 50);
         vertBar(750, 50, 30, 230);
     }else if(minutes == 58){
         //draw 0 in the third slot?
         halfvertBar(450, 50, 30, 130);
         halfvertBar(550, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 58 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
         horiBar(650, 250);
     }else if(minutes == 59){
         //draw 0 in the third slot?
         halfvertBar(450, 50, 30, 130);
         halfvertBar(550, 150, 30, 130);
         horiBar(450, 50);
         horiBar(450, 150);
         horiBar(450, 250);
         //draw 59 in the last slot
         halfvertBar(650, 50, 30, 130);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 150);
     }else if(minutes == 0){
         //draw 0 in the third slot?
         vertBar(450, 50, 30, 230);
         vertBar(550, 50, 30, 230);
         horiBar(450, 50);
         horiBar(450, 250);
         //draw 60 in the last slot
         vertBar(650, 50, 30, 230);
         vertBar(750, 50, 30, 230);
         horiBar(650, 50);
         horiBar(650, 250);
     }
    
//if(seconds){
//    seconds = seconds + 1;
//    if(seconds > 9)
//    seconds = 1;
//}
   
     

    noStroke();
    //fill(239, 239, 239);

    //digit 1
    //rect(50, 50, 30, secondBarWidth);
    
    
    
    //fill(0, 0, 0, 80);
    
    //rect(50, 50, 30, 230);
    // rect(50, 100, 30, 30);
    // rect(50, 150, 30, 30);
    // rect(50, 200, 30, 30);
    // rect(50, 250, 30, 30);
    



    //digit 2 first row across
//    horiBar(250,50);
    /*TESTING FUNCTION SO COMMENTED OUT
    fill(255, 222, 222, 80);

    rect(120, 50, secondBarWidth2, 30);
    
    fill(255, 0, 0, 50);
    rect(120, 50, 130, 30);
    // rect(170, 50, 30, 30);
    */
    
    //Digit 2 first row going down
    //fill(255, 222, 222);
    
    //rect(350, 50, 30, secondBarWidth3);
    
    //rect(350, 50, 30, 130);
    
    //rect(150, 50, 30, 230);
    //rect(220, 150, 30, 30);
    
    //Digit 2 second row going across
    //horiBar(250, 150);
    //rect(120, 150, 30, 30);
    //rect(120, 200, 30, 30);
    
    //digit 2 second row going down
    //fill(255, 222, 222, 80);
    
    //rect(250, 150, 30, secondBarWidth3);
    
    //fill(255, 0, 0, 50);
    
    //rect(250, 150, 30, 130);
    //rect(120, 250, 30, 30);
    //rect(120, 250, 30, 30);
    
    // fill(255, 222, 222, 80);
    
    // rect(120, 250, secondBarWidth2, 30);
    // fill(255, 0, 0, 50);
    // rect(120, 250, 130, 30);
    // //rect(170, 250, 30, 30);
    // //rect(220, 250, 30, 30);
    
    
    
    
//    vertBar(50, 50, 30, 230);
//    vertBar(150, 50, 30, 230);
//    vertBar(250, 50, 30, 230);
//    vertBar(350, 50, 30, 230);
//vertBar(450, 50, 30, 230);
//vertBar(550, 50, 30, 230);
//vertBar(600, 50, 30, 230);
//vertBar(700, 50, 30, 230);
    
//    halfvertBar(50, 50, 30, 130);
//halfvertBar(150, 50, 30, 130);
//halfvertBar(50, 150, 30, 130);
//    halfvertBar(150, 150, 30, 130);
//    halfvertBar(250, 50, 30, 130);
//    halfvertBar(350, 50, 30, 130);
//    halfvertBar(250, 150, 30, 130);
//    halfvertBar(350, 150, 30, 130);
//    halfvertBar(430, 50, 30, 130);
//    halfvertBar(530, 50, 30, 130);
//    halfvertBar(430, 150, 30, 130);
//    halfvertBar(530, 150, 30, 130);
//    halfvertBar(600, 50, 30, 130);
//    halfvertBar(700, 50, 30, 130);
//    halfvertBar(600, 150, 30, 130);
//    halfvertBar(700, 150, 30, 130);

    
//    halfvertBar(250, 50, 30, 230);
//    halfvertBar(350, 50, 30, 230);
//    halfvertBar(430, 50, 30, 230);
//    halfvertBar(530, 50, 30, 230);
//    halfvertBar(600, 50, 30, 230);
//    halfvertBar(700, 50, 30, 230);
    
//horiBar(50, 50);
// horiBar(50, 150);
//horiBar(50, 250);
//    horiBar(250, 50);
//    horiBar(250, 150);
//    horiBar(250, 250);
//horiBar(450, 50);
//    horiBar(430, 150);
//horiBar(450, 250);
//    horiBar(600, 50);
//    horiBar(600, 150);
//    horiBar(600, 250);

    //function mousePressed(){
        


     if(alarmsec > 0){
     
     fill(85, 140, 85);
     rect(a, b, 400, 100);
     fill(0);
     fill(255, 225, 79);
     rect(a, b, 50, 100);
     rect(a+80, b, 20, 100);
     rect(a+130, b, 50, 100);
     rect(a+200, b, 10, 100);
     rect(a+240, b, 35, 100);
     rect(a+290, b, 15, 100);
     rect(a+325, b, 10, 100);
     rect(a+350, b, 40, 100);
     fill(255);
     ellipse(a+15, b+25, 15, 15);
     ellipse(a+15, b+70, 15, 15);
     a = a + random(-6.95, 0.2);
     
     if (a < -400){
         a = 850;
     }
} 



//else if(alarmsec > 20){
//     fill(0);
//     ellipse(250, 250, 50, 50);
//     
// }
    
    // fill(255, 227, 73);
    // rect(a-20, b+150, 300, 100);
    // fill(255, 202, 89);
    // rect(a-20, b+150, 50, 80);
    // rect(a+10, b+150, 40, 80);
    // rect(a+35, b+150, 45, 80);
    // rect(a+60, b+150, 40, 80);
    // rect(a+85, b+150, 40, 80);
    // fill(255);
    // ellipse(a-10, b+165, 15, 15);
    // ellipse(a-10, b+185, 15, 15);
    
    
   //hor


   if(alarmsec > 0){
    fill(255, 227, 73);
     rect(c+100, v-120, 400, 80);
     fill(255, 202, 89);
     rect(c+100, v-120, 50, 80);
     rect(c+180, v-120, 20, 80);
     rect(c+230, v-120, 50, 80);
     rect(c+300, v-120, 10, 80);
     rect(c+340, v-120, 35, 80);
     rect(c+390, v-120, 15, 80);
     rect(c+255, v-120, 10, 80);
     rect(c+450, v-120, 40, 80);
     fill(255);
     ellipse(c+115, v-100, 15, 15);
     ellipse(c+115, v-60, 15, 15);
   c = c + random(-6.95, 0.5);
       if(c < -450) {
           c = 850;
   }
   }
    

   if(alarmsec > 0){
    fill(165, 30, 0);
     rect(d+220, s+300, 400, 80);
     fill(255, 199, 0);
     rect(d+220, s+300, 50, 80);
     rect(d+300, s+300, 20, 80);
     rect(d+350, s+300, 50, 80);
     rect(d+420, s+300, 10, 80);
     rect(d+460, s+300, 35, 80);
     rect(d+510, s+300, 15, 80);
     rect(d+375, s+300, 10, 80);
     rect(d+570, s+300, 40, 80);
     fill(255);
     ellipse(d+235, s+320, 15, 15);
     ellipse(d+235, s+360, 15, 15);
   d = d + random(-6.95, 0.5);
       if(d < -600) {
           d = 900;
   }
   }

      if(alarmsec > 0){
    fill(255, 255, 0);
     rect(n+250, z+150, 400, 105);
     fill(195, 220, 145);
     rect(n+250, z+150, 50, 105);
     rect(n+330, z+150, 20, 105);
     rect(n+380, z+150, 50, 105);
     rect(n+430, z+150, 10, 105);
     rect(n+490, z+150, 35, 105);
     rect(n+540, z+150, 15, 105);
     rect(n+405, z+150, 10, 105);
     rect(n+600, z+150, 40, 105);
     fill(255);
     ellipse(n+265, z+175, 15, 15);
     ellipse(n+265, z+225, 15, 15);
   n = n + random(-6.95, 0.5);
       if(n < -600) {
           n = 900;
   }
   }


    //vert
   // fill(255, 170, 73);
   // if(alarmsec > 0){

   // rect(d+400, s-40, 100, 50);
   // rect(d+490, s+100, 50, 120);
   // rect(d+300, s+50, 30, 110);
   // rect(d+500, s, 60, 100);
   // rect(d+600, s-40, 50, 100);
   // rect(d, s-20, 70, 200);
   // rect(d+150, s-50, 40, 130);
   // rect(d+200, s-100, 40, 80);
   // rect(d+300, s-90, 40, 130);
   // rect(d+400, s-50, 40, 130);
   // rect(d+200, s-60, 45, 85);
   // s = s - random(-1,10);
       
   // if (s < -300){
   //     s = 700;
   // }
   // }
    
    
    
    
    //}
    
    //fill(239, 239, 239);

    //rect(430, 50, 30, secondBarWidth);
    //fill(0, 0, 0, 80);
    //rect(430, 50, 30, 230);
    // rect(430, 100, 30, 30);
    // rect(430, 150, 30, 30);
    // rect(430, 200, 30, 30);
    // rect(430, 250, 30, 30);
    
    
    //horiBar(430, 50);
    
    
    //fill(239, 239, 239);
    
    //rect(530, 50, 30, secondBarWidth);
    //fill(0, 0, 0, 80);
    //rect(530, 50, 30, 230);
    // rect(530, 100, 30, 30);
    // rect(530, 150, 30, 30);
    // rect(530, 200, 30, 30);
    
    //fill(239, 239, 239);
    
    //rect(430, 250, secondBarWidth2, 30);
    //fill(0, 0, 0, 80);
    
    //horiBar(430, 250);
    
//    fill(239, 239, 239);
//    rect(430, 250, secondBarWidth2, 30);
//    fill(0, 0, 0, 80);
//    rect(430, 250, 130, 30);
//    // rect(530, 250, 30, 30);
//    // rect(480, 250, 30, 30);
    
    
    

    //fill(255, 222, 222, 80);
    
//    horiBar(600, 250);

//    rect(700, 50, 30, secondBarWidth);
//    fill(255, 0, 0, 50);
    //rect(700, 50, 30, 30);
    //rect(600, 250, 130, 30);
    // rect(700, 150, 30, 30);
    // rect(700, 200, 30, 30);
    // rect(700, 250, 30, 30);
    
    //fill(255, 222, 222, 80);
    
//    horiBar(600, 50);
    
//    rect(600, 50, secondBarWidth2, 30);
//    fill(255, 0, 0, 50);
    //rect(600, 50, 130, 30);
    //rect(700, 250, 30, 30);
    
    
    //fill(255, 222, 222, 80);
    //rect(600, 50, 30, secondBarWidth);
    //fill(255, 0, 0, 50);
    //rect(600, 50, 30, 230);
    //rect(600, 100, 30, 30);
    
    //fill(255, 222, 222, 80);
    
//    horiBar(600, 150);
    
//    rect(600, 150, secondBarWidth2, 30);
//    fill(255, 0, 0, 50);
    //rect(600, 150, 130, 30);
    //rect(600, 200, 30, 30);
    
    //fill(255, 222, 222, 80);
    
    //rect(600, 250, secondBarWidth2, 30);
    //fill(255, 0, 0, 50);
    //rect(700, 50, 30, 230);
    // rect(650, 250, 30, 30);
    // rect(650, 150, 30, 30);
}


function horiBar(x, y){
    //moving bit
    fill(255, 250, 20);
    rect(x, y, secondBarWidth2, 30);
    //color bit
    fill(255, 0, 0, 90);
    rect(x, y, 130, 30);
}

function vertBar(a, b, z, v){
    //if (hours > 9){

    //moving bit
    fill(255, 250, 20);
    rect(a, b, z, secondBarHeight);
    //color bit
    fill(255, 0, 0, 90);
    rect(a, b, z, v);
//}
}

function halfvertBar(a, b, z, v){
    //if (hours > 9){

    //moving bit
    fill(255, 250, 20);
    rect(a, b, z, secondBarHeighthalf);
    //color bit
    fill(255, 0, 0, 90);
    rect(a, b, z, v);
//}
}

function weirdShape(x, y){
    horiBar(x,y);
    horiBar(x, y + 60);
    horiBar(x, y + 80);
}

//if(seconds){
//    seconds = seconds + 1;
//    if(seconds > 9)
//    seconds = 1;
//}