/*This program relies a lot on the dithering and noise in order to form an image that enchances the 'focus' of the image*/
//Preset values of variable for full code
let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let fullSize = 8; //Full Size of the rectangle or pixel
let halfSize = 4; //Half Size of the rectangle or pixel 

//The next set of variables are used to calculate the error per pixel and spacing per pixel for color and spacing
//These are used to grab or get the original RGB of the picture
let r; //red value per pixel of the original image
let g; //blue value per pixel of the original image
let b; //green vale per pixel of the original image

let shift; //This is used to calculate the variation in the bounds per RGB value of each pixel 

//The new values of the RGB color for the pixel that will be used to derive error
let nR; //New Red
let nG; //New Green
let nB; //New Blue

//These are used to derrive the error values of each pixel based on the RGB difference
let errR; //Error of the Red
let errG; //Error of the Green
let eerB; //Error of the Blue

//After the error is calculated, these are used to define the new colors
let pR; //New Red based on the algorithum on the previous Red
let pG; //New Green based on the algorithum on the previous Green
let pB; //New Blue based on the algorithum on the previous Blue

function preload() { //Preloads the image
  sourceImg = loadImage("input_3.jpg"); //The source image (to be editted)
  maskImg = loadImage("mask_3.png"); //The mask for the image
  presImg = loadImage("input_3.jpg"); //The 'preserved' image for the ares of the mask (focus of the image)
}

function setup () { //sets up the code
  let main_canvas = createCanvas(1080, 1920); 
  main_canvas.parent('canvasContainer');

  presImg.loadPixels();
  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  sourceImg.filter(GRAY); //filters the colors to grayscale
  maskImg.loadPixels();
}

function draw () {  
  let fullSize = 8; //The full size of the rectangle or pixel
  let halfSize = 4; //Half the size of the rectange or pixel 
 
  //iterates through the image 
  for(let i=0;(i<sourceImg.width);i++) {
    let x = i*fullSize; //the x is determined by the iteration (for loop) through the width and the size of the rectangle to be drawn
    let y = renderCounter*fullSize; //the y is determined by the rectangle and the render counter

    let pix = sourceImg.get(x, y); //The pixel at x,y of the original image
    let mask = maskImg.get(x, y); //The pixel at x,y of the mask

    fill(pix); //fills by the color of the original image

    if(mask[0]>128){
      fill(presImg.get(x,y));
      rect((x-halfSize), (y-halfSize), fullSize, fullSize);  
    }
    else{
      let r = red(pix);
      let g = green(pix);
      let b = blue(pix);

      let shift = 4; 

      let nR = round(shift*r/255)*(255/shift);
      let nG = round(shift*g/255)*(255/shift);
      let nB = round(shift*b/255)*(255/shift);

      fill(nR, nG, nB);  

      var errR = r - nR;
      var errG = g - nG;
      var errB = b - nB;
      
      //Beginning 
      //Part 1
      error(sourceImg, 7 / 16.0, x+1, y, errR, errG, errB);

      //Part 2
      error(sourceImg, 3 / 16.0, x-1, y+1, errR, errG, errB);

      //Part 3]
      error(sourceImg, 5 / 16.0, x, y+1, errR, errG, errB); 

      //Part 4
      error(sourceImg, 1 / 16.0, x+1, y+1, errR, errG, errB);

      sourceImg.updatePixels();

      rect((x-halfSize), (y-halfSize), fullSize, fullSize);   
    }
  }
  console.log(renderCounter);
  renderCounter = renderCounter + 1;
  if(renderCounter > (sourceImg/fullSize)) {
    console.log("Done!")
    noLoop();
  }
}

function index(x,y){
  return 4*(x + y * sourceImg.width);
}

function error(img, shift, x, y, eR, eG, eB){
  if(x<0 || x>=img.width*fullSize || y<0 || y>=img.height)return;
  let pix = img.pixels;
  let ind = index(x,y);
  let nC = img.pixels[ind];

  let pR = red(nC);
  let pG = green(nC);
  let pB = blue(nC);

  //nC = ((pR + eR * shift), (pG + eG * shift), (pB + eB * shift));
  pix[ind] = (pR + eR * shift);
  pix[ind] = (pG + eG * shift);
  pix[ind] = (pB + eB * shift);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
