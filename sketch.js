    /* Set to true to make final high-resolution version */
    const finalVersion = true;

    /* Default versions of variables */
    let pointSize = 40;

    /* Override some variables with high-resolution final version */
    if (finalVersion) {
        pointSize = 20;
    }

    let halfPoint = pointSize/2


    //the length of the "brushstroke" in the background
    const brushLen = 10;

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
            

            //if it's in the foreground
            if(mask[0] > 128) {

                stroke(pix);
                strokeWeight(1);

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

            }


            //dealing with the background
            else {

        //starting variables for start & noise effector
        var xStart = random(10),
        xNoise = xStart,
        yNoise = random(10);

        //loop up to 80
        for (var yPos = 0; yPos <= pointSize; yPos+=5) {
            yNoise += 0.1;
            //reset xStart each time
            xNoise  = xStart;
            for (var xPos = 0; xPos <= pointSize; xPos+=5) {
                //console.log("x" + xPos);
                xNoise += 0.1;
                //do the drawing!!
                drawStroke(x+xPos+brushLen, y+yPos, noise(xNoise, yNoise), pix);
            }
        }


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


function drawStroke(x, y, noiseVar, col) {
    push();
    //put it in the right place
    translate(x, y);
    //the actual interesting part! :o 
    rotate(noiseVar * radians(360));
    strokeWeight(2);
    stroke(col);
    line(brushLen, 0, 0, 0);
    pop();
}









