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


mid= [244, 200, 176, 50];
noseColor = ["#ebcebb", mid,"#ba9584"]
skinShadow_color = ["#ebcebb", "#d6a995","#ba9584"]
stroke_color = [skinLowlight_color[1]];

upperLip_color = ["#ba8080", "#ba8080", "#ba7878", "#ba7878"]; // 1 longer than the rest for stroke
lowerLip_color = ["#ce9090", "#db9d9d", "#ce9090"];

innerMouth_color = ["#724e4e", "#5e3d3d", "#724e4e"];
teeth_color = ["#fcfaf4", "#fcfaf4", "#fcfaf4"];

eyeball_color = "#fff";
iris_color = "#22323d";
pupil_color = "#000";

function FaceMap() {
  this.lookPos = 50;
  this.eyeAngle = 100;

 


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
    var eye_squish = map(this.eyeAngle, 0, 100, 50, 100);

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
    var size = extent / 220.0;


    // head
    stroke(0, 0, 0, 100);
    fill(skinMidtone_color[skin_color_value]);
    beginShape();
    curveVertex(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]);
    for(var i=0; i<positions.chin.length;i++) {

      curveVertex(positions.chin[i][0], positions.chin[i][1]);
    }
    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      curveVertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
    }
    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      curveVertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
    }
    curveVertex(positions.chin[0][0], positions.chin[0][1]);

    endShape(CLOSE);

    /////////////////////////////////////////// mouth
    //inner mouth
    stroke(upperLip_color[skin_color_value+1]);
    strokeWeight(0.01);

    fill(teeth_color[skin_color_value]);
     beginShape();
     for(var i=0; i<positions.top_lip.length/2;i++) {
      vertex(positions.top_lip[i][0], positions.top_lip[i][1]);
    }
      for(var i=0; i<6;i++) {
    		if (i!=3 && i!=9){
      vertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]);
 	}
    }
    endShape(CLOSE);





    //lips
    fill(upperLip_color[skin_color_value]);
    beginShape();
     for(var i=0; i<positions.top_lip.length;i++) {
      curveVertex(positions.top_lip[i][0], positions.top_lip[i][1]);
    }
    endShape(CLOSE);

        fill(lowerLip_color[skin_color_value]);
    beginShape();
           for(var i=0; i<positions.bottom_lip.length;i++) {
    	if (i!=3 && i!=9){
      curveVertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]);
  }
    }
    endShape(CLOSE);
    noStroke();



    ///////////////////////////////////////////left eye

    push();
    scale(1.4);
    translate(0.2, 0.4);

    //eyeball
    beginShape();
    fill(eyeball_color)
    for(var i=0; i<positions.left_eye.length;i++) {
      curveVertex(positions.left_eye[i][0], positions.left_eye[i][1]);
    }
    endShape(CLOSE);

    //eye center
    push();
    translate((eye1_pos[0]-0.1)+(this.lookPos/500), eye1_pos[1]-0.03);
    scale(eye_squish/100, 1);

       fill(iris_color);
    ellipse(0, 0, 20 * size, 20 * size);

    fill(230, 250, 200, 20);
    for(var i=0; i<8;i++) {
      ellipse(0, 0, (12+i) * size, (12+i) * size);
    }
     fill(pupil_color);
    ellipse(0, 0, 8 * size, 8 * size);
  pop();

  //eye highlights

     fill(255, 255, 255, 5);
    for (var i=4; i>0;i-=0.02) {
    	ellipse((eye1_pos[0]-0.03), eye1_pos[1]-0.07, i * size, i* size)
 	 }
 	 push();

 	 translate(eye1_pos[0], eye1_pos[1]);
    rotate(-30);
      for (var i=6; i>0;i-=0.02) {
    ellipse(0, 0, i * (size/2), i*size);
  }
  pop();

  //lower lid shadow

       for(var j=0.04; j>0; j-= 0.02){
    push();
    translate(-0.02, -j);
    scale(0.98, 1)
    fill(0, 0, 0, (20/(j*30)));
    beginShape();
    	curveVertex(positions.left_eye[0][0], positions.left_eye[0][1]);
  	 	for(var i=5; i>=3;i--) {
        	curveVertex(positions.left_eye[i][0], positions.left_eye[i][1]);
    	}
    	for(var i=3; i<=5;i++) {
        	curveVertex(positions.left_eye[i][0], (positions.left_eye[i][1])+0.1);
 
    	}
    endShape(CLOSE);
    pop();
    }

    //lower lid shape

beginShape();
	fill(skinMidtone_color[skin_color_value]);
    curveVertex(positions.left_eye[0][0], positions.left_eye[0][1]);
  	 	for(var i=5; i>=3;i--) {
        	curveVertex(positions.left_eye[i][0], positions.left_eye[i][1]);
    	}
    	for(var i=3; i<=5;i++) {
        	curveVertex(positions.left_eye[i][0], (positions.left_eye[i][1])+0.15);
 
    	}
endShape(CLOSE);

//eyelid shadow
    for(var j=0.01; j<0.1; j+= 0.01){
    push();
    translate(-0.02, j);
    scale(0.98, 1)
     beginShape();
     fill(0, 0, 0, (20/(j*20)));
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
}
//eyelid shape
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

//browbone shape
        beginShape();

     fill(skinMidtone_color[skin_color_value]);
 		vertex((positions.left_eye[0][0]), (positions.left_eye[0][1]));  
       for(var i=0; i<4;i++) {
        var eyelid_value_y = ((positions.left_eye[i][1] + positions.left_eyebrow[i+1][1])/2.2);
        var eyelid_value_x = ((positions.left_eye[i][0] + positions.left_eyebrow[i][0])/2.3);
        curveVertex((eyelid_value_x), (eyelid_value_y));
    }
curveVertex((positions.left_eyebrow[4][0]+positions.left_eyebrow[3][0])/2.5, (positions.left_eyebrow[3][1]+0.2)); 

   curveVertex((positions.left_eyebrow[1][0]+0.2), (positions.left_eyebrow[1][1])+0.1);

  	
        

    endShape(CLOSE);  
     
   	pop(); 


    //////////////////////////////////////////////////right eye
    push();
    scale(1.4);
    translate(-0.2, 0.4);

    //eyeball
    beginShape();
    fill(eyeball_color)
    for(var i=0; i<positions.right_eye.length;i++) {
      curveVertex(positions.right_eye[i][0], positions.right_eye[i][1]);
    }

    endShape(CLOSE);

    push();
    translate((eye2_pos[0]-0.1)+(this.lookPos/500), eye2_pos[1]-0.03);
    scale(eye_squish/100, 1);

    //iris
       fill(iris_color);
    ellipse(0, 0, 20 * size, 20 * size);

    fill(230, 250, 200, 20);
    for(var i=0; i<8;i++) {
      ellipse(0, 0, (12+i) * size, (12+i) * size);
    }
    //pupil
        fill(pupil_color);
    ellipse(0, 0, 8 * size, 8 * size);

  pop();

  //eye highlights
      fill(255, 255, 255, 5);
    for (var i=4; i>0;i-=0.02) {
    ellipse((eye2_pos[0]-0.1)+0.07, eye2_pos[1]-0.07, i * size, i* size)
  }
  push();

  translate(eye2_pos[0], eye2_pos[1]);
    rotate(-30);
      for (var i=6; i>0;i-=0.01) {
    ellipse(0, 0, i * (size/2), i*size);
  }
  pop();

  //lower lid shadow

       for(var j=0.04; j>0; j-= 0.02){
    push();
    translate(0.02, -j);
    scale(0.98, 1)
    fill(0, 0, 0, (20/(j*30)));
    beginShape();
    	curveVertex(positions.right_eye[0][0], positions.right_eye[0][1]);
  	 	for(var i=5; i>=3;i--) {
        	curveVertex(positions.right_eye[i][0], positions.right_eye[i][1]);
    	}
    	for(var i=3; i<=5;i++) {
        	curveVertex(positions.right_eye[i][0], (positions.right_eye[i][1])+0.1);
 
    	}
    endShape(CLOSE);
    pop();
    }

//lower lid shape
beginShape();
	fill(skinMidtone_color[skin_color_value]);
    curveVertex(positions.right_eye[0][0], positions.right_eye[0][1]);
  	 	for(var i=5; i>=3;i--) {
        	curveVertex(positions.right_eye[i][0], positions.right_eye[i][1]);
    	}
    	for(var i=3; i<=5;i++) {
        	curveVertex(positions.right_eye[i][0], (positions.right_eye[i][1])+0.15);
 
    	}
endShape(CLOSE);


//eyelid shadow
    for(var j=0.01; j<0.1; j+= 0.02){
    push();
    translate(0.02, j);
    scale(0.98, 1)
     beginShape();
     fill(0, 0, 0, (20/(j*20)));	 
 		curveVertex((positions.right_eye[0][0]), (positions.right_eye[0][1]));  
       for(var i=0; i<4;i++) {
        var eyelid_value_y = ((positions.right_eye[i][1] + positions.right_eyebrow[i][1])/2.2);
        var eyelid_value_x = ((positions.right_eye[i][0] + positions.right_eyebrow[i+1][0])/2.3);
        curveVertex((eyelid_value_x), (eyelid_value_y));
    }
     for(var i=3; i>=0;i--) {
        curveVertex((positions.right_eye[i][0]), (positions.right_eye[i][1]));   
      }

    endShape(CLOSE);   

    endShape(CLOSE);   
    pop();
}

//eyelid shape

  beginShape();

     fill(skinLowlight_color[skin_color_value]);
 		curveVertex((positions.right_eye[0][0]), (positions.right_eye[0][1]));  
       for(var i=0; i<4;i++) {
        var eyelid_value_y = ((positions.right_eye[i][1] + positions.right_eyebrow[i][1])/2.2);
        var eyelid_value_x = ((positions.right_eye[i][0] + positions.right_eyebrow[i+1][0])/2.3);
        curveVertex((eyelid_value_x), (eyelid_value_y));
    }
     for(var i=3; i>=0;i--) {
        curveVertex((positions.right_eye[i][0]), (positions.right_eye[i][1]));   
      }

    endShape(CLOSE);      

//browbone shape
        beginShape();

     fill(skinMidtone_color[skin_color_value]);
       for(var i=3; i>=0;i--) {
        var eyelid_value_y = ((positions.right_eye[i][1] + positions.right_eyebrow[i][1])/2.2);
        var eyelid_value_x = ((positions.right_eye[i][0] + positions.right_eyebrow[i+1][0])/2.3);
        curveVertex((eyelid_value_x), (eyelid_value_y));
    }
	curveVertex((positions.right_eyebrow[0][0]+0.15), (positions.right_eyebrow[0][1])+0.1);
  	curveVertex((positions.right_eyebrow[1][0]+0.15), (positions.right_eyebrow[1][1])+0.1);
        curveVertex((positions.right_eyebrow[2][0]+positions.right_eyebrow[3][0])/2.5, (positions.right_eyebrow[2][1]+0.15));   
   
    endShape(CLOSE);  

   	pop(); 

   	////////////////////////////////////////eyebrows
   	//left eyebrow
     	var browScale = 0.2
    for (var j=0; j<10; j++){
    	browScale-=0.02;
        beginShape();
	    
	    fill(0, 0, 0, 30);
	    
    for(var i=1; i<3;i++) {
        vertex((positions.left_eyebrow[i+1][0]), (positions.left_eyebrow[i+1][1]+0.2));   
    }
    vertex((positions.left_eyebrow[4][0]-browScale), (positions.left_eyebrow[4][1]+0.2)-(browScale/2));  
	vertex((positions.left_eyebrow[4][0]-browScale), (positions.left_eyebrow[4][1])-(browScale/2));   
    for(var i=3; i>=0;i--) {
    	if (i!=1){
        vertex((positions.left_eyebrow[i][0]), (positions.left_eyebrow[i][1]));   
    }
    }
    endShape(CLOSE);
}


    //right eyebrow
 	var browScale = 0
    for (var j=0; j<10; j++){
    	browScale-=0.02;
        beginShape();
	    
	
	    vertex((positions.right_eyebrow[0][0]-browScale), (positions.right_eyebrow[0][1]+0.2)+(browScale/2));
	    for(var i=1; i<4;i++) {
	        vertex((positions.right_eyebrow[i-1][0]), (positions.right_eyebrow[i-1][1]+0.2));   
	    }
	    for(var i=4; i>=0;i--) {
	    	if (i!= 3){
	        vertex((positions.right_eyebrow[i][0]), (positions.right_eyebrow[i][1]));   
	    }
	    }
	    vertex((positions.right_eyebrow[0][0]-browScale), (positions.right_eyebrow[0][1])+(browScale/2));

	    endShape(CLOSE);
	  
	}

	    ////////////////////////////////////////////// nose

    beginShape();
    fill(skinShadow_color[skin_color_value]);
    stroke(0, 0, 0, 80)
    strokeWeight(0.02);
    vertex(positions.nose_tip[positions.nose_tip.length-1][0], positions.nose_tip[positions.nose_tip.length-1][1]);
     vertex(positions.nose_bridge[positions.nose_bridge.length-1][0], positions.nose_bridge[positions.nose_bridge.length-1][1]);
    for(var i=0; i<positions.nose_tip.length;i++) {
      vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    }
	vertex(positions.nose_bridge[positions.nose_bridge.length-1][0], positions.nose_bridge[positions.nose_bridge.length-1][1]);
    endShape(CLOSE);

noStroke();
    fill(skinMidtone_color[skin_color_value]);
    beginShape();
    vertex(((positions.nose_bridge[0][0]+positions.right_eye[4][0])/2)-0.3, positions.nose_bridge[0][1]);
    vertex(((positions.nose_bridge[0][0]+positions.left_eye[4][0])/2)+0.3, positions.nose_bridge[0][1]);
	vertex(positions.nose_tip[0][0], positions.nose_tip[0][1]);
	vertex(positions.nose_tip[2][0], positions.nose_bridge[positions.nose_bridge.length-1][1]+0.3);
     vertex(positions.nose_tip[4][0], positions.nose_tip[4][1]);
    endShape(CLOSE);
     
    fill(noseColor[skin_color_value]);
    var noseWidth = 0;
    for (var j=0; j<20; j++){
    	noseWidth+=0.02
    beginShape();
    vertex(((positions.nose_bridge[0][0]+positions.right_eye[4][0])/2)-0.3, positions.nose_bridge[0][1]+noseWidth);
    vertex(((positions.nose_bridge[0][0]+positions.left_eye[4][0])/2)+0.3, positions.nose_bridge[0][1]+noseWidth);
	vertex(positions.nose_tip[0][0]+noseWidth, positions.nose_tip[0][1]);
	vertex(positions.nose_tip[2][0], positions.nose_bridge[positions.nose_bridge.length-1][1]+0.3);
     vertex(positions.nose_tip[4][0]-noseWidth, positions.nose_tip[4][1]);
    endShape(CLOSE);
}


     fill(255, 235, 226, 10);
     var highlightWidth = 0.2;
     for (var j=0; j<20; j++){
     	highlightWidth -= 0.01;
    beginShape();
  vertex(((positions.nose_bridge[1][0]+positions.right_eye[4][0])/2)-0.4, positions.nose_bridge[1][1]+highlightWidth);
    vertex(((positions.nose_bridge[1][0]+positions.left_eye[4][0])/2)+0.4, positions.nose_bridge[1][1]+highlightWidth);
  vertex(positions.nose_tip[1][0]+highlightWidth, positions.nose_bridge[positions.nose_bridge.length-1][1]+0.2);
        vertex(positions.nose_tip[2][0], positions.nose_bridge[positions.nose_bridge.length-1][1]+0.3);
      
      vertex(positions.nose_tip[3][0]-highlightWidth, positions.nose_bridge[positions.nose_bridge.length-1][1]+0.2);
    endShape(CLOSE);
}
}


  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.lookPos = settings[0];
    this.eyeAngle = settings[1];
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    properties = new Array(2);
    properties[0] = this.lookPos;
    properties[1] = this.eyeAngle;
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