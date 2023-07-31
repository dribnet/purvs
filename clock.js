/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
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

  
  textSize(40);
  textAlign(CENTER, CENTER);

 

  

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

  //ellipse moving down test
  // let Seconds_Radius = map(Seconds, 0, 59, 1, 150);
  //let secondsY = map(seconds, 0, 59, 1, 150);

  // fill(140, 255, 251) // blue
  // noStroke();
  // ellipse(width / 2, secondsY, 100); // minutes moving up and down

  //Raindrops positioning
  let seconds = obj.seconds
  let millis = obj.millis
  let Rain = seconds + (millis/1000); //makes the rain drops run smoother
  let dropsY = map(Rain,0,59,30,500);
  
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
  let linex = 480;
  let liney = 75; //originally 55
  stroke(1, 50, 32); //dark green
  strokeWeight(8);
  line(linex, liney, linex, liney + 265);

  //Plant pot
 let quadx = 405;
 let quady = 370; //originally 350
 let rectx = 395;
 let recty = 340; //originally 320

 
  fill(193, 154, 107); //medium brown colour //original colour: dark turquoise 0,206,209 
  noStroke();
  //quad(10, 30, 80, 30, 70, 90, 20, 90); //10,30,80,30,70,90,20,90
  quad(quadx, quady, quadx + 150, quady, quadx + 130, quady + 100, quadx + 20, quady + 100); // 405, 350, 555, 350, 535, 450, 425, 450 //goes from right to left, x then y...
  rect(rectx, recty, 170, 30); //collar of plant pot //395, 320, 170, 30

  stroke(210, 180, 140); // light tan brown // original colour: light turquoise 140,255,251
  strokeWeight(5);
  line(rectx, quady, 565, 370); //line on collar of plant pot //395, 350, 565, 350

  
  let ystep = 48;
  let leaves = 6;  
  let hours = obj.hours;    
  let ZeroSix = map(hours,0,6,6,0);   
  let sixTwelve = map(hours,0,12,12,0); 
  let TwelveEightteen = map(hours,12,18,6,0);
  let TestMap = map(hours,18,23,5,0);
  
  

  //colours
  let minutes = obj.minutes
  
  const leafGreen = color(18, 181, 121);
  const leafYellow = color(195, 113, 37);

//map
//old range 0-59 for miuntes
//new range 0-1 for the lerpColor method
  let Lerp = map(minutes,0,59,0,1);
  //go from colour1 to colour2
  let leafChange = lerpColor(leafGreen, leafYellow,Lerp);

  
  //This is the leaves changing as the hours go by
  //leaves between 0000 - 1200, green and gradually appering by the hour.
      if(hours>=0&&hours<7){//draw 6 leaves between 0000 - 0600  
        for (let i = ZeroSix; i < 6; i++) {    
      fill(18, 181, 121); //light green   
       drawLeaf(425, 42+(ystep)*i);     
    }
  } 
       else {//draw 6 leaves in the same spot       
        for(let k=0;k<leaves;k++){   
          fill(18, 181, 121); //light green    
           drawLeaf(425,42+(ystep*k));   
            }  
             //lerp colour between green and orange for 1300 - 2400
           if(hours>=13&&hours<19){//draw 6 leaves between 1300 - 1800   //each minute the leaves will slowly fade between green and orange
            for (let i = TwelveEightteen; i < 6; i++) {  
             fill(leafChange);   //colour change
              drawLeaf(425, 42+(ystep)*i);   
             
           }}  
           else if(hours>=13){//draw 6 leaves in the same spot       
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
      else  if(hours>=12){//draw 6 leaves in the same spot      
        for(let k=0;k<leaves;k++){      
          fill(18, 181, 121); //light green  
          drawrightLeaf(535,42+(ystep*k));   
           }  
           if(hours>=18&&hours<=23){//draw 6 leaves between 1900 - 2300  ////each minute the leaves will slowly fade between green and orange
            for (let i = TestMap; i < 6; i++) {  
              fill(leafChange);  //colour changing
              drawrightLeaf(535, 42+(ystep)*i);  
             
            } 
            
                 
          } 
          else if(hours>=23){//draw 6 leaves in the same spot       
            for(let k=0;k<leaves;k++){   
              fill(195, 113, 37); //orange   
               drawrightLeaf(535,42+(ystep*k));   
                }  
               
              }
           }
          
  //             if(hours=24){
  //               for(let k=0;k<leaves;k++){   
  //                 fill(195, 113, 37); //orange   
  //                drawLeaf(425,LeavesY+(ystep*k));   
  //                  drawrightLeaf(535,LeavesY+(ystep*k));   
  //                   }  
  // }
                 
        
      


  //bee flying across screen working with the minutes 0-59
  
  let beeX = map(minutes,0,59,0,960); //moves across the screen every minute

  for(w=0;w<1;w++){ 
    noStroke();
    fill(255,255,0); //yellow
    drawbee(beeX,height/2); //change to bee when created
  }

  if (obj.seconds_until_alarm == 0) { //this is where the alarm is active/going off
    background(12, 23, 63);
 
 text("alarm",250,250);
 
   // plant stalk
 stroke(1, 50, 32); //dark green
  strokeWeight(8);
  line(linex, liney, linex, liney + 265);
  fill(193, 154, 107); //medium brown colour //original colour: dark turquoise 0,206,209 
  noStroke();
  //quad(10, 30, 80, 30, 70, 90, 20, 90); //10,30,80,30,70,90,20,90
  quad(quadx, quady, quadx + 150, quady, quadx + 130, quady + 100, quadx + 20, quady + 100); // 405, 350, 555, 350, 535, 450, 425, 450 //goes from right to left, x then y...
  rect(rectx, recty, 170, 30); //collar of plant pot //395, 320, 170, 30

  stroke(210, 180, 140); // light tan brown // original colour: light turquoise 140,255,251
  strokeWeight(5);
  line(rectx, quady, 565, 370); //line on collar of plant pot //395, 350, 565, 350

  flowerAlarm(width/2,100); //flower to appear when alarm goes off
   }


  }


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

fill(255,255,0);
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
 let petalx = 100;
 let petaly =100
 
 function flowerAlarm(petalx,petaly){
   fill(255);
   noStroke();
   ellipse(petalx,petaly,30,60);//top petal //100,100,30,60
   ellipse(petalx,petaly+60,30,60); //bottom petal //100/160,30,60
   ellipse(petalx-30,petaly+30,60,30); //left side petal //70,130,60,30
   ellipse(petalx+30,petaly+30,60,30); //right side petal //130,130,60,30
 
   //center of flower
   fill(255,255,0);
   noStroke();
   ellipse(petalx,petaly+30,30,30); //100,130,30,30
 }

 
