// ***Varible list***
// *angle; basic varible of rotation angle
// *w; the width of shapes
// *ma; The magic angle of isometric perjection
// *maxD; the furthest distence of each pixel shape
// *x; x axis coordinate
// *y; y axis coordinate
// *h; general height, but define it in different condition
// *g; the varible to control the length of shape
// *offset; the offset between the 3D shapes
// *pix; get the colour of pixels
// *mask[]; the mask image, the value base on the colour range


let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// angle is the rotation angle
let angle = 0;
// w is the width of each drawing element
let w = 6;
//  The magic angle for isometric perjection is atan(1/sqrt(2));
let ma;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
  
}

function setup () {
  let main_canvas = createCanvas(1080, 1080, WEBGL);
  main_canvas.parent('canvasContainer');
  ma = 0.6 * atan(1 /sqrt(2));
  maxD = dist(0,0,200,200);

  sourceImg.loadPixels();
  maskImg.loadPixels();
}



function draw() {

  background(255);
  // control the height, distance, angle of viewpoint
  perspective(52/100*PI, 1, 0.1, 100); 
  translate(0, -300, -40);
  rotateX(-HALF_PI);
  rotateY(3*PI/10);
  rotateZ(3*PI/10);
  rectMode(CENTER);
  

  // draw each rows and columns
  for (let z = 0; z < height; z += w ) {
  
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width/2, height/2);
   // the distance between shapes
      let offset = map(d, 0, maxD, -2, 2);
      let pix = sourceImg.get(x, z);
      let mask = maskImg.get(x, z);
      fill(pix);
      let a = angle + offset;
  // the same thing like int in processing, integer the value of h
      let h = floor(map(cos(a), -1, 1, 100, 200));
      let g; 
      

      translate(x - width/2, 0, z - height/2);



      // draw differen shapes in 50% gray area if there is
      // draw shapes for black area in mask
      // draw shapes for white area in mask
      if(mask[0] < 128) {
        h = map(cos(h)-1,1,-50,20);
        g = map(sin(g) -1, 1,-1,2);
        box(w-g, h, w-g);
      }else if (mask[0] > 128){h = map(tan(h),-1,1,50,100)

       cylinder(w-2,h);
      }
       
      
      
      offset += 0.1

      pop();
    }
  }
  angle += 0.1

  console.log("Done!")
  noLoop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
