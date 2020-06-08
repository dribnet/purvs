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
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


function draw () {

    for(let i=0; i<10000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    strokeWeight(3);

  //  console.log(mask[0]);

      if(mask[0] == 255) { //White

        push();
           let pointSize1 = 100;
           noFill();
           strokeWeight(1.5);
           let grass = random(1,6);
              if (grass < 2) {
              arc(x, y, 50, 50, PI, PI + QUARTER_PI);
              arc(x,y,50,50,0,QUARTER_PI);
}
    else{
          arc(x, y, 30,30, PI, PI + QUARTER_PI);
          arc(x,y,30,30,0,QUARTER_PI);
 }}
      else{
        if(mask[0] > 100 && mask[0] < 250){ //Light Grey
            noFill();
            stroke(pix);
            strokeWeight(1.5);
            arc(x, y, 40, 40, PI, PI + QUARTER_PI);
  }
      else {
        if(mask[0] > 10 && mask[0] < 100){ //Dark Grey

          if(pix[0] > pix[2]){
          strokeWeight(3);
          let pixMod = sourceImg.get(x, y);
          pixMod[0] = pixMod[0]*3;
          pixMod[1] = pixMod[1];
          pixMod[2] = pixMod[2];

          push();
          let flowerSize1 = 15;
          fill(pixMod);
          strokeWeight(3);
          drawFlower(x,y,flowerSize1);
          pop();
}}
      else {
        if (mask[0] == 0){ //Black
            let dice = random(1,6);
            if (dice < 4) {
              let flowerSize2 = 10;
              strokeWeight(6);
              drawFlower(x, y, flowerSize2);
}
    else {
        let flowerSize3 = 5;
            drawFlower(x,y,flowerSize3);

}}}}}}

  function drawFlower(x,y,size){

let pix = sourceImg.get(x, y);

            push();
            translate (x,y);
            for(var i = 0; i < 10; i++){
            ellipse(size, -size, 5, 2);
            rotate(PI/5); }
            pop();

            push();
            fill(pix);
          //  strokeWeight(5);
            ellipse(x,y,1);
            pop();

  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
  // saveArtworkImage(outputFile);
  }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}}
