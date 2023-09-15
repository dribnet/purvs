let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile = "mask_2.png";
let outputFile = "output_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  let go = true
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES)
  imageMode(CENTER);
  noStroke();
  background(26, 32, 22); //makes the background green
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
const x_steps = 10 //the distance between each x
const y_steps = 10 //the distance between each y


function draw() {

  for (var x1 = 0; x1 < sourceImg.width; x1 = x1 + x_steps) { // creates the squares with no fill that are all one colour
    for (var y1 = 0; y1 < sourceImg.height; y1 = y1 + y_steps) {
      ;
      let mask = maskImg.get(x1, y1);
      let pix = sourceImg.get(x1, y1);
      if (pix[0] > 90 && pix[0] < 100 && pix[1] > 60 && pix[1] < 100 && pix[2] > 30 && pix[2] < 70) { //range of colour I want to change to blue
        if (mask[0] < 129) { // so the blue doesn't go on the tree in the first input
          let blue = sourceImg.get(x1, y1) //creates a copy of sourceImg.get(x1,y1) called blue
          //creates a certain blue colour
          blue[0] = random(30, 45)
          blue[1] = random(65, 75)
          blue[2] = random(115, 130)
          // creates the blue blotchy see through elipses in the scene, like dabs of water colour
          waterColour(x1, y1, 0, 0, blue[0], blue[1], blue[2], 40)
          push()
          fill(blue)
          // creates two bristles where the blue blotchy colour is
          brushstroke1(x1, y1, 2, random(9, 12), 30, random(5.3, 8.7))
          brushstroke2(x1 + 50, y1 - 50, 2, random(9, 12), 120, random(0.3, 0.7));
          strokeWeight(2)
          pop()
        }
      } else if (pix[0] > 40 && pix[0] < 102 && pix[1] > 30 && pix[1] < 110 && pix[2] > 36 && pix[2] < 100) { //range of colour I want to change to brown
        if (mask[0] > 128 && mask[0] < 130) {
          let brown = sourceImg.get(x1, y1)
          //creates a certain brown colour
          brown[0] = 110
          brown[1] = 90
          brown[2] = 70
          // adds more detail in the trees
          push()
          fill(brown)
          detail(x1, y1, 10, 10)
          pop()
        } else if (pix[0] > 50 && pix[0] < 175 && pix[1] > 68 && pix[1] < 100 && pix[2] > 30 && pix[2] < 70) { //range of colour I want to change to purple
          if (mask[0] < 129) {
            let purple = sourceImg.get(x1, y1)
            //creates a certain purple colour
            purple[0] = random(50, 130)
            purple[1] = random(28, 42)
            purple[2] = random(30, 60)
            // creates the yellow blotchy see through elipses in the scene, like dabs of water colour.
            waterColour(x1, y1, 0, 0, purple[0], purple[1], purple[2], 50)
            // creates two bristles where the purple blotchy colour is two mimic paint spread.
            push()
            fill(purple)
            brushstroke1(x1, y1, 1, random(9,12), 30, random(5.3,8.7))
            brushstroke2(x1+50, y1-50, 1, random(9,12), 120, random(0.3,0.7));
            pop()
          }


        } else if (pix[0] > 100 && pix[0] < 240 && pix[1] > 30 && pix[1] < 205 && pix[2] > 30 && pix[2] < 170) { //range of colour I want to change to yellow
          let yellow = sourceImg.get(x1, y1)
          //creates a certain yellow colour
          yellow[0] = random(173, 240)
          yellow[1] = random(184, 140)
          yellow[2] = random(30, 110)
          // creates the yellow blotchy see through elipses in the scene, like dabs of water colour.
          waterColour(x1, y1, 0, 0, yellow[0], yellow[1], yellow[2], 40)
          // creates two bristles where the yellow blotchy colour is two mimic paint spread.
          push()
          fill(yellow)
          brushstroke1(x1, y1, 1, random(9,12), 30, random(5.3,8.7))
          brushstroke2(x1+50, y1-50, 1, random(9,12), 120, random(0.3,0.7));
          pop()

        }
      }

    }
  }


  for (let b = 0; b < 100; b++) { //
    let x4 = floor(random(sourceImg.width));
    let y4 = floor(random(sourceImg.width));
    let pix4 = sourceImg.get(x4, y4);
    let mask4 = maskImg.get(x4, y4);
    stroke(pix4);
    fill(pix4, 0, 0, 90)
    if (go = true) {
      let go = false
    }


  }

  for (let b = 0; b < 10000; b++) { //creates the 'brush strokes' made from beziers, adds a painterly feel (not on trees)
    let x2 = floor(random(sourceImg.width));
    let y2 = floor(random(sourceImg.width));
    let pix2 = sourceImg.get(x2, y2);
    let mask2 = maskImg.get(x2, y2);
    stroke(pix2);
    fill(pix2)
    if (mask2[0] > 98) {
    } else {
      brushstroke1(x2 + 20, y2 - 50, 1, random(9, 12), 30, random(0.3, 0.7));
      brushstroke2(x2 + 50, y2 - 50, 1, random(9, 12), 120, random(0.3, 0.7));
    }
  }
  //
  for (let c = 0; c < 50000; c++) { // creates all the detail that couldn't be created with the 'brushstrokes'
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.width));
    let mask = maskImg.get(x, y)
    let pix = sourceImg.get(x, y);
    fill(pix)
    noStroke()
    if (mask[0] > 10) {
      detail(x, y, 5, 5)
    }
  }

  for (let a = 0; a < 80000; a++) { //creates more detail on top of only parts that are coloured grey(99) in mask
    let x3 = floor(random(sourceImg.width));
    let y3 = floor(random(sourceImg.width));
    let mask1 = maskImg.get(x3, y3)
    let pix1 = sourceImg.get(x3, y3);
    fill(pix1)
    noStroke()

    if (mask1[0] > 98 && mask1[0] < 100) {
      detail(x3, y3, 5, 5)
    }
  }




  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();

    // saveArtworkImage(outputFile);
  }
}

function detail(x, y, w, h) { // a pixel

  rect(x, y, w, h)
}


function brushstroke1(x, y, nstrokes, brushWidth, rotation, hairThickness) { //a function that is meant to simulate a brush bristle or multiple from beziers
  for (let c = 0; c < brushWidth * nstrokes; c = c + brushWidth) {
    push()
    strokeWeight(hairThickness)
    translate(x, y - 20)
    rotate(rotation)
    scale(1)
    translate(0, c)
    bezier(85, 20, 40, 40, 50, 50, 15, 60);
    pop()
  }
}

function brushstroke2(x, y, nstrokes, brushWidth, rotation, hairThickness) { //same as 1 excpet this function is rotated by 90 degrees in the draw function and is more random in thickness than 1

  for (let c = 0; c < brushWidth * nstrokes; c = c + brushWidth) {
    push()
    strokeWeight(hairThickness)
    translate(x, y - 20)
    rotate(rotation)
    scale(1)
    translate(0, c)
    bezier(85, 20, random(40, 37), 40, random(10, 50), 50, 15, 60);

    pop()
  }
}

function waterColour(x, y, w, h, r, g, b, o) { // creates a spherical 'blob' with opacity and random width and height
  push()
  noStroke()
  fill(r, g, b, o)
  beginShape();
  curveVertex(x + 84 + w, y + 91 + h);
  curveVertex(x + 84 + w, y + 91 + h);
  curveVertex(x + 68 + w, y + 19 - h);
  curveVertex(x + 21 - w, y + 17 - h);
  curveVertex(x + 32 - w, y + 91 + h);
  curveVertex(x + 84 + w, y + 91 + h);
  curveVertex(x + 84 + w, y + 91 + h);
  endShape();
  pop()
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
