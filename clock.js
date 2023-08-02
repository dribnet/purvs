/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
let angle = 0; //angle for alarm clock flower. This allows my flower to spin around itself
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  

  //changing sky based on day and night
const night_sky = color(12, 23, 63); //50,50,60 //dark blue
    const day_sky = color(173,216,230); //light grey blue
    if (obj.hours >= 7 && obj.hours < 8) {
        // sunrise
        let hour_fraction = obj.minutes / 60;
        let cur_sky = lerpColor(night_sky, day_sky, hour_fraction);
       background(cur_sky);
    }
    else if (obj.hours >= 19 && obj.hours < 20) {
        // sunrise
        let hour_fraction = obj.minutes / 60;
        let cur_sky = lerpColor(day_sky, night_sky, hour_fraction);
       background(cur_sky);
    }
    else if(obj.hours >= 8 && obj.hours < 20) {
        // daytime
        background(day_sky);
      
    }
    else {
        // nightime
        background(night_sky);
       
    }

 
  //Raindrops positioning. 
  let seconds = obj.seconds
  let millis = obj.millis
  let Rain = seconds + (millis/1000); //makes the rain drops run smoother by using the milliseconds with the seconds
  let dropsY = map(Rain,0,59,30,500); //allows the raindrops to gradually fall (imitating water actaul rain does)
  
  //for loops draw multiple raindrops across the x-axis
  for(w=0;w<8;w++){ //
    drawWaterdrops(50+w*120,dropsY); //top line of rain drops
  }
  for(w=0;w<8;w++){
    drawWaterdrops(100+w*120,100+dropsY); //second line of rain drops
   }
  for(w=0;w<8;w++){
    
    drawWaterdrops(50+w*120,200+dropsY); //third line of rain drops
  }
  for(w=0;w<8;w++){
    
    drawWaterdrops(100+w*120,300+dropsY); //fourth line of rain drops
  }
  for(w=0;w<8;w++){
    
    drawWaterdrops(50+w*120,400+dropsY); //bottom line of rain drops
  }


  //plant stalk
  let linex = 480; //stalk x position variable
  let liney = 75; //stalk y position variable //originally 55
  stroke(1, 50, 32); //dark green stalk colour
  strokeWeight(8);
  line(linex, liney, linex, liney + 265); //the code for the actual stalk

  //Plant pot
 let quadx = 405; //main body of plant pot x position variable
 let quady = 370; //main body of plant pot y position variable //originally 350
 let rectx = 395; //top piece of plant pot, position x variable
 let recty = 340; //top piece of plant pot, position y variable //originally 320

 
  fill(193, 154, 107); //medium brown colour 
  noStroke();
  quad(quadx, quady, quadx + 150, quady, quadx + 130, quady + 100, quadx + 20, quady + 100); // 405, 350, 555, 350, 535, 450, 425, 450 //goes from right to left, x then y...
  rect(rectx, recty, 170, 30); //collar of plant pot //395, 320, 170, 30

  stroke(210, 180, 140); // light tan brown 
  strokeWeight(5); //size of collar
  line(rectx, quady, 565, 370); //line on collar of plant pot // colour: 395, 350, 565, 350

  
  let ystep = 48; //distance between the position of each leave
  let leaves = 6;  //number of leaves to appear on each side, mapped to hours
  let hours = obj.hours;   //hours variable 
  let ZeroSix = map(hours,0,6,6,0);   //used for leaves to appear with the hours between 0000 and 0600
  let sixTwelve = map(hours,0,12,12,0); //used for leaves to appear with the hours between 0600 and 1200
  let TwelveEightteen = map(hours,12,18,6,0); //used for leaves to appear with the hours between 1200 and 1800
  let TestMap = map(hours,18,23,5,0);//used for leaves to appear with the hours between 1800 and 2300
  
  

  //colours variables
  let minutes = obj.minutes //minutes varuable
  
  const leafGreen = color(18, 181, 121); //constant colour, green //used for controlling the change in leave colour
  const leafOrange = color(195, 113, 37); //constant colour, orange //used for controlling the change in leave colour

//map for the lerp colour //changing between green and orange
//old range 0-59 for miuntes
//new range 0-1 for the lerpColor method
  let Lerp = map(minutes,0,59,0,1);
  //go from colour1 to colour2
  let leafChange = lerpColor(leafGreen, leafOrange,Lerp); //this variable controls the change in leaf colour

  
  //This is the leaves changing as the hours go by:

  //leaves between 0000 - 1200, green and gradually appering by the hour.
      if(hours>=0&&hours<7){//draw 6 leaves between 0000 - 0600  
        for (let i = ZeroSix; i < 6; i++) {    
      fill(18, 181, 121); //light green   
       drawLeaf(425, 42+(ystep)*i);     
    }
  } 
       else {//draw 6 leaves in the same spot in green     
        for(let k=0;k<leaves;k++){   
          fill(18, 181, 121); //light green    
           drawLeaf(425,42+(ystep*k));   
            }  
             //lerp colour between green and orange for 1300 - 2400
           if(hours>=13&&hours<19){//draw 6 leaves between 1300 - 1800   //each minute the leaves will slowly fade between green and orange
            for (let i = TwelveEightteen; i < 6; i++) {  
             fill(leafChange);   //colour change between green and orange
              drawLeaf(425, 42+(ystep)*i);   
             
           }}  
           else if(hours>=13){//draw 6 leaves in the same spot in orange     
            for(let k=0;k<leaves;k++){   
              fill(195, 113, 37); //orange   
               drawLeaf(425,42+(ystep*k));   
                }  
               }
           }
           

if(hours>=7&&hours<12){//draw 6 leaves between 0700 - 1200 
    for (let i = sixTwelve; i < 6; i++) {  
      fill(18, 181, 121); //light green  
      drawrightLeaf(535, 42+(ystep)*i);  
     
    } } 
      else  if(hours>=12){//draw 6 leaves in the same spot in green     
        for(let k=0;k<leaves;k++){      
          fill(18, 181, 121); //light green  
          drawrightLeaf(535,42+(ystep*k));   
           }  
           if(hours>=18&&hours<=23){//draw 6 leaves between 1900 - 2300  ////each minute the leaves will slowly fade between green and orange
            for (let i = TestMap; i < 6; i++) {  
              fill(leafChange);  //colour change between green and orange
              drawrightLeaf(535, 42+(ystep)*i);  
             
            } 
            
                 
          } 
          else if(hours>=23){//draw 6 leaves in the same spot in orange    
            for(let k=0;k<leaves;k++){   
              fill(195, 113, 37); //orange   
               drawrightLeaf(535,42+(ystep*k));   
                }  
               
              }
           }

  //bee flying across screen working with the minutes 0-59
   let beeX = map(minutes,0,59,0,960); //moves across the screen every minute
   let beebounce = map(millis,0,999,0,TWO_PI); //maps the milliseconds to the sin wave for the wiggle
   let Wiggle = sin(beebounce); //wiggle variable for bee using map for bounce rate

   //this makes the bee move across the screen
  drawbee(beeX,height/2+Wiggle*10); //drawing the bee in new position (using the bee function created) and mapping x position movement to the minutes
  

  //this is where the alarm is active/going off:
  if (obj.seconds_until_alarm == 0) { 
    background(12, 23, 63); //night blue for the alarm background to replace the normal background
 
   // plant stalk for alarm
 stroke(1, 50, 32); //dark green stalk colour
  strokeWeight(8);
  line(linex, 130, linex, liney + 265); //the code for the actual stalk
  
  //plant pot for the alarm function
  fill(193, 154, 107); //medium brown colour //original colour: dark turquoise 0,206,209 
  noStroke();
  quad(quadx, quady, quadx + 150, quady, quadx + 130, quady + 100, quadx + 20, quady + 100); // 405, 350, 555, 350, 535, 450, 425, 450 //goes from right to left, x then y...
  rect(rectx, recty, 170, 30); //collar of plant pot //395, 320, 170, 30

  stroke(210, 180, 140); // light tan brown 
  strokeWeight(5);
  line(rectx, quady, 565, 370); //line on collar of plant pot 

  fill(18, 181, 121); //light green
  drawLeaf(425,230); //left leaf
  drawrightLeaf(535,200); //right leaf
 
  


//this is the flower code for the alarm
angle = angle + 0.05; //slows down the speed of the flower spinning
//let secondsrotate = map(seconds,0,59,0, angle); //maps flower spinning to the seconds
let flowersize = map(millis/40,0,59,30,80, petalSize); //controls the enlargement of the flower by the milliseconds e.g., allows flower to become bigger and smaller for the alarm. 


push();
translate(width/2,100) ; //moves flower to position i need it at
  rotate(angle); //allows the flower to spin
  flowerAlarm(0,0, flowersize); //flower to appear when alarm goes off

  pop();

  drawbee(width/2,100+Wiggle*10);

}


  } //this is the end of the draw clock function

//These are all my individual functions and their variables:

//these are constant variables for my bee, leaves and water dros
let Beex = 20 //controls x position of Bee
  let Beey = 250 //controls y position of Bee

let leafx = 20; //controls x position of left leaves
let leafy = 20; //controls y position of left and right leaves
let Leafx = 70; //controls x position of right leaves
let dropx = 60; //controls x position of rain drops
let dropy = 60; //controls y position of rain drops

//function to draw the left leaves //curve vertexs to achieve the shape of the leaves
function drawLeaf(leafx, leafy) {
  
  stroke(1, 50, 32); //dark green
  strokeWeight(1.5);
  beginShape();
  curveVertex(leafx, leafy); //20,20
  curveVertex(leafx, leafy); //20/, 20
  curveVertex(leafx + 10, leafy + 30); //30, 50
  curveVertex(leafx + 20, leafy + 50); //40,70
  curveVertex(leafx + 50, leafy + 50); //70,70
  curveVertex(leafx + 50, leafy + 30); //70,50
  curveVertex(leafx + 10, leafy + 10); //30, 30
  endShape(CLOSE);
}

//function to draw the right leaves //curve vertexs to achieve the shape of the leaves
function drawrightLeaf(Leafx, leafy) {
  
  stroke(1, 50, 32); //dark green
  strokeWeight(1.5);
  beginShape();
  curveVertex(Leafx, leafy); //70,20
  curveVertex(Leafx, leafy); //70,20
  curveVertex(Leafx - 10, leafy + 30); //60,50
  curveVertex(Leafx - 20, leafy + 50); //50,70
  curveVertex(Leafx - 50, leafy + 50); //20,70
  curveVertex(Leafx - 50, leafy + 30); //20,50
  curveVertex(Leafx - 10, leafy + 10); //60,30
  endShape(CLOSE);
}



 function drawWaterdrops(dropx, dropy) {

  fill(27, 149, 224);
  noStroke();
  beginShape();
  curveVertex(dropx,dropy); //top //60,60
  curveVertex(dropx, dropy); //top //60,60
  curveVertex(dropx + 5, dropy +25); //right side //65,85
  curveVertex(dropx, dropy + 30); //bottom //60,90
  curveVertex(dropx - 5, dropy + 25); //left side //55,85
  endShape(CLOSE);
}
 
//bee
function drawbee(Beex,Beey){
noStroke();

 //back wing
fill(213, 245, 255,200); //clear blue
ellipse(Beex-5,Beey-15,15,25); //-15,235,15,25

fill(255,255,0); //body colour, yellow
ellipse(Beex,Beey,35,25); //body //20,250,35,25
fill(0); //black
ellipse(Beex+10,Beey-5,5); //eye //30,245,5
stroke(0);
line(Beex-7,Beey+12,Beex-7,Beey-10); //back stripe //13,262,13,240
line(Beex+3,Beey+12,Beex+3,Beey-10); //front stripe //23,262,23,240

 //front forward wing
noStroke();
fill(213, 245, 255,200); //clear blue
ellipse(Beex,Beey-15,15,25); //-10,235,15,25

}

 //alarm flower
 let petal = 100;
let petalSize = 30

 function flowerAlarm(petal,petal,petalSize){
  
  push();
  ellipseMode();
   fill(255);
   noStroke();
   ellipse(petal,petal,petalSize,petalSize+30);//top petal //100,100,30,60
   ellipse(petal,petal+60,petalSize,petalSize+30); //bottom petal //100/160,30,60
   ellipse(petal-30,petal+30,petalSize+30,petalSize); //left side petal //70,130,60,30
   ellipse(petal+30,petal+30,petalSize+30,petalSize); //right side petal //130,130,60,30
 
   //center of flower
   fill(195, 113, 37);
   noStroke();
   ellipse(petal,petal+30,petalSize,petalSize); //100,130,30,30
   pop();
 }

 
