//Made by Ben Spearman
//MDDN 242 Creative Coding II, 2018
var sourceImg=null;
var maskImg=null;
var renderCounter=0;
var firstLayerCounter = 30;
var mrenderCounter=0;
var secondLayerCounter = 50;
var frenderCounter=0;
var thirdLayerCounter = 75;

//Creating a "time" variable
var t = 1;


function preload() {
//Loading the three different image layers, the standard, the medium, and the fine
  sourceImg = loadImage("input_2.jpg");
  medImg = loadImage("input_2_med.png");
  fineImg = loadImage("input_2_fine.png");
  
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
if(renderCounter < firstLayerCounter){
  for(var i=0;i<50;i++) {
    var x = floor(random(sourceImg.width));
    var y = floor(random(sourceImg.height));
    var pix = sourceImg.get(x, y);
    var mask = maskImg.get(x, y);
    var pointSize = 20;
    tint(pix);
    
    
//If statements allow for even rotation and distribution of different brush stroke types
      if(t == 1) {
        image(strokeImg1,x, y, pointSize, 4*pointSize);
      }
      if(t == 2) {
        image(strokeImg2,x, y, pointSize, 4*pointSize);
      }
      if(t == 3) {
        image(strokeImg3,x, y, pointSize, 4*pointSize);
      }
      if(t == 4) {
        image(strokeImg4,x, y, pointSize, 4*pointSize);
      }
      if(t == 5) {
        image(strokeImg5,x, y, pointSize, 4*pointSize);
      }
      if(t == 6) {
        image(strokeImg6,x, y, pointSize, 4*pointSize);
      }
      if(t == 7) {
        image(strokeImg7,x, y, pointSize, 4*pointSize);
      }
      if(t == 8) {
        image(strokeImg8,x, y, pointSize, 4*pointSize);
      }
      if(t == 9) {
        image(strokeImg9,x, y, pointSize, 4*pointSize);
      }
      if(t == 10) {
        image(strokeImg10,x, y, pointSize, 4*pointSize);
      }
      if(t == 11) {
        image(strokeImg11,x, y, pointSize, 4*pointSize);
      }

//Counting up the timer variable for use in if statements above   
      if(t < 12){
      t = t + 1;
      } else {
        t = 1;
      }
      
    renderCounter = renderCounter + 1;
  }
}
  if(renderCounter >= firstLayerCounter) {
        console.log("First layer done!")
        //noLoop();
        // saveBlocksImages();
      }
  
  
//
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//

//Second layer of paint, painting the "medium" level of detail  
if(mrenderCounter < secondLayerCounter){
  for(var j=0;j<50;j++) {
      var mx = floor(random(medImg.width));
      var my = floor(random(medImg.height));
      var mpix = medImg.get(x, y);
      var medDetail = 15
      tint(mpix);
      
  
        if(t == 1) {
          image(strokeImg1,mx, my, medDetail, 4*medDetail);
        }
        if(t == 2) {
          image(strokeImg2,mx, my, medDetail, 4*medDetail);
        }
        if(t == 3) {
          image(strokeImg3,mx, my, medDetail, 4*medDetail);
        }
        if(t == 4) {
          image(strokeImg4,mx, my, medDetail, 4*medDetail);
        }
        if(t == 5) {
          image(strokeImg5,mx, my, medDetail, 4*medDetail);
        }
        if(t == 6) {
          image(strokeImg6,mx, my, medDetail, 4*medDetail);
        }
        if(t == 7) {
          image(strokeImg7,mx, my, medDetail, 4*medDetail);
        }
        if(t == 8) {
          image(strokeImg8,mx, my, medDetail, 4*medDetail);
        }
        if(t == 9) {
          image(strokeImg9,mx, my, medDetail, 4*medDetail);
        }
        if(t == 10) {
          image(strokeImg10,mx, my, medDetail, 4*medDetail);
        }
        if(t == 11) {
          image(strokeImg11,mx, my, medDetail, 4*medDetail);
        }
  
      
      if(t < 12){
      t = t + 1;
      } else {
        t = 1;
      }
      
      mrenderCounter = mrenderCounter + 1;
  }
}  
  if(mrenderCounter > secondLayerCounter) {
      console.log("Second layer done!")
      //noLoop();
      // saveBlocksImages();
    }
  


//
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//--------------------------------------------------------------------
//
  
//Third and final layer, this one has tiny brush strokes for the fine detail
if(frenderCounter < thirdLayerCounter){
  for(var k=0;k<50;k++) {
    var fx = floor(random(fineImg.width));
    var fy = floor(random(fineImg.height));
    var fpix = fineImg.get(x, y);
    var fineDetail = 5
    tint(fpix);
    

      if(t == 1) {
        image(strokeImg1,fx,  fy, fineDetail, 4*fineDetail);
      }
      if(t == 2) {
        image(strokeImg2,fx, fy, fineDetail, 4*fineDetail);
      }
      if(t == 3) {
        image(strokeImg3,fx, fy, fineDetail, 4*fineDetail);
      }
      if(t == 4) {
        image(strokeImg4,fx, fy, fineDetail, 4*fineDetail);
      }
      if(t == 5) {
        image(strokeImg5,fx, fy, fineDetail, 4*fineDetail);
      }
      if(t == 6) {
        image(strokeImg6,fx, fy, fineDetail, 4*fineDetail);
      }
      if(t == 7) {
        image(strokeImg7,fx, fy, fineDetail, 4*fineDetail);
      }
      if(t == 8) {
        image(strokeImg8,fx, fy, fineDetail, 4*fineDetail);
      }
      if(t == 9) {
        image(strokeImg9,fx, fy, fineDetail, 4*fineDetail);
      }
      if(t == 10) {
        image(strokeImg10,fx, fy, fineDetail, 4*fineDetail);
      }
      if(t == 11) {
        image(strokeImg11,fx, fy, fineDetail, 4*fineDetail);
      }

    
    if(t < 12){
    t = t + 1;
    } else {
      t = 1;
    }
    
  }
  frenderCounter = frenderCounter + 1;
  }
}

if(frenderCounter > thirdLayerCounter) {
    console.log("Second layer done!")
    noLoop();
    // saveBlocksImages();
  }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

//Brush Stroke images obtained from http://www.onlygfx.com/14-grunge-brush-stroke-banner-png-transparent-vol-4/ under creative commons
