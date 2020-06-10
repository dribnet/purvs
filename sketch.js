let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
// using first image as main image
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();

}
  const tileHeight = 10; //height of each pixel
  const tileWidth = 10; //width of each pixel

  const x_step = 15; //space between this varable and tile width (5)
  const y_step = 15; //space between this variable and tile height (5)


function draw () {

      /* nested for loop which gathers pixels from sourceImg and returns its x & y values*/
    for(var x = 0; x < sourceImg.width; x = x + x_step){
      for(var y = 0; y < sourceImg.height; y = y + y_step){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        fill(pix); //fill using the pix colour
        stroke(pix); //stroke using pix
        rect(x,y,tileWidth,tileHeight); //rect which uses tilewidth & tileheight variables
      }
    }

      /* for loop which uses 2000 pixels from the sourceImg */
    for(let i=0;i<2000;i++) {
      let x = floor(random(sourceImg.width)); //random x value for width
      let y = floor(random(sourceImg.height)); //random y value for height
      let pix = sourceImg.get(x, y); //set pix value to x & y
      let mask = maskImg.get(x, y); // get mask from MaskImg

      fill(pix); //fill using pix value
      console.log(mask[0]);

      if(mask[0] > 128) { //if mask has white area
        let pointSize = 10; //change pointSize to 10
        ellipse(x, y, pointSize, pointSize); //ellipse with 10 width and height
        line(x,y,x + pointSize,y); //horizontal line
        line(x,y,x,y + pointSize); //vertical line
      }
      else if (mask[0] < 55 && mask[0] > 45) { //grey mark
        let ellipseSize = 20; //set ellipseSize to 20
        let pointSize = 12; //pointsize to 12
        ellipse(x,y,ellipseSize,ellipseSize) //create ellipse
        line(x,y,x + pointSize, y + pointSize); //adding with pointSize
        line(x,y,x - pointSize, y - pointSize); //subtracting with pointSize
      }

      else if(pix[1] < pix[2]) { //else if green < blue
        strokeWeight(2); //set stroke weight to 2
        let pixNew = sourceImg.get(x, y); //new pix which gets pixels from sourceImg
        pixNew[1] = 50; //set pixNew to 50. ranges from 0-255

      }

      else { //else
        let pointSize = 15; //change pointSize to 15
        rect(x, y, pointSize, pointSize); //create a rect using pointSize
        strokeWeight(1); //set strokeWeight to 0
        stroke(pix); //stroke using pix

      }

      if(pix[2] > pix[1] && pix[2] > pix[0]){
        let blueEllipse = 15;
        ellipse(x,y,blueEllipse,blueEllipse);
      }

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
