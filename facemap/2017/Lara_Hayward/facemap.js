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
  //randomSeed(5);

  this.mouthPosition = 50;
  this.eyePosition = 50;
  this.season = 1;
  this.facePos = 1;
  
  


  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {

    //map functions

    
    


    
    
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

    var twigSize_value = 1;
    var twigColour = "#005533";
    var eyeColour1 = 98; 
    var eyeColour2 = 183;
    var eyeColour3 = 88;

    





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

     if(this.season <=25){ 
      //summer
    leafColour1 = "#00673f";
    leafColour2 = "#219d23";
    faceColour1 = 213;
    faceColour2 = 236;
    faceColour3 = 187;
    twigColour = "#005533";
    eyeColour1 = 98; 
    eyeColour2 = 183;
    eyeColour3 = 88;
    }else if(this.season <=50){
      //spring
    leafColour1 = "#d7ff72";
    leafColour2 = "#a2d400";
    faceColour1 = 252;
    faceColour2 = 190;
    faceColour3 = 202;
    twigColour = "#8b6403";
    eyeColour1 = 251; 
    eyeColour2 = 135;
    eyeColour3 = 157;
  }else if(this.season <=75){
    //winter
    leafColour1 = "#6ebff7";
    leafColour2 = "#1f649d";
    faceColour1 = 192;
    faceColour2 = 241;
    faceColour3 = 255;
    twigColour = "#837981";
    eyeColour1 = 66; 
    eyeColour2 = 112;
    eyeColour3 = 208;
  }
  else{
    //autumn
    leafColour1 = "#c64e00";
    leafColour2 = "#ff902b";
    faceColour1 = 253;
    faceColour2 = 182;
    faceColour3 = 89;
    twigColour = "#722902";
    eyeColour1 = 172; 
    eyeColour2 = 61;
    eyeColour3 = 0;
  }

    


    push();
    

    stroke("#000000");
    strokeWeight(0.01);

    //leaves
    for(var o=1; o<4;o++){
      for(var i=0; i<positions.chin.length;i++) {
      leaf(positions.chin[i][0], positions.chin[i][1], leafColour1, leafColour2, random(0, 359));
      }
      for(var i=1; i<this.leaf_value; i++){
      leaf(random(-140 * scale, 140 * scale), random(-30 * scale, 30 * scale), this.leafColour1, this.leafColour2, random(0, 359));
    }

    for(var i=1; i<this.leaf_value; i++){
      leaf(random(-100 * scale, 100 * scale), random(-100 * scale, 0 * scale), this.leafColour1, this.leafColour2, random(0, 359));
    }

  }
    
    

    pop();


    //face

    noStroke();

    /*for(var i=0; i<5; i++){
      fill(faceColour1,faceColour2,faceColour3, 40+(i*50));
      ellipse(nose_pos[0]+this.facePos/100, nose_pos[1], 5-(i/3), 5.5-(i/3));
    }*/
    fill(faceColour1,faceColour2,faceColour3);
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

    for(var j = -0.8; j <=0.8; j+=0.2){
      fill(faceColour1,faceColour2,faceColour3, 100);
      beginShape();
      for(var i=0; i<positions.chin.length;i++) {
        vertex(positions.chin[i][0]+j, positions.chin[i][1]+j);
      }
      for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
        vertex(positions.right_eyebrow[i][0]+j, positions.right_eyebrow[i][1]+j);
      }
      for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
        vertex(positions.left_eyebrow[i][0]+j, positions.left_eyebrow[i][1]+j);
      }
      endShape(CLOSE);

    }

    for(var j = -0.8; j <=0.8; j+=0.2){
      fill(faceColour1,faceColour2,faceColour3, 100);
      beginShape();
      for(var i=0; i<positions.chin.length;i++) {
        vertex(positions.chin[i][0]-j, positions.chin[i][1]+j);
      }
      for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
        vertex(positions.right_eyebrow[i][0]-j, positions.right_eyebrow[i][1]+j);
      }
      for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
        vertex(positions.left_eyebrow[i][0]-j, positions.left_eyebrow[i][1]+j);
      }
      endShape(CLOSE);

    }

    



//twigs

    for(var i = 0; i<positions.right_eyebrow.length; i++){
      twig(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1], twigColour, -40+(i*20));
    }

    for(var i = 0; i<positions.left_eyebrow.length; i++){
      twig(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1], twigColour, -40+(i*20));
    }





    
    //mouth
    push();
    translate(0, this.mouthPosition/100);
    noFill();
    stroke(5);

    push();
    noStroke();
    fill(twigColour);
    //arc(mouth_pos[0], mouth_pos[1], 0.25, 0.25, 0, 175);
    //arc(mouth_pos[0]-(0.25), mouth_pos[1], 0.25, 0.25, 0, 175);
    beginShape();
    for(var i=0; i<7;i++) {
      vertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]);
    }
    for(var i=0; i<7;i++) {
      vertex(positions.top_lip[i][0], positions.top_lip[i][1]);
    }
    endShape(CLOSE);
  
    pop();
    pop();

  
    
  //eyes 
  push();
  translate(0, this.eyePosition/100);
  for(var i=2; i<=5; i++){
    noStroke();
    fill(eyeColour1, eyeColour2, eyeColour3, i*70);
    ellipse(eye1_pos[0], eye1_pos[1], 1-(i/6), 1-(i/6));
    ellipse(eye2_pos[0], eye2_pos[1], 1-(i/6), 1-(i/6));
    }


    fill("#000000")
    ellipse(eye1_pos[0], eye1_pos[1], 15*scale1, 20*scale1);
    ellipse(eye2_pos[0], eye2_pos[1], 15*scale1, 20*scale1);

  pop();

  }



  

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.mouthPosition = settings[0];
    this.eyePosition = settings[1];
    this.season = settings[2];
    this.facePos = settings[3];
  }
  

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(4);
    properties[0] = this.mouthPosition;
    properties[1] = this.mouthPosition;
    properties[2] = this.season;
    properties[3] = this.facePos;
    
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
  strokeWeight(0.1);
  translate(x, y);
  rotate(rotation);
  line(0, 0, 0, -10.0/4);
  line(0, -2.0/4, 1.0/4, -3.0/4);
  line(0, -3.0/4, -2.0/4, -5.0/4);
  line(0, -4.0/4, 2.0/4, -6.0/4);
  line(0, -6.0/4, 1.5/4, -7.5/4);
  line(0, -6.0/4, -1.5/4, -7.5/4);
  line(0, -8.0/4, -1.0/4, -9.0/4);
  line(0, -8.0/4, 1.0/4, -9.0/4);
  pop();
}
