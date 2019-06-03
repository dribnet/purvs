let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

let colourThresh = 50;
 let edges = [];

let edgeSmooth = 200;
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

//background
      noFill();
      stroke(0);
/*
angleMode(DEGREES);


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

*/
 edgeSet();

//
Mosaic(40, 70, 15, 30, 30, 42);

Mosaic(140, 170, 30, 60, 20, 22);

Mosaic(200, 260, 50, 100, 10, 12);
  
  


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

  drawOutline();

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function Mosaic(alphaLow, alphaHigh, xCount, yCount, rQuad, qSize){
let ranQuad = rQuad;
let quadSize = qSize;
let prevX2;
let prevY2;
let prevX3;
let prevY3;
let prevX4;
let prevy4;

let prevEmptyX = 0;
let prevEmptyY = 0;

for(let i=0;i<xCount;i++) { //Medium Chunks
    for(let j=0; j< yCount; j++){
      if(i == 0 && j == 0){
        /*
        prevX2 =
        prevY2;
        prevX3;
        prevY3;
        prevX4;
        prevy4;
        */
      }

      let x = i*(sourceImg.width/xCount);
      let y = j*(sourceImg.height/yCount); 
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      let odd = 20;
      let even = 40;


      if((j % 2 == 0 && i % 2 != 0) || (j % 2 != 0 && i % 2 == 0)){
        print("odd");
        odd = 3;
        even = 1.25;
   
      } else {
        print("even");
        odd = 1.25;
        even = 3;
     
      }



        if(mask[0] > alphaLow && mask[0] < alphaHigh){ // if we draw pixel 

          /*
          let blankRight = 0;
          let blankDown = 0;

          if(maskImg.get((i-1)*(sourceImg.width/xCount), y)[0] < alphaLow || maskImg.get((i-1)*(sourceImg.width/xCount), y)[0] > alphaHigh){ // if pixel to left is outside
            blankRight = -1;
          }
         if(maskImg.get((i+1)*(sourceImg.width/xCount), y)[0] < alphaLow || maskImg.get((i+1)*(sourceImg.width/xCount), y)[0] > alphaHigh){ // if pixel to right is outside
            blankRight = 1;
          }
         if(maskImg.get(x, (j-1)*(sourceImg.height/yCount))[0] < alphaLow || maskImg.get(x, (j-1)*(sourceImg.height/yCount))[0] > alphaHigh){ // if pixel up is outside
            blankDown = -1; 
          }
         if(maskImg.get(x, (j+1)*(sourceImg.height/yCount))[0] < alphaLow || maskImg.get(x, (j+1)*(sourceImg.height/yCount))[0] > alphaHigh){ // if pixel down is outside
            blankDown = 1;
          }



          if(blankDown != 0 || blankRight != 0){

            if(i+blankRight >= xCount){
              blankRight = 0;
            } 
            else if(i+blankRight < 0){
              blankRight = 0;
            } 


            if(j+blankDown >= yCount){
              blankDown = 0;
            } 
            else if(j+blankDown < 0){
              blankDown = 0;
            } 



            closestEdgePoint((i+blankRight)*(sourceImg.width/xCount)+(blankDown*10), (j+blankDown)*(sourceImg.height/yCount)+(blankRight*10), 30);

            prevEmptyX = chords[0];
            prevEmptyY = chords[1];

            closestEdgePoint((i+blankRight)*(sourceImg.width/xCount)-(blankDown*10), (j+blankDown)*(sourceImg.height/yCount)-(blankRight*10), 30);
            fill(155);
            quad(prevEmptyX, prevEmptyY, chords[0], chords[1], chords[0]-(blankRight*20), chords[1]-(blankDown*20), prevEmptyX-(blankRight*20), prevEmptyY-(blankDown*20));

          }
          */

/*
           if(maskImg.get((i-1)*(sourceImg.width/xCount), y)[0] < alphaLow || maskImg.get((i-1)*(sourceImg.width/xCount), y)[0] > alphaHigh){ // if blank to the left


            closestEdgePoint((i-1)*(sourceImg.width/xCount), y, qSize);
            prevEmptyX = chords[0];
            prevEmptyY = chords[1];
            closestEdgePoint((i-1)*(sourceImg.width/xCount), y+20, qSize);

            fill(0);
            //triangle(prevEmptyX, prevEmptyY, chords[0], chords[1], prevEmptyX+5, 5);

            fill(pix);

            if(prevEmptyY == 0){
              prevEmptyX = chords[0];
              prevEmptyY = chords[1];
            } else {
              //fill(255);
              //triangle(prevEmptyX, prevEmptyY, chords[0], chords[1], width/2, height/2);

              prevEmptyX = chords[0];
              prevEmptyY = chords[1];
            }
          }
*/

          fill(pix);

          let x1 = constrain(x-quadSize/odd , 0, width);
          let y1 = constrain(y-quadSize/2, 0, height);

          if(maskImg.get(x1, y1)[0] < alphaLow || maskImg.get(x1, y1)[0] > alphaHigh){
            closestEdgePoint(x1, y1, qSize);
            x1 = chords[0];
            y1 = chords[1];
          }


          let x2 = constrain(x+quadSize/odd, 0, width);
          let y2 = constrain(y-quadSize/2, 0, height);

          if(maskImg.get(x2, y2)[0]  < alphaLow || maskImg.get(x2, y2)[0]  > alphaHigh){
           closestEdgePoint(x2, y2, qSize);
            x2 = chords[0];
            y2 = chords[1];
          }


          let x3 = constrain(x+quadSize/even, 0, width);
          let y3 = constrain(y+quadSize/2, 0, height);

          if(maskImg.get(x3, y3)[0]  < alphaLow || maskImg.get(x3, y3)[0]  > alphaHigh){
            closestEdgePoint(x3, y3, qSize);
            x3 = chords[0];
            y3 = chords[1];
          }


          let x4 = constrain(x-quadSize/even, 0, width);
          let y4 = constrain(y+quadSize/2, 0, height);

         if(maskImg.get(x4, y4)[0] < alphaLow || maskImg.get(x4, y4)[0] > alphaHigh){
           closestEdgePoint(x4, y4, qSize);
            x4 = chords[0];
            y4 = chords[1];
          }

          
          /*
          beginShape(TRIANGLE_FAN);
          vertex(x1, y1);
          vertex(x2, y2);
          vertex(x3, y3);
          vertex(x4, y4);
          endShape();
          */
          quad(x1, y1, x2, y2, x3, y3, x4, y4);

          push();
          scale(0.5, 0.5);
          translate(x, y);
          noStroke();
          fill(255, 255, 255, 30);
          quad(x1, y1, x2, y2, x3, y3, x4, y4);

          pop();


        } 

       

     



 
      //rect(x, y, 25, 25);
    }
    }
     
  }



function drawOutline() {
  let a = 0;
   for(let i = 0; i < edgeSmooth; i++){
      for(let j = 0; j < 2*edgeSmooth; j++){
      let x = i*(sourceImg.width/(edgeSmooth));
      let y = j*(sourceImg.height/(2*edgeSmooth)); 
      a = a + 0.5;
      if(a > 1){
        a = 0;
      }
      let mask = maskImg.get(x, y);  

      if((maskImg.get(i*(sourceImg.width/(edgeSmooth)), (j-1)*(sourceImg.height/(2*edgeSmooth))))[0] != mask[0]
        || (maskImg.get((i-1)*(sourceImg.width/edgeSmooth), j*(sourceImg.height/(2*edgeSmooth))))[0] != mask[0]
        || j == 0 || i == 0 || j == 2*edgeSmooth-1|| i == edgeSmooth -1 ){
        fill(255);
        if(a == 0){
           
        }
         ellipse(x, y, 3, 3);
        
     // print("x :" + i + " y : " + j + " , mask: " + mask[0] + " maskPrev : " + maskSave);
      }
    }
  }
}

function edgeSet(){
    //lets try something probably very stupid

    for(let i = 0; i < edgeSmooth; i++){
      edges[i] = [];
      for(let j = 0; j < 2*edgeSmooth; j++){
      let x = i*(sourceImg.width/(edgeSmooth));
      let y = j*(sourceImg.height/(2*edgeSmooth)); 
      let mask = maskImg.get(x, y);

      
      if((maskImg.get(i*(sourceImg.width/(edgeSmooth)), (j-1)*(sourceImg.height/(2*edgeSmooth))))[0] != mask[0]
        || (maskImg.get((i-1)*(sourceImg.width/(edgeSmooth)), j*(sourceImg.height/(2*edgeSmooth))))[0] != mask[0]
        ){

      edges[i][j] = true;
      fill(150);
      //ellipse(x, y, 5, 5);
     // print("x :" + i + " y : " + j + " , mask: " + mask[0] + " maskPrev : " + maskSave);
      } else {
        edges[i][j] = false;
      }


      }
    }

   endShape();
}

function edgeFill(){
let spaces = 0;

let smallA = 0;
let medA = 0;
let bigA = 0;

let alphaSave = 0;

     for(let i = 0; i < (edgeSmooth); i++){
      for(let j = 0; j < 2*(edgeSmooth); j++){
      let x = i*(sourceImg.width/(edgeSmooth));
      let y = j*(sourceImg.height/(2*edgeSmooth)); 


      if(edges[i][j] == true){
        
      
      spaces ++;
       if(spaces == 3){
        alphaSave = maskImg.get(x, y)[0];
           
 

        let x1a = x - 15;
        let y1a = y - 15;

        if(maskImg.get(x1a, y1a)[0] != alphaSave){
          closestEdgePoint(x1a, y1a, 15);
          x1a = chords[0];
          y1a = chords[1];
        }

        let x2a = x + 15;
        let y2a = y - 15;

       if(maskImg.get(x2a, y2a)[0] != alphaSave){
          closestEdgePoint(x2a, y2a, 15);
          x2a = chords[0];
          y2a = chords[1];
        }
        let x3a = x + 15;

        let y3a = y + 15;

        if(maskImg.get(x3a, y3a)[0] != alphaSave){
          closestEdgePoint(x3a, y3a, 15);
          x3a = chords[0];
          y3a = chords[1];
        }
        let x4a = x - 15;
        let y4a = y + 15;

        if(maskImg.get(x4a, y4a)[0] != alphaSave){
          closestEdgePoint(x4a, y4a, 15);
          x4a = chords[0];
          y4a = chords[1];
        }
        stroke(0);
        fill(sourceImg.get(x, y));

       // quad(x1,y1, x2, y2, x3, y3, x4, y4);
        
        triangle(x1a, y1a, x2a, y2a, x, y);
        triangle(x2a, y2a, x3a, y3a, x, y);
        triangle(x3a, y3a, x4a, y4a, x, y);
        triangle(x4a, y4a, x1a, y1a, x, y);

        


        spaces = 0;

       }
      } 
      //let mask = maskImg.get(x, y);  


    }
  }
}

function closestEdgePoint(x , y, size){
 let distance = 999;

 let x1b;
 let y1b;


let sizeScale = (size*2)/sourceImg.width * edgeSmooth;
let posXscale = x/sourceImg.width * edgeSmooth;
let posYscale = y/sourceImg.height * (2*edgeSmooth);

 print("SizeScale : " + sizeScale + " posXscale : " + posXscale);
  let testI1 = round(constrain(posXscale - (sizeScale/2), 0, posXscale));
  let testI2 = round(constrain(posXscale + (sizeScale/2), posXscale, edgeSmooth));
 print("Testi1 ; " + testI1 + " testI2 : " + testI2);

   let testJ1 = round(constrain(posYscale - (sizeScale/2), 0, posYscale));
  let testJ2 = round(constrain(posYscale + (sizeScale/2), posYscale, 2*edgeSmooth));


for(let i = testI1; i < testI2; i++){
  for(let j = testJ1; j < testJ2; j++){
    print(dist(0, 0, width, height));
    //if(edges[i][j] == true){
    if(edges[i][j] == true){
    if(dist(x, y, i*(sourceImg.width/edgeSmooth), j*(sourceImg.height/(2*edgeSmooth))) < distance ){
      distance = dist(x, y, i*(sourceImg.width/edgeSmooth), j*(sourceImg.height/(2*edgeSmooth)));
      x1b = i*(sourceImg.width/edgeSmooth);
      y1b = j*(sourceImg.height/(2*edgeSmooth));
    }
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
chords[0] = x1b;
chords[1] = y1b;


}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
