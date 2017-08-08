/*
 * Face class - holds all informaiton about one face
 */  
function Face() {
  // these are state variables for a face
  // (your variables may be different)
  this.tilt_value = 0;
  this.mouth_width = 60; 
  this.mouth_height = 20; 
  this.fireOpacity = 150;
  this.fireColour=0;
  this.pupilSize=20;


  // other variables can be in here too
  // these control the colors used
  this.bg_color = "#1a0400"; 
  this.fg_color = [151, 102, 52];
  this.stroke_color = 0;
  chin = 110;      

  /*
   * Draw a face centered at x,y with an allowed
   * width and height of w,h.
   */  
  this.draw1 = function(x, y, w, h) {
     
    // Uncomment to see drawing area
//     fill(255);
//     stroke(0);
//     rect(x-w/2, y-h/2, w, h);
//     fill(0)
//     ellipse(x, y, w, h);
     

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
    var scale2 = extent / 220.0;
      
    // head
    stroke(this.stroke_color);
    fill(this.fg_color);
    //ellipse(0, 0, 300 * scale, 400 * scale);
        noStroke();
      //body
    push();
    translate(0,0);
    scale(0.43,0.38);
      //v is amount of variance of the fire's placement
      v=15;
       var flameHeight = [random(-110,-110+v),random(-95,-95+v),random(-80,-80+v),random(-35,-35+v),random(-30,-30+v),random(0,0+v/2),random(0,0+v/2)]
       var flameWidth = [random(-10,-10+v),random(35,35+v), random(-55,-55+v),random(55,55+v),random(-75,-75+v),random(75,75+v/2),random(-80,-80+v/2)]
       baseIntensity = random(70,150);
          var flameIntensity =[baseIntensity,baseIntensity+20,baseIntensity+20,baseIntensity+30,baseIntensity+40,baseIntensity+50,baseIntensity+60]
//       var flameIntensity =[random(70,90),random(90,100),random(90,100),random(100,120),random(120,130),random(130,150),random(130,150)]

       //flameIntensity=focusedRandom(90, 150);
       
       for(var i=0; i<flameHeight.length; i++){
         
        fill(255, flameIntensity[i], 0, this.fireOpacity);
        quad(0, chin, -55, 80, flameWidth[i], flameHeight[i], 55, 80);
       }
    pop();
      

    // eyes
      fill(255);
          push();
    scale(1);
      strokeWeight(0.1);
    stroke(0);
    ellipse(-68 * scale2, 105 * scale2, 65 * scale2, 65 * scale2);
    ellipse( 68 * scale2, 105 * scale2, 65 * scale2, 65 * scale2);
    
    fill(0);
    ellipse(-68 * scale2, 105 * scale2, this.pupilSize * scale2, this.pupilSize * scale2);
    ellipse( 68 * scale2, 105 * scale2, this.pupilSize * scale2, this.pupilSize * scale2);
    pop();
      
      //eyebrows
//      strokeWeight(0.5);
//      stroke(0);
//      line(-100* scale2, 80* scale2, -55* scale2, 60* scale2);
//       line(100* scale2, 80* scale2, 55* scale2, 60* scale2);
    // mouth
push();
    scale(1);
    noStroke();
  fill(this.bg_color);
  ellipse(0 * scale2, 167 * scale2, this.mouth_width * scale2, this.mouth_height * scale2);
    pop();
      pop();
  }

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw2 = function(positions) {
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
    var scale2 = extent / 220.0;

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);

    push();
    translate(x, y);
    rotate(this.tilt_value);

    // head
    stroke(this.stroke_color);
    fill(this.fg_color);
    ellipse(0, 0, 300 * scale2, 400 * scale2);
    noStroke();

    // mouth
    fill(this.bg_color);
    ellipse(0 * scale2, 70 * scale2, this.mouth_width * scale2, this.mouth_height * scale2);
    pop();

    noStroke();

    fill(this.bg_color);
    ellipse(eye1_pos[0], eye1_pos[1], 50 * scale2, 30 * scale2);
    ellipse(eye2_pos[0], eye2_pos[1], 50 * scale2, 30 * scale2);

    fill(this.fg_color);
    ellipse(eye1_pos[0], eye1_pos[1], 20 * scale2, 20 * scale2);
    ellipse(eye2_pos[0], eye2_pos[1], 20 * scale2, 20 * scale2);
  }

  /*
   * Update internal state variables to a random state.
   */  
  this.randomize = function(values, size) {

  
      
  this.tilt_value = focusedRandom(-30, 30,8);;
  this.mouth_width = focusedRandom(20, 100);
  this.mouth_height = focusedRandom(0, 50, 4,1); 
  this.fireOpacity = focusedRandom(0, 250, 5);
  //this.fireColour=0;
  this.pupilSize = focusedRandom(15, 50);

    
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

