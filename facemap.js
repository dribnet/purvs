/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [151, 102, 52];
stroke_color = [156, 106, 127];
eye_stroke_color = [64, 102, 207];
cheek_stroke_color = [224, 125, 187];
mouth_stroke_color = [79, 44, 66];

alpha_ran = focusedRandom(80, 200);
alpha_ran2 = focusedRandom(40, 60);
face_col = [234, 215, 215];
eye_col = [120, 152, 255, 100];
cheek_col = [224, 125, 229, 40];

function FaceMap() {
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
    noStroke();
    fill(face_col);
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]-2+(random(0, 5)), positions.chin[i][1]+2+(random(0, 5)));
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]-2+(random(0, 5)), positions.right_eyebrow[i][1]-2+(random(0, 5)));
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]-2+(random(0, 5)), positions.left_eyebrow[i][1]-2+(random(0, 5)));
    }
    endShape(CLOSE);

    // head offset 1
    stroke(stroke_color);
    noFill();
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]-2+(random(0, 5)), positions.chin[i][1]+2+(random(0, 5)));
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]-5+(random(0, 5)), positions.right_eyebrow[i][1]-2+(random(0, 5)));
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]-5+(random(0, 5)), positions.left_eyebrow[i][1]-2+(random(0, 5)));
    }
    endShape(CLOSE);

    // head offset 2
    stroke(stroke_color);
    noFill();
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]-2+(random(0, 5)), positions.chin[i][1]+2+(random(0, 5)));
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]+5+(random(0, 5)), positions.right_eyebrow[i][1]+2+(random(0, 5)));
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]-5+(random(0, 5)), positions.left_eyebrow[i][1]+2+(random(0, 5)));
    }
    endShape(CLOSE);

    // head offset 3
    stroke(stroke_color);
    noFill();
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]-2+(random(0, 5)), positions.chin[i][1]+2+(random(0, 5)));
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]+5+(random(0, 5)), positions.right_eyebrow[i][1]+2+(random(0, 5)));
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]-5+(random(0, 5)), positions.left_eyebrow[i][1]+2+(random(0, 5)));
    }
    endShape(CLOSE);

    // mouth
    noFill()
    stroke(mouth_stroke_color);
    /*beginShape();
    for(var i=0; i<positions.top_lip.length-5;i++) {
      vertex(positions.top_lip[i][0], positions.top_lip[i][1]);
    }
    endShape();*/
    beginShape();
    for(var i=0; i<positions.bottom_lip.length-5;i++) {
      vertex(positions.bottom_lip[i][0]-2+(random(0, 3)), positions.bottom_lip[i][1]);
    }
    endShape();

    // nose
    beginShape();
    noFill();
    stroke(stroke_color);
    vertex(positions.nose_bridge[0][0]+5+(random(0, 5)), positions.nose_bridge[0][1]-5+(random(0, 5)));
    vertex(positions.nose_bridge[0][0]+5+(random(0, 5)), positions.nose_bridge[0][1]-5+(random(0, 5)));
    for(var i=0; i<positions.nose_tip.length-1;i++) {
      vertex(positions.nose_tip[i][0]+2+(random(0, 5)), positions.nose_tip[i][1]-2+(random(0, 5)));
    }
    endShape();


    // eyes
    beginShape();
    stroke(eye_stroke_color);
    for(var i=0; i<positions.left_eye.length;i++) {
      vertex(positions.left_eye[i][0]+1+(random(0, 2)), positions.left_eye[i][1]+1+(random(0, 2)));
    }
    endShape(CLOSE);

    beginShape();
    for(var i=0; i<positions.right_eye.length;i++) {
      vertex(positions.right_eye[i][0]+1+(random(0, 2)), positions.right_eye[i][1]+1+(random(0, 2)));
    }
    endShape(CLOSE);

    beginShape();
    stroke(eye_stroke_color);
    for(var i=0; i<positions.left_eye.length;i++) {
      vertex(positions.left_eye[i][0]+2+(random(0, 2)), positions.left_eye[i][1]+1+(random(0, 2)));
    }
    endShape(CLOSE);

    beginShape();
    for(var i=0; i<positions.right_eye.length;i++) {
      vertex(positions.right_eye[i][0]+2+(random(0, 2)), positions.right_eye[i][1]+1+(random(0, 2)));
    }
    endShape(CLOSE);


    noStroke();
    fill(eye_col);
    ellipse(eye1_pos[0], eye1_pos[1], 30 * scale, 30 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 30 * scale, 30 * scale);


    /* BROWS

    fill(stroke_color);
    rectMode(CENTER);
    rect(eye2_pos[0], eye2_pos[1]-25 * scale, 50 * scale, 3 * scale);

    fill(stroke_color);
    push();
    rectMode(CENTER);
    rect(eye1_pos[0], eye1_pos[1]-25 * scale, 50 * scale, 3 * scale);
    pop();*/
    
    /*beginShape();
    for(var i=0; i<positions.right_eyebrow.length; i++) {
      vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    }
    endShape();*/

    /*beginShape();
    for(var i=0; i<positions.left_eyebrow.length; i++) {
      vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    }
    endShape();
    strokeWeight(1); */ 

    // cheeks
    fill(cheek_col);
    //left
    ellipse(eye1_pos[0]-10, eye1_pos[1]+60 * scale, 60 * scale, 60 * scale);
    //right
    ellipse(eye2_pos[0]+10, eye2_pos[1]+60 * scale, 60 * scale, 60 * scale);


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