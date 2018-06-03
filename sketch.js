let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
 	sourceImg = loadImage("input_1.jpg");
 	maskImg = loadImage("mask_1.png");
 	maskImgb = loadImage("mask_1b.png");
}

function setup () {
  	let main_canvas = createCanvas(1080, 1920);
 	main_canvas.parent('canvasContainer');

 	imageMode(CENTER);
 	noStroke();
 	background(0);
  	sourceImg.loadPixels();
 	maskImg.loadPixels();
 	maskImgb.loadPixels();
}

const pointSize = 40;
let draw_pass = 0;
let x1 = 0;
let y1 = 0;

function draw () {
 	//let x1 = 0;
 	//let y1 = 0;
  	for(let i=0; i<50; i++) {
	    //let x = int(i * pointSize);
	    //let y = int(renderCounter * pointSize);
	    let x = floor(random(sourceImg.width));
	    let y = floor(random(sourceImg.height));
	    let pix = sourceImg.get(x, y);
	    let mask = maskImg.get(x, y);
	    let maskb = maskImgb.get(x, y);
	    let halfSize = pointSize/2;
	    fill(pix);
	    stroke(pix);

	    if(draw_pass==0){
		    // original
		    if(mask[0]==255) {
		      spider(x, y);
		      //ellipse(x, y, pointSize, pointSize);
		    }
		    else if(mask[0]==0){
		      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
		    }
	  	}
		else if(draw_pass==1){
	    	// connecting lines
		    if(maskb[0] > 128) {
		    	if(x1!=0) {	
		    		strokeWeight(5);
		    		line(x1+halfSize, y1+halfSize, x+halfSize, y+halfSize);
		    		//spider(x, y);
		    		x1 = x;
		    		y1 = y;
		    	}
		    	else{
		    		x1 = x;
		    		y1 = y;
		    	}
		    }
		}
  	}



  
	renderCounter = renderCounter + 1;
	if(renderCounter > 100) {
 		if(draw_pass==0) {
 			renderCounter = 0;
 			draw_pass = 1;
 		}
 		else{
    		console.log("Done!")
    		noLoop();
    	}
    	// saveBlocksImages();
    }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function spider(x, y) {
	let x0 = 0;
	let y0 = 0;
	for(let i=0; i<10; i++){
		x0 = x + random(-50, 50);
		y0 = y + random(-50, 50);
		strokeWeight(5);
		line(x, y, x0, y0);
	}
}
