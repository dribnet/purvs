let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_3.png";

function preload() { // what happens before we kick off
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () { // do not change canvas! - can edit stroke, back colour etc
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  // drawTwo(10, 10);

  drawTwo(30, 30, 0); // background
  drawTwo(10, 10, 1); // midground
  drawTwo(10, 10, 2); // foreground


  // for(let i=0;i<20;i++) {
  //   let x2 = floor(random(sourceImg.width));
  //   let y2 = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x2, y2);
  //   let mask = maskImg.get(x2, y2);
  //   fill(pix);
  //   stroke(pix);
  //
  //   let pointSize = 50;
  //   let dice = random(1,6);
  //   line(x, y, x+pointSize, y);
  //   }

    //drawThing(x, y, 10)



  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function drawTwo(tileWidth, tileHeight, type){
  for(var x = 0; x < sourceImg.width; x = x+ tileWidth){
    for(var y = 0; y < sourceImg.height; y = y+ tileHeight){
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix[0],pix[1],pix[2]);
      if (mask[0] < 128 && type == 2){  // front layer for people
        //rect(x,y, tileWidth, tileHeight);
        noStroke();
        for (var i = 0; i < 10; i++){
          ellipse(x,y,tileWidth/1.5, tileHeight/1.5);
          x = x + random(-5, 5);
          y = y + random(-5, 5);
        }

      }else if (mask[0] > 128 && type == 0){    // background layer for back
        fill(pix);
        stroke(pix);
        strokeWeight(1);
        let yRandom = random(0,tileHeight)
        let xRandom = random(0,tileWidth)
        line(x-(xRandom), y+yRandom, (x + tileWidth*0.8)+(xRandom), y+yRandom);
        //ellipse(x,y,tileWidth, tileHeight);
      }else if (mask[0] > 50 && mask[0] < 180 && type == 1) { //change over layer
        //rect(x,y, tileWidth, tileHeight);
        //
        // fill(pix);
        // stroke(pix);
        // strokeWeight(1);
        // let yRandom = random(0,tileHeight)
        // let xRandom = random(0,tileWidth)
        //
        push();
        translate(x,y);
        for (var t = 0; t < 10; t++){
          stroke(255);
          strokeWeight(1);

          line(0, 0, tileWidth+0, tileHeight+0);
          rotate(360/t);
        }
        pop();

      }
    }
  }
}

function drawThing(x, y, size){
  push();
  translate(x,y);
  line(size, 0, -size, 0);
  // for(var i = 0; i < 10; i++){
  //   line(size, 0, -size, 0);
  //   rotate(360/i);
  // }
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
