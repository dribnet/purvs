var font;

function preload() {
	font = loadFont('AvenirNextLTPro-Demi.otf');
}
function setup() {
createCanvas(600, 300);
background(51, 24, 100, 10);  
}

function draw() {


	var points = font.textToPoints('ABC', width/4, height/2,150);
	console.log(points);

	for(var i = 0; i < points.length; i++) {
		var p = points[i];
		stroke(61, 57, 12,50);
		strokeWeight(2);
		// noFill();
		// noStroke();
		fill(255, 232, 65);
		ellipse(p.x, p.y,24);
	}
  
}