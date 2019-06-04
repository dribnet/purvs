let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

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

//Draw Heart Emoji
function heart(x, y,s){
  push();
  translate(x,y);
  scale(s);
  fill(255,0,0);
  noStroke();
  ellipse(-25.5, -72, 52, 40); //top of heart
  ellipse(25.5, -72, 52, 40); //top of heart
  triangle(-52.5, -65, 4.5, -10, 52.5, -65); //bottom of heart
  pop();
}

//Draw Like Emoji
function thumb(x,y,s){
  push();
  translate(x,y);
  scale(s);
  noStroke();
  fill(255);
  ellipse(-100.5, -72, 80, 50); //hand
  ellipse(-105, -95, 25, 35); //thumb
  fill(0,0,255);
  rect(-150, -100, 20, 60); //wrist
  pop();
}

const tile_width = 4;
const tile_height = 10;
const tile_step_x = 4;
const tile_step_y = 14;

function draw () {
  //Background set to dark grey so tile steps are more visible
  background(20);

  for(let y = 0; y < height; y = y + tile_step_y){
    for(let x = 0; x < width; x = x + tile_step_x){
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      //WHITE PART OF MASK
      if(mask[0] > 128){
        rect(x, y, tile_width, tile_height);
        //Roll random number between 0 and 20
        var roll = int(random(0,20));
        //Every time 3 is rolled, draw heart emoji
        if (roll == 3){
          var scalar = random (0.2, 0.025);
          heart(x, y, scalar);
        }//Otherwise if 12 is rolled, draw thumb emoji
        else if (roll == 12){
          var scalar = random (0.3, 0.05);
          thumb(x,y, scalar);
        }
      }
      else{ //BLACK PART OF MASK
        rect(x, y, tile_step_x, tile_step_y);
      }
    }
  }


  //STARTER CODE:
  // for(let i=0;i<6000;i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let x2 = floor(random(sourceImg.width));
  //   let y2 = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   fill(pix);
  //   noStroke();
  //   if(mask[0] > 128) {
  //     let pointSize = 5;
  //     ellipse(x, y, pointSize, pointSize);
  //     fill(255, 255, 0, 40);
  //     ellipse(x, y, pointSize, pointSize);
  //   }
  //   else {
  //     let pointSize = 12;
  //     let halfSize = 30;
  //     rect(x, y, halfSize, pointSize);
  //   }
  // }




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
