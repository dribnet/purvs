var canvasWidth = 960;
var canvasHeight = 500;
var curRandomSeed;

var lastSwapTime = 0;
var millisPerSwap = 5000;

// global variables for colors

var bg_color1 = "pink";

var ch3_bodyPrimary = "#cccccc";
var ch3_bodySecondary = "#808080";
var ch3_detailPrimary = "#000000";
var ch3_detailSecondary = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);

  curRandomSeed = int(focusedRandom(0, 100));

  // draw strokes with rounded joints  
  strokeJoin(ROUND);
    
  // draw rectangles from centre
  rectMode(CENTER);
    
  // rotation in degrees
  angleMode(DEGREES);
}

// function to change seed
function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// performs seed change function when mouse is clicked
function mouseClicked() {
  changeRandomSeed();
}

// draw function for the character face
function drawFace1(x, y, w, h, ear_length, eye_value, look_direction, teeth_value, orientation_value, pupil_size, eyelidBottom_height, eyelidTop_height, eyebrow_height, eyeFront_PosX, eyeFront_PosY, eyeMiddle_PosX, eyeMiddle_PosY, eyeBack_PosX, eyeBack_PosY, face_select, y_offset) {
  push();
  rectMode(CENTER);
  // sets scale
  var scale = 0.25;
  // variable for character shadow
  var shadow_scale = map(y_offset, -5, 5, 200, 300);

    // checks orientation of character and sets translation accordingly
    // if character vertical
    if (orientation_value == 2) {
  translate(x - 15, y + 3 + y_offset);
    
    noStroke();
    fill(ch3_detailPrimary);
    push();
    translate(0, -y_offset);
    // draw shadow
    ellipse(45 * scale, 250 * scale, shadow_scale * scale, 30 * scale);
    pop();
    } 
    // if character horizontal
    else {
    translate(x, y + 10 + y_offset);
    
    noStroke();
    fill(ch3_detailPrimary);
    push();
    translate(0, -y_offset);
    // draw shadow
    ellipse(-10 * scale, 220 * scale, (shadow_scale + 100) * scale, 30 * scale);
    pop();
    }

    // if face style is not bird style draw back ear
    if (face_select != 1) {
    // ear (back)
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
    fill(ch3_bodyPrimary);
    rect(50 * scale, -150 * scale, 50 * scale, ear_length * scale, 100 * scale, 100 * scale, 0, 0);
    }
    
  // draw eye (back)
  // check number of eyes
    if (eye_value === 2 || eye_value == 3) {
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse( eyeBack_PosX * scale, eyeBack_PosY * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc((eyeBack_PosX + look_direction) * scale, eyeBack_PosY * scale, (30 * pupil_size) * scale, (50 * pupil_size) * scale, 20, 340, PIE);
        // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(ch3_bodySecondary);
    // top eyelid
    arc( eyeBack_PosX * scale, eyeBack_PosY * scale, 80 * scale, 80 * scale, 265 - eyelidTop_height, 275 + eyelidTop_height, CHORD);
    // bottom eyelid
    arc( eyeBack_PosX * scale, eyeBack_PosY * scale, 80 * scale, 80 * scale, 85 - eyelidBottom_height, 95 + eyelidBottom_height, CHORD);
    // eyebrow
  stroke(ch3_detailPrimary)
    noFill();
    arc((eyeBack_PosX + 5) * scale, (eyeBack_PosY + eyebrow_height) * scale, 130 * scale, 110 * scale, 210, 270);
    }

    // draw face
    // checks orientation
    // if horizontal
    if (orientation_value == 1) {
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(ch3_bodyPrimary);
  rect(20 * scale, 0 * scale, 350 * scale, 300 * scale, 0, 200 * scale, 200 * scale, 0);
    
    // draw dissection
    fill(ch3_bodySecondary);
    ellipse(-160 * scale, 0, 80 * scale, 300 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(-160 * scale, 0, 30 * scale, 150 * scale);
    } 
    // if vertical
    else {
  stroke(ch3_detailPrimary)
  strokeWeight(10 * scale);
  fill(ch3_bodyPrimary);
  rect(45 * scale, 0 * scale, 300 * scale, 320 * scale, 200 * scale, 200 * scale, 0, 0);
    
    // draw dissection
    fill(ch3_bodySecondary);
    ellipse(45 * scale, 160 * scale, 300 * scale, 80 * scale);
    // draw bone
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse(45 * scale, 160 * scale, 150 * scale, 30 * scale);
    
    }
    
    // checks face style
    // if bird
    if (face_select == 1) {
        
            // draw beak
          stroke(ch3_detailPrimary)
          strokeWeight(7 * scale);
            fill(ch3_bodySecondary);
            arc(285 * scale, 0 * scale, 250 * scale, 150 * scale, 155, 205, PIE);

          // draw mouth
          stroke(ch3_detailPrimary);
          strokeWeight(7 * scale);
          line(280 * scale, 0 * scale, 200 * scale, 0 * scale);
          stroke(ch3_detailPrimary)
          strokeWeight(7 * scale);
            noFill();
            arc(175 * scale, 0 * scale, 50 * scale, 50 * scale, 320, 390);
        
        // teeth
          stroke(ch3_detailPrimary)
          strokeWeight(7 * scale);
          fill(ch3_detailSecondary);
          // check teeth value
        if (teeth_value == 3 || teeth_value == 4 || teeth_value == 7 || teeth_value == 8) {
          arc(220 * scale, 0 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
        } if (teeth_value == 5 || teeth_value == 6 || teeth_value == 7 || teeth_value == 8) {
          arc(240 * scale, 0 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
        } if (teeth_value == 1 || teeth_value == 2) {
        }
        
    } 
    // if dog
    else if (face_select == 2) {
        
                // draw snout
          stroke(ch3_detailPrimary)
          strokeWeight(10 * scale);
          fill(ch3_bodyPrimary);
            // top snout
            rectMode(CORNER);
          rect(150 * scale, -50 * scale, 140 * scale, 45 * scale, 0, 18 * scale, 18 * scale, 0);

            // re-fill / cover
            if (orientation_value == 1) {
            noStroke();
            fill(ch3_bodyPrimary);
            arc(47 * scale, 0 * scale, 290 * scale, 290 * scale, 270, 450);
            } else {
            noStroke();
            fill(ch3_bodyPrimary);
            arc(45 * scale, -10 * scale, 290 * scale, 290 * scale, 180, 360);
            }

          stroke(ch3_detailPrimary)
          strokeWeight(10 * scale);
          fill(ch3_bodyPrimary);
           // bottom snout
          rect(150 * scale, -5 * scale, 110 * scale, 35 * scale, 0, 14 * scale, 14 * scale, 0);

            noStroke();
            fill(ch3_bodyPrimary);
            // re-fill / cover
            rect(110 * scale, -12 * scale, 60 * scale, 60 * scale);

            // draw nose
            noStroke();
            fill(ch3_detailPrimary);
            push();
            rotate(-10);
            ellipse(285 * scale, -5 * scale, 40 * scale, 28 * scale);
            pop();

          // mouth
          stroke(ch3_detailPrimary)
          strokeWeight(7 * scale);
            noFill();
            arc(145 * scale, 0 * scale, 50 * scale, 50 * scale, 320, 390);
        
        // teeth
          stroke(ch3_detailPrimary)
          strokeWeight(7 * scale);
          fill(ch3_detailSecondary);
          // check teeth value
          if (teeth_value == 2 || teeth_value == 5 || teeth_value == 6 || teeth_value == 8) {
          arc(190 * scale, -5 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
          } 
          if (teeth_value == 3 || teeth_value == 5 || teeth_value == 7 || teeth_value == 8) {
          arc(210 * scale, -5 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
          } 
          if (teeth_value == 4 || teeth_value == 6 || teeth_value == 7 || teeth_value == 8) {
          arc(230 * scale, -5 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
          } 
          if (teeth_value == 1) {
          }
        
    
    } 
    // if rabbit / bear
    else {
    
            // draw mouth
          stroke(ch3_detailPrimary);
          strokeWeight(7 * scale);
          line(115 * scale, 20 * scale, 175 * scale, 20 * scale);
          stroke(ch3_detailPrimary)
          strokeWeight(7 * scale);
            noFill();
            arc(90 * scale, 25 * scale, 50 * scale, 50 * scale, 320, 390);
        
        // teeth
          stroke(ch3_detailPrimary)
          strokeWeight(7 * scale);
          fill(ch3_detailSecondary);
          // check teeth value
        if (teeth_value == 3 || teeth_value == 4 || teeth_value == 7 || teeth_value == 8) {
          arc(135 * scale, 20 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);
        } if (teeth_value == 5 || teeth_value == 6 || teeth_value == 7 || teeth_value == 8) {
          arc(155 * scale, 20 * scale, 20 * scale, 40 * scale, 0, 180, CHORD);   
        } if (teeth_value == 1) {
            
        }
        
        // draw nose
        noStroke();
        fill(ch3_detailPrimary);
        push();
        rotate(-10);
        ellipse(200 * scale, 0 * scale, 50 * scale, 35 * scale);
         pop();
        }
    
    // if not bird draw front ear
    if (face_select != 1) {

            // ear (front)
          stroke(ch3_detailPrimary)
          strokeWeight(10 * scale);
            fill(ch3_bodyPrimary);

            rectMode(CENTER);
            // ear
            rect(0 * scale, -150 * scale, 50 * scale, ear_length * scale, 100 * scale, 100 * scale, 0, 0);
            noStroke();
            fill(ch3_bodyPrimary);
            rectMode(CORNER);
            //cover
            rect(-36 * scale, -115 * scale, 70 * scale, ((ear_length / 2 + 2)) * scale);
        
    }
    
    // draw eye middle
    // check eye value
    if (eye_value === 1 || eye_value == 3) {
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    fill(ch3_detailSecondary);
    ellipse( eyeMiddle_PosX * scale, eyeMiddle_PosY * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc((eyeMiddle_PosX + look_direction) * scale, eyeMiddle_PosY * scale, (30 * pupil_size) * scale, (50 * pupil_size) * scale, 20, 340, PIE);
        // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(ch3_bodySecondary);
    // top eyelid
    arc( eyeMiddle_PosX * scale, eyeMiddle_PosY * scale, 80 * scale, 80 * scale, 265 - eyelidTop_height, 275 + eyelidTop_height, CHORD);
    // bottom eyelid
    arc( eyeMiddle_PosX * scale, eyeMiddle_PosY * scale, 80 * scale, 80 * scale, 85 - eyelidBottom_height, 95 + eyelidBottom_height, CHORD);
    // eyebrow
  stroke(ch3_detailPrimary)
    noFill();
    arc((eyeMiddle_PosX + 5) * scale, (eyeMiddle_PosY + eyebrow_height) * scale, 130 * scale, 110 * scale, 210, 270);
    }
    
  // eye (front)
  // check eye value
    if (eye_value === 2 || eye_value == 3) {
        // eye fill
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(ch3_detailSecondary);
    ellipse( eyeFront_PosX * scale, eyeFront_PosY * scale, 80 * scale, 80 * scale);
    // pupil
    noStroke();
    fill(ch3_detailPrimary);
    arc((eyeFront_PosX + look_direction) * scale, eyeFront_PosY * scale, (30 * pupil_size) * scale, (50 * pupil_size) * scale, 20, 340, PIE);
        // eyelid
    strokeWeight(7 * scale);
    stroke(ch3_detailPrimary);
    fill(ch3_bodySecondary);
    // top eyelid
    arc( eyeFront_PosX * scale, eyeFront_PosY * scale, 80 * scale, 80 * scale, 265 - eyelidTop_height, 275 + eyelidTop_height, CHORD);
    // bottom eyelid
    arc( eyeFront_PosX * scale, eyeFront_PosY * scale, 80 * scale, 80 * scale, 85 - eyelidBottom_height, 95 + eyelidBottom_height, CHORD);
    // eyebrow
  stroke(ch3_detailPrimary)
  strokeWeight(7 * scale);
    noFill();
    arc((eyeFront_PosX + 5) * scale, (eyeFront_PosY + eyebrow_height) * scale, 130 * scale, 110 * scale, 210, 270);
    }
  pop();
}

// main canvas draw function
function draw () {

  // timer for seed change
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }
  resetFocusedRandom(curRandomSeed);

  noStroke();
  // draw background
  background(bg_color1);

  // draw face
  var w = canvasWidth / 5;
  var h = canvasHeight / 3; 
  
    for(var i=0; i<3; i++) {
      for(var j=0; j<5; j++) {

        // offset movement between characters
        var wave_offset = map((i + 1) * (j + 1), 0, 15, 0, 360);
        // y translation
        var y_offset = Math.sin((frameCount/50) + wave_offset) * 5;

        var y = h/2 + h*i;
        var x = w/2 + w*j;
        
        var ear_length = focusedRandom(90, 350, 0, 150);
        var eye_value = Math.floor(focusedRandom(1, 4, 3, 2.5));
        var look_direction = focusedRandom(-15, 15);
        var teeth_value = Math.floor(focusedRandom(1, 9, 3, 1));
        var orientation_value = Math.floor(focusedRandom(1, 3));
        var pupil_size = focusedRandom(0.4, 1);
        var eyelidTop_height = focusedRandom(0, 70);
        var eyelidBottom_height = focusedRandom(0, 70);
        var eyebrow_height = focusedRandom(0, -10);
        var face_select = Math.floor(focusedRandom(1, 4));
          
        var eye_PosX = 110;
        var eye_PosY = -50;
    
    drawFace1(x, y, w, h, ear_length, eye_value, look_direction, teeth_value, orientation_value, pupil_size, eyelidTop_height, eyelidBottom_height, eyebrow_height, eye_PosX, eye_PosY, eye_PosX + 50, eye_PosY - 25, eye_PosX + 80, eye_PosY - 20, face_select, y_offset);
  }
    } 
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}