let cY; //This is the map for the Y value for each line
let cX; //This is the map for the X value for each line
let gap; //determines the value of verticies the system skips before the next draw

function drawLetter(letterData) { //Draw each letter based on its letterData and strokes
  stroke(115,115,115); //Each stroke has a varrying color starting with the lightest or first stroke drawn
  strokeWeight(4); //the weight is constant (so that the gap and weight are congruent)
  //the x and y values for each point in the first stroke
  let x1 = letterData["stroke1_x1"];
  let x2 = letterData["stroke1_x2"];
  let y1 = letterData["stroke1_y1"];
  let y2 = letterData["stroke1_y2"];
  
  drawin(x1, y1, x2, y2); //passes the points to be drawn onto the drawin function
  
  //Stroke two (darkish grey)
  stroke(85,85,85);
  let x3 = letterData["stroke2_x1"];
  let x4 = letterData["stroke2_x2"];
  let y3 = letterData["stroke2_y1"];
  let y4 = letterData["stroke2_y2"];
  
  drawin(x3, y3, x4, y4);
  
  //stroke 3 (black)
  stroke(0,0,0);
  let x5 = letterData["stroke3_x1"];
  let x6 = letterData["stroke3_x2"];
  let y5 = letterData["stroke3_y1"];
  let y6 = letterData["stroke3_y2"];
  
  drawin(x5, y5, x6, y6);
}

function drawin(x1, y1, x2, y2){ //being passed four points, draws the values in between them
  length = ((((x2 - x1)^2)+((y2 - y1)^2))^0.5); //The absolute value distance between any two points
  beginShape(LINES); //begins drawing based on lines
  let gap = 0; //this tracks the timing for the difference in the gap 
  for(i = 0; i < length; i++){ //iterates through the length
    //these map the values for the line based on the iteration
	  let cX = map(i, 0, length, x1, x2); 
    let cY = map(i, 0, length, y1, y2);
    if(gap > 4){ //this creates the gap in letters based on the required size of the gap and relation to stroke
      gap = 0;
      vertex(cX, cY);
      vertex(cX + 8, cY); //the size of the second line (8 (stroke * 2))
    }
    else{gap = gap + 1;}; //increments gap
  };
  endShape(); //completes shape
};

function interpolate_letter(percent, oldObj, newObj){ //This maps the changes in all 12 values for the old and new letter data and then passes it based on the new letter formations
  let new_letter = {};
  new_letter["stroke1_x1"] = map(percent, 0, 100, oldObj["stroke1_x1"], newObj["stroke1_x1"]);
  new_letter["stroke1_y1"] = map(percent, 0, 100, oldObj["stroke1_y1"], newObj["stroke1_y1"]);
  new_letter["stroke1_x2"] = map(percent, 0, 100, oldObj["stroke1_x2"], newObj["stroke1_x2"]);
  new_letter["stroke1_y2"] = map(percent, 0, 100, oldObj["stroke1_y2"], newObj["stroke1_y2"]);
  new_letter["stroke2_x1"] = map(percent, 0, 100, oldObj["stroke2_x1"], newObj["stroke2_x1"]);
  new_letter["stroke2_y1"] = map(percent, 0, 100, oldObj["stroke2_y1"], newObj["stroke2_y1"]);
  new_letter["stroke2_x2"] = map(percent, 0, 100, oldObj["stroke2_x2"], newObj["stroke2_x2"]);
  new_letter["stroke2_y2"] = map(percent, 0, 100, oldObj["stroke2_y2"], newObj["stroke2_y2"]);
  new_letter["stroke3_x1"] = map(percent, 0, 100, oldObj["stroke3_x1"], newObj["stroke3_x1"]);
  new_letter["stroke3_y1"] = map(percent, 0, 100, oldObj["stroke3_y1"], newObj["stroke3_y1"]);
  new_letter["stroke3_x2"] = map(percent, 0, 100, oldObj["stroke3_x2"], newObj["stroke3_x2"]);
  new_letter["stroke3_y2"] = map(percent, 0, 100, oldObj["stroke3_y2"], newObj["stroke3_y2"]);
  return new_letter; //returns the new letter data obj
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}