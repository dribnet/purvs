let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "artwork_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();

}

const tile_width = 20;
const tile_height = 20;
const tile_step_x = 20;
const tile_step_y = 20;


function draw_some_lines(x, y) {
  for (let i = 0; i < 10; i = i + 1) {
    let dx = random(-10, 10);
    let dy = random(-10, 10);
    let coin_flip = random([0, 1]);
    if (coin_flip == 0) {
      stroke(0);
    } else {
      stroke(255);

    }
    line(x, y, x + dx, y + dy);
  }
}

function draw() {
  randomSeed(99);
  background(50);
  for (let y = 0; y < height; y = y + tile_step_y) {
    for (let x = 0; x < width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);


      fill(pix);
      stroke(pix);
      if (mask[0] < 85) {
        ellipse(x, y, tile_width, tile_height);
      } else if (mask[0] > 85 && mask[0] < 170) {
        draw_some_lines(x, y);
      }
      //      if(mask[0]>128){
      // rect(x,y, tile_step_x, tile_step_y);
      //      }
      //      else{
      //        rect(x,y, tile_width, tile_height);
    }
  }

  for (let y = 0; y < height; y = y + tile_step_y/10) {
    for (let x = 0; x < width; x = x + tile_step_x/10) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

      if (mask[0] > 170) {
        fill(pix);
        rect(x+random(-10,10), y+random(-10,10),2,2);
      }

    }
  }
}
/*for(let i=0;i<7000;i++) {
    colorMode(RGB);
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 11;
    let halfSize = 50;
    let colour1String = "rgb("+pix[0]+","+ pix[1]+ "," + pix[2] + ")";
    let colour1 = color(colour1String);
    let hue1 = hue(colour1);
    let sat1 = saturation(colour1);
    let bright1 = brightness(colour1);
    fill(pix);
    stroke(pix);
    if(mask[0]<128) {
      

  // var newRed = pix[0] -50;
      // var newGreen = pix[1] -100;
      // var newBlue = pix[2] -200;
      // var alpha = 100;
      // fill(newRed, newGreen, newBlue, alpha)
      colorMode(HSB);
      var newSat = sat1 - 100;
      fill(hue1, newSat, bright1, pix[3]);

     ellipse(x, y, pointSize, pointSize); 
      colorMode(RGB);
      

      
    }

    else {
    
        let pointSize = 2;
      let x2 = floor(random(sourceImg.width));
      let y2 = floor(random(sourceImg.height));
      // rect(x, y, pointSize, pointSize);
      line(x, y, x2, y2); 
        
    }
  }

*/
renderCounter = renderCounter + 1;
if (renderCounter > 10) {
  console.log("Done!")
  noLoop();
  //uncomment this to save the result
  //saveArtworkImage(outputFile);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}