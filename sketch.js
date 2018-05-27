let sourceImg=null;
let maskImg=null;

function preload() {
	sourceImg = loadImage("input_3.jpg");
	maskImg = loadImage("mask_3.png");
}

function setup () {
	  let main_canvas = createCanvas(1080, 1920);
	  main_canvas.parent('canvasContainer');
	  angleMode(DEGREES);
	  imageMode(CENTER);
	  noStroke();
	  background(200);
	  sourceImg.loadPixels();
	  maskImg.loadPixels();
}

let pointWidth = 60;
let pointHeight = 60;
let pointSize = 60;

function draw () {
	//draw squares across background
	for(let i=0;i<1080;i+=pointWidth){ 
		for(let j = 0; j < 1920; j+=pointHeight) {
			let xBack = i;
			let yBack = j;
			pointHeight = floor(random(40, 70));
			if(i>=1920-70){
				pointWidth = 1920 - j;
			}
			let pix = sourceImg.get(xBack+pointWidth/2, yBack+pointHeight/2);
			let mask = maskImg.get(xBack+pointWidth/2, yBack+pointHeight/2);
			if(mask[0] <= 128){
				// convert to grayscale (remove color, keep brightness in hsluv colorspace)
      			let hsluvColor = convertRgbToHsluv(pix);
				fillHsluv(0, 0, hsluvColor[2]);
				rect(xBack, yBack, pointWidth, pointHeight); 
			}
		}
	}
	pointWidth = 200;
	for(let i = 0; i < 4000; i++){
		let xFront = floor(random(sourceImg.width));
		let yFront = floor(random(sourceImg.height));
		let pix = sourceImg.get(xFront, yFront);
		let mask = maskImg.get(xFront, yFront);
		if(mask[0] > 128){
			fill(pix);
			pointHeight = floor(random(70, 130));
			drawDogs(xFront, yFront, pointWidth, pointHeight, pix);
		}
	}

	//when done
    console.log("Done!")
    noLoop();
    // saveBlocksImages();

}


function drawDogs(centreX, centreY, width, height, values){
	push();
	translate(centreX, centreY);
	let strokeWidth = 0.5;
  	let red = values[0];
  	let green = values[1];
    let legHeight = map(height, 70, 130, 0, height/4.5);
  	let blue = values[2];
	let fillColour = values;
	let earColour = [fillColour[0]+40, fillColour[1]+15, fillColour[1]+15];
	let outerEarColour = [fillColour[0]-15, fillColour[1]-15, fillColour[2]-15];
    
    //basic dog shape
    //head
    let headX = width/2 - width/3.5;
    let headY = height/2-legHeight*1.1;
    let headHeight = width/6;
    let headLength = width/7;

    let noseHeight = headHeight/1.5;
    let noseLength = headLength;
    let noseX = headX-(headLength/2)+3;
    let noseY = headY + headHeight/9;
    
    let earX = headX + headLength/20;
    let earY = headY - headHeight/4;

	let earHeight = headHeight*1.5;
    let earLength = headHeight/1.8;
      
    //body
    let chestX = headX;
    let chestY = headY + headHeight/2;
    let chestHeight = headHeight*1.2;
    let chestLength = headLength*3.5;

    //tail
    let tailX = chestX + chestLength;
    let tailY = chestY;
    let tailLength = headLength;
    let tailHeight = headHeight;
    let fluffiness = map(red, 0, 255, 1.1, 1.1);

    //legs
    let leftLegX = chestX+chestLength/6;
    let leftLegY = chestY + chestHeight;
    let leftLegHeight = chestHeight/4+legHeight;
    let leftLegLength = chestLength/8;

    let rightLegX = chestX + chestLength;
    let rightLegY = chestY + chestHeight/2;
    let rightLegHeight = chestHeight/4+legHeight+chestHeight/2;
    let rightLegLength = chestLength/8;
    
    let footHeight = chestHeight/4;
    let footLength = chestLength/5;
	
	//tail
	fill(fillColour);
    stroke(fillColour);
    bezier(tailX, tailY, tailX*fluffiness, tailY, tailX+tailLength, tailY-tailHeight, tailX+tailLength, tailY-tailHeight);
	
    //custom dog shape
      beginShape();
        curveTightness(0.2);
        curveVertex(chestX+chestLength/2, chestY-noseHeight/4);
        //back
        curveVertex(chestX+chestLength/2, chestY-noseHeight/4);
        curveVertex(chestX+chestLength, chestY-chestHeight/4);
        curveVertex(chestX+chestLength*1.1, chestY);
        //right leg
        curveVertex(chestX+chestLength*1.15, chestY+chestHeight/2);
        curveVertex(rightLegX+rightLegLength, rightLegY+rightLegHeight/2);
        curveVertex(rightLegX+rightLegLength, rightLegY+rightLegHeight);
        curveVertex(rightLegX+footLength/4, rightLegY+rightLegHeight+footHeight);
        curveVertex(rightLegX-footLength/2, rightLegY+rightLegHeight+footHeight);
        curveVertex(rightLegX-footLength/2, leftLegY+leftLegHeight+footHeight/2);
        curveVertex(rightLegX, rightLegY+rightLegHeight);
        curveVertex(rightLegX, rightLegY+rightLegHeight/2);
        curveVertex(chestX+chestLength/3+chestLength/2, rightLegY+rightLegHeight/3);
        curveVertex(chestX+chestLength/4+chestLength/2, chestY+chestHeight/2+map(green, 0, 255, chestHeight/20, 0));
        //stomach
        curveVertex(chestX+chestLength/2, chestY+chestHeight/2+map(green, 0, 255, chestHeight/20, 0));
        //left leg
        curveVertex(leftLegX+leftLegLength*1.4, leftLegY);
        curveVertex(leftLegX+leftLegLength, leftLegY+leftLegHeight);
        curveVertex(leftLegX+footLength/4, leftLegY+leftLegHeight+footHeight);
        curveVertex(leftLegX-footLength/2, leftLegY+leftLegHeight+footHeight);
        curveVertex(leftLegX-footLength/2, leftLegY+leftLegHeight+footHeight/2);
        curveVertex(leftLegX, leftLegY+leftLegHeight*0.98);
        curveVertex(chestX+chestLength/6, chestY+chestHeight);
        //chest
        curveVertex(chestX+chestLength/20, chestY+ chestHeight/2+chestHeight/6);
        curveVertex(chestX, chestY);
        //face
        curveVertex(noseX, noseY+noseHeight/2);
        curveVertex(noseX-noseLength/3, noseY+noseHeight/4);
        curveVertex(noseX-noseLength/2, noseY);
        curveVertex(noseX, noseY-noseHeight/2);
        curveVertex(noseX+noseLength/10, headY-headHeight/2.5);
        curveVertex(headX, headY-headHeight/2);
        curveVertex(headX+headLength/1.7, headY-headHeight/3);
        curveVertex(headX+headLength/1.5, headY-headHeight/6);
        //back
        curveVertex(leftLegX+leftLegLength, noseY+noseHeight/2);
        curveVertex(leftLegX+leftLegLength, noseY+noseHeight/2);
      endShape();

	 //add fur
	 
	 let furSize = map(red, 0, 255, 1, size/10);
	 
	//left leg
    makeBaseFur(leftLegX, leftLegY-leftLegHeight/10, leftLegX + leftLegLength, leftLegY-leftLegHeight/10, leftLegX+leftLegLength/20, 
      leftLegY + leftLegHeight, leftLegX + leftLegLength, leftLegY + leftLegHeight, furSize);
	  
    //right leg
    makeBaseFur(rightLegX, rightLegY, rightLegX + rightLegLength, rightLegY, rightLegX+footLength/4, 
     rightLegY + rightLegHeight, rightLegX + rightLegLength, rightLegY + rightLegHeight, furSize);
	makeBaseFur(chestX+chestLength/3.5+chestLength/2,chestY+chestHeight/2+map(green, 0, 255, chestHeight/20, 0),  chestX+chestLength*1.1, chestY, chestX+chestLength/3+chestLength/2, rightLegY+rightLegHeight/3, rightLegX+rightLegLength, rightLegY+rightLegHeight/2,furSize);
	
    //body
    makeBaseFur(leftLegX, chestY, chestX+chestLength, chestY-chestHeight/4, leftLegX, leftLegY-chestHeight/20, chestX+chestLength/4+chestLength/2, chestY+chestHeight, furSize);  
	
    //add curly fur

    //TL, TR, BL, BR
    //left leg
	furSize*=2;
    makeFur(leftLegX, leftLegY, leftLegX + leftLegLength, leftLegY, leftLegX+leftLegLength/20, 
      leftLegY + leftLegHeight/2, leftLegX + leftLegLength, leftLegY + leftLegHeight/2, furSize);
    //right leg
    makeFur(rightLegX, rightLegY, rightLegX + rightLegLength, rightLegY, rightLegX+footLength/4, 
     rightLegY + rightLegHeight/2, rightLegX + rightLegLength, rightLegY+rightLegHeight-leftLegHeight/2, furSize);
	makeFur(chestX+chestLength/3.5+chestLength/2,chestY+chestHeight/2+map(green, 0, 255, chestHeight/20, 0),  chestX+chestLength*1.1, chestY, chestX+chestLength/3+chestLength/2, rightLegY+rightLegHeight/3, rightLegX+rightLegLength, rightLegY+rightLegHeight/2,furSize);
    //upper body
    makeFur(chestX, chestY+chestHeight/20, chestX+chestLength+chestLength/20, chestY-chestHeight/8, chestX+chestLength/15, 
      chestY+ chestHeight/2+chestHeight/6, chestX+chestLength*1.1, chestY, furSize);
    //lower body
    makeFur(chestX+chestLength/15, chestY+ chestHeight/2+chestHeight/6, chestX+chestLength*1.1, chestY, leftLegX, leftLegY-chestHeight/15, chestX+chestLength/4+chestLength/2, chestY, furSize);
    //head
    makeFur(headX, headY-headHeight/2, headX+headLength/1.7, headY-headHeight/3, headX, 
      chestY, leftLegX+leftLegLength, noseY+noseHeight/2, furSize);

	//ears
	fill(outerEarColour);
	stroke(earColour);
	strokeWeight(strokeWidth);
    quad(earX, earY+earHeight, earX, earY-headLength/4, earX+earLength, earY,
    earX+earLength, earY+earHeight/1.5);  
	noStroke();
	fill(fillColour);
	pop();
}


function makeBaseFur(x1, y1, x2, y2, x3, y3, x4, y4, l){
	//makes poofy shape
	ellipse((x1+x2)/2, (y1+y3)/2, (x2-x1)+l, (y3-y1)+l);
}

function makeFur(x1, y1, x2, y2, x3, y3, x4, y4, r){
	//adds curls 
	//edit top
	for(i = x1; i <= x2; i+=r/2){
		let j = map(i, x1, x2, y1, y2);
		ellipse(i, j, r, r);
	}
	//edit bottom
	for(i = x3; i <= x4; i+=r/4){
		let j = map(i, x3, x4, y3, y4);
		ellipse(i, j, r, r);
	}
	//edit left
	for(j = y1; j <= y3; j+=r/2){
		let i = map(j, y1, y3, x1, x3);
		ellipse(i, j, r, r);
	}
	//edit right
	for(j = y2; j <= y4; j+=r/2){
		let i = map(j, y2, y4, x2, x4);
		ellipse(i, j, r, r);
	}
}

function convertRgbToHsluv(c) {
	return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}






