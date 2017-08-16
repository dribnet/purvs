/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
stroke_color = [255, 255, 255];
mouth_color = "#990000";
jaw_color = "#f2e6d9";

this.eyebrows_color;
this.skin_color;

function FaceMap() {
  // this.hairLength = 0;
  // this.hairColor = 0;

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    this.randomize();
    smooth();
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
    var scale = extent / 80.0;

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    // whole head
    noStroke();
    fill(this.skin_color);
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0], positions.chin[i][1]);
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    }
    endShape(CLOSE);

    //eye rims
    fill("#000000");
    strokeWeight(0.03);
    stroke("#ffffff");
    beginShape();
    vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]);
    bezierVertex(positions.left_eyebrow[4][0]+0.2, positions.left_eyebrow[4][1]+0.2, positions.nose_bridge[1][0]-0.2, positions.nose_bridge[1][1]-0.2, positions.nose_bridge[1][0], positions.nose_bridge[1][1]);
    vertex(positions.nose_bridge[1][0], positions.nose_bridge[1][1]);
    bezierVertex(positions.nose_bridge[1][0]-0.2, positions.nose_bridge[1][1]-0.2, positions.chin[1][0]+0.5, positions.chin[1][1]+0.5, positions.chin[1][0], positions.chin[1][1]);
    vertex(positions.chin[1][0], positions.chin[1][1]);
    bezierVertex(positions.chin[1][0]+0.2, positions.chin[1][1]-0.1, positions.left_eyebrow[0][0]+0.4, positions.left_eyebrow[0][1]+0.5, positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]+0.2);
    endShape();

    beginShape();
    vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]);
    bezierVertex(positions.right_eyebrow[0][0]-0.2, positions.right_eyebrow[0][1]+0.2, positions.nose_bridge[1][0]+0.2, positions.nose_bridge[1][1]-0.2, positions.nose_bridge[1][0], positions.nose_bridge[1][1]);
    vertex(positions.nose_bridge[1][0], positions.nose_bridge[1][1]);
    bezierVertex(positions.nose_bridge[1][0]+0.2, positions.nose_bridge[1][1]-0.2, positions.chin[15][0]-0.5, positions.chin[15][1]+0.5, positions.chin[15][0], positions.chin[15][1]);
    vertex(positions.chin[15][0], positions.chin[15][1]);
    bezierVertex(positions.chin[15][0]-0.2, positions.chin[15][1]-0.1, positions.right_eyebrow[4][0]-0.4, positions.right_eyebrow[4][1]+0.5, positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]+0.2);
    endShape();

    //eyebrows
    fill(this.eyebrows_color);
    strokeWeight(0.03);
    stroke("#ffffff");
    beginShape();
    vertex(positions.left_eyebrow[0][0]-0.2, positions.left_eyebrow[0][1]-1);
    bezierVertex(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]-0.5, positions.left_eyebrow[4][0]-0.2, positions.left_eyebrow[4][1]-0.1, positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]);
    vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]);
    bezierVertex(positions.left_eyebrow[4][0]-0.2, positions.left_eyebrow[4][1]+0.2, positions.left_eyebrow[0][0]+0.1, positions.left_eyebrow[0][1]+0.2, positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]);
    vertex(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]);
    bezierVertex(positions.left_eyebrow[0][0]+0.2, positions.left_eyebrow[0][1]-0.2, positions.left_eyebrow[0][0]-0.1, positions.left_eyebrow[0][1]-0.6, positions.left_eyebrow[0][0]-0.2, positions.left_eyebrow[0][1]-1);
    endShape();

    beginShape();
    vertex(positions.right_eyebrow[4][0]+0.2, positions.right_eyebrow[4][1]-1);
    bezierVertex(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]-0.5, positions.right_eyebrow[0][0]+0.2, positions.right_eyebrow[0][1]-0.1, positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]);
    vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]);
    bezierVertex(positions.right_eyebrow[0][0]+0.2, positions.right_eyebrow[0][1]+0.2, positions.right_eyebrow[4][0]-0.1, positions.right_eyebrow[4][1]+0.2, positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]);
    vertex(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]);
    bezierVertex(positions.right_eyebrow[4][0]-0.2, positions.right_eyebrow[4][1]-0.2, positions.right_eyebrow[4][0]+0.1, positions.right_eyebrow[4][1]-0.6, positions.right_eyebrow[4][0]+0.2, positions.right_eyebrow[4][1]-1);
    endShape();

    // eyes
    fill(255, 255, 255);
    noStroke();
    beginShape();
    vertex(positions.left_eye[0][0], positions.left_eye[0][1]);
    bezierVertex(positions.left_eye[1][0], positions.left_eye[1][1], positions.left_eye[2][0], positions.left_eye[2][1], positions.left_eye[3][0], positions.left_eye[3][1]);
    vertex(positions.left_eye[0][0], positions.left_eye[0][1]);
    bezierVertex(positions.left_eye[5][0], positions.left_eye[5][1], positions.left_eye[4][0], positions.left_eye[4][1], positions.left_eye[3][0], positions.left_eye[3][1]);
    endShape();

    beginShape();
    vertex(positions.right_eye[0][0], positions.right_eye[0][1]);
    bezierVertex(positions.right_eye[1][0], positions.right_eye[1][1], positions.right_eye[2][0], positions.right_eye[2][1], positions.right_eye[3][0], positions.right_eye[3][1]);
    vertex(positions.right_eye[0][0], positions.right_eye[0][1]);
    bezierVertex(positions.right_eye[5][0], positions.right_eye[5][1], positions.right_eye[4][0], positions.right_eye[4][1], positions.right_eye[3][0], positions.right_eye[3][1]);
    endShape(CLOSE);

    //eye balls
    fill(0, 0, 0);
    ellipse(eye1_pos[0], eye1_pos[1], 5 * scale, 5 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 5 * scale, 5 * scale);
    
    //nose bridge
    push();
    stroke(0, 0, 0, 70);
    strokeWeight(0.2);
    line(positions.nose_bridge[0][0], positions.nose_bridge[0][1], positions.nose_bridge[3][0], positions.nose_bridge[3][1]);
    pop();

    //beard
    fill(0);
    beginShape();
    vertex(positions.top_lip[3][0], positions.top_lip[3][1]+0.15);
    bezierVertex(positions.chin[3][0]-0.5, positions.chin[3][1]-0.2, positions.chin[7][0]-0.5, positions.chin[7][1], positions.chin[7][0], positions.chin[7][1]);
    endShape();

    beginShape();
    vertex(positions.top_lip[3][0], positions.top_lip[3][1]+0.15);
    bezierVertex(positions.chin[13][0]+0.5, positions.chin[13][1]-0.2, positions.chin[9][0]+0.5, positions.chin[9][1], positions.chin[9][0], positions.chin[9][1]);
    endShape();

    //jaw
    push();
    fill(jaw_color);
    // stroke(0);
    // strokeWeight(0.05);
    beginShape();
    vertex(positions.top_lip[3][0], positions.top_lip[3][1]+0.15);
    bezierVertex(positions.chin[3][0]-0.3, positions.chin[3][1], positions.chin[7][0]-0.3, positions.chin[7][1], positions.chin[7][0], positions.chin[7][1]);
    endShape();

    beginShape();
    vertex(positions.top_lip[3][0], positions.top_lip[3][1]+0.15);
    bezierVertex(positions.chin[13][0]+0.3, positions.chin[13][1], positions.chin[9][0]+0.3, positions.chin[9][1], positions.chin[9][0], positions.chin[9][1]);
    endShape();
    pop();

    // mouth
    push();
    fill(mouth_color);
    stroke(255);
    strokeWeight(0.02);
    quad(positions.top_lip[positions.top_lip.length/4-2][0], positions.top_lip[positions.top_lip.length/4-2][1], positions.top_lip[positions.top_lip.length/4+2][0], positions.top_lip[positions.top_lip.length/4+2][1], positions.bottom_lip[positions.bottom_lip.length/4-1][0], positions.bottom_lip[positions.bottom_lip.length/4-1][1], positions.bottom_lip[positions.bottom_lip.length/4+1][0], positions.bottom_lip[positions.bottom_lip.length/4+1][1]);
    pop();   

    // nose
    push();
    fill(0, 0, 0);
    ellipse(positions.nose_tip[round(positions.nose_tip.length/2)][0], positions.nose_tip[round(positions.nose_tip.length/2)][1], 5 * scale, 2 * scale);
    ellipse(positions.nose_tip[round(positions.nose_tip.length/2-2)][0], positions.nose_tip[round(positions.nose_tip.length/2-2)][1], 5 * scale, 2 * scale);
    pop();
  }

  this.randomize = function () {
    this.eyebrows_color = [Math.floor(focusedRandom(102, 255)), Math.floor(focusedRandom(255, 51)), 51];
    this.skin_color = [Math.floor(focusedRandom(20, 100)), Math.floor(focusedRandom(80, 20)), Math.floor(focusedRandom(100, 20))];
  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    // this.hairLength = settings[0];
    // this.hairColor = settings[1];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    // properties = new Array(2);
    // properties[0] = this.hairLength;
    // properties[1] = this.hairColor;
    // return properties;
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