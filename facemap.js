/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [151, 102, 52];
stroke_color = [0, 0, 0];

function FaceMap() {
  this.hairLength = 0;
  this.hairColor = 0;
  this.leftDepth = 50;
  this.rightDepth = 50;
  this.leftHeight = 50;
  this.rightHeight = 50;
  this.chinHeight = 50;

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


    var curLeftDepht = map(this.leftDepth, 0, 100, 0, 1);
    var curRightDepht = map(this.rightDepth, 0, 100, 0, 1);
    var curLeftHeight = map(this.leftHeight, 0, 100, 0, 1);
    var curRightHeight = map(this.rightHeight, 0, 100, 0, 1);
    var curChinHeight = map(this.chinHeight, 0, 100, 0, 1);

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale = extent / 220.0;

    var c1 = focusedRandom(153, 168);
    var c2 = focusedRandom(153, 15);
    var c3 = focusedRandom(153, 15);

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    // head
    stroke(stroke_color);
    
    
    /*
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



    */



    fill(c1-50, c2-50, c3-50);

    //left head depth
    beginShape();
    vertex(positions.chin[0][0]-curLeftDepht, positions.right_eyebrow[3][1]-curLeftHeight);
    vertex(positions.chin[0][0]-curLeftDepht, positions.right_eyebrow[3][1]);
    vertex(positions.chin[6][0]-curLeftDepht, positions.chin[6][1]+curLeftHeight/2);
    vertex(positions.chin[9][0], positions.chin[9][1]+curChinHeight);
    vertex(positions.chin[9][0], positions.chin[9][1]);
    vertex(positions.chin[0][0], positions.right_eyebrow[3][1]);
    endShape(CLOSE);

    //right head depth
    beginShape();
    vertex(positions.chin[9][0], positions.chin[9][1]);
    vertex(positions.chin[9][0], positions.chin[9][1]+curChinHeight);
    vertex(positions.chin[12][0]+curRightDepht, positions.chin[12][1]+curRightHeight/2);
    vertex(positions.chin[16][0]+curRightDepht, positions.left_eyebrow[3][1]);
    vertex(positions.chin[16][0]+curRightDepht, positions.left_eyebrow[3][1]-curRightHeight);
    vertex(positions.chin[16][0], positions.left_eyebrow[3][1]);
    endShape(CLOSE);

    //top head depth
    beginShape();
    vertex(positions.chin[0][0]-curLeftDepht, positions.right_eyebrow[3][1]-curLeftHeight);
    vertex(positions.chin[16][0]+curRightDepht, positions.left_eyebrow[3][1]-curRightHeight);
    vertex(positions.chin[16][0], positions.left_eyebrow[3][1]);
    vertex(positions.chin[0][0], positions.right_eyebrow[3][1]);
    endShape();


    fill(c1, c2, c3);
    beginShape();
    vertex(positions.chin[0][0], positions.right_eyebrow[3][1]);
    vertex(positions.chin[6][0], positions.chin[6][1]);
    vertex(positions.chin[9][0], positions.chin[9][1]);
    vertex(positions.chin[12][0], positions.chin[12][1]);
    vertex(positions.chin[16][0], positions.left_eyebrow[3][1]);
    endShape(CLOSE);


    // mouth
    
    /*
    noStroke();
    
    beginShape();
    for(var i=0; i<positions.top_lip.length;i++) {
      vertex(positions.top_lip[i][0], positions.top_lip[i][1]);
    }
    endShape(CLOSE);
    */

    //mouth
    
   

    //teeth

    fill(239, 206, 59);
    beginShape();
    vertex(positions.bottom_lip[0][0], positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[1][0]+0.05, positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[1][0]+0.05, positions.bottom_lip[0][1]-0.3);
    vertex(positions.bottom_lip[0][0], positions.bottom_lip[0][1]-0.3);
    endShape(CLOSE);

    fill(239, 206, 59);
    beginShape();
    vertex(positions.bottom_lip[1][0], positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[2][0]+0.05, positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[2][0]+0.05, positions.bottom_lip[0][1]-0.3);
    vertex(positions.bottom_lip[1][0], positions.bottom_lip[0][1]-0.3);
    endShape(CLOSE);


    beginShape();
    vertex(positions.bottom_lip[2][0], positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[3][0]+0.05, positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[3][0]+0.05, positions.bottom_lip[0][1]-0.3);
    vertex(positions.bottom_lip[2][0], positions.bottom_lip[0][1]-0.3);
    endShape(CLOSE);

 
    beginShape();
    vertex(positions.bottom_lip[3][0], positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[4][0]+0.05, positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[4][0]+0.05, positions.bottom_lip[0][1]-0.3);
    vertex(positions.bottom_lip[3][0], positions.bottom_lip[0][1]-0.3);
    endShape(CLOSE);

    beginShape();
    vertex(positions.bottom_lip[4][0], positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[5][0]+0.05, positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[5][0]+0.05, positions.bottom_lip[0][1]-0.3);
    vertex(positions.bottom_lip[4][0], positions.bottom_lip[0][1]-0.3);
    endShape(CLOSE);

    beginShape();
    vertex(positions.bottom_lip[5][0], positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[6][0]+0.05, positions.bottom_lip[0][1]);
    vertex(positions.bottom_lip[6][0]+0.05, positions.bottom_lip[0][1]-0.3);
    vertex(positions.bottom_lip[5][0], positions.bottom_lip[0][1]-0.3);
    endShape(CLOSE);

    /*
    // nose
    beginShape();
    vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    }
    endShape(CLOSE);
    */

    //antenna

    fill(c1, c2, c3);
    beginShape();
    vertex(positions.nose_bridge[0][0], positions.left_eyebrow[3][1]-0.2);
    vertex(positions.nose_bridge[0][0]+0.16, positions.left_eyebrow[3][1]-1.3);
    vertex(positions.nose_bridge[0][0]+0.44, positions.left_eyebrow[3][1]-1.3);
    vertex(positions.nose_bridge[0][0]+0.6, positions.left_eyebrow[3][1]-0.2);
    vertex(positions.nose_bridge[0][0], positions.left_eyebrow[3][1]-0.2)
    endShape();

    fill(239, 206, 59);
    ellipse(positions.nose_bridge[0][0]+0.30, positions.left_eyebrow[3][1]-1.4, .6, .6)

    // eyes

    fill(0, 0, 0);
    ellipse(eye1_pos[0], eye1_pos[1], 40 * scale, 40 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 40 * scale, 40 * scale);

    fill(255, 255, 255);
    ellipse(eye1_pos[0]+0.1, eye1_pos[1]-0.1, 5 * scale, 5 * scale);
    ellipse(eye2_pos[0]+0.1, eye2_pos[1]-0.1, 5 * scale, 5 * scale);

  
    strokeWeight(1);  
  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.hairLength = settings[0];
    this.hairColor = settings[1];
    this.leftDepth = settings[2];
    this.rightDepth = settings[3];
    this.leftHeight = settings[4];
    this.rightHeight = settings[5];
    this.chinHeight = settings[6];
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