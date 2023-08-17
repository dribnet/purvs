/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
//time variables

let alarm = obj.seconds_until_alarm;
let hours = obj.hours;
let mins = obj.minutes;
let secs = obj.seconds;
let mls = obj.millis;


//color mapping test
let C1 = map(hours,0,6,221,252);
let C2 = map(hours,0,6,212,241);
let C3 = map(hours,0,6,168,186);
let Cn1 = map(hours,18,24,252,221);
let Cn2 = map(hours,18,24,241,212);
let Cn3 = map(hours,18,24,186,168);

if(hours<=6){
    background(C1,C2,C3); 
}
if(hours>6 && hours <=18){
    background(252, 241, 186);
}
if (hours>18) {
    background(Cn1,Cn2,Cn3);
}

let alarmGrow = map(mls,0,1000,0,960);
if(alarm==0){
    background('#f44242');
    fill('#ff0000');
    ellipse(480,250,alarmGrow,alarmGrow);
}



fill('#e8ddab');
rect(0,445 ,960,55);

//am+pm
if(hours<=12){
    textSize(60);
    fill('#4fd8ff');
    text('AM',593,445);
    fill(255);
    text('AM',590,445);

}
if (hours>12) {
    
    textSize(60);
    fill('#4fd8ff');
    text('PM',593,445);
    fill(255);
    text('PM',590,445);
    
}


//flame
let go = true; 
let XposE = 480;
let YposE = 105;
let tri1X = 455;
let tri1Y = 100;
let tri2X = 480;
let tri2Y = 40;
let tri3X = 505;
let tri3Y = 100;

//flame glow
ellipse()

//flame movement
let x1 = map(mls,0,500,0,1);
let x2 = map(mls,500,1000,-0, -1);

let x = map(mls,0,1000,0,3,true);
let y = map(mls,0,1000,0,8,true);

if(mls <= 500){
    x = x1;
}
else if(mls >500){
    x = x2;
}

//minute flame grow:
//elipseMap
let eGrowMin = map(secs,0,60,50,75,true);
//triangleMap
let minGx1 = map(secs,0,60,455,442.5,true);
let minGx2 = map(secs,0,60,505,517.5,true);
let minGy1 = map(secs,0,60,40,13,true);

fill('#ff815e');
ellipse(480+x,105,eGrowMin,eGrowMin);
triangle(minGx1+x,97.5,480,minGy1,minGx2+x,97.5);

//flame ellipse
fill('#ffb663');
noStroke();
ellipse(480+x,105,50,50);

//tip of flame (triangle)
triangle(tri1X+x,tri1Y,tri2X+x,tri2Y,tri3X+x,tri3Y);

//sec pulse flame
let t1x = map(mls,0,1000,480,455,true);
let t1y = map(mls,0,1000,105,100,true);
let t2y = map(mls,0,1000,105,40,true);
let t3x = map(mls,0,1000,480,505,true);
let t3y = map(mls,0,1000,105,100,true);
let eGrow = map(mls,0,1000,0,50,true);

fill(220);
triangle(t1x+x,t1y,tri2X+x,t2y,t3x+x,t3y);
ellipse(480+x,105,eGrow,eGrow);

//CANDLE BODY{

//minutes markers
fill(255);
rect(559,198.5,5,3,3);
rect(559,248.5,5,3,3);
rect(559,298.5,5,3,3);
rect(559,348.5,5,3,3);
rect(559,398.5,5,3,3);
rect(559,448.5,5,3,3);
textSize(10);
fill('#4fd8ff');
text('10',568,202.5);
fill(255);
text('10',567,202.5);
fill('#4fd8ff');
text('20',568,252.5);
fill(255);
text('20',567,252.5);
fill('#4fd8ff');
text('30',568,302.5);
fill(255);
text('30',567,302.5);
fill('#4fd8ff');
text('40',568,352.5);
fill(255);
text('40',567,352.5);
fill('#4fd8ff');
text('50',568,402.5);
fill(255);
text('50',567,402.5);
fill('#4fd8ff');
text('60',568,452.5);
fill(255);
text('60',567,452.5);

//rect
fill('#4fd8ff');
rect(405,150,150,300,5);

//candle shadow
noStroke();
fill('#1292b7');
ellipse(480,452,160,40);

//ellipse2
fill('#4fd8ff');
ellipse(480,446,150,30);

//hours text
fill(255);
text(hours,20,20);

//hours animation
//feilds
let y1 = map(mins,0,60,0,302.5);
let y2 = map(mins,0,60,0,306);
let y3 = map(mins,0,60,0,308);
let y4 = map(mins,0,60,0,309.5);
let y5 = map(mins,0,60,0,310);
let y6 = map(mins,0,60,0,310.5);
let y7 = map(mins,0,60,0,310.5);
let y8 = map(mins,0,60,0,310);
let y9 = map(mins,0,60,0,309.5);
let y10 = map(mins,0,60,0,308);
let y11 = map(mins,0,60,0,306);
let y12 = map(mins,0,60,0,303);

if(hours<12){
    //1
    if(hours>=1){
    y1=302.5;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(405+6,150,5,y1,5);
    noStroke();

    //2
    if(hours>=1){
    if(hours>=2){
    y2=306;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(417+6,150,5,y2,5);
    }

    //3
    if(hours>=2){
    if(hours>=3){
    y3=308;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(429+6,150,5,y3,5);
    }

    //4
    if(hours>=3){
    if(hours>=4){
    y4=309.5;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(441+6,150,5,y4,5);
    }

    //5
    if(hours>=4){
    if(hours>=5){
    y5=310;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(453+6,150,5,y5,5);
    }

    //6
    if(hours>=5){
    if(hours>=6){
    y6=310.5;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(465+6,150,5,y6,5);
    }

    //7
    if(hours>=6){
    if(hours>=7){
    y7=310.5;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(477+6,150,5,y7,5);
    }

    //8
    if(hours>=7){
    if(hours>=8){
    y8=310;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(489+6,150,5,y8,5);
    }

    //9
    if(hours>=8){
    if(hours>=9){
    y9=309.5;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(501+6,150,5,y9,5);
    }

    //10
    if(hours>=9){
    if(hours>=10){
    y10=308;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(513+6,150,5,y10,5);
    }

    //11
    if(hours>=10){
    if(hours>=11){
    y11=306;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(525+6,150,5,y11,5);
    }

    //12
    if(hours>=11){
    if(hours>=12){
    y12=303;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(537+6,150,5,y12,5);
    }
}

if(hours>=12){
    //1
    if(hours>12){
    y1=302.5;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(405+6,150,5,y1,5);
    noStroke();

    //2
    if(hours>=13){
    if(hours>=14){
    y2=306;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(417+6,150,5,y2,5);
    }

    //3
    if(hours>=14){
    if(hours>=15){
    y3=308;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(429+6,150,5,y3,5);
    }

    //4
    if(hours>=15){
    if(hours>=16){
    y4=309.5;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(441+6,150,5,y4,5);
    }

    //5
    if(hours>=16){
    if(hours>=17){
    y5=310;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(453+6,150,5,y5,5);
    }

    //6
    if(hours>=17){
    if(hours>=18){
    y6=310.5;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(465+6,150,5,y6,5);
    }

    //7
    if(hours>=19){
    if(hours>=20){
    y7=310.5;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(477+6,150,5,y7,5);
    }

    //8
    if(hours>=20){
    if(hours>=21){
    y8=310;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(489+6,150,5,y8,5);
    }

    //9
    if(hours>=21){
    if(hours>=22){
    y9=309.5;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(501+6,150,5,y9,5);
    }

    //10
    if(hours>=22){
    if(hours>=23){
    y10=308;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(513+6,150,5,y10,5);
    }

    //11
    if(hours>=23){
    if(hours>=24){
    y11=306;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(525+6,150,5,y11,5);
    }

    //12
    if(hours>=22){
    if(hours>=23){
    y12=303;
    }
    strokeWeight(2);
    stroke('#17abd6');
    fill('#1292b7');
    rect(537+6,150,5,y12,5);
    }
}

//ellipse1
noStroke();
fill('#1292b7');
ellipse(480,154,150,30);
//flame shadow
fill('#004d63');
ellipse(480+x,154,42,14);
//minGrow Ellipse
fill('#ff815e');
ellipse(480+x,105,eGrowMin,eGrowMin);
//flame ellipse
fill('#ffb663');
noStroke();
ellipse(480+x,105,50,50);

//tip of flame (triangle)
triangle(tri1X+x,tri1Y,tri2X+x,tri2Y,tri3X+x,tri3Y);

//sec pulse flame
fill('#ffea99');
triangle(t1x+x,t1y,tri2X+x,t2y,t3x+x,t3y);
ellipse(480+x,105,eGrow,eGrow);
}
