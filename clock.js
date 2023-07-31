/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  let seconds = obj.seconds;
  let minutes = obj.minutes;
  let hours = obj.hours;
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
  background(0); //  black
  fill(222); // white
  noStroke();
  textSize(15);
  textAlign(CENTER, CENTER);
  // high score at top of page
  text("HIGH SCORE", 450,30);
  textSize(20); 
  text (+seconds,450,50);
  //text(" Seconds  "+ seconds+"|", width -400, 200);
  //text(" Minutes  "+ minutes+"|", width -640, 200);
  //text("|Hours  "+ hours+"|", width / 8, 200);
  //text(" Millis  "+ millis+"|", width -180, 200);

  
  fill(255, 0, 0); // Red color for the cursor
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
      
  // Display the X and Y coordinates of the cursor tip
  fill(220); // Black color for the text
  text("X: " + mouseX, 50, 30);
  text("Y: " + mouseY, 50, 70);

//Array of x and y pos of pacman and "fruits"
//let Xpos = [20, 30, 40, 50, 60, 70, 80, 90, 100, 100, 100, 110, 120];
//let Ypos = [100,100,100,100,100,100,100,100,110,110,110,120,130,140];

// draws maze outline --------------------------------------------

let moveH = map(obj.seconds *10,0,59, 0, 59);


noFill();
stroke (0,0,200);
rect(30,65,865,415,7); //big outline
rect(35,70,855,405,7);//smaller inner one

//LHS
fill(0);
rect(10,232,65,57); //bigger rect LHS
noFill();
rect(10,240,64,40);//smaller / inner rect LHS

fill(0);
noStroke();
rect(8,241,75,39); //draws LHS "door"

//RHS
stroke(0,0,200);
fill(0);
rect(850,232,65,57); //bigger rect LHS
noFill();
rect(850,240,64,40);//smaller / inner rect LHS

fill(0);
noStroke();
rect(849,241,75,39);


//maze draw was here 
//end of function 

  noFill();
  
//-------------------------------------------------


// draw(drawOpenMouthPacman);
if(obj.millis<300) {

  drawOpenMouthPacman(80+moveH,100, 35, 0,432);
}
else {
  drawOpenMouthPacman(80+moveH, 100, 35, 80, 380);
}

 //creates clock numbers 
 //create this.num / functions for each and call
 //or send each into an array list then call from array list depending on minutes/hr
let x = 205;
let y = 185;
let size = -4;
let c = 7;

  fill(0,0,199) //blue
 
  // ":" 
 rect (x+250,y+40,size+20,size+25,c);
 rect (x+250,y+150,size+20,size+25,c); 

//sets pace to change the seconds 
let second_ones_pos = obj.minutes % 10;
let second_tens_pos = int(obj.minutes/10) % 10;

let second_hun_pos = obj.hours % 10;
let second_thousands_pos = int(obj.hours/10) % 10;
print(second_tens_pos + "," + second_ones_pos + "/"+second_hun_pos + ","+ second_thousands_pos);

//repositions numbers 
 drawOnesValue(x-100, y, size, c, second_tens_pos); //tens pos
 drawOnesValue(x, y, size, c, second_ones_pos); //ones pos
 //
 drawOnesValue(x-310, y, size, c, second_thousands_pos); //RHS hours 

 drawOnesValue(x-410, y, size, c, second_hun_pos); //LHS hours 

//TOP LHS
drawMaze (170,150,10,70,7); //draws vertical bar
drawMaze (190,120,200,10,7); //horizontal
drawMaze(90,120,30,60,7); //box

//middle 
drawMaze(130,260,50,10,7);

//BOTTOM LHS
drawMaze (170,310,10,70,7); //vertical
drawMaze (190,415,200,10,7);//hor
drawMaze(90,340,30,80,7); //box

// middle
drawMaze(450,70,10,40,7);
drawMaze(450,435,10,40,7);


//TOP RHS
drawMaze (740,150,10,70,7); //draws vertical bar
drawMaze (530,120,200,10,7);
drawMaze(810,120,30,60,7); //box

//middle 
drawMaze(740,260,50,10,7);

//BOTTOM RHS
drawMaze (740,310,10,70,7); //vertical
drawMaze (530,415,200,10,7);
drawMaze(810,340,30,80,7); //box

}


function drawMaze (X,Y,WD,HT,Z){
//creates maze corners -----------------------------------------
noFill();
stroke (0,0,199);
//fill(0,1000,100);
rect (X,Y,WD,HT,Z); //draws rect

}

function drawOpenMouthPacman(x, y, diameter, angleStart, angleEnd) {
  // Draw Pacman with an open mouth to the left
  fill(255, 255, 0); // Yellow color
  noStroke();
  let Xpos = [20, 30, 40, 50, 60, 70, 80, 90, 100, 100, 100, 110, 120];
  let Ypos = [100,100,100,100,100,100,100,100,110,110,110,120,130,140];
  let speedX = 100;

   for (let i = 0; i < 900; i++) {
  arc(x+speedX ,y, diameter, diameter, radians(angleStart) / 2, radians(angleEnd) + 5, PIE);
  //move pacman 

   }
   


}
//draws different positions 
function drawDigit(x, y, size, c) {
  rect (x+0,y,size+18,size+90,c);
  rect (x+70,y,size+18,size+90,c);
 
  //bottom 2 rects
  rect (x+0,y+90,size+18,size+90,c);
  rect (x+70,y+90,size+18,size+90,c);
     
  //top and bottom rects in that order
  rect (x+5,y-20,size+80,size+18, c);
  rect (x+5,y+180,size+80,size+18,c);
}

function drawOnesValue(x, y, size, c, n) {
  if (n==0 || n==2 || n==3 || n==5 || n==6 || n==7 || n==8 || n==9){
    rect (x+425,y-20,size+80,size+18, c); //A
  }
  if ( n==0 ||  n==5 || n==6 || n==8 || n==9 ){
    rect (x+420,y,size+18,size+90,c);//B
  }
  if (n==0 || n==2 || n==3 || n==7 || n==8 || n==9 ){
    rect (x+490,y,size+18,size+90,c);//C
  }
  if (n==0 || n==2 || n==6 || n==8 ){
    rect (x+420,y+90,size+18,size+90,c);//D
  }
  if (n==0 || n==3 || n==5 || n==6 || n==8 || n==9 ){
    rect(x+490,y+90,size+18,size+90,c);//E
  }
  if (n==0 || n==2 || n==3 || n==5 || n==6 || n==8 || n==9){
    rect (x+425,y+180,size+80,size+18, c); //F
  }
if (n ==2 || n==3){
  rect (x+420,y+70,size+70,size+18,c);//H to the left middle 
}
if (n==4){
  rect (x+420,y-20,size+18,size+110,c);//K

}
if (n==4 || n==1){
  rect (x+490,y-20,size+18,size+110,c);//L
  rect (x+490,y+90,size+18,size+110,c);//N
}
if (n==7){
  rect (x+490,y+90,size+18,size+110,c);//N

}
if (n==4 || n==5 || n ==6 || n==8 || n==9 ){
  rect (x+440,y+80,size+48,size+18,c); //M small middle
}
 
    }
  
    
     


 

 //number zero reference--------------------------------------------
  //draws zeros in back-----------------------------
  //drawDigit(x+10, y, size, c); //draws 1000s 
  //drawDigit(x+110, y, size, c); //draws 100s place zero
  //drawDigit(x+320, y, size, c); //draws 10s place zero
  //drawDigit(x+420, y, size, c); //draws 01s place zero




    //part of the time
  /*
 rect (x+0,y-20,size+80,size+18, c);
 rect (x-5,y,size+18,size+90,c);
 if(n == 2 || n == 3 || n == 5) {
  rect (x+13,y+70,size+70,size+18,c);//middle
 }
 rect (x+65,y+90,size+18,size+90,c);
 rect (x+0,y+180,size+80,size+18, c);
   */

