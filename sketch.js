let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload(){
 	sourceImg = loadImage("input_1.jpg");
 	maskImg = loadImage("mask_1.png");
}

function setup (){
  	let main_canvas = createCanvas(1080, 1920);
 	main_canvas.parent('canvasContainer');

 	imageMode(CENTER);
 	noStroke();
 	background(0);
  	sourceImg.loadPixels();
 	maskImg.loadPixels();
}

const pointSize = 25;
let draw_pass = 0;
let x1 = 0;
let y1 = 0;

function draw (){
 	//let x1 = 0;
 	//let y1 = 0;
  	for(let i=0; i<100; i++) {
	    //let x = int(i * pointSize);
	    //let y = int(renderCounter * pointSize);
	    let x = floor(random(sourceImg.width));
	    let y = floor(random(sourceImg.height));
	    let pix = sourceImg.get(x, y);
	    let mask = maskImg.get(x, y);
	    let halfSize = pointSize/2;
	    fill(pix);
	    stroke(pix);

	    if(draw_pass==1){
	    	if(mask[0]==0){
		      //rect(x-halfSize, y-halfSize, pointSize, pointSize);
		      glass(x, y);    
		    }
	    }
	    else if(draw_pass==2){
		    // original
		    if(mask[0]==255) {
		      spider(x, y);
		      //ellipse(x, y, pointSize, pointSize);
		    }
	  	}
		else if(draw_pass==0){
	    	// connecting lines
		    if(mask[0]!=0 && mask[0]!=255) {
		    	if(x1!=0) {	
		    		//spider(x, y);
		    		scratch(x, y);
		    		//glass(x, y);
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


  	// Makes the passes increment at different rates
  	if(draw_pass==0){
  		renderCounter = renderCounter + 2;
  	}
  	else if(draw_pass==1){
		renderCounter = renderCounter + 1;
  	}
  	else{
		renderCounter = renderCounter + 2;
  	}

  	// has the render pass through 3 times
	if(renderCounter > 150) {
 		if(draw_pass==0) {
 			renderCounter = 0;
 			draw_pass =  1;
 		}
 		else if(draw_pass==1) {
 			renderCounter = 0;
 			draw_pass = 2;
 		}
 		else{
    		console.log("Done!")
    		noLoop();
    	}
    	// saveBlocksImages();
    }
}

function keyTyped(){
  if (key == '!') {
    saveBlocksImages();
  }
}

// Draws a series of lines sprounting from the x,y of a pixel
function spider(x, y){
	let x0 = 0;
	let y0 = 0;
	for(let i=0; i<10; i++){
		x0 = x + random(-50, 50);
		y0 = y + random(-50, 50);
		strokeWeight(5);
		line(x, y, x0, y0);
		//x = x0;
		//y = y0;
	}
}

// draws a scratchy wave from the x,y of a pixel
function scratch(x, y){
	let xA = x;
	let yA = y;
	let xB = 0;
	let yB = 0;
	for(let i=0; i<5; i++){
		xB = xA + 5;
		if(yA < y){
			yB = yA + random(20, 50);
		}
		else{
			yB = yA - random(10, 50);
		}
		strokeWeight(2.5);
		line(xA, yA, xB, yB);
		xA = xB;
		yA = yB;
	}
	xA = x;
	yA = y;
	for(let i=0; i<5; i++){
		xB = xA - 5;
		if(yA < y){
			yB = yA + random(20, 50);
		}
		else{
			yB = yA - random(10, 50);
		}
		strokeWeight(5);
		line(xA, yA, xB, yB);
		xA = xB;
		yA = yB;
	}
}

function glass(x, y){
	let num =1;
	if(num==1){
		triangle(x+random(-20, -5), y+random(-40, -10), x+random(5, 20), y+random(-40, 40), x+random(-10, 10), y+random(10, 40));
	}
	else if(num==2){
		triangle(x-17, y+6, x+14, y+46, x+2, y-10);
	}
	else if(num==3){
		triangle(x-14, y+6, x+14, y+46, x+2, y-10);
	}
 	else if(num==4){
 		triangle(x-17, y+6, x+14, y+46, x+2, y-10);
	}
	else if(num==5){
		triangle(x-17, y+6, x+14, y+46, x+2, y-10);
	}
}
