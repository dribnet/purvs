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

let nudge = true; //allows the nudge to be called
let xSource; //the first mask pixel of the focus X
let ySource; //the first mask pixel of the focus Y
let dX; //map for the nudge X
let dY; //map for the nudge Y

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
  nudge(); //calls nudge function
  let fullSize = 8; //The full size of the rectangle or pixel
  let halfSize = 4; //Half the size of the rectange or pixel 
 
  //iterates through the image 
  for(let i=0;(i<sourceImg.width);i++) {
    let x = i*fullSize; //the x is determined by the iteration (for loop) through the width and the size of the rectangle to be drawn
    let y = renderCounter*fullSize; //the y is determined by the rectangle and the render counter

    let pix = sourceImg.get(x, y); //The pixel at x,y of the original image
    let mask = maskImg.get(x, y); //The pixel at x,y of the mask

    fill(pix); //fills by the color of the original image

    if(mask[0]>128){ //focus 
      fill(presImg.get(x,y)); //fills based on the original picture not the error comprised one
      rect((x-halfSize), (y-halfSize), fullSize, fullSize);  
    }
    else{ //the background
      let r = red(pix); //red of original pixel
      let g = green(pix); //green of original pixel
      let b = blue(pix); //blue of original pizel

      let shift = 4; //this defines the boundaries that the color is shifted into

      let nR = round(shift*r/255)*(255/shift); //rounds based on shift
      let nG = round(shift*g/255)*(255/shift);
      let nB = round(shift*b/255)*(255/shift);

      fill(nR, nG, nB);  //fills via the boundered color

      var errR = r - nR; //defines error for red
      var errG = g - nG; //error for green
      var errB = b - nB; //error for blue
      
      //Beginning 
      //Part 1
      error(sourceImg, 7 / 16.0, x+1, y, errR, errG, errB); //defines the right pixel based on the error of this one

      //Part 2
      error(sourceImg, 3 / 16.0, x-1, y+1, errR, errG, errB); //defines bottom left

      //Part 3]
      error(sourceImg, 5 / 16.0, x, y+1, errR, errG, errB); //defines bottom

      //Part 4
      error(sourceImg, 1 / 16.0, x+1, y+1, errR, errG, errB); //defines bottom right

      sourceImg.updatePixels(); //updates based on the changed pixels

      let dX = map(abs(sourceImg.width - xSource), 0, sourceImg.width, -fullSize*2, fullSize*2); //map x distance to the source pixel and nudges based on that
      let dY = map(abs(sourceIMg.height - ySource), 0, sourceImg.height, -fullSize*2, fullSize*2); //map y distance to the source pixel and nudges based on that
      rect((x-halfSize)+dX, (y-halfSize)+dY, fullSize, fullSize);  //draw pixel
    }
  }
  console.log(renderCounter);
  renderCounter = renderCounter + 1;
  if(renderCounter > (sourceImg/fullSize)) {
    console.log("Done!")
    noLoop();
  }
}

function index(x,y){ //returns the index of the given x and y within image
  return 4*(x + y * sourceImg.width);
}

function error(img, shift, x, y, eR, eG, eB){ //this function defines a new pixel color based on the error values
  if(x<0 || x>=img.width*fullSize || y<0 || y>=img.height)return;
  let pix = img.pixels; //index of the image to be editted
  let ind = index(x,y); //gets exact value
  let nC = img.pixels[ind]; //exact color

  let pR = red(nC); //grabs the red
  let pG = green(nC); //grabs the green
  let pB = blue(nC); //grabs the blue

  //nC = ((pR + eR * shift), (pG + eG * shift), (pB + eB * shift));
  pix[ind] = (pR + eR * shift);  //new pixel color based on error //red
  pix[ind] = (pG + eG * shift);  //green
  pix[ind] = (pB + eB * shift); //blue
}

if(nudge){ //this function finds the first white pixel in the mask img
	nudge  = !nudge;
	for(a = 0; a < maskImg.height; a++){
		for(b = 0; b < maskImg.width; b++){
			let x = b*fullSize; //the x is determined by the iteration (for loop) through the width and the size of the rectangle to be drawn
    		let y = a*fullSize; //the y is determined by the rectangle and b
		    let mask = maskImg.get((b*fullSize), (a*fullSize)); //The pixel at x,y of the mask

    	if(!(mask[0]>128)){
    	let xSource = x;
    	let ySource = y;
    	return;
    	}
		}
	}
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
