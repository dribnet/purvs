var canvasWidth = 960;
var canvasHeight = 500;
var h;
var m;
var s;
var s2 = 0;
var i = 0;
var time = 0;
var flag = 0;
function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  
  // you can optionally add your own code here if you also have setup code
}

function ampm(xm, ym){
  noStroke();
  if (h< 12){ 
    fill(248, 179, 209);//am pink
  }else{
  fill(255);//pm white
  }
  if (h<12){
    //'A'
  rect(-15+xm, -25+ym, 5, 5);
  rect(-20+xm, -20+ym, 5, 5);
  rect(-10+xm, -20+ym, 5, 5);
  rect(-25+xm, -15+ym, 5, 40);
  rect(-5+xm, -15+ym, 5, 40);
  rect(-20+xm, -5+ym, 15, 5);
  }else{
    //'P'
  rect(-25+xm, -25+ym, 5, 50);
  rect(-20+xm, -25+ym, 15, 5);
  rect(-20+xm, -5+ym, 15, 5);
  rect(-5+xm, -20+ym, 5, 15);
  }
  
  //'M'
  rect(5+xm, -25+ym, 5, 50);
  rect(10+xm, -20+ym, 5, 5);
  rect(15+xm, -15+ym, 5, 10);
  rect(20+xm, -20+ym, 5, 5);
  rect(25+xm, -25+ym, 5, 50);
  //time 200
  
  //'4'+hour
  /*
  rect(-18+xm, 112+ym, 36, 6);
  rect(xm, 100+ym, 6, 24);
  rect(-12+xm, 106+ym, 6, 6);
  rect(-6+xm, 100+ym, 6, 6);*/
  //'2'+min
  
  //use time function
  textSize(34);
  if (h<=12){
    if(h<10){
      text('0' + h, -20+xm, 160+ym);
    }else{
    text(h, -20+xm, 160+ym);
    }
  }else{
    if ((h-12) < 10){
      text('0' + (h-12), -20+xm, 160+ym);
    }else{
    text((h-12), -20+xm, 160+ym);
    }
  }

  
  textSize(26);
  if (m<10){
    text('0' + m, 8+xm, 205+ym);
  }else{
    text(m, 8+xm, 205+ym);
  }
  strokeWeight(3);

    if (h < 12){
      stroke(255);
      //stroke(241, 122, 40);//am line orange
    }else{
      stroke(222, 10, 27);//pm line red
    }

  line(40+xm, 150+ym, -20+xm, 200+ym);
  h = hour();
  m = minute();

}

// Update this function to draw you own maeda clock
function draw () {
  h = hour();
  m = minute();
  s = second();
  if ((time === 0)  || (s === 0)){
    s2 = second();
  }
  if(h<12){
    background(253, 234, 220);// am background
  }else{
    background(248, 179, 209); //pm background,pink
  }
  
  
  
  //push();
  translate(width/2, height/2);
  if ((s-s2)==1){
    i = i + 1;
    s2 = s;
    flag = 1;
  rotate((-6)*i);
  textSize(18);
  text(s, 50, 50);
  ampm(0, 0);
  flag = 0;
  }else{
  rotate((-6)*i);
  textSize(18);
  text(s, 50, 50);
  ampm(0, 0);
  }
  time = time + 1;
  //pop();
 
}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
