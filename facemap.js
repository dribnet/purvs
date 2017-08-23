/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [151, 102, 52];
stroke_color = [156, 106, 127];
cheek_stroke_color = [224, 125, 187];
mouth_stroke_color = [79, 44, 66];
face_col = [234, 215, 215];
cheek_col = [224, 125, 229, 40];



function FaceMap() {
  this.faceColor = 50;
  this.faceTone = 50;
  this.eyeType = 50;
  this.eyeColor = 50;
  this.pupilSize = 50;
  this.mouthRandom = 50;
  this.cheekSize = 50;
  this.faceRandom = 50;

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
    var faceOffset = random(-0.1, 0.1);

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    // head
    var curfaceTone = map(this.faceTone, 0, 100, 180, 220);
    var curfaceColor = map(this.faceColor, 0, 100, 100, 255);
    var whicheyeType = map(this.eyeType, 0, 100, 0, 2);
    var whicheyeColor = map(this.eyeColor, 0, 100, 0, 100);
    var whatpupilSize = map(this.pupilSize, 0, 100, 8, 15);
    var mouthRandomness = map(this.mouthRandom, 0, 100, 0, 2);
    var whatcheekSize = map(this.cheekSize, 0, 100, 15, 35);
    var faceRandomness = map(this.faceRandom, 0, 100, 0, 2);


    fill(234, 215, curfaceTone);
    noStroke();
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]-(random(0, 5)*scale*faceRandomness), positions.chin[i][1]+(random(0, 5)*scale*faceRandomness));
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]-(random(0, 5)*scale*faceRandomness), positions.right_eyebrow[i][1]-(random(0, 5)*scale*faceRandomness));
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]-(random(0, 5)*scale*faceRandomness), positions.left_eyebrow[i][1]-(random(0, 5)*scale*faceRandomness));
    }
    endShape(CLOSE);
    fill(curfaceColor, curfaceColor, curfaceColor, 60);
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]-(random(0, 5)*scale*faceRandomness), positions.chin[i][1]+(random(0, 5)*scale*faceRandomness));
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]-(random(0, 5)*scale*faceRandomness), positions.right_eyebrow[i][1]-(random(0, 5)*scale*faceRandomness));
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]-(random(0, 5)*scale*faceRandomness), positions.left_eyebrow[i][1]-(random(0, 5)*scale*faceRandomness));
    }
    endShape(CLOSE);

    // head offset 1
    stroke(stroke_color);
    strokeWeight(0.02);
    noFill();
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]-(random(0, 5)*scale)-random(0, 0.2)*faceRandomness, positions.chin[i][1]+(random(0, 5)*scale)+random(0, 0.2)*faceRandomness);
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]-(random(0, 5)*scale)+random(0, 0.1)*faceRandomness, positions.right_eyebrow[i][1]-(random(0, 5)*scale)+random(0, 0.2)*faceRandomness);
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]-(random(0, 5)*scale)+random(0, 0.2)*faceRandomness, positions.left_eyebrow[i][1]-(random(0, 5)*scale)+random(0, 0.1)*faceRandomness);
    }
    endShape(CLOSE);

    // head offset 2
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]-(random(0, 5)*scale)+random(0, 0.1)*faceRandomness, positions.chin[i][1]+(random(0, 5)*scale)-random(0, 0.2)*faceRandomness);
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]+(random(0, 5)*scale)+random(0, 0.2)*faceRandomness, positions.right_eyebrow[i][1]+(random(0, 5)*scale)+random(0, 0.1)*faceRandomness);
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]-(random(0, 5)*scale)+random(0, 0.2)*faceRandomness, positions.left_eyebrow[i][1]-(random(0, 5)*scale)+random(0, 0.2)*faceRandomness);
    }
    endShape(CLOSE);

    // head offset 3
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]-(random(0, 5)*scale)-random(0, 0.1)*faceRandomness, positions.chin[i][1]+(random(0, 5)*scale)+random(0, 0.2)*faceRandomness);
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]+(random(0, 5)*scale)-random(0, 0.1)*faceRandomness, positions.right_eyebrow[i][1]+(random(0, 5)*scale)+random(0, 0.2)*faceRandomness);
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]-(random(0, 5)*scale)-random(0, 0.2)*faceRandomness, positions.left_eyebrow[i][1]-(random(0, 5)*scale)+random(0, 0.1)*faceRandomness);
    }
    endShape(CLOSE);

    // mouth
    noFill();
    stroke(mouth_stroke_color);
    strokeWeight(0.015);

    beginShape();
    for(var i=0; i<positions.bottom_lip.length;i++) {
      vertex(positions.bottom_lip[i][0]-(random(0, 5)*scale*mouthRandomness), positions.bottom_lip[i][1]+(random(0, 5)*scale*mouthRandomness));
    }
    for(var i=0; i<positions.bottom_lip.length;i++) {
      vertex(positions.bottom_lip[i][0]+(random(0, 5)*scale*mouthRandomness), positions.bottom_lip[i][1]-(random(0, 5)*scale*mouthRandomness));
    }
    endShape();

    // nose - is random with each reload
    beginShape();
    noFill();
    stroke(stroke_color);
    vertex(positions.nose_bridge[0][0]+(random(0, 5)*scale), positions.nose_bridge[0][1]-(random(0, 5)*scale));
    vertex(positions.nose_bridge[0][0]+(random(0, 5)*scale), positions.nose_bridge[0][1]-(random(0, 5)*scale));
    for(var i=0; i<positions.nose_tip.length-1;i++) {
      vertex(positions.nose_tip[i][0]+(random(0, 5)*scale), positions.nose_tip[i][1]-(random(0, 5)*scale));
    }
    endShape();

    //runs through the colour map and applies to all solid parts of the eyes
    if (whicheyeColor < 20){
        whicheyeColor = [216, 216, 58, 180];
        whichstrokeColor = [186, 186, 50];
    }
    else if (whicheyeColor < 40){
        whicheyeColor = [216, 216, 168, 180];
        whichstrokeColor = [191, 191, 147];
    }
    else if (whicheyeColor < 60){
        whicheyeColor = [216, 216, 255, 180];
        whichstrokeColor = [192, 192, 226];
    }
    else if (whicheyeColor < 80){
        whicheyeColor = [81, 127, 255, 180];
        whichstrokeColor = [68, 107, 214];
    }
    else{
        whicheyeColor = [175, 136, 216, 180];
        whichstrokeColor = [148, 115, 183];
    }


    //eye type 1 - sketchy electronic lines in middle
    if(this.eyeType > 34 & this.eyeType < 66){
      push();
      beginShape();
      translate(faceOffset, 0.3);
      strokeWeight(0.02);
      stroke(whichstrokeColor);
      for(var i=0; i<positions.left_eye.length;i++) {
        vertex(positions.left_eye[i][0]+(random(0, 4)*scale), positions.left_eye[i][1]+(random(0, 4)*scale));
      }
      endShape(CLOSE);
      beginShape();
      for(var i=0; i<positions.right_eye.length;i++) {
        vertex(positions.right_eye[i][0]+(random(0, 4)*scale), positions.right_eye[i][1]+(random(0, 4)*scale));
      }
      endShape(CLOSE);
      pop();

      noStroke();
      fill(whicheyeColor);
      ellipse(eye1_pos[0], eye1_pos[1]+20 * scale, 3 * whatpupilSize * scale, 3 * whatpupilSize * scale);
      ellipse(eye2_pos[0], eye2_pos[1]+20 * scale, 3 * whatpupilSize * scale, 3 * whatpupilSize * scale);

      noFill();
      stroke(whichstrokeColor);
      strokeWeight(0.02);
      ellipse(eye1_pos[0] + faceOffset, eye1_pos[1]+20 * scale, 35 * scale, 35 * scale);
      ellipse(eye2_pos[0] + faceOffset, eye2_pos[1]+20 * scale, 35 * scale, 35 * scale);
    }


    //eye type 2 - rounded with skewed stroke outline
    if(this.eyeType < 33){
      strokeWeight(0.02);
      noStroke();
      fill(whicheyeColor);
      ellipse(eye1_pos[0], eye1_pos[1]+20 * scale, 3 * whatpupilSize * scale, 3 * whatpupilSize * scale);
      ellipse(eye2_pos[0], eye2_pos[1]+20 * scale, 3 * whatpupilSize * scale, 3 * whatpupilSize * scale);

      noFill();
      stroke(whichstrokeColor);
      strokeWeight(0.02);
      ellipse(eye1_pos[0] - faceOffset, eye1_pos[1]+20 * scale, 30 * scale, 45 * scale);
      ellipse(eye2_pos[0] + faceOffset, eye2_pos[1]+20 * scale, 30 * scale, 45 * scale);
    }

    //eye type 3 - square
    if(this.eyeType > 67 & this.eyeType < 101){
      strokeWeight(0.02);
      noStroke();
      fill(whicheyeColor);
      ellipse(eye1_pos[0], eye1_pos[1]+20 * scale, 2 * whatpupilSize * scale, 2 * whatpupilSize * scale);
      ellipse(eye2_pos[0], eye2_pos[1]+20 * scale, 2 * whatpupilSize * scale, 2 * whatpupilSize * scale);

      noFill();
      stroke(whichstrokeColor);
      strokeWeight(0.02);
      rectMode(CENTER);
      rect(eye1_pos[0], eye1_pos[1]+20 * scale, 30 * scale, 30 * scale);
      rect(eye2_pos[0], eye2_pos[1]+20 * scale, 30 * scale, 30 * scale);
    }


    // cheeks - different sizes based on sliders
    noStroke();
    fill(cheek_col);
    //left
    ellipse(eye1_pos[0]-15 * scale, eye1_pos[1]+80 * scale, 2 * whatcheekSize * scale, 2 * whatcheekSize * scale);
    //right
    ellipse(eye2_pos[0]+15 * scale, eye2_pos[1]+80 * scale, 2 * whatcheekSize * scale, 2 * whatcheekSize * scale);


  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.faceColor = settings[0];
    this.faceTone = settings[1];
    this.eyeType = settings[2];
    this.eyeColor = settings[3];
    this.pupilSize = settings[4];
    this.mouthRandom = settings[5];
    this.cheekSize = settings[6];
    this.faceRandom = settings[7];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(2);
    properties[0] = this.faceColor;
    properties[1] = this.faceTone;
    properties[2] = this.eyeType;
    properties[3] = this.eyeColor;
    properties[4] = this.pupilSize;
    properties[5] = this.mouthRandom;
    properties[6] = this.cheekSize;
    properties[7] = this.faceRandom;
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