/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 

let wingSync = 0;

let minuteColourLight = [255, 51, 204];
let minuteColourDark = [200, 30, 120];
let hourColourLight = [180, 57, 180];
let hourColourDark = [102, 0, 102];
let secondColourLight = [255, 50, 50];
let secondColourDark = [200, 40, 40];
let bodyColour = [0, 0, 0];
let outerRingColour = [210, 210, 210];
let innerRingColour = [230, 230, 230]
let backgroundColour = [255, 255, 255];
let leafColour = [40, 170, 40];
let vineColour = [40, 210, 40];

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
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;

    //check to make sure colours aren't inverted if alarm is off
    if(obj.seconds_until_alarm!=0&&bodyColour[0]!=0){
        invertColours();
    }

    //counter so the butterflies don't flap in sync with each other
    wingSync = 0;

    background(backgroundColour);

    //draw ring for butterflies to fly within
    drawVineBehind();
    noStroke();
    fill(outerRingColour);
    ellipse(480, 250, 490, 490);
    fill(innerRingColour);
    ellipse(480, 250, 420, 420);
    fill(backgroundColour);
    ellipse(480, 250, 100, 100);
    push();
    drawAlarm(obj.seconds_until_alarm, millis);
    drawSecondButterfly(seconds, millis);
    drawMinuteButterfly(seconds, minutes, millis);
    drawHourButterfly(hours, seconds, millis);
    pop();
    drawVineFront();

}

function invertColours(){
    for(i = 0; i <3; i++){
        hourColourLight[i] = 255 - hourColourLight[i];
        hourColourDark[i] = 255 - hourColourDark[i];
        minuteColourLight[i] = 255 - minuteColourLight[i];
        minuteColourDark[i] = 255 - minuteColourDark[i];
        secondColourLight[i] = 255 - secondColourLight[i];
        secondColourDark[i] = 255 - secondColourDark[i];
        bodyColour[i] = 255- bodyColour[i];
        outerRingColour[i] = 255- outerRingColour[i];
        innerRingColour[i] = 255- innerRingColour[i];
        leafColour[i] = 255 - leafColour[i];
        vineColour[i] = 255 - vineColour[i];
    }
}

function drawAlarm(t, m){
    if(t>0){
        //fill in circle in middle
        noStroke();
        fill(map(t, 0, 10, 255, 0));
        ellipse(480, 250, min(100, t*10), min(100, t*10));
    }
    else if(t==0 && m == 0){
        //flash scene in inverted colours to signal alarm going off
        invertColours();
    }
}

function drawSecondButterfly(s, m){
	// Start in the center and draw the circle
    translate(480, 250);
    noStroke();
    centreButterfly = [227, 0];
    sizeButterfly = [2, 10];
    let rotationSecond = map(s, 0, 59, 0, 2*PI-(2*PI/60));
    let rotationMillis = map(m, 1, 1000, 2*PI/60/1000, 2*PI/60);
    rotate(rotationMillis+rotationSecond + PI + HALF_PI);
    createButterfly(secondColourLight, secondColourDark, centreButterfly, sizeButterfly, m, s);

}

function drawHourButterfly(h, s, m){
    sizeH= [2.6, 13];
    if(h==0){
        h = 24;
    }
    let rotationSecond = map(s, 0, 59, 2*PI/60, 2*PI);
    let rotationMillis = map(m, 1, 1000, 2*PI/60/1000, 2*PI/60);
    rotate(rotationMillis+rotationSecond);
    let count = 0;
    let yPos = 0;
    //draws a butterfly for every hour going from 1 to 24
    for(i = 0; i< h; i++){
        centreH = [70+(count*30), yPos];
        createButterfly(hourColourLight, hourColourDark, centreH, sizeH, m, s);
        count++;
        if(count==5){
            count = 0;
            rotate((2*PI/15));
            yPos++;
        }
    }
}

function drawMinuteButterfly(s, min, m){
    sizeM= [2.3, 10];
    let rotationSecond = map(s, 0, 59, 2*PI/60, 2*PI);
    let rotationMillis = map(m, 1, 1000, 2*PI/60/1000, 2*PI/60);
    rotate(rotationMillis+rotationSecond+ HALF_PI);
    let count = 0;
    let yPos = 0;
    //draws one butterfly for every minute
    for(i = 0; i< min; i++){
        centreM = [70+(count*30), yPos];
        createButterfly(minuteColourLight, minuteColourDark, centreM, sizeM, m, s);
        count++;
        if(count==5){
            count = 0;
            rotate((2*PI/18));
            yPos++;
        }
    }

}

function createButterfly(c1, c2, cB, sB, millis, seconds){
    fill(c1);
    let pos = millis;
    //makes butterflies out of sync with each other
    if(wingSync%2==0){
        pos -= 300;
        if(pos<0){
            pos = 1000+pos;
        }
    }
    if(wingSync%3==0){
        pos -= 500;
        if(pos<0){
            pos = 1000+pos;
        }
    }
    if(wingSync%5==0){
        pos -= 100;
        if(pos<0){
            pos = 1000+pos;
        }
    }
    //draw bigger top wings
    triangle(map(pos, 1, 1000, cB[0]+sB[0]*4, cB[0]+sB[0]*5), map(seconds, 0, 59, cB[1]-sB[0]*2, cB[1]-sB[0]), 
        cB[0]+sB[0]*5, cB[1]+sB[0]*6,  
        cB[0], cB[1]);
    triangle(map(pos, 1, 1000, cB[0]-sB[0]*4, cB[0]-sB[0]*5), map(seconds, 0, 59, cB[1]-sB[0]*2, cB[1]-sB[0]), 
        cB[0]-sB[0]*5, cB[1]+sB[0]*6,
        cB[0], cB[1]);

    //draw smaller bottom wings
    fill(c2);
    triangle(map(pos, 1, 1000, cB[0]+sB[0]*4, cB[0]+sB[0]*5), map(seconds, 0, 59, cB[1]-sB[0]*2, cB[1]-sB[0]), 
        map(pos, 1, 1000, cB[0]+sB[0], cB[0]+sB[0]*2), map(seconds, 0, 59, cB[1]-sB[0]*4, cB[1]-sB[0]*3),  
        cB[0], cB[1]);
    triangle(map(pos, 1, 1000, cB[0]-sB[0]*4, cB[0]-sB[0]*5), map(seconds, 0, 59, cB[1]-sB[0]*2, cB[1]-sB[0]), 
        map(pos, 1, 1000, cB[0]-sB[0], cB[0]-sB[0]*2), map(seconds, 0, 59, cB[1]-sB[0]*4, cB[1]-sB[0]*3),  
        cB[0], cB[1]);

    //draw body
    fill(bodyColour);
    ellipse(cB[0], cB[1], sB[0], sB[1]);

    wingSync++;
}

//draws the vines that go behind circle
function drawVineBehind(){
    noFill();
    strokeWeight(8);
    stroke(leafColour);
    //left vine
    ellipse(320, 210, 200, 250);
    //right top vine
    ellipse(600, 150, 200, 250);
    //right bottom vine
    ellipse(650, 300, 200, 200);
}

//draws the top layer of vines
function drawVineFront(){
    translate(0, 0);
    rotate(0);
    noFill();
    strokeWeight(8);
    stroke(leafColour);
    //middle vine
    arc(499, 203, 50, 50, QUARTER_PI-PI/7, PI);
    //left vine
    arc(320, 210, 200, 240, HALF_PI, PI);
    //right top vine
    arc(650, 135, 100, 160, 0, PI);
    //bottom vine
    arc(480, 470, 250, 100, PI-PI/15, 0-PI/40);
    fill(leafColour);
    noStroke();
    //draw leaves
    //bottom leaves
    drawLeaf(337, 480, 1);
    fill(vineColour);
    drawLeaf(500, 441, 0.4);
    drawLeaf(520, 401, 0);
    drawLeaf(335, 460, 1.8);
    fill(leafColour);
    drawLeaf(515, 443, 0);
    //left leaves
    drawLeaf(335, 320, 1);
    drawLeaf(310, 350, 0.3);
    drawLeaf(200, 200, 1.4);
    fill(vineColour);
    drawLeaf(201, 180, 1.8);
    //middle leaves
    drawLeaf(540, 200, 1);
    fill(leafColour);
    drawLeaf(500, 248, 0);
    //top right leaves
    drawLeaf(605, 118, 0.3);
    fill(vineColour);
    drawLeaf(635, 232, 0.6);
    drawLeaf(713, 125, 0.5);
    fill(leafColour);
    drawLeaf(715, 170, 1.5);
    //bottom right leaves
    drawLeaf(737, 383, 2.3);
    fill(vineColour);
    drawLeaf(725, 270, 1.4);
    drawLeaf(757, 260, 0.3);
    fill(leafColour);
    drawLeaf(755, 350, 1.4)
}

function drawLeaf(x, y, a){
    push();
    translate(x, y);
    rotate(a);
    ellipse(0, 0, 14, 35);
    pop();
}



