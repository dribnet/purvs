const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
	// create the drawing canvas, save the canvas element
	let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
	main_canvas.parent('canvasContainer');

	// you can optionally add your own code here if you also have setup code
}

// the draw functions of my clock
function draw () {

	//Creates the colours for the different layers
	var cyan = color(0, 255, 255);
	var yellow = color(255, 255, 0);
	var magenta = color(255, 0, 255);

	//These variables represent the conventions set by the Braille Authority.
	//However they have been scaled and are represented as pixels
	var dotSize = 36; //1.44mm Dot Size
	var dotSpace = 58.5; //2.34mm Space between Dots
	var cellSpace = 155; //6.1mm Space between Cells
	var xStart = 100;
	var yStart = 175;

	background(215); // light gray background
	strokeWeight(0); // Stroke weight to 0 pixels

	//Creates TEMPLATE circles (WILL BE DELETED!!! Just used to help guide the actual code)

	//Creates Layers for colour changes, dependant on the variable "layer"
	for (let layer = 0; layer<2; layer++){
		if (layer == 0){
			fill (cyan);
		} else if (layer == 1){
			fill (yellow);
		}
		else {
			fill (magenta);
		}
		//Creates the Braille Cells for Number Indicator and Numbers 
		push();
		translate(xStart,yStart); //Enters coordinates for patterns
		for (let braille = 0; braille<3; braille++){ //Loops the pattern so it makes 3 sets.
			for (let rows = 0; rows<3; rows++){ //Loops the columns to make 3 rows of dots
				for (let columns = 0; columns<2; columns++){ //Loops the dots to make a column to be looped
					ellipse(0, 0, dotSize); //Puts a Circle on that exact spot
					translate(dotSpace,0); //Makes sure the next dot will be drawn in the next spot
				}
				translate(-2*dotSpace, dotSpace); //Takes the dot back one space and goes one space down from the current position.
			}
			translate(cellSpace,-3*dotSpace); //takes the end position of the last cell and translates along x and goes the original point for y
		}
		pop();

		push();
		translate(6.3*xStart,yStart); //Enters coordinates for patterns
		for (let braille = 0; braille<2; braille++){ //Loops the pattern so it makes 3 sets.
			for (let rows = 0; rows<3; rows++){ //Loops the columns to make 3 rows of dots
				for (let columns = 0; columns<2; columns++){ //Loops the dots to make a column to be looped
					ellipse(0, 0, dotSize); //Puts a Circle on that exact spot
					translate(dotSpace,0); //Makes sure the next dot will be drawn in the next spot
				}
				translate(-2*dotSpace, dotSpace); //Takes the dot back one space and goes one space down from the current position.
			}
			translate(cellSpace,-3*dotSpace); //takes the end position of the last cell and translates along x and goes the original point for y
		}
		pop();
		translate(7,7)//translates ever so slightly so you can see each layer.
	}
  //TEMPLATE ends
}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
