let sourceImg=null;
let maskImg=null;
let renderCounter=0;

//Rapeseed Field

// let sourceFile = "Raps.jpg";
// let maskFile   = "RapsMask1.png";
// let maskFile2  = "RapsMask2.png";
// let maskFile3  = "RapsMask3.png";
// let outputFile = "Raps_artwork1.png";

//Naturschutzgebiet sign

// let sourceFile = "Burgenland.jpg";
// let maskFile   = "BurgenlandMask.png";
// let outputFile = "artwork_2.png";

//RadlWeg

let sourceFile = "RadlWeg.jpg";
let maskFile   = "RadlWegMask1.png";
let maskFile2  = "RadlWegMask2.png";
let maskFile3  = "RadlWegMask3.png";
let maskFile4  = "RadlWegMask4.png";
let maskFile5  = "RadlWegMask5.png";
let outputFile = "artwork_3.png";

function preload() {

  //Rapeseed Field 
  // sourceImg = loadImage(sourceFile);
  // maskImg = loadImage(maskFile);
  // maskImg2 = loadImage(maskFile2);
  // maskImg3 = loadImage(maskFile3);

  //naturschutzgebiet sign
  // sourceImg = loadImage(sourceFile);
  // maskImg = loadImage(maskFile);

  //RadlWeg
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  maskImg2 = loadImage(maskFile2);
  maskImg3 = loadImage(maskFile3);
  maskImg4 = loadImage(maskFile4);
  maskImg5 = loadImage(maskFile5);

}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);

  //rapeseed field
  // sourceImg.loadPixels();
  // maskImg.loadPixels();
  // maskImg2.loadPixels();
  // maskImg3.loadPixels();

  //naturschutzgebiet sign
  // sourceImg.loadPixels();
  // maskImg.loadPixels();

  //radlweg
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImg2.loadPixels();
  maskImg3.loadPixels();
  maskImg4.loadPixels();
  maskImg5.loadPixels();

}

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg2.get(x,y);
    let mask3 = maskImg3.get(x,y);
    let mask4 = maskImg4.get(x,y);
    let mask5 = maskImg5.get(x,y);
    let pointSize = 20;
    let halfSize = 50;
    fill(pix);
    if(mask[0] > 128) {
      noStroke();
      rect(x,y,20,20);
    } 
    else if(mask2[0] > 128){
      //ellipse(x, y, pointSize, pointSize);
      stroke(200);
      //triangle(x,y,x+pointSize,y+pointSize,x+pointSize,y);
      triangle(x,y,x-pointSize,y+pointSize,x+pointSize,y+pointSize); 
    } 
    else if(mask3[0] > 128){
      //stroke(100,100,0);
      stroke(0);
      triangle(x, y, x, y+pointSize,x+pointSize,y+pointSize);
      triangle(x+6, y+3, x+6, y+pointSize,x+pointSize,y+pointSize);

    } 
    else if(mask4[0] > 128){
      stroke(0);
      //ellipse(x, y, pointSize, pointSize);
      //noStroke();
      triangle(x,y,x+pointSize,y+pointSize,x+pointSize,y);
      triangle(x+pointSize,y,x+pointSize,y+pointSize,x+pointSize+pointSize,y); 
    } 
    else if(mask5[0] > 128){
      //stroke(100,100,0);
      stroke(200);
      //triangle(x, y, x, y+pointSize,x+pointSize,y+pointSize);
      //triangle(x,y+pointSize,x+pointSize,y,x+pointSize,y+pointSize);
      beginShape();
      vertex(x,y);
      vertex(x+15,y-15);
      vertex(x+30,y);
      vertex(x+15,y+15);
      vertex(x,y);
      endShape();
    }
    else {
      noStroke();
      //rect(x, y, pointSize, pointSize);  
      // triangle(x,y,x+pointSize,y-pointSize,x+pointSize,y);
      // triangle(x+pointSize,y,x+pointSize,y-pointSize,x+pointSize+pointSize,y); 
      ellipse(x, y, pointSize, pointSize);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
