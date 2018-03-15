function setup() {

createCanvas(960,500);
angleMode(DEGREES);

}

function draw() {

//background gradient *PLACEHOLDER COLOR*
background(114, 136, 224);

//setting up the variables
let hr = hour();
let mn = minute();
let sc = second();

        //drawing the sc arc
            strokeWeight (3);
            filter ( BLUR, 10); //blur to make it glow
            stroke(255);
            noFill();
            let end = map(sc, 0, 10, 0, 360);
            arc(960/2, 250, 300, 300,0,end);
}
