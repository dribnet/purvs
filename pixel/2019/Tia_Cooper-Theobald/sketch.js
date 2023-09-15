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

    background(255);
    sourceImg.loadPixels();
    maskImg.loadPixels();
}

function draw() {
    for (let i = 0; i < 16000; i++) {
        let x = floor(random(sourceImg.width));
        let y = floor(random(sourceImg.height));
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
   /*      
  //artwork 1 
    let pointSize = 22;
    let pointSize2 = 3;
    let pointSize3 = 20;
    let pointSize4 = 21;
    let pointSize5 = 5;
    let pointSize6 = 12;
        let pointSize7 = 2;
        let pointSize8 = 4;
   
    let halfSize = 8;
    fill(pix);
    if(mask[0] > 128) {
    stroke(0);
    rect(x+10, y+3.5, pointSize4, pointSize5);
      rect(x, y, pointSize3, pointSize6);
      noStroke();
      rect(x+20, y+4.5, pointSize7, pointSize8);
         }
    else { 
      noStroke();
      rect(x, y, pointSize, pointSize2);    
    }
  } 
  
   // artwork 2
   let pointSize = 8;
    let pointSize2 = 11;
    let pointSize3 = 20;
    let pointSize4 = 21;
    let pointSize5 = 5;
    let pointSize6 = 12;
        let pointSize7 = 2;
        let pointSize8 = 4;
   
    let halfSize = 8;
    fill(pix);
    if(mask[0] > 128) {
    stroke(0);
    rect(x+10, y+3.5, pointSize4, pointSize5);
      rect(x, y, pointSize3, pointSize6);
      noStroke();
      rect(x+20, y+4.5, pointSize7, pointSize8);
         }
    else { 
      noStroke();
      ellipse(x, y, pointSize, pointSize2);    
    }
  }
  */
        //artwork 3
        let pointSize = 15;
        let pointSize2 = 5;
        let pointSize3 = 20;
        let pointSize4 = 21;
        let pointSize5 = 5;
        let pointSize6 = 12;
        let pointSize7 = 2;
        let pointSize8 = 4;

        let halfSize = 8;
        fill(pix);
        if (mask[0] > 128) {
            stroke(0);
            rect(x + 10, y + 3.5, pointSize4, pointSize5);
            rect(x, y, pointSize3, pointSize6);
            noStroke();
            rect(x + 20, y + 4.5, pointSize7, pointSize8);
        } else {
            noStroke();
            rect(x, y, pointSize, pointSize2);
        }
    }
    
    renderCounter = renderCounter + 1;
    if (renderCounter > 10) {
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
