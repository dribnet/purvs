/*
 * use p5.js to draw a clock on a 960x500 canvas
 */ 
var md1m = 30;
var md2m = 130;
var hd1m = 30;
var hd2m = 205;
var prevMinute = 0;
var prevHour = 0;
var move = 25;

function draw_clock(hour, minute, second, millis, alarm) {
  	background(255);
    textSize(12);
    textStyle(BOLD);
    strokeWeight(0);
    
    fill(color('rgb(45,45,45)'));
    rect(480-100,250-12.5,200,25,30);
    
    fill(255);
    ellipse(480,250,15)
    
    //fill(color('rgb(235,68,96)'));
    fill(255);
    md1(480+70,md1m);
    md2(480+35,md2m);
    hd1(480-35,hd1m);
    hd2(480-70,hd2m);
    
    if(prevMinute != minute){
        md1m += move;
        if (md1m >= 205){
            md2m += move;
            md1m = 30;
        };
        if (md2m >= 405){
            md2m = 130;
        };
        prevMinute = minute;
    };
    if(prevHour != hour){
        hd1m += move;
        if (hd1m >= 205){
            hd2m += move;
            hd1m = 30;
        };
        if (hd2m >= 305){
            hd2m = 205;
        };
        prevHour = hour;
    };
};


// NUMBER FUNCTIONS ~~~~~~~~~~~
function sd1(xp,yp){
    text("9", xp, yp);
    text("8", xp, yp+(move*1));
    text("7", xp, yp+(move*2));
    text("6", xp, yp+(move*3));
    text("5", xp, yp+(move*4));
    text("4", xp, yp+(move*5));
    text("3", xp, yp+(move*6));
    text("2", xp, yp+(move*7));
    text("1", xp, yp+(move*8));
    text("0", xp, yp+(move*9));
};
function sd2(xp,yp){
    text("5", xp, yp);
    text("4", xp, yp+(move*1));
    text("3", xp, yp+(move*2));
    text("2", xp, yp+(move*3));
    text("1", xp, yp+(move*4));
    text("0", xp, yp+(move*5));
};
function md1(xp,yp){
    text("9", xp, yp);
    text("8", xp, yp+(move*1));
    text("7", xp, yp+(move*2));
    text("6", xp, yp+(move*3));
    text("5", xp, yp+(move*4));
    text("4", xp, yp+(move*5));
    text("3", xp, yp+(move*6));
    text("2", xp, yp+(move*7));
    text("1", xp, yp+(move*8));
    text("0", xp, yp+(move*9));
};
function md2(xp,yp){
    text("5", xp, yp);
    text("4", xp, yp+(move*1));
    text("3", xp, yp+(move*2));
    text("2", xp, yp+(move*3));
    text("1", xp, yp+(move*4));
    text("0", xp, yp+(move*5));
};
function hd1(xp,yp){
    text("9", xp, yp);
    text("8", xp, yp+(move*1));
    text("7", xp, yp+(move*2));
    text("6", xp, yp+(move*3));
    text("5", xp, yp+(move*4));
    text("4", xp, yp+(move*5));
    text("3", xp, yp+(move*6));
    text("2", xp, yp+(move*7));
    text("1", xp, yp+(move*8));
    text("0", xp, yp+(move*9));
};
function hd2(xp,yp){
    text("2", xp, yp);
    text("1", xp, yp+(move*1));
    text("0", xp, yp+(move*2));
};
