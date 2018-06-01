//I have used some of Tom White's example code for my own project
//https://bl.ocks.org/dribnet/2b5fdedb10367f0db717755169946832/b9eca66520db6771e0e0299da527af99496efb95
//https://bl.ocks.org/dribnet/2b5fdedb10367f0db717755169946832/a0a30d1ab172f2695fffb48b90e7aec031b9f6ce
//https://bl.ocks.org/dribnet/2b5fdedb10367f0db717755169946832/6625811ac946e2ad2689e7ed69441f47dc25643c



let elementSpacing = 25;
let circleSize = 50;
let squareSize = 40;
let pointSize = 40;

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("03third.jpg");
  maskImg = loadImage("03thirdbw.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  sourceImg.loadPixels();
  maskImg.loadPixels();
}



function glyph(x, y,c, s) {
  push();
  translate(x, y);
  scale(s);
  stroke(c);
  strokeWeight(10);

  ellipse(0,0, 50,50);

  noFill();
  ellipse(40,40,10,10);
  ellipse(45,45,5,5);
  pop();
}
//const pointSize = 40;

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
  	let x = int(i * elementSpacing);
  	let y = int(renderCounter * elementSpacing);
    
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    if(mask[0] > 128){
    	glyph(x, y, pix, 0.5);
    }
    else{
      fill(pix);
    	rect(x-halfSize, y-halfSize, pointSize, pointSize);
    	}
    }
  

  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
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
