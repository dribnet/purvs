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



// draws maze--------------------------------------------


noFill();
stroke (0,0,200);
rect(30,65,865,400,7); //big outline
rect(40,75,845,380,7);//smaller inner one

//LHS
fill(0);
rect(10,232,65,57); //bigger rect LHS
noFill();
rect(10,240,64,40);//smaller / inner rect LHS

fill(0);
noStroke();
rect(8,241,75,39);

//RHS
stroke(0,0,200);
fill(0);
rect(850,232,65,57); //bigger rect LHS
noFill();
rect(850,240,64,40);//smaller / inner rect LHS

fill(0);
noStroke();
rect(849,241,75,39);


//creates maze corners -----------------------------------------
noFill();
stroke(0,0,199);
rect (90,120,10,70,7); //draws vertical bar
rect (90,120,70,10,7); //horizontal

rect (140,170,10,40,7); //short verticle bar
//end of function 



//draws pacman -----------------------------------------------------
 // Draw Pacman's body
  //create a for each statement where it swaps between the two every second

/*function draw_pacman(x,y,size,size){
let x =80;
let y= 100;
let size = 35;
*/

fill(255, 255, 0); // Yellow color for Pacman
noStroke();

 
  //open mouth left
 //arc(80,100,35,35, radians(80)/2, radians(380)+5, PIE);
  // draws closed mouth
 //ellipse(80,100, 35, 35);
 
  // create open mouth right
  //create open mouth down
  //create open mouth up


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


 //creates clock numbers 
 //create this.num / functions for each and call
 //or send each into an array list then call from array list depending on minutes/hr
let x = 200;
let y = 180;
let size = -4;
let c = 7;

 //fill(200,200,200);
 stroke (200,200,200);

 //number zero --------------------------------------------
 //top two rects
 rect (x+10,y,size+18,size+90,c);
 rect (x+80,y,size+18,size+90,c);

 //bottom 2 rects
 rect (x+10,y+90,size+18,size+90,c);
 rect (x+80,y+90,size+18,size+90,c);
    
 //top and bottom rects in that order
 rect (x+15,y-20,size+80,size+18, c);
 rect (x+15,y+180,size+80,size+18,c);

   //second pos  

 //top two rects
 rect (x+110,y,size+18,size+90,c);
 rect (x+180,y,size+18,size+90,c);

 //bottom 2 rects
 rect (x+110,y+90,size+18,size+90,c);
 rect (x+180,y+90,size+18,size+90,c);
    
 //top and bottom rects in that order
 rect (x+115,y-20,size+80,size+18, c);
 rect (x+115,y+180,size+80,size+18,c);


//250-115 = 135 gap

 // ":" 
 rect (x+250,y+40,size+20,size+25,c);
 rect (x+250,y+150,size+20,size+25,c); 

 //135 gap

 //3rd number
 drawDigit(x+320, y, size, c);
//  rect (x+320,y,size+18,size+90,c);
//  rect (x+390,y,size+18,size+90,c);

//  //bottom 2 rects
//  rect (x+320,y+90,size+18,size+90,c);
//  rect (x+390,y+90,size+18,size+90,c);
    
//  //top and bottom rects in that order
//  rect (x+325,y-20,size+80,size+18, c);
//  rect (x+325,y+180,size+80,size+18,c);


  //4th number 
  drawDigit(x+420, y, size, c);

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

  // draw number 5 -----------------------------------------------
//fill(55,20,147);
  stroke(55,20,147) //purple


  //second pos  

//RHS hours
rect (x+115,y-20,size+80,size+18, c);
rect (x+110,y,size+18,size+90,c);
rect (x+129,y+70,size+70,size+18,c);//middle one
rect (x+180,y+90,size+18,size+90,c);
rect (x+115,y+180,size+80,size+18, c);

let second_ones_pos = obj.seconds % 10;
let second_tens_pos = int(obj.seconds/10) % 10;
print(second_tens_pos + "," + second_ones_pos);


//LHS mins
drawInnerDigit(x+325, y, size, c, second_tens_pos);

// rect (x+325,y-20,size+80,size+18, c);
// rect (x+320,y,size+18,size+90,c);
// rect (x+340,y+70,size+70,size+18,c);//middle
// rect (x+390,y+90,size+18,size+90,c);
// rect (x+325,y+180,size+80,size+18, c);


 //4th number 
 drawInnerDigit(x+425, y, size, c, second_ones_pos);
//  rect (x+425,y-20,size+80,size+18, c);
//  rect (x+420,y,size+18,size+90,c);
//  rect (x+440,y+70,size+70,size+18,c);//middle
//  rect (x+490,y+90,size+18,size+90,c);
//  rect (x+425,y+180,size+80,size+18, c);


// draw(drawOpenMouthPacman);
if(obj.millis<500) {
  drawOpenMouthPacman(80, 100, 35, 80, 380);
}
else {
  drawOpenMouthPacman(80, 100, 55, 80, 380);
}
 
}
//function draw() {
//  background(220);
//  drawOpenMouthPacman(80, 100, 35, 80, 380); // Call the function to draw open-mouthed Pacman
//}

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

function drawInnerDigit(x, y, size, c, n) {
 rect (x+0,y-20,size+80,size+18, c);
 rect (x-5,y,size+18,size+90,c);
 if(n == 2 || n == 3 || n == 5) {
  rect (x+20,y+70,size+70,size+18,c);//middle
 }
 rect (x+70,y+90,size+18,size+90,c);
 rect (x+5,y+180,size+80,size+18, c);  
}

function drawOpenMouthPacman(x, y, diameter, angleStart, angleEnd) {
  // Draw Pacman with an open mouth to the left
  fill(255, 255, 0); // Yellow color
  noStroke();
  arc(x, y, diameter, diameter, radians(angleStart) / 2, radians(angleEnd) + 5, PIE);
}