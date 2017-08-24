/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [151, 102, 52];
stroke_color = [95, 52, 8];

function FaceMap() {
  this.hairLength = 50;
  this.hairColor = 50;
  this.backgroundRotation = random(0,180);

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    this.tilt_value = this.colour1;
    this.eye_value = this.colour2;
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

    //background of bear
    pushMatrix();
    rotate(this.backgroundRotation);
    fill(map(this.tilt_value,0,100,91,150),map(this.eye_value,0,100,45,65),map(this.eye_value,0,100,12,120));
    var curHairLength = map(this.hairLength, 0, 100, 0, 3);
    rect(-3, -2*curHairLength, 6, 3*curHairLength);
    popMatrix();

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

//Draw ears outer
    noStroke();
    fill(87 + this.eye_value, 58 + this.eye_value, 28 + this.eye_value);
    ellipse(positions.right_eyebrow[4][0],positions.right_eyebrow[2][1]-130* (positions.right_eye[5][1]-positions.right_eye[2][1])/30,160*(positions.right_eye[0][0]-positions.right_eye[4][0])/40,160* (positions.right_eye[5][1]-positions.right_eye[2][1])/20)
    ellipse(positions.left_eyebrow[1][0],positions.left_eyebrow[3][1]-130*(positions.right_eye[5][1]-positions.left_eye[2][1])/30,160*(positions.left_eye[0][0]-positions.left_eye[4][0])/40,160* (positions.left_eye[5][1]-positions.left_eye[2][1])/20)
//Draw ears inner
    fill(211,191,180);
    ellipse(positions.right_eyebrow[4][0],positions.right_eyebrow[2][1]-130* (positions.right_eye[5][1]-positions.right_eye[2][1])/30,160*(positions.right_eye[0][0]-positions.right_eye[4][0])/54,160* (positions.right_eye[5][1]-positions.right_eye[2][1])/27)
    ellipse(positions.left_eyebrow[1][0],positions.left_eyebrow[3][1]-130*(positions.right_eye[5][1]-positions.left_eye[2][1])/30,160*(positions.left_eye[0][0]-positions.left_eye[4][0])/54,160* (positions.left_eye[5][1]-positions.left_eye[2][1])/27)   
//Draw bear head top    
    fill(87 + this.eye_value, 58 + this.eye_value, 28 + this.eye_value);
    ellipse((positions.chin[0][0]+positions.chin[16][0])/2,
      (positions.chin[0][1]+positions.chin[16][1])/2,
      sqrt(sq(positions.chin[0][0]-positions.chin[13][0])+sq(positions.chin[0][1]-positions.chin[13][1])),
      sqrt(sq(positions.chin[0][0]-positions.chin[13][0])+sq(positions.chin[0][1]-positions.chin[13][1])));
//Draw bear head bottom/chin    
    beginShape();
    vertex(positions.chin[0][0], positions.chin[0][1]);
    for(var i=0; i<8;i+=3) {
        curveVertex(positions.chin[i][0], positions.chin[i][1]);
    }
    for(var i=9; i<positions.chin.length;i+=3) {
        curveVertex(positions.chin[i][0], positions.chin[i][1]);
    }
    for(var i=positions.right_eyebrow.length-1; i>=2;i--) {
      vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    }
    endShape(CLOSE);
//Draw bear snout, mapping to face with beziers referencing nose,mouth and chin
    fill(211,191,180);
    noStroke();
    beginShape();
    vertex(positions.nose_bridge[2][0],positions.nose_bridge[2][1]);
    bezierVertex(positions.nose_bridge[2][0],
      positions.nose_bridge[2][1],
      map(-64,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5)),
      map(49,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5)),
      map(-63,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5)),
      map(88,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5)));
    bezierVertex(map(-65,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5)),
      map(104,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5)),
      map(-36,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5)),
      map(128,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5)),
      map(0,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5)),
      map(128,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5)));
    bezierVertex(map(36,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5)),
      map(128,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5)),
      map(65,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5)),
      map(104,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5)),
      map(63,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5)),
      map(88,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5)));
    bezierVertex(map(64,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5)),
      map(49,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5)),
      map(22,-63,63,(positions.top_lip[0][0]*0.5) + (positions.chin[3][0]*0.5),(positions.top_lip[7][0]*0.5) + (positions.chin[13][0]*0.5)),
      map(20,20,128,positions.nose_bridge[2][1],(positions.chin[8][1]*0.5)+(positions.chin[9][1]*0.5)),
      positions.nose_bridge[2][0],
      positions.nose_bridge[2][1]);
    endShape(CLOSE);
    fill('#5f4c2c');
//Draw nose
    beginShape();
    curveVertex(positions.nose_tip[2][0], positions.nose_tip[2][1]);
    curveVertex(positions.nose_tip[0][0], positions.nose_tip[0][1]);
    curveVertex(positions.nose_bridge[3][0], positions.nose_bridge[3][1]);
    curveVertex(positions.nose_tip[4][0], positions.nose_tip[4][1]);
    curveVertex(positions.nose_tip[2][0], positions.nose_tip[2][1]);
    endShape(CLOSE);
// eyes main
    fill(255);
    ellipse(eye1_pos[0], eye1_pos[1], 60 * (positions.left_eye[0][0]-positions.left_eye[4][0])/40, 120 * (positions.left_eye[5][1]-positions.left_eye[2][1])/15);
    ellipse(eye2_pos[0], eye2_pos[1], 60 * (positions.right_eye[0][0]-positions.right_eye[4][0])/40, 120 * (positions.right_eye[5][1]-positions.right_eye[2][1])/15); 
//fill1
    fill(map(this.tilt_value,0,100,247,0),map(this.eye_value,0,100,193,0),map(this.eye_value,0,100,61,0));
    ellipse(eye1_pos[0]-(5* scale),eye1_pos[1]-(9* scale),35* (positions.left_eye[0][0]-positions.left_eye[4][0])/40,75* (positions.left_eye[5][1]-positions.left_eye[2][1])/15);
    fill(map(this.tilt_value,0,100,0,208),map(this.eye_value,0,100,0,29),map(this.eye_value,0,100,0,95));
    ellipse(eye1_pos[0]-(5* scale),eye1_pos[1]-(4* scale),30* (positions.left_eye[0][0]-positions.left_eye[4][0])/40,60* (positions.left_eye[5][1]-positions.left_eye[2][1])/15);
    fill(map(this.tilt_value,0,100,255,244),map(this.eye_value,0,100,255,241),map(this.eye_value,0,100,255,88));
    ellipse(eye1_pos[0]-(8* scale),eye1_pos[1]-(21* scale),13* (positions.left_eye[0][0]-positions.left_eye[4][0])/40,21* (positions.left_eye[5][1]-positions.left_eye[2][1])/15);
    fill('#FFFFFF');
    ellipse(eye1_pos[0]-(6* scale),eye1_pos[1]-(8* scale),6* (positions.left_eye[0][0]-positions.left_eye[4][0])/40,12* (positions.left_eye[5][1]-positions.left_eye[2][1])/15);
    fill('#FFFFFF');
    ellipse(eye1_pos[0]-(3* scale),eye1_pos[1]+(14* scale),11* (positions.left_eye[0][0]-positions.left_eye[4][0])/40,17* (positions.left_eye[5][1]-positions.left_eye[2][1])/15);
//fill2
    fill(map(this.tilt_value,0,100,247,0),map(this.eye_value,0,100,193,161),map(this.eye_value,0,100,61,186));
    ellipse(eye2_pos[0]+(5* scale), eye2_pos[1]-(9* scale), 35 * (positions.right_eye[0][0]-positions.right_eye[4][0])/40, 75 * (positions.right_eye[5][1]-positions.right_eye[2][1])/15); 
    fill('#000000');
    ellipse(eye2_pos[0]+(5* scale), eye2_pos[1]-(4* scale), 30 * (positions.right_eye[0][0]-positions.right_eye[4][0])/40, 60 * (positions.right_eye[5][1]-positions.right_eye[2][1])/15); 
    fill(map(this.tilt_value,0,100,255,212),map(this.eye_value,0,100,255,29),map(this.eye_value,0,100,255,96));
    ellipse(eye2_pos[0]+(4* scale), eye2_pos[1]-(19* scale), 13 * (positions.right_eye[0][0]-positions.right_eye[4][0])/40, 21 * (positions.right_eye[5][1]-positions.right_eye[2][1])/15); 
    fill('#ffffff');
    ellipse(eye2_pos[0]+(7* scale), eye2_pos[1]-(6* scale), 6 * (positions.right_eye[0][0]-positions.right_eye[4][0])/40, 12 * (positions.right_eye[5][1]-positions.right_eye[2][1])/15); 
        fill(map(this.tilt_value,0,100,255,244),map(this.eye_value,0,100,255,241),map(this.eye_value,0,100,255,88));
    ellipse(eye2_pos[0]+(7* scale), eye2_pos[1]+(14* scale), 11 * (positions.right_eye[0][0]-positions.right_eye[4][0])/40, 17 * (positions.right_eye[5][1]-positions.right_eye[2][1])/15); 

  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.hairLength = settings[0];
    this.hairColor = settings[1];
    this.colour1 = settings[2];
    this.colour2 = settings[3];
    this.colour3 = settings[4];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(2);
    properties[0] = this.hairLength;
    properties[1] = this.hairColor;
    properties[2] = this.colour1;
    properties[3] = this.colour2;
    properties[4] = this.colour3;
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