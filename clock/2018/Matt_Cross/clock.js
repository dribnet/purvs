//Orbit clock
//Made by Matt Cross 2018 for MDDN242

function draw_clock(obj) {
  

//initial variables 
    let alarm = obj.seconds_until_alarm
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let mill = map(millis, 0,1000,0,360);
    let sec = map(seconds, 0,60,0,360);
    let min = map(minutes, 60,0,360,0);
    let hou = map(hours, 0,12,0,360);

//Background aspects
    background(0);
    translate(480,250);
    rotate(180);
    angleMode(DEGREES);

    Earth();
    AlarmPress();

//The rotation of the white artic island
    push();
    rotate(min);
    Island();
    pop();

//The rotation of the green Islands
    push();
    rotate(hou);
    Islands();
    pop();

//The rotation of the Moon
    push();
    rotate(sec);
    Second();
    pop();

//The code for the stars to twinkle
    Twinkle();
    fill(255,255,0);
    ellipse(-400,-150,12*scale);
    ellipse(250,200,10*scale);
    fill(0,100,100);
    ellipse(-300,100,25*scale);
    fill(0,0,255);
    ellipse(350,-160,15*scale);

//Text to show time for positioning
// push();
// translate(490,-170);
// rotate(180);
//     fill(50);
//     text("Hours: " + hours ,20, 22); 
//     text("Minutes: " + minutes ,20, 37); 
//     text("Seconds: " + seconds ,20, 52); 
//     text("alarm: " + alarm, 20, 66);
// pop();

//Creating the pulsating effect for the stars
    function Twinkle() {

    if(millis<=500){
    scale = map(millis, 0, 500, 0.8,1);       
    }
    else if(millis>500){
    scale = map(millis, 501, 999, 1,0.8);

    }

    }

//Creates the main body of the Earth
    function Earth(){

   noStroke();

    fill(0,0,150);
    ellipse(0,0,425,425);

    fill(0,0,200);
    ellipse(0,0,355,355);

    fill(0,0,250);
    ellipse(0,0,285,285);

    }


//Creates the islands to rotate on the Earth

    function Island() {

fill(255);
        beginShape();
        vertex(10,10);
        vertex(25,-25);
        vertex(-25,-15);
        vertex(-15,5);
        endShape(CLOSE);

    }

    function Islands() {

fill(0,200,0);
        beginShape();
        vertex(65,80);
        vertex(90,70);
        vertex(105,90);
        vertex(95,120);
        vertex(50,110);
        endShape(CLOSE);

        beginShape();
        vertex(-150,-100);
        vertex(-125,-130);
        vertex(-50,-180);
        vertex(-20,-150);
        vertex(0,-50);
        vertex(-50,-25);
        vertex(-100,-75);
        endShape(CLOSE);

        beginShape();
        vertex(150,-110);
        vertex(125,-95);
        vertex(130,-70);
        vertex(145,-80);
        endShape(CLOSE);
    
        beginShape();
        vertex(-120,90);
        vertex(-140,100);
        vertex(-110,160);
        vertex(-90,150);
        vertex(-80,90);
        vertex(-120,90);
        endShape();


    }

//Function for the moon
    function Second() {

if(hours>7 && hours<19){
fill(255,255,0);
ellipse(0,235,25,25);

}
else{
    fill(200);
    ellipse(0,235,25,25);
}



}

//Creates the alarm and all effects for it
function AlarmPress() {

    if (alarm == 0){
    Twinkle();
       fill(0,0,150);
        ellipse(0,0,445*scale);

        fill(0,0,200);
        ellipse(0,0,375*scale);

        fill(0,0,250);
        ellipse(0,0,305*scale);
    }

    if (alarm > 0) {
        fill(255);
        ellipse(250, 140, 25*scale);
        ellipse(400, 0, 25*scale);
        ellipse(-280, -130, 25*scale);
        ellipse(-350, 200, 25*scale); 
        if (alarm <10.0) {
            fill(255,0,0);
        ellipse(250, 140, 25*scale);
        ellipse(400, 0, 25*scale);
        ellipse(-280, -130, 25*scale);
        ellipse(-350, 200, 25*scale); 
        }
    }    
}
}
