let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_1.png";
let wasteTextFile = "wasteText.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  wasteTextImg = loadImage(wasteTextFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();

}

function draw () {
   for(let i=0;i<500;i++) {


     let x = floor(random(sourceImg.width));
     let y = floor(random(sourceImg.height));
     let pix = sourceImg.get(x, y);
     let mask = maskImg.get(x, y);
     fill (pix);
     stroke(pix);
     fill(pix);

     let pointSize = 2;
     if (mask[0]> 128) {
       stroke (255);
       strokeWeight(.75);
       rect (x, y, pointSize*4, pointSize);

     } else
     stroke (0);
     noStroke ();
     rect (x, y, pointSize*2, pointSize*5);
   }
   //image(wasteTextImg, 1000, 250);
   // textSize (30);
   // fill (0, 0, 0);
   // text ('WASTE EP - GAJUAR',50, 500);

   //console.log (mouseX)
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   fill(pix);
  //   if(mask[0] > 128) {
  //     let pointSize = 10;
  //     ellipse(x, y, pointSize+5, pointSize+5);
  //   }
  //   else {
  //     let pointSize = 30;
  //   rect(x, y, pointSize+20, pointSize-10);
  //   }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1) {
    console.log("Done!")
    noLoop();
    //uncomment this to save the result
    //saveArtworkImage(outputFile);
  }


// function masked (x,y) {
// select random word

// let words = ['GAJUAR', 'WASTE', 'EP', 'OUT' 'NOW'];
// let word = random(words);
//     let pointSize = 10;
//   if (x<596){
//     text(word, 10, 50)
//   }else
//       rect (x, y, pointSize, pointSize*10);
// }




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
