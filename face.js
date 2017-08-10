/*
 * Face class - holds all informaiton about one face
 */
function Face() {


    this.varGen = function() { //determine face parameters

        this.tilt_value = focusedRandom(-30, 30, 3, 1);
        this.ear_value = focusedRandom(0.6, 1.4, 2, 0.95);
        this.smile_value = focusedRandom(-0.5, 2.5);

        if (this.smile_value < 1) {
            this.eye_value = focusedRandom(0.8, 1.2, 2, 1.1);
            //console.log(this.eye_value);
        } else {

            this.eye_value = focusedRandom(0.8, 1.2, 2, 0.9);
            //console.log(this.eye_value);
        }
        this.wrinkle_value = focusedRandom(0, 1);
        this.spots_value = focusedRandom(0, 4, 4, 2);
    }

    this.bg_color = [183, 214, 182];
    this.fg_color = [151, 102, 52];
    this.stroke_color = [95, 52, 8];
    this.spot_color = "#c18672";
    this.skin_tone = "#ffe3d8";
    this.blush_color = "#f9ab90";
    this.spot_color = "#c18672";


    this.draw1 = function(x, y, w, h) {
        // Uncomment to see drawing area
        // fill(255);
        // stroke(0);
        // rect(x - w / 2, y - h / 2, w, h);
        // fill(0)
        // ellipse(x, y, w, h);

        //OLDMAN
        push();

        translate(x, y);
        rotate(this.tilt_value);
        scale(w / 210, w / 210);
        this.shadow_color = editAlpha(this.blush_color, 0.65);

        fill(this.skin_tone);
        ellipse(0, 0, 165, 185); // face

        fill(this.shadow_color);
        ellipse(0, 77, 30, 20); // lower wrinkle_value line (upper shin shadow)
        fill(this.skin_tone);
        ellipse(0, 77, 32, 18); // mask for lower wrinkle_value line

        ellipse(-10, 84, 25, 25); // butt chin left
        ellipse(10, 84, 25, 25); //butt chin right

        //hair
        fill(215 + 20 * this.spots_value);
        push();
        translate(-63, -40);
        rotate(23);
        ellipse(0, 0, 35, 60); //hair left
        pop();
        push();
        translate(63, -40);
        rotate(-23);
        ellipse(0, 0, 35, 60); // hair right
        pop();

        //mouth 
        noFill();
        stroke(this.blush_color);
        strokeWeight(2 + 1.2 * (Math.abs(this.smile_value - 1))); //scale stroke to this.smile amount, between 2pt and 4pt
        curve(-40, 50 * this.smile_value, -20, 50, 20, 50, 40, 50 * this.smile_value); //curve(cpx1, cpy1, x1, y1, x2, y2, cpx2, cpy2);
        strokeWeight(3);

        //eyes (glasses)
        noStroke();
        fill(255, 180);
        ellipse(-24, 7 , 26 * this.eye_value, 28 * this.eye_value); //lens L Highlight
        ellipse(24, 7 , 26 * this.eye_value, 28 * this.eye_value); //lens R Highlight
        stroke(180);
        fill(255, 80);
        ellipse(-25, 5, 35 * this.eye_value, 35 * this.eye_value); //lens L
        ellipse(25, 5, 35 * this.eye_value, 35 * this.eye_value); //lens R
        curve(-15, 20, -7.5 * ampLify(this.eye_value, -2), 2, 7.5 * ampLify(this.eye_value, -2), 2, 15, 20); //bridge
        line(42 * ampLify(this.eye_value, 0.35), -2 * ampLify(this.eye_value, 0.35), 70, -12); //glasses leg R
        line(-42 * ampLify(this.eye_value, 0.35), -2 * ampLify(this.eye_value, 0.35), -70, -12); //glasses leg L
        noStroke();

        //ears
        push()
        translate(-65 - this.ear_value * 20, 0);
        scale(this.ear_value, this.ear_value);
        fill(this.shadow_color);
        ellipse(1, 2, 26, 49); //ear shadow left
        fill(this.skin_tone);
        ellipse(-0, 0, 30, 50); //ear left
        fill(this.shadow_color);
        ellipse(-2, 0, 12, 18); //inner ear shadow left
        fill(this.skin_tone);
        noStroke();
        ellipse(4, 2, 10, 10); //inner shadow mask left
        pop();

        push();
        translate(65 + this.ear_value * 20, 0)
        scale(this.ear_value, this.ear_value);
        fill(this.shadow_color);
        ellipse(-1, 2, 26, 49); //ear shadow right
        fill(this.skin_tone);
        ellipse(0, 0, 30, 50); //ear right

        fill(this.shadow_color);
        ellipse(2, 0, 12, 18); // inner ear shadow right
        fill(this.skin_tone);
        noStroke();
        ellipse(-4, 2, 10, 10); // inner shadow mask right
        pop();

        //wrinkle_value lines
        var wrinkle_color_value = editAlpha(this.blush_color, this.wrinkle_value);
        stroke(wrinkle_color_value);
        strokeWeight(2);
        curve(45, -70, 25, -50, -25, -50, -45, -70);
        curve(45, -50, 15, -43, -15, -43, -45, -50);
        curve(45, -25, 25, -35, -25, -35, -45, -25);

        //liver spots
        push();
        var spot_color_value;
        spot_color_value = editAlpha(this.spot_color, this.spots_value / 5 + 0.25);
        if (Math.floor(this.spots_value > 1)) {
            fill(spot_color_value);
            translate(23, -63);
            ellipse(0, 0, 4, 4);
        }
        if (Math.floor(this.spots_value > 2)) {
            fill(spot_color_value);
            translate(-3, -8);
            rotate(-45);
            ellipse(0, 0, 8, 6);
        }
        if (Math.floor(this.spots_value > 3)) {
            fill(spot_color_value);
            translate(12, 3);
            rotate(52);
            ellipse(0, 0, 10, 7);
        }
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
    this.randomize = function() {
        this.varGen();
        // this.eye_value = getRandomNumberOfthis.Eye_value();
        // this.tilt_value = focusedRandom(-70, 90, 8);
        // this.mouth_value = focusedRandom(0, 50, 4, 1);
    }
}

// global functions can also be in this file below

function getRandomNumberOfeyes() {
    random_result = focusedRandom(0, 100);
    if (random_result < 8) {
        return 1;
    } else if (random_result < 12) {
        return 3;
    } else {
        return 2;
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

editAlpha = function(col, ampChange) {
    //input color stored as hex code String
    //return p5 color object feat. updated alpha
    var v = color(col);
    v._array[3] = val;
    return v;
}
ampLify = function(inp, ampChange) {
    // used to change parameter values relative to their deviation from 1 (amplitude) 
    var v = (inp - 1) * ampChange;
    v += 1;
    return v;
}