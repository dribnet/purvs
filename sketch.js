let sourceImg=null;
let maskImg=null;
//let renderCounter=0;
let curRow = 0;
  
  // let colours = [
  // "219, 210, 213, 150",
  // "218, 223, 232, 150",
  // "168, 161, 164, 150",
  // "255, 232, 241, 150",
  // "232, 251, 255, 150"
  // ];
//let colour = random(0-4);
//let colour = Math.ceil(Math.random() * 4);
//let colour.sort(function(a, b) {return 0.5- Math.random()});
//let colour = colours[Math.floor(Math.random()* 4)];
//let colour = Math.random() * 4;
//let blurCol = colours[colour];

function preload() {
  sourceImg = loadImage("input_3.png");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//let pointSize = 50;
let elementSpacing = 15; //10;
let elementSpacing2 = 50;
//let elementSpacingH = 20;
let squareSize = 15;

let drawPass = 0;

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = i * elementSpacing;
    let y = curRow * elementSpacing;
   
    let x2 = i * elementSpacing2;
    let y2 = curRow * elementSpacing2;
    let dx = floor(random(elementSpacing2/2));
    let dy = floor(random(elementSpacing2/2));
    let circleSize = (random(30, 70));

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    let halfSize = squareSize/2;

    

    fill(pix);

    if((mask[0] > 160)&&(drawPass == 0)) {
      rect(x-halfSize, y-halfSize, squareSize*2, squareSize*2);   
    }  
    if ((mask[0] < 140)&&(drawPass == 0)){
      rect(x-halfSize, y-halfSize, squareSize/2, squareSize*2);  
    }
      if((mask[0] >141 && mask[0] <159)&&(drawPass == 1)) {
      // x2 = x2 + dx;
      // y2 = y2 + dy;
      let nx = x2 / 5.0;
      let ny = y2 / 30.0;
      let jit_x = 80*(noise(nx, ny, 0)-0.5);
      let jit_y = 80*(noise(nx, ny, 10)-0.2)
      //fill(219, 210, 213, 150);
      //fill(random(colours));
      //fill(blurCol);
      fill(219, 210, 213, 150)
      ellipse(x + jit_x, y + jit_y, circleSize, circleSize);
    }

}

  curRow = curRow + 1;
  if(curRow*elementSpacing > 1920) {
  	if(drawPass == 0){
  		curRow = 0;
  		drawPass = 1;
  	} else {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
}
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
