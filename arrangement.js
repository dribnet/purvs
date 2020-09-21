/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

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
const bg_color1 = [144, 114, 105];

function mouseClicked() {
  changeRandomSeed();
}


var book_w = 350;
var book_h = 450;
var book_x = 10;
var book_y = 10;
var gap = 2;
var w = 5;
var h = 6;

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  resetFocusedRandom(curRandomSeed);

  // clear screen



  background(bg_color1);
  angleMode(DEGREES);

  push();
    rotate(-40);
    translate(-450,50);
    blendMode(MULTIPLY);
    fill(180,160,180);
    rect(3,-17,500,620);
    blendMode(BLEND);
    fill(200, 230, 210);
    rect(0,-20,500,620);
  pop();

  push();
    rotate(-40);
    translate(-450,50);
    for(let i = 0; i < w; i++){
      for(let j = 0; j < h; j++){
        push();
          translate(20 + i*100, 40 + j * 100);
          scale(5);
          var r = focusedRandom(-170,170, 20, 0);
          rotate(r);
          if(focusedRandom(0,1) < 0.9){
            if(focusedRandom(0,1)< 0.5){
              a1 = focusedRandom(0,10,2,4);
              a2 = focusedRandom(0,100,1,25);
              a3 = focusedRandom(0,10,2,4);
              a4 = 1 - focusedRandom(0,1);
              a5 = focusedRandom(0,1);
              a6 = focusedRandom(-0.3,0.7);
              a7 = focusedRandom(-0.5,0.5);
              a8 = focusedRandom(-1.5,0.5);
              a9 = focusedRandom(0,5);
              a10 = focusedRandom(0,3);
              a11 = focusedRandom(0,5,4,5);
              a12 = focusedRandom(0,5,2,2);
              drawFace1(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
              angleMode(DEGREES);
            }
            else{
              a1 = focusedRandom(0,8,2,2.5);
              a2 = focusedRandom(0,10,1,4);
              a3 = focusedRandom(0,10,1,3);
              a4 = focusedRandom(0,10,2,4);
              a5 = focusedRandom(0,1);
              a6 = focusedRandom(-0.4,0.6);
              a7 = focusedRandom(-0.8,0.2);
              a8 = focusedRandom(-1.5,0.5);
              a9 = focusedRandom(0,5);
              a10 = focusedRandom(0,3);
              a11 = focusedRandom(0,5,4,5);
              a12 = focusedRandom(0,5,2,2);
             drawFace3(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
              angleMode(DEGREES);
            }
          }
        pop();
      }
    }
  pop();


  noStroke();
  push();
    fill(200,180,200);
    // rect(book_x,book_y,book_w,book_h);
    rotate(5);
    translate(80,-50);
    fill(180,160,180);
    blendMode(MULTIPLY);
    rect(78,63,width - 150,height-120,20);
    blendMode(BLEND);
    fill(200,180,200);
    rect(80,60,width - 160,height-120,20);
    stroke(180,160,180);
    strokeWeight(5);
    line(83,105,width/2 - 80,305);
    line((width - 160 + 80)-3,105,width/2 + 80,305);
    bezier(width/2 + 80,305,
          width/2+20,338,
          width/2-20,338,
          width/2 - 80,305);

    stroke(220,200,220);
    strokeWeight(5);
    line(83,100,width/2 - 80,300);
    line((width - 160 + 80)-3,100,width/2 + 80,300);
    bezier(width/2 + 80,300,
          width/2+20,340,
          width/2-20,340,
          width/2 - 80,300);

    line(83,400,315,250);
    line((width - 80)-3 ,400,width/2 +160,250);
  pop();


  push();
    rotate(5);
    translate(width/2 + 80,height/2+20);
    scale(6);
    var r = focusedRandom(-170,170, 20, 0);
    rotate(r);
    a1 = focusedRandom(0,8,2,2.5);
    a2 = focusedRandom(0,10,1,4);
    a3 = focusedRandom(0,10,1,3);
    a4 = focusedRandom(0,10,2,4);
    a5 = focusedRandom(0,1);
    a6 = focusedRandom(-0.4,0.6);
    a7 = focusedRandom(-0.8,0.2);
    a8 = focusedRandom(-1.5,0.5);
    a9 = focusedRandom(0,5);
    a10 = focusedRandom(0,3);
    a11 = focusedRandom(0,5,4,5);
    a12 = focusedRandom(0,5,2,2);
    drawFace3(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
    angleMode(DEGREES);
  pop();

  push();
    for(let j = 0; j < 3; j++){
      for(let i = j; i >= 0; i--){
        push();
          rotate(5);
          translate(width/2 - 250 + i *60, height/2 + j * 60 -50);
          scale(5);
          var r = focusedRandom(-170,170, 20, 0);
          rotate(r);
          if(focusedRandom(0,1) < 0.5){
            a1 = focusedRandom(0,10,2,4);
            a2 = focusedRandom(0,100,1,25);
            a3 = focusedRandom(0,10,2,4);
            a4 = 1 - focusedRandom(0,1);
            a5 = focusedRandom(0,1);
            a6 = focusedRandom(-0.3,0.7);
            a7 = focusedRandom(-0.5,0.5);
            a8 = focusedRandom(-1.5,0.5);
            a9 = focusedRandom(0,5);
            a10 = focusedRandom(0,3);
            a11 = focusedRandom(0,5,4,5);
            a12 = focusedRandom(0,5,2,2);
            drawFace1(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
            angleMode(DEGREES);

          }
          else{
            a1 = focusedRandom(0,8,2,2.5);
            a2 = focusedRandom(0,10,1,4);
            a3 = focusedRandom(0,10,1,3);
            a4 = focusedRandom(0,10,2,4);
            a5 = focusedRandom(0,1);
            a6 = focusedRandom(-0.4,0.6);
            a7 = focusedRandom(-0.8,0.2);
            a8 = focusedRandom(-1.5,0.5);
            a9 = focusedRandom(0,5);
            a10 = focusedRandom(0,3);
            a11 = focusedRandom(0,5,4,5);
            a12 = focusedRandom(0,5,2,2);
           drawFace3(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
            angleMode(DEGREES);
          }
        pop();
      }
    }
  pop();
    // rect(book_x+gap*2+book_w,book_y, book_w,book_h);
  for(let i = 0; i < w; i++){
    for(let j = 0; j < h; j++){

        push();

          if(focusedRandom(0,10,2,2) > 9 && j > 0){
            j--;
          }
          translate(i * (book_w - 20)/w + book_x + 50 + focusedRandom(-10,10,2,0),
                    j * (book_h - 40)/h + book_y + 40 + focusedRandom(-10,10,2,0));
                    scale(3.5);
                    var r = focusedRandom(-170,170, 20, 0);
                    rotate(r);
          if(focusedRandom(0,1) < 0.5){
            a1 = focusedRandom(0,10,2,4);
            a2 = focusedRandom(0,100,1,25);
            a3 = focusedRandom(0,10,2,4);
            a4 = 1 - focusedRandom(0,1);
            a5 = focusedRandom(0,1);
            a6 = focusedRandom(-0.3,0.7);
            a7 = focusedRandom(-0.5,0.5);
            a8 = focusedRandom(-1.5,0.5);
            a9 = focusedRandom(0,5);
            a10 = focusedRandom(0,3);
            a11 = focusedRandom(0,5,4,5);
            // a12 = focusedRandom(0,5,2,2);
           // drawFace1(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
            angleMode(DEGREES);

          }
          else{
            a1 = focusedRandom(0,8,2,2.5);
            a2 = focusedRandom(0,10,1,4);
            a3 = focusedRandom(0,10,1,3);
            a4 = focusedRandom(0,10,2,4);
            a5 = focusedRandom(0,1);
            a6 = focusedRandom(-0.4,0.6);
            a7 = focusedRandom(-0.8,0.2);
            a8 = focusedRandom(-1.5,0.5);
            a9 = focusedRandom(0,5);
            a10 = focusedRandom(0,3);
            a11 = focusedRandom(0,5,4,5);
            a12 = focusedRandom(0,5,2,2);
           // drawFace3(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
            angleMode(DEGREES);
          }

        pop();

    }
  }
  // draw a 7x4 grid of faces
  // let w = canvasWidth / 7;
  // let h = canvasHeight / 4;
  // for(let i=0; i<4; i++) {
  //   for(let j=0; j<7; j++) {
  //     let y = h/2 + h*i;
  //     let x = w/2 + w*j;
  //     push();
  //     translate(x, y);
  //     scale(w/25, h/25);
  //     if((i+j)%2 == 0) {
  //       // push();
  //       a1 = focusedRandom(0,10,2,4);
  //       a2 = focusedRandom(0,100,1,25);
  //       a3 = focusedRandom(0,10,2,4);
  //       a4 = 1 - focusedRandom(0,1);
  //       a5 = focusedRandom(0,1);
  //       a6 = focusedRandom(-0.3,0.7);
  //       a7 = focusedRandom(-0.5,0.5);
  //       a8 = focusedRandom(-1.5,0.5);
  //       a9 = focusedRandom(0,5);
  //       a10 = focusedRandom(0,3);
  //       a11 = focusedRandom(0,5,4,5);
  //       a12 = focusedRandom(0,5,2,2);
  //       drawFace1(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
  //       // pop();
  //     }
  //     else {
  //       a1 = focusedRandom(0,8,2,2.5);
  //       a2 = focusedRandom(0,10,1,4);
  //       a3 = focusedRandom(0,10,1,3);
  //       a4 = focusedRandom(0,10,2,4);
  //       a5 = focusedRandom(0,1);
  //       a6 = focusedRandom(-0.4,0.6);
  //       a7 = focusedRandom(-0.8,0.2);
  //       a8 = focusedRandom(-1.5,0.5);
  //       a9 = focusedRandom(0,5);
  //       a10 = focusedRandom(0,3);
  //       a11 = focusedRandom(0,5,4,5);
  //       a12 = focusedRandom(0,5,2,2);
  //       drawFace3(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
  //     }
  //     pop();
  //   }
  // }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
