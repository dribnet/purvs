gap = 35;
sizeReduce = 4;

function setup () {
  createCanvas(960, 500);
}

function draw () {
	clear();
	rectMode(CENTER);

	size = 50;
	//gap += Math.random()* 0.1;

	drawAtTop(width/2, height/2, size);
	drawAtBot(width/2, height/2, size);
	//drawAtLeft(width/2, height/2, size);
	//drawAtRight(width/2, height/2, size);

	// for(var i = size/2; i < height; i += (gap+size)){
	// 	drawAtLeft(width/2, i, size);
	// 	drawAtRight(width/2, i, size);
	// }

}

function mouseClicked(){
	gap = 10 + Math.random()*35;
}

function drawAtTop(x, y, size) {

	rect(x, y, size, size);

	if(y > 0){
		drawAtTop(x, y - gap, size-sizeReduce);
		drawAtLeft(x, y, size-5);
		drawAtRight(x, y, size-5);
	}
}

function drawAtBot(x, y, size) {

	rect(x, y, size, size);

	if(y < height){
		drawAtBot(x, y + gap, size-sizeReduce);
		drawAtLeft(x, y, size-5);
		drawAtRight(x, y, size-5);
	}
}

function drawAtLeft(x, y, size) {

	rect(x, y, size, size);

	if(x < width)
		drawAtLeft(x + gap, y, size-sizeReduce);
}

function drawAtRight(x, y, size) {

	rect(x, y, size, size);

	if(x > 0)
		drawAtRight(x - gap, y, size-sizeReduce);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
