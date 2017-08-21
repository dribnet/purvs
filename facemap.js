/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = "#ffffff";
stroke_color = "#000000";
fg_color = "#96C195";
horn_color = "";

function FaceMap() {
  this.color = 50;
  this.hairColor = 50;
  this.hornHeight = 50;
  this.pupileXaxis = 50;
  this.pupileYaxis = 50;
  this.hornColor = 50;
 
  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    this.eyes_pos = positions.right_eye.concat(positions.left_eye);
    var eye3 = average_point(this.eyes_pos);
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

    var hornLength = map(this.hornHeight, 0, 100, 0 , 2);
    var rightHornHeight = map(this.rightHornHeight, 0, 100, -1 , 1);
    var leftHornHeight = map(this.leftHornHeight, 0, 100, -1 , 1);
    var eyeX = map(this.pupileXaxis, 0, 100, -0.4, 0.4);
    var eyeY = map(this.pupileYaxis, 0, 100, -0.4, 0.4);
    var colorCount = map(this.color, 0, 100, 0, 100);
    var hornCount = map(this.hornColor, 0, 100, 0, 100);

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    //skin color
    if (colorCount < 25){
      fg_color = "#96C195";
    }
    else if (colorCount <75){
      fg_color = "#6E8E6E";
    }
    else{
      fg_color = "#57B555";
      
    }   

    //horn color
    if (hornCount < 50){
      horn_color = "#B2B3B0";
    }
    else{
      horn_color = "#727871";
      
    }

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    // head
    stroke(stroke_color);
    beginShape();

    fill(horn_color);
    triangle (positions.right_eyebrow[0][0], positions.right_eyebrow[0][1], positions.right_eyebrow[2][0] + rightHornHeight, positions.right_eyebrow[2][1] - hornLength, positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]);
    triangle (positions.left_eyebrow[0][0], positions.left_eyebrow[0][1], positions.left_eyebrow[2][0] + leftHornHeight, positions.left_eyebrow[2][1] - hornLength, positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]);


    fill(fg_color);
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

    fill("#ffffff");
    ellipse(eye3[0], eye3[1]/2 + scale, 128 * scale, 128 * scale);
    fill(fg_color);
    ellipse(eye3[0] + eyeY, eye3[1]/2 + eyeX + scale, 64 * scale, 64 * scale);
    fill("#000000");
    ellipse(eye3[0] + eyeY, eye3[1]/2 + eyeX + scale, 32 * scale, 32 * scale);

    // mouth
    fill(bg_color);
    beginShape();
    for(var i=0; i<positions.bottom_lip.length;i++) {
      vertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]*1.25);
    }
    endShape(CLOSE);
    strokeWeight(1);  
  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.color = settings[0];
    this.hornHeight = settings[1];
    this.leftHornHeight = settings[2];
    this.rightHornHeight = settings[3];
    this.pupileXaxis = settings[4];
    this.pupileYaxis = settings[5];
    this.hornColor = settings[6];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(7);
    properties[0] = this.color
    properties[1] = this.hornHeight;
    properties[2] = this.leftHornHeight
    properties[3] = this.rightHornHeight
    properties[4] = this.pupileXaxis;
    properties[5] = this.pupileYaxis;
    properties[6] = this.hornColor;
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