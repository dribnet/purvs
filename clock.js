let secondBarWidth2 = 0;
let secondBarHeight = 0;

let a, b;
let c, v;

let shake = 0;

      

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
    
    noStroke();

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
}
    noStroke();


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