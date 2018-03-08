const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 700;

//Time variables

var initialH;
var initialM;
var initialS;

var hour;
var minTen;
var minRem;
var sec;
var secTen; 
var pm = false;

//Alarm variables

var alarmMode = false;
var alarmHour = 0;
var alarmMinute = 0;
var aMinRem = 0;
var aMinTen = 0;
var alarmSet = false;

//Misc variables
var stackStartHeight = 600;


function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
  //current hour
  initialH = hour();
  //current minute
  initialM = minute();
  //current second
  initialS = second();
}

//draw clock
function draw () {
  push();
  runClock();
  pop();
}


function runClock(){
  //Draw in background
  background('#f0f0f0');
  //Check if time for alarm to go off
  checkAlarm();
  //Draw silhouette of stacks
  backgrnd(12, 115);
  backgrnd(5, 215);
  backgrnd(9, 315);
  backgrnd(5, 415);
  backgrnd(10, 515);

  //HOUR
  if(hour() == 0){
    hour = 12;
    pm = false;
  }else if(hour() == 12){
    pm = true;
  }else if(hour() > 12){
    hour = hour() -12;
    pm = true;
  }else{
    hour = hour();
    pm = false;
  }

  //MINUTE
  minRem = minute() % 10;
  minTen = minute() / 10;
  
  //SECOND
  if(second() <= 10){
    sec = second();
  }else if(second() > 10 && second() <=20){
    sec= second() -10;
  }else if(second() > 20 && second() <=30){
    sec = second() -20;
  }else if(second() > 30 && second() <=40){
    sec = second() -30;
  }else if(second() > 40 && second() <=50){
    sec = second() -40;
  }else if(second() > 50 && second() <=60){
    sec = second() -50;
  }
  secTen = second() /10;

  //DRAW TIME STACKS
  if(pm){
    stackDraw(115, stackStartHeight, hour, '#0f1221');
  }else{
    stackDraw(115, stackStartHeight, hour, '#4570b4');
  }

  stackDraw(215, stackStartHeight, minTen, '#ffbf00');
  stackDraw(315, stackStartHeight, minRem, '#ffff00');
  stackDraw(415, stackStartHeight, secTen, '#ffee75');
  stackDraw(515, stackStartHeight, sec, '#ef9b0f');

  
  //ALARM
  if (alarmMode) {
    drawSettingAlarm();
  }
  if (alarmSet) {
    //draw the set alarm position
    push();
    noFill();
    noStroke();
    var y = stackStartHeight - ((aMinRem-1) * 41);
    if(aMinRem>0){
      fill('#ffff00');
      rect(310-3,y,5,40);
    }
    y = stackStartHeight - ((aMinTen-1) * 41);
    if(aMinTen>0){
      fill('#ffbf00');
      rect(210-3,y,5,40);
    }
    y = stackStartHeight - ((alarmHour-1) * 41);
    if(alarmHour>0){
      if(pm){
        fill('#0f1221');
      }else{
        fill('#4570b4');
      }
      rect(110-3,y,5,40);
    }
    pop();   
  }


  //TESTING IF HAVING INSIDE LOOP WORKS ------------------------- START

  function mousePressed() {
    if (alarmMode) {
      alarmSet = !alarmSet; 
      if (alarmSet) {
        //set the alarm based on the current mouse pos x axis for hours y axis for mins
        alarmHour = ceil(map(mouseX, 100, 600, 1, 12));
        if(alarmHour<1){
          alarmHour = 1;
        }else if(alarmHour>12){
          alarmHour = 12;
        }
        alarmMinute = floor(map(mouseY, 650, 100, 0, 59));
        if(alarmMinute<0){
          alarmMinute = 0;
        }else if(alarmMinute>59){
          alarmMinute = 59;
        }
        
        aMinTen = alarmMinute /10;
        aMinRem = alarmMinute %10;
        println("Alarm is set to " + alarmHour + ":" + alarmMinute);
        
        //turn off alarm mode once set
        alarmMode=false;
      }
    }
  }

  function backgrnd(stkH, xPos){
    var y = stackStartHeight;
    push();
    fill('#FFFFFF');
    noStroke();
    for(var i=0; i<stkH; i++){ 
        rect(xPos,y,70,40);        
        y = y-41;
    } 
    pop();
  }

  //*************** STACK DRAW FUNCTION ******************//

  function stackDraw(aX, aY, aAmount, aColor){
    
    var y =0;
    var x =0;
    var amount =0;
    var c = color(0);
    
    x = aX;
    y = aY;
    amount = aAmount;
    c = aColor;
    
    push();
    noStroke();
    fill(c);
    rect(x,y+43,70,3);
    for(var i=0; i<amount; i++){ 
      //opacity is changing
      var a = map(693-y, 0, 700, 255, 0);
      //       map(changing value, how quick (lower=quicler) fade out is, dark, light) 
      //       so could swap last two for light to dark
      fill(c, a);
      rect(x,y,70,40);        
      y = y-41;
    } 
    pop();
    
  }


  //*************** ALARM SECTION ******************//

  function drawSettingAlarm() {
      //DISPLAY ALARM POS WHILST SETTING ALARM
      push();
      noStroke();    
      image(alarmins,0,0,700,700);
      var alarmPosHour = ceil(map(mouseX, 100, 600, 1, 12));
      var alarmPosMinute = floor(map(mouseY, 650, 100, 0, 59));
      var aPosTen = alarmPosMinute /10;
      var aPosRem = alarmPosMinute %10;
      
      var y = stackStartHeight - ((aPosRem-1) * 41);
      if(alarmPosMinute>=59){
        y = stackStartHeight - (8 * 41);
      }
      fill('#ffff00');
      if(aPosRem>0){
        rect(310-3,y,5,40);
      }
      
      
      y = stackStartHeight - ((aPosTen-1) * 41);
      if(aPosTen>5){
        y = stackStartHeight - (4 * 41);
      }else if(aPosTen<0){
        y = stackStartHeight;
      }
      fill('#ffbf00');
      if(aPosTen>0){
        rect(210-3,y,5,40);
      }
      
      y = stackStartHeight - ((alarmPosHour-1) * 41);
      if(alarmPosHour>=12){
        y = stackStartHeight - (11 * 41);
      }else if(alarmPosHour<1){
        y = stackStartHeight;
      }
      if(pm){
        fill('#0f1221');
      }else{
        fill('#4570b4');
      }
      rect(110-3,y,5,40);
      
      pop();    
  }

  function checkAlarm() {
    var alarmRinging = false;
    if (alarmSet) {
      alarmRinging = (minute() == alarmMinute);    
      if (alarmRinging) {
        drawAlarmGoingOff();
      } 
    }
  }

  function drawAlarmGoingOff() {
    translate(0,-125);
    push();
    noStroke();
    if(pm){
          fill('#0f1221');
        }else{
          fill('#4570b4');
        }
    rect(115, stackStartHeight+50, 470, 125);
    pop();
  }

  function keyPressed() {
    if (key == 'a') {
      alarmMode = !alarmMode; 
    }
    // runKeyPressed();
  }
  //TESTING IF HAVING INSIDE LOOP WORKS ------------------------- END
}
