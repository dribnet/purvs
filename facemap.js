/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used

var ezv = 1;

var bg_color1 = ["#55CCC0"];
var bg_color2 = ["#578783"];
var bg_color3 = ["#4B4D99"];

var fg_color1 = ["#FFE991"];
var fg_color2 = ["#559ACC"];
var fg_color3 = ["#7F4B31"];

var stroke_color1 = ["#FF84F5"];
var stroke_color2 = ["#D492CD"];
var stroke_color3 = ["#CC9378"];

function FaceMap() {

  this.draw = function(positions) {
    ezv = int(random (1,4));
  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
   if (ezv == 1) {
      var foreground = bg_color1;
      var strakC = stroke_color1;
      var bg = bg_color1;
    }

  if (ezv == 2) {
    var foreground = fg_color2;
    var strakC = stroke_color2;
    var bg = bg_color2;
  }

  if (ezv == 3) {
    var foreground = fg_color3;
    var strakC = stroke_color3;
    var bg = bg_color3;
  }
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
    var scales = extent / 220.0;
    var randome = random (4, 20);
    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    // head
    stroke(strakC);
    fill(foreground);
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

    push();
    noFill();
    strokeWeight(2*scales);
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]+random (0, 5), positions.chin[i][1]+random (0, 5));
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]+random (0, 5), positions.right_eyebrow[i][1]+random (0, 5));
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]+random (0, 5), positions.left_eyebrow[i][1]+random (0, 5));
    }
    endShape(CLOSE);

    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]+random (0, 5), positions.chin[i][1]+random (0, 5));
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0]+random (0, 5), positions.right_eyebrow[i][1]+random (0, 5));
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0]+random (0, 5), positions.left_eyebrow[i][1]+random (0, 5));
    }
    endShape(CLOSE);
    pop();

    // mouth
    fill(bg);

    strokeWeight (0.5);
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

    noFill()
    beginShape();
    for(var i=0; i<positions.top_lip.length;i++) {
      vertex(positions.top_lip[i][0]+random (0, 2), positions.top_lip[i][1]+random (0, 2));
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.bottom_lip.length;i++) {
      vertex(positions.bottom_lip[i][0]+random (0, 2), positions.bottom_lip[i][1]+random (0, 2));
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.top_lip.length;i++) {
      vertex(positions.top_lip[i][0]+random (0, 2), positions.top_lip[i][1]+random (0, 2));
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.bottom_lip.length;i++) {
      vertex(positions.bottom_lip[i][0]+random (0, 2), positions.bottom_lip[i][1]+random (0, 2));
    }
    endShape(CLOSE);

    // nose

    fill(bg);
    stroke(strakC);
    beginShape();
    vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    }
    endShape(CLOSE);

    noFill ();
    beginShape();
    vertex(positions.nose_bridge[0][0]+random (0, 5), positions.nose_bridge[0][1]+random (0, 5));
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0]+random (0, 5), positions.nose_tip[i][1]+random (0, 5));
    }
    endShape(CLOSE);

    beginShape();
    vertex(positions.nose_bridge[0][0]+random (0, 5), positions.nose_bridge[0][1]+random (0, 5));
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0]+random (0, 5), positions.nose_tip[i][1]+random (0, 5));
    }
    endShape(CLOSE);


    // eyes

    ellipse(eye1_pos[0]+random (0, 2), eye1_pos[1]+random (0, 2), 16 * scales+random (0, 5), 16 * scales+random (0, 5));
    ellipse(eye1_pos[0]+random (0, 2), eye1_pos[1]+random (0, 2), 16 * scales+random (0, 5), 16 * scales+random (0, 5));
    ellipse(eye1_pos[0]+random (0, 2), eye1_pos[1]+random (0, 2), 16 * scales+random (0, 5), 16 * scales+random (0, 5));


    ellipse(eye2_pos[0]+random (0, 2), eye2_pos[1]+random (0, 2), 16 * scales+random (0, 5), 16 * scales+random (0, 5));
    ellipse(eye2_pos[0]+random (0, 2), eye2_pos[1]+random (0, 2), 16 * scales+random (0, 5), 16 * scales+random (0, 5));
    ellipse(eye2_pos[0]+random (0, 2), eye2_pos[1]+random (0, 2), 16 * scales+random (0, 5), 16 * scales+random (0, 5));

    fill(strakC);
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
    strokeWeight(1);  
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