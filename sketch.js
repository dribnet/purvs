let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

let colourThresh = 10;

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

angleMode(DEGREES);
      noFill();
      stroke(0);

      let numSlice = 50;
      let numRings = 50;
      
      for(let j = numRings; j >= 1; j--){ //rings
        for(let i = 0; i < numSlice; i++){ //ring slices
          fill(j*20);

          let H = random(1400/numRings*j,1400/numRings*j+50);
          let testX = width/2 + ( (((H)/2)-1400/numRings/2) * cos((360/numSlice/2)+(i*360/numSlice))); 
          let testY =  height/2 + ((((H)/2)-1400/numRings/2) * sin((360/numSlice/2)+(i*360/numSlice)));

          fill(sourceImg.get(testX, testY));
         let mask = maskImg.get(testX, testY);
         if(mask[0] > 240){
           arc(width/2, height/2, H, H, i*(360/numSlice), (360/numSlice)+(i*(360/numSlice)), PIE);
        }


          //ellipse(testX, testY, 10, 10);

        }
    }

for(let i=0;i<30;i++) {
    for(let j=0; j< 60; j++){

      let x = i*(sourceImg.width/30);
      let y = j*(sourceImg.height/60); 
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      if(mask[0] > 200){
      rect(x, y, 50, 50);
    }

    }
  }

/* Diamonds
for(let i=0;i<30;i++) {
    for(let j=0; j< 60; j++){
    let x = i*(sourceImg.width/30);
    let y = j*(sourceImg.height/60);    
    
    let pointSize = 11;
  let mask = maskImg.get(x+pointSize, y+pointSize);
    noStroke();
    print(mask[0]);

    if(mask[0] > 200){

   if(j % 2 == 0){ //if even X line
      let pix = sourceImg.get(x+pointSize, y+pointSize);
      fill(pix);
      triangle(x+pointSize, y, x, y+(2*pointSize), x+(2*pointSize), y+(2*pointSize));

      pix = sourceImg.get(x+pointSize, y+(3*pointSize));
      fill(pix);
      triangle(x+pointSize, y+(4*pointSize), x, y+(2*pointSize), x+(2*pointSize), y+(2*pointSize));

    } else {
      let pix = sourceImg.get(x+(2*pointSize), y+pointSize);
      fill(pix);
      triangle(x+(2*pointSize), y, x+(pointSize), y+(2*pointSize), x+(3*pointSize), y+(2*pointSize));

      pix = sourceImg.get(x+(2*pointSize), y+(3*pointSize));
      fill(pix);
      triangle(x+(2*pointSize), y+(4*pointSize), x+(pointSize), y+(2*pointSize), x+(3*pointSize), y+(2*pointSize));


    }
    
  }
  }
}
/*

/*
for(let i=0;i<30;i++) {
    for(let j=0; j< 60; j++){
    let x = i*(sourceImg.width/30);
    let y = j*(sourceImg.height/60);    
    let mask = maskImg.get(x, y);
    let pointSize = 11;
  

  
    if(j % 2 == 0){ //if even X line
      let pix = sourceImg.get(x+pointSize, y+pointSize);
      fill(pix);
      triangle(x+pointSize, y, x, y+(2*pointSize), x+(2*pointSize), y+(2*pointSize));

      pix = sourceImg.get(x+pointSize, y+(3*pointSize));
      fill(pix);
      triangle(x+pointSize, y+(4*pointSize), x, y+(2*pointSize), x+(2*pointSize), y+(2*pointSize));

    } else {
      let pix = sourceImg.get(x+(2*pointSize), y+pointSize);
      fill(pix);
      triangle(x+(2*pointSize), y, x+(pointSize), y+(2*pointSize), x+(3*pointSize), y+(2*pointSize));

      pix = sourceImg.get(x+(2*pointSize), y+(3*pointSize));
      fill(pix);
      triangle(x+(2*pointSize), y+(4*pointSize), x+(pointSize), y+(2*pointSize), x+(3*pointSize), y+(2*pointSize));


    }
  }
  }
*/

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
