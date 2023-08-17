  var eh = 0;
  var ew = 0;
  var s = 0 ;
  let w = 0;
  var h = -100;
  var hc = -100;
  var sms = 255;
  var hms = -100;
  var hmls = -100;
  var asw = 100;
  var amw = 100;
  var ahr = 100;
  var hs = 0;
  var rsm = 0;
  var gsm = 0;
  var bsm = 0;
  var rfm = 0;
  var gfm = 0;
  var bfm = 0;
  var rfh = 0;
  var gfh = 0;
  var bfh = 0;
  var rsh = 0;
  var gsh = 0;
  var bsh = 0;

  // let tap;
// function preload(){
// 	tap = loadImage("Images/tap.png")
// }


function setup () {
  createCanvas(960, 500);
  
 
  }

function draw_clock(obj){
  // image(tap, this.x, this.y)
   angleMode(DEGREES);
 background(10);
  translate(480, 250);

  if(obj.seconds_until_alarm ==0 ){
  background(255,0,0);
}  
else{
  background(10);
}
  let hr = hour();
  let mn = minute();
  let sc = second();
  let ms = millis();


  text(hr, -210, 110);
  textSize(72);
  text(':', -100, 110);
  text(':', 100, 110);




strokeWeight(2);
stroke(255);
noFill();

//Millis - Sec
noStroke();
fill(0);
ellipse(200, -100, 60, 60);

stroke(0, 180, 180);
fill(0, 150, 150);

push();
let mls = map(ms % 1000, 0, 1000, 0, 60);
ellipse(200, -100, mls, mls);
pop();
ellipse(200, hms, 60, 60);


let asw = map(sc % 160, 0, 60, 100, 160);
stroke(180, 0, 0);
fill(150, 0, 0);
arc(200, 100, asw, asw, -65, 245, CHORD);
 fill(255);
  noStroke();

  textSize(40);
  text(sc, 180, 110);

noFill();
stroke(255)


//Sec - Min\
stroke(rsm, gsm, bsm);
fill(rfm, gfm, bfm);
ellipse(0, h, 60, 60);

stroke(0, 180, 180);
fill(0, 150, 150);
ellipse(0, -100, sc, sc);

stroke(0, 180, 0);
fill(0, 150, 0);
let amw = map(mn % 160, 0, 60, 100, 160);
arc(0, 100, amw, amw, -65, 245, CHORD);
  
  fill(255);
  noStroke();
  textSize(40);
  text(mn, -20, 110);

  noFill();
  stroke(255)


//Min - Hr'
fill(rfh, gfh, bfh);
stroke(rsh, gsh, bsh);
ellipse(-200, hc, 60, 60);

fill(0, 150, 150);
stroke(0,180,180);
ellipse(-200, -100, mn, mn);

stroke(0, 0, 180);
fill(0, 0, 150);
let ahw = map(hr % 160, 0, 12, 100, 160);

arc(-200, 100, ahw, ahw, -65, 245, CHORD);

 fill(255);
noStroke();
textSize(40);
text(hr, -210, 110);

  noFill();
  stroke(255)
 


 // seconds - minutes falling ellipse and replacing
  if(sc > 58 ){

    h = h +3;
    s = 255;
    gsm = 180
    bsm = 180
    gfm = 150
    bfm = 150
  }

  if (sc == 1){

   h = -100;
   s = 0;
   gsm = 0
    bsm = 0
    gfm = 0
    bfm = 0
   }

//millis - sec falling ellipse and replacing
   if(mls = 999 ){
    
    hms = hms + 3.3;
    sms = 255;
   }

   if(hms > 100){

    hms = -100;
    sms = 0;


    if(hms = 100){
    
    hms = -100;

    }
    //Min - hour falling ellipse and replacing.
      if(mn > 59 ){

    hc = hc +1;
    hs = 255;
  }

  if (mn == 1){

   hc = -100;
   hs = 0;
   }

   }




 
}
