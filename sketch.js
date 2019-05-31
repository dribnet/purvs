let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

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
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

     // rect(0,0,704, 1252);
  for(let i=0;i<10000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 7;
    let offset = pointSize - 4;
    let offset2 = pointSize - 3;
    let halfSize = 20;
     let x1 = floor(random(sourceImg.width));
      let y1 = floor(random(sourceImg.height));

    fill(pix);
    if(mask[0] > 128) {
      noStroke();
      ellipse(x, y, pointSize, pointSize);
      
    }
    else {
        noStroke();
        rect(x, y, halfSize, halfSize);
    
    
    }

    fill(250, 0 ,0);
    // rect(100,100, 300, 300);
    stroke(255, 0,0);
    strokeWeight(1);
    line(538, 202, 533, 526);
    line(538, 202, 570, 644);
    line(538, 202, 57, 319);
    line(533, 526, 570, 644);
    line(459, 440, 57, 319);
    line(57, 319, 533, 526);
    line(57, 319, 533, 526);
     line(374, 840, 702, 600);

    line(570, 644, 57, 319);
    line(57, 319, 374, 840);
    line(374, 840, 459, 440);

    ellipse(538, 202, 8,8);
    ellipse(533, 526, 8,8);
    ellipse(570, 644, 8,8);
    ellipse(57, 319, 8,8);
    ellipse(374, 840, 8,8);
    ellipse(459, 440, 8,8);
     
    noStroke();
    fill('#dbdfa8');
    rect(515, 160,130,30);
     fill(171, 176, 106, 5);
    rect(520, 165,130, 30);
    fill(0);
    textFont('Chalkduster');;
    text('VICTOM Blood', 520, 180);

  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
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
