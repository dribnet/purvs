/*
 * Face class - holds all informaiton about one face
 */
function Face() {
	// these are state variables for a face
	// (your variables may be different)


	random(0,1) < 0.2 ? this.hasNose = false: this.hasNose = true;
	this.width_value = focusedRandom(0, 100, 3, 50);
	this.mouth_value_W = focusedRandom(30, 100, 3, 65);
	this.mouth_value_H = focusedRandom(20, 50, 3, 35);
	this.eye_value = focusedRandom(20, 40, 2, 35);
	this.eyebrowsHeight = focusedRandom(70, 130, 2, 100);
	this.eyebrowsAngle = focusedRandom(-15, 15, 1, 0);
	this.eyeDistance = map(this.width_value, 0, 100, 20, 80);


	// other variables can be in here too
	// these control the colors used
	this.bg_color = [225, 206, 187];
	this.fg_color = [151, 102, 52];
	this.stroke_color = [95, 52, 8];

	this.bg_color3 = [50, 50, 50];
	this.fg_color2 = "#ffffff";

	/*
	 * Draw a face centered at x,y with an allowed
	 * width and height of w,h.
	 */
	this.draw1 = function (x, y, w, h) {
		// Uncomment to see drawing area
		//fill(255);
		 //stroke(0);
		 //rect(x-w/2, y-h/2, w, h);
		//fill(0)
		 //ellipse(x, y, w, h);

		push();
		translate(x, y);
		rectMode(CENTER);
		ellipseMode(CENTER);
		angleMode(DEGREES);

		var extent = 0;
		h < w ? extent = h / 2 : extent = w / 2;
		var scale = extent / 240.0;

		//face
		noStroke();
		fill(this.fg_color2);
		for (var i = -220; i < 0; i += 20)
			rect(0, i * scale, (300 + i / 2 + this.width_value) * scale, 15 * scale);
		for (var i = 0; i < 220; i += 20)
			rect(0, i * scale, (300 - i / 2 + this.width_value) * scale, 15 * scale);


		// eyes
		
		fill(0);
		ellipse(this.eyeDistance * scale, -30 * scale, this.eye_value*scale, this.eye_value*scale);
		ellipse(-this.eyeDistance * scale, -30 * scale, this.eye_value * scale, this.eye_value * scale);


		//eyebrows
		fill(0);
		rotate(this.eyebrowsAngle);
		rect(this.eyeDistance * scale, -this.eyebrowsHeight * scale, this.eyeDistance * scale, 15 * scale);
		rotate(-this.eyebrowsAngle * 2);
		rect(-this.eyeDistance * scale, -this.eyebrowsHeight * scale, this.eyeDistance * scale, 15 * scale);
		rotate(this.eyebrowsAngle);

		//mouth
		ellipse(0, 100 * scale, this.mouth_value_W * scale, this.mouth_value_H * scale);

		//nose
		if (this.hasNose) triangle(0, 0, -3*scale, 8*scale, 3*scale, 8*scale);


		pop();
	}

	/*
	 * Draw a face with position lists that include:
	 *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
	 *    bottom_lip, top_lip, nose_tip, nose_bridge, 
	 */
	this.draw2 = function (positions) {
		var nose_pos = average_point(positions.nose_bridge);
		var eye1_pos = average_point(positions.left_eye);
		var eye2_pos = average_point(positions.right_eye);
		var half_height = positions.chin[7][1] - nose_pos[1];
		var face_width = positions.chin[positions.chin.length - 1][0] - positions.chin[0][0];

		var x = nose_pos[0];
		var y = nose_pos[1];
		var w = 2 * face_width;
		var h = 2.5 * half_height;

		var extent = 0;
		if (h < w) {
			extent = h / 2;
		} else {
			extent = w / 2;
		}
		var scale = extent / 220.0;

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
		ellipse(0, 0, 300 * scale, 400 * scale);
		noStroke();

		// mouth
		fill(this.bg_color);
		ellipse(0 * scale, 70 * scale, 150 * scale, this.mouth_value * scale);
		pop();

		noStroke();

		fill(this.bg_color);
		ellipse(eye1_pos[0], eye1_pos[1], 50 * scale, 30 * scale);
		ellipse(eye2_pos[0], eye2_pos[1], 50 * scale, 30 * scale);

		fill(this.fg_color);
		ellipse(eye1_pos[0], eye1_pos[1], 20 * scale, 20 * scale);
		ellipse(eye2_pos[0], eye2_pos[1], 20 * scale, 20 * scale);
	}

	/*
	 * Update internal state variables to a random state.
	 */
	this.randomize = function (values, size) {
		random(0,1) < 0.2 ? this.hasNose = false: this.hasNose = true;
	this.width_value = focusedRandom(0, 100, 3, 50);
	this.mouth_value_W = focusedRandom(30, 100, 3, 65);
	this.mouth_value_H = focusedRandom(20, 50, 3, 35);
	this.eye_value = focusedRandom(20, 40, 2, 35);
	this.eyebrowsHeight = focusedRandom(70, 130, 2, 100);
	this.eyebrowsAngle = focusedRandom(-15, 15, 1, 0);
	this.eyeDistance = map(this.width_value, 0, 100, 20, 80);
	}
}

// global functions can also be in this file below



// given a point, return the average
function average_point(list) {
	var sum_x = 0;
	var sum_y = 0;
	var num_points = 0;
	for (var i = 0; i < list.length; i++) {
		sum_x += list[i][0];
		sum_y += list[i][1];
		num_points += 1;
	}
	return [sum_x / num_points, sum_y / num_points];
}
