/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  let seconds = obj.seconds;
  let minutes = obj.minutes;
  let hours = obj.hours;
  let millis = obj.millis;
  let alarm = obj.seconds_until_alarm;

  let backgroundCol = (0); //  black
background(backgroundCol);

textAlign(CENTER, CENTER);
// one up text
fill(	148, 229, 255); // light blue
stroke(400);
textSize(25);
text("1UP",100,30);

// high score at top of page
fill(222); // white
noStroke();
textSize(20);
text(+minutes*7,105,50);
textSize(15);
text("HIGH SCORE", 450,30);
textSize(20); 
text (+seconds,450,50);

// draws maze outline and doors --------------------------------

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

//-------------------------------------------------
  //draws food and gets eaten according to seconds
  let rmFood = map((seconds),0,57,-15, 935);
  for (i = 0; i < 955; i++) { //top
    food (rmFood+20+i*16.5,96,3,3);
  }  
// fills in gaps with food
  for (i = 0; i < 24; i++) {//LHS BOTTOM
    food ( 70+i*16.5,450,3,3);
  } 
  for (i = 0; i < 25; i++) { //RHS BOTTOM
    food ( 495+i*16.5,450,3,3);
  } 
  for (i = 0; i < 20; i++) { //lhs sides
    food ( 70,115+i*16.5,3,3);
  } 
  for (i = 0; i < 8; i++) { //lhs down
    food ( 160,120+i*16.5,3,3);
  } 
  for (i = 0; i < 9; i++) { //lhs down
    food ( 160,290+i*16.5,3,3);
  } 
  for (i = 0; i < 4; i++) { //lhs across
    food ( 90+i*16.5,290,3,3);
  } 
  for (i = 0; i < 4; i++) { //lhs across
    food ( 90+i*16.5,220,3,3);
  } 
  for (i = 0; i < 20; i++) { //rhs sides
    food ( 890,115+i*16.5,3,3);
  } 
  for (i = 0; i < 8; i++) { //rhs down
    food ( 800,120+i*16.5,3,3);
  } 
  for (i = 0; i < 9; i++) { //rhs down
    food ( 800,290+i*16.5,3,3);
  } 
  for (i = 0; i < 4; i++) { //rhs across
    food ( 820+i*16.5,290,3,3);
  } 
  for (i = 0; i < 4; i++) { //rhs across
    food ( 820+i*16.5,220,3,3);
  } 

//moves pacman across screen -------------------------------
let moveH = map((seconds),0,57,-15, 935);
// draw(drawOpenMouthPacman);
if(millis<500) {

  drawOpenMouthPacman( moveH ,98, 35, 0,432);
}
else {
  drawOpenMouthPacman( moveH , 98, 35, 80, 380);
}

//draws pacman lives at the top of the screen
drawOpenMouthPacman( 730 ,35, 28, 80,382);
drawOpenMouthPacman( 760 ,35, 28, 80,382);
drawOpenMouthPacman( 790 ,35, 28, 80,382);
drawOpenMouthPacman( 820 ,35, 28, 80,382);

//draws the maze ------------------------------------------
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

//----------------------------------------------
 //creates clock numbers 
let x = 220;
let y = 185;
let size = -4;
let c = 5;

//sets pace to change min/hr
let second_ones_pos = obj.minutes % 10;
let second_tens_pos = int(obj.minutes/10) % 10;
let second_hun_pos = obj.hours % 10;
let second_thousands_pos = int(obj.hours/10) % 10;

noStroke();

//creates red pacman and makes it move
let bounce1 = map(obj.millis, 0, 999, 0, TWO_PI);
let phase1 = sin(bounce1);
let y_bounce1 = map(phase1, -1, 1, -20, 20);
this.redGhost(0,10+y_bounce1,0);
//creates orange pacman and makes it move
this.orangeGhost(90,-200-y_bounce1,0);
//blue pacman move

let y_bounce2 = map(phase1, -1, 1, -10, 20);
this.blueGhost(790-y_bounce2,-100,0);

//pink pacman move
let phase3 = sin(bounce1);
let y_bounce3 = map(phase3, -1, 1, -10, 20);
this.pinkGhost(500+y_bounce3,47,0);


fill(10, 21, 255) //blue
if (alarm > 0 && alarm < 10 ){//building up to alarm
whiteGhost(0,10+y_bounce1,0);//red
whiteGhost(790-y_bounce2,-100,0);//blue
whiteGhost(500+y_bounce3,47,0);//pink
whiteGhost(90,-200-y_bounce1,0);
}
else if (alarm == 0){ //alarm going off
  if (millis < 500){
    fill(255,0,0);
  }
  else {
   
    whiteGhost(0,10+y_bounce1*2,0);//red
    whiteGhost(790+y_bounce2*2,-100,0);//blue
    whiteGhost(500+y_bounce3*2,47,0);//pink
    whiteGhost(90,-200+y_bounce1,0) //orange

    whiteGhost(0,10-y_bounce1*2,0);//red
    whiteGhost(790-y_bounce2*2,-100,0);//blue
    whiteGhost(500-y_bounce3*2,47,0);//pink
    whiteGhost (90,-180-y_bounce1,0); //orange
    fill(0,255,0) ;
  }
}

//repositions numbers 
drawsNumbers(x-100, y, size, c, second_tens_pos); //tens pos
drawsNumbers(x, y, size, c, second_ones_pos); //ones pos
drawsNumbers(x-410, y, size, c, second_thousands_pos); //LHS hours 
drawsNumbers(x-310, y, size, c, second_hun_pos); //RHS hours 
  // ":" 
  rect (x+280,y+40,size+20,size+25,c);
  rect (x+280,y+150,size+20,size+25,c); 

//draw power up orbs
fill(244,180,20);
ellipse (160,293,10,10);
ellipse (802,170,10,10);
ellipse (892,451,10,10);
ellipse (322,451,10,10);

}

//creates maze corners -----------------------------------------
function drawMaze (X,Y,WD,HT,Z){
noFill();
stroke (21, 21, 255);
rect (X,Y,WD,HT,Z); //draws maze

}

function drawOpenMouthPacman(x, y, diameter, angleStart, angleEnd) {
  // Draw Pacman
  fill(255, 255, 0); // Yellow color
  noStroke();
  arc(x,y, diameter, diameter, radians(angleStart) / 2, radians(angleEnd) + 5, PIE);
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

    }
   // draw pacman food 
function food (X,Y,SIZE){
  
fill(255,140,0); //set color to orange
rect(X,Y,SIZE,SIZE);

    }
function redGhost (x,y,size){
  fill(255,0,0);
  ellipse(x+70,y+400,size+40,size+40);
  rect(x+50,y+400,size+40,size+20);
  ellipse(x+57,y+420,size+15,size+15);
  ellipse(x+70,y+420,size+15,size+15);
  ellipse(x+82,y+420,size+15,size+15);
  
 fill(255);
 ellipse(x+62,y+400,size+12,size+12);
 ellipse(x+77,y+400,size+12,size+12);
 fill(0,100,200);
 ellipse(x+80,y+401,size+5,size+5);
 ellipse(x+65,y+401,size+5,size+5);

}
function blueGhost (x,y,size){
  fill(0,160,255);
  ellipse(x+70,y+400,size+40,size+40);
  rect(x+50,y+400,size+40,size+20);
  ellipse(x+57,y+420,size+15,size+15);
  ellipse(x+70,y+420,size+15,size+15);
  ellipse(x+82,y+420,size+15,size+15);
 
  
 fill(255);
 ellipse(x+62,y+400,size+12,size+12);
 ellipse(x+77,y+400,size+12,size+12);
 fill(0,100,200);//eye colour
 //draws eyes
 ellipse(x+75,y+401,size+5,size+5);
 ellipse(x+60,y+401,size+5,size+5);
}
function pinkGhost (x,y,size){
  fill(255, 102, 203);
  ellipse(x+70,y+400,size+40,size+40);
  rect(x+50,y+400,size+40,size+20);
  ellipse(x+57,y+420,size+15,size+15);
  ellipse(x+70,y+420,size+15,size+15);
  ellipse(x+82,y+420,size+15,size+15);
 
  
 fill(255);
 ellipse(x+62,y+400,size+12,size+12);
 ellipse(x+77,y+400,size+12,size+12);
 fill(0,100,200);//eye colour
 //draws eyes
 ellipse(x+75,y+401,size+5,size+5);
 ellipse(x+60,y+401,size+5,size+5);
}

function orangeGhost (x,y,size){
  fill(255, 127, 0);
  ellipse(x+70,y+400,size+40,size+40);
  rect(x+50,y+400,size+40,size+20);
  ellipse(x+57,y+420,size+15,size+15);
  ellipse(x+70,y+420,size+15,size+15);
  ellipse(x+82,y+420,size+15,size+15);
 
  
 fill(255);
 ellipse(x+62,y+400,size+12,size+12);
 ellipse(x+77,y+400,size+12,size+12);
 fill(0,100,200);//eye colour
 //draws eyes
 ellipse(x+75,y+401,size+5,size+5);
 ellipse(x+60,y+401,size+5,size+5);
}

function whiteGhost (x,y,size){
  fill(255);
  ellipse(x+70,y+400,size+40,size+40);
  rect(x+50,y+400,size+40,size+20);
  ellipse(x+57,y+420,size+15,size+15);
  ellipse(x+70,y+420,size+15,size+15);
  ellipse(x+82,y+420,size+15,size+15);
 
  
 fill(0,100,200);//eye colour
 //draws eyes
 ellipse(x+78,y+401,size+5,size+5);
 ellipse(x+63,y+401,size+5,size+5);

 rect(x+60,y+410,size+20,size+1);
}
