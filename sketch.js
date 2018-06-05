//Made by Ben Spearman
//MDDN 242 Creative Coding II, 2018
var sourceImg=null;
var maskImg=null;
var renderCounter=0;
//Creating a "time" variable
var t1 = 1;
var t2 = 1;
var t3 = 1;
var rendlay1 = 200;
var rendlay2 = 400;
var rendlay3 = 900;
var rendstop = rendlay3;

var pointSize = 30;
var medDetail = 10;
var fineDetail = 3;

function preload() {
//Loading the three different image layers, the standard, the medium, and the fine
  sourceImg = loadImage("input_3.jpg");
  medImg = loadImage("input_3_med.png");
  fineImg = loadImage("input_3_fine.png");
  
//Loading the different brush stroke images that will make up the painted image 
  strokeImg1 = loadImage("Stroke1.png");
  strokeImg2 = loadImage("Stroke2.png");
  strokeImg3 = loadImage("Stroke3.png");
  strokeImg4 = loadImage("Stroke4.png");
  strokeImg5 = loadImage("Stroke5.png");
  strokeImg6 = loadImage("Stroke6.png");
  strokeImg7 = loadImage("Stroke7.png");
  strokeImg8 = loadImage("Stroke8.png");
  strokeImg9 = loadImage("Stroke9.png");
  strokeImg10 = loadImage("Stroke10.png");
  strokeImg11 = loadImage("Stroke11.png");

//Somewhat an artifact right now, but will most likely be used later 
  maskImg = loadImage("mask_2.png");
}

function setup () {
  var main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  medImg.loadPixels();
  fineImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
//For loop for the first base layer of paint, low res, so large brush stroke size (pointSize)
if(renderCounter < rendlay1){
  firstLayer();
}
  
//Second layer of paint, painting the "medium" level of detail  
if(renderCounter > rendlay1 && renderCounter < rendlay2){
  secondLayer();
}  

//Third and final layer, this one has tiny brush strokes for the fine detail
if(renderCounter > rendlay2){
  thirdLayer();
}

renderCounter = renderCounter + 1;
console.log(renderCounter);

if(renderCounter >= rendstop) {
        console.log("Done!")
        noLoop();
        saveBlocksImages();
      }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}





//----------------------------------------------------------------------------------------------------------//





function firstLayer (){
  for(var i=0;i<50;i++) {
    var x = floor(random(sourceImg.width));
    var y = floor(random(sourceImg.height));
    var pix = sourceImg.get(x, y);
    var mask = maskImg.get(x, y);
    tint(pix);
    
    
//If statements allow for even rotation and distribution of different brush stroke types
      if(t1 == 1) {
        image(strokeImg1,x, y, pointSize, 4*pointSize);
      }
      if(t1 == 2) {
        image(strokeImg2,x, y, pointSize, 4*pointSize);
      }
      if(t1 == 3) {
        image(strokeImg3,x, y, pointSize, 4*pointSize);
      }
      if(t1 == 4) {
        image(strokeImg4,x, y, pointSize, 4*pointSize);
      }
      if(t1 == 5) {
        image(strokeImg5,x, y, pointSize, 4*pointSize);
      }
      if(t1 == 6) {
        image(strokeImg6,x, y, pointSize, 4*pointSize);
      }
      if(t1 == 7) {
        image(strokeImg7,x, y, pointSize, 4*pointSize);
      }
      if(t1 == 8) {
        image(strokeImg8,x, y, pointSize, 4*pointSize);
      }
      if(t1 == 9) {
        image(strokeImg9,x, y, pointSize, 4*pointSize);
      }
      if(t1 == 10) {
        image(strokeImg10,x, y, pointSize, 4*pointSize);
      }
      if(t1 == 11) {
        image(strokeImg11,x, y, pointSize, 4*pointSize);
      }

//Counting up the timer variable for use in if statements above   
      if(t1 < 12){
      t1 = t1 + 1;
      } else {
        t1 = 1;
      }
  }
}

function secondLayer(){
  for(var j=0;j<75;j++) {
      x = floor(random(sourceImg.width));
      y = floor(random(sourceImg.height));
      pix = medImg.get(x, y);
      tint(pix);
      
        if(t2 == 1) {
          image(strokeImg1,x, y, medDetail, 4*medDetail);
        }
        if(t2 == 2) {
          image(strokeImg2,x, y, medDetail, 4*medDetail);
        }
        if(t2 == 3) {
          image(strokeImg3,x, y, medDetail, 4*medDetail);
        }
        if(t2 == 4) {
          image(strokeImg4,x, y, medDetail, 4*medDetail);
        }
        if(t2 == 5) {
          image(strokeImg5,x, y, medDetail, 4*medDetail);
        }
        if(t2 == 6) {
          image(strokeImg6,x, y, medDetail, 4*medDetail);
        }
        if(t2 == 7) {
          image(strokeImg7,x, y, medDetail, 4*medDetail);
        }
        if(t2 == 8) {
          image(strokeImg8,x, y, medDetail, 4*medDetail);
        }
        if(t2 == 9) {
          image(strokeImg9,x, y, medDetail, 4*medDetail);
        }
        if(t2 == 10) {
          image(strokeImg10,x, y, medDetail, 4*medDetail);
        }
        if(t2 == 11) {
          image(strokeImg11,x, y, medDetail, 4*medDetail);
        }

      if(t2 < 12){
      t2 = t2 + 1;
      } else {
        t2 = 1;
      }
  }
}

function thirdLayer(){
  for(var k=0;k<200;k++) {
    x = floor(random(fineImg.width));
    y = floor(random(fineImg.height));
    pix = fineImg.get(x, y);
    tint(pix);
    

      if(t3 == 1) {
        image(strokeImg1,x,  y, fineDetail, 4*fineDetail);
      }
      if(t3 == 2) {
        image(strokeImg2,x, y, fineDetail, 4*fineDetail);
      }
      if(t3 == 3) {
        image(strokeImg3,x, y, fineDetail, 4*fineDetail);
      }
      if(t3 == 4) {
        image(strokeImg4,x, y, fineDetail, 4*fineDetail);
      }
      if(t3 == 5) {
        image(strokeImg5,x, y, fineDetail, 4*fineDetail);
      }
      if(t3 == 6) {
        image(strokeImg6,x, y, fineDetail, 4*fineDetail);
      }
      if(t3 == 7) {
        image(strokeImg7,x, y, fineDetail, 4*fineDetail);
      }
      if(t3 == 8) {
        image(strokeImg8,x, y, fineDetail, 4*fineDetail);
      }
      if(t3 == 9) {
        image(strokeImg9,x, y, fineDetail, 4*fineDetail);
      }
      if(t3 == 10) {
        image(strokeImg10,x, y, fineDetail, 4*fineDetail);
      }
      if(t3 == 11) {
        image(strokeImg11,x, y, fineDetail, 4*fineDetail);
      }

    
      if(t3 < 12){
      t3 = t3 + 1;
      } else {
        t3 = 1;
      }
    }
  }
}

//Brush Stroke images obtained from http://www.onlygfx.com/14-grunge-brush-stroke-banner-png-transparent-vol-4/ under creative commons
