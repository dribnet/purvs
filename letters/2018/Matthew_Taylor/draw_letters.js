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
	// noFill();
	// stroke('red');
	// rect(0, 0, 100, 200);
	//
	// fill(colorFront);
	// stroke(colorStroke);

	push();
	if(letterData.length < 5) {
		letterData.push(new Character(letterData, createVector(0, 0), 10));
		for (let i = 0; i < 300; i++) {
			letterData[4].updateCanvas(false);
		}
	}

	letterData[4].updateCanvas(true);
	letterData[4].drawCanvas();

	pop();
}

/*
 * Spits out an interpolated version of two letters
 */
function interpolate_letter(percent, oldObj, newObj) {
	// let new_letter = [];
	// for (let i = 0; i < 4; i++) {
	// 	let vert = [];
	// 	for (let j = 0; j < 2; j++) {
	// 		vert.push(0);
	// 	}
	// 	new_letter.push(vert);
	// }
	// new_letter[0][0] = map(percent, 0, 100, oldObj[0][0], newObj[0][0]);
	// new_letter[0][1] = map(percent, 0, 100, oldObj[0][1], newObj[0][1]);
	// new_letter[1][0] = map(percent, 0, 100, oldObj[1][0], newObj[1][0]);
	// new_letter[1][1] = map(percent, 0, 100, oldObj[1][1], newObj[1][1]);
	// new_letter[2][0] = map(percent, 0, 100, oldObj[2][0], newObj[2][0]);
	// new_letter[2][1] = map(percent, 0, 100, oldObj[2][1], newObj[2][1]);
	// new_letter[3][0] = map(percent, 0, 100, oldObj[3][0], newObj[3][0]);
	// new_letter[3][1] = map(percent, 0, 100, oldObj[3][1], newObj[3][1]);
	//return new_letter;
	return newObj;
}

var swapWords = [
	"PARTICLE",
	"TRACINGS",
	"PHANTASM"
];