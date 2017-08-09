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
  this.faceWidth=55;
  this.chin=110;
    this.flameSize=1;
this.eyeX=0;
this.eyeY=0;
    this.crossEyed=1;
  // other variables can be in here too
  // these control the colors used
  this.bg_color = "#1a0400"; 
  this.fg_color = [151, 102, 52];
  this.stroke_color = 0;
this.emotion = 0;
          this.flameSpread=50;
   baseColour = int(focusedRandom(0,2));
   
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
//     

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

        noStroke();
      //body
    push();
    translate(0,0);
    scale(0.43,0.38);
      //v is amount of variance of the fire's placement
      v=15;
      //d is the amount of difference the flames are from the middle.

      d= this.flameSpread;
       var flameHeight = [random(-110,-110+v),random(-95,-95+v),random(-80,-80+v),random(-35,-35+v),random(-30,-30+v),random(0,0+v/2),random(0,0+v/2)]
       var flameWidth = [random(-10,-10+v),random(35+d,35+v+d), random(-55-d,-55+v-d),random(55+d,55+v+d),random(-75-d,-75+v-d),random(75+d,75+v/2+d),random(-80-d,-80+v/2-d)]
       baseIntensity = random(70,150);
          var flameIntensity =[baseIntensity,baseIntensity+20,baseIntensity+20,baseIntensity+30,baseIntensity+40,baseIntensity+50,baseIntensity+60]

if(baseColour ==0){
    this.fireColour = mostlyOrange();
}
      else {
          this.fireColour = mostlypastelOrange();
      }
       //this.fireColour = mostlypastelOrange();
       //flameIntensity=focusedRandom(90, 150);

       for(var i=0; i<flameHeight.length; i++){
           if (this.fireColour==0){
               //pretty blue
           fill(0, flameIntensity[i], 255, this.fireOpacity/2);
           }
           else if (this.fireColour==1){
               //orange
           fill(255, flameIntensity[i], 0, this.fireOpacity);
           }
           else if (this.fireColour==2){
               //pastel orange
        fill(255, flameIntensity[i], 100, this.fireOpacity);
           }
           else if(this.fireColour==3){
                //pretty purple
        fill(200, flameIntensity[i]-60, 250, this.fireOpacity/2);
           }
         else if(this.fireColour==4){
              // pretty greenish blue:
           fill(0, flameIntensity[i], 100, this.fireOpacity);
         }
          else{
              // pretty greenish yellow:
           fill(flameIntensity[i]+100, flameIntensity[i]+200, 100, this.fireOpacity);
          }   
           push();
           scale(this.flameSize);
        quad(0, this.chin, -this.faceWidth, 80, flameWidth[i], flameHeight[i], this.faceWidth, 80);
           pop();
       }
    pop();
      

    // eyes
      fill(255);
          push();
    scale(this.flameSize);
      strokeWeight(0.1);
    stroke(0);
    ellipse(-68 * scale2, 105 * scale2, 70 * scale2, 70 * scale2);
    ellipse( 68 * scale2, 105 * scale2, 70 * scale2, 70 * scale2);
    
    fill(0);
      if(this.crossEyed == 0){
    
          ellipse(-68 * scale2-this.eyeX*2, 105 * scale2+this.eyeY, this.pupilSize * scale2, this.pupilSize * scale2);
    ellipse( 68 * scale2+this.eyeX*2, 105 * scale2+this.eyeY, this.pupilSize * scale2, this.pupilSize * scale2);
      }
      else{
          
ellipse(-68 * scale2 +this.eyeX, 105 * scale2+this.eyeY, this.pupilSize * scale2, this.pupilSize * scale2);
    ellipse( 68 * scale2+this.eyeX, 105 * scale2+this.eyeY, this.pupilSize * scale2, this.pupilSize * scale2);

      }
          pop();
      //eyebrows
      push();
       scale(this.flameSize);
      strokeWeight(0.5);
      stroke(0);
      if(this.emotion ==0){
          //sad
      line(-100* scale2, 80* scale2, -60* scale2, 60* scale2);
       line(100* scale2, 80* scale2, 60* scale2, 60* scale2);
      }
      else if(this.emotion ==1){
          //slightly indifferent
            line(-90* scale2, 70* scale2, -50* scale2, 70* scale2);
       line(90* scale2, 70* scale2, 50* scale2, 70* scale2);
      }
      else if(this.emotion ==2){
          //surprised
            line(-90* scale2, 55* scale2, -50* scale2, 54* scale2);
       line(90* scale2, 55* scale2, 50* scale2, 54* scale2);
      }
      else if(this.emotion ==3){
          //angry
            line(-80* scale2, 60* scale2, -40* scale2, 80* scale2);
       line(80* scale2, 60* scale2, 40* scale2, 80* scale2);
      }
      else{
          
      }
      
    // mouth
   
    noStroke();
  fill(this.bg_color);
  ellipse(0 * scale2, 167 * scale2, this.mouth_width * scale2, this.mouth_height * scale2);
    pop();
      pop();
  }
  //colors
//  blue =0
//orange =1
//pastel orange =2
//purple =3
//greenish blue =4
//yellow green =5
  
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
  this.baseColour=int(focusedRandom(0,2));
  //this.fireColour =int(focusedRandom(0, 6));
  this.pupilSize = focusedRandom(15, 50);
     
  this.faceWidth = focusedRandom(43,70, 4);
      
  this.chin = focusedRandom(100,110);
  this.flameSize = focusedRandom(0.7,1, 3);
      this.eyeX =focusedRandom(-1.7,1.7, 2);
      this.eyeY =focusedRandom(-1.7,1.7, 2);
      this.emotion =int(focusedRandom(0,6));
      //this.eyeX=1.7;
       //this.pupilSize = 50;
      this.crossEyed =int(focusedRandom(0,2,10));
      //this.crossEyed = 0;
      this.flameSpread=focusedRandom(-50,50,6);
  }
}

//function getRandomBaseColour(){
//      random_result = focusedRandom(0, 100);
//  if(random_result < 50) {
//    return 0;
//  }
//  else {
//    return 1;
//  }
//  }
  //mostle reddy orange and purple and blue
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

