let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile = "mask_2.png";
let outputFile = "output_2.png";

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
  background(157, 145, 79); //natural green
  //background(175, 105, 95); //pinky red for INPUT 3
  //background(75, 89, 245); //blue for INPUT 1
  //background(187, 122, 212); //purple for INPUT3
  //background(253, 183, 237); // pink for INPUT 2
  angleMode(DEGREES);
  //background(pix);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 8;
const tile_height = 7;
const tile_step_x = 20;
const tile_step_y = 20;
const s = 200;
const tile_width1 = 30;
const tile_height1 = 20;
const tile_width2 = 5;
const tile_height2 = 5;


function draw() {
  for (let i = 0; i < 4000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    console.log(mask[0]);

    //nicola in blue
    if (mask[0] > 228) { //228
      let pointSize = 25; //25 FOR INPUT 1 & 2, 12 for INPUT 3
      let pixMod = sourceImg.get(x, y);
      //pixMod[2] = 200; //INPUT 1
      pixMod[1] = 200; //INPUT 2
      //pixMod[3] = 200; //INPUT 3
      noStroke(); //INPUT 1
      //fill(pix);
      fill(pixMod); //  INPUT 2 / 1
      push();
      //rotate(80);
      pop();
      //rect(x, y, x/60, y/15); //FOR INPUT 3
      //stroke(255);
      //noStroke();
      heart(x, y, 10); //FOR INPUT 1 & 2, 3

    } else {
      let pointSize = 2;
      let pixMod = sourceImg.get(x, y);
      if (pix[1] > pix[0]) { //add 10 for cool effect
        noStroke(); //INPUT 1 & 3
        fill(254, 255, 195); //INPUT 1 & 3
        ellipse(x, y, pointSize, pointSize); //INPUT 1 & 3

      } else {
        //  let pixMod = sourceImg.get(x, y);
        //  pixMod[0] = 200;
        //  fill(pixMod); //TAKE OUT FILL CODE FOR INPUT 1 & 2
        //rect(x, y, x/15, y/30); //INPUT1 & 2
        push();
        rotate(6); //5 INPUT 1 // -5 INPUT 2 //180 INPUT 3
        //stroke(pix);
        //stroke(255);
        noStroke();
        fill(pix);
        rect(x, y, x / 24, y / 77); // x/4 y/50 INPUT 1, x/24 y/77 INPUT 2
        pop();
        pixMod[1] = 200; //INPUT 2
        //stroke(255);//INPUT 1 & 2
        //noStroke(); // INPUT 3
        //pixMod[0] = 200; //INPUT 3
        //fill(pixMod);//INPUT3
        //rect(x, y, x / 4, y / 67); //INPUT 3
        //heart(x, y, 20); //10 for inputs 1 & 2
      }
    }
    console.log(mask[0]);
    if (mask[0] == 102) {
      let pixMod = sourceImg.get(x, y); //INPUT 2
      //fill(255, 153, 0);//INPUT 3
      //fill(231, 169, 190);
      //fill(pix);//INPUT 1 & 3
      push();
      pixMod[1] = 200;
      //heart(x, y, 10); //INPUT 3
      //strokeWeight(2);
      //stroke(222, 178, 193);
      //fill(pixMod);
      fill(204, 204, 102);
      rect(x, y, x / 54, y / 60);
      //rect(x,y,x / 54,y / 54); //INPUT 1 35, 5
      //rect(x,y,25,5);

      pop();
    } else {
      if (mask[0] == 153) {
        //fill(254, 255, 195, 127);
        //fill(0, 204, 0, 63);
        fill(204, 204, 102);
        //fill(222, 178, 193, 127); //INPUT 1
        heart(x, y, 26);
        //rect(x, y, x / 20, y / 80);//INPUT 1 20, 5
      }


    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }


  function drawStar(x, y, size) {
    push();
    strokeWeight(7);
    translate(x, y)
    for (var i = 0; i < 20; i++) { //10
      line(size, 0, -size, 0);
      rotate(360 % i);
    }
    pop();
  }

  function heart(x, y, size) {
    push();
    strokeWeight(3); //3 for input 3
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
