var canvasWidth = 960;
var canvasHeight = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(51); 
  for (var x = 315; x <= 450; x += 20){
    strokeWeight(5);
    stroke(30,144,255); 
    noFill();
    ellipse(x, 155, 15, 15);
  }
  for(var y = 155; y <= 225; y += 22){
    ellipse(455, y, 15, 15);
  }
    ellipse(430, 245, 15, 15);
    ellipse(415, 265, 15, 15);
    ellipse(400, 285, 15, 15);
  for(var y = 285; y <= 375; y += 22 ){
    ellipse(400, y, 15, 15);
  }
  for(var y = 155; y <= 375; y += 22){
    strokeWeight(5);
    stroke(220,20,60); 
    noFill();
    ellipse(455, y, 15, 15);
  }
    ellipse(430, 177 , 15, 15);
    ellipse(410, 199 , 15, 15);
  for(var y = 155; y <= 375; y += 22){
    strokeWeight(5);
    stroke(30,144,255); 
    fill(220,20,60);
    ellipse(560, y, 15, 15);
  }
    ellipse(535, 177 , 15, 15);
    ellipse(515, 199 , 15, 15);
    for(var y = 155; y <= 375; y += 22){
      strokeWeight(2);
      stroke(255,215,0);
      noFill(); 
      ellipse(560, y, 30, 30);
    }
      ellipse(535, 177 , 30, 30);
      ellipse(515, 199 , 30, 30);
      ellipse(495, 221 , 30, 30);
      ellipse(475, 243 , 30, 30);
      for(var x = 455; x <= 600; x += 21){
        strokeWeight(2);
        stroke(255,215,0);
        noFill(); 
        ellipse(x, 265, 30, 30);
      }






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
