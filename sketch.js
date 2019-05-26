let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

let colourThresh = 10;
 let edges = [];

let chords = [];
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
  noLoop();
}

function draw () {
//35 by 62

 edgeSet();


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
         if(mask[0] < 40){
           arc(width/2, height/2, H, H, i*(360/numSlice), (360/numSlice)+(i*(360/numSlice)), PIE);
        }


          //ellipse(testX, testY, 10, 10);

        }
    }



Mosaic(40, 70, 10, 20, 30, 100);

Mosaic(140, 170, 15, 30, 20, 60);

Mosaic(200, 260, 20, 40, 10, 40);
  
  
  

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

   saveArtworkImage(outputFile);

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function Mosaic(alphaLow, alphaHigh, xCount, yCount, rQuad, qSize){

for(let i=0;i<xCount;i++) { //Medium Chunks
    for(let j=0; j< yCount; j++){
      let ranQuad = rQuad;
      let quadSize = qSize;

      let x = i*(sourceImg.width/xCount);
      let y = j*(sourceImg.height/yCount); 
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      if(mask[0] > alphaLow && mask[0] < alphaHigh){

        let x1 = constrain(x-quadSize/2+random(0, ranQuad), 0, width);
        let y1 = constrain(y-quadSize/2+random(0, ranQuad), 0, height);

        if(maskImg.get(x1, y1)[0] < alphaLow || maskImg.get(x1, y1)[0] > alphaHigh){
          closestEdgePoint(x1, y1);
          x1 = chords[0];
          y1 = chords[1];
        }

        let x2 = constrain(x+quadSize/2+random(0, ranQuad), 0, width);
        let y2 = constrain(y-quadSize/2+random(0, ranQuad), 0, height);

        if(maskImg.get(x2, y2)[0]  < alphaLow || maskImg.get(x2, y2)[0]  > alphaHigh){
          closestEdgePoint(x2, y2);
          x2 = chords[0];
          y2 = chords[1];
        }

        let x3 = constrain(x+quadSize/2+random(0, ranQuad), 0, width);
        let y3 = constrain(y+quadSize/2+random(0, ranQuad), 0, height);

        if(maskImg.get(x3, y3)[0]  < alphaLow || maskImg.get(x3, y3)[0]  > alphaHigh){
          closestEdgePoint(x3, y3);
          x3 = chords[0];
          y3 = chords[1];
        }

        let x4 = constrain(x-quadSize/2+random(0, ranQuad), 0, width);
        let y4 = constrain(y+quadSize/2+random(0, ranQuad), 0, height);

       if(maskImg.get(x4, y4)[0] < alphaLow || maskImg.get(x4, y4)[0] > alphaHigh){
          closestEdgePoint(x4, y4);
          x4 = chords[0];
          y4 = chords[1];
        }




   quad(x1, y1, x2, y2, x3, y3, x4,y4);
      //rect(x, y, 25, 25);
    }
    }
  }


}
function edgeSet(){
  let maskSave = maskImg.get(0*(sourceImg.width/60), 0*(sourceImg.height/120));
    //lets try something probably very stupid
   
    for(let i = 0; i < 60; i++){
      edges[i] = [];
      for(let j = 0; j < 120; j++){
      let x = i*(sourceImg.width/60);
      let y = j*(sourceImg.height/120); 
      let mask = maskImg.get(x, y);


      if(mask[0] != maskSave || j == 0 || i == 0 || j == 119 || i == 59 ){
      edges[i][j] = true;
      //fill(0);
      //rect(x, y, 10, 10);
     // print("x :" + i + " y : " + j + " , mask: " + mask[0] + " maskPrev : " + maskSave);
      } else {
        edges[i][j] = false;
      }

      maskSave = mask[0];

      }
    }

   
}

function closestEdgePoint(x , y){
 let distance = 999;

 let x1;
 let y1;
 print(x);
for(let i = 0; i < 60; i++){
  for(let j = 0; j < 120; j++){
    print(dist(0, 0, width, height));
    if(dist(x, y, i*(sourceImg.width/60), j*(sourceImg.height/120)) < distance && edges[i][j] == true){
      distance = dist(x, y, i*(sourceImg.width/60), j*(sourceImg.height/120));
      x1 = i*(sourceImg.width/60);
      y1 = j*(sourceImg.height/120);
    }
    /*
    if(int(dist(x, y, edgeSet()[i][j])) < distance){
      distance = int(dist(x, y, edgeSet()[i][j]));
      x1 = i*(sourceImg.width/60);
      y1 = j*(sourceImg.height/120);
    }
    */
  }
}
chords[0] = x1;
chords[1] = y1;


}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
