/*
 * use p5.js to draw a clock on a 960x500 canvas
 */ 

function draw_clock(hour, minute, second, millis, alarm) {
    angleMode(DEGREES)
    var millis_count = map(millis,0,1000,0,360);
    var second_count = map(second,0,60,0,360)-90;
    var minute_count = map(minute,0,60,0,360)-90;
    var hour_count = map(hour,0,12,0,360)-90;

  	background(255);
    strokeWeight(0);
    translate(480,250)
    fill(0);
    ellipse(0,0,450);

    fill(50);
    ellipse(0,0,410)

    fill(80);
    ellipse(0,0,350)

    second_background();
    minute_background();
    hour_background();
    if(alarm < 0){
        fill(50);
    } else if(alarm == 0){
        fill(0);
    } else {
        fill(100);
    }
    ellipse(0,0,100);

    push();
    millisecond_fun(millis_count);
    pop();

    push();
    second_fun(second_count);
    pop();

    minute_fun(minute_count);
    hour_fun(hour_count);

};

//Background Attributes

function second_background(){
    fill(0);
    var i = 0;
    for (; i < 60; i++) {
         ellipse(195,0,8);
         rotate(6);
    };
};

function minute_background(){
    fill(0);
    var i = 0;
    for (; i < 60; i++) {
         ellipse(150,0,10);
         rotate(6);
    };
};

function hour_background(){
    fill(0);
    var i = 0;
    for (; i < 12; i++) {
         ellipse(120,0,20);
         rotate(30);
    };
};

//Counters

function millisecond_fun(millis_count){
	rotate(millis_count);
	fill('rgb(235, 68, 96)');
   	ellipse(0,-215,5);

};

function second_fun(second_count){
    xp= map(sin(second_count),-1,1,-195,195);
    yp = map(cos(second_count),-1,1,-195,195);
    fill('rgb(235, 68, 96)');
    var i = 0;
    for (; i < 13*3; i++) {
         ellipse(yp,xp,8);
         rotate(-0.5);
    };
};

function minute_fun(minute_count){
    xp= map(sin(minute_count),-1,1,-150,150);
    yp = map(cos(minute_count),-1,1,-150,150);
    fill('rgb(66, 134, 244)');
    ellipse(yp,xp,10);
};

function hour_fun(hour_count){
    xp= map(sin(hour_count),-1,1,-120,120);
    yp = map(cos(hour_count),-1,1,-120,120);
    fill('rgb(66, 134, 244)');
    ellipse(yp,xp,20);
};
