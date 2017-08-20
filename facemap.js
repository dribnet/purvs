/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [254, 244, 110];
stroke_color = [146, 147, 3];

function FaceMap() {
  this.hairLength = 50;
  this.hairColor = 50;
  this.strokeValue = .05;
  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
	
  this.draw = function(positions) {
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

    var smiling = true;

    var lookingLeft = false;
    var lookingRight = false;

    if(Math.abs(positions.nose_bridge[3][0] - positions.nose_bridge[0][0]) > 0.052){
    	if(positions.nose_bridge[3][0] < positions.nose_bridge[0][0])
    		lookingLeft = true;

    	if(positions.nose_bridge[3][0] > positions.nose_bridge[0][0])
    		lookingRight = true;
	}

    console.log("Tip: " + positions.nose_bridge[3][0]);
    console.log("Bridge: " + positions.nose_bridge[0][0]);
    console.log("Diff: " + Math.abs(positions.nose_bridge[3][0] - positions.nose_bridge[0][0]));
    //Sponged Variables
    var eye_size = 67;
    var iris_size = 27;
    var pupil_size = 10;
    var iris_color = "#43c6f2";
    var pupil_color = "#000000";
    var mouth_color = "#773536";
    var tongue_color = "#dd9c98"
    var tongue_outine = "#ca2931";

    var curHairColor = map(this.hairColor, 0, 100, 200, 20);
    fill(curHairColor);
    var curHairLength = map(this.hairLength, 0, 100, 0, 3);
    rect(-3, -2*curHairLength, 6, 3*curHairLength);

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    // head
    var head_size = 1;
    stroke(stroke_color);
    fill(fg_color);
    beginShape();
    curveVertex(positions.chin[0][0], positions.chin[0][1]);
    for(var i=0; i<positions.chin.length;i++) {
      curveVertex(positions.chin[i][0], positions.chin[i][1]);
    }
    /*for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    }*/
    curveVertex(positions.right_eyebrow[positions.right_eyebrow.length-1][0], positions.right_eyebrow[positions.right_eyebrow.length-1][1] - head_size/2);
    curveVertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1] - head_size);

    curveVertex(positions.left_eyebrow[positions.left_eyebrow.length-1][0], positions.left_eyebrow[positions.left_eyebrow.length-1][1] - head_size);
    curveVertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1] - head_size/2);

    endShape(CLOSE);

  //CHEEKS
  fill(fg_color);
  stroke(stroke_color);
  strokeWeight(.05);

  //LEFT CHEEK
  var x = positions.top_lip[0][0] - 0.42;
  var y = positions.top_lip[0][1]-0.15;

  if(smiling)
    curve(x+0.5, y+2, x, y, x + .44, y, x+.44-0.4, y+2);


  //RIGHT CHEEK
  x = positions.top_lip[6][0] + 0.42;
  y = positions.top_lip[6][1]-0.15;

  if(smiling)
    curve(x-0.5, y+2, x, y, x - .44, y, x-.44+0.4, y+2);

  fill(stroke_color);
  strokeWeight(0);
  var dimble_size = 0.07;
  //Dimbles Left
  ellipse(positions.top_lip[0][0] - .1, positions.top_lip[0][1] - .18, dimble_size, dimble_size);
  ellipse(positions.top_lip[0][0] - .2, positions.top_lip[0][1] - .28, dimble_size, dimble_size);
  ellipse(positions.top_lip[0][0] - .3, positions.top_lip[0][1] - .18, dimble_size, dimble_size);

  //Dimbles Right
  ellipse(positions.top_lip[6][0] + .1, positions.top_lip[6][1] - .18, dimble_size, dimble_size);
  ellipse(positions.top_lip[6][0] + .2, positions.top_lip[6][1] - .28, dimble_size, dimble_size);
  ellipse(positions.top_lip[6][0] + .3, positions.top_lip[6][1] - .18, dimble_size, dimble_size);

    // mouth
    /*noStroke();
    fill(bg_color);
    beginShape();
    for(var i=0; i<positions.top_lip.length;i++) {
      vertex(positions.top_lip[i][0], positions.top_lip[i][1]);
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.bottom_lip.length;i++) {
      vertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]);
    }
    endShape(CLOSE);*/

    //MOUTH
    //Inside of mouth
    strokeWeight(this.strokeValue);
	fill(mouth_color);
	stroke(0,0,0);
	beginShape();
	curveVertex(positions.bottom_lip[0][0], positions.bottom_lip[0][1]);
	for(var i=0; i<7;i++) {
      curveVertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]);
    }
    curveVertex(positions.bottom_lip[0][0], positions.bottom_lip[0][1]);
    curveVertex(positions.bottom_lip[0][0], positions.bottom_lip[0][1]);
    endShape();
	//curve(0, 0, positions.bottom_lip[0][0], positions.bottom_lip[0][1], positions.bottom_lip[6][0], positions.bottom_lip[6][1],0,0);
	push();
	//translate(-10, mouth_value/8 - 110);
	fill(tongue_color);
	strokeWeight(0);
	//scale(1.2, 1.2);
	
	ellipse(95, 195, 52, 19);
	
	strokeWeight(4);
	stroke(tongue_outine);
	
	curve(100,195, 67,200,90,185, 150, 185);//left tongue part
	curve(70,235, 90,190, 120,195, 150, 285);//right tongue part
	pop();
	
	strokeWeight(this.strokeValue);
	fill(0,0,0, 0);
	stroke(0,0,0);
	
	//curve(150,-200 - mouth_value, 200,100,0,100,50,-200 - mouth_value);
	
  	// mouth-hole with background color
  	stroke(0,0,0);
  	fill(255,255,255);
  	var teethX = positions.bottom_lip[0][0];
  	var teethY = positions.bottom_lip[0][1];
  	rect(teethX - ((teethX - positions.bottom_lip[6][0])/4) - .3, teethY,.3,.35);
  	rect(positions.bottom_lip[6][0] + ((teethX - positions.bottom_lip[6][0])/4), teethY,.3,.35);
  	fill(fg_color);
  	curve(150,-200, 200,100,0,100,50,-200);

  //Eyes
  strokeWeight(this.strokeValue);
  stroke(0,0,0);

	//LEFT EYE --our left not the faces left
  //WHITE PART
  fill(255,255,255);
  ellipse(eye1_pos[0], eye1_pos[1], eye_size * scale, eye_size * scale);
  //IRIS
  fill(iris_color);
  strokeWeight(this.strokeValue);
  ellipse(eye1_pos[0], eye1_pos[1], iris_size * scale, iris_size * scale);
  //PUPIL
  fill(pupil_color);
  strokeWeight(this.strokeValue);
  ellipse(eye1_pos[0], eye1_pos[1], pupil_size * scale, pupil_size * scale);

  //RiGHT EYE --Our right
  strokeWeight(this.strokeValue);
  //WHITE PART
  fill(255,255,255);
  ellipse(eye2_pos[0], eye2_pos[1], eye_size * scale, eye_size * scale);
  //IRIS
  fill(iris_color);
  strokeWeight(this.strokeValue);
  ellipse(eye2_pos[0], eye2_pos[1], iris_size * scale, iris_size * scale);
  //PUPIL
  fill(pupil_color);
  strokeWeight(this.strokeValue);
  ellipse(eye2_pos[0], eye2_pos[1], pupil_size * scale, pupil_size * scale);
    
//if(positions.nose_tip[2][0] < positions.nose_bridge[0][0])
    // nose
    var nose_size = 0.25;
    var nose_dir = 1;
    if(!lookingLeft)
    	nose_dir = -1;

    fill(fg_color);
    strokeWeight(this.strokeValue);
    stroke(0,0,0);
    if(lookingLeft || lookingRight){
    beginShape();
    curveVertex(positions.nose_bridge[1][0], eye1_pos[1] + eye_size * scale / 2);
    curveVertex(positions.nose_bridge[1][0], eye1_pos[1] + eye_size * scale / 2);

    curveVertex(positions.nose_bridge[1][0] - (0.25 * nose_dir), eye1_pos[1] + eye_size * scale / 2);
	curveVertex(positions.nose_bridge[1][0] - (1 * nose_dir), eye1_pos[1] + eye_size * scale / 2 - 0.05);

    curveVertex(positions.nose_bridge[1][0] - (1.5 * nose_dir), eye1_pos[1] + eye_size * scale / 2 - 0.15);
    curveVertex(positions.nose_bridge[1][0] - (1.4 * nose_dir), eye1_pos[1] + eye_size * scale / 2 + nose_size - 0.05);

    curveVertex(positions.nose_bridge[1][0] - (.75 * nose_dir), eye1_pos[1] + eye_size * scale / 2 + nose_size + 0.05);

    curveVertex(positions.nose_bridge[1][0] - (.1 * nose_dir), eye1_pos[1] + eye_size * scale / 2 + nose_size);

    curveVertex(positions.nose_bridge[1][0], eye1_pos[1] + eye_size * scale / 2 + nose_size - 0.01);
    curveVertex(positions.nose_bridge[1][0], eye1_pos[1] + eye_size * scale / 2 + nose_size - 0.01);
    endShape();

    curve(positions.nose_bridge[1][0], eye1_pos[1] + eye_size * scale / 2, positions.nose_bridge[1][0] - (1.5 * nose_dir), eye1_pos[1] + eye_size * scale / 2 - 0.15, positions.nose_bridge[1][0] - (1.4 * nose_dir), eye1_pos[1] + eye_size * scale / 2 + nose_size - 0.05, positions.nose_bridge[1][0], eye1_pos[1] + eye_size * scale / 2 + nose_size - 0.01);
	}
	else{ //Looking straight
		var noseY = eye2_pos[1] + 0.9;
		curve(positions.nose_bridge[1][0]+4,noseY+3, positions.nose_bridge[1][0] - 0.15, noseY - 0.1, positions.nose_bridge[1][0] + 0.15, noseY, positions.nose_bridge[1][0] - 4,noseY+4)

	}
    //EYEBROWS
    stroke(fg_color);
    strokeWeight(this.strokeValue*4);
    var eyebrowLength;
    var offset = 0.12;
    noFill();
    //LEFT EYEBROW
    eyebrowLength = positions.left_eyebrow.length;
    beginShape();
    curveVertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1] - offset);
    for(var i = 1; i < eyebrowLength; i++){
    	curveVertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1] - offset);
	}
	curveVertex(positions.left_eyebrow[eyebrowLength-1][0], positions.left_eyebrow[eyebrowLength-1][1] - offset);
    endShape();
    //RIGHT EYEBROW
    eyebrowLength = positions.right_eyebrow.length;
    beginShape();
    curveVertex(positions.right_eyebrow[0][0], positions.right_eyebrow[1][1] - offset);
    for(var i = 0; i < eyebrowLength-1; i++){
    	curveVertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1] - offset);
	}
	curveVertex(positions.right_eyebrow[eyebrowLength-2][0], positions.right_eyebrow[eyebrowLength-2][1] - offset);
    endShape();

        //EYEBROWS
    stroke(0,0,0);
    strokeWeight(this.strokeValue);
    var eyebrowLength;
    noFill();
    //LEFT EYEBROW
    eyebrowLength = positions.left_eyebrow.length;
    beginShape();
    curveVertex(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]);
    for(var i = 0; i < eyebrowLength; i++){
    	curveVertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
	}
	curveVertex(positions.left_eyebrow[eyebrowLength-1][0], positions.left_eyebrow[eyebrowLength-1][1]);
    endShape();
    //RIGHT EYEBROW
    eyebrowLength = positions.right_eyebrow.length;
    beginShape();
    curveVertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]);
    for(var i = 0; i < eyebrowLength; i++){
    	curveVertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
	}
	curveVertex(positions.right_eyebrow[eyebrowLength-1][0], positions.right_eyebrow[eyebrowLength-1][1]);
    endShape();

	/*
    beginShape();
    for(var i=0; i<positions.left_eye.length;i++) {
      vertex(positions.left_eye[i][0], positions.left_eye[i][1]);
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.right_eye.length;i++) {
      vertex(positions.right_eye[i][0], positions.right_eye[i][1]);
    }
    endShape(CLOSE);

    fill(fg_color);
    ellipse(eye1_pos[0], eye1_pos[1], 16 * scale, 16 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 16 * scale, 16 * scale);

    fill(stroke_color);
    beginShape();
    for(var i=0; i<positions.right_eyebrow.length; i++) {
      vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.left_eyebrow.length; i++) {
      vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    }
    endShape(CLOSE);
	*/
    strokeWeight(1);  
	
  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.hairLength = settings[0];
    this.hairColor = settings[1];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(2);
    properties[0] = this.hairLength;
    properties[1] = this.hairColor;
    return properties;
  }
}

// given a point, return the average
function average_point(list) {
  var sum_x = 0;
  var sum_y = 0;
  var num_points = 0;
  for(var i=0; i<list.length; i++) {
    sum_x += list[i][0];
    sum_y += list[i][1];
    num_points += 1; 
  }
  return [sum_x / num_points, sum_y / num_points];
}