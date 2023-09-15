let sourceImg=null;
let maskImg=null;
let renderCounter=0;

//variables for partcles
var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
var fr;
var particles = [];
var flowfield;

//made a else if type thing where it loads all images in sketch
function preload() {
  SourceImgName = "input_2.jpg";
  maskImgName = "mask_2.png"
  sourceImg = loadImage(SourceImgName);
  maskImg = loadImage(maskImgName);
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  rectMode(CENTER);

  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();

  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols/2 * rows/2);

//else if came in use when I had to declare the maskImg, now works for pic 2 + 3
  for (var i = 0; i < 50; i++) {
    particles[i] = new Particle(maskImg);
    }
  }

function draw () {
//pic 1 custom pixel
if(SourceImgName=="input_1.jpg") {

  const pointSize = 10;
  //need to use due to use of rectMode CENTER
  translate(pointSize,pointSize);

  for(let i=0;i<1080;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;

  //maps for image one to draw squares at proportionate sizes
    let opc = map(mask[0],0,255,255,0);
    let size = map(mask[0],0,255,5,1);

    if(mask[0] < 255 && mask[0] > 0) {
      fill(200,200,255,opc);
      noStroke();
      rect(x-halfSize, y-halfSize, pointSize*size, pointSize*size);
     }

    else {
      noStroke();
      fill(pix,20);
      rect(x-halfSize, y-halfSize, pointSize, pointSize);
    }
  }
}
//pic 2+3 custom pixel
  else if(SourceImgName=="input_2.jpg" || SourceImgName=="input_3.jpg") {

    const pointSize = 10;

    translate(pointSize,pointSize);

      for(let i=0;i<1080;i++) {
        let x = int(i * pointSize);
        let y = int(renderCounter * pointSize);
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        let halfSize = pointSize/2;

        let size = map(mask[0],0,255,5,1);

        if(mask[0] < 255 && mask[0] > 0) {
          fill(pix);
          noStroke();
          rect(x-halfSize, y-halfSize, pointSize, pointSize);

          push();
          translate(-pointSize,-pointSize);

          var yoff = 0;
          for (var y1 = 0; y1 < rows; y1++) {
            var xoff = 0;
            for (var x1 = 0; x1 < cols; x1++) {
              var index = x1 + y1 * cols;
              var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
              var v = p5.Vector.fromAngle(angle);
              v.setMag(1);
              flowfield[index] = v;
              xoff += inc;
            }
            yoff += inc;

            zoff += 0.0003;
          }

          for (var j = 0; j < particles.length; j++) {
            particles[j].follow(flowfield);
            particles[j].update();
            particles[j].edges();
            particles[j].show();
          }

          fr.html(floor(frameRate()));

          pop();
        }
          
        else {
          noStroke();
          fill(pix);
          rect(x-halfSize, y-halfSize, pointSize, pointSize);
        }
      }
    }

  renderCounter = renderCounter + 1;
  if(renderCounter > 1920) {
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
