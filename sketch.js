let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

let colourThresh = 100;

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

function draw () {
//35 by 62


  for(let i=0;i<30;i++) {
    for(let j=0; j< 60; j++){
    let x = i*(sourceImg.width/30);
    let y = j*(sourceImg.height/60);    
    let mask = maskImg.get(x, y);
    let pointSize = 11;
    let halfSize = 50;
   // fill(pix);    
   let savedPix = color(0, 0, 0);
    if(j % 2 == 0){ //if even X line
      let pix = sourceImg.get(x+pointSize, y+pointSize);
     
     if((red(pix) > red(savedPix)-colourThresh && red(pix) < red(savedPix)+colourThresh)
          && (green(pix) > green(savedPix)-colourThresh && green(pix) < green(savedPix)+colourThresh)
          && (blue(pix) > blue(savedPix)-colourThresh && blue(pix) < blue(savedPix)+colourThresh)
          ){
           noStroke();
        }
         else {
          stroke(0);
         }
         savedPix = pix;
         fill(pix);

      triangle(x+pointSize, y, x, y+(2*pointSize), x+(2*pointSize), y+(2*pointSize));
    } else {
      let pix = sourceImg.get(x+(2*pointSize), y+pointSize);
      if((red(pix) > red(savedPix)-colourThresh && red(pix) < red(savedPix)+colourThresh)
          && (green(pix) > green(savedPix)-colourThresh && green(pix) < green(savedPix)+colourThresh)
          && (blue(pix) > blue(savedPix)-colourThresh && blue(pix) < blue(savedPix)+colourThresh)
          ){
           noStroke();
        }
         else {
          stroke(0);
         }
         savedPix = pix;
        fill(pix);
      triangle(x+(2*pointSize), y, x+(pointSize), y+(2*pointSize), x+(3*pointSize), y+(2*pointSize));
    }
  }
  }
  for(let i=0;i<30;i++) {
    for(let j=0; j< 60; j++){
      let x = i*(sourceImg.width/30);
      let y = j*(sourceImg.height/60);    
      let mask = maskImg.get(x, y);
      let pointSize =11;
      let halfSize = 50;

      let savedPix = color(0, 0, 0);
     // fill(pix);    
      if(j % 2 == 0){ //if even X line

        
        let pix = sourceImg.get(x+(2*pointSize), y+pointSize);
        if((red(pix) > red(savedPix)-colourThresh && red(pix) < red(savedPix)+colourThresh)
          && (green(pix) > green(savedPix)-colourThresh && green(pix) < green(savedPix)+colourThresh)
          && (blue(pix) > blue(savedPix)-colourThresh && blue(pix) < blue(savedPix)+colourThresh)
          ){
           noStroke();
        }
         else {
          stroke(0);
         }
         savedPix = pix;
        fill(pix);
        triangle(x+(2*pointSize), y+(2*pointSize), x+(pointSize), y, x+(3*pointSize), y);
      } else {   
        
        let pix = sourceImg.get(x+pointSize, y+pointSize);
        if((red(pix) > red(savedPix)-colourThresh && red(pix) < red(savedPix)+colourThresh)
          && (green(pix) > green(savedPix)-colourThresh && green(pix) < green(savedPix)+colourThresh)
          && (blue(pix) > blue(savedPix)-colourThresh && blue(pix) < blue(savedPix)+colourThresh)
          ){
           noStroke();
        }
         else {
          stroke(0);
         }
         savedPix = pix;
        fill(pix);
        triangle(x+pointSize, y+(2*pointSize), x, y, x+(2*pointSize), y);
      }
  }
  }

  /*
  for(let i=0;i<2000;i++) {


    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 20;
    let halfSize = 50;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      rect(x, y, pointSize/2, pointSize/2);    
    }
  }
  */
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
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
