let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_2.jpg";
let maskFile = "mask_2.png";
let outputFile = "artwork_2.png";

function preload() {
    sourceImg = loadImage(sourceFile);
    maskImg = loadImage(maskFile);
}

function setup() {
    let main_canvas = createCanvas(704, 1252);
    main_canvas.parent('canvasContainer');

    imageMode(CENTER);
    noStroke();
    background(255);
    sourceImg.loadPixels();
    maskImg.loadPixels();
}

//Draw Star
function star(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    let pix = sourceImg.get(x, y);
    strokeWeight(2);
    stroke(pix);
    line(-10, 10, 10, -10);
    line(10, 10, -10, -10);
    line(0, 10, 0, -10);
    line(-10, 0, 10, 0);
    pop();
}

const tile_width = 10;
const tile_height = 10;
const tile_step_x = 4;
const tile_step_y = 20;

function draw() {
    //Background set to dark grey so details are more visible
    background(10);

    //Pass 1: Draws star/lines where mask is gray
    for (let y = 0; y < height; y = y + tile_step_y) {
        for (let x = 0; x < width; x = x + tile_step_x) {
            let pix = sourceImg.get(x, y);
            let mask = maskImg.get(x, y);
            //When mask is black, nothing happens here.
            if (mask[0] == 0) {
                // rect(x, y, tile_width, tile_height);
            }
            //When mask is white, nothing happens here.
            if (mask[0] == 255) {
                //rect(x, y, tile_width, tile_height);
            }
            //Anything that isn't black or white --> (gray) draws star
            else {
                var roll = int(random(0, 3));
                //Everytime 3 is chosen by random, a star draws in different sizes
                if (roll == 0) {
                    var scale = random(1.0, 0.8);
                    star(x, y, scale)
                }
            }
        }
    }


    //Pass 2: Draws lines where mask is black or white
    for (let y = 0; y < height; y = y + tile_step_y) {
        for (let x = 0; x < width; x = x + tile_step_x) {
            let pix = sourceImg.get(x, y);
            let mask = maskImg.get(x, y);
            //Anywhere where there is black, draws lines with a transparent white colour
            if (mask[0] == 0) {
                fill(255, 255, 255, 120);
                rect(x, y, tile_width, tile_height);
            }
            if (mask[0] == 255) {
                // rect(x, y, tile_width, tile_height);
            }
            //Commented out so that it doesn't draw on top of what's already drawn.
            else {
                // var roll = int(random(0,5));
                // if (roll == 3){
                //   var scale = random(1.0, 0.5);
                //   asterix(x,y,scale)
                // }
            }
        }
    }


    //Pass 2: Where mask is white, a high resolution image is shown
    for (let y = 0; y < height; y = y + 1) {
        for (let x = 0; x < width; x = x + 1) {
            let pix = sourceImg.get(x, y);
            let mask = maskImg.get(x, y);
            if (mask[0] == 255) {
                stroke(pix);
                point(x, y);
            }
        }
    }


    renderCounter = renderCounter + 1;
    if (renderCounter > 10) {
        console.log("Done!")
        noLoop();
        // uncomment this to save the result
        // saveArtworkImage(outputFile);
    }
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    }
}
