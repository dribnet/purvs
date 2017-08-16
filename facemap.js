// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
bg_color = 0;
//fg and body color getting less transparent
fg_color = [[255,229,0,50],[255,229,0,100],[255,229,0,150],[255,229,0,200], [255,229,0]];
body_color = [[255,110,0,100],[255,110,0,200], [255,110,0]];
body_color2 = [[255,0,0,100],[255,0,0,200], [255,0,0]];
stroke_color = [95, 52, 8];

function FaceMap() {
  this.hairLength = 50;
  this.hairColor = 50;
  this.eyeColor = [56, 14, 11];
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
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];
        var fire_pos=[[positions.chin[0][0],positions.chin[0][1]], 
                   [positions.chin[16][0],positions.chin[16][1]],
                   [positions.chin[3][0],positions.chin[3][1]],
                   [positions.chin[13][0],positions.chin[13][1]],
                   [positions.chin[6][0],positions.chin[6][1]],
                    [positions.chin[10][0],positions.chin[10][1]],
                     [positions.chin[8][0],positions.chin[8][1]]]
           var fire_pos2=[[positions.chin[0][0],positions.chin[0][1]], 
                   [positions.chin[16][0],positions.chin[16][1]],
                   [positions.chin[4][0],positions.chin[4][1]],
                   [positions.chin[12][0],positions.chin[12][1]],
                    [positions.chin[8][0],positions.chin[8][1]]]
    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

      //For training mode later
//    var curHairColor = map(this.hairColor, 0, 100, 200, 20);
//    fill(curHairColor);
//    var curHairLength = map(this.hairLength, 0, 100, 0, 3);
//    rect(-3, -2*curHairLength, 6, 3*curHairLength);

    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }
    var scale2 = extent / 220.0;

    // Uncomment to see drawing area
//     fill(255);
//     stroke(0);
//     rect(x-w/2, y-h/2, w, h);
//     fill(0)
//     ellipse(x, y, w, h);
 
      //fire1
         var fh=[-2, -2.2, -3.2,-3.2,-3.9,-3.8,-4.5]  
        var fw=[-0.6, 0.6, -0.4,0.4, -0.2,0.2,0]
              fill(body_color2[1]);
      push();
      scale(1.05,1);
      translate(0,-0.3);
      
      for(var n=0; n<fw.length;n++) {
   beginShape();
      
  for(var i=1; i<positions.chin.length-8;i++) {
      vertex(positions.chin[i][0]-0.15, positions.chin[i][1]);
    }
      for(var i=8; i<positions.chin.length-1;i++) {
      vertex(positions.chin[i][0]+0.15, positions.chin[i][1]);
    }
          vertex(fire_pos[n][0]+fw[n], fh[n]);
       endShape(CLOSE);
      }
pop();
      //fire2
             var fh=[ -2,-2.2,-3,-3,-3.3]  
        var fw=[ -0.4,0.4, -0.2,0.2,0]
      fill(body_color[1]);
      push();
      translate(0,-0.3);
      for(var n=0; n<fw.length;n++) {
   beginShape();
  for(var i=0; i<positions.chin.length-8;i++) {
      vertex(positions.chin[i][0]-0.15, positions.chin[i][1]);
    }
      for(var i=8; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0]+0.15, positions.chin[i][1]);
    }
          vertex(fire_pos2[n][0]+fw[n], fh[n]);
       endShape(CLOSE);
      }
pop();
      
      //face
    push();
      translate(0,-0.4);
    fill(fg_color[1]);
    beginShape();
     // vertex(positions.chin[0][0], positions.chin[0][1]);
    for(var i=1; i<positions.chin.length-1;i++) {
      vertex(positions.chin[i][0], positions.chin[i][1]);
    }
      //vertex(positions.chin[16][0], positions.chin[16][1]);
       vertex(positions.chin[16][0]-0.2, -0.8);
      vertex(positions.chin[16][0]-0.5, -1.3);
      vertex(positions.chin[16][0]-1, -1.8);
      vertex(0, -2.3);
      vertex(positions.chin[0][0]+1, -1.8);
      vertex(positions.chin[0][0]+0.5, -1.3);
       vertex(positions.chin[0][0]+0.2, -0.8);
    
    endShape(CLOSE);
      
      pop();
      
    // mouth
    noStroke();
    fill(fg_color[0]);
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

    // inside of mouth
      //for training later
//    var whiteness = map(this.mouthColor, 0, 100, 0, 255);
//    fill(255, whiteness, whiteness);
fill(bg_color);
    beginShape();
    for(var i=6; i<positions.bottom_lip.length;i++) {
      vertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]);
    }
    for(var i=6; i<positions.top_lip.length;i++) {
      vertex(positions.top_lip[i][0], positions.top_lip[i][1]);
    }
    endShape(CLOSE);
    fill(bg_color);

      
    // nose
    beginShape();
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    }
    endShape(CLOSE);

    // eyes

    fill(255);
    ellipse(eye1_pos[0], eye1_pos[1]+0.6, 0.8, 0.8);
    ellipse(eye2_pos[0], eye2_pos[1]+0.6, 0.8, 0.8);
      //pupil
       fill(this.eyeColor);
    ellipse(eye1_pos[0], eye1_pos[1]+0.6, 0.6,  0.6);
    ellipse(eye2_pos[0], eye2_pos[1]+0.6,  0.6,  0.6);
      
    fill(0);
    ellipse(eye1_pos[0], eye1_pos[1]+0.6, 0.4,  0.4);
    ellipse(eye2_pos[0], eye2_pos[1]+0.6,  0.4,  0.4);
//eyebrows
    fill(0);
push();
      translate(0,0.5);
    beginShape();
    for(var i=0; i<positions.right_eyebrow.length; i++) {
      vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    }
    vertex(positions.right_eyebrow[3][0], positions.right_eyebrow[3][1]+0.08);
    vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1]+0.1); vertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1]+0.11);
    vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]+0.12);
    endShape(CLOSE);
    beginShape();
    for(var i=0; i<positions.left_eyebrow.length; i++) {
      vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    }
    vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]+0.12);
    vertex(positions.left_eyebrow[3][0], positions.left_eyebrow[3][1]+0.11);
    vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1]+0.1); 
    vertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1]+0.08);
    endShape(CLOSE);
pop();
    strokeWeight(1);  

      pop();
  }
  this.randomize = function(values, size) {

  
  
  this.fireOpacity = focusedRandom(0, 250, 5);
 this.flameSpread=focusedRandom(0,0);
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

function mostlyOrange() {
  random_result = focusedRandom(0, 100);
  if(random_result < 5) {
    return 0;
  }
  else if(random_result < 95) {
    return 1;
  }
   else if(random_result < 0) {
    return 2;
  }
     else if(random_result < 100) {
    return 3;
  }
     else if(random_result < 0) {
    return 4;
  }
    else {
    return 5;
  }
}
    
    function mostlypastelOrange() {
  random_result = focusedRandom(0, 100);
  if(random_result < 0) {
    return 0;
  }
  else if(random_result <0) {
    return 1;
  }
   else if(random_result < 90) {
    return 2;
  }
     else if(random_result < 0) {
    return 3;
  }
     else if(random_result < 95) {
    return 4;
  }
    else {
    return 5;
  }
}