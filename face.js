class Face {
    constructor(eye_spacing, eye_height, eye_size, eye_angle, eye_squint, eyedetail_angle, eye_wink, left_eye, right_eye, mouth_width, mouth_height, mouth_emotion) {
        //position variables
        this.x;
        this.y;

        //size variables
        this.x_percentage = 1;
        this.y_percentage = 1;

        //eye variables
        this.eye_spacing = eye_spacing;
        this.eye_height = eye_height;
        this.eye_size = eye_size;
        this.eye_angle = eye_angle;
        this.eye_squint = eye_squint;
        this.eyedetail_angle = eyedetail_angle;
        this.eye_wink = eye_wink;
        this.left_eye = left_eye;
        this.right_eye = right_eye;

        //mouth variables
        this.mouth_width = mouth_width;
        this.mouth_height = mouth_height;
        this.mouth_emotion = mouth_emotion;

        //extra variables
        this.eye_type = random(0, 100);
        this.glasses = random();
    }

    show() {
        rectMode(CENTER);
        angleMode(DEGREES);
        translate(0, 0.5);

        this.head();
        this.eyes();
        this.mouth();

        //light reflection
        push();
        noFill();
        strokeWeight(1);
        stroke(highlight_colour);
        arc(-4, -4.5, 2 * this.x_percentage, 2 * this.y_percentage, 180, 270);
        pop();
    }

    head() {
        push();
        noStroke();

        //fill core colour
        fill(core_colour);

        rect(0, 0, 17 * this.x_percentage, 14 * this.y_percentage, 2.5); //core
        rect(0, 8, 10 * this.x_percentage, 2 * this.y_percentage); // bottom
        rect(0, -8.5, 7 * this.x_percentage, 3 * this.y_percentage, 0.5, 0.5, 0, 0); // top

        //fill highlight
        fill(light_colour);
        rect(0, 0, 17 * 0.8 * this.x_percentage, 14 * this.y_percentage, 2.5); //core
        rect(0, 8, 10 * 0.8 * this.x_percentage, 2 * this.y_percentage); // bottom
        rect(0, -8.5, 7 * 0.64 * this.x_percentage, 3 * this.y_percentage, 0.5, 0.5, 0, 0); // top

        //fill shadow
        fill(shadow_colour);
        rect(0, 7.5 * this.x_percentage, 10 * this.y_percentage, 1);

        pop();
    }

    eyes() {
        push();
        noStroke();
        let wink = 0;
        //sets eye level
        translate(0, -this.eye_height);
        if (this.eye_type > 90 && this.eye_type < 95) {
            classic_eye(this.eye_spacing, this.eye_size, 1);
            classic_eye(this.eye_spacing, this.eye_size, -1);
        } else if (this.eye_type >= 95) {
            classic_eye(this.eye_spacing, this.eye_size, 1);
            classic_eye(this.eye_spacing, this.eye_size, -1);
        } else {

            if (this.eye_wink < 0) {
                wink = 0;
            } else {
                wink = this.eye_wink;
            }
            open_eye(this.eye_spacing, this.eye_size, 1, this.eye_angle, this.eye_squint, this.eyedetail_angle, wink, this.right_eye);

            if (this.eye_wink < 0) {
                wink = 0;
            } else {
                wink = this.eye_wink;
            }
            open_eye(this.eye_spacing, this.eye_size, -1, this.eye_angle, this.eye_squint, this.eyedetail_angle, wink, this.left_eye);

            if (this.glasses > 0.97) {
                glasses(this.eye_spacing, this.eye_size, 1);
                glasses(this.eye_spacing, this.eye_size, -1);
            }
        }
        pop();
    }

    mouth() {
        mouth_core(this.mouth_width, this.mouth_height, this.mouth_emotion);
    }
}