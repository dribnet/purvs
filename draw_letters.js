const colorFront = "#199cff";
const colorStroke = "#233f11";


/*
 * Draw a frame of the particle animation, given letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

	//show the bounding box
	noFill();
	stroke('red');
	rect(0, 0, 100, 200);

	fill(colorFront);
	stroke(colorStroke);

	push();
	if(letterData.length < 4) {
		letterData.push(new Character(letterData, createVector(0, 0), 1, true));
		for (let i = 0; i < 300; i++) {
			letterData[4].updateCanvas();
		}
	}
	letterData[4].updateCanvas();
	letterData[4].drawCanvas();

	pop();
}

/*
 * Spits out an interpolated version of two letters
 */
function interpolate_letter(percent, oldObj, newObj) {
	let new_letter = {};
	new_letter["position1"] = map(percent, 0, 100, oldObj["position1"], newObj["position1"]);
	new_letter["position2"] = map(percent, 0, 100, oldObj["position2"], newObj["position2"]);
	new_letter["position3"] = map(percent, 0, 100, oldObj["position3"], newObj["position3"]);
	new_letter["tilt1"] = map(percent, 0, 100, oldObj["tilt1"], newObj["tilt1"]);
	new_letter["tilt2"] = map(percent, 0, 100, oldObj["tilt2"], newObj["tilt2"]);
	new_letter["tilt3"] = map(percent, 0, 100, oldObj["tilt3"], newObj["tilt3"]);
	return new_letter;
}

var swapWords = [
	"PARTICLE",
	"TRACINGS",
	"PHANTASM"
];