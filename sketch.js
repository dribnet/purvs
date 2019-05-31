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
    background(0);
    sourceImg.loadPixels();
    maskImg.loadPixels();
}

let elementSpacing = 50;
let squareSize = 20;
let pointSize = 15;


function draw() {
    // Draws tiles
  for(let y=0; y<height; y = y + pointSize) {
    for(let x=0; x<width; x = x + pointSize) {
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        let halfSize = pointSize / 2;
        fill(pix);

        noStroke();
        rect(x, y, pointSize * .8, pointSize * .8, 3); 
    }
  }

    renderCounter = renderCounter + 1;
    if (renderCounter > 15) {
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
