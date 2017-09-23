var slider1, slider2, slider3;
var inc = 0.01;

function setup () {
  createCanvas(960, 500);
  pixelDensity(1);

  slider1 = createSlider(0, 100, 50);
  slider2 = createSlider(10, 50, 25);
  slider3 = createSlider(0, 255, 255);

  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
}

function draw () {

  //WALLPAPER

  var s1v = slider1.value();
  var s2v = slider2.value();
  var s3v = slider3.value();


  strokeWeight(2);
  stroke(s3v, 198, 203);
  fill(255);
  
  ellipseMode(CENTER);

  var x = 0;
  var y = 0;

  for (var x = 0; x <= width; x += 10) {
    for (var y = 0; y <= height; y += 10) {
     ellipse(x, y, s1v/5, s1v/5);  
    }     
  }

  var i = 0;
  
  stroke(255, 100);
  strokeWeight(75);
  for (var i = 0; i <= width + width/2; i += 200) {
    line(i - width/2, -50, 0 + i, height+50);   
  }

  for (var i = 0; i <= width + width/2; i += 200) {
    line(i, -50, -width/2 + i, height+50);   
  }

  stroke(255);
  strokeWeight(s2v);
  for (var i = 0; i <= width + width/2; i += 200) {
    line(i - width/2, -50, 0 + i, height+50);   
  }

  for (var i = 0; i <= width + width/2; i += 200) {
    line(i, -50, -width/2 + i, height+50);   
  }

  // noLoop();

  //GENERATIVE LANDSCAPE
  //Code based on tutorials from The Coding Train

  // var yoff = 0;

  // loadPixels();
  // for (var y = 0; y < height; y++) {
  //   var xoff = 0;
  //   for (var x = 0; x < width; x++) {
  //     var index = (x + y * width) * 4;
  //     var r = noise(xoff, yoff) * 255;
  //     pixels[index + 0] = r;
  //     pixels[index + 1] = r;
  //     pixels[index + 2] = r;
  //     pixels[index + 4] = r;
  //   }
  // }

  

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
