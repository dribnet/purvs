/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// other variables can be in here too
// these control the colors used
var bg_color = [225, 206, 187];
var fg_color = [255,255,245];
stroke_color = [95, 52, 8];

var bg_color = "grey";
var fg_color1 = "rgb(177,215,151)";
var ZamasuFaceColor1 = "rgb(177,215,151)";
var ZamasuFaceColor2 = "rgb(157,195,131)";
var ZamasuFaceColor3 = "rgba(0,0,0, 0.2)";
var ZamasuFaceColor4 = "rgba(0,0,0,0.1)";
var ZamasuHairColor1 = "rgb(232,236,236)";
var ZamasuHairColor2 = "rgb(169,176,175)";
var ZamasuPotEaringColor1 = "rgb(243,255,84)";
var ZamasuPotEaringColor2 = "rgb(145,157,0)";
var ZamasuPotEaringColor3 = "rgb(18,223,42)";
var fg_color2 = "#999999";

var stroke_color = "black";
var eyecolor1 = "rgb(158,160,160)";
var eyecolor2 = "rgb(15,15,15)";
var eyecolor3 = "rgb(255,255,255)";

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

	var eyebrowLeft_pos = average_point(positions.left_eyebrow);
    var eyebrowRight_pos = average_point(positions.right_eyebrow);

    var mouthTop_pos = average_point(positions.bottom_lip);
	var mouthBottom_pos = average_point(positions.top_lip);

	var noseTip_pos = average_point(positions.nose_tip);
	var noseBridge_pos = average_point(positions.nose_bridge);

    var half_height = positions.chin[7][1] - nose_pos[1];
    var face_width = positions.chin[positions.chin.length-1][0] - positions.chin[0][0];

    var leftEarLength = positions.left_eye[0][0] - positions.chin[0][0];
    var rightEarLength = positions.right_eye[3][0] - positions.chin[16][0];

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
    var scale = extent / 220.0;

    // Uncomment to see drawing area
    // fill(255);
    // stroke(0);
    // rect(x-w/2, y-h/2, w, h);
    // fill(0)
    // ellipse(x, y, w, h);


    // Ears
    noStroke();
    fill(ZamasuFaceColor2);

    // Left Ear
    beginShape();
    	vertex(positions.chin[1][0] + (2 * scale), positions.chin[1][1]);
    	vertex(positions.chin[3][0] + (2 * scale), positions.chin[3][1]);
    	vertex(positions.chin[2][0] - (25 * scale * leftEarLength), positions.chin[3][1] - (6 * scale * leftEarLength));
    	vertex(positions.chin[1][0] - (80 * scale * leftEarLength), positions.chin[1][1] - (20 * scale * leftEarLength));
    endShape();

    // Right Ear
    beginShape();
    	vertex(positions.chin[15][0] - (2 * scale), positions.chin[15][1]);
    	vertex(positions.chin[13][0] - (2 * scale), positions.chin[13][1]);
    	vertex(positions.chin[14][0] + (25 * scale * -rightEarLength), positions.chin[13][1] + (6 * scale * rightEarLength));
    	vertex(positions.chin[15][0] + (80 * scale * -rightEarLength), positions.chin[15][1] + (20 * scale * rightEarLength));
    endShape();


    // Ear Shading
    noStroke();
    fill(ZamasuFaceColor4);

    if (leftEarLength < -rightEarLength) {
	    // Left Ear
	    beginShape();
	    	vertex(positions.chin[1][0] + (2 * scale), positions.chin[1][1]);
	    	vertex(positions.chin[3][0] + (2 * scale), positions.chin[3][1]);
	    	vertex(positions.chin[2][0] - (25 * scale * leftEarLength), positions.chin[3][1] - (6 * scale * leftEarLength));
	    	vertex(positions.chin[1][0] - (80 * scale * leftEarLength), positions.chin[1][1] - (20 * scale * leftEarLength));
	    endShape();
	}

	if (-rightEarLength < leftEarLength) {
	    // Right Ear
	    beginShape();
	    	vertex(positions.chin[15][0] - (2 * scale), positions.chin[15][1]);
	    	vertex(positions.chin[13][0] - (2 * scale), positions.chin[13][1]);
	    	vertex(positions.chin[14][0] + (25 * scale * -rightEarLength), positions.chin[13][1] + (6 * scale * rightEarLength));
	    	vertex(positions.chin[15][0] + (80 * scale * -rightEarLength), positions.chin[15][1] + (20 * scale * rightEarLength));
	    endShape();
	}

	// Potara Earrings

	fill(ZamasuPotEaringColor1);
    ellipse(positions.chin[2][0] + 0.1 - (10 * scale * leftEarLength), positions.chin[3][1] + 0.1 - (6 * scale * leftEarLength), 8 * scale, 8 * scale);
    fill(ZamasuPotEaringColor3);
    ellipse(positions.chin[2][0] + 0.1 - (10 * scale * leftEarLength), positions.chin[3][1] + 0.2 - (6 * scale * leftEarLength), 15 * scale, 15 * scale);
    fill(ZamasuPotEaringColor1);
    ellipse(positions.chin[2][0] + 0.1 - (10 * scale * leftEarLength), positions.chin[3][1] - (6 * scale * leftEarLength), 10 * scale, 10 * scale);

    fill(ZamasuPotEaringColor1);
    ellipse(positions.chin[14][0] - 0.1 + (10 * scale * -rightEarLength), positions.chin[13][1] + 0.1 - (6 * scale * -rightEarLength), 8 * scale, 8 * scale);
    fill(ZamasuPotEaringColor3);
    ellipse(positions.chin[14][0] - 0.1 + (10 * scale * -rightEarLength), positions.chin[13][1] + 0.2 - (6 * scale * -rightEarLength), 15 * scale, 15 * scale);
    fill(ZamasuPotEaringColor1);
    ellipse(positions.chin[14][0] - 0.1 + (10 * scale * -rightEarLength), positions.chin[13][1] - (6 * scale * -rightEarLength), 10 * scale, 10 * scale);

    // Potara Earring Shading
    noStroke();
    fill(ZamasuFaceColor4);

    if (leftEarLength < -rightEarLength) {
        ellipse(positions.chin[2][0] + 0.1 - (10 * scale * leftEarLength), positions.chin[3][1] + 0.1 - (6 * scale * leftEarLength), 8 * scale, 8 * scale);
        ellipse(positions.chin[2][0] + 0.1 - (10 * scale * leftEarLength), positions.chin[3][1] + 0.2 - (6 * scale * leftEarLength), 15 * scale, 15 * scale);
        ellipse(positions.chin[2][0] + 0.1 - (10 * scale * leftEarLength), positions.chin[3][1] - (6 * scale * leftEarLength), 10 * scale, 10 * scale);
    }

    if (-rightEarLength < leftEarLength) {
        ellipse(positions.chin[14][0] - 0.1 + (10 * scale * -rightEarLength), positions.chin[13][1] + 0.1 - (6 * scale * -rightEarLength), 8 * scale, 8 * scale);
        ellipse(positions.chin[14][0] - 0.1 + (10 * scale * -rightEarLength), positions.chin[13][1] + 0.2 - (6 * scale * -rightEarLength), 15 * scale, 15 * scale);
        ellipse(positions.chin[14][0] - 0.1 + (10 * scale * -rightEarLength), positions.chin[13][1] - (6 * scale * -rightEarLength), 10 * scale, 10 * scale);
    }
    // fill(ZamasuFaceColor3);
    // ellipse(135, 152, 10, 10);
    // ellipse(135, 170, 30, 30);
    // ellipse(135, 140, 17, 17);

    // fill(ZamasuPotEaringColor1);
    // ellipse(-135, 152, 10, 10);
    // fill(ZamasuPotEaringColor3);
    // ellipse(-135, 170, 30, 30);
    // fill(ZamasuPotEaringColor1);
    // ellipse(-135, 140, 17, 17); 

    // head
    noStroke();
    fill(ZamasuFaceColor1);
    beginShape();
    for(var i=0; i<positions.chin.length;i++) {
      vertex(positions.chin[i][0], positions.chin[i][1]);
    }

    // for(var i=positions.chin.length-1; i>=0;i--) {
    //   vertex(positions.chin[i][0], -positions.chin[i][1]- (100 * scale));
    // }

    for(var i=positions.right_eyebrow.length-1; i>=0;i--) {
      vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1] - (50 * scale));
    }

    vertex(positions.right_eyebrow[0][0] - (20 * scale), positions.right_eyebrow[0][1] - (45 * scale));

    for(var i=positions.left_eyebrow.length-1; i>=0;i--) {
      vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1] - (50 * scale));
    }
    endShape(CLOSE);



    // mouth
    noStroke();
    fill(ZamasuFaceColor2);
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
    noStroke();
    fill(ZamasuFaceColor2);
    // beginShape();
    // vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
    // for(var i=0; i<positions.nose_tip.length;i++) {
    //   vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
    // }
    // endShape(CLOSE);
    if (-rightEarLength < leftEarLength) {
        beginShape();
            vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
            vertex(positions.nose_tip[4][0], positions.nose_tip[4][1]);
            vertex(positions.nose_tip[2][0], positions.nose_tip[2][1]);
        endShape(CLOSE);
    }

    if (leftEarLength < -rightEarLength) {
        beginShape();
            vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
            vertex(positions.nose_tip[0][0], positions.nose_tip[0][1]);
            vertex(positions.nose_tip[2][0], positions.nose_tip[2][1]);
        endShape(CLOSE);
    }


    beginShape();
        vertex(positions.nose_tip[4][0], positions.nose_tip[4][1]);
        vertex(positions.nose_tip[2][0], positions.nose_tip[2][1]);
        vertex(positions.nose_tip[0][0], positions.nose_tip[0][1]);
        vertex(positions.nose_bridge[3][0], positions.nose_bridge[3][1]);
    endShape();



    // eyes
    noStroke();
    fill(eyecolor3);

    // Left eye
    beginShape();
        vertex(positions.left_eye[0][0] - (10 * scale), positions.left_eye[0][1] - (10 * scale));
        vertex(positions.left_eye[2][0], positions.left_eye[2][1] - (10 * scale));
        vertex(positions.left_eye[3][0] + (10 * scale), positions.left_eye[3][1]);
        vertex(positions.left_eye[5][0], positions.left_eye[5][1]);
    endShape();

    // beginShape();
    // for(var i=0; i<positions.right_eye.length;i++) {
    //   vertex(positions.right_eye[i][0], positions.right_eye[i][1]);
    // }
    // endShape(CLOSE);

    // Right eye
    beginShape();
        vertex(positions.right_eye[0][0] - (10 * scale), positions.right_eye[0][1]);
        vertex(positions.right_eye[1][0], positions.right_eye[1][1] - (10 * scale));
        vertex(positions.right_eye[3][0] + (10 * scale), positions.right_eye[3][1] - (10 * scale));
        vertex(positions.right_eye[4][0], positions.right_eye[4][1]);
    endShape();

    fill(eyecolor1);
    ellipse(eye1_pos[0] + (5 * scale), eye1_pos[1] - (5 * scale), 19 * scale, 19 * scale);
    ellipse(eye2_pos[0] - (5 * scale), eye2_pos[1] - (5 * scale), 19 * scale, 19 * scale);

    // right eyebrow
    noStroke();
    fill(ZamasuHairColor1);
    beginShape();
    	vertex(positions.right_eyebrow[0][0], positions.right_eyebrow[0][1]);
    	vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1]);
    	vertex(positions.right_eyebrow[4][0], positions.right_eyebrow[4][1]);
    	vertex(positions.right_eyebrow[2][0], positions.right_eyebrow[2][1]+ 8 * scale);
    endShape(CLOSE);

    // left eyebrow
    noStroke();
    fill(ZamasuHairColor1);
    beginShape();
    	vertex(positions.left_eyebrow[0][0], positions.left_eyebrow[0][1]);
    	vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1]);
    	vertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1]);
    	vertex(positions.left_eyebrow[2][0], positions.left_eyebrow[2][1]+ 8 * scale);
    endShape(CLOSE);
    strokeWeight(1);  

    

    //test Section

    // noStroke();
    // fill(eyecolor3);
    // beginShape();
    //     vertex(positions.right_eye[0][0], positions.right_eye[0][1]);
    //     vertex(positions.right_eye[1][0], positions.right_eye[1][1]);
    //     vertex(positions.right_eye[2][0], positions.right_eye[2][1]);
    //     vertex(positions.right_eye[3][0], positions.right_eye[3][1] + (20 * scale));
    //     vertex(positions.right_eye[4][0], positions.right_eye[4][1]);
    //     vertex(positions.right_eye[5][0], positions.right_eye[5][1]);
    // endShape();

    rectMode(CENTER);
    fill('black');
    rect(mouthBottom_pos[0], mouthBottom_pos[1] + 20, 16 * scale * 2, 16 * scale * 2);

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