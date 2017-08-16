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
    this.draw = function(positions) {

        var skin_tone = "#ffe3d8";

        var nose_pos = average_point(positions.nose_bridge);
        var eye1_pos = average_point(positions.left_eye);
        var eye2_pos = average_point(positions.right_eye);
        var half_height = positions.chin[7][1] - nose_pos[1];
        var face_width = positions.chin[positions.chin.length - 1][0] - positions.chin[0][0];

        //mine
        var chin_R = positions.chin[positions.chin.length - 1];
        var chin_L = positions.chin[0];
        var chin_center = positions.chin[8];
        var eyecorner_L = positions.left_eye[0];
        var eyecorner_R = positions.right_eye[3];

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

        //head
        var foreheadcenterX = (chin_L[0] + chin_R[0]) / 2;
        var foreheadcenterY = (chin_L[1] + chin_R[1]) / 2;

        push();
        noFill();
        stroke('red');
        fill(skin_tone);
        strokeWeight(0.1);

        //head outline
        beginShape();
        curveVertex(-1.5, -2);

        curveVertex(chin_L[0], chin_L[1]);
        curveVertex(positions.chin[2][0], positions.chin[2][1]);
        curveVertex(positions.chin[4][0], positions.chin[4][1]);
        curveVertex(positions.chin[6][0], positions.chin[6][1]);
        curveVertex(chin_center[0], chin_center[1]);
        curveVertex(positions.chin[10][0], positions.chin[10][1]);
        curveVertex(positions.chin[12][0], positions.chin[12][1]);
        curveVertex(positions.chin[14][0], positions.chin[14][1]);
        curveVertex(chin_R[0], chin_R[1]);
        //forehead
        curveVertex(chin_R[0] - 0.5, chin_R[1] - 1.25);
        curveVertex(foreheadcenterX, foreheadcenterY - 1.8);
        curveVertex(chin_L[0] + 0.5, chin_L[1] - 1.25);
        //close
        curveVertex(chin_L[0], chin_L[1]);
        curveVertex(positions.chin[1][0], positions.chin[1][1]);
        endShape();
        pop();

        //toms_face();

        //eyes
        var l_lens_size;
        var r_lens_size;
        //average distance from each outer point to "eye_pos" center
        for (var i = 0; i < positions.left_eye.length; i++) {
            l_lens_size = distanceBetween(positions.left_eye[i], eye1_pos);
            r_lens_size = distanceBetween(positions.right_eye[i], eye2_pos);
        }

        l_lens_size /= positions.left_eye.length;
        r_lens_size /= positions.right_eye.length;
        l_lens_size = 0.4 + l_lens_size * 30;
        r_lens_size = 0.4 + r_lens_size * 30;
        push();
        fill(255, 0.6);
        strokeWeight(0.1);
        stroke('red');

        ellipse(eye1_pos[0], eye1_pos[1], l_lens_size, l_lens_size);
        ellipse(eye2_pos[0], eye2_pos[1], r_lens_size, r_lens_size);

        //glasses legs (called 'temples')
        var temple_connect_angle = -TWO_PI / 32;
        var temple_connect_l = rim_vert(eye1_pos, l_lens_size / 2, PI - temple_connect_angle);
        var temple_connect_r = rim_vert(eye2_pos, r_lens_size / 2, temple_connect_angle);


        noFill();

        var bridge_control_offset = distanceBetween(eye1_pos, eye2_pos) - (l_lens_size / 2) - (r_lens_size / 2);
        //bridge_control_offset *= 0.5;

        beginShape();
        curveVertex(positions.nose_bridge[3][0] * -0.30, (positions.nose_bridge[3][1] + bridge_control_offset) / 2);

        curveVertex(eye1_pos[0] + (l_lens_size / 2), eye1_pos[1]);
        curveVertex(eye2_pos[0] - (r_lens_size / 2), eye2_pos[1]);

        curveVertex(positions.nose_bridge[3][0] * -0.30, (positions.nose_bridge[3][1] + bridge_control_offset) / 2);
        endShape();

        if (temple_connect_l[0] > chin_L[0]) {
            line(chin_L[0], chin_L[1], temple_connect_l[0], temple_connect_l[1]);
        }
        if (temple_connect_r[0] < chin_R[0]) {
            line(chin_R[0], chin_R[1], temple_connect_r[0], temple_connect_r[1]);
        }

        //brows 
        var brow_outer_l = positions.left_eyebrow[0];
        var brow_inner_l = positions.left_eyebrow[4];
        var brow_upper_l = positions.left_eyebrow[2];
        var brow_outer_r = positions.right_eyebrow[4]
        var brow_inner_r = positions.right_eyebrow[0];
        var brow_upper_r = positions.right_eyebrow[2];

        var brow_height_left  = (distanceBetween(brow_outer_l, brow_upper_l) + distanceBetween(brow_inner_l, brow_upper_l)) / 4;
        var brow_height_right = (distanceBetween(brow_outer_r, brow_upper_r) + distanceBetween(brow_inner_r, brow_upper_r)) / 4;
        var brow_width_right  = distanceBetween(brow_outer_r, brow_inner_r)*0.7;
        var brow_width_left   = distanceBetween(brow_outer_l, brow_inner_l)*0.7;

        push();
        //left brow
        translate(brow_upper_l[0], brow_upper_l[1]);
        rotate(angleBetween(brow_inner_l, brow_outer_l));
        ellipse(0, brow_height_left/4, brow_width_left, brow_height_left);
        pop();

        console.log(brow_height_left);

        push();
        //right brow
        translate(brow_upper_r[0], brow_upper_r[1]);
        rotate(angleBetween(brow_outer_r,brow_inner_r));
        ellipse(0, brow_height_right/4, brow_width_right, brow_height_left);
        pop();

        console.log(brow_height_right);

        //debug
        fill('blue');
        noStroke();

        //console.log(positions);
        function toms_face() {

            // head
            stroke(stroke_color);
            fill(fg_color);
            beginShape();
            for (var i = 0; i < positions.chin.length; i++) {
                vertex(positions.chin[i][0], positions.chin[i][1]);
            }
            for (var i = positions.right_eyebrow.length - 1; i >= 0; i--) {
                vertex(positions.right_eyebrow[i][0], positions.right_eyebrow[i][1]);
            }
            for (var i = positions.left_eyebrow.length - 1; i >= 0; i--) {
                vertex(positions.left_eyebrow[i][0], positions.left_eyebrow[i][1]);
            }
            endShape(CLOSE);

            // mouth
            noStroke();
            fill(bg_color);
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
            beginShape();
            vertex(positions.nose_bridge[0][0], positions.nose_bridge[0][1]);
            for (var i = 0; i < positions.nose_tip.length; i++) {
                vertex(positions.nose_tip[i][0], positions.nose_tip[i][1]);
            }
            endShape(CLOSE);

            // eyes
            beginShape();
            for (var i = 0; i < positions.left_eye.length; i++) {
                vertex(positions.left_eye[i][0], positions.left_eye[i][1]);
            }
            endShape(CLOSE);
            beginShape();
            for (var i = 0; i < positions.right_eye.length; i++) {
                vertex(positions.right_eye[i][0], positions.right_eye[i][1]);
            }
            endShape(CLOSE);

            fill(fg_color);
            ellipse(eye1_pos[0], eye1_pos[1], 16 * scale, 16 * scale);
            ellipse(eye2_pos[0], eye2_pos[1], 16 * scale, 16 * scale);

            fill(stroke_color);
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
            strokeWeight(1);
        }
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
    for (var i = 0; i < list.length; i++) {
        sum_x += list[i][0];
        sum_y += list[i][1];
        num_points += 1;
    }
    return [sum_x / num_points, sum_y / num_points];
}

function rim_vert(vert, rad, angl) { //find the co-oridnates for a point on a circle
    var x = Math.cos(angl) * rad;
    var y = Math.sin(angl) * rad;

    return [x + vert[0], y + vert[1]];
}

function angleBetween(p1, p2) {
    //angle given with reference to horizon line 
    var c;
    c = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) * 180 / Math.PI;
    return c;
}

function distanceBetween(p1, p2) {
    var a = p1[0] - p2[0];
    var b = p1[1] - p2[1];
    var c = Math.abs(Math.sqrt(a * a + b * b));
    return c;
}