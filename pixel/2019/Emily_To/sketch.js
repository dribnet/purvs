let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "artwork_1.png";

function preload() {
    sourceImg = loadImage(sourceFile);
    maskImg = loadImage(maskFile);
}

function setup() {
    let main_canvas = createCanvas(704, 1252);
    main_canvas.parent('canvasContainer');
    imageMode(CENTER);
    noStroke();
    sourceImg.loadPixels();
    maskImg.loadPixels();
    if (sourceFile == "input_1.jpg") { // if the source file is image 1 make background dark blue
        background(40, 0, 40);
    }
    if (sourceFile == "input_2.jpg") { // if the source file is image 2 make background dark pink
        background(40, 0, 40);
    }
    else {  // otherwise make background dark orange
        background(0, 40, 60);
    }
}

function draw() {
    let tileSize = 15; // Sets mosaic tile size
    for (let y = 0; y < height; y = y + tileSize) { // Determines placement of tiles on x and y axis
        for (let x = 0; x < width; x = x + tileSize) {
            let pix = sourceImg.get(x, y);
            let mask = maskImg.get(x, y);

            /* UNMASKED AREAS */
            if (mask[0] > 128) {
                noFill();
                stroke(pix);
                strokeWeight(1);
                hollowSquareSize = random(4, 12); // Sets hollow square size to a random size between 4 and 12 pixels
                let offset_x = random(-8, 8); // Sets a random offset amount for between -8 and 8 pixels
                let offset_y = random(-8, 8);
                rect(x + offset_x, y + offset_y, hollowSquareSize, hollowSquareSize); // Draws hollow squares with randomised offset amount in unmasked areas
            }

            /* MASKED AREAS */
            else {
                fill(pix);
                noStroke();
                rect(x, y, tileSize * 0.8, tileSize * 0.8, 5); // Draws gridded tiles in masked areas
            }
        }
    }

    renderCounter = renderCounter + 1;
    if (renderCounter > 18) {
        console.log("Done!")
        noLoop();
        // uncomment this to save the result
        saveArtworkImage(outputFile);
    }
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    }
}