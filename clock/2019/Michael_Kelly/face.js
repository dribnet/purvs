class Face {
    constructor(eye_spacing, eye_height, eye_size, eye_angle, eye_squint, eyedetail_angle, eye_wink, left_eye, right_eye, mouth_width, mouth_height, mouth_emotion, face_pos) {
        //position variables
        this.x = 0;
        this.y;

        this.lastSwapTime = 0;
        this.nextSwapTime = random(5000, 15000);
        this.is_animating = false;

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
        this.mouth_direction = (int(random(0, 2)) * 2) - 1;

        //extra variables
        this.is_crying = focusedRandom(0, 1, 1, 0.5);
        this.eye_type = focusedRandom(0, 100, 2, 75);
        this.mouth_type = focusedRandom(0, 1, 2, 50);
        this.glasses = focusedRandom(0, 1, 3);
        this.coloured_eyes = focusedRandom(0, 1);
        this.eye_colour = color(random(0, 180), random(0, 180), random(0, 180));
        this.hair_colour = lego_hair_colours[int(focusedRandom(0, lego_hair_colours.length - 1, 4))];

        //freckles
        this.has_freckles = focusedRandom(0, 1, 2);
        this.freckle_radius;
        this.freckle_angles = [];
        this.freckle_pos = [];
        this.freckle_num = 4;
    }

    show() {
        rectMode(CENTER);
        angleMode(DEGREES);
        translate(0, 0.5);
        push();
        this.shadow();
        this.head();
        translate(this.x, 0);
        //scale(map(abs(this.x), 1, 14, 1, 0.2), 1);

        this.eyes();
        this.mouth();

        if (this.has_freckles > 0.75) {
            freckles(this.eye_height, this.eye_spacing, this.eye_size, this.freckle_angles, this.freckle_pos, this.freckle_num, 1);
            freckles(this.eye_height, this.eye_spacing, this.eye_size, this.freckle_angles, this.freckle_pos, this.freckle_num, -1);
        }

        if (this.is_crying > 0.95) {
            tears(this.eye_height, this.eye_spacing, this.eye_size, this.freckle_angles, this.freckle_pos, this.freckle_num, 1);
            tears(this.eye_height, this.eye_spacing, this.eye_size, this.freckle_angles, this.freckle_pos, this.freckle_num, -1);
        }
        pop();

        this.outline();

        //light reflection
        push();
        noFill();
        strokeWeight(1);
        stroke(highlight_colour);
        arc(-4, -3.5, 2 * this.x_percentage, 2 * this.y_percentage, 180, 270);
        pop();

        if (millis() > this.lastSwapTime + this.nextSwapTime) {
            this.is_animating = true;
        }
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
            classic_eye(this.eye_spacing, 1.2 * (this.eye_size / 2), 1);
            classic_eye(this.eye_spacing, 1.2 * (this.eye_size / 2), -1);
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
                open_eye(this.eye_spacing, this.eye_size, 1, this.eye_angle, this.eye_squint, this.eyedetail_angle, wink, this.right_eye, colour, this.hair_colour);

                if (this.eye_wink < 0) {
                    wink = 0;
                } else {
                    wink = this.eye_wink;
                }
                open_eye(this.eye_spacing, this.eye_size, -1, this.eye_angle, this.eye_squint, this.eyedetail_angle, wink, this.left_eye, colour, this.hair_colour);

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
            if (this.mouth_type >= 0.65) {
                open_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion);
            } else {
                line_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion, this.mouth_direction);
            }
        } else if (this.eye_type > 85 && this.eye_type < 90) {
            //closed eyes
            if (this.mouth_type >= 0.65) {
                open_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion);
            } else {
                line_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion, this.mouth_direction);
            }
        } else if (this.eye_type > 90 && this.eye_type < 95) {
            //cross eyes
            open_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion);
        } else if (this.eye_type >= 95) {
            //classic eyes
            classic_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion);
        } else {
            //open eyes
            if (this.mouth_type >= 0.65) {
                open_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion);
            } else {
                line_mouth(this.mouth_width, this.mouth_height, this.mouth_emotion, this.mouth_direction);
            }
        }
    }

    get_new_random() {
        this.has_freckles = focusedRandom(0, 1, 2);
        this.freckle_radius = random(1, 1.5);
        this.freckle_angles = [];
        this.freckle_pos = [];
        for (let i = 0; i < this.freckle_num; i++) {
            let pos = random(0.5, this.freckle_radius);
            this.freckle_pos.push(pos);
            let angle = random((i - 1) * 360 / this.freckle_num, i * 360 / this.freckle_num);
            this.freckle_angles.push(angle);
        }
        this.winking = random();
        this.is_crying = focusedRandom(0, 1, 1, 0.5);
        this.eye_type = focusedRandom(0, 100, 2, 75);
        this.mouth_type = focusedRandom(0, 1, 2, 50);
        this.glasses = focusedRandom(0, 1, 3);
        this.coloured_eyes = focusedRandom(0, 1);
        this.eye_colour = color(random(0, 180), random(0, 180), random(0, 180));
        this.hair_colour = lego_hair_colours[int(focusedRandom(0, lego_hair_colours.length - 1, 4))];
    }

    outline() {
        translate(0, -0.5);
        let depth = 11;
        fill('#D8F0F0');
        noStroke();
        rect(17 / 2 + depth / 2, 0, depth, 20);
        rect(-17 / 2 - depth / 2, 0, depth, 20);
    }

    update_values(eye_spacing, eye_height, eye_size, eye_angle, eye_squint, eyedetail_angle, eye_wink, left_eye, right_eye, mouth_width, mouth_height, mouth_emotion, face_pos) {
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

        this.x = face_pos;
    }

    new_face() {
        this.eye_spacing = focusedRandom(4.5, 8, 2);
        this.eye_height = focusedRandom(0, 2.2, 2);
        this.eye_size = focusedRandom(1.8, 3, 1);
        this.eye_angle = focusedRandom(-25, 25, 1);
        this.eye_squint = focusedRandom(1.3, 1.9, 1);
        this.eyedetail_angle = focusedRandom(-15, 15, 1);
        this.eye_wink = focusedRandom(-1, 1, 1);
        this.left_eye_seed = focusedRandom(0, 100, 3, 75);
        this.right_eye_seed = focusedRandom(0, 100, 3, 75);

        this.mouth_width = focusedRandom(2, 4, 1);
        this.mouth_height = focusedRandom(1, 3, 3);
        this.mouth_emotion = focusedRandom(-2, 2, 2);
        this.get_new_random();
    }

    animate() {
        if (this.is_animating == true) {
            this.x = this.x + 1;
            if (this.x >= 14) {
                curRandomSeed = curRandomSeed + 1;
                this.new_face();
                this.x = -14;
            }

            if (this.x == 0) {
                this.is_animating = false;
                this.lastSwapTime = millis();
                this.nextSwapTime = random(5000, 15000);
            }
        }
    }

    shadow() {
        push();
        noStroke();
        translate(0, 1);
        fill(0, 100);
        rect(0, 0, 17 * this.x_percentage, 14 * this.y_percentage, 2.5); //core
        rect(0, 8, 10 * this.x_percentage, 2 * this.y_percentage); // bottom
        rect(0, -8.5, 7 * this.x_percentage, 3 * this.y_percentage, 0.5, 0.5, 0, 0); // top
        pop();
    }
}