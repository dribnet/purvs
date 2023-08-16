/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 5000;



function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [193, 214, 227];

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  //COLOURS


  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  resetFocusedRandom(curRandomSeed);

  // clear screen
  background(bg_color1, 50);
  noStroke();



  //Background
  
  //BACKGROUND SETTING
  fill(4, 46, 17, 75);
  beginShape();
  curveVertex(canvasWidth/2 - canvasWidth/6 , canvasHeight/1.55);
  curveVertex(canvasWidth/2 + canvasWidth/6 , canvasHeight/1.55);
  curveVertex(canvasWidth/2 + canvasWidth/3.6, canvasHeight/1.55);
  curveVertex(canvasWidth/2 + canvasWidth/3.6, canvasHeight/1.16);
  curveVertex(canvasWidth/2 - canvasWidth/3.6, canvasHeight/1.16);
  curveVertex(canvasWidth/2 - canvasWidth/3.6, canvasHeight/1.55);
  endShape(CLOSE);


  //Bamboo shoots
  push()
  translate(0, 5);
  drawBamboo();
  translate(-30, 20);
  rotate(-7);
  drawBamboo();
  pop();
  push();
  translate(canvasWidth/2, 0);
  drawBamboo();
  translate(30, -10);
  rotate(10);
  drawBamboo();
  pop();

  fill(255, 150);
  rectMode(CENTER);
  rect(canvasWidth/6.25, canvasHeight/2, 10, canvasHeight);
  rect(canvasWidth - canvasWidth/6.25, canvasHeight/2, 10, canvasHeight);


  //BODIES
  push();
  translate(272.5, -65);
  drawBrownBearBody();
  translate(-360, 0);
  drawPolarBearBody();
  translate(180, 0);
  drawPandaBody();
  pop();

  

  //DRAW MAIN FACES
  push();
  translate(canvasWidth/2 +10, canvasHeight/2.8);
  scale(8.5);

  //*********FACE ONE********

  let tallness_value1 = focusedRandom(0,100, 5, 85);
  let ear_value1 = focusedRandom(0,3 );
  let cheek_value1 = focusedRandom(0,3, 2.5, 0);
  let mouth_value1 = focusedRandom(0,100, 5, 5);
  let eye_value1 = focusedRandom(0,100,5, 80);
  
    
  drawFace1(tallness_value1, ear_value1, cheek_value1, mouth_value1, eye_value1);
  translate(21, 0);

  //********FACE TWO**********
  let tallness_value2 = focusedRandom(0, 100, 5, 60);
  let ear_value2 = focusedRandom(0,3, 3, 0);
  let eye_value2 = focusedRandom(0,3);
  let mouth_value2 = focusedRandom(0, 100, 2.5, 50);
  let mouth_curve2 = focusedRandom(0, 100, 0, 5, 5);
    
  drawFace2(tallness_value2, ear_value2, eye_value2, mouth_value2, mouth_curve2);
  translate(-42, 0);

   //********FACE THREE********
  let tallness_value3 = focusedRandom(0,100, 5, 60);
  let ear_value3 = focusedRandom(0,3, 2, 1);
  let mouth_value3 = focusedRandom(0,100, 0);
  let mouth_width3 = focusedRandom(0,100, 3, 50);
  let eye_value3 = focusedRandom(0,3);
      
  drawFace3(tallness_value3, ear_value3, mouth_value3, mouth_width3, eye_value3);
  pop();


  // SIDE FACES
  let w = canvasWidth / 6;
  let h = canvasHeight / 5;
  for(let i=0; i<5; i++) {
    for(let j=0; j<1; j++) {

      let y = h/2 + h*i;
      let x = w/2 + w*j;
      // center face
      push();
      translate(x, y);
      scale(w/30, h/20);
      
        if((i+j)%3 == 0) {
          //*********FACE ONE********
          let tallness_value1 = focusedRandom(0,100, 4, 75);
          let ear_value1 = focusedRandom(0,3 );
          let cheek_value1 = focusedRandom(0,3, 2.5, 0);
          let mouth_value1 = focusedRandom(0,100, 5, 5);
          let eye_value1 = focusedRandom(0,100,5, 80);
          drawFace1(tallness_value1, ear_value1, cheek_value1, mouth_value1, eye_value1);
        }

        else if((i+j)%3 == 1){
          //********FACE TWO**********
          let tallness_value2 = focusedRandom(0, 100, 3, 65);
          let ear_value2 = focusedRandom(0,3, 3, 0);
          let eye_value2 = focusedRandom(0,3);
          let mouth_value2 = focusedRandom(0, 100, 2.5, 50);
          let mouth_curve2 = focusedRandom(0, 100, 0, 5, 5);
          drawFace2(tallness_value2, ear_value2, eye_value2, mouth_value2, mouth_curve2);
        }
        else {
          //********FACE THREE********
          let tallness_value3 = focusedRandom(0,100, 3, 60);
          let ear_value3 = focusedRandom(0,3, 2, 1);
          let mouth_value3 = focusedRandom(0,100, 0);
          let mouth_width3 = focusedRandom(0,100, 3, 50);
          let eye_value3 = focusedRandom(0,3);
          drawFace3(tallness_value3, ear_value3, mouth_value3, mouth_width3, eye_value3);
        }
        pop();
    }

  }

  for(let i=0; i<5; i++) {
    for(let j=5; j<6; j++) {

      let y = h/2 + h*i;
      let x = w/2 + w*j;
      // center face
      push();
      translate(x, y);
      scale(w/30, h/20);
      
        if((i+j)%3 == 0) {
          //*********FACE ONE********
          let tallness_value1 = focusedRandom(0,100, 4, 75);
          let ear_value1 = focusedRandom(0,3 );
          let cheek_value1 = focusedRandom(0,3, 2.5, 0);
          let mouth_value1 = focusedRandom(0,100, 5, 5);
          let eye_value1 = focusedRandom(0,100,5, 80);
          drawFace1(tallness_value1, ear_value1, cheek_value1, mouth_value1, eye_value1);
        }

        else if((i+j)%3 == 1){
          //********FACE TWO**********
          let tallness_value2 = focusedRandom(0, 100, 3, 65);
          let ear_value2 = focusedRandom(0,3, 3, 0);
          let eye_value2 = focusedRandom(0,3);
          let mouth_value2 = focusedRandom(0, 100, 2.5, 50);
          let mouth_curve2 = focusedRandom(0, 100, 0, 5, 5);
          drawFace2(tallness_value2, ear_value2, eye_value2, mouth_value2, mouth_curve2);
        }
        else {
          //********FACE THREE********
          let tallness_value3 = focusedRandom(0,100, 3, 60);
          let ear_value3 = focusedRandom(0,3, 2, 1);
          let mouth_value3 = focusedRandom(0,100, 0);
          let mouth_width3 = focusedRandom(0,100, 3, 50);
          let eye_value3 = focusedRandom(0,3);
          drawFace3(tallness_value3, ear_value3, mouth_value3, mouth_width3, eye_value3);
        }
        pop();
    }

  }
   
}
function drawBamboo(){
  fill(122, 150, 132);
  rectMode(CENTER);
  rect(canvasWidth/2 - canvasWidth/4, canvasHeight/3, 15, 300, 5);
  fill(155, 156, 135);
  rect(canvasWidth/2 - canvasWidth/4, canvasHeight/2.3, 15, 10);
  rect(canvasWidth/2 - canvasWidth/4, canvasHeight/3, 15, 10);
  rect(canvasWidth/2 - canvasWidth/4, canvasHeight/4, 15, 10);
  rect(canvasWidth/2 - canvasWidth/4, canvasHeight/6, 15, 10);
  rect(canvasWidth/2 - canvasWidth/4, canvasHeight/12, 15, 10);
}

function drawPandaBody(){
  fill(215);
  rectMode(CENTER);
  rect(canvasWidth/2 - canvasWidth/12, canvasHeight/2 + canvasHeight/4.5, canvasWidth/7.5, canvasHeight/2.5, 80);
  fill(40);
  rect(canvasWidth/2 - canvasWidth/12, canvasHeight/2 + canvasHeight/7, canvasWidth/8, canvasHeight/7);

  push();
  translate(canvasWidth/2 - canvasWidth/6.8, canvasHeight/2+ canvasHeight/6);
  rotate(20);
  rect(0, 0, canvasWidth/22, canvasHeight/4.6, 75);
  pop();

  push();
  translate(canvasWidth/2 - canvasWidth/45, canvasHeight/2+ canvasHeight/6);
  rotate(-20);
  rect(0, 0, canvasWidth/22, canvasHeight/4.6, 75);
  pop();

  fill(50);
  push();
  translate(canvasWidth/2 - canvasWidth/7.5, canvasHeight/2+ canvasHeight/2.65);
  rotate(40);
  rect(0, 0, 65, 80, 75);
  pop();

  push();
  translate(canvasWidth/2 - canvasWidth/25, canvasHeight/2+ canvasHeight/2.65);
  rotate(-40);
  rect(0, 0, 65, 80, 75);
  pop();

  fill(40);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 70, 70);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 70, 70);

  fill(70);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 35, 30);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 35, 30);

  push();
  translate(0, -22);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  translate(-18, +6);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  translate(36, 0);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  pop();
}

function drawBrownBearBody(){
  let mid_brown = "#826558";
  let light_brown = "#9e806a";

  fill(mid_brown);
  rectMode(CENTER);
  rect(canvasWidth/2 - canvasWidth/12, canvasHeight/2 + canvasHeight/4.5, canvasWidth/7.5, canvasHeight/2.5, 80);
  rect(canvasWidth/2 - canvasWidth/12, canvasHeight/2 + canvasHeight/7, canvasWidth/8, canvasHeight/7);
  fill(light_brown);
  push();
  translate(canvasWidth/2 - canvasWidth/6.8, canvasHeight/2+ canvasHeight/6);
  rotate(20);
  rect(0, 0, canvasWidth/22, canvasHeight/4.6, 75);
  pop();

  push();
  translate(canvasWidth/2 - canvasWidth/45, canvasHeight/2+ canvasHeight/6);
  rotate(-20);
  rect(0, 0, canvasWidth/22, canvasHeight/4.6, 75);
  pop();

  fill(light_brown);
  push();
  translate(canvasWidth/2 - canvasWidth/7.5, canvasHeight/2+ canvasHeight/2.65);
  rotate(40);
  rect(0, 0, 65, 80, 75);
  pop();

  push();
  translate(canvasWidth/2 - canvasWidth/25, canvasHeight/2+ canvasHeight/2.65);
  rotate(-40);
  rect(0, 0, 65, 80, 75);
  pop();

  fill(mid_brown);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 70, 70);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 70, 70);

  fill(light_brown);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 35, 30);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 35, 30);

  push();
  translate(0, -22);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  translate(-18, +6);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  translate(36, 0);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  pop();

}

function drawPolarBearBody(){
  let dark_brown = "#9c908a";
  let beige = "#cfc2ba";

  fill(beige);
  rectMode(CENTER);
  rect(canvasWidth/2 - canvasWidth/12, canvasHeight/2 + canvasHeight/4.5, canvasWidth/7.5, canvasHeight/2.5, 80);
  
  rect(canvasWidth/2 - canvasWidth/12, canvasHeight/2 + canvasHeight/7, canvasWidth/8, canvasHeight/7);
  fill(dark_brown);
  push();
  translate(canvasWidth/2 - canvasWidth/6.8, canvasHeight/2+ canvasHeight/6);
  rotate(20);
  rect(0, 0, canvasWidth/22, canvasHeight/4.6, 75);
  pop();

  push();
  translate(canvasWidth/2 - canvasWidth/45, canvasHeight/2+ canvasHeight/6);
  rotate(-20);
  rect(0, 0, canvasWidth/22, canvasHeight/4.6, 75);
  pop();

  fill(dark_brown);
  push();
  translate(canvasWidth/2 - canvasWidth/7.5, canvasHeight/2+ canvasHeight/2.65);
  rotate(40);
  rect(0, 0, 65, 80, 75);
  pop();

  push();
  translate(canvasWidth/2 - canvasWidth/25, canvasHeight/2+ canvasHeight/2.65);
  rotate(-40);
  rect(0, 0, 65, 80, 75);
  pop();

  fill(beige);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 70, 70);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 70, 70);

  fill(dark_brown);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 35, 30);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 35, 30);

  push();
  translate(0, -22);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  translate(-18, +6);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  translate(36, 0);
  ellipse(canvasWidth/2 - canvasWidth/7.2, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  ellipse(canvasWidth/2 - canvasWidth/28, canvasHeight/2+ canvasHeight/2.6, 15, 10);
  pop();
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
