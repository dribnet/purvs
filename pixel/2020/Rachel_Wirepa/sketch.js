let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0); //Background set to black
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//Tile effect setup
let tileWidth = 5; //Width of tiles
let tileHeight = 5; //Height of tiles

//Cross_hatch variables
let x_step = 5; //Variable for spacing lines along the x axis
let y_step = 5; //Variable for spacing lines along the y axis
let point_size = 90; //Variable that creates the size of the cross_hatching

function draw () {

//Cross-hatch effect setup - Loops the random placement of the cross-hatch shapes to fill the background
for(let i = 0; i < 8000; i ++) { //Middle number in for loop affects how fast the cross-hatch effect animates and fills the background. The higher the number, the faster they will fill the screen
  let x_line = floor(random(sourceImg.width)); //Controls lines drawn along the x axis of the photo
  let y_line = floor(random(sourceImg.height)); //Controls lines drawn along the y axis of the photo
  let pix = sourceImg.get(x_line, y_line); //Sources colours from the input images
  let mask = maskImg.get(x_line, y_line); //Sources mask effects from the mask images
  fill(pix);
  stroke(pix);

  if(mask[0] > 200) { //if the background mask area is white
    noStroke();
    fill(0);
    }

  else {
    line(x_line + x_step, y_line, x_line + x_step + point_size, y_line); //Draw horizonal lines at random along x axis
    line(x_line, y_line + y_step, x_line, y_line + y_step + point_size); //Draw vertical lines that intersect with the horizontal lines along the y axis
    }
      }

  //Tiles effect setup
  for (var x = 0; x < sourceImg.width; x = x + x_step) { //Loops tiles across the x axis, within set bounaries
    for (var y = 0; y < sourceImg.height; y = y + y_step) { //Loops tiles down the y axis, within set boundaries
      let pix = sourceImg.get(x, y); //Sources colours from the input images
      let mask = maskImg.get(x, y); //Sources mask effects from the mask images

  if(mask[0] > 128) { //if the background mask area is black
    fill(pix);
    stroke(pix);
    rect(x, y, tileWidth, tileHeight); //Fill specific boundary with square tiles
      }

  else if (mask[0] == 60) { //if the background mask is grey
    fill(255); //Fill with a blank white colour, so that the text is visible against the background
    noStroke();
    ellipse(x, y, tileWidth + 1, tileHeight + 1); // Fill the grey mask areas with ellipse tiles
            }
          }
        }
      }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    //console.log("Done!")
    noLoop();
    //saveArtworkImage(outputFile);
  }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
