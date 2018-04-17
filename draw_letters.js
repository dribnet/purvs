const colorFront  = "#f8f8ff";
const colorStroke = "#ffc482";

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
  strokeWeight(5);

  // determine parameters for second circle
    line(0, 165, letterData["point1X"], letterData["point1Y"]);

  line(letterData["point1X"], letterData["point1Y"], letterData["point2X"], letterData["point2Y"]);
  line(letterData["point3X"], letterData["point3Y"], letterData["point4X"], letterData["point4Y"]);
  line(letterData["point5X"], letterData["point5Y"], letterData["point6X"], letterData["point6Y"]);
}

function interpolate_letter(percent, oldObj, newObj) {
	let new_letter = {};

		new_letter["point1X"] = map(percent, 0, 95, oldObj["point1X"], newObj["point1X"]);
		new_letter["point1Y"] = map(percent, 0, 95, oldObj["point1Y"], newObj["point1Y"]);

		new_letter["point2X"] = map(percent, 0, 95, oldObj["point2X"], newObj["point2X"]);
		new_letter["point2Y"] = map(percent, 0, 95, oldObj["point2Y"], newObj["point2Y"]);

		new_letter["point3X"] = map(percent, 0, 95, oldObj["point3X"], newObj["point3X"]);
		new_letter["point3Y"] = map(percent, 0, 95, oldObj["point3Y"], newObj["point3Y"]);

		new_letter["point4X"] = map(percent, 0, 95, oldObj["point4X"], newObj["point4X"]);
		new_letter["point4Y"] = map(percent, 0, 95, oldObj["point4Y"], newObj["point4Y"]);

		new_letter["point5X"] = map(percent, 0, 95, oldObj["point5X"], newObj["point5X"]);
		new_letter["point5Y"] = map(percent, 0, 95, oldObj["point5Y"], newObj["point5Y"]);

		new_letter["point6X"] = map(percent, 0, 95, oldObj["point6X"], newObj["point6X"]);
		new_letter["point6Y"] = map(percent, 0, 95, oldObj["point6Y"], newObj["point6Y"]);



	return new_letter;

}

var swapWords = [
	"PLAIN AS",
	"CATSRGR8",
	"MYNAMEIS",
	"CJMOFFATT",
	"PALADIN ",
	"SORCERER",
	" WIZARD ",
	"HELP PLZ",
	"IMRUNNIN",
	"OUT OF  ",
	"IDEASFOR",
	"INTEREST",
	"INGWORDS",
]
