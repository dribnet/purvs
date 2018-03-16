function setup() {

createCanvas(960,500);
angleMode(DEGREES);
smooth();
filter( BLUR, 100);
}

function draw() {

translate(960/2,250);
rotate(-90);

//background gradient *PLACEHOLDER COLOR*
background(114, 136, 224);

//setting up the variables
let hr = hour();
let mn = minute();
let sc = second();
let ml = millis();

        //drawing the minute arc
            strokeWeight (3);
            stroke(255);
            noFill();
            let end = map(mn, 0, 60, 0, 360);
            arc(0, 0, 300, 300,0,end);
         
         //drawing the minute arc's GLOW
         filter(BLUR, 2);
            strokeWeight (1);
            stroke(255);
            noFill();
            let end1 = map(mn, 0, 60, 0, 360);
            arc(0, 0, 300, 300,0,end1);
        
        //drawing the seconds ellipse
       fill(255);
        let end2 = map(sc, 0, 5, 0, 10);
        ellipse(0,0,end2,end2, 0);

}
