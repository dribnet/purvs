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

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x,y);
    let mask = maskImg.get(x,y);
}


 //input_1

    const tile_width = 5;
    const tile_height = 5;

 //smoke (white)
    for(let y = 0; y<height; y = y+tile_height){
    for(let x = 0; x<width; x = x+tile_width){
    let pix = sourceImg.get(x,y);
    let mask = maskImg.get(x,y);
    stroke(pix);
    noFill();
    strokeWeight(1.5);
    if(mask[0]>240){
    ellipse(x,y,tile_width*2,tile_height*2);
  }
//background (black)
    else {
    stroke(pix);
    strokeWeight(2);
    noFill();
    rect(x,y,tile_width*0.6,tile_height*0.6);

  }
  }
  }

//input_2
    
   //smoke 
    //const tile_width = 6;
    //const tile_height = 2;

    //for(let y = 0; y<height; y = y+tile_height){
    //for(let x = 0; x<width; x = x+tile_width){
    //let pix = sourceImg.get(x,y);
    //let mask = maskImg.get(x,y);
    //stroke(pix);
    //fill(pix);
    //strokeWeight(2);
    //if(mask[0]>240){
    //rect(x-5,y-10,tile_width*4,tile_height*10);
//}
//}
//}
   //face
    //const tile_width2 = 3.5;
    //const tile_height2 = 3.5;

    //for(let y = 0; y<height; y = y+tile_height2){
    //for(let x = 0; x<width; x = x+tile_width2){
    //let pix = sourceImg.get(x,y);
    //let mask = maskImg.get(x,y);
    //stroke(pix);
    //strokeWeight(2);
    //fill(pix);
    //if(mask[0]>=100 && mask[0]<130){
    //ellipse(x,y,tile_width2*1.5,tile_height2*1.5);
  //}
  //}
  //}
   //background
    //const tile_width3 = 4;
    //const tile_height3 = 5;

    //for(let y = 0; y<height; y = y+tile_height3){
    //for(let x = 0; x<width; x = x+tile_width3){
    //let pix = sourceImg.get(x,y);
    //let mask = maskImg.get(x,y);
    //stroke(pix);
    //noFill();
    //strokeWeight(1.5);
    //if(mask[0]<120){
    //noFill();
    //triangle(x,y,x+(tile_width3*3),y+(tile_height3*2),x-(tile_width3*3),y+(tile_height3*2)); 
    
//}
//}
//}


  //input_3

    // smoke
    //const tile_width1 = 12;
    //const tile_height1 = 8;

    //for(let y = 0; y<height; y = y+tile_height1){
    //for(let x = 0; x<width; x = x+tile_width1){
    //let pix = sourceImg.get(x,y);
    //let mask = maskImg.get(x,y);
    //fill(pix);
    //noStroke();
    //if(mask[0] > 220){
    //fill(pix);
    //noStroke();
    //rect(x-10,y-6,tile_width1*2,tile_height1*2.5);
  //}
  //}
  //}

    //background
    //const tile_width2 = 3;
    //const tile_height2 = 3;

    //for(let y = 0; y<height; y = y+tile_height2){
    //for(let x = 0; x<width; x = x+tile_width2){
    //let pix = sourceImg.get(x, y);
    //let mask = maskImg.get(x, y);
    //fill(pix);
    //stroke(pix);
    //if (mask[0]>=198 && mask[0]<207){
    //push();
    //stroke(pix);
    //strokeWeight(2);
    //line(x-1,y+1,x-1,y-1);
    //pop();
//}
//}
//}

    // hair and clothes
    //const tile_width3 = 8;
    //const tile_height3 = 8;

    //for(let y = 0; y<height; y = y+tile_height3){
    //for(let x = 0; x<width; x = x+tile_width3){
   //let pix = sourceImg.get(x, y);
    //let mask = maskImg.get(x, y);
    //stroke(pix);
    //fill(pix);
    //strokeWeight(1.5);
    //if(mask[0]<120){
    //fill(pix);
    //triangle(x,y-(tile_height3/0.5),x+(tile_width3/0.5),y+(tile_height3/0.5),x-(tile_width3/0.5),y+(tile_height3/0.5)); 
    
//}
//}
//}

    //skin
    //const tile_width4 = 5;
    //const tile_height4 = 5;

    //for(let y = 0; y<height; y = y+tile_height4){
    //for(let x = 0; x<width; x = x+tile_width4){
    //let pix = sourceImg.get (x, y);
    //let mask = maskImg.get (x, y);
    //stroke(pix);
    //fill(pix);
    //strokeWeight(0.5);
    //if(mask[0]>=130 && mask[0]<145){
    //ellipse(x,y,tile_width4*1.5,tile_height4*1.5);
//}
//}
//}



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
