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
    
    angleMode(DEGREES);
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
    
    var twigColour = "#005533";
    eyeColour1 = 98; 
    eyeColour2 = 183;
    eyeColour3 = 88;



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
      
    }
    
    

    pop();


    //face

    noStroke();

    for(var i=0; i<5; i++){
      fill(faceColour1,faceColour2,faceColour3, 40+(i*50));
      ellipse(nose_pos[0], nose_pos[1], 5-(i/3), 4-(i/3));
    }

//twigs

    for(var i = 0; i<positions.right_eyebrow.length; i++){
      twig(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1], twigColour, -40+(i*20));
    }

    for(var i = 0; i<positions.left_eyebrow.length; i++){
      twig(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1], twigColour,-40+(i*20));
    }





    
    //mouth

    noFill();
    stroke(5);
    arc(mouth_pos[0], mouth_pos[1]-1, 0.25, 0.25, 0, 175);
    arc(mouth_pos[0]-(0.25), mouth_pos[1]-1, 0.25, 0.25, 0, 175);

  
    
  //eyes open

  for(var i=2; i<=5; i++){
    noStroke();
    fill(eyeColour1, eyeColour2, eyeColour3, i*70);
    ellipse(eye1_pos[0], eye1_pos[1], 1-(i/6), 1-(i/6));
    ellipse(eye2_pos[0], eye2_pos[1], 1-(i/6), 1-(i/6));
    }


    fill("#000000")
    ellipse(eye1_pos[0], eye1_pos[1], 15*overallScale, 20*overallScale);
    ellipse(eye2_pos[0], eye2_pos[1], 15*overallScale, 20*overallScale);

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
  scale(.5);
  translate(x, y);
  rotate(rotation);
  fill(colour1);
  curve(-7.5, .5, 0, 0, 0, 5.0, -7.5, 5.0);
  fill(colour2);
  curve(7.5, .5, 0, 0, 0, 5.0, 7.5, 5.0);
  pop();
}

function twig(x, y, colour, rotation){
  stroke(colour);
  push();
  strokeWeight(0.09);
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