function setup() {
    createCanvas(960,500);
    
}
function draw_clock() {
    angleMode(DEGREES);
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

translate(480,250);
rotate(-90);



background(0);

  
//main shape
//seconds
push();
 stroke(188,198,204);
 strokeWeight(6);
 noFill();
 let end = map(seconds,0,59,0,360);
 arc(0,0,310,310,0,end);
 filter(BLUR,2);
pop();
stroke(255);
strokeWeight(2);
noFill();
ellipse(0,0,310,310);

//minutes
push();
 stroke(243,243,21);
 strokeWeight(7);
 noFill();
 let end2 = map(minutes,0,59,0,360);
 arc(0,0,295,295,0,end2);
 filter(BLUR,2);
pop();
stroke(212,175,55);
strokeWeight(2);
noFill();
ellipse(0,0,295,295);

//hours
push();
 stroke(70, 173, 212);
 strokeWeight(8);
 noFill();
 let end3 = map(hours,0,23,-90,720);
 arc(0,0,260,260,0,end3);
 filter(BLUR,2);
pop();
stroke(0,0,255);
strokeWeight(2);
noFill();
ellipse(0,0,260,260);


//second circle
push();
rotate(90);
stroke(212,175,55);
strokeWeight(4);
ellipse(40,50,120,120);
stroke(0);
strokeWeight(1);
pop();

  

//hands
//sec
push();
rotate(end);
stroke(255);
line(0,0,155,0);
pop();

//min
push();
rotate(end2);
stroke(212,175,55);
line(0,0,150,0);
pop();

//hour
push();
rotate(end3);
stroke(0,0,255);
line(0,0,130,0);
pop();


push();
rotate(90);
fill(255);
    text(hours + ":" + minutes + ":" + seconds,25,50);
pop();

}
