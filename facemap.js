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
  this.hairLength = 50;
  this.hairColor = 50;

  /*
   * Draw a face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */ 
   rect()
    this.fireOpacity = 150;
    baseColour = int(focusedRandom(0,2));
      this.fireColour=0;
    this.fireOpacity = 150;
    this.flameSpread=50;
  this.draw = function(positions) {
    var nose_pos = average_point(positions.nose_bridge);
    var eye1_pos = average_point(positions.left_eye);
    var eye2_pos = average_point(positions.right_eye);
    var eyebrow1_pos = average_point(positions.left_eyebrow);
    var eyebrow2_pos = average_point(positions.right_eyebrow);
    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];
      //chin top left
    var ctl = [positions.chin[0][0],positions.chin[0][1]]
    //chin top right
    var ctr = [positions.chin[16][0],positions.chin[16][1]]
    //top of chins
    var toc =[[positions.chin[0][0],positions.chin[0][1]],[positions.chin[16][0],positions.chin[16][1]]]
    //avg top of chins
    var atoc= average_point(toc);
          var fire_pos=[[positions.chin[0][0],positions.chin[0][1]], 
                   [positions.chin[16][0],positions.chin[16][1]],
                   [positions.chin[2][0],positions.chin[2][1]],
                   [positions.chin[14][0],positions.chin[14][1]],
                   [positions.chin[4][0],positions.chin[4][1]],
                   [positions.chin[12][0],positions.chin[12][1]],
                   [positions.chin[6][0],positions.chin[6][1]],
                   [positions.chin[10][0],positions.chin[10][1]],
                   [positions.chin[8][0],positions.chin[8][1]],
                   [positions.chin[0][0],positions.chin[0][1]],
                   [positions.chin[16][0],positions.chin[16][1]],
                   [positions.chin[2][0],positions.chin[2][1]],
                   [positions.chin[14][0],positions.chin[14][1]],
                   [positions.chin[4][0],positions.chin[4][1]],
                   [positions.chin[12][0],positions.chin[12][1]],
                   [positions.chin[6][0],positions.chin[6][1]],
                   [positions.chin[10][0],positions.chin[10][1]],
                   [positions.chin[8][0],positions.chin[8][1]]]
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
    var scale2 = extent / 220.0;

    // Uncomment to see drawing area
//     fill(255);
//     stroke(0);
//     rect(x-w/2, y-h/2, w, h);
//     fill(0)
//     ellipse(x, y, w, h);

     //v is amount of variance of the fire's placement
      v=15*scale2;
      v=0;
      //d is the amount of difference the flames are from the middle.
      d= this.flameSpread*scale2;
      d=5*scale2;
      d=0;
//      d=0;
      //flameHeights: 
var fh=[-100*scale2,-100*scale2,-150*scale2, -150*scale2, -200*scale2, -200*scale2,-250*scale2, -100*scale2, -280*scale2,-100*scale2,-180*scale2,-100*scale2,-150*scale2,-150*scale2,-100*scale2,-100*scale2,-50*scale2,-50*scale2]
      //flamewidths:     
        var fw=[-50*scale2,50*scale2,-40*scale2,40*scale2,-30*scale2,30*scale2,-30*scale2, 30*scale2,0*scale2, 0*scale2,0*scale2, 0*scale2, 0*scale2, 0*scale2, 0*scale2, 0*scale2,0*scale2,0*scale2]
       baseIntensity = random(70,150);
          var flameIntensity =[baseIntensity+100,baseIntensity+100,baseIntensity+80,baseIntensity+60,baseIntensity+50,baseIntensity+40,baseIntensity+30,baseIntensity+20,baseIntensity+10,baseIntensity,baseIntensity+10,baseIntensity+20,baseIntensity+30,baseIntensity+40,baseIntensity+50,baseIntensity+60,baseIntensity+80,baseIntensity+100]

         noStroke();
    if(baseColour ==0){
    this.fireColour = mostlyOrange();
}
      else {
          this.fireColour = mostlypastelOrange();
      }   
      
              push();
      translate(0,scale2*40);
      for(var n=0; n<positions.chin.length;n++) {
                    
           if (this.fireColour==0){
               //pretty blue
           fill(0, flameIntensity[n], 255, this.fireOpacity/2);
           }
           else if (this.fireColour==1){
               //orange
           fill(255, flameIntensity[n], 0, this.fireOpacity);
           }
           else if (this.fireColour==2){
               //pastel orange
        fill(255, flameIntensity[n], 100, this.fireOpacity);
           }
           else if(this.fireColour==3){
                //pretty purple
        fill(200, flameIntensity[n]-60, 250, this.fireOpacity/2);
           }
         else if(this.fireColour==4){
              // pretty greenish blue:
           fill(0, flameIntensity[n], 100, this.fireOpacity);
         }
          else{
              // pretty greenish yellow:
           fill(flameIntensity[n]+100, flameIntensity[n]+200, 100, this.fireOpacity);    
       }
          beginShape();
    for(var i=2; i<positions.chin.length;i=i+3) {
        translateFaceUp =-(positions.chin[i][0]/20*scale2);
         //translateFaceUp=0;
      vertex(positions.chin[i][0], positions.chin[i][1]+translateFaceUp);
    }
      vertex(fire_pos[n][0]+fw[n], atoc[1]+fh[n]);

          endShape(CLOSE);
    }
    

    // mouth

             fill(0);
       beginShape();
      vertex(positions.top_lip[0][0], positions.top_lip[0][1]-20*scale2);

      vertex(positions.top_lip[6][0], positions.top_lip[6][1]-20*scale2);

      vertex(positions.bottom_lip[10][0], positions.bottom_lip[10][1]-20*scale2);
    
      vertex(positions.bottom_lip[9][0], positions.bottom_lip[9][1]-20*scale2);
        vertex(positions.bottom_lip[8][0], positions.bottom_lip[8][1]-20*scale2);
      
      
    endShape(CLOSE);
      
    // nose
      noStroke();
    beginShape();
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    }
    endShape(CLOSE);

    // eyes

    fill(255);
    ellipse(eye1_pos[0], eye1_pos[1]+scale2*40, 50 * scale2, 50 * scale2);
    ellipse(eye2_pos[0], eye2_pos[1]+scale2*40, 50 * scale2, 50 * scale2);
      //pupil
    fill(0);
    ellipse(eye1_pos[0], eye1_pos[1]+scale2*40, 30 * scale2, 30 * scale2);
    ellipse(eye2_pos[0], eye2_pos[1]+scale2*40, 30 * scale2, 30 * scale2);
//eyebrows
    fill(0);
      push();
 strokeWeight(1); 
      stroke(0);
       line(positions.left_eyebrow[0][0]+scale2*10,eyebrow1_pos[1]+scale2*40,positions.left_eyebrow[4][0]-scale2*10, eyebrow1_pos[1]+scale2*40);
       line(positions.right_eyebrow[0][0]+scale2*10,eyebrow2_pos[1]+scale2*40,positions.right_eyebrow[4][0]-scale2*10, eyebrow2_pos[1]+scale2*40);
     
 
    strokeWeight(1);  
      pop();
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