let sourceImg = null; // Sets Image Variable for use later.
let maskImg = null; // Sets Mask Image Variable for use later.
let lap = 0; // Sets Lap variable for use in Background. Copies the Layers downward.
let renderCounter = 0; // Variable used to stop the render at the end and control which line of the Masked Layer is Rendered.
let grow = 1;
let shrink = 1;

function preload() {
  sourceImg = loadImage("input_3.jpg"); // Loads Image, using variable above.
  maskImg = loadImage("mask_3.png"); // Loads Mask Image, using variable above.
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(80);
  sourceImg.loadPixels();
  maskImg.loadPixels();

  let pointSize = 20;
  let halfSize = 10;

//   // Code for Background.
//   if (back == 0){
//     for(let xl = 0; xl <= 54; xl++) {
//       let x = xl*pointSize*3;
//       let y = 0;

//       let pix = sourceImg.get(x, y);
//       let mask = maskImg.get(x, y);
//       fill(pix);

//       x = x + 5;
//       y = y - 5;

//       for (let v1 = 0; v1 < 33; v1++) {
//         rect(x, y+lap, pointSize, pointSize*2);
//         lap = lap + 60;
//       }
//       lap = 0;
//       for (let v2 = 0; v2 < 33; v2++) {
//         rect(x+30, y+lap-30, pointSize, pointSize*2);
//         lap = lap + 60;
//       }  
//       lap = 0;
//     }

//     for(let yl = 0; yl <= 54; yl++) {
//       let x = 0;
//       let y = yl*pointSize*3;

//       let pix = sourceImg.get(x, y);
//       let mask = maskImg.get(x, y);
//       fill(pix);

//       x = x + 5;
//       y = y - 5;

//       for (let h1 = 0; h1 < 33; h1++) {
//         rect(x+lap-40, y+10, pointSize*2, pointSize);
//         lap = lap + 60;
//       }
//       lap = 0;
//       for (let h2 = 0; h2 < 33; h2++) {
//         rect(x+lap-10, y+40, pointSize*2, pointSize);
//         lap = lap + 60;
//       }
//       lap = 0;
//     }
//   } 
//   else { // Do Nothing.
//   }
}

function draw () {
  translate (0, 92);
  for(let xl = 0; xl < 410; xl++) {
    let x = xl*4*(grow/1.5);
    let y = renderCounter*4*(shrink/1.5);
    let pointSize = 4*grow;
    let halfSize = 4*grow;

    let pix = sourceImg.get(x+5, y+92);
    let mask = maskImg.get(x+5, y+92);
    fill(pix);

    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);
    }
    else {
    }
  }
   grow = grow * 1.007;
   shrink = shrink *1.0035;

  renderCounter = renderCounter + 1;
  if(renderCounter > 268) {
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
