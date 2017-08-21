/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [151, 102, 52];
stroke_color = [95, 52, 8];

//gollum colours
// bg_color = "#E02B3B";
// fg_color = "#E02B3B";
gollum_skin ="#CAB4A7";
gollum_eyeskin ="#96897F";
gollum_eyes = "#54C2FF";
gollum_tooth ="#FFF3C2";
gollum_lips = "#695F59";

function FaceMap() {
  this.hairLength = 50;
  this.hairColor = 50;

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

    //head
    stroke(gollum_eyeskin);
    fill(gollum_skin);
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0], positions.chin[i][1]);
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]-0.1);
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]-0.1);
    }
    endShape(CLOSE);

    //left eyebrow
    noFill();
    stroke(gollum_eyeskin);
    beginShape();  
    vertex(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]); 
    vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]); 
    endShape(CLOSE);
    beginShape();  
    vertex(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]+0.1); 
    vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]+0.1); 
    endShape(CLOSE);
    beginShape();  
    vertex(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]+0.2); 
    vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]+0.2); 
    endShape(CLOSE);
    //right eyebrow
    beginShape();  
    vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]); 
    vertex(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]);
    endShape(CLOSE);
    beginShape();  
    vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]+0.1); 
    vertex(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]+0.1);
    endShape(CLOSE);
    beginShape();  
    vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]+0.2); 
    vertex(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]+0.2);
    endShape(CLOSE);

    //connecting brow
    beginShape();  
    vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]); 
    vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]);
    endShape(CLOSE);
    beginShape();  
    vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]+0.1); 
    vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]+0.1);
    endShape(CLOSE);
    beginShape();  
    vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]+0.2); 
    vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]+0.2);
    endShape(CLOSE);
    


    // mouth
    noStroke();
    fill(gollum_eyeskin);
    beginShape();
    for(var i=0; i<positions.top_lip.length;i++) {
      vertex(positions.top_lip[i][0], positions.top_lip[i][1]);
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.bottom_lip.length;i++) {
      vertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]);
    }
    endShape(CLOSE);

    // teeth
    noStroke();
    fill(gollum_tooth);
    beginShape();
    vertex(positions.top_lip[1][0], positions.top_lip[0][1]+0.1);
    vertex(positions.top_lip[2][0], positions.top_lip[1][1]);
    vertex(positions.top_lip[3][0], positions.top_lip[0][1]+0.1);
    endShape(CLOSE);
    beginShape();
    vertex(positions.top_lip[3][0], positions.top_lip[0][1]+0.1);
    vertex(positions.top_lip[4][0], positions.top_lip[1][1]);
    vertex(positions.top_lip[5][0], positions.top_lip[0][1]+0.1);
    endShape(CLOSE);
    noStroke();

    // nose
    beginShape();
    fill(0);
    
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    }
    endShape(CLOSE);

    // eyes

    //bags under eyes
    fill(gollum_eyeskin);
    ellipse(eye1_pos[0], eye1_pos[1]+0.55, 50 * scale, 70 * scale);
    ellipse(eye2_pos[0], eye2_pos[1]+0.55, 50 * scale, 70 * scale);
    //eyes
    fill(255);
    ellipse(eye1_pos[0], eye1_pos[1]+0.45, 50 * scale, 70 * scale);
    ellipse(eye2_pos[0], eye2_pos[1]+0.45, 50 * scale, 70 * scale);

    fill(gollum_eyes);
    ellipse(eye1_pos[0], eye1_pos[1]+0.45, 40 * scale, 50 * scale);
    ellipse(eye2_pos[0], eye2_pos[1]+0.45, 40 * scale, 50 * scale);

    fill(0);
    ellipse(eye1_pos[0], eye1_pos[1]+0.45, 20 * scale, 30 * scale);
    ellipse(eye2_pos[0], eye2_pos[1]+0.45, 20 * scale, 30 * scale);

    fill(255);
    ellipse(eye1_pos[0], eye1_pos[1]+0.45, 3 * scale, 3 * scale);
    ellipse(eye2_pos[0], eye2_pos[1]+0.45, 3 * scale, 3 * scale);
    
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