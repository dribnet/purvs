/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */

// other variables can be in here too
// these control the colors used
bg_color = [225,206,187];
fg_color = [151,102,52];
fill_color = [245,245,245];
stroke_color = [30,30,30];

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

    // // head
    // stroke(stroke_color);
    // fill(fg_color);
    // beginShape();
    // for(var i=0; i<positions.chin.length;i++) {
    //   vertex(positions.chin[i][0], positions.chin[i][1]);
    // }
    // for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
    //   vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    // }
    // for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
    //   vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    // }
    // endShape(CLOSE);

    stroke(stroke_color);

    // mouth
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

    // nose
    translate(0,20);
    triangle(positions.nose_bridge[0][0],positions.nose_bridge[0][1],nose_pos[0]-(21*scale),nose_pos[1],nose_pos[0]+(21*scale),nose_pos[1]);
    translate(0,-20);

    // beginShape();
    // vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
    // for(var i=0; i<positions.nose_tip.length;i++) {
    //   vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    // }
    // endShape(CLOSE);

    // ellipse(-88,-117); eye1_pos
    // ellipse(73,-97); eye2_pos

    // eye sockets
    fill(fill_color);
    quad(eye1_pos[0]-(43*scale),eye1_pos[1]-(29*scale),eye1_pos[0]-(38*scale),eye1_pos[1]+(14*scale),eye1_pos[0]+(42*scale),eye1_pos[1]+(6*scale),eye1_pos[0]+(16*scale),eye1_pos[1]-(34*scale));
    quad(eye2_pos[0]-(30*scale),eye2_pos[1]-(21*scale),eye2_pos[0]-(21*scale),eye2_pos[1]+(13*scale),eye2_pos[0]+(31*scale),eye2_pos[1]+(9*scale),eye2_pos[0]+(26*scale),eye2_pos[1]-(32*scale));

    // eyes
    strokeWeight(0.5);
    fill(stroke_color);
    triangle(eye1_pos[0]-(38*scale),eye1_pos[1]-(1*scale),eye1_pos[0]+(4*scale),eye1_pos[1]+(9*scale),eye1_pos[0]+(34*scale),eye1_pos[1]-(6*scale));
    triangle(eye2_pos[0]-(26*scale),eye2_pos[1]-(5*scale),eye2_pos[0]+(5*scale),eye2_pos[1]+(9*scale),eye2_pos[0]+(30*scale),eye2_pos[1]-(3*scale));

    fill(fill_color);
    ellipse(eye1_pos[0],eye1_pos[1],22*scale,14*scale);
    ellipse(eye2_pos[0],eye2_pos[1],17*scale,12*scale);

    fill(stroke_color);
    ellipse(eye1_pos[0],eye1_pos[1]-(1*scale),8*scale,8*scale);
    ellipse(eye2_pos[0],eye2_pos[1]-(1*scale),6*scale,6*scale);

    // eyelids
    fill(fill_color);
    triangle(eye1_pos[0]-(38*scale),eye1_pos[1]-(1*scale),eye1_pos[0]+(4*scale),eye1_pos[1]-(33*scale),eye1_pos[0]+(34*scale),eye1_pos[1]-(5*scale));
    triangle(eye2_pos[0]-(25*scale),eye2_pos[1]-(5*scale),eye2_pos[0]-(12*scale),eye2_pos[1]-(19*scale),eye2_pos[0]+(28*scale),eye2_pos[1]-(3*scale));

    // // brows
    // fill(stroke_color);
    // beginShape();
    // for(var i=0; i<positions.right_eyebrow.length; i++) {
    //   vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    // }
    // endShape(CLOSE);
    // beginShape();
    // for(var i=0; i<positions.left_eyebrow.length; i++) {
    //   vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    // }
    // endShape(CLOSE);
    // strokeWeight(1);
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
