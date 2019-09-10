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

        this.winking = random();

        //mouth variables
        this.mouth_width = mouth_width;
        this.mouth_height = mouth_height;
        this.mouth_emotion = mouth_emotion;

        //extra variables
        this.eye_type = random(0, 100);
        this.glasses = random();
        this.coloured_eyes = random();
        this.eye_colour = color(random(0, 180), random(0, 180), random(0, 180));

        //freckles
        this.has_freckles = random();
        this.freckle_radius;
        this.freckle_angles = [];
        this.freckle_pos = [];
        this.freckle_num = 4;
    }

    show() {
        rectMode(CENTER);
        angleMode(DEGREES);
        translate(0, 0.5);

        this.head();
        this.eyes();
        this.mouth();

        //dirt();

        this.outline();

        if (this.has_freckles > 0.95) {
            freckles(this.eye_height, this.eye_spacing, this.eye_size, this.freckle_angles, this.freckle_pos, this.freckle_num, 1);
            freckles(this.eye_height, this.eye_spacing, this.eye_size, this.freckle_angles, this.freckle_pos, this.freckle_num, -1);
        }

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
        let colour = this.eye_colour;
        translate(0, -this.eye_height);
        if (this.eye_type > 80 && this.eye_type < 85) {
            heart_eyes(this.eye_spacing, this.eye_size, 1);
            heart_eyes(this.eye_spacing, this.eye_size, -1);
        } else if (this.eye_type > 85 && this.eye_type < 90) {
            closed_eye(this.eye_spacing, this.eye_size, 1, this.eye_angle);
            closed_eye(this.eye_spacing, this.eye_size, -1, this.eye_angle);
        } else if (this.eye_type > 90 && this.eye_type < 95) {
            cross_eye(this.eye_spacing, this.eye_size, 1, this.eye_angle);
            cross_eye(this.eye_spacing, this.eye_size, -1, this.eye_angle);
        } else if (this.eye_type >= 95) {
            classic_eye(this.eye_spacing, this.eye_size, 1);
            classic_eye(this.eye_spacing, this.eye_size, -1);
        } else {
            if (this.coloured_eyes <= 0.97) {
                colour = color(0, 0, 0);
            }

            if (this.winking > 0.98) {
                let rand = random();
                if (rand > 0.5) {
                    closed_eye(this.eye_spacing, this.eye_size, 1, this.eye_angle);

                    if (this.eye_wink < 0) {
                        wink = 0;
                    } else {
                        wink = this.eye_wink;
                    }
                    open_eye(this.eye_spacing, this.eye_size, -1, this.eye_angle, this.eye_squint, this.eyedetail_angle, wink, this.left_eye, colour);
                } else {
                    closed_eye(this.eye_spacing, this.eye_size, 1, this.eye_angle);

                    if (this.eye_wink < 0) {
                        wink = 0;
                    } else {
                        wink = this.eye_wink;
                    }
                    open_eye(this.eye_spacing, this.eye_size, -1, this.eye_angle, this.eye_squint, this.eyedetail_angle, wink, this.left_eye, colour);
                }
            } else {
                if (this.eye_wink > 0) {
                    wink = 0;
                } else {
                    wink = this.eye_wink;
                }
                open_eye(this.eye_spacing, this.eye_size, 1, this.eye_angle, this.eye_squint, this.eyedetail_angle, wink, this.right_eye, colour);

                if (this.eye_wink < 0) {
                    wink = 0;
                } else {
                    wink = this.eye_wink;
                }
                open_eye(this.eye_spacing, this.eye_size, -1, this.eye_angle, this.eye_squint, this.eyedetail_angle, wink, this.left_eye, colour);

                if (this.glasses > 0.97) {
                    glasses(this.eye_spacing, this.eye_size, 1);
                    glasses(this.eye_spacing, this.eye_size, -1);
                }
            }
        }
        pop();
    }

    mouth() {
        if (this.eye_type > 80 && this.eye_type < 85) {
            //heart eyes
            love_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion);
        } else if (this.eye_type > 85 && this.eye_type < 90) {
            //closed eyes
        } else if (this.eye_type > 90 && this.eye_type < 95) {
            //cross eyes
        } else if (this.eye_type >= 95) {
            //classic eyes
            classic_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion);
        } else {
            //open eyes
            open_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion);
        }
    }

    get_new_random() {
        this.has_freckles = random();
        this.freckle_radius = random(1, 1.5);
        this.freckle_angles = [];
        this.freckle_pos = [];
        for (let i = 0; i < this.freckle_num; i++) {
            let pos = random(0.5, this.freckle_radius);
            this.freckle_pos.push(pos);
            let angle = random((i - 1) * 360 / this.freckle_num, i * 360 / this.freckle_num);
            this.freckle_angles.push(angle);
        }

        this.eye_type = random(0, 100);
        this.glasses = random();
        this.coloured_eyes = random();
        this.eye_colour = color(random(0, 180), random(0, 180), random(0, 180));
        //hair_colour = lego_hair_colours[int(random(0, lego_hair_colours.length))];
    }

    outline() {
        translate(0, -0.5);
        let depth = 5;
        fill(255);
        noStroke();
        rect(0, 10 + depth / 2, 20, depth);
        rect(0, -10 - depth / 2, 20, depth);
        rect(10 + depth / 2, 0, depth, 20);
        rect(-10 - depth / 2, 0, depth, 20);
    }

    update_values(eye_spacing, eye_height, eye_size, eye_angle, eye_squint, eyedetail_angle, eye_wink, left_eye, right_eye, mouth_width, mouth_height, mouth_emotion) {

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
    }
}