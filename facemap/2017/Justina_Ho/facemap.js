/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
bg_color = [0,0,0];
fg_color = [119, 175, 84];
stroke_color = [61,61,61];
hair_color = [92, 140, 63];
mouth_color = [61,61,61];

function FaceMap() {
  this.hairColor = 50;
  this.faceColor = 50;
  this.eyeColor = 0;


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

    var forehead = Math.floor(map(this.forehead, 0, 100, 0, 2));
    var hairDots = Math.floor(map(this.hair, 0, 100, 0, 3));
    var hairColor = map(this.hairColor, 0, 100, 200, 20);
    var faceColor = map(this.faceColor, 0, 100, 100, 20); 
    var eyeColor = Math.floor(map(this.eyeColor, 0, 100, 0, 4));


      //forehead
fill(faceColor+76, faceColor+114, faceColor + 52);


noStroke();
beginShape();
      vertex(positions.chin[2][0], positions.chin[2][1]);
vertex(positions.chin[0][0], positions.chin[0][1]);
vertex(positions.left_eyebrow[0][0] -0.1, positions.left_eyebrow[0][1] - 1 ) ;
vertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1]  - 1.2) ;
vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1] -1.4 ) ;
vertex(positions.left_eyebrow[3][0], positions.left_eyebrow[3][1] -1.6 ) ;
vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1] -1.8 ) ;
vertex(positions.right_eyebrow[0][0] -0.1, positions.right_eyebrow[0][1] - 1.8 ) ;
vertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1]  - 1.6) ;
vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1] -1.4 ) ;
vertex(positions.right_eyebrow[3][0], positions.right_eyebrow[3][1] -1.2 ) ;
vertex(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1] -1 ) ;
vertex(positions.chin[16][0], positions.chin[16][1]);
 vertex(positions.chin[14][0], positions.chin[14][1]);
endShape();


      //ears
      fill(faceColor+76, faceColor+114, faceColor + 52);
      beginShape(); 
        vertex(positions.chin[16][0], positions.chin[16][1]-0.1+0.3);
        vertex(positions.chin[16][0]+0.5, positions.chin[16][1]+0.3);
        vertex(positions.chin[14][0] +1.7, positions.chin[14][1]-0.9);
        vertex(positions.chin[14][0] +1, positions.chin[14][1]-0.2);
        vertex(positions.chin[14][0] +0.5, positions.chin[14][1]);
        vertex(positions.chin[14][0], positions.chin[14][1]);
      endShape();

 

      beginShape(); 
        vertex(positions.chin[0][0], positions.chin[0][1]+0.1);
        vertex(positions.chin[0][0]-0.7, positions.chin[0][1]+0.2);
        vertex(positions.chin[2][0] -1.4, positions.chin[2][1]-1);
        vertex(positions.chin[2][0] -1, positions.chin[2][1]-0.2);
        vertex(positions.chin[2][0] -0.7, positions.chin[2][1]);
        vertex(positions.chin[2][0], positions.chin[2][1]);

      endShape();



    var extent = 0;
    if(h < w) {
      extent = h / 2;
    }
    else {
      extent = w / 2;
    }

    // head
    noStroke();
    
    fill(faceColor+76, faceColor+114, faceColor + 52);
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
      stroke(mouth_color);

       beginShape();
      vertex(positions.top_lip[7][0], positions.top_lip[7][1]);
      vertex(positions.top_lip[8][0], positions.top_lip[8][1]);
      vertex(positions.top_lip[9][0], positions.top_lip[9][1]);
      vertex(positions.top_lip[10][0], positions.top_lip[10][1]);
      vertex(positions.top_lip[11][0], positions.top_lip[11][1]);
      vertex(positions.bottom_lip[7][0], positions.bottom_lip[7][1]);
      vertex(positions.bottom_lip[8][0], positions.bottom_lip[8][1]);
      vertex(positions.bottom_lip[9][0], positions.bottom_lip[9][1]);
      vertex(positions.bottom_lip[10][0], positions.bottom_lip[10][1]);
      vertex(positions.bottom_lip[11][0], positions.bottom_lip[11][1]);
      
   endShape();


      noStroke();

      //eyes
      push();
      scale (1.5);
      translate(0.2,0.38);
      fill(255);
      beginShape();
      vertex(positions.left_eye[0][0], positions.left_eye[0][1]);
      vertex(positions.left_eye[1][0], positions.left_eye[1][1]);
      vertex(positions.left_eye[2][0], positions.left_eye[2][1]);
      vertex(positions.left_eye[3][0], positions.left_eye[3][1]);
      vertex(positions.left_eye[4][0], positions.left_eye[4][1]);
      vertex(positions.left_eye[5][0], positions.left_eye[5][1]);
      vertex(positions.left_eye[0][0], positions.left_eye[0][1]);
      endShape();
      pop();

      push();
      scale (1.5);
      translate (-0.2, 0.38);
      //stroke(stroke_color);
      fill(255);
      beginShape();
      vertex(positions.right_eye[0][0], positions.right_eye[0][1]);
      vertex(positions.right_eye[1][0], positions.right_eye[1][1]);
      vertex(positions.right_eye[2][0], positions.right_eye[2][1]);
      vertex(positions.right_eye[3][0], positions.right_eye[3][1]);
      vertex(positions.right_eye[4][0], positions.right_eye[4][1]);
      vertex(positions.right_eye[5][0], positions.right_eye[5][1]);
      vertex(positions.right_eye[0][0], positions.right_eye[0][1]);
      endShape();
      pop();

      if (eyeColor == 0){
        fill(0);
    }
    if (eyeColor == 1){
        fill(140, 103, 32);
    }
      if (eyeColor == 2){
        fill(30, 65, 122);
    }
      if (eyeColor == 3){
        fill(79, 59, 20);
    }
      if(eyeColor == 4){
         fill(73, 104, 37);
      }
    noStroke();
    ellipseMode(CENTER);
    ellipse(eye1_pos[0], eye1_pos[1], 0.2, 0.2);
    ellipse(eye2_pos[0], eye2_pos[1], 0.2 , 0.2);
      
      //eyelids
      
      push();
      scale (1.5);
      strokeWeight(0.02);
      stroke(stroke_color);
      translate(-0.2,0.38);
      noFill();
      beginShape();
      vertex(positions.right_eye[0][0], positions.right_eye[0][1]-0.1);
      vertex(positions.right_eye[1][0], positions.right_eye[1][1]-0.1);
      vertex(positions.right_eye[2][0], positions.right_eye[2][1]-0.1);
      vertex(positions.right_eye[3][0], positions.right_eye[3][1]-0.1);
      endShape();
      pop();
      
      push();
      scale (1.5);
      strokeWeight(0.02);
      stroke(stroke_color);
      translate(0.2,0.38);
      noFill();
      beginShape();
      vertex(positions.left_eye[0][0], positions.left_eye[0][1]-0.1);
      vertex(positions.left_eye[1][0], positions.left_eye[1][1]-0.1);
      vertex(positions.left_eye[2][0], positions.left_eye[2][1]-0.1);
      vertex(positions.left_eye[3][0], positions.left_eye[3][1]-0.1);
      endShape();
      pop();
      
      
    //eye bags
    push();
      scale (1.5);
      strokeWeight(0.02);
      translate(0.2,0.4);
      stroke(stroke_color);
      noFill();
      beginShape(); 
      vertex(positions.left_eye[3][0], positions.left_eye[3][1]+0.1);
      vertex(positions.left_eye[4][0], positions.left_eye[4][1]+0.1);
      vertex(positions.left_eye[5][0], positions.left_eye[5][1]+0.1);
      vertex(positions.left_eye[0][0], positions.left_eye[0][1]+0.1);
      endShape();
      
       beginShape();
      stroke(stroke_color);
      vertex(positions.left_eye[3][0]-0.15, positions.left_eye[3][1]+0.23);
      vertex(positions.left_eye[4][0], positions.left_eye[4][1]+0.2);
      vertex(positions.left_eye[5][0], positions.left_eye[5][1]+0.2);
      endShape();
      
      pop();

       push();
      scale (1.5);
       strokeWeight(0.02);
      translate(-0.2,0.4);
      stroke(stroke_color);
      noFill();
      beginShape();
      vertex(positions.right_eye[3][0], positions.right_eye[3][1]+0.1);
      vertex(positions.right_eye[4][0], positions.right_eye[4][1]+0.1);
      vertex(positions.right_eye[5][0], positions.right_eye[5][1]+0.1);
      vertex(positions.right_eye[5][0], positions.right_eye[5][1]+0.1);
      vertex(positions.right_eye[0][0], positions.right_eye[0][1]+0.1);
      endShape();
      
       beginShape();
      vertex(positions.right_eye[3][0]-0.1, positions.right_eye[3][1]+0.23);
      vertex(positions.right_eye[4][0], positions.right_eye[4][1]+0.2);
      vertex(positions.right_eye[5][0], positions.right_eye[5][1]+0.2);
      vertex(positions.right_eye[5][0], positions.right_eye[5][1]+0.2);
      endShape();   
      pop();

      //forehead wrinkles
      stroke(stroke_color);
      noFill();
      if(forehead ==0){
          
      }
      
      if (forehead ==1){
           beginShape();
vertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1]  - 0.6) ;
vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1] -0.7 ) ;
vertex(positions.left_eyebrow[3][0], positions.left_eyebrow[3][1] -0.8 ) ;
vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1] -0.9 ) ;
vertex(positions.right_eyebrow[0][0] -0.1, positions.right_eyebrow[0][1] - 0.9 ) ;
vertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1]  - 0.8) ;
vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1] -0.7) ;
vertex(positions.right_eyebrow[3][0], positions.right_eyebrow[3][1] -0.6) ;
      endShape();
      }
      
      if (forehead ==2){
           beginShape();
vertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1]  - 0.6) ;
vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1] -0.7 ) ;
vertex(positions.left_eyebrow[3][0], positions.left_eyebrow[3][1] -0.8 ) ;
vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1] -0.9 ) ;
vertex(positions.right_eyebrow[0][0] -0.1, positions.right_eyebrow[0][1] - 0.9 ) ;
vertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1]  - 0.8) ;
vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1] -0.7) ;
vertex(positions.right_eyebrow[3][0], positions.right_eyebrow[3][1] -0.6) ;
      endShape();
      
        beginShape();
vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1] -0.5 ) ;
vertex(positions.left_eyebrow[3][0], positions.left_eyebrow[3][1] -0.6 ) ;
vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1] -0.7 ) ;
vertex(positions.right_eyebrow[0][0] -0.1, positions.right_eyebrow[0][1] - 0.7 ) ;
vertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1]  - 0.6) ;
vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1] -0.5) ;
      endShape();
          
      }
     

    //hair
    stroke(61,61,61);
    strokeWeight(0.01);
      fill(hairColor);
      

      if(hairDots ==0){

      }

      if (hairDots ==1){
      ellipse(positions.left_eyebrow[0][0] +1, positions.left_eyebrow[0][1] -1.3,0.05,0.05);
      ellipse(positions.left_eyebrow[0][0] +2, positions.left_eyebrow[0][1] -1.3,0.05,0.05);
      ellipse(positions.left_eyebrow[0][0] +1.3, positions.left_eyebrow[0][1] -1,0.05,0.05);
      ellipse(positions.left_eyebrow[0][0] +0.2, positions.left_eyebrow[0][1] -0.3,0.05,0.05);
          ellipse(positions.left_eyebrow[0][0] +2.2, positions.left_eyebrow[0][1] -0.5,0.05,0.05);

      }

      if (hairDots ==2){
      ellipse(positions.left_eyebrow[0][0] +1, positions.left_eyebrow[0][1] -1.3,0.05,0.05);
      ellipse(positions.left_eyebrow[0][0] +2, positions.left_eyebrow[0][1] -1.3,0.05,0.05);
      ellipse(positions.left_eyebrow[0][0] +1.3, positions.left_eyebrow[0][1] -1,0.05,0.05);
      ellipse(positions.left_eyebrow[0][0] +0.2, positions.left_eyebrow[0][1] -0.3,0.05,0.05);
      ellipse(positions.left_eyebrow[0][0] +2.1, positions.left_eyebrow[0][1] -0.9,0.05,0.05);
      ellipse(positions.left_eyebrow[0][0] +1, positions.left_eyebrow[0][1] -0.7,0.05,0.05);
      ellipse(positions.left_eyebrow[0][0] +0., positions.left_eyebrow[0][1] -1,0.05,0.05);
        ellipse(positions.left_eyebrow[0][0] +2.2, positions.left_eyebrow[0][1] -0.5,0.05,0.05);

      	
      }

      if (hairDots ==3){
      ellipse(positions.left_eyebrow[0][0] +1, positions.left_eyebrow[0][1] -1.3,0.07,0.07);
      ellipse(positions.left_eyebrow[0][0] +1.5, positions.left_eyebrow[0][1] -1.3,0.07,0.07);      
        ellipse(positions.left_eyebrow[0][0] +0.5, positions.left_eyebrow[0][1] -1.3,0.07,0.07); 
          ellipse(positions.left_eyebrow[0][0] +0.3, positions.left_eyebrow[0][1] -0.8,0.07,0.07); 
      ellipse(positions.left_eyebrow[0][0] +2, positions.left_eyebrow[0][1] -1.3,0.07,0.07);
      ellipse(positions.left_eyebrow[0][0] +1.3, positions.left_eyebrow[0][1] -1,0.07,0.07);
      ellipse(positions.left_eyebrow[0][0] +0.2, positions.left_eyebrow[0][1] -0.3,0.07,0.07);
      ellipse(positions.left_eyebrow[0][0] +2.1, positions.left_eyebrow[0][1] -0.9,0.07,0.07);
      ellipse(positions.left_eyebrow[0][0] +1, positions.left_eyebrow[0][1] -0.7,0.07,0.07);
      ellipse(positions.left_eyebrow[0][0] +0., positions.left_eyebrow[0][1] -1,0.07,0.07);
      ellipse(positions.left_eyebrow[0][0] +2.8, positions.left_eyebrow[0][1] -0.6,0.07,0.07);
      ellipse(positions.left_eyebrow[0][0] +2.5, positions.left_eyebrow[0][1] -0.9,0.07,0.07);
      ellipse(positions.left_eyebrow[0][0] +2.2, positions.left_eyebrow[0][1] -0.5,0.07,0.07);

      }

      
      
       


    //eyebrow

    fill(stroke_color);
        noStroke();
     beginShape();  
vertex(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]);
vertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1]);
vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1]);
vertex(positions.left_eyebrow[3][0], positions.left_eyebrow[3][1]);
vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]);
vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]+0.05);
vertex(positions.left_eyebrow[3][0], positions.left_eyebrow[3][1]+0.05);
vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1]+0.05);
vertex(positions.left_eyebrow[1][0], positions.left_eyebrow[1][1]+0.05);
    endShape();

      beginShape();
vertex(positions.right_eyebrow[3][0], positions.right_eyebrow[3][1]+0.05);
vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1]+0.05);
vertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1]+0.05);
vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]+0.05);
vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]);
vertex(positions.right_eyebrow[1][0], positions.right_eyebrow[1][1]);
vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1]);
vertex(positions.right_eyebrow[3][0], positions.right_eyebrow[3][1]);
vertex(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]);
      endShape(); 


  }

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
  	this.forehead = settings[0];
  	this.hair = settings [1];
    this.hairColor = settings [2];
    this.faceColor = settings [3];
    this.eyeColor = settings [4];  
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(5);
    properties[0] = this.forehead;
    properties[1] = this.hair;
    properties[2] = this.hairColor;
    properties[3] = this.faceColor;
    properties[4] = this.eyeColor; 
      
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