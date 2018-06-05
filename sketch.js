const finalVersion = true;

var xoff = 0;
var yoff = 0;

sizeSq = 30;
halfSizeSq = sizeSq / 2;
scl = 5;
bend = 15;
var pos = [];

var animate = [];
var num = 0;

var xSZ = 216;
var ySZ = 384;

sourceImg = null;
maskImg = null;
renderCounter = 0;

function preload() {
  sourceImg = loadImage("3.jpg");
  maskImg = loadImage("3.png");
}

function setup() {


  main_canvas = createCanvas(xSZ * scl, ySZ * scl);
  main_canvas.parent('canvasContainer');


  imageMode(CENTER);


  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();



  for (i = 0; i < ySZ; i++) {
    pos[i] = [];
    for (j = 0; j < xSZ; j++) {
      pos[i][j] = [];

      pos[i][j][0] = map(noise(i * yoff), 0, 1, j * scl, (j + 1) * scl);
      pos[i][j][1] = map(noise(j * xoff), 0, 1, i * scl, (i + 1) * scl);

      xoff += 0.01;

    }
    yoff += 0.01;

  }
}



function draw() {

  for (i = 0; i < ySZ; i++) {
    for (j = 0; j < xSZ; j++) {

      pix = sourceImg.get(pos[i][j][0], pos[i][j][1]);
      mask = maskImg.get(pos[i][j][0], pos[i][j][1]);



   
      
       if (mask[0] > 50) {
         
         let brightness = pix[0] + pix[1] + pix[2] /3;
         pix[3] = 100;
         
        
        stroke('rgba(230,230,230,0.25)');
        print("y = " + i + " x = " + j);
        animate[num] = [];
        animate[num][0] = pos[i][j][0] * scl;
        animate[num][1] = pos[i][j][1] * scl;
        animate[num][3] = brightness/255 * sizeSq;
        animate[num][4] = pix;

        num++;
      }else{
            stroke('rgba(230,230,230,0.25)');
         strokeWeight(1);

      if (j - 1 >= 0) { // to the left
        line(pos[i][j][0] * scl, pos[i][j][1] * scl, pos[i][j - 1][0] * scl, pos[i][j - 1][1] * scl);
      }
      if (i - 1 >= 0) { // upper connection
        line(pos[i][j][0] * scl, pos[i][j][1] * scl, pos[i - 1][j][0] * scl, pos[i - 1][j][1] * scl);
      }
       if (j + 1 < xSZ) { // to the left
        line(pos[i][j][0] * scl, pos[i][j][1] * scl, pos[i][j + 1][0] * scl, pos[i][j + 1][1] * scl);
      }
      if (i + 1 < ySZ) { // upper connection
        line(pos[i][j][0] * scl, pos[i][j][1] * scl, pos[i + 1][j][0] * scl, pos[i + 1][j][1] * scl);
      }

      }

    }
  }  for (num = 0; num < animate.length; num++) {
   noStroke();
           print("color value" + animate[num][4]);
      fill(animate[num][4]);
      rect(animate[num][0] - halfSizeSq, animate[num][1] - halfSizeSq, animate[num][3],animate[num][3]);
  }
  
  
  print("done!");
  noLoop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}