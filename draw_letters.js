const colorFront  = "#199cff";
const colorStroke = "#e3eded";
const lines = [[0,0, 50, 0], [50, 0, 100, 0], [100,0, 100, 100], [100,100, 100,200], [100,200, 50, 200], [50, 200, 0, 200], [0, 200, 0, 100], [0,100, 0, 0], [0,100, 50, 100], [50,100, 100, 100], [50, 0, 50, 100], [50,100,50, 200], [0,0,100,200], [0,200,100,0]];
//const swapWords = ["FONTNAME", "PICKWORD",  "ETC12345"];

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  for(var i = 0; i < lines.length; i++){
	if(letterData["lines"][i] == 1){
		strokeWeight(9);
		stroke(letterData["red"], letterData["green"], letterData["blue"], 0.25*255);
		line(lines[i][0], lines[i][1], lines[i][2], lines[i][3] );	
		strokeWeight(5);
		stroke(letterData["red"], letterData["green"], letterData["blue"]);
		line(lines[i][0], lines[i][1], lines[i][2], lines[i][3] );	
		strokeWeight(1);
		stroke("white");		
	}else{
		
		strokeWeight(1.5);
		stroke("#333333");
		line(lines[i][0], lines[i][1], lines[i][2], lines[i][3] );	
		strokeWeight(.5);
		stroke("white");
	}	
	line(lines[i][0], lines[i][1], lines[i][2], lines[i][3] );	
  }  
}
