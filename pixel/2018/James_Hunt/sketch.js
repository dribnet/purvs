let sourceImg = null; 
let maskImg = null; 
let lap = 0; // Sets Lap variable for use in Background. Copies the Layers downward.
let renderCounter = 0; // Variable used to stop the render at the end and control which line of the Masked Layer is Rendered.
let grow = 1; // Variable to be used to control the size of the circles for the masked layer.
let shrink = 1;// Variable to be used to control the space between circles for the masked layer.

function preload() {
  sourceImg = loadImage("input_1.jpg"); 
  maskImg = loadImage("mask_1.png"); 
}

function setup () {
  // Canvas Set up
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke(); 
  background(80); // Sets the colour behind the weave.
  sourceImg.loadPixels(); 
  maskImg.loadPixels(); 

  let pointSize = 20; // Sets variable to control of Rectangles for Background.

  //Code for Background.

  //This loop makes all the the Verticle Rectangles.
  for(let xl = 0; xl <= 17; xl++) {
    let x1 = xl*pointSize*3; // Formula to locate the position of x1 given the row currently being rendered (xl).
    let x2 = xl*pointSize*3+30; // Formula to locate the position of x2 given the row currently being rendered (xl).
    let y = 0; // y doesn't require a formular as it stays constant for colour picking.

    let pix1 = sourceImg.get(x1, y); // Grabs the colour to be used by the first Column created by the loop below.
    let pix2 = sourceImg.get(x2, y); // Grabs the colour to be used by the second Column created by the loop below.

    x1 = x1 + 5; // Moves the first Column into the right position to be symmetrical.
    x2 = x2 + 5; // Moves the second Column into the right position to be symmetrical.
    y = y - 5; // Moves the y alignment to be symmetrical.

    // Creates the first Column of rectangles using the first specified colour and predefined positioning.
    fill(pix1);
    for (let v1 = 0; v1 < 33; v1++) { // A loop to create the 34 Rectangles in that Column.
      rect(x1, y+lap, pointSize, pointSize*2); // Creates one Rectangle.
      lap = lap + 60; // Adds to the current lap variable so that the next rectangle created is 60 pixels further along than the last.
    }
    lap = 0; // Resets the Lap Variable so it can be used again in the following functions.

    // Creates the second Column of rectangles using the first specified colour and predefined positioning.
    fill(pix2);
    for (let v2 = 0; v2 < 33; v2++) { // A loop to create the 34 Rectangles in that Column.
      rect(x2, y+lap-30, pointSize, pointSize*2); // Creates one Rectangle.
      lap = lap + 60; // Adds to the current lap variable so that the next rectangle created is 60 pixels further along than the last.
    }
    lap = 0; // Resets the Lap Variable so it can be used again in the following functions.
  }

  //This loop makes all the the Horizontal Rectangles.
  for(let yl = 0; yl <= 31; yl++) {
    let y1 = yl*pointSize*3+10; // Formula to locate the position of y1 given the row currently being rendered (yl).
    let y2 = yl*pointSize*3+40; // Formula to locate the position of y2 given the row currently being rendered (yl).
    let x = 0; // x doesn't require a formular as it stays constant for colour picking.

    let pix1 = sourceImg.get(x, y1); // Grabs the colour to be used by the first Row created by the loop below.
    let pix2 = sourceImg.get(x, y2); // Grabs the colour to be used by the second Row created by the loop below.

    y1 = y1 - 5; // Moves the first Row into the right position to be symmetrical.
    y2 = y2 - 5; // Moves the second Row into the right position to be symmetrical.
    x = x - 5; // Moves the x alignment to be symmetrical.

    // Creates the first Row of rectangles using the first specified colour and predefined positioning.
    fill(pix1);
    for (let h1 = 0; h1 < 19; h1++) { // A loop to create the 20 Rectangles in that Row.
      rect(x+lap-30, y1, pointSize*2, pointSize); // Creates one Rectangle.
      lap = lap + 60; // Adds to the current lap variable so that the next rectangle created is 60 pixels further along than the last.
    }
    lap = 0; // Resets the Lap Variable so it can be used again in the following functions.

    // Creates the second Row of rectangles using the first specified colour and predefined positioning.
    fill(pix2);
    for (let h2 = 0; h2 < 19; h2++) { // A loop to create the 20 Rectangles in that Row.
      rect(x+lap, y2, pointSize*2, pointSize); // Creates one Rectangle.
      lap = lap + 60; // Adds to the current lap variable so that the next rectangle created is 60 pixels further along than the last.
    }
    lap = 0; // Resets the Lap Variable so it can be used again in the following functions.
  }
}

function draw () {
  translate (0, 92); // Translates the start of the code to the top of the head at the "tallest subject" image (input_3.jpg, mask_3.png). 
  // This way it starts of very high resolution from the right spots around about.

  // Loop that will create a circle if within the mask on the spot. Math inside loop to grow the circles and the distance between each.
  // This loop will calculate the entire row and place circles appropraitely.
  for(let xl = 0; xl < 410; xl++) {
    let x = xl*4*(grow/1.5); // Math needed to position the circle on the x axis correctly. It also sets x.
    let y = renderCounter*4*(shrink/1.5); // Math needed to position the circle on the y axis correctly. It also sets y.
    let pointSize = 4*grow; // Because I only want grow to increase in small amounts, math is needed to calculate point size as well.

    // Takes the given x and y coordinates and grabs the colour and sets the fill to that colour. Also determines whether it will be used or not
    // Depending on what the mask is.
    let pix = sourceImg.get(x+5, y+92);
    let mask = maskImg.get(x+5, y+92);
    fill(pix);

    if(mask[0] > 128) { // Only draws a circle if the current x, y coordinate is on the mask.
      ellipse(x, y, pointSize, pointSize);
    }
    else {} // Do Nothing.
  }
   grow = grow * 1.007; // Since draw is a looping function this variable adjusts for each row to make the circles slightly bigger.
   shrink = shrink *1.0035; // And this variable adjusts the distance between each circle, and also needs adjusting as they grow, but not as much.

  renderCounter = renderCounter + 1;
  if(renderCounter > 268) { // Set out 268 because that how many layers are visable on the canvas.
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
