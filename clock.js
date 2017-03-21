/*
 * use p5.js to draw a clock on a 960x500 canvas
 */ 

function draw_clock(hour, minute, second, millis, alarm) {
  	background(0);
    strokeWeight(0);

    fill("rgb(190, 100, 229)");
    plop1(170,60);
    scale(0.3);
    fill("rgb(79, 26, 102)");
    plop2(1500,650);
    plop3(1500,650);
};

function plop1(xp,yp){
    rect(150+xp,100+yp,30,30);
    rect(150+xp,130+yp,30,30);
    rect(150+xp,160+yp,30,30);
    rect(150+xp,190+yp,30,30);
    rect(150+xp,220+yp,30,30);
    rect(150+xp,250+yp,30,30);
    rect(150+xp,280+yp,30,30);

    rect(120+xp,130+yp,30,30);
    rect(90+xp,160+yp,30,30);
    rect(60+xp,190+yp,30,30);
    rect(60+xp,220+yp,30,30);

    rect(90+xp,220+yp,30,30);
    rect(120+xp,220+yp,30,30);
    rect(180+xp,220+yp,30,30);
};

function plop2(xp,yp){
    rect(500+xp,100+yp,30,30);
    rect(470+xp,100+yp,30,30);
    rect(530+xp,100+yp,30,30);

    rect(440+xp,130+yp,30,30);
    rect(440+xp,160+yp,30,30);
    rect(440+xp,190+yp,30,30);
    rect(440+xp,220+yp,30,30);
    rect(440+xp,250+yp,30,30);

    rect(560+xp,130+yp,30,30);
    rect(560+xp,160+yp,30,30);
    rect(560+xp,190+yp,30,30);
    rect(560+xp,220+yp,30,30);
    rect(560+xp,250+yp,30,30);

    rect(500+xp,280+yp,30,30);
    rect(470+xp,280+yp,30,30);
    rect(530+xp,280+yp,30,30);
};

function plop3(xp,yp){
    rect(740+xp,100+yp,30,30);
    rect(680+xp,100+yp,30,30);
    rect(650+xp,100+yp,30,30);
    rect(710+xp,100+yp,30,30);
    rect(620+xp,100+yp,30,30);

    rect(740+xp,130+yp,30,30);
    rect(740+xp,160+yp,30,30);

    rect(710+xp,190+yp,30,30);
    rect(680+xp,220+yp,30,30);

    rect(680+xp,250+yp,30,30);
    rect(680+xp,280+yp,30,30);
};
