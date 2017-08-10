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
  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    this.randomize();
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

    colorMode(HSB);
    stroke(this.hue, 50, 90);
    fill(this.hue, 90, 50);
    rectMode(CENTER);
    // head
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

    // mouth
    stroke(this.hue, 90, 50);
    fill(this.hue, 50, 90);
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
    beginShape();
    vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]  - half_height*0.5);
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]  - half_height*0.5);
    }
    endShape(CLOSE);
    ellipse(positions.nose_bridge[0][0], positions.nose_bridge[0][1]  - half_height*0.5, 16 * scale, 16 * scale);

    var xValuesLeft = convertVerticeArrayToAxisArray(positions.left_eye, 0);
    var yValuesLeft = convertVerticeArrayToAxisArray(positions.left_eye, 1);
    var xValuesRight = convertVerticeArrayToAxisArray(positions.right_eye, 0);
    var yValuesRight = convertVerticeArrayToAxisArray(positions.right_eye, 1);

    var smallestXLeft = Array.lowest(xValuesLeft);
    var smallestYLeft = Array.lowest(yValuesLeft);
    var biggestYLeft = Array.highest(yValuesLeft);

    var biggestXRight = Array.highest(xValuesRight);
    var smallestYRight = Array.lowest(yValuesRight);
    var biggestYRight = Array.highest(yValuesRight);

    fill(stroke_color);
    //eyebrows
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

    // eyes
    fill(this.hue, 50, 90);
    quad(smallestXLeft-ceil(20*scale), smallestYLeft-ceil(20*scale), biggestXRight+ceil(20*scale), smallestYRight-ceil(20*scale), biggestXRight+ceil(20*scale), biggestYRight+ceil(20*scale), smallestXLeft-ceil(20*scale), biggestYLeft+ceil(20*scale));
    fill(0);
    quad(smallestXLeft-ceil(10*scale), smallestYLeft-ceil(10*scale), biggestXRight+ceil(10*scale), smallestYRight-ceil(10*scale), biggestXRight+ceil(10*scale), biggestYRight+ceil(10*scale), smallestXLeft-ceil(10*scale), biggestYLeft+ceil(10*scale));
    fill(0, 0, 100);
    beginShape();
    for(var i=0; i<positions.left_eye.length;i++) {
      vertex(positions.left_eye[i][0], positions.left_eye[i][1]);
    }
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.right_eye.length;i++) {
      vertex(positions.right_eye[i][0], positions.right_eye[i][1]);
    }
    endShape(CLOSE);

    //irises
    fill(this.hue, 90, 50);
    rect(eye1_pos[0], eye1_pos[1], 6 * scale, 6 * scale);
    rect(eye2_pos[0], eye2_pos[1], 6 * scale, 6 * scale);

    strokeWeight(1);  
  }

  /*
   * Update internal state variables to a random state.
   */  
  this.randomize = function() {
    var randomPointer = floor(random(1, 10));
    this.hue = focusedRandom(this.robotHueRanges[randomPointer][0], this.robotHueRanges[randomPointer][1], 10, this.robotHueRanges[randomPointer][2]);
  }

    /*
   * JSON object consisting of six hue ranges
   * used to ensure each robot has a unique hue
   * the third element of each array is the midpoint of the range
   * which is used to set the mean value for the focusedRandom function
   */
  this.robotHueRanges = {
      1 : [-20, 20, 0],
      2 : [21, 60, 40],
      3 : [61, 100, 80],
      4 : [101, 140, 120],
      5 : [141, 180, 160],
      6 : [181, 220, 200],
      7 : [221, 260, 240],
      8 : [261, 300, 280],
      9 : [301, 340, 320]
  }


}

/**
 * converts an array of vertices into an array of values for a single axis (eg, x or y)
 * @param {Array} oldArray        - the multidimensional array of vertices to convert
 * @param {Number} index          - the index of the inner array containing the calues for the axis you want
 * @return {Array} newArray
 */
function convertVerticeArrayToAxisArray(oldArray, index){
  var newArray = [];
  for(var i=0; i<oldArray.length;i++) {
    newArray[i] = oldArray[i][index];
  }
  return newArray;
}

/**
 * finds the lowest value in an array of numbers
 * @param {Array} array        - an array of numbers
 */
Array.lowest = function( array ){
    return Math.min.apply( Math, array );
};

/**
 * finds the height value in an array of numbers
 * @param {Array} array        - an array of numbers
 */
Array.highest = function( array ){
    return Math.max.apply( Math, array );
};


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