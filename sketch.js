let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "denkmal.jpg";
let maskFile   = "denkmalMask.png";
let outputFile = "artwork_2.png";

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

  //naturschutzgebiet sign
  sourceImg.loadPixels();
  maskImg.loadPixels();

}

const chunkHeight =15;
const chunkWidth =15;

function draw () {
  for(let y=0; y<height; y=y+chunkHeight){
    for(let x=0; x<width; x=x+chunkWidth){
      let pixl = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      fill(pixl);
      let x2 = x+floor(random(20));
      let y2 = y+floor(random(20));
      let x3 = x-floor(random(20));
      let y3 = y-floor(random(20));
      let x4 = x+floor(random(25));
      let y4 = y+floor(random(25));
      let x5 = x-floor(random(25));
      let y5 = y-floor(random(25));
      if (mask[0]>99 && mask[0]<101) {
        noStroke();
        rect(x,y,chunkWidth,chunkHeight);
        stroke(200);
        strokeWeight(1);
        triangle(x-chunkWidth,y+chunkHeight,x,y,x+chunkWidth,y+chunkHeight);
        triangle(x,y,x,y+chunkHeight,x+(chunkWidth/2),y+chunkHeight);
      }
      else if (mask[0] > 101 && mask[0]<151) {
        // stroke(155);
        // let cwx = chunkWidth/2;
        // let chx = chunkHeight/2;
        // rect(x,y,cwx,chx);
        // rect(x+cwx,y,cwx,chx);
        // rect(x,y+chx,cwx,chx);
        // rect(x+cwx,y+chx,cwx,chx);
        noStroke();
        fill(pixl)
        rect(x,y,chunkWidth,chunkHeight);
      } 
      else if (mask[0]>199 && mask[0]<201) {
        stroke(255);
        strokeWeight(1);
        ellipse(x,y,15,15);
      }
      else if (mask[0]>250) {
        stroke(pixl);
        strokeWeight(2);
        line(x,y,x+chunkWidth,y+chunkHeight);
        line(x,y,x2,y2);
        line(x,y,x3,y3);
        line(x,y,x4,y4);
        line(x,y,x5,y5);

      }
      else{
        stroke(pixl);
        strokeWeight(0.5);
        //rect(x,y,chunkWidth,chunkHeight);
        // let cpx= x+(chunkWidth/2);
        // let cpy= y+(chunkHeight/2);
         let hc = chunkHeight/2;
        // let xmax= x+chunkHeight;
        // let ymax= y+chunkWidth;
        
        // line(x,y+hc,cpx,cpy);
        // line(x,y,cpx,cpy);
        // line(x,ymax,cpx,cpy);
        // line(cpx,y,cpx,cpy);
        // line(cpx,ymax,cpx,cpy);
        // line(cpx,cpy,xmax,ymax);
        // line(cpx,cpy,xmax,y+hc);
        // line(cpx,cpy,xmax,y);

        for (let i =0; i < 4; i++) {
          let x1 = x-floor(random(chunkWidth));
          let x2 = x-floor(random(chunkWidth));
          let y1 = y+floor(random(chunkHeight));
          let y2 = y-floor(random(chunkHeight));
          line(x1,y2,x,y);
          line(x1,y1,x,y);
          line(x,y,x2,y2);
          line(x,y,x2,y1);
        }

      }
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
