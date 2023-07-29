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


//-----------------------------------------------------

 //draws "candy"
 //create if staement 
 //if pacman pass object, remove
 //after 57 seconds counting down flash and reset 
  //create a loop to...
//draw but change x and y pos to numbers in an array list

 fill(255,165,0);
 rect (100,98,5,5);

 rect (120,98,5,5);
 rect (140,98,5,5);
  noFill();
  
//-------------------------------------------------


// draw(drawOpenMouthPacman);
if(obj.millis<500) {
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

   /*
  //draws up 1 -------------------------------------------
//top two rects
stroke (200,0,0);

//hours LHS
rect (x+80,y-20,size+18,size+110,c);
rect (x+80,y+90,size+18,size+110,c);

//hours RHS

 rect (x+180,y-20,size+18,size+110,c);
 rect (x+180,y+90,size+18,size+110,c);

 //mins LHS
 
 rect (x+390,y-20,size+18,size+110,c);
 rect (x+390,y+90,size+18,size+110,c);

 //mins RHS

  rect (x+490,y-20,size+18,size+110,c);
  rect (x+490,y+90,size+18,size+110,c);


  //draw number 2 -------------------------------------------

  stroke(255,165,0) //orange

  //LHS hours top to bott
rect (x+15,y-20,size+80,size+18, c);
 rect (x+80,y,size+18,size+89,c);
 rect (x+10,y+70,size+70,size+18,c);//middle one
 rect (x+10,y+90,size+18,size+90,c);
 rect (x+15,y+180,size+80,size+18,c);

   //second pos  

 //top two rects
 rect (x+115,y-20,size+80,size+18, c);
 rect (x+180,y,size+18,size+90,c);
 rect (x+110,y+70,size+70,size+18,c);//middle one
 rect (x+110,y+90,size+18,size+90,c);
 rect (x+115,y+180,size+80,size+18,c);


 //3rd number
 rect (x+325,y-20,size+80,size+18, c);
 rect (x+390,y,size+18,size+90,c);
 rect (x+320,y+70,size+70,size+18,c);//middle
 rect (x+320,y+90,size+18,size+90,c);
 rect (x+325,y+180,size+80,size+18,c);


  //4th number 
  rect (x+425,y-20,size+80,size+18, c);
  rect (x+490,y,size+18,size+90,c);
  rect (x+420,y+70,size+70,size+18,c);//middle
  rect (x+420,y+90,size+18,size+90,c);
  rect (x+425,y+180,size+80,size+18,c);


  //number 3 -------------------------------------------


  stroke(0,200,0) //green


   //second pos  

 //RHS hours
 rect (x+115,y-20,size+80,size+18, c);
 rect (x+180,y,size+18,size+90,c);
 rect (x+110,y+70,size+70,size+18,c);//middle one
 rect (x+180,y+90,size+18,size+90,c);
 rect (x+115,y+180,size+80,size+18,c);


 //3rd number
 rect (x+325,y-20,size+80,size+18, c);
 rect (x+390,y,size+18,size+90,c);
 rect (x+320,y+70,size+70,size+18,c);//middle
 rect (x+390,y+90,size+18,size+90,c);
 rect (x+325,y+180,size+80,size+18,c);


  //4th number 
  rect (x+425,y-20,size+80,size+18, c);
  rect (x+490,y,size+18,size+90,c);
  rect (x+420,y+70,size+70,size+18,c);//middle
  rect (x+490,y+90,size+18,size+90,c);
  rect (x+425,y+180,size+80,size+18,c);


  //draw number 4 -----------------------------------------

  stroke(255,20,147) //pink


   //second pos  

 //RHS hours
 rect (x+110,y-20,size+18,size+110,c);
 rect (x+180,y-20,size+18,size+110,c);
 rect (x+129,y+70,size+50,size+18,c);//middle one
 rect (x+180,y+90,size+18,size+110,c);
 


 //3rd number
 
 rect (x+390,y-20,size+18,size+110,c);
 rect (x+320,y-20,size+18,size+110,c);
 rect (x+340,y+70,size+50,size+18,c);//middle
 rect (x+390,y+90,size+18,size+110,c);
 


  //4th number 
  rect (x+420,y-20,size+18,size+110,c);
  rect (x+490,y-20,size+18,size+110,c);
  rect (x+440,y+70,size+50,size+18,c);//middle
  rect (x+490,y+90,size+18,size+110,c);
 */


//fill(55,20,147);
  fill(0,0,199) //blue
 // stroke(200); //white outine 
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
 // for (let i = 20; i < 400; i++) {
   // clear();
  arc(x, y, diameter, diameter, radians(angleStart) / 2, radians(angleEnd) + 5, PIE);
//move pacman 




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

