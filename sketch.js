let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//TILE CONSTANTS ----------------------------------------------------
const tile_width = 20;
const tile_height = 8;

const tile_step_x = 9;
const tile_step_y = 9;

//DRAW FUNCTION -----------------------------------------------------

function draw () {
  //TILE FUNCTION 
  for (let y=0; y<height; y= y + tile_step_y) {
    for (let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      fill(pix)

      //WHITE MASK
      if(mask[0] > 128){
      rect(x, y, tile_width, tile_height);
     } 
     //BLACK MASK
     else {
      ellipse (x, y, 20, 50);
     }
    }
  }

//DRAWS IMAGE 10 TIMES
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function keyTyped () {
  if (key == '!') {
    saveBlocksImages();
  }
}

// function drawGlyph () {
//     this.draw = function(values, size) {
//   let H = values [0];
//   let S = values [1];
//   let L = values [2];

// angleMode(DEGREES);

// translate(0.5* size, 0.5* size);

// let offset = size/2;

// //SEGMENT SIZE -------------------------------------------------------

// //map hue to the 2 bottom segment sizes
// //if statement that makes the highest and lowest range look the same
// if (H <= 180){
//   var hueSegSize = map (H, 0, 360, 0.2, 1.8);
// }

// if (H > 180){
//   var hueSegSize = map (H, 0, 360, 1.8, 0.2);
// }

// //map saturation to the top segment size
// var satSegSize = map (S, 0, 100, 0.2, 1);

// //SCALE ---------------------------------------------------------------

// //map lightness to scale of glyph
// var lightScale = map (L, 0, 100, 0.5, 1);

// //FILL COLOUR ---------------------------------------------------------

// //map hue to 2 segment fill colours
// //if statement that makes highest and lowest range look the same
// if (H <= 180){
//   var hueFill = map (H, 0, 360, 20, 150);
// }

// if (H > 180){
//   var hueFill = map (H, 0, 360, 150, 20);
// }

// //map saturation to 1 segment fill colour
// var satFill = map (S, 0 ,100, 20, 90);

// //STROKE COLOUR --------------------------------------------------------

// //map hue to 2 segment stroke colours
// if (H <= 180){
//   var hueStroke = map (H, 0, 360, 100, 20);
// }

// if (H > 180){
//   var hueStroke = map (H, 0, 360, 20, 100);
// }

// //map saturation to stroke colour
// var satStroke = map (S, 0 ,100, 90, 20);

// //SEGMENT LOOPS ---------------------------------------------------------

// //for loop that repeats and rotates each segment
// for (var i=0; i<3; i++){

//   //HUE segment
//   if(i==0){
//     push();

//     //determine stroke colour using saturation variable
//     strokeUniform(satStroke);
//     strokeWeight(1);

//     //determine quad fill using saturation variable
//     fillUniform(satFill);

//     //rotate quad 3 times
//     rotate (i*120);

//     //use lightness variable to scale glyph
//     scale(lightScale);

//     //determine quad points using saturation variable
//     drawSegment(satSegSize);

//     //repeat segments to create lines
//     for (var j=0; j<3; j++){
//       drawSegment(satSegSize-i*0.1, size);
//     }
//     pop();
//   }

//   //SATURATION segment
//   if(i==1){
//     push();

//     strokeUniform(hueStroke);
//     strokeWeight(1);

//     fillUniform(hueFill);

//     rotate (i*120);

//     scale(lightScale);

//     drawSegment(hueSegSize);
    
//     for (var j=0; j<3; j++){
//       drawSegment(hueSegSize-i*0.01, size);
//     }
//     pop();
//   }

//   //LIGHTNESS segment
//   if(i==2){
//     push();

//     strokeUniform(hueStroke);
//     strokeWeight(1);

//     fillUniform(hueFill);

//     rotate (i*120);

//     scale(lightScale);

//     drawSegment(hueSegSize);

//     for (var j=0; j<3; j++){
//       drawSegment(hueSegSize-i*0.005, size);
//     }
//     pop();
//   }
// }

// //OUTER ELLIPSES ------------------------------------------------------------------------
// //determine ellipse size
// let cur_radius1 = size / 2;
// let cur_radius2 = size / 2.5;

// //visual info for ellipses
// fillUniform(50);
// noStroke();

// //draws ellipses 3 times around circle
// for (var i=0; i<3; i++){
//   let angle = 360*i/3;
//   let pos1_x = cur_radius1 * sin(angle)
//   let pos1_y = cur_radius1 * cos(angle)
//   ellipse(pos1_x, pos1_y, size/60);
//   let pos2_x = cur_radius2 * sin(angle)
//   let pos2_y = cur_radius2 * cos(angle)
//   ellipse(pos2_x, pos2_y, size/30);
// }

// //FUNCTIONS ------------------------------------------------------------------------------

// //segment function
// function drawSegment(scaling){
//   //center of canvas
//   var pixel = 0.005*size;
//   scale(scaling);

//   //draws quad
//   quad (pixel*0,pixel*0, pixel*-85,pixel*-49.2, pixel*0, pixel*-100, pixel*85,pixel*-49.2);
// }
//   }

// }

// //circle functions
// function onSphere(radius, angle){
//   return [sin(angle)*radius, cos(angle)*radius]
// }

// //outer ellipse functions
// function drawEllipse(ellipseScale, ellipseXpos, ellipseYpos, size){
//   //center of canvas
//   var placement = 0.005*size;
//   //draw ellipse
//   ellipse (placement*ellipseXpos, placement*ellipseYpos, ellipseScale, ellipseScale);
// }

// }