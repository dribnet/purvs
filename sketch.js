let finalVersion = false; 
let elementSpacing = 15;
//let elementSpacing = 20;
let squareSize = 45;
let circleSize = 35;

if(finalVersion) {
let elementSpacing = 20;
let squareSize =45;
let circleSize = 35;
}

let sourceImg=null;
let maskImg=null;
let renderCounter =0;



function preload() {
  //sourceImg = loadImage("input_1.jpg");
 // maskImg = loadImage("mask_1.png");

// sourceImg = loadImage("input_2.jpg");
//maskImg = loadImage("mask_2.png");

   sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}


function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  
  
   //background(247, 111, 161);
   //background(169, 229, 192)
   background(244, 188, 66)
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


function p1(x,y,c,s){
	push();
	translate(x,y);
	scale(s);
	fill(c)
	ellipse(0,0,80,80)
  noStroke();
  for (var i = 0; i < 10; i ++) {
    rect(0, 30, 15, 80);
    rotate(PI/4);
  }

	pop();
}




function convertRgbToHsluv(c) {
return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
   let x = int(i * elementSpacing);
   let y = int(renderCounter * elementSpacing);
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2))

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
   

    fill(pix);

    if(mask[0] > 128) {

     // p1(x, y, pix, 0.2);
     p1(x, y, pix, 0.25);

      
    
      
    }
    else {
    x = x + dx;
    y = y + dy;
      let hsluvColor = convertRgbToHsluv(pix);
      fillHsluv(0,0, hsluvColor[2]/2);
      let halfSize = squareSize/2;

       rect(x-halfSize, y-halfSize, squareSize, squareSize); 
      // rect(x-halfSize, y-halfSize, squareSize, squareSize-30); 


      //rect(x-halfSize, y-halfSize, squareSize, squareSize-40); 

      //p1(x, y, pix, 0.1);

           
    }
  }
  renderCounter  = renderCounter  + 1;
  if(renderCounter> 1920/elementSpacing) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}





function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
