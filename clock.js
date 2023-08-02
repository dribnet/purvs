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

// draws maze outline --------------------------------------------

noFill();
stroke (0,0,200);
rect(30,65,899,415,7); //big outline
rect(35,70,889,405,7);//smaller inner one

//LHS
fill(0);
rect(10,70,40,57); //bigger rect LHS
noFill();
rect(10,78,40,40);//smaller / inner rect LHS

fill(0);
noStroke();
rect(8,79,75,38); //draws LHS "door"

//RHS
stroke(0,0,200);
fill(0);
rect(910,70,40,57); //bigger rect LHS
noFill();
rect(910,78,40,40);//smaller / inner rect LHS

fill(0);
noStroke();
rect(899,79,75,38);

  noFill();

    
//-------------------------------------------------
  //draws food 
  for (let i = 0; i < 59; i++) {
    value += 17.5;
  }

food (5.0+value,96,3,3);
/*
food (22.5,96,3,3);
food (40,96,3,3);
food (57.5,96,3,3);
food (75,96,3,3);
food (92.5,96,3,3);
food (110,96,3,3);
food (127.5,96,3,3);
food (22.5,96,3,3);
*/
//moves pacman across screen
let moveH = map((obj.seconds),0,57,-15, 935);
// draw(drawOpenMouthPacman);
if(obj.millis<500) {

  drawOpenMouthPacman( moveH ,98, 35, 0,432);
}
else {
  drawOpenMouthPacman( moveH , 98, 35, 80, 380);
}


 //creates clock numbers 
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
 drawsNumbers(x-100, y, size, c, second_tens_pos); //tens pos
 drawsNumbers(x, y, size, c, second_ones_pos); //ones pos
 drawsNumbers(x-410, y, size, c, second_thousands_pos); //LHS hours 
 drawsNumbers(x-310, y, size, c, second_hun_pos); //RHS hours 



//TOP LHS
drawMaze (190,150,10,70,7); //draws vertical bar
drawMaze (210,120,200,10,7); //horizontal
drawMaze(100,120,30,60,7); //box

//middle 
drawMaze(110,260,90,10,7);

//BOTTOM LHS
drawMaze (190,310,10,70,7); //vertical
drawMaze (210,415,200,10,7);//hor
drawMaze(100,340,30,80,7); //box

// middle
drawMaze(470,435,10,40,7);


//TOP RHS
drawMaze (760,150,10,70,7); //draws vertical bar
drawMaze (550,120,200,10,7);
drawMaze(830,120,30,60,7); //box

//middle 
drawMaze(760,260,90,10,7);

//BOTTOM RHS
drawMaze (760,310,10,70,7); //vertical
drawMaze (550,415,200,10,7);
drawMaze(830,340,30,80,7); //box



}

//creates maze corners -----------------------------------------
function drawMaze (X,Y,WD,HT,Z){
noFill();
stroke (0,0,199);
//fill(0,1000,100);
rect (X,Y,WD,HT,Z); //draws rect

}

function drawOpenMouthPacman(x, y, diameter, angleStart, angleEnd) {
  // Draw Pacman with an open mouth to the left
  fill(255, 255, 0); // Yellow color
  noStroke();

  arc(x,y, diameter, diameter, radians(angleStart) / 2, radians(angleEnd) + 5, PIE);

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

function drawsNumbers(x, y, size, c, n) {
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
 //
    }
  
    // draw pacman food 
     
    function food (X,Y,SIZE){
  
      fill(255,107,0);
      rect(X,Y,SIZE,SIZE);

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

