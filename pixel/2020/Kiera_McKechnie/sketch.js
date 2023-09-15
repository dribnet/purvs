let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";

//before code is up n running, process of showing the image
function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  let x = floor(random(sourceImg.width));
  let y = floor(random(sourceImg.height));
  let pix = sourceImg.get(x, y);
  //background(157, 145, 79); //natural green for input 2
  //background(175, 105, 95); //pinky red for input 3
  background(75, 89, 245); //blue for input 1
  angleMode(DEGREES);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw() {
  for (let i = 0; i < 4000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    console.log(mask[0]);

    //This code effects the girl in the image

    if (mask[0] > 228) { //228
      let pointSize = 25; //25 FOR INPUT 1 & 2, 15 for INPUT 3
      let pixMod = sourceImg.get(x, y);
      pixMod[2] = 200; //input 1
      //pixMod[1] = 200; //input 2
      //pixMod[3] = 200; //input 3
      fill(pixMod); //input 2 / 1
      heart(x, y, 10); //10 for input 1 & 2, 15 for input 3

    } else { //The little cream sparkles in the background

      let pointSize = 2;
      let pixMod = sourceImg.get(x, y);
      if (pix[1] > pix[0]) {
        noStroke();
        fill(254, 255, 195);
        ellipse(x, y, pointSize, pointSize);

      } else { // The rects that make up the background

        push();
        rotate(5); //5 input 1 // 6 input 2 //180 input 3
        //pixMod[0] = 200; //input 3
        fill(pix);
        rect(x, y, x / 4, y / 50); // x/4 y/50 input 1, x/24 y/77 input 2
        pop();
        //pixMod[1] = 200; //input 2
        //pixMod[0] = 200; //input 3
        //fill(pixMod); //INPUT 3
        //rect(x, y, x / 4, y / 67); //input 3
        //heart(x, y, 10); //10 for inputs 1, 20 for input 2
      }
    }

    //The hearts plotted around the image
    
    console.log(mask[0]);
    if (mask[0] == 58) {
      fill(222, 178, 193); //input 1
      //fill(200, 176, 141); //input 3
      //fill(255, 153, 0);
      heart(x, y, 25); //input 1 20

    } else {

      if (mask[0] == 102) { //Only used in input 1 & 2
        let pixMod = sourceImg.get(x, y); //input 2
        fill(pix); //input 1 & 3
        push();
        //pixMod[1] = 200; //input 2
        //heart(x, y, 10); //input 3
        //fill(pixMod);
        //fill(204, 204, 102); //input 2
        //rect(x, y, x / 54, y / 60); //input 2
        rect(x, y, x / 35, y / 5); //input 1
        pop();

      } else { //The rects that swirl around the image

        if (mask[0] == 153) { //153 for input 1 & 2, 103 for input 3
          fill(pix); //input 3
          //fill(204, 204, 102); //input 2
          fill(222, 178, 193, 127); //input 1
          //heart(x, y, 26); //26 for input 2/3
          //rect(x, y, 20, 5); //input 1/3 20, 5 //input 2 x / 20, y / 80
        }
      }
    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    //uncomment this to save the result
    //saveArtworkImage(outputFile);
  }

  function heart(x, y, size) {
    push();
    strokeWeight(3);
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 1, y - size / 1, x - size, y + size / 4, x, y + size); //2,2,3
    bezierVertex(x + size, y + size / 4, x + size / 1, y - size / 1, x, y); //3,2,2
    endShape(CLOSE);
    pop();

  }

  function keyTyped() {
    if (key == '!') {
      saveBlocksImages();
    }
  }

}
