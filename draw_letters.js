	const colorFront  = "#199cff";
	const colorStroke = "#233f11";

var swapWords = [
	"BezierTest",
	"enchalada",
	"tacobell",
	"Tortillia"
]

function preload()[
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
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES);

// My vertex parameters
        let trans_1x= letterData["translate_1x"];
        let trans_1y= letterData["translate_1y"];
        let trans_2x= letterData["translate_2x"];
        let trans_2y= letterData["translate_2y"];
	let vert_1x = letterData["v1x"];
	let vert_1y = letterData["v1y"];
	let vert_2x = letterData["v2x"];
	let vert_2y = letterData["v2y"];
	let vert_3x = letterData["v3x"];
	let vert_3y = letterData["v3y"];
	let rot_deg1 = letterData["rot1"];	
	let rot_deg2 = letterData["rot2"];	
  // draw two circles
  //ellipse(50, 150, 100, 100);
  //ellipse(pos2x, pos2y, size2, size2);
	//Draw with letter data from letters.js	
	vertex_spline(vert_1x, vert_1y, vert_2x, vert_2y, vert_3x, vert_3y);
	
	//Draw Triangle 1
	beginShape();
	push();
	fill(128);
	translate(trans_1x, trans_1y);
	rotate(rot_deg1);
	triangle(50, 18, 80, 80, 16, 80);
	pop();
	endShape();
	
        //Draw Triangle 2
	beginShape();
	push();
	fill(128);
	translate(trans_2x, trans_2y);
	rotate(rot_deg2);
	triangle(50, 18, 80, 80, 16, 80);
	pop();
	endShape();


}

function triangle(){
	//Drawing triangles
	beginShape();
	fill(128);
	triangle(50, 18, 80, 80, 16, 80);
	endShape();	
return;
}

function vertex_spline(vert_1x, vert_1y, vert_2x, vert_2y, vert_3x, vert_3y){
	//Drawing spline using vertex() no fill
	beginShape();
		noFill();
		bezierDetail(80);
		vertex(vert_1x, vert_1y);
		vertex(vert_2x, vert_2y);
		vertex(vert_3x, vert_3y);
	endShape();
return;	
}
/*function interpolate_alpha(alph_percent, oldObj, newObj) {
	let new_alpha = {};
	new_alpha["alpha"] = map(alph_percent, 0, 100, oldObj["alpha"], newObj["alpha"]);
	return new_letter;
}*/

function interpolate_letter(percent, oldObj, newObj) {
	let new_letter = {};
	new_letter["v1x"] = map(percent, 0, 100, oldObj["v1x"], newObj["v1x"]);
	new_letter["v1y"] = map(percent, 0, 100, oldObj["v1y"], newObj["v1y"]);
	new_letter["v2x"] = map(percent, 0, 100, oldObj["v2x"], newObj["v2x"]);
	new_letter["v2y"] = map(percent, 0, 100, oldObj["v2y"], newObj["v2y"]);
	new_letter["v3x"] = map(percent, 0, 100, oldObj["v3x"], newObj["v3x"]);
	new_letter["v3y"] = map(percent, 0, 100, oldObj["v3y"], newObj["v3y"]);
	new_letter["translate_1x"] = map(percent, 0, 100, oldObj["translate_1x"], newObj["translate_1x"]);
	new_letter["translate_1y"] = map(percent, 0, 100, oldObj["translate_1y"], newObj["translate_1y"]);
	new_letter["translate_2x"] = map(percent, 0, 100, oldObj["translate_2x"], newObj["translate_2x"]);
	new_letter["translate_2y"] = map(percent, 0, 100, oldObj["translate_2y"], newObj["translate_2y"]);
	new_letter["rot1"] = map(percent, 0, 100, oldObj["rot1"], newObj["rot1"]);
	new_letter["rot2"] = map(percent, 0, 100, oldObj["rot2"], newObj["rot2"]);
	return new_letter;
}
