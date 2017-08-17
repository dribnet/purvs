/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [0,0,0];
fg_color = [234, 209, 197];
stroke_color = [95, 52, 8];
hair_color = [94, 57, 10];

function FaceMap() {
  this.hairLength = 50;
  this.hairColor = 50;

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var eyebrow1_pos = average_point(positions.left_eyebrow);
    var eyebrow2_pos = average_point(positions.right_eyebrow);
    var bottom_lip_pos = average_point(positions.bottom_lip);
    var top_lip_pos = average_point(positions.top_lip);  
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

    var curHairColor = map(this.hairColor, 0, 100, 200, 20);
    fill(curHairColor);
    var curHairLength = map(this.hairLength, 0, 100, 0, 3);
//forehead
    fill(fg_color);
    
    noStroke();
     beginShape();
  vertex(positions.chin[0][0], positions.chin[0][1]);
  vertex(positions.left_eyebrow[0][0] -0.1, positions.left_eyebrow[0][1] - 1 ) ;
  vertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1]  - 1.2) ;
  vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1] -1.4 ) ;
  vertex(positions.left_eyebrow[3][0], positions.left_eyebrow[3][1] -1.6 ) ;
  vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1] -1.7 ) ;
  vertex(positions.right_eyebrow[0][0] -0.1, positions.right_eyebrow[0][1] - 1.7 ) ;
  vertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1]  - 1.6) ;
  vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1] -1.4 ) ;
  vertex(positions.right_eyebrow[3][0], positions.right_eyebrow[3][1] -1.2 ) ;
  vertex(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1] -1 ) ;
  vertex(positions.chin[16][0], positions.chin[16][1]);
   endShape();
    

    //rect(-3, -2*curHairLength, 6, 3*curHairLength);

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
    fill(fg_color);
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
    noStroke();
    fill(bg_color);
      stroke(0);

      line (positions.top_lip[0][0], top_lip_pos[1], positions.top_lip[6][0], top_lip_pos[1]);

      noStroke();

      //eye

    fill(255);
    ellipse(eye1_pos[0], eye1_pos[1], 30 * scale, 30 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 30 * scale, 30 * scale);

    fill(0);
    ellipse(eye1_pos[0], eye1_pos[1], 10 * scale, 10 * scale);
    ellipse(eye2_pos[0], eye2_pos[1], 10 * scale, 10 * scale);

    //eyebrow

    fill(hair_color);
        noStroke();
     beginShape();
     vertex(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]);
     vertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1]);
     vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1]);
     vertex(positions.left_eyebrow[3][0], positions.left_eyebrow[3][1]);
     vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]);
     vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1] + 0.09);
     vertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1] + 0.09);



   endShape();

      beginShape();
      vertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1] + 0.05);
      vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1] + 0.05);
      vertex(positions.right_eyebrow[3][0], positions.right_eyebrow[3][1] + 0.09);
     vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1] + 0.09);
     vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]);
     vertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1]);
     vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1]);
     vertex(positions.right_eyebrow[3][0], positions.right_eyebrow[3][1]);
     vertex(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]);

     
   endShape();

    //    push();
    //    strokeWeight(0.05); 
    //    stroke(0);
    //    line(positions.left_eyebrow[0][0],eyebrow1_pos[1],positions.left_eyebrow[4][0], eyebrow1_pos[1]);
      
    //    line(positions.right_eyebrow[0][0],eyebrow2_pos[1],positions.right_eyebrow[4][0], eyebrow2_pos[1]);
     
    // strokeWeight(1);  
    //   pop();

    strokeWeight(1);  
  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.hairLength = settings[0];
    this.hairColor = settings[1];
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