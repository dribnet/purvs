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
  this.eye_size = 0;
  this.colour_value = 0;

  this.fg_color1 = [255, 231, 191];
  this.fg_color2 = [224,177,120];
  this.fg_color3 = [59, 52, 44];
  this.stroke_color = [95, 52, 8];

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    var eyebrow1_pos = average_point(positions.right_eyebrow);
    var eyebrow2_pos = average_point(positions.left_eyebrow);
    var chin_pos = positions.chin[9];
    var bread_pos = positions.chin[0];
    var mouth_pos = average_point(positions.bottom_lip)
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

    var mapEyeSize = map(this.eye_size, 0, 100, 0, .3);
    var mapColourValue = map(this.colour_value, 0, 100, 0, 2)


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

    //crust

    fill(136, 106, 75);
    rect(bread_pos[0]-.1, bread_pos[1]-.1, face_width + .2, (chin_pos[1]-bread_pos[1]) + .2, .4);


    ellipse(eyebrow1_pos[0],eyebrow1_pos[1], 135 * scale, 85 * scale);
    ellipse(eyebrow2_pos[0],eyebrow2_pos[1], 135* scale, 85 *scale);

    // bread

    if (this.colour_value <= 1){
      fill(this.fg_color1);
      }
    if (this.colour_value == 2){
        fill(this.fg_color2);
      }
    if (this.colour_value > 2){
      fill(this.fg_color3);
    }
   
    fill(this.fg_color2);

    rect(bread_pos[0], bread_pos[1], face_width, chin_pos[1]-bread_pos[1],.3);


    ellipse(eyebrow1_pos[0],eyebrow1_pos[1], 120 * scale, 75 * scale);
    ellipse(eyebrow2_pos[0],eyebrow2_pos[1], 120* scale, 75 *scale);



    // mouth
    angleMode(RADIANS);
    stroke(70, 145, 31);
    fill(219, 200, 124);
    arc(mouth_pos[0], mouth_pos[1], 90 * scale, -50 * scale, 0 , PI);
    angleMode(DEGREES);

    if (this.colour_value <= 1){
      fill(this.fg_color1);
      }
    if (this.colour_value == 2){
        fill(this.fg_color2);
      }
    if (this.colour_value > 2){
      fill(this.fg_color3);
    }

    noStroke();
    fill(this.fg_color2);

    ellipse(mouth_pos[0], mouth_pos[1], 30 * scale, 20 * scale);

    // eyes

    noStroke();

    fill(176, 36, 26);
    ellipse(eye1_pos[0], eye1_pos[1], (50 * scale) + mapEyeSize , (50 * scale) + mapEyeSize);
    ellipse(eye2_pos[0], eye2_pos[1], (50 * scale) + mapEyeSize , (50 * scale) + mapEyeSize);

    fill(240,82,67);
    ellipse(eye1_pos[0], eye1_pos[1], (40 * scale)+ mapEyeSize, (40 * scale)+ mapEyeSize);
    ellipse(eye2_pos[0], eye2_pos[1], (40 * scale)+ mapEyeSize, (40 * scale)+ mapEyeSize);

    fill(255,128,125)
    ellipse(eye1_pos[0], eye1_pos[1], (20 * scale)+ mapEyeSize, 10 * scale);
    ellipse(eye1_pos[0], eye1_pos[1], 10 * scale, (20 * scale)+ mapEyeSize);


    ellipse(eye2_pos[0], eye2_pos[1], (20 * scale)+ mapEyeSize, 10 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 10 * scale, (20 * scale)+ mapEyeSize);


    push();
    translate(eye1_pos[0], eye1_pos[1]);
    rotate(45);
    ellipse(0, 0, 10 * scale, (20 * scale)+ mapEyeSize);
    rotate(90);
    ellipse(0, 0, 10 * scale, (20 * scale)+ mapEyeSize);
    pop();
    push();
    translate(eye2_pos[0], eye2_pos[1]);
    rotate(45);
    ellipse(0, 0, 10 * scale, (20 * scale)+ mapEyeSize);
    rotate(90);
    ellipse(0, 0, 10 * scale, (20 * scale)+ mapEyeSize);
    pop();
    strokeWeight(1);  


  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.hairLength = settings[0];
    this.hairColor = settings[1];
    this.eye_size = settings[2];
    this.colour_value = settings[3]; 
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(2);
    properties[0] = this.hairLength;
    properties[1] = this.hairColor;
    properties[2] = this.eye_size
    properties[3] = this.colour_value
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