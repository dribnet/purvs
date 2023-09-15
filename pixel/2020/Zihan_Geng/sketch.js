let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";



function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  // noStroke();
  background(67, 73, 45);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function leaves (x, y, pointSize){
    push()
    var w = 10
    beginShape()
    if(x<1000){
        vertex(x-w, y-w)
        quadraticVertex(x-w, y+w, x+w, y+w)
        quadraticVertex(x+w, y-w, x-w, y-w)
        endShape(CLOSE)
    }
    else{
        vertex(x+w, y-w)
        quadraticVertex(x-w, y-w, x-w, y+w)
        quadraticVertex(x+w, y+w, x+w, y-w)
        endShape(CLOSE)
    }

    pop()
}
function draw () {

    angleMode(DEGREES)
  for(let i=0;i<2000;i++) {
      let x = floor(random(sourceImg.width));
      let y = floor(random(sourceImg.height));
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix)
      noStroke()
    if(mask[0] > 200) {
      let pointSize = 10;
      push()
      if(pix[0]<90){
          fill(pix[0],pix[1],pix[2],200);
          leaves(x, y, pointSize)
      }
      else{
          fill(pix[0],pix[1],pix[2],80)
          ellipse(x,y,10, 10)
      }
      pop()

    }
    if(mask[0] > 150 &&mask[0]<200) {
      let pointSize = 5;
      push()
      if(pix[0]<90){
          fill(pix[0]*2.5,pix[1]*2.5,pix[2]*2.5,50);
          leaves(x, y, pointSize)
      }
      else{
          fill(pix[0],pix[1],pix[2],20)
          ellipse(x,y,10, 10)
      }
      pop()

    }


}

for(let i=0;i<1000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);
    stroke(pix)
    strokeWeight(1)

  if(mask[0] < 100){
      let pointSize = 45;
      noStroke();
       fill(pix[0],pix[1],pix[2],20);
      ellipse(x, y, pointSize*2, pointSize)
  }
}
    for(let i=0;i<4000;i++){
        let pointSize = 10;
        let x = floor(random(sourceImg.width));
        let y = floor(random(sourceImg.height));
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        stroke(200)
        strokeWeight(1)

        if(mask[0]>100 && mask[0]< 150){
            let star = 5
            line(x+1.5*star, y, x-1.5*star, y)
            line(x-star, y-star, x+star, y+star)
            line(x+star, y-star, x-star, y+star)
            line(x, y-1.5*star, x, y+1.5*star)


        }
    }


  renderCounter = renderCounter + 1;
  if(renderCounter > 15) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
