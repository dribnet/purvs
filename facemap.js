/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */

// other variables can be in here too
// these control the colors used
bg_color = [50, 50, 50];
fg_color = [255, 255, 255];
stroke_color = [95, 52, 8];

function FaceMap() {
	/*
	 * Draw a face with position lists that include:
	 *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
	 *    bottom_lip, top_lip, nose_tip, nose_bridge, 
	 */
	this.draw = function (positions) {
			var nose_pos = average_point(positions.nose_bridge);
			var eye1_pos = average_point(positions.left_eye);
			var eye2_pos = average_point(positions.right_eye);
			var half_height = positions.chin[7][1] - nose_pos[1];
			var face_width = positions.chin[positions.chin.length - 1][0] - positions.chin[0][0];

			var x = nose_pos[0];
			var y = nose_pos[1];
			var w = 2 * face_width;
			var h = 2.5 * half_height;

			var curHairColor = map(this.hairColor, 0, 100, 200, 20);
			fill(curHairColor);
			var curHairLength = map(this.hairLength, 0, 100, 0, 3);
			rect(-3, -2 * curHairLength, 6, 3 * curHairLength);

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

			// head
			stroke(fg_color);
			noFill();

			var box = bounding_box(positions);
			strokeWeight(box[3] / 16);
			strokeCap(PROJECT);
			var centreX = positions.nose_bridge[0][0];
			for (var i = 0; i * box[2] / 8 < box[2]; i++) {
				line(positions.chin[i][0], positions.chin[i][1], positions.chin[positions.chin.length - 1 - i][0], positions.chin[positions.chin.length - 1 - i][1]);
			}
			var topPosL = min_point(positions.left_eyebrow);
			var topPosR = max_point(positions.right_eyebrow);


			line(topPosL[0], topPosL[1], topPosR[0], topPosR[1]);
			line((topPosL[0] + positions.chin[0][0]) / 2, (topPosL[1] + positions.chin[0][1]) / 2, (topPosR[0] + positions.chin[positions.chin.length - 1][0]) / 2, (topPosR[1] + positions.chin[positions.chin.length - 1][1]) / 2);
			strokeWeight(1);


			// mouth
			noStroke();
			fill(0);
			beginShape();
			for (var i = 0; i < positions.top_lip.length; i++) {
				vertex(positions.top_lip[i][0], positions.top_lip[i][1]);
			}
			endShape(CLOSE);
			beginShape();
			for (var i = 0; i < positions.bottom_lip.length; i++) {
				vertex(positions.bottom_lip[i][0], positions.bottom_lip[i][1]);
			}
			endShape(CLOSE);

			// nose
			fill(255, 0, 0);
			beginShape();
			vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
			for (var i = 0; i < positions.nose_tip.length; i++) {
				vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
			}
			endShape(CLOSE);

			// eyes
			fill(0);
			var maxHeightL = 0;
			var minHeightL = positions.left_eye[0][1];
			for (var i = 0; i < positions.left_eye.length; i++) {
				if (positions.left_eye[i][1] > maxHeightL) maxHeightL = positions.left_eye[i][1];
				if (positions.left_eye[i][1] < minHeightL) minHeightL = positions.left_eye[i][1];
			}
			var maxHeightR = 0;
			var minHeightR = positions.right_eye[0][1];
			for (var i = 0; i < positions.right_eye.length; i++) {
				if (positions.right_eye[i][1] > maxHeightR) maxHeightR = positions.right_eye[i][1];
				if (positions.right_eye[i][1] < minHeightR) minHeightR = positions.right_eye[i][1];
			}

			fill(0);
			ellipse(eye1_pos[0], eye1_pos[1], (maxHeightL - minHeightL) * 20 * scale, (maxHeightL - minHeightL) * 20 * scale);
			ellipse(eye2_pos[0], eye2_pos[1], (maxHeightR - minHeightR) * 20 * scale, (maxHeightR - minHeightR) * 20 * scale);

			fill(0);
			beginShape();
			for (var i = 0; i < positions.right_eyebrow.length; i++) {
				vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
			}
			endShape(CLOSE);

			beginShape();
			for (var i = 0; i < positions.left_eyebrow.length; i++) {
				vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
			}
			endShape(CLOSE);
		}
		/* set internal properties based on list numbers 0-100 */
	this.setProperties = function (settings) {
		this.hairLength = settings[0];
		this.hairColor = settings[1];
	}

	/* get internal properties as list of numbers 0-100 */
	this.getProperties = function () {
		properties = new Array(2);
		properties[0] = this.hairLength;
		properties[1] = this.hairColor;
		return properties;
	}
}

// given a point, return the averageW
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

function max_point(list) {
	var maxX = list[0][0];
	var maxY = list[0][1];
	for (var i = 0; i < list.length; i++) {
		if (list[i][0] > maxX) maxX = list[i][0];
		if (list[i][1] < maxY) maxY = list[i][1];
	}
	return [maxX, maxY];
}

function min_point(list) {
	var minX = list[0][0];
	var minY = list[0][1];
	for (var i = 0; i < list.length; i++) {
		if (list[i][0] < minX) minX = list[i][0];
		if (list[i][1] < minY) minY = list[i][1];
	}
	return [minX, minY];
}

function bounding_box(positions) {
	var xmin = null,
		xmax = null,
		ymin = null,
		ymax = null;
	for (var key in positions) {
		var part = positions[key];
		for (var i = 0; i < part.length; i++) {
			if (xmin == null || xmin < part[i][0]) {
				xmin = part[i][0];
			}
			if (ymin == null || ymin < part[i][1]) {
				ymin = part[i][1];
			}
			if (xmax == null || xmax > part[i][0]) {
				xmax = part[i][0];
			}
			if (ymax == null || ymax > part[i][1]) {
				ymax = part[i][1];
			}
		}
	}

	// return [x1, y1, x2, y2];
	return [xmax, ymax, xmin - xmax, ymin - ymax];
}
