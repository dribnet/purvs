function setup () {
	createCanvas(1500, 1000);
}
var value = 0;


function draw () {
	if (value == 0){
		noStroke();
		fill(41, 4, 33);
		rect (0, 0, width, height);
		
		for (j=5; j< height; j=j+20){
			
			for (i=0; i< width; i=i+20){

				stroke(232, 12, 163, 100);
				noFill();
				arc(i-200, j, i, height-100, 5, TWO_PI);
			}
			for (i=width; i>0; i=i-20){
				stroke(0, 152, 155, 100);
				noFill();
				arc(i-200, j, i, height-100, 0.2, 2);
			}
		}
		value = 1;
	}
	
}

function mouseClicked() {
	if (value == 1) {
		value = 0;
	}
	else {
		value =1;
	}
}

function keyTyped() {
	if (key == '!') {
		saveBlocksImages();
	}
}
