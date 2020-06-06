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
  background(171, 187, 209);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  let tilewidth  =6;
  let tileheight = 6;
  let squarew =5;
  let squareh = 5;
  strokeWeight(1.5);
  for(var xtile = 0; xtile < sourceImg.width; xtile= xtile+tilewidth){
    for(var ytile = 0; ytile < sourceImg.height;  ytile= ytile+tileheight){
    let pix = sourceImg.get(xtile, ytile);
    let mask = maskImg.get(xtile, ytile);
    let strokepix = sourceImg.get(xtile, ytile);
    strokepix[0] = strokepix[0]/2;
    //stroke (strokepix);

    if (mask[0] <128){
      if(pix[0]<100 &&pix[1]<90&&pix[2]<90){
        pix[0] = pix[0]*9;
        pix[1] = pix[1]*7;
        pix[2] = pix[2]*10;
        if (pix [0]>=255&&pix[1]>=255&&pix[2]>=255){
          pix[0]= 207;
          pix [1]=  171;
          pix[2]= 209;
        }
      }
      fill (pix);
      rect(xtile,ytile,squarew,squareh);
    } else{
      noStroke();
      var pixmod = sourceImg.get(xtile, ytile);
      pixmod[0] = pixmod[0]*6;
      pixmod[1] = pixmod[1]/3;
      pixmod[2] = pixmod[1]/2;
      fill(pixmod);
      rect(xtile,ytile,tilewidth,tileheight);
      var rand = random(1,6);
      if(rand<2){
        fill(255);
        circle (xtile,ytile,5);
      } else{
    }
    }


}
}




  renderCounter = renderCounter + 1;
  if(renderCounter > 1) {
    console.log("Done!")
    noLoop();
    //uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
