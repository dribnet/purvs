/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
skin_color_value = 1;



skinHighlight_color = ["#ffe2cc", "#ffe2cc", "#ffe2cc"];
skinMidtone_color = ["#ebcebb", "#ffd5be","#e2bea1", "#CAA288", "#D7A595", "#8c6652"];
skinLowlight_color = ["#ebcebb", "#f4c4b0","#ba9584"]
stroke_color = [skinLowlight_color[1]];


eyeball_color = "#fff";
iris_color = "#22323d";
pupil_color = "#000";

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
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

    // var curHairColor = map(this.hairColor, 0, 100, 200, 20);
    // fill(curHairColor);
    // var curHairLength = map(this.hairLength, 0, 100, 0, 3);
    // rect(-3, -2*curHairLength, 6, 3*curHairLength);

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var size = extent / 220.0;

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    // head
    stroke(stroke_color);
    fill(skinMidtone_color[skin_color_value]);
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {

      curveVertex(positions.chin[i][0], positions.chin[i][1]);
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      curveVertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      curveVertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    }

    endShape(CLOSE);

    // mouth
    noStroke();
    fill(skinHighlight_color[skin_color_value]);
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
    vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    }
    endShape(CLOSE);

    fill(stroke_color);
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

    // eyes
 
    push();
    scale(1.4);
    translate(0.2, 0.4);

    beginShape();
    fill(eyeball_color)
    for(var i=0; i<positions.left_eye.length;i++) {
      curveVertex(positions.left_eye[i][0], positions.left_eye[i][1]);
    }

    endShape(CLOSE);
       fill(iris_color);
    ellipse(eye1_pos[0], eye1_pos[1]-0.03, 20 * size, 20 * size);

    fill(230, 250, 200, 20);
    for(var i=0; i<8;i++) {
      ellipse(eye1_pos[0], eye1_pos[1]-0.03, (12+i) * size, (12+i) * size);
    }
        fill(pupil_color);
    ellipse(eye1_pos[0], eye1_pos[1]-0.03, 8 * size, 8 * size);
    fill(255, 255, 255, 5);
    for (var i=4; i>0;i-=0.02) {
    ellipse(eye1_pos[0]-0.03, eye1_pos[1]-0.07, i * size, i* size)
  }
      for (var i=6; i>0;i-=0.02) {
    ellipse(eye1_pos[0]-0.04, eye1_pos[1]+0, i * (size/2), i*size)
  }

//eyelids

    // fill("#000");
   
    // for(var i=0; i<4;i++) {
    //     ellipse((positions.left_eye[i][0]), (positions.left_eye[i][1]), 0.05, 0.05);   
    // }
    //        for(var i=1; i<5;i++) {
    //     ellipse((positions.left_eyebrow[i][0]), (positions.left_eyebrow[i][1]), 0.05, 0.05);   
    // }

    // console.log(positions);

    beginShape();

     fill(skinLowlight_color[skin_color_value]);
 curveVertex((positions.left_eye[0][0]), (positions.left_eye[0][1]));  
       for(var i=0; i<4;i++) {
        var eyelid_value_y = ((positions.left_eye[i][1] + positions.left_eyebrow[i+1][1])/2.2);
        var eyelid_value_x = ((positions.left_eye[i][0] + positions.left_eyebrow[i][0])/2.3);
        curveVertex((eyelid_value_x), (eyelid_value_y));
    }
     for(var i=3; i>=0;i--) {
        curveVertex((positions.left_eye[i][0]), (positions.left_eye[i][1]));   
      }

    endShape(CLOSE);   
	pop();
     



    push();
    scale(1.4);
    translate(-0.2, 0.5);

    beginShape();
   fill(eyeball_color)
    for(var i=0; i<positions.right_eye.length;i++) {
      curveVertex(positions.right_eye[i][0], positions.right_eye[i][1]);
    }
    endShape(CLOSE);
 fill(iris_color);
 
    ellipse(eye2_pos[0], eye2_pos[1], 16 * size, 16 * size);
 fill(pupil_color);

    ellipse(eye2_pos[0], eye2_pos[1], 8 * size, 8 * size);
    pop();

    //eyebrows


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