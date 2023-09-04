const colorFront  = "#199cff";
const colorStroke = "#e3eded";
const lines = [[10,10,90,190], [10,190,90,10], [10,10, 50, 10], [50, 10, 90, 10], [90,10, 90, 100], [90,100, 90,190], [90,190, 50, 190], [50, 190, 10, 190], [10, 190, 10, 100], [10,100, 10, 10], [10,100, 50, 100], [50,100, 90, 100], [50, 10, 50, 100], [50,100,50, 190]];
swapWords = ["NEONTYPE", "HI WORLD",  "MDDN 242"];


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  for(var i = 0; i < lines.length; i++){
	if(letterData["lines"][i] == 1){ //Draw lit up lines
		strokeWeight(9);
		stroke(letterData["red"], letterData["green"], letterData["blue"], 0.25*255);
		line(lines[i][0], lines[i][1], lines[i][2], lines[i][3] );	
		strokeWeight(5);
		stroke(letterData["red"], letterData["green"], letterData["blue"]);
		line(lines[i][0], lines[i][1], lines[i][2], lines[i][3] );	
		strokeWeight(1);
		stroke("white");		
	}else{	//Draw normal lines
		strokeWeight(2.5);
		stroke(color(33,33,33,128));
		line(lines[i][0], lines[i][1], lines[i][2], lines[i][3] );	
		strokeWeight(1);
		stroke(color(200,200,200,128));
	}	
	line(lines[i][0], lines[i][1], lines[i][2], lines[i][3] );	
  }  
}

function interpolate_letter(percent, oldData, newData){
	let new_letter = [];
	var newColor;
	if(percent >= 50){ //Fade in the new lines
		new_letter["lines"] = newData["lines"];
		var newC = color(newData["red"], newData["green"], newData["blue"], 255);		
		newColor = lerpColor(color(0,0,0,0), newC, (percent/100)-0.2);
	}else{ //Fade out the old lines
		new_letter["lines"] = oldData["lines"];
		var oC = color(oldData["red"], oldData["green"], oldData["blue"], 255);		
		newColor = lerpColor(oC, color(0,0,0,0), (percent/100)+0.20);
	}
	//Set new colors
	new_letter["red"] = red(newColor);
	new_letter["green"] = green(newColor);
	new_letter["blue"] = blue(newColor);
	return new_letter;
	
}