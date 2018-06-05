/* Set to true to make final high-resolution version */
const finalVersion = true;
const col =80;

/* Default versions of variables */
let elementSpacing = 60;
let circleSize = 50;
let squareSize = 30;
let pointSize = 30;
/* Override some variables with high-resolution final version */
if (finalVersion) {
  elementSpacing = 60;
  circleSize = 50;
  squareSize = 30;
  pointSize = 30;

}

let sourceImg=null;

//mask for model
let maskImg=null;

//mask2 for background
let maskImg2=null;

let renderCounter=0;

function preload() {

  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
  maskImg2 = loadImage("mask_3.5.png");

  //Hair and skin png image
  plx = loadImage("3.png"); 
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(80);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImg2.loadPixels();


}



function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg2.get(x,y);
    let halfSize = squareSize/2;
    if(mask[0] > 128) {

    }
    else {
      // add random offsets
      x = x + dx;
      y = y + dy;
      // convert to grayscale (remove color, keep brightness in hsluv colorspace)

      //cross glyph
      //don't know why the cross glyphs wouldn't show if put in a function.
      push();
      fill(pix);
      stroke(80);
      strokeWeight(5);
      rect(x-halfSize-5, y-halfSize-20, squareSize-5, squareSize-10);   
      rect(x-halfSize+30, y-halfSize-20, squareSize-5, squareSize-10); 
      pop();   
      push(); 
      fill(pix);
      strokeWeight(5);
      rect(x-halfSize+15, y-halfSize-50, squareSize-10, squareSize+80);
      pop(); 
    }
    if(mask2[0] >128){
      //outfit
      push();
      fill(pix);
      stroke(pix);
      strokeWeight(12);
     rect(x,y,50,50);
      pop();
    }
    else{
      //heart glyph background
      push();
      fill(col);
      heart(x,y);
      pop();
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
    console.log("Done!")
    noLoop();

    //below are the objects that I place on top of the finished 
    //rendering image to achieve final look

    image(plx,560,990);
    star();
    cross2();
    peace();

    // saveBlocksImages();
  }
}
function heart(x,y){
  push();

  noStroke();
  translate(x,y);
  scale(0.2);

  push();
  fill(255);
  stroke(255);
  strokeWeight(8);

    line(160,  82,190,  58);
    line(220,  52,250,  57);
    line(275,  80,290,  100);
    line(294,  120,292,  160);
    line(51,  68,90,  56);
    line(120,  60,135,  75);
    line(40,  85,25,  110);
    line(286,  175,272,  200);
    line(180,  280,210,  255);
    line(240,  235,260,  218);
    line(90,  240,120,  270);
    line(135,  285,145,  295);
    line(20,  125,30,  160);
    line(40,  180,65,  220);

   pop();

    triangle( 110, 50, 50, 70, 150, 90);
    triangle( 150, 90, 200, 50, 200, 110);
    triangle( 200, 50, 250, 110, 200, 110);
    triangle( 200, 50, 265, 60, 250, 110);
    triangle( 265, 60, 275, 120, 250, 110);
    triangle( 275, 120, 265, 60, 295, 110);
    triangle( 295, 110, 290, 160, 275, 120);
    triangle( 275, 120, 290, 160, 210, 140);
    triangle( 275, 120, 210, 140, 250, 110);
    triangle( 250, 110, 200, 110, 210, 140);
    triangle( 210, 140, 200, 100, 150, 90);
    triangle( 50, 70, 150, 90, 80, 100);
    triangle( 50, 70, 80, 100, 20, 120);
    triangle( 20, 120, 120, 120, 80, 100);
    triangle( 120, 120, 80, 100, 150, 90);
    triangle( 150, 90, 140, 160, 210, 140);
    triangle( 140, 160, 150, 90, 120, 120);
    triangle( 140, 160, 210, 140, 240, 200);
    triangle( 240, 200, 210, 140, 270, 210);
    triangle( 270, 210, 290, 160, 210, 140);
    triangle( 270, 210, 240, 200, 150, 300);
    triangle( 150, 300, 240, 200, 160, 240);
    triangle( 160, 240, 240, 200, 140, 160);
    triangle( 140, 160, 120, 120, 130, 200);
    triangle( 130, 200, 140, 160, 160, 240);
    triangle( 160, 240, 150, 300, 130, 200);
    triangle( 150, 300, 120, 260, 130, 200);
    
    triangle( 150, 300, 130, 200, 70, 220);

    triangle( 80, 210, 130, 200, 80, 180);
    triangle( 80, 180, 130, 200, 120, 120);
    triangle( 120, 120, 90, 120, 80, 180);
    triangle( 80, 180, 90, 120, 20, 120);
    triangle( 20, 120, 80, 180, 30, 170);
    triangle( 30, 170, 80, 180, 70, 220);
    triangle( 70, 220, 80, 180, 80, 210);
    triangle( 70, 220, 80, 210, 130, 200);

    pop();
}
function peace(){

  push();
  scale(0.7);
  translate(90,800);
  push();
  fill(0);
  textSize(250);
  text('^', 435, 360);
  pop();
  push();
  strokeWeight(30);
  stroke(0);
  noFill();
  ellipse(500,200,200,200);
  pop();

  push();
  fill(0);
  strokeWeight(10);
  line(500,200,450,280);
  line(500,200,550,280);
  pop();

  fill(0);

  rect(490,100,20,200);
  pop(); 

  pop();
}

function cross2(){
  push();

  fill(255);
  rect(530,300,50,550);
  rect(410,420,300,50);
  pop();
}
function star(){
  push();
  translate(545,600);
  scale(0.25);
  noFill();
  stroke(255);
  strokeWeight(20);
  //big
  triangle(500,100,200,550,800,550);
  //small
  triangle(500,100,400,250,600,250);
  triangle(300,400,200,550,400,550);
  triangle(700,400,600,550,800,550);
  //big
  triangle(500,700,200,250,800,250);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}




