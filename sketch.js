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

const tile_width = 10;
const tile_height = 10;
const tile_step_x = 10;
const tile_step_y = 10;


function draw_some_lines(x,y) {
  for(let i=0; i<100; i=i+1) {
    let dx1 = random(-15,15);
    let dy1 = random(-15,15);
    let dx2 = random(-15,15);
    let dy2 = random(-15,15);
    let coin_flip = random([0,1]);
    line(x+dx1, y+dy1, x+dx2, y+dy2);
  }
}

function draw_special_ellipse(x,y,width,height) {
  push();
  translate(x,y);

  strokeWeight(10);
  ellipse(0,0,width,height);

  strokeWeight(5);
  ellipse(0,-20,width/4,height/4);

  pop();
}


function draw_special_lines(x,y) {
  for(let i=0; i<100; i=i+1) {
    let dx1 = random(-15, 15);
    let dy1 = random(-15, 15);
    let dx2 = random(-15, 15);
    let dy2 = random(-15, 15);
    let coin_flip = random([0, 1]);
    if(coin_flip == 0) {
      // pink line
      stroke(226,119,98);
    }
    else {
      // orange line
      stroke(226,167,98);
    }
    line(x+dx1, y+dy1, x+dx2, y+dy2);
  }
}

function draw_special_lines2(x,y) {
  for(let i=0; i<100; i=i+1) {
    let dx1 = random(-10, 10);
    let dy1 = random(-10, 10);
    let dx2 = random(-10, 10);
    let dy2 = random(-10, 10);
    let coin_flip = random([0, 1]);
    if(coin_flip == 0) {
      // blue line
      stroke(47,105,170);
    }
    else {
      // green line
      stroke(75,151,89);
    }
    line(x+dx1, y+dy1, x+dx2, y+dy2);
  }
}


function draw () {
  background(50);


  for(let y=0; y<height; y = y + tile_step_y) {
    for (let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      if(mask[0]== 0) {
        draw_special_ellipse(x,y, tile_width, tile_height);
      }
      else if(mask[0]==255) {
        //draw_some_lines(x,y);
      }
      else if(mask[0] == 123){
        //draw_special_lines(x,y);
      }
      else if(mask[0] == 71) {
        //draw_special_lines2(x,y);
      }
    }
  }

    for(let y=0; y<height; y = y + tile_step_y) {
    for (let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      if(mask[0]==0) {
        //draw_special_ellipse(x,y, tile_width, tile_height);
      }
      else if(mask[0]==255) {
        draw_some_lines(x,y);
      }
      else if(mask[0] == 123){
        //draw_special_lines(x,y);
      }
      else if(mask[0] == 71) {
        //draw_special_lines2(x,y);
      }
    }
  }

    for(let y=0; y<height; y = y + tile_step_y) {
    for (let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      if(mask[0]==0) {
        //draw_special_ellipse(x,y, tile_width, tile_height);
      }
      else if(mask[0]==255) {
        //draw_some_lines(x,y);
      }
      else if(mask[0] == 123){
        draw_special_lines(x,y);
      }
      else if(mask[0] == 71) {
        //draw_special_lines2(x,y);
      }
    }
  }

    for(let y=0; y<height; y = y + tile_step_y) {
    for (let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      if(mask[0]==0) {
        //draw_special_ellipse(x,y, tile_width, tile_height);
      }
      else if(mask[0]==255) {
        //draw_some_lines(x,y);
      }
      else if(mask[0] == 123){
        //draw_special_lines(x,y);
      }
      else if(mask[0] == 71) {
        draw_special_lines2(x,y);
      }
    }
  }

  // tom code
  renderCounter = renderCounter + 1;
  if(renderCounter > 1) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}  // end of draw

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
