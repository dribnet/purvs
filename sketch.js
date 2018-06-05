/* Set to true to make final high-resolution version */
const finalVersion = true;

/* Default versions of variables */
let pointSize = 40;
let bigPoint = 65;


/* Override some variables with high-resolution final version */
if (finalVersion) {
    pointSize = 20;
}


let halfPoint = pointSize/2


//the length of the "brushstroke" in the background
const brushLength = 10;

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let numPoints = 15;
let points = [];
let xStart;
let xNoise;
let yNoise;

function preload() {
    sourceImg = loadImage("input_1.jpg");
    maskImg = loadImage("mask_1.png");
}

function setup () {
    ellipseMode(CORNER);
//console.log("starting");
smooth();
let main_canvas = createCanvas(1080, 1920);
main_canvas.parent('canvasContainer');

imageMode(CENTER);
noStroke();
background(255);
sourceImg.loadPixels();
maskImg.loadPixels();


}

function draw () {


    for(let i=0;i<1080/pointSize;i++) {
     let x = int(i * pointSize);
     let y = int(renderCounter * pointSize);
        // let x = floor(random(sourceImg.width));
        // let y = floor(random(sourceImg.height));
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        let halfSize = pointSize/2;
        //fill(pix);
        

        if(mask[0] > 128) {


            stroke(pix);
            strokeWeight(1);
            var offset = 0.0;

            //how many lines cross the cirlces
            var chordNum = 50;

            for (k = 1; k <= chordNum; k++) {

                //create two andom numbers (actual random, not noise random)
                rand1 = random(1);
                rand2 = random(1);

                //map these numbers to a location on the circles perimeter
                var angle1 = map(rand1, 0, 1, 0, 2*PI);

                var xpos1 = x + halfPoint + (halfPoint * cos(angle1));
                var ypos1 = y + halfPoint + (halfPoint * sin(angle1));

                var angle2 = map(rand2, 0, 1, 0, 2*PI);

                var xpos2 = x + halfPoint + (halfPoint * cos(angle2));
                var ypos2 = y + halfPoint + (halfPoint * sin(angle2));
                //draw a line between the two coords
                line(xpos1, ypos1, xpos2, ypos2);
            }

	/*stroke(pix);
	var r = pix[0];
	var g = pix[1];
	var b = pix[2];
	var a = pix[3];
	var fillcol;
    strokeWeight(2.5);
	noFill();
    stroke(pix);
	ellipse(x, y, pointSize, pointSize); 
	fillcol = color(r+10,g+10,b+10,a);
	stroke(fillcol);
	ellipse(x+pointSize*0.1, y+pointSize*0.1, pointSize*0.8, pointSize*0.8); 
	fillcol = color(r+20,g+20,b+20,a);
	stroke(fillcol);
	ellipse(x+pointSize*0.2, y+pointSize*0.2, pointSize*0.6, pointSize*0.6); 
	fillcol = color(r+30,g+30,b+30,a);
	stroke(fillcol);
	ellipse(x+pointSize*0.3, y+pointSize*0.3, pointSize*0.4, pointSize*0.4); 
    fillcol = color(r+40,g+40,b+40,a);
    stroke(fillcol);
    ellipse(x+pointSize*0.4, y+pointSize*0.4, pointSize*0.2, pointSize*0.2); */

}
else {
	//noStroke();
	//rect(x, y, pointSize, pointSize); 

    var xstart = random(10),
    xnoise = xstart,
    ynoise = random(10);

    for (var yPos = 0; yPos <= pointSize; yPos+=5) {
        ynoise += 0.1;
        xnoise  = xstart;
        for (var xPos = 0; xPos <= pointSize; xPos+=5) {
            //console.log("x" + xPos);
            xnoise += 0.1;
            drawPoint(x+xPos+10, y+yPos, noise(xnoise, ynoise), pix);
        }
    }




	//stroke(pix);
	//strokeWeight(0.2);
	//var m = numPoints;
	//var n = numPoints;
	//for (k = 0; k < numPoints; k++) {
	//	n--
	//	for (j = 0; j < numPoints; j++) {
	//		n--
	//		line(x+ noise(k)*bigPoint - 10, y + noise(j)*bigPoint - 10, x + noise(n)*bigPoint - 10, y + noise(m)*bigPoint - 10 );
	//	}
	//}



}
}


renderCounter = renderCounter + 1;
if(renderCounter > 1920/pointSize) {
    console.log("Done!")
    noLoop();
// saveBlocksImages();
}
}

function keyTyped() {
    if (key == '!') {
     saveBlocksImages();
 }
}

function drawPoint(x, y, noiseFactor, col) {
    push();
    translate(x, y);
    rotate(noiseFactor * radians(360));
    strokeWeight(2);
    stroke(col);
    line(10, 0, 0, 0);
    pop();
}









