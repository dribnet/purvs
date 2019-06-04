let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_1.png";
let maskFile2 = "mask_2.png";
let outputFile = "artwork_3.png";

let colourThresh = 50;
 let edges = [];

let edgeSmooth = 200;
let chords = [];
function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  maskImg2 = loadImage(maskFile2);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImg2.loadPixels();
  //noLoop();
}

function draw () {
//35 by 62

//background
      noFill();
      stroke(0);


angleMode(DEGREES);


      let numSlice = 50;
      let numRings = 50;
      
      for(let j = numRings; j >= 1; j--){ //rings
        for(let i = 0; i < numSlice; i++){ //ring slices
        

          let H = random(1400/numRings*j,1400/numRings*j+50);
          let testX = width/2 + ( (((H)/2)-1400/numRings/2) * cos((360/numSlice/2)+(i*360/numSlice))); 
          let testY =  height/2 + ((((H)/2)-1400/numRings/2) * sin((360/numSlice/2)+(i*360/numSlice)));

          let Rc = sourceImg.get(testX, testY);
          let Rr = red(Rc);
          let Rg = green(Rc);
          let Rb = blue(Rc);

          fill(sourceImg.get(testX, testY));
          fill(color(Rr+60, Rg+80, Rb+60));
         let mask = maskImg.get(testX, testY);
         if(mask[0] < 40){
           arc(width/2, height/2, H, H, i*(360/numSlice), (360/numSlice)+(i*(360/numSlice)), PIE);
        }


          //ellipse(testX, testY, 10, 10);

        }
    }


 edgeSet();


//
for(let i=0;i<8000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);    
   
    let pointSize = map(i, 0, 8000, 50, 10);
    let mask = maskImg.get(x, y);

    fill(pix);
    if(mask[0] > 40 && mask[0] < 70) {
      noStroke();
      ellipse(x, y, pointSize, pointSize);    
    }

}
for(let i=0;i<8000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);    
    let pointSize = map(i, 0, 8000, 40, 10);
    let mask = maskImg.get(x, y);

    fill(pix);
    if(mask[0] > 140 && mask[0] < 170) {
      noStroke();
      ellipse(x, y, pointSize, pointSize);    
    }

}


for(let i=0;i<8000;i++) {
    let x = floor(random(sourceImg.width*0.25, sourceImg.width*0.75));
    let y = floor(random(sourceImg.height*0.25, sourceImg.height*0.75));
    let pix = sourceImg.get(x, y);    
    let pointSize = map(i, 0, 8000, 20, 5);
    let mask = maskImg.get(x, y);

    fill(pix);
    if(mask[0] > 200 && mask[0] < 260) {
      noStroke();
      ellipse(x, y, pointSize, pointSize);    
    }

}

strokeWeight(1);
Mosaic(40, 70, 15, 30, 30, 42);



strokeWeight(0.75);
Mosaic(140, 170, 30, 60, 20, 22);



strokeWeight(0.5);
Mosaic(200, 260, 50, 100, 10, 12);
  
  


  drawOutline();
// trace();
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
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

for(let i=0;i<=xCount;i++) { //Medium Chunks
    for(let j=0; j<= yCount; j++){
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
          stroke(0);
          //noFill();
          beginShape();
          vertex(x1, y1);
          vertex(x2, y2);
          vertex(x3, y3);
          vertex(x4, y4);
          //endShape(CLOSE);
          //quad(x1, y1, x2, y2, x3, y3, x4, y4);
          //fill(sourceImg.get(x1+(quadSize/3), y1+(quadSize/3)));
         // ellipse(x1+(quadSize/3), y1+(quadSize/3), 10, 10);


          push();
          scale(0.5, 0.5);
          translate(x, y);
          noStroke();
          fill(255, 255, 255, 30);
          beginContour();
          //quad(x1, y1, x2, y2, x3, y3, x4, y4);
          vertex(x4, y4);
          vertex(x3, y3);
          vertex(x2, y2);
          vertex(x1, y1);
          endContour();
          

          pop();
          endShape(CLOSE);

        } else { //if corner piece

          let corner; 

          let x1 = constrain(x-quadSize/odd , 0, width-1);
          let y1 = constrain(y-quadSize/2, 0, height-1);

          let x2 = constrain(x+quadSize/odd, 0, width-1);
          let y2 = constrain(y-quadSize/2, 0, height-1);

          let x3 = constrain(x+quadSize/even, 0, width-1);
          let y3 = constrain(y+quadSize/2, 0, height-1);

          let x4 = constrain(x-quadSize/even, 0, width-1);
          let y4 = constrain(y+quadSize/2, 0, height-1);

          if((maskImg.get(x1, y1)[0] > alphaLow && maskImg.get(x1, y1)[0] < alphaHigh) ||
           (maskImg.get(x2, y2)[0]  > alphaLow && maskImg.get(x2, y2)[0]  < alphaHigh) ||
           (maskImg.get(x3, y3)[0]  > alphaLow && maskImg.get(x3, y3)[0]  < alphaHigh) ||
           (maskImg.get(x4, y4)[0] > alphaLow && maskImg.get(x4, y4)[0] < alphaHigh)) {
            corner = true;
          } else {
            corner = false;
          }
            
          if(corner == true){  

           // quad(x1, y1, x2, y2, x3, y3, x4, y4); 
            if(maskImg.get(x1, y1)[0] < alphaLow || maskImg.get(x1, y1)[0] > alphaHigh){
              closestEdgePoint(x1, y1, qSize*2);
               x1 = chords[0];
               y1 = chords[1];
            }


            if(maskImg.get(x2, y2)[0]  < alphaLow || maskImg.get(x2, y2)[0]  > alphaHigh){
             closestEdgePoint(x2, y2, qSize*2);
              x2 = chords[0];
              y2 = chords[1];
            }

            if(maskImg.get(x3, y3)[0]  < alphaLow || maskImg.get(x3, y3)[0]  > alphaHigh){
              closestEdgePoint(x3, y3, qSize*2);
               x3 = chords[0];
               y3 = chords[1];
            }

           if(maskImg.get(x4, y4)[0] < alphaLow || maskImg.get(x4, y4)[0] > alphaHigh){
             closestEdgePoint(x4, y4, qSize*2);
               x4 = chords[0];
               y4 = chords[1];
            }

            fill(sourceImg.get((x1+x2+x3+x4)/4, (y1+y2+y3+y4)/4));
            noFill();
            quad(x1, y1, x2, y2, x3, y3, x4, y4);


          }



        }

       

     



 
      //rect(x, y, 25, 25);
    }
    }
     
  }

function trace(){

   for(let i = 0; i < (edgeSmooth*4); i++){
      for(let j = 0; j < 2*(edgeSmooth*4); j++){
        if(maskImg2.get(i*(sourceImg.width/(edgeSmooth*4)), j*(sourceImg.height/(2*(edgeSmooth*4))))[0] < 20){
          fill(0);
          ellipse(i*(sourceImg.width/(edgeSmooth*4)), j*(sourceImg.height/(2*(4*edgeSmooth))), 1, 1);
        }
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
       //  ellipse(x, y, 3, 3);
        
     // print("x :" + i + " y : " + j + " , mask: " + mask[0] + " maskPrev : " + maskSave);
      }
    }
  }
}

function edgeSet(){
    //lets try something probably very stupid

    for(let i = 0; i <= edgeSmooth; i++){
      edges[i] = [];
      for(let j = 0; j <= 2*edgeSmooth; j++){
      let x = i*(sourceImg.width/(edgeSmooth));
      let y = j*(sourceImg.height/(2*edgeSmooth)); 
      let mask = maskImg.get(x, y);

      
      if((maskImg.get(i*(sourceImg.width/(edgeSmooth)), (j-1)*(sourceImg.height/(2*edgeSmooth))))[0] != mask[0]
        || (maskImg.get((i-1)*(sourceImg.width/(edgeSmooth)), j*(sourceImg.height/(2*edgeSmooth))))[0] != mask[0]
        ){

      edges[i][j] = true;
      fill(0);
      ellipse(x, y, 15, 15);
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

function closestEdgePoint(xz , yz, size){
 let distance = 999999999;

 let x1b = xz;
 let y1b = yz;


let sizeScaleX = (size*2)/sourceImg.width * edgeSmooth;
let sizeScaleY = (size*2)/sourceImg.width * (edgeSmooth*2);

let posXscale = xz/sourceImg.width * edgeSmooth;
let posYscale = yz/sourceImg.height * (2*edgeSmooth);

  let testI1 = round(constrain(posXscale - (sizeScaleX/2), 0, posXscale));
  let testI2 = round(constrain(posXscale + (sizeScaleX/2), posXscale, edgeSmooth));


  let testJ1 = round(constrain(posYscale - (sizeScaleX/2), 0, posYscale));

  let testJ2 = round(constrain(posYscale + (sizeScaleX/2), posYscale, 2*edgeSmooth));


for(let i = testI1; i < testI2; i++){
  for(let j = testJ1; j < testJ2; j++){

    //if(edges[i][j] == true){
    if(edges[i][j] == true){


    if(dist(xz, yz, i*(sourceImg.width/edgeSmooth), j*(sourceImg.height/(2*edgeSmooth))) < distance ){


      distance = dist(xz, yz, i*(sourceImg.width/edgeSmooth), j*(sourceImg.height/(2*edgeSmooth)));

      x1b = i*(sourceImg.width/edgeSmooth);
      y1b = j*(sourceImg.height/(2*edgeSmooth));



    } else {

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