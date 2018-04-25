const colorFront  = "#199cff";
const colorStroke = "#233f11";

var swapWords = [
	"BezierTest",
	"enchalada",
	"tacobell",
	"Tortillia"
]


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

// determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50+letterData["offsetx"];
  let pos2y = 150+letterData["offsety"];

  // draw two circles
  ellipse(50, 150, 100, 100);
  ellipse(pos2x, pos2y, size2, size2);
//My declarations
	let vert1_pos = letterData["vertArr1"];
	let vert2_pos = letterData["quadArr1"];
	let vert3_pos = letterData["quadArr2"];
	let obj_alpha = letterData["alpha"];

	drawBezier(vert1_pos, vert2_pos, vert3_pos, obj_alpha);
	
}

function drawBezier(vert1_arr, vert2_arr, vert3_arr) {
	push();
	var strokeColor = color(62, 157, 231);
	//stroke_color(62, 157, 231, cos(millis()/1000);
	strokeColor.setAlpha(256);
	stroke(strokeColor);
	noFill();
	strokeWeight(4);
	//Pass vertex data as int to array
	beginShape();
	bezierDetail(50);
	vertex.apply(this, vert1_arr);
	quadraticVertex.apply(this, vert2_arr);
	quadraticVertex.apply(this, vert3_arr);
	endShape();
	pop();
	return;
}

//sets the alpha of an object to on
function interpolate_alpha(alph_percent, oldObj, newObj) {
	let new_alpha = {};
	new_alpha["alpha"] = map(alph_percent, 0, 100, oldObj["alpha"], newObj["alpha"]);
	return new_letter;
}

function interpolate_letter(percent, oldObj, newObj) {
	let new_letter = {};
	new_letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
	new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
	new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
	return new_letter;
}
