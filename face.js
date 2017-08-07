/*
 * Face class - holds all informaiton about one face
 */
function Face() {
  // these are state variables for a face
  this.tilt_value;
  this.face_shape_value;
  this.face_randomise_value;
  this.mouth_value;
  this.nose_value;
  this.eye_value;
  this.chin_value;
  this.cheek_value;

  // other variables can be in here too
  // these control the colors used
  this.bg_color = [225, 206, 187];
  this.fg_color = [151, 102, 52];
  this.fill_color = [245,245,245];
  this.stroke_color = [30,30,30];

  /*
   * Draw a face centered at x,y with an allowed
   * width and height of w,h.
   */
  this.draw1 = function(x, y, w, h) {
    // Uncomment to see drawing area
    // fill(0);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(255)
    // ellipse(x, y, w, h);

    var cheek_color = [];
    cheek_color.push([224,80,111]);
    cheek_color.push([212,76,104]);
    cheek_color.push([199,71,98]);
    cheek_color.push([173,62,85]);
    cheek_color.push([135,48,67]);
    cheek_color.push([147,54,73]);
    cheek_color.push([83,31,41]);
    cheek_color.push([71,26,35]);

    push();
    translate(x, y);
    rotate(this.tilt_value);

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    noStroke();

    // cheeks
    fill(cheek_color[this.cheek_value]);

    rotate(-35);
    ellipse(-123*scale,-15*scale,60*scale,90*scale);

    rotate(55);
    ellipse(83*scale,-3*scale,50*scale,80*scale);

    // reset for main face shapes
    rotate(-20);
    stroke(this.stroke_color);
    noFill();

    // face shapes
    this.drawFaceShapes(this.face_shape_value,this.face_randomise_value, scale);

    translate(this.face_randomise_value,-this.face_randomise_value);
    rotate(this.face_randomise_value);
    strokeWeight(0.5);

    this.drawFaceShapes(this.face_shape_value,this.face_randomise_value, scale);

    translate(-this.face_randomise_value,this.face_randomise_value);
    rotate(-this.face_randomise_value);
    strokeWeight(1);

    fill(this.fill_color);

    // nose
    translate(this.nose_value,this.nose_value*2);
    triangle(5*scale+this.nose_value,0*scale-this.nose_value*5,-10*scale,51*scale,32*scale,51*scale);
    translate(-this.nose_value, -this.nose_value*2);

    // mouth
    triangle(8*scale,100*scale-this.mouth_value,-19*scale,99*scale+this.mouth_value,27*scale,99*scale+this.mouth_value);

    // chin
    quad(4*scale,134*scale,-6*scale,140*scale-this.chin_value,2*scale,162*scale,16*scale,151*scale+this.chin_value);

    // eye sockets
    fill(this.fill_color);
    quad(-131*scale,-146*scale,-126*scale,-103*scale,-46*scale,-111*scale,-72*scale,-151*scale);
    quad(43*scale,-118*scale,52*scale,-84*scale,104*scale,-88*scale,99*scale,-129*scale);

    // eyes
    strokeWeight(0.5);
    fill(this.stroke_color);
    triangle(-126*scale,-118*scale,-84*scale,-108*scale,-54*scale,-123*scale);
    triangle(47*scale,-102*scale,78*scale,-86*scale,103*scale,-100*scale);

    fill(this.fill_color);
    ellipse(-88*scale,-117*scale,22*scale,14*scale);
    ellipse(73*scale,-97*scale,17*scale,12*scale);

    fill(this.stroke_color);
    ellipse(-88*scale+this.eye_value,-118*scale,8*scale,8*scale);
    ellipse(73*scale+this.eye_value,-98*scale,6*scale,6*scale);

    // eyelids
    fill(this.fill_color);
    triangle(-126*scale,-118*scale,-84*scale,-144*scale,-54*scale,-122*scale);
    triangle(48*scale,-102*scale,61*scale,-116*scale,101*scale,-100*scale);

    pop();
  }

  this.drawFaceShapes = function(face_shape_value,face_randomise_value,scale) {
    if (face_shape_value[0] == 1) {
      quad(-91*scale,-192*scale,-58*scale,86*scale,155*scale,14*scale,43*scale,-240*scale);
    }
    else if (face_shape_value[0] == 2) {
      beginShape();
      vertex(89*scale,13*scale);
      vertex(-1*scale,65*scale);
      vertex(-129*scale,-25*scale);
      vertex(-92*scale,-216*scale);
      vertex(99*scale,-239*scale);
      vertex(89*scale,13*scale);
      endShape();
    }
    else if (face_shape_value[0] == 3) {
      beginShape();
      vertex(-140*scale,-190*scale);
      vertex(-131*scale,-18*scale);
      vertex(34*scale,30*scale);
      vertex(68*scale,-134*scale);
      vertex(-60*scale,-239*scale);
      vertex(-140*scale,-190*scale);
      endShape();
    }

    if (face_shape_value[1] == 1) {
      beginShape();
      vertex(-25*scale,-107*scale);
      vertex(-108*scale,-21*scale);
      vertex(-47*scale,193*scale);
      vertex(57*scale,193*scale);
      vertex(140*scale,9*scale);
      vertex(-25*scale,-107*scale);
      endShape();
    }
    else if (face_shape_value[1] == 2) {
      quad(-58*scale,-138*scale,-139*scale,125*scale,32*scale,180*scale,153*scale,-32*scale,-58*scale,-138*scale);
    }
    else if (face_shape_value[1] == 3) {
      beginShape();
      vertex(25*scale,212*scale);
      vertex(-63*scale,168*scale);
      vertex(-105*scale,-161*scale);
      vertex(-53*scale,-196*scale);
      vertex(99*scale,-53*scale);
      vertex(25*scale,212*scale);
      endShape();
    }
  }

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge,
   */
  this.draw2 = function(positions) {
    // console.log(positions);
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var cheek_color = [];
    cheek_color.push([224,80,111]);
    cheek_color.push([212,76,104]);
    cheek_color.push([199,71,98]);
    cheek_color.push([173,62,85]);
    cheek_color.push([135,48,67]);
    cheek_color.push([147,54,73]);
    cheek_color.push([83,31,41]);
    cheek_color.push([71,26,35]);

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

    noStroke();

    push();
    translate(x, y);
    rotate(this.tilt_value);

    // cheeks
    fill(cheek_color[this.cheek_value]);

    rotate(-35);
    ellipse(-123*scale,-15*scale,60*scale,90*scale);

    rotate(55);
    ellipse(83*scale,-3*scale,50*scale,80*scale);

    // reset for main face shapes
    rotate(-20);
    stroke(this.stroke_color);
    noFill();

    // face shapes
    this.drawFaceShapes(this.face_shape_value,this.face_randomise_value, scale);

    translate(this.face_randomise_value,-this.face_randomise_value);
    rotate(this.face_randomise_value);
    strokeWeight(0.5);

    this.drawFaceShapes(this.face_shape_value,this.face_randomise_value, scale);

    translate(-this.face_randomise_value,this.face_randomise_value);
    rotate(-this.face_randomise_value);
    strokeWeight(1);

    fill(this.fill_color);

    // nose
    translate(this.nose_value,this.nose_value*2);
    triangle(5*scale+this.nose_value,0*scale-this.nose_value*5,-10*scale,51*scale,32*scale,51*scale);
    translate(-this.nose_value, -this.nose_value*2);

    // mouth
    triangle(8*scale,100*scale-this.mouth_value,-19*scale,99*scale+this.mouth_value,27*scale,99*scale+this.mouth_value);

    // chin
    quad(4*scale,134*scale,-6*scale,140*scale-this.chin_value,2*scale,162*scale,16*scale,151*scale+this.chin_value);

    // eye sockets
    fill(this.fill_color);
    quad(-131*scale,-146*scale,-126*scale,-103*scale,-46*scale,-111*scale,-72*scale,-151*scale);
    quad(43*scale,-118*scale,52*scale,-84*scale,104*scale,-88*scale,99*scale,-129*scale);

    // eyes
    strokeWeight(0.5);
    fill(this.stroke_color);
    triangle(-126*scale,-118*scale,-84*scale,-108*scale,-54*scale,-123*scale);
    triangle(47*scale,-102*scale,78*scale,-86*scale,103*scale,-100*scale);

    fill(this.fill_color);
    ellipse(-88*scale,-117*scale,22*scale,14*scale);
    ellipse(73*scale,-97*scale,17*scale,12*scale);

    fill(this.stroke_color);
    ellipse(-88*scale+this.eye_value,-118*scale,8*scale,8*scale);
    ellipse(73*scale+this.eye_value,-98*scale,6*scale,6*scale);

    // eyelids
    fill(this.fill_color);
    triangle(-126*scale,-118*scale,-84*scale,-144*scale,-54*scale,-122*scale);
    triangle(48*scale,-102*scale,61*scale,-116*scale,101*scale,-100*scale);

    pop();

    // head
    // stroke(this.stroke_color);
    // fill(this.fg_color);
    // ellipse(0, 0, 300 * scale, 400 * scale);
    // noStroke();
    //
    // // mouth
    // fill(this.bg_color);
    // ellipse(0 * scale, 70 * scale, 150 * scale, this.mouth_value * scale);
    // pop();
    //
    // noStroke();
    //
    // fill(this.bg_color);
    // ellipse(eye1_pos[0], eye1_pos[1], 50 * scale, 30 * scale);
    // ellipse(eye2_pos[0], eye2_pos[1], 50 * scale, 30 * scale);
    //
    // fill(this.fg_color);
    // ellipse(eye1_pos[0], eye1_pos[1], 20 * scale, 20 * scale);
    // ellipse(eye2_pos[0], eye2_pos[1], 20 * scale, 20 * scale);
  }

  /*
   * Update internal state variables to a random state.
   */
  this.randomize = function(values, size) {
    this.tilt_value = focusedRandom(-70, 90, 8);
    this.face_shape_value = getRandomFaceShapes();
    this.face_randomise_value = focusedRandom(-2,2);
    this.mouth_value = focusedRandom(-6,6,1,3);
    this.nose_value = focusedRandom(-2,2);
    this.eye_value = focusedRandom(-3,3,1.5,2);
    this.chin_value = focusedRandom(-3,3);
    this.cheek_value = Math.floor(focusedRandom(1,8,2,3));
  }
}

// global functions can also be in this file below

function getRandomFaceShapes() {
  var randomResult1 = focusedRandom(0,100);
  if (randomResult1 <= 33){
    face_shape1 = 1;
  }
  else if (randomResult1 > 33 && randomResult1 <= 66){
    face_shape1 = 2;
  }
  else if (randomResult1 > 66){
    face_shape1 = 3;
  }

  var randomResult2 = focusedRandom(0,100);
  if (randomResult2 <= 33){
    face_shape2 = 1;
  }
  else if (randomResult2 > 33 && randomResult2 <= 66){
    face_shape2 = 2;
  }
  else if (randomResult2 > 66){
    face_shape2 = 3;
  }

  return [face_shape1, face_shape2];
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
