const colorFront = "#199cff";
const colorStroke = "#233f11";

// This function draws each individual box
function drawPart(posx, posy, scale, offsetx, tilt) {
	push();
	translate(posx + offsetx * scale / 10, posy);
	rotate(tilt);
	rect(-20 * scale, -3 * scale, 20 * scale, 3 * scale);
	pop();
}

/*
 * Draw a static version of the particle animation, given letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
	//todo: figure out how to make this work aaa
	// rotation in degrees (for tilt variable)
	angleMode(DEGREES);

	let posx = 90;
	let posy = 100;
	let scale = 3;

	//show the bounding box
	noFill();
	stroke('red');
	rect(0, 0, 100, 200);

	fill(colorFront);
	stroke(colorStroke);

	push();
	let y_offset = 5 * scale;
	drawPart(posx, posy - y_offset, scale, letterData["position1"], letterData["tilt1"]);
	drawPart(posx, posy, scale, letterData["position2"], letterData["tilt2"]);
	drawPart(posx, posy + y_offset, scale, letterData["position3"], letterData["tilt3"]);
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