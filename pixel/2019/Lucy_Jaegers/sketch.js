let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";

let outputFile = "artwork_1.png";

let colourThresh = 50;
 let edges = [];

 let frameDark = 0;
 let frameLight = 75;

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

}

function draw () {
//35 by 62

noFill();
stroke(0);

strokeWeight(1);
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

          if(j > 30){
          let LightScale = map(j, 50, 1, 20, -30);
          LightScale = LightScale*10;
          fill(sourceImg.get(testX, testY));
          fill(color(Rr+60+LightScale, Rg+80+LightScale, Rb+60+LightScale));
          } else {
            fill(color(Rr+60, Rg+80, Rb+60));
          }
         let mask = maskImg.get(testX, testY);
         if(mask[0] < 40){
           arc(width/2, height/2, H, H, i*(360/numSlice), (360/numSlice)+(i*(360/numSlice)), PIE);
        }


          //ellipse(testX, testY, 10, 10);

        }
    }


 edgeSet();


//
strokeWeight(2);
Mosaic(40, 120, 15, 30, 30, 42);

strokeWeight(1.5);
Mosaic(80, 220, 25, 50, 25, 27);


strokeWeight(1.5);
Mosaic(140, 260, 30, 60, 20, 22);

strokeWeight(1);
Mosaic(200, 260, 50, 100, 10, 12);
  


// triangle(random(sourceImg.width), random(sourceImg.height),
//   random(sourceImg.width), random(sourceImg.height),
//   random(sourceImg.width), random(sourceImg.height));

// triangle(random(sourceImg.width), random(sourceImg.height),
//   random(sourceImg.width), random(sourceImg.height),
//   random(sourceImg.width), random(sourceImg.height));

// triangle(random(sourceImg.width), random(sourceImg.height),
//   random(sourceImg.width), random(sourceImg.height),
//   random(sourceImg.width), random(sourceImg.height));

// triangle(random(sourceImg.width), random(sourceImg.height),
//   random(sourceImg.width), random(sourceImg.height),
//   random(sourceImg.width), random(sourceImg.height));

frame();



noStroke();
fill(255, 232, 134, 40);
ellipse(random(sourceImg.width), random(sourceImg.height), 500, 500);
ellipse(random(sourceImg.width), random(sourceImg.height), 400, 400);
ellipse(random(sourceImg.width), random(sourceImg.height), 300, 300);
ellipse(random(sourceImg.width), random(sourceImg.height), 200, 200);
ellipse(random(sourceImg.width), random(sourceImg.height), 100, 100);



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
        //print("odd");
        odd = 3;
        even = 1.25;
   
      } else {
        //print("even");
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
          quad(x1, y1, x2, y2, x3, y3, x4, y4);
         //  fill(sourceImg.get(x1+(quadSize/3), y1+(quadSize/3)));
         // ellipse(x1+(quadSize/3), y1+(quadSize/3), 10, 10);

          for(let i = 0; i < 5; i++){
            let xi = floor(random(x-quadSize/3, x+quadSize/3));
            let yi = floor(random(y-quadSize/2, y+quadSize/2));
            noStroke();
            fill(sourceImg.get(xi, yi));
            //ellipse(xi, yi, quadSize/3, quadSize/3);
            stroke(0);
          }

          push();
          scale(0.5, 0.5);
          translate(x, y);
          noStroke();
          fill(255, 255, 255, 30);
  
          quad(x1, y1, x2, y2, x3, y3, x4, y4);



          pop();

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
            //fill(0);
            
            
           
             if(quadSize == 42 || quadSize == 12){
             // print("please");
               quad(x1, y1, x2, y2, x3, y3, x4, y4);
             }
            //print("Quad size : " + quadSize);
          }



        }
    }
    }
     
  }
function frame(){

  let c1;
  let c2;
  let c3;


if(sourceFile == "input_1.jpg") {

  c1 = color(255, 213, 94, 150);
  c2 = color(255, 126, 94, 150);
  c3 = color(94, 164, 255, 150);

} else if(sourceFile == "input_2.jpg"){

  c2 = color(255, 213, 94, 150);
  c3 = color(255, 126, 94, 150);
  c1 = color(94, 164, 255, 150);

} else if(sourceFile == "input_3.jpg"){

  c3 = color(255, 213, 94, 150);
  c1 = color(255, 126, 94, 150);
  c2 = color(94, 164, 255, 150);

}

rectMode(CORNERS);



//first row 
strokeWeight(10);
fill(c1);
stroke(frameDark);

rect(70, 0, 190, 75);

beginShape();
vertex(195, 0);
vertex(310, 0);
vertex(310, 50);
vertex(260, 75);
vertex(195, 75);
endShape();

quad(310, 0, width-352.5, 0, 
width-352.5, 10, 310, 50);

quad(width-352.5, 0, width-310, 0,
width-310, 50, width-352.5, 10);

beginShape();
vertex(width-190, 0);
vertex(width-310, 0);
vertex(width-310, 50);
vertex(width-260, 75);
vertex(width-190, 75);
endShape();

rect(width-70, 0, width-190, 75);

//light outline
strokeWeight(3);
noFill();
stroke(frameLight);


rect(70, 0, 190, 75);

beginShape();
vertex(195, 0);
vertex(310, 0);
vertex(310, 50);
vertex(260, 75);
vertex(195, 75);
endShape();

quad(310, 0, width-352.5, 0, 
width-352.5, 10, 310, 50);

quad(width-352.5, 0, width-310, 0,
width-310, 50, width-352.5, 10);

beginShape();
vertex(width-190, 0);
vertex(width-310, 0);
vertex(width-310, 50);
vertex(width-260, 75);
vertex(width-190, 75);
endShape();

rect(width-70, 0, width-190, 75);


//second ro w 
strokeWeight(10);
fill(c1);
stroke(frameDark);


rect(70, 75, 190, 150);
quad(190, 75, 245, 75, 220, 150, 190, 150);
quad(width-190, 75, width-245, 75, width-220, 150, width-190, 150);
rect(width-70, 75, width-190, 150); 

//light outline
strokeWeight(3);
noFill();
stroke(frameLight);

rect(70, 75, 190, 150);
quad(190, 75, 245, 75, 220, 150, 190, 150);
quad(width-190, 75, width-245, 75, width-220, 150, width-190, 150);
rect(width-70, 75, width-190, 150); 

//third row 
strokeWeight(10);
fill(c1);
stroke(frameDark);


beginShape();
vertex(70, 150);
vertex(190, 150);
vertex(190, 175);
vertex(150, 225);
vertex(70, 225);
endShape();


triangle(190, 150, 230, 150, 190, 190);
triangle(width-190, 150, width-230, 150, width-190, 190); 


beginShape();
vertex(width-70, 150);
vertex(width-190, 150);
print("draw once ");
vertex(width-190, 175);
vertex(width-150, 225);
vertex(width-70, 225);
endShape(CLOSE);

//light outline
strokeWeight(3);
noFill();
stroke(frameLight);

beginShape();
vertex(70, 150);
vertex(190, 150);
vertex(190, 175);
vertex(150, 225);
vertex(70, 225);
endShape();


triangle(190, 150, 230, 150, 190, 190);
triangle(width-190, 150, width-230, 150, width-190, 190); 


beginShape();
vertex(width-70, 150);
vertex(width-190, 150);
print("draw once ");
vertex(width-190, 175);
vertex(width-150, 225);
vertex(width-70, 225);
endShape(CLOSE);

//fourth row 
strokeWeight(10);
fill(c1);
stroke(frameDark);


quad(70, 225, 140, 225, 100, 300, 70, 300);
quad(width-70, 225, width-140, 225, width-100, 300, width-70, 300);

//light outline
strokeWeight(3);
noFill();
stroke(frameLight);

quad(70, 225, 140, 225, 100, 300, 70, 300);
quad(width-70, 225, width-140, 225, width-100, 300, width-70, 300);


//left rect
strokeWeight(10);
stroke(0);
fill(c2);
rect(5, 5, 70, 150);

fill(c3);
rect(5, 150, 70, 300);

fill(c2);
rect(5, 300, 70, 450);

fill(c3);
rect(5, 450, 70, 600);

fill(c2);
rect(5, 600, 70, 750);

fill(c3);
rect(5, 750, 70, 900);

fill(c2);
rect(5, 900, 70, 1050);

fill(c3);
rect(5, 1050, 70, sourceImg.height-5);

strokeWeight(3);
noFill();
stroke(frameLight);

rect(5, 5, 70, 150);
rect(5, 150, 70, 300);
rect(5, 300, 70, 450);
rect(5, 450, 70, 600);
rect(5, 600, 70, 750);
rect(5, 750, 70, 900);
rect(5, 900, 70, 1050);
rect(5, 1050, 70, sourceImg.height-5);

// fill(c3);
// rect(5, 5, 70, sourceImg.height-5);

//right rect
strokeWeight(10);
stroke(frameDark);
fill(c2);
rect(sourceImg.width-5, 5, sourceImg.width-70, 150);

fill(c3);
rect(sourceImg.width-5, 150, sourceImg.width-70, 300);

fill(c2);
rect(sourceImg.width-5, 300, sourceImg.width-70, 450);

fill(c3);
rect(sourceImg.width-5, 450, sourceImg.width-70, 600);

fill(c2);
rect(sourceImg.width-5, 600, sourceImg.width-70, 750);

fill(c3);
rect(sourceImg.width-5, 750, sourceImg.width-70, 900);

fill(c2);
rect(sourceImg.width-5, 900, sourceImg.width-70, 1050);

fill(c3);
rect(sourceImg.width-5, 1050, sourceImg.width-70, sourceImg.height-5);


strokeWeight(3);
noFill();
stroke(frameLight);
rect(sourceImg.width-5, 5, sourceImg.width-70, 150);
rect(sourceImg.width-5, 150, sourceImg.width-70, 300);
rect(sourceImg.width-5, 300, sourceImg.width-70, 450);
rect(sourceImg.width-5, 450, sourceImg.width-70, 600);
rect(sourceImg.width-5, 600, sourceImg.width-70, 750);
rect(sourceImg.width-5, 750, sourceImg.width-70, 900);
rect(sourceImg.width-5, 900, sourceImg.width-70, 1050);
rect(sourceImg.width-5, 1050, sourceImg.width-70, sourceImg.height-5);


//bottom bar
strokeWeight(20);
stroke(frameDark);
fill(c1);
rect(5, sourceImg.height-70, sourceImg.width-5, sourceImg.height-5)

strokeWeight(5);
noFill();
stroke(frameLight);
rect(5, sourceImg.height-70, sourceImg.width-5, sourceImg.height-5)

//side rects overlay
strokeWeight(20);
stroke(frameDark);
noFill();
rect(sourceImg.width-5, 5, sourceImg.width-70, sourceImg.height-5);
rect(5, 5, 70, sourceImg.height-5);

strokeWeight(4);
noFill();
stroke(frameLight);
rect(sourceImg.width-5, 5, sourceImg.width-70, sourceImg.height-5);
rect(5, 5, 70, sourceImg.height-5);

strokeWeight(20);
stroke(frameDark);
noFill();
arc(width/2, height/18, 60, 100, 210, 340);

arc(width/2, height/10, 250, 150, 287.5, 380);
arc(width/2, height/10, 250, 150, 165, 250);

arc(width/2, height/3, 565, 565, 293, 360);
arc(width/2, height/3, 565, 565, 185, 245);

//light Outline
strokeWeight(5);

stroke(frameLight);

arc(width/2, height/18, 60, 100, 210, 340);

arc(width/2, height/10, 250, 150, 282.5, 385);
arc(width/2, height/10, 250, 150, 165, 250);

arc(width/2, height/3, 565, 565, 294, 362);
arc(width/2, height/3, 565, 565, 182, 246);



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
          } else {
            edges[i][j] = false;
          }
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