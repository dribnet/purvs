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
    let seconds_until_alarm = obj.seconds_until_alarm;

translate(480,250);
rotate(-90);
background(95);


let arlm = 0;
//alarm function
if(seconds_until_alarm > 0){
    arlm = millis;
}




//clockface
//outer
noStroke();  
fill(0);
ellipse(0,0,320,320);

stroke(0);
strokeWeight(2);
 noFill();
 ellipse(0,0,295,295);


//midddle
stroke(0);
strokeWeight(1);

fill(161,126,6);
ellipse(0,0,75,75);
fill(20,32,94);
ellipse(0,0,50,50);


//pattern
noFill();
stroke(192,192,192);
strokeWeight(0.5);
push();
rotate(0 + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(15 + arlm);
ellipse(54,0,180,90);
pop(); 

push();
rotate(30  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(45  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(60  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(75  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(90  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(105  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(120  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(135  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(150  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(165  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(180  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(195  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(210  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(225  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(240  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(255  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(270  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(285  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(300  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(315  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(330  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(345  + arlm);
ellipse(54,0,180,90);
pop();

push();
rotate(360  + arlm);
ellipse(54,0,180,90);
pop();
//endOfClockFace 

//main shape
//seconds
push();
 stroke(188,198,204);
 strokeWeight(6);
 noFill();
 let end = map(seconds,0,59,0,360);
 arc(0,0,310,310,0,end);
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
 
pop();
stroke(212,175,55);
strokeWeight(2);
noFill();
ellipse(0,0,295,295);

//hours
push();
 stroke(0, 188, 222);
 strokeWeight(8);
 noFill();
 let end3 = map(hours,0,23,-90,720);
 arc(0,0,260,260,0,end3);
 
pop();
stroke(0,0,138);
strokeWeight(2);
noFill();
ellipse(0,0,260,260);



//second circle
push();
rotate(0+end3*3600);
stroke(212,175,55);
strokeWeight(4);
ellipse(00,-55,140,140);


pop();

//hands
//sec
push();
rotate(end);
stroke(255);
strokeWeight(1)
line(0,0,155,0);
pop();

//min
push();
rotate(end2);
stroke(212,175,55);
strokeWeight(1.5);
line(0,0,150,0);
pop();

//hour
push();
rotate(end3);
stroke(0,0,138);
strokeWeight(1.75)
line(0,0,130,0);
pop();


//midpoint
stroke(192,192,192);
strokeWeight(3);
point(0,0,10,10)


}
