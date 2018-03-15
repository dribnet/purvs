var canvasWidth = 960;
var canvasHeight = 500;
var main, d1, d2;
var h, m, s, mil;
var s;
var s2 = 0;
var i = 0;
var time = 0;
var flag = 0;
var flag2 = 0;
var secondsWithFraction, secondBarWidthSmooth;
var millisBarWidth;
var four_hours;

function preload() {
  main = loadImage("sketch_clock_main.png");
  d1 = loadImage("leftD.png");
  d2 = loadImage("RightD.png");
  four_hours = loadImage("Left4hour.png");
}

function setup() {
  /*
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');*/
  createCanvas(960, 500);
  angleMode(DEGREES);
  imageMode(CENTER);
  image(main, width / 2, height / 2, 960, 500);
}

function ampm(xm, ym) {
  noStroke();
  if (h < 12) {
    fill(255);
  } else {
    fill(255);
  }
  if (h < 12) {
    //'A'
    rect(-15 + xm, -25 + ym, 5, 5);
    rect(-20 + xm, -20 + ym, 5, 5);
    rect(-10 + xm, -20 + ym, 5, 5);
    rect(-25 + xm, -15 + ym, 5, 30);
    rect(-5 + xm, -15 + ym, 5, 30);
    rect(-20 + xm, -5 + ym, 15, 5);
  } else {
    //'P'
    rect(-25 + xm, -25 + ym, 5, 40);
    rect(-20 + xm, -25 + ym, 15, 5);
    rect(-20 + xm, -5 + ym, 15, 5);
    rect(-5 + xm, -20 + ym, 5, 15);
  }

  //'M'
  rect(5 + xm, -25 + ym, 5, 40);
  rect(10 + xm, -20 + ym, 5, 5);
  rect(15 + xm, -15 + ym, 5, 10);
  rect(20 + xm, -20 + ym, 5, 5);
  rect(25 + xm, -25 + ym, 5, 40);
  //time 200

  //use time function
  textSize(60);
  if (h <= 12) {
    if (h < 10) {
      text('0' + h, -180 + xm, 120 + ym);
    } else {
      text(h, -180 + xm, 120 + ym);
    }
  } else {
    if ((h - 12) < 10) {
      text('0' + (h - 12), -200 + xm, 120 + ym);
    } else {
      text((h - 12), -200 + xm, 120 + ym);
    }
  }


  textSize(60);
  if (m < 10) {
    text('0' + m, -70 + xm, 120 + ym);
  } else {
    text(m, -70 + xm, 120 + ym);
  }
  strokeWeight(3);

  if (h < 12) {
    stroke(255);
    //stroke(241, 122, 40);//am line orange
  } else {
    stroke(222, 10, 27); //pm line red
  }

  h = hour();
  m = minute();

}

function draw(obj) {
  h = hour();
  m = minute();
  s = second();
  //let millis = obj.millis;
  if ((time === 0) || (s === 0)) {
    s2 = second();
  }
  background(200);
  
  
  
  push();
  translate(570, 330);
  if ((s - s2) == 1) {
    i = i + 1;
    s2 = s;
    flag = 1;
    flag2 = 1;
    textSize(18);
    text(s, 50, 50);
    ampm(0, 0);
    flag = 0;
  } else {
    textSize(18);
    text(s, 50, 50);
    ampm(0, 0);
  }
  time = time + 1;
  pop();
  
  /*
  secondsWithFraction   = s + (mil / 1000.0);
  text('secondsWithFraction =' + secondsWithFraction , 50, 100);
  secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 100, 250);
  */

  millisBarWidth = map(mil, 0, 1000, 100, 250);
  dropRight(millisBarWidth);
  text('yD=' + millisBarWidth, 50, 100);
  
  text("Millis: " + mil, 10, 82);
  
  image(four_hours, width / 2, height / 2, 960, 500);
  image(main, width / 2, height / 2, 960, 500);
  

}
function dropRight(yD){
  //var opacity = map(mil, 100, 270, 255, 0);
  image(d2, 567, yD, 12, 21);//567,100
  //image(d2, 567, 270, 12, 21);//567, 270
}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}