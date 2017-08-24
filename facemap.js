/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */ 
 var overallScale; 

// other variables can be in here too
// these control the colors used
bg_color = [225, 206, 187];
fg_color = [151, 102, 52];
stroke_color = [95, 52, 8];

function FaceMap() {
  //randomSeed(5);

  this.hairLength = 50;
  this.hairColor = 50;
  
  


  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {
    randomSeed(1);
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var mouth_pos = average_point(positions.top_lip);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var leafColour1 = "#00673f";
    var leafColour2 = "#219d23";

    var faceColour1 = 213;
    var faceColour2 = 236;
    var faceColour3 = 187;

    tilt_value = 0;
    eye_value = 0;
    mouth_value = 0;
    seed_value = 1;
    leaf_value = 20;
    twig_value = 5;
    twig_value2 = 6;
    season_value = 3;
    eyeSize_value = 1;
    twigSize_value = 1;
    
    twigColour = "#005533";
    eyeColour1 = 98; 
    eyeColour2 = 183;
    eyeColour3 = 88;



    var x = nose_pos[0];
    var y = nose_pos[1];
    var w = 2 * face_width;
    var h = 2.5 * half_height;

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
    var scale1 = extent / 220.0;
    overallScale = scale1;

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    // head

    push();
    

    stroke("#000000");
    strokeWeight(0.01);

    //leaves
    for(var o=1; o<4;o++){
      for(var i=0; i<positions.chin.length;i++) {
      leaf(positions.chin[i][0], positions.chin[i][1], leafColour1, leafColour2, random(0, 359));
      }
      for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
        leaf(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1], leafColour1, leafColour2, random(0, 359));
      }
      for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
        leaf(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]-40, leafColour1, leafColour2, random(0, 359));
      }
    }
    
    

    pop();

    noStroke();

    for(var i=0; i<5; i++){
      fill(faceColour1,faceColour2,faceColour3, 40+(i*50));
      ellipse(nose_pos[0], nose_pos[1], 150-(i*10), 150-(i*10));
    }



    
    

    // mouth
    /*noStroke();
    fill(bg_color);
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
*/
    
  //eyes open
  
    for(var i=1; i<=5; i++){
      noStroke();
      fill(eyeColour1, eyeColour2, eyeColour3, i*70);
      ellipse(eye1_pos[0], eye1_pos[1], 25-(i*5), 30-(i*5));
      ellipse(eye2_pos[0], eye2_pos[1], 25-(i*5), 30-(i*5));
      }
      fill("#000000")
      ellipse(eye1_pos[0], eye1_pos[1], 7, 10);
      ellipse(eye2_pos[0], eye2_pos[1], 7, 10);
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


function leaf(x, y, colour1, colour2, rotation){
  push();
  translate(x, y);
  rotate(rotation);
  fill(colour1);
  curve(-75*overallScale*3, 5*overallScale*3, 0, 0, 0, 50*overallScale*3, -75*overallScale*3, 50*overallScale*3);
  fill(colour2);
  curve(75*overallScale*3, 5*overallScale*3, 0, 0, 0, 50*overallScale*3, 75*overallScale*3, 50*overallScale*3);
  pop();
}

function twig(x, y, colour, rotation){
  //strokeWeight(2*twigSize_value);
  stroke(colour);
  push();
  translate(x, y);
  rotate(rotation);
  line(0, 0, 0, -100*overallScale*twigSize_value);
  line(0, -20*overallScale*twigSize_value, 10*overallScale*twigSize_value, -30*overallScale*twigSize_value);
  line(0, -30*overallScale*twigSize_value, -20*overallScale*twigSize_value, -50*overallScale*twigSize_value);
  line(0, -40*overallScale*twigSize_value, 20*overallScale*twigSize_value, -60*overallScale*twigSize_value);
  line(0, -60*overallScale*twigSize_value, 15*overallScale*twigSize_value, -75*overallScale*twigSize_value);
  line(0, -60*overallScale*twigSize_value, -15*overallScale*twigSize_value, -75*overallScale*twigSize_value);
  line(0, -80*overallScale*twigSize_value, -10*overallScale*twigSize_value, -90*overallScale*twigSize_value);
  line(0, -80*overallScale*twigSize_value, 10*overallScale*twigSize_value, -90*overallScale*twigSize_value);
  pop();
}