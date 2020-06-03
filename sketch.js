let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255 );
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  let tilewidth  = 10;
  let tileheight = 10;
  noStroke();
  for(var xtile = 0; xtile < sourceImg.width; xtile= xtile+tilewidth){
    for(var ytile = 0; ytile < sourceImg.height;  ytile= ytile+tileheight){
    let pix = sourceImg.get(xtile, ytile);
    let mask = maskImg.get(xtile, ytile);

    if (mask[0] <128){
      fill (pix);
      rect(xtile,ytile,tilewidth,tileheight);
    } else{
      var pixmod = sourceImg.get(xtile, ytile);
      pixmod[0] = pixmod[0]*6;
      pixmod[1] = pixmod[1]/3;
      pixmod[2] = pixmod[1]/2;
      fill(pixmod);
      rect(xtile,ytile,tilewidth,tileheight);
      var rand = random(1,6);
      if(rand<3){
        fill(255);
        circle (xtile,ytile,5);
      } else{
    }
    }


}
}

  //
  //   if(mask[0] < 128) {
  //
  //   }
  //   else {
  //     for(let i=0;i<2000;i++) {
  //       let x = floor(random(sourceImg.width));
  //       let y = floor(random(sourceImg.height));
  //       let pix = sourceImg.get(x, y);
  //       let mask = maskImg.get(x, y);
  //     stroke(pix);
  //     strokeWeight(5);
  //     line(x,y,x+50,y);
  //   }
  // }



  renderCounter = renderCounter + 1;
  if(renderCounter > 1) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
