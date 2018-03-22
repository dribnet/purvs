let secondBarWidth2 = 0;
let secondBarHeight = 0;

let a, b;
let c, v;

let shake = 0;

      a = 850;
      b = 120;
      c = 850;
      v = 120;
      n = 850;
      z = 120;
      q = 850;
      w = 120;
      t = 850;
      y = 120;
      f = 850;
      g = 120;

function draw_clock(obj) {
    createCanvas(950, 500);
    
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let second = obj.second;
    let alarmsec = obj.seconds_until_alarm

    
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

    
    background(255);
    
    //Alarm goes off shake
    translate(random (-shake, shake), random (-shake, shake))
  
    shake = shake * -0.2;
  
    if (alarmsec == 0) {
    shake = 6;
    }
    //Alarm goes off shake end

    fill(255, 170, 73);

    //First and second slot
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
    

    //Third and fourth slot
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
    //End of numbers

    noStroke();

    //Snakes when alarm set
     if(alarmsec > 0){
     
     fill(255, 101, 45);
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
     a = a + random(-5.8, 0.2);
     
     if (a < -400){
         a = 850;
     }
} 

    
   if(alarmsec > 0){
    fill(255, 82, 63);
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
    fill(255, 230, 107);
     rect(n+250, z+150, 400, 105);
     fill(255, 166, 66);
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
   n = n + random(-8, 0.5);
       if(n < -600) {
           n = 900;
   }
   }
  //snakes when alarm set ends
    
  //Snakes when alarm goes off    
  if(alarmsec == 0){
     fill(221, 4, 4);
     rect(q+250, w+150, 400, 105);
     fill(255, 135, 66);
     rect(q+250, w+150, 50, 105);
     rect(q+330, w+150, 20, 105);
     rect(q+380, w+150, 50, 105);
     rect(q+430, w+150, 10, 105);
     rect(q+490, w+150, 35, 105);
     rect(q+540, w+150, 15, 105);
     rect(q+405, w+150, 10, 105);
     rect(q+600, w+150, 40, 105);
     fill(255);
     ellipse(q+265, w+175, 15, 15);
     ellipse(q+265, w+225, 15, 15);
   q = q + random(-8, 0.1);
       if(q < -600) {
           q = 900;
   }
}

    
   if(alarmsec == 0){
     fill(255, 105, 56);
     rect(t+100, y-120, 400, 80);
     fill(255, 190, 86);
     rect(t+100, y-120, 50, 80);
     rect(t+180, y-120, 20, 80);
     rect(t+230, y-120, 50, 80);
     rect(t+300, y-120, 10, 80);
     rect(t+340, y-120, 35, 80);
     rect(t+390, y-120, 15, 80);
     rect(t+255, y-120, 10, 80);
     rect(t+450, y-120, 40, 80);
     fill(255);
     ellipse(t+115, y-100, 15, 15);
     ellipse(t+115, y-60, 15, 15);
     t = t + random(-7.85, 0.5);
       if(t < -450) {
           t = 850;
   }
   }
    
    
   if(alarmsec == 0){
     
     fill(237, 124, 33);
     rect(f, g, 400, 100);
     fill(255, 201, 53);
     rect(f, g, 50, 100);
     rect(f+80, g, 20, 100);
     rect(f+130, g, 50, 100);
     rect(f+200, g, 10, 100);
     rect(f+240, g, 35, 100);
     rect(f+290, g, 15, 100);
     rect(f+325, g, 10, 100);
     rect(f+350, g, 40, 100);
     rect(f+350, g, 40, 100);
     fill(255);
     ellipse(f+15, g+25, 15, 15);
     ellipse(f+15, g+70, 15, 15);
     f = f + random(-6.95, 0.2);
     
     if (f < -400){
         f = 850;
     }
} 
}
//Snakes when alarm goes off ends

//Ticking seoncd bars across numbers
function horiBar(x, y){
    //moving bit
    fill(255, 250, 20);
    rect(x, y, secondBarWidth2, 30);
    //color bit
    fill(255, 0, 0, 90);
    rect(x, y, 130, 30);
}

function vertBar(a, b, z, v){
    //moving bit
    fill(255, 250, 20);
    rect(a, b, z, secondBarHeight);
    //color bit
    fill(255, 0, 0, 90);
    rect(a, b, z, v);
}

function halfvertBar(a, b, z, v){
    //moving bit
    fill(255, 250, 20);
    rect(a, b, z, secondBarHeighthalf);
    //color bit
    fill(255, 0, 0, 90);
    rect(a, b, z, v);
}

function weirdShape(x, y){
    horiBar(x,y);
    horiBar(x, y + 60);
    horiBar(x, y + 80);
}