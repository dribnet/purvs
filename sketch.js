let sourceImg=null;
let maskImg=null;
let renderCounter=0;

//I have used some of Tom White's example code for my own project
//https://bl.ocks.org/dribnet/2b5fdedb10367f0db717755169946832/b9eca66520db6771e0e0299da527af99496efb95



function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
}
let paint = [];

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(180);
  sourceImg.loadPixels();
  maskImg.loadPixels();

}

const pointSize = 35;
const ellipseSize = 60;

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
  	let x = int(i * pointSize);
  	let y = int(renderCounter * pointSize);
  
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
  

   fill(pix);
   stroke(pix);
   strokeWeight(4)


 function circ(x, y,st, s) {
  push();
  translate(x, y);
  scale(s);
  stroke(st);

noStroke();
  ellipse(0,0, 55,55);


  ellipse(0,-20,30,30);
  ellipse(20,0, 30,30);
  ellipse(-20,0,30,30);
  ellipse(0,20,30,30);

  
  ellipse(-35,-35,20,20);
  ellipse(35,-35,20,20);
  ellipse(35,35,20,20);
  ellipse(-35,35,20,20);
  
  pop();
}
	

    if(mask[0] > 128) {
      
;
      strokeWeight(4)
    	 fill(pix);
      circ(x, y, pix, .5);
      // rect(x, y, pointSize, pointSize);
    }
    else {
      fill(0);
      stroke(pix);
      strokeWeight(1);

      rect(x, y, pointSize, pointSize);
      
     
    noFill();

	for (let j = 0; j < 20; j++){
  var x1 = x+20;
  var y1 = y+20;
  var yr = y1 + random(-20, 20)
  var xr = x1 + random(-20, 20)
   	
   	let paint = line(x1, y1, xr, yr);
  	paint[j]
   }

}
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/pointSize) {
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