/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

//leftpill var
//coordinates
var lcol;
var lpx = 0;
var lpy = 0;
var lpsx = 0;
var lpsy = 0;


//rightpill var
var rcol;
var rpx = 0;
var rpy = 0;
var rpsx = 0;
var rpsy = 0;



//timedot
var tsX = 50;
var x = 0;
var eaty = 0;



const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function draw_clock(obj) {
  background(255,182,193);
  rcol = color(255,22);
  lcol = color(255);


  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;

  let seconds_until_alarm = obj.seconds_until_alarm;


    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off


  if (seconds>1){
    push();
    rcol = color(255);
    lcol = color(255,105,180);
    pop();
  }
  if(seconds>2){
    push();
    lcol = color(255);
    rcol = color(255,105,180);
    pop();
  }
  if(seconds>3){
    push();
    rcol = color(255);
    lcol = color(255,105,180);
    pop();
  }
 if(seconds>4){
   push();
   lcol = color(255);
    rcol = color(255,105,180);
    pop();
 }
 if(seconds>5){
   push();
  rcol = color(255);
    lcol = color(255,105,180);
    pop();
 }
 if(seconds>6){
   push();
   lcol = color(255);
    rcol = color(255,105,180);
    pop();
 }
  if(seconds>7){
    push();
    rcol = color(255);
    lcol = color(255,105,180);
    pop();
  }
   if(seconds>8){
     push();
   lcol = color(255);
    rcol = color(255,105,180);
    pop();
   }
   
    if(seconds>9){
      push();
  rcol = color(255);
    lcol = color(255,105,180);
    pop();
    }
    if(seconds>10){
      push();
  lcol = color(255);
    rcol = color(255,105,180);
    pop();
    }
      if(seconds>11){
        push();
  rcol = color(255);
    lcol = color(255,105,180);
    pop();
      }
      if(seconds>12){
        push();
  lcol = color(255);
    rcol = color(255,105,180);
    pop();
      }
      if(seconds>13){
        push();
  rcol = color(255);
    lcol = color(255,105,180);
    pop();
      }
      if(seconds>14){
        push();
  lcol = color(255);
    rcol = color(255,105,180);
    pop();
      }
      if(seconds>15){
        push();
  rcol = color(255);
    lcol = color(255,105,180);
    pop();
      }
      if(seconds>16){
  lcol = color(255);
    rcol = color(255,105,180);
      }
      if(seconds>17){
  rcol = color(255);
    lcol = color(255,105,180);
      }
      if(seconds>18){
  lcol = color(255);
    rcol = color(255,105,180);
      }
      if(seconds>19){
  rcol = color(255);
    lcol = color(255,105,180);
      }
      if(seconds>20){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>21){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>22){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }if(seconds>23){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>24){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>25){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>26){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>27){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>28){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>29){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>30){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>31){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>32){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>33){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>34){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>35){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>36){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>37){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>38){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>39){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>40){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>41){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>42){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>43){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>44){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>45){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>46){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>47){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>48){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>49){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>50){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>51){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>52){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>53){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>54){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>55){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>56){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>57){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>58){
  lcol = color(255);
    rcol =color(255,105,180);
         
      }
      if(seconds>59){
  lcol = color(255,105,180);
    rcol =color(255);
         
      }
      if(seconds>60){
  lcol = color(255);
    rcol =color(255,105,180);
    
         
      }

  background(255,182,193);

  if(seconds_until_alarm>1){

    background(255,182,193);
    push();
    scale(0.7);
    eatme();
    pop();
    eaty = eaty +1;
    tsX = tsX-1;
    if(tsX<-40){
    	tsX = 80;
    }
  }
  if(seconds_until_alarm<1){
  	tsX=60;
  }
  scale(1.2);
  noStroke();
  leftpill();
  rightpill();
  inrightpill();
  inleftpill();

  textSize(tsX);
  pixelfont = loadFont("Pixeled.ttf");
  textFont("Pixeled");
  fill(0,80);

  text(hours,250,270);
  text(minutes,400,270);
  // doto();

  
      
}
function leftpill(){
  push();
  translate(40,0);
  fill(lcol);
  rect(350,150,10,10);
  rect(340,150,10,10);
  rect(330,150,10,10);
  rect(320,150,10,10);
  rect(310,150,10,10);
  rect(300,150,10,10);
  rect(290,150,10,10);
  rect(280,150,10,10);
  rect(270,150,10,10);
  rect(260,150,10,10);
  rect(250,150,10,10);
  
  rect(240,160,10,10);
  rect(230,160,10,10);
  rect(220,170,10,10);
  rect(210,170,10,10);
  rect(240,160,10,10);
  rect(200,180,10,10);
  rect(190,190,10,10);
  rect(180,200,10,10);
  rect(180,210,10,10);
  rect(180,220,10,10);
  rect(180,230,10,10);
  rect(180,240,10,10);
  rect(180,250,10,10);
  rect(180,260,10,10);
  rect(180,270,10,10);
  rect(190,280,10,10);
  rect(200,290,10,10);
  
  rect(210,300,10,10);
  rect(220,300,10,10);
  rect(230,310,10,10);
  rect(240,310,10,10);
  rect(250,320,10,10);
  rect(260,320,10,10);
  rect(270,320,10,10);
  rect(280,320,10,10);
  rect(290,320,10,10);
  rect(300,320,10,10);
  rect(310,320,10,10);
  rect(320,320,10,10);
  rect(330,320,10,10);
  rect(340,320,10,10);
  rect(350,320,10,10);

pop();
}
function rightpill(){
 push();
 fill(rcol);

  rect(360,320,10,10);
  rect(370,320,10,10);
  rect(460,150,10,10);
  rect(450,150,10,10);
  rect(440,150,10,10);
  rect(430,150,10,10);//5
  rect(420,150,10,10);
  rect(410,150,10,10);
  rect(400,150,10,10);
  rect(390,150,10,10);
  
  rect(360,150,10,10);
  rect(370,150,10,10);
  rect(380,150,10,10);
  rect(380,320,10,10);
  rect(390,320,10,10);
  rect(400,320,10,10);
  rect(410,320,10,10);
  rect(420,320,10,10);
  rect(430,320,10,10);
  rect(440,320,10,10);
  rect(450,320,10,10);
  rect(460,320,10,10);
  rect(470,310,10,10);
  rect(480,310,10,10);
  rect(490,300,10,10);
  rect(500,300,10,10);
  rect(510,290,10,10);
  rect(520,280,10,10);
  rect(530,270,10,10);
  rect(530,260,10,10);
  rect(530,250,10,10);
  rect(530,240,10,10);
  rect(530,230,10,10);
  rect(530,220,10,10);
  rect(530,210,10,10);
  rect(530,200,10,10);
  rect(520,190,10,10);
  rect(510,180,10,10);
  rect(500,170,10,10);
  rect(490,170,10,10);
  rect(480,160,10,10);
  rect(470,160,10,10);

pop();
}
function inrightpill(){
  push();
  fill(rcol);
  //first line
  rect(360,310,10,10);
  rect(360,300,10,10);
  rect(360,290,10,10);
  rect(360,280,10,10);
  rect(360,270,10,10);
  rect(360,260,10,10);
  rect(360,250,10,10);
  rect(360,240,10,10);
  rect(360,230,10,10);
  rect(360,220,10,10);
  rect(360,210,10,10);
  rect(360,200,10,10);
  rect(360,190,10,10);
  rect(360,180,10,10);
  rect(360,170,10,10);
  rect(360,160,10,10);
  
    rect(370,310,10,10);
    rect(370,300,10,10);
    rect(370,290,10,10);
    rect(370,280,10,10);
    rect(370,270,10,10);
    rect(370,260,10,10);
    rect(370,250,10,10);
    rect(370,240,10,10);
    rect(370,230,10,10);
    rect(370,220,10,10);
    rect(370,210,10,10);
    rect(370,200,10,10);
    rect(370,190,10,10);
    rect(370,180,10,10);
    rect(370,170,10,10);
    rect(370,160,10,10);
    
    rect(380,310,10,10);
    rect(380,300,10,10);
    rect(380,290,10,10);
    rect(380,280,10,10);
    rect(380,270,10,10);
    rect(380,260,10,10);
    rect(380,250,10,10);
    rect(380,240,10,10);
    rect(380,230,10,10);
    rect(380,220,10,10);
    rect(380,210,10,10);
    rect(380,200,10,10);
    rect(380,190,10,10);
    rect(380,180,10,10);
    rect(380,170,10,10);
    rect(380,160,10,10);
    
    rect(390,310,10,10);
    rect(390,300,10,10);
    rect(390,290,10,10);
    rect(390,280,10,10);
    rect(390,270,10,10);
    rect(390,260,10,10);
    rect(390,250,10,10);
    rect(390,240,10,10);
    rect(390,230,10,10);
    rect(390,220,10,10);
    rect(390,210,10,10);
    rect(390,200,10,10);
    rect(390,190,10,10);
    rect(390,180,10,10);
    rect(390,170,10,10);
    rect(390,160,10,10);
    
    rect(400,310,10,10);
    rect(400,300,10,10);
    rect(400,290,10,10);
    rect(400,280,10,10);
    rect(400,270,10,10);
    rect(400,260,10,10);
    rect(400,250,10,10);
    rect(400,240,10,10);
    rect(400,230,10,10);
    rect(400,220,10,10);
    rect(400,210,10,10);
    rect(400,200,10,10);
    rect(400,190,10,10);
    rect(400,180,10,10);
    rect(400,170,10,10);
    rect(400,160,10,10);
    
    rect(410,310,10,10);
    rect(410,300,10,10);
    rect(410,290,10,10);
    rect(410,280,10,10);
    rect(410,270,10,10);
    rect(410,260,10,10);
    rect(410,250,10,10);
    rect(410,240,10,10);
    rect(410,230,10,10);
    rect(410,220,10,10);
    rect(410,210,10,10);
    rect(410,200,10,10);
    rect(410,190,10,10);
    rect(410,180,10,10);
    rect(410,170,10,10);
    rect(410,160,10,10);
    
    rect(420,310,10,10);
    rect(420,300,10,10);
    rect(420,290,10,10);
    rect(420,280,10,10);
    rect(420,270,10,10);
    rect(420,260,10,10);
    rect(420,250,10,10);
    rect(420,240,10,10);
    rect(420,230,10,10);
    rect(420,220,10,10);
    rect(420,210,10,10);
    rect(420,200,10,10);
    rect(420,190,10,10);
    rect(420,180,10,10);
    rect(420,170,10,10);
    rect(420,160,10,10);
    
    rect(430,310,10,10);
    rect(430,300,10,10);
    rect(430,290,10,10);
    rect(430,280,10,10);
    rect(430,270,10,10);
    rect(430,260,10,10);
    rect(430,250,10,10);
    rect(430,240,10,10);
    rect(430,230,10,10);
    rect(430,220,10,10);
    rect(430,210,10,10);
    rect(430,200,10,10);
    rect(430,190,10,10);
    rect(430,180,10,10);
    rect(430,170,10,10);
    rect(430,160,10,10);
    
    rect(440,310,10,10);
    rect(440,300,10,10);
    rect(440,290,10,10);
    rect(440,280,10,10);
    rect(440,270,10,10);
    rect(440,260,10,10);
    rect(440,250,10,10);
    rect(440,240,10,10);
    rect(440,230,10,10);
    rect(440,220,10,10);
    rect(440,210,10,10);
    rect(440,200,10,10);
    rect(440,190,10,10);
    rect(440,180,10,10);
    rect(440,170,10,10);
    rect(440,160,10,10);
    
    rect(450,310,10,10);
    rect(450,300,10,10);
    rect(450,290,10,10);
    rect(450,280,10,10);
    rect(450,270,10,10);
    rect(450,260,10,10);
    rect(450,250,10,10);
    rect(450,240,10,10);
    rect(450,230,10,10);
    rect(450,220,10,10);
    rect(450,210,10,10);
    rect(450,200,10,10);
    rect(450,190,10,10);
    rect(450,180,10,10);
    rect(450,170,10,10);
    rect(450,160,10,10);
    
    rect(460,310,10,10);
    rect(460,300,10,10);
    rect(460,290,10,10);
    rect(460,280,10,10);
    rect(460,270,10,10);
    rect(460,260,10,10);
    rect(460,250,10,10);
    rect(460,240,10,10);
    rect(460,230,10,10);
    rect(460,220,10,10);
    rect(460,210,10,10);
    rect(460,200,10,10);
    rect(460,190,10,10);
    rect(460,180,10,10);
    rect(460,170,10,10);
    rect(460,160,10,10);
    
    rect(470,310,10,10);
    rect(470,300,10,10);
    rect(470,290,10,10);
    rect(470,280,10,10);
    rect(470,270,10,10);
    rect(470,260,10,10);
    rect(470,250,10,10);
    rect(470,240,10,10);
    rect(470,230,10,10);
    rect(470,220,10,10);
    rect(470,210,10,10);
    rect(470,200,10,10);
    rect(470,190,10,10);
    rect(470,180,10,10);
    rect(470,170,10,10);
    rect(470,160,10,10);
    
    rect(480,310,10,10);
    rect(480,300,10,10);
    rect(480,290,10,10);
    rect(480,280,10,10);
    rect(480,270,10,10);
    rect(480,260,10,10);
    rect(480,250,10,10);
    rect(480,240,10,10);
    rect(480,230,10,10);
    rect(480,220,10,10);
    rect(480,210,10,10);
    rect(480,200,10,10);
    rect(480,190,10,10);
    rect(480,180,10,10);
    rect(480,170,10,10);
    rect(480,160,10,10);
    
    rect(490,310,10,10);
    rect(490,300,10,10);
    rect(490,290,10,10);
    rect(490,280,10,10);
    rect(490,270,10,10);
    rect(490,260,10,10);
    rect(490,250,10,10);
    rect(490,240,10,10);
    rect(490,230,10,10);
    rect(490,220,10,10);
    rect(490,210,10,10);
    rect(490,200,10,10);
    rect(490,190,10,10);
    rect(490,180,10,10);
    rect(490,170,10,10);
    rect(490,160,10,10);
    
    rect(500,290,10,10);
    rect(500,280,10,10);
    rect(500,270,10,10);
    rect(500,260,10,10);
    rect(500,250,10,10);
    rect(500,240,10,10);
    rect(500,230,10,10);
    rect(500,220,10,10);
    rect(500,210,10,10);
    rect(500,200,10,10);
    rect(500,190,10,10);
    rect(500,180,10,10);
    
    rect(510,280,10,10);
    rect(510,270,10,10);
    rect(510,260,10,10);
    rect(510,250,10,10);
    rect(510,240,10,10);
    rect(510,230,10,10);
    rect(510,220,10,10);
    rect(510,210,10,10);
    rect(510,200,10,10);
    rect(510,190,10,10);
    
    rect(520,270,10,10);
    rect(520,260,10,10);
    rect(520,250,10,10);
    rect(520,240,10,10);
    rect(520,230,10,10);
    rect(520,220,10,10);
    rect(520,210,10,10);
    rect(520,200,10,10);
    
    pop();

    
}

function inleftpill(){
  push();
  fill(lcol);
  rect(350,160,10,10);
  rect(350,170,10,10);
  rect(350,180,10,10);
  rect(350,190,10,10);
  rect(350,200,10,10);
  rect(350,210,10,10);
  rect(350,220,10,10);
  rect(350,230,10,10);
  rect(350,240,10,10);
  rect(350,250,10,10);
  rect(350,260,10,10);
  rect(350,270,10,10);
   rect(350,280,10,10);
    rect(350,290,10,10);
     rect(350,300,10,10);
      rect(350,310,10,10);
     

  rect(340,310,10,10);
  rect(340,300,10,10);
  rect(340,290,10,10);
  rect(340,280,10,10);
  rect(340,270,10,10);
  rect(340,260,10,10);
  rect(340,250,10,10);
  rect(340,240,10,10);
  rect(340,230,10,10);
  rect(340,220,10,10);
  rect(340,210,10,10);
  rect(340,200,10,10);
  rect(340,190,10,10);
  rect(340,180,10,10);
  rect(340,170,10,10);
  rect(340,160,10,10);
  
  rect(330,310,10,10);
  rect(330,300,10,10);
  rect(330,290,10,10);
  rect(330,280,10,10);
  rect(330,270,10,10);
  rect(330,260,10,10);
  rect(330,250,10,10);
  rect(330,240,10,10);
  rect(330,230,10,10);
  rect(330,220,10,10);
  rect(330,210,10,10);
  rect(330,200,10,10);
  rect(330,190,10,10);
  rect(330,180,10,10);
  rect(330,170,10,10);
  rect(330,160,10,10);
  
  rect(320,310,10,10);
  rect(320,300,10,10);
  rect(320,290,10,10);
  rect(320,280,10,10);
  rect(320,270,10,10);
  rect(320,260,10,10);
  rect(320,250,10,10);
  rect(320,240,10,10);
  rect(320,230,10,10);
  rect(320,220,10,10);
  rect(320,210,10,10);
  rect(320,200,10,10);
  rect(320,190,10,10);
  rect(320,180,10,10);
  rect(320,170,10,10);
  rect(320,160,10,10);
  
  rect(310,310,10,10);
  rect(310,300,10,10);
  rect(310,290,10,10);
  rect(310,280,10,10);
  rect(310,270,10,10);
  rect(310,260,10,10);
  rect(310,250,10,10);
  rect(310,240,10,10);
  rect(310,230,10,10);
  rect(310,220,10,10);
  rect(310,210,10,10);
  rect(310,200,10,10);
  rect(310,190,10,10);
  rect(310,180,10,10);
  rect(310,170,10,10);
  rect(310,160,10,10);

  rect(300,310,10,10);
  rect(300,300,10,10);
  rect(300,290,10,10);
  rect(300,280,10,10);
  rect(300,270,10,10);
  rect(300,260,10,10);
  rect(300,250,10,10);
  rect(300,240,10,10);
  rect(300,230,10,10);
  rect(300,220,10,10);
  rect(300,210,10,10);
  rect(300,200,10,10);
  rect(300,190,10,10);
  rect(300,180,10,10);
  rect(300,170,10,10);
  rect(300,160,10,10);
  
  rect(290,310,10,10);
  rect(290,300,10,10);
  rect(290,290,10,10);
  rect(290,280,10,10);
  rect(290,270,10,10);
  rect(290,260,10,10);
  rect(290,250,10,10);
  rect(290,240,10,10);
  rect(290,230,10,10);
  rect(290,220,10,10);
  rect(290,210,10,10);
  rect(290,200,10,10);
  rect(290,190,10,10);
  rect(290,180,10,10);
  rect(290,170,10,10);
  rect(290,160,10,10);
  
  rect(280,310,10,10);
  rect(280,300,10,10);
  rect(280,290,10,10);
  rect(280,280,10,10);
  rect(280,270,10,10);
  rect(280,260,10,10);
  rect(280,250,10,10);
  rect(280,240,10,10);
  rect(280,230,10,10);
  rect(280,220,10,10);
  rect(280,210,10,10);
  rect(280,200,10,10);
  rect(280,190,10,10);
  rect(280,180,10,10);
  rect(280,170,10,10);
  rect(280,160,10,10);
  
  rect(270,310,10,10);
  rect(270,300,10,10);
  rect(270,290,10,10);
  rect(270,280,10,10);
  rect(270,270,10,10);
  rect(270,260,10,10);
  rect(270,250,10,10);
  rect(270,240,10,10);
  rect(270,230,10,10);
  rect(270,220,10,10);
  rect(270,210,10,10);
  rect(270,200,10,10);
  rect(270,190,10,10);
  rect(270,180,10,10);
  rect(270,170,10,10);
  rect(270,160,10,10);
  
  rect(260,310,10,10);
  rect(260,300,10,10);
  rect(260,290,10,10);
  rect(260,280,10,10);
  rect(260,270,10,10);
  rect(260,260,10,10);
  rect(260,250,10,10);
  rect(260,240,10,10);
  rect(260,230,10,10);
  rect(260,220,10,10);
  rect(260,210,10,10);
  rect(260,200,10,10);
  rect(260,190,10,10);
  rect(260,180,10,10);
  rect(260,170,10,10);
  rect(260,160,10,10);
  
  rect(250,310,10,10);
  rect(250,300,10,10);
  rect(250,290,10,10);
  rect(250,280,10,10);
  rect(250,270,10,10);
  rect(250,260,10,10);
  rect(250,250,10,10);
  rect(250,240,10,10);
  rect(250,230,10,10);
  rect(250,220,10,10);
  rect(250,210,10,10);
  rect(250,200,10,10);
  rect(250,190,10,10);
  rect(250,180,10,10);
  rect(250,170,10,10);
  rect(250,160,10,10);
  
  rect(240,300,10,10);
  rect(240,290,10,10);
  rect(240,280,10,10);
  rect(240,270,10,10);
  rect(240,260,10,10);
  rect(240,250,10,10);
  rect(240,240,10,10);
  rect(240,230,10,10);
  rect(240,220,10,10);
  rect(240,210,10,10);
  rect(240,200,10,10);
  rect(240,190,10,10);
  rect(240,180,10,10);
  rect(240,170,10,10);

  

  rect(230,300,10,10);
  rect(230,290,10,10);
  rect(230,280,10,10);
  rect(230,270,10,10);
  rect(230,260,10,10);
  rect(230,250,10,10);
  rect(230,240,10,10);
  rect(230,230,10,10);
  rect(230,240,10,10);
  rect(230,230,10,10);
  rect(230,220,10,10);
  rect(230,210,10,10);
  rect(230,200,10,10);
  rect(230,190,10,10);
  rect(230,180,10,10);
  rect(230,170,10,10);

  


  rect(220,290,10,10);
  rect(220,280,10,10);
  rect(220,270,10,10);
  rect(220,260,10,10);
  rect(220,250,10,10);
  rect(220,240,10,10);
  rect(220,230,10,10);
  rect(220,220,10,10);
  rect(220,210,10,10);
  rect(220,200,10,10);
  rect(220,190,10,10);
  rect(220,180,10,10);
  


  rect(210,290,10,10);
  rect(210,280,10,10);
  rect(210,270,10,10);
  rect(210,260,10,10);
  rect(210,250,10,10);
  rect(210,240,10,10);
  rect(210,230,10,10);
  rect(210,220,10,10);
  rect(210,210,10,10);
  rect(210,200,10,10);
  rect(210,190,10,10);
  rect(210,180,10,10);


  
  rect(200,280,10,10);
  rect(200,270,10,10);
  rect(200,260,10,10);
  rect(200,250,10,10);
  rect(200,240,10,10);
  rect(200,230,10,10);
  rect(200,220,10,10);
  rect(200,210,10,10);
  rect(200,200,10,10);
  rect(200,190,10,10);
  


  rect(190,270,10,10);
  rect(190,260,10,10);
  rect(190,250,10,10);
  rect(190,240,10,10);
  rect(190,230,10,10);
  rect(190,220,10,10);
  rect(190,210,10,10);
  rect(190,200,10,10);
  
  pop();
  
  
  
}
function eatme(){
	noStroke();
  push()
  scale(0.5);
  fill(0);
  //E
  rect(50,eaty+50,10,10);
  rect(50,eaty+60,10,10);
  rect(50,eaty+70,10,10);

  rect(60,eaty+50,10,10);
  rect(70,eaty+50,10,10);

  rect(60,eaty+70,10,10);
  rect(70,eaty+70,10,10);

  rect(50,eaty+80,10,10);
  rect(50,eaty+90,10,10);

  rect(60,eaty+90,10,10);
  rect(70,eaty+90,10,10);
  //A
  rect(90,eaty+50,10,10);
  rect(90,eaty+60,10,10);
  rect(90,eaty+70,10,10);
  rect(90,eaty+80,10,10);
  rect(90,eaty+90,10,10);

  rect(100,eaty+50,10,10);
  rect(110,eaty+50,10,10);
  rect(110,eaty+60,10,10);
  rect(110,eaty+70,10,10);
  rect(110,eaty+80,10,10);
  rect(110,eaty+90,10,10);

  rect(100,eaty+70,10,10);

  //T
  rect(130,eaty+50,10,10);
  rect(150,eaty+50,10,10);
  rect(140,eaty+50,10,10);
  rect(140,eaty+60,10,10);
  rect(140,eaty+70,10,10);
  rect(140,eaty+80,10,10);
  rect(140,eaty+90,10,10);
  //M
  rect(60,eaty+120,10,10);
  rect(60,eaty+130,10,10);
  rect(60,eaty+140,10,10);
  rect(60,eaty+150,10,10);
  rect(60,eaty+160,10,10);

  rect(65,eaty+130,10,10);
  rect(70,eaty+140,10,10);
  rect(75,eaty+150,10,10);
  rect(80,eaty+160,10,10);
  rect(85,eaty+150,10,10);
  rect(90,eaty+140,10,10);
  rect(95,eaty+130,10,10);
  rect(100,eaty+120,10,10);

  rect(100,eaty+120,10,10);
  rect(100,eaty+130,10,10);
  rect(100,eaty+140,10,10);
  rect(100,eaty+150,10,10);
  rect(100,eaty+160,10,10);

  //E
  rect(120,eaty+120,10,10);
  rect(120,eaty+130,10,10);
  rect(120,eaty+140,10,10);

  rect(130,eaty+120,10,10);
  rect(140,eaty+120,10,10);

  rect(130,eaty+140,10,10);
  rect(140,eaty+140,10,10);

  rect(120,eaty+150,10,10);
  rect(120,eaty+160,10,10);

  rect(130,eaty+160,10,10);
  rect(140,eaty+160,10,10);
  pop();
  push();
  fill(255);
  scale(0.5);
  rect(30,eaty+50,10,130);
  rect(30,eaty+40,10,10);
  rect(40,eaty+50,10,10);
  rect(40,eaty+40,10,10);
  rect(40,eaty+40,10,130);
  rect(50,eaty+40,10,10);
  rect(60,eaty+40,10,10);
  rect(70,eaty+40,10,10);
  rect(80,eaty+50,10,10);
  rect(80,eaty+40,10,10);
  rect(90,eaty+40,10,10);
  rect(100,eaty+40,10,10);
  rect(110,eaty+40,10,10);
  rect(120,eaty+50,10,10);
  rect(120,eaty+40,10,10);
  rect(130,eaty+40,10,10);
  rect(140,eaty+40,10,10);
  rect(150,eaty+40,10,10);
  rect(160,eaty+50,10,10);
  rect(160,eaty+40,10,10);
  rect(170,eaty+50,10,10);
  rect(170,eaty+40,10,10);
  rect(170,eaty+50,10,10);
  rect(170,eaty+60,10,120);
  rect(160,eaty+60,10,120);
  rect(150,eaty+60,10,120);
  rect(80,eaty+60,10,90);
  rect(30,eaty+170,140,10);
  rect(120,eaty+50,10,70);
  rect(130,eaty+60,10,60);
  rect(140,eaty+100,10,20);
  rect(140,eaty+130,10,10);
  rect(130,eaty+130,10,10);
  rect(140,eaty+150,10,10);
  rect(130,eaty+150,10,10);
  rect(60,eaty+60,10,10);
  rect(70,eaty+60,10,10);
  rect(60,eaty+80,10,10);
  rect(70,eaty+80,10,10);
  rect(50,eaty+100,10,10);
  rect(60,eaty+100,10,10);
  rect(70,eaty+100,10,10);
  rect(50,eaty+110,10,10);
  rect(60,eaty+110,10,10);
  rect(70,eaty+110,10,10);
  rect(50,eaty+120,10,10);
  rect(70,eaty+120,10,10);
  rect(50,eaty+130,10,50);
  rect(100,eaty+60,10,10);
  rect(100,eaty+80,10,40);
  rect(90,eaty+100,10,40);
  rect(90,eaty+150,10,20);
  rect(110,eaty+100,10,70);
  rect(70,eaty+150,10,20);
  rect(70,eaty+130,10,10);
  pop();
}
function capsule(){
	rect(10,50,10,10);
}
// function doto(){
//   ellipse(x,0,10,10);
// x = x +1;
// }
