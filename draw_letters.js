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
  
  for(var i = 0; i < 16; i++){
	strokeWeight(4);
	if(letterData["lines"][i] == 1){
		strokeWeight(5);
		stroke(letterData["letterColour"]);
	}else{
		strokeWeight(1);
		stroke("black");
	}	
	drawLines(i);
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
  ////UV
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

//I hope to change this :L
function drawLines(i){
	if(i == 0){
		line(0,0,50, 0);
	}else if(i == 1){
		line(50,0,100, 0);
	}else if(i == 2){
		line(100,0,100, 100);
	}else if(i == 3){
		line(100,100,100, 200);
	}else if(i == 4){
		line(100,200,50, 200);
	}else if(i == 5){
		line(50,200, 0, 200);
	}else if(i == 6){
		line(0, 200,0, 100);
	}else if(i == 7){
		line(0, 100, 0, 0);
	}else if(i == 8){
		line(0,100,50, 100);
	}else if(i == 9){
		line(50,100,100, 100);
	}else if(i == 10){
		line(50, 0, 50, 100);
	}else if(i == 11){
		line(50,100,50, 200);
	}else if(i == 12){
		line(0,200,50, 0);
	}else if(i == 13){
		line(50,0,100, 200);
	}else if(i == 14){
		line(0, 0, 50, 200);
	}else {
		line(50, 200,100, 0);
	}
}
