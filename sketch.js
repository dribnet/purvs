gap = 50;
sizeReduce = 3;
rotation = 0;

function setup () {
  createCanvas(960, 500);
}

function draw () {
	clear();
	rectMode(CENTER);
	translate(width/2,height/2);
	
	rotate(rotation);
	size = 50;
	//gap += Math.random()* 0.1;

	drawAtTop(0, 0, size);
	drawAtBot(0, 0, size);
}

function mouseClicked(){
	gap = 10 + Math.random()*45;
	rotation = Math.random()*360;
}

function drawAtTop(x, y, size) {

	if(y > -height/2){
		drawAtTop(x, y - gap, size-sizeReduce);
		drawAtLeft(x, y, size-5);
		drawAtRight(x, y, size-5);
	}

}

function drawAtBot(x, y, size) {

	if(y < height/2){
		drawAtBot(x, y + gap, size-sizeReduce);
		drawAtLeft(x, y, size-5);
		drawAtRight(x, y, size-5);
	}
}

function drawAtLeft(x, y, size) {

	shape(x, y, size, size);

	if(x < width/2)
		drawAtLeft(x + gap, y, size-sizeReduce);
}

function drawAtRight(x, y, size) {

	shape(x, y, size, size);

	if(x > -width/2)
		drawAtRight(x - gap, y, size-sizeReduce);
}

function shape(x, y, w, h){
	fill(0,0,0);
	rect(x,y,w,h);

	fill(255,255,255);
	rect(x,y,w/1.01,h/1.01);

	fill(0,0,0);
	rect(x,y,w/1.5,h/1.5);

	fill(255,255,255);
	rect(x,y,w/1.8,h/1.8);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}