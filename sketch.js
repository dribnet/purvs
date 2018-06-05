//Made by Ben Spearman
//MDDN 242 Creative Coding II, 2018
var sourceImg=null;
var maskImg=null;
var renderCounter=0;
//Creating a "time" variable
var t1 = 1;
var t2 = 1;
var t3 = 1;
var rendlay1 = 150;
var rendlay2 = rendlay1 + 200;
var rendlay3 = rendlay2 + 250;
var rendlay4 = rendlay3 + 100;
var rendlay5 = rendlay4 + 100;
var rendstop = rendlay5 + 100;

var pointSize = 30;
var medDetail = 15;
var fineDetail = 10;
var fine2Detail = 5;
var fine3Detail = 3;
var fine4Detail = 2;

function preload() {
//Loading the three different image layers, the standard, the medium, and the fine
  sourceImg = loadImage("input_2.jpg");
  medImg = loadImage("input_2_med.png");
  fineImg = loadImage("input_2_fine.png");
  fine2Img = loadImage("input_2_fine2.png");
  fine3Img = loadImage("input_2_fine3.png");
  fine4Img = loadImage("input_2_fine4.png");
  
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
  fine2Img.loadPixels();
  fine3Img.loadPixels();
  fine4Img.loadPixels();
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

//Third layer this one has tiny brush strokes for the fine detail
if(renderCounter > rendlay2 && renderCounter < rendlay3){
  thirdLayer();
}

//Fourth layer, focuses on the face as a whole
if (renderCounter > rendlay3 && renderCounter < rendlay4){
  fourthLayer();
}

//Fifth layer, focuses on the beard, mouth, eyes, area around the eyes
if (renderCounter > rendlay4 && renderCounter < rendlay5){
  fifthLayer();
}

//Sixth layer, focuses on the beard and eyes themselves
if (renderCounter > rendlay5 && renderCounter < rendstop){
  sixthLayer();
}

renderCounter = renderCounter + 1;
console.log(renderCounter);
console.log(rendstop);

if(renderCounter >= rendstop) {
        console.log("Done!")
        noLoop();
        saveBlocksImages();
      }
!
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

//---------------------------------4444444444444444444444444444444444-----------------------------------//

function fourthLayer(){
  for(var j=0;j<75;j++) {
      x = floor(random(sourceImg.width));
      y = floor(random(sourceImg.height));
      pix = fine2Img.get(x, y);
      tint(pix);
      
        if(t2 == 1) {
          image(strokeImg1,x, y, fine2Detail, 4*fine2Detail);
        }
        if(t2 == 2) {
          image(strokeImg2,x, y, fine2Detail, 4*fine2Detail);
        }
        if(t2 == 3) {
          image(strokeImg3,x, y, fine2Detail, 4*fine2Detail);
        }
        if(t2 == 4) {
          image(strokeImg4,x, y, fine2Detail, 4*fine2Detail);
        }
        if(t2 == 5) {
          image(strokeImg5,x, y, fine2Detail, 4*fine2Detail);
        }
        if(t2 == 6) {
          image(strokeImg6,x, y, fine2Detail, 4*fine2Detail);
        }
        if(t2 == 7) {
          image(strokeImg7,x, y, fine2Detail, 4*fine2Detail);
        }
        if(t2 == 8) {
          image(strokeImg8,x, y, fine2Detail, 4*fine2Detail);
        }
        if(t2 == 9) {
          image(strokeImg9,x, y, fine2Detail, 4*fine2Detail);
        }
        if(t2 == 10) {
          image(strokeImg10,x, y, fine2Detail, 4*fine2Detail);
        }
        if(t2 == 11) {
          image(strokeImg11,x, y, fine2Detail, 4*fine2Detail);
        }

      if(t2 < 12){
      t2 = t2 + 1;
      } else {
        t2 = 1;
      }
  }
}


//-------------------------------------------55555555555555555555555555555555555---------------------------//

function fifthLayer(){
  for(var j=0;j<75;j++) {
      x = floor(random(sourceImg.width));
      y = floor(random(sourceImg.height));
      pix = fine3Img.get(x, y);
      tint(pix);
      
        if(t2 == 1) {
          image(strokeImg1,x, y, fine3Detail, 4*fine3Detail);
        }
        if(t2 == 2) {
          image(strokeImg2,x, y, fine3Detail, 4*fine3Detail);
        }
        if(t2 == 3) {
          image(strokeImg3,x, y, fine3Detail, 4*fine3Detail);
        }
        if(t2 == 4) {
          image(strokeImg4,x, y, fine3Detail, 4*fine3Detail);
        }
        if(t2 == 5) {
          image(strokeImg5,x, y, fine3Detail, 4*fine3Detail);
        }
        if(t2 == 6) {
          image(strokeImg6,x, y, fine3Detail, 4*fine3Detail);
        }
        if(t2 == 7) {
          image(strokeImg7,x, y, fine3Detail, 4*fine3Detail);
        }
        if(t2 == 8) {
          image(strokeImg8,x, y, fine3Detail, 4*fine3Detail);
        }
        if(t2 == 9) {
          image(strokeImg9,x, y, fine3Detail, 4*fine3Detail);
        }
        if(t2 == 10) {
          image(strokeImg10,x, y, fine3Detail, 4*fine3Detail);
        }
        if(t2 == 11) {
          image(strokeImg11,x, y, fine3Detail, 4*fine3Detail);
        }

      if(t2 < 12){
      t2 = t2 + 1;
      } else {
        t2 = 1;
      }
  }
}



//----------------------------------------6666666666666666666666666666---------------------------------------------//


function sixthLayer(){
  for(var j=0;j<75;j++) {
      x = floor(random(sourceImg.width));
      y = floor(random(sourceImg.height));
      pix = fine4Img.get(x, y);
      tint(pix);
      
        if(t2 == 1) {
          image(strokeImg1,x, y, fine4Detail, 4*fine4Detail);
        }
        if(t2 == 2) {
          image(strokeImg2,x, y, fine4Detail, 4*fine4Detail);
        }
        if(t2 == 3) {
          image(strokeImg3,x, y, fine4Detail, 4*fine4Detail);
        }
        if(t2 == 4) {
          image(strokeImg4,x, y, fine4Detail, 4*fine4Detail);
        }
        if(t2 == 5) {
          image(strokeImg5,x, y, fine4Detail, 4*fine4Detail);
        }
        if(t2 == 6) {
          image(strokeImg6,x, y, fine4Detail, 4*fine4Detail);
        }
        if(t2 == 7) {
          image(strokeImg7,x, y, fine4Detail, 4*fine4Detail);
        }
        if(t2 == 8) {
          image(strokeImg8,x, y, fine4Detail, 4*fine4Detail);
        }
        if(t2 == 9) {
          image(strokeImg9,x, y, fine4Detail, 4*fine4Detail);
        }
        if(t2 == 10) {
          image(strokeImg10,x, y, fine4Detail, 4*fine4Detail);
        }
        if(t2 == 11) {
          image(strokeImg11,x, y, fine4Detail, 4*fine4Detail);
        }

      if(t2 < 12){
      t2 = t2 + 1;
      } else {
        t2 = 1;
      }
  }
}
//Brush Stroke images obtained from http://www.onlygfx.com/14-grunge-brush-stroke-banner-png-transparent-vol-4/ under creative commons
