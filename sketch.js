function setup () {
	createCanvas(960, 500);
}
var value = 0;

function isEven(n) {
	return n % 2 == 0;
}

function isOdd(n) {
	return Math.abs(n % 2) == 1;
}

function draw () {
	var numb = -60;
	if (value == 0){
		noStroke();
		fill(41, 4, 33);
		rect (0, 0, width, height);
		for(j = 10; j<height; j=j+10){
			stroke (255, 208, 38,100);
			strokeWeight(random(0.5,2));
			line (0, j, width, j);
		}
		// for(i = 20; i<width; i=i+20){
		// 	stroke(232,12,163,100);
		// 	strokeWeight(random(0.5,2));
		// 	line (i, 0, i, height);
		// }
		stroke(232,12,163,250);
		noFill();
		strokeWeight(random(1,3));
		arc (500, 250, -200, -200, random (PI, TWO_PI*0.8)-1.5, 0 );
		stroke (31, 204, 178,250);
		strokeWeight(random(1,4));
		arc (500, 250, -200, -200, random (PI, TWO_PI*0.8)+1.2, 1 );


		
		strokeWeight(random(1,3));
		arc (600, 350, -200, -200, random (0, PI), 3 );
		stroke(232,12,163,250);
		strokeWeight(random(1,4));
		arc (600, 350, -200, -200, random (0, PI), 4 );


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
