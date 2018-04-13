const colorFront  = "#199cff";
const colorStroke = "#e3eded";

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
  strokeWeight(3);

  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = 50+letterData["offsetx"];
  //let pos2y = 150+letterData["offsety"];
  //
  //// draw two circles
  //ellipse(50, 150, 100, 100);
  //ellipse(pos2x, pos2y, size2, size2);
  //
  
  for(var i = 0; i < 14; i++){
	strokeWeight(4);
	if(letterData["lines"][i] == 1){
		stroke(letterData["letterColour"]);
	}else{
		stroke("black");
	}	
	line(0,100,50, 100); 
  }
  
  ////Outer Box
  //stroke(colorStroke);
  //line(0,0,50, 0);
  //stroke(colorStroke);
  //line(50,0,100, 0);
  // stroke(colorStroke);
  //line(100,0,100, 100);
  // stroke(colorStroke);
  //line(100,100,100, 200);
  // stroke(colorStroke);
  //line(100,200,50, 200);
  // stroke(colorStroke);
  //line(50,200, 0, 200);
  // stroke(colorStroke);
  //line(0, 200,0, 100);
  // stroke(colorStroke);
  //line(0, 100, 0, 0);
  //
  ////Cross
  // strokeWeight(4);
  // stroke("red");
  //line(0,100,50, 100);
  // stroke("red");
  //line(50,100,100, 100);
  // strokeWeight(3);
  // stroke(colorStroke);
  //line(50, 0, 50, 100);
  // stroke(colorStroke);
  //line(50,100,50, 200);
  //
  ////V
  // strokeWeight(4);
  //stroke("red");
  //line(0,200,50, 0);
  //line(50,0,100, 200);
  //
  ////V2
  // strokeWeight(3);
  //stroke(colorStroke);
  //line(0, 0, 50, 200);
  //line(50, 200,100, 0);
  
}
