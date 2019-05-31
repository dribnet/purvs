let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "artwork_3.png";

function preload() {
    sourceImg = loadImage(sourceFile);
    maskImg = loadImage(maskFile);
}

function setup() {
    let main_canvas = createCanvas(704, 1252);
    main_canvas.parent('canvasContainer');

    imageMode(CENTER);
    noStroke();
    background(150);
    sourceImg.loadPixels();
    maskImg.loadPixels();
}

let elementSpacing = 50;
let squareSize = 20;
let pointSize = 15;


function draw() {
    // Draws tiles
    for (let i = 0; i < 15000; i++) {
        let x = int(i * pointSize);
        let y = int(renderCounter * pointSize)
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        let halfSize = pointSize / 2;
        fill(pix);

        if (mask[0] > 128) { // Draws hollow squares in unmasked areas
            // let x = random(sourceImg.width);
            // let y = random(sourceImg.height);
            let pix = sourceImg.get(x, y);
            noFill();
            stroke(pix);
            strokeWeight(2);
            squareBase = 1;//map(y, 0, 1080, 35, 2);
            squareSize = squareBase + random(5, 10);
            let jitter_x = random(-2, 2);
            let jitter_y = random(-2, 2);
            rect(x , y , squareSize, squareSize);
        } 
        else { // Draws rounded squares in grid in masked areas
            noStroke();
            let jitter_x = random(-2, 2);
            let jitter_y = random(-2, 2);
            rect(x + jitter_x, y + jitter_y, pointSize * .85, pointSize * .85, 3); 
        }
    }

    renderCounter = renderCounter + 1;
    if (renderCounter > 150) {
        console.log("Done!")
        noLoop();
        // uncomment this to save the result
        //saveArtworkImage(outputFile);
    }
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    }
}
