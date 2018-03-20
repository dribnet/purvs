var video;
// var newFrame = false;

function setup() {
  video = createVideo('test.mp4')
  createCanvas(960, 500);
  pixelDensity(1);
  video.hide(true);
  video.loop(true);
  noStroke();
  fill(0);
}

function draw() {

  loadPixels();
  video.loadPixels();
  for (var y = 0; y < video.height; y++){
    for(var x = 0; x < video.width; x++){
      var i = (x + y * width) * 4;
      var r = video.pixels[i + 0];
      var g = video.pixels[i + 1];
      var b = video.pixels[i + 2];

      pixels[i + 0] = r;  //red
      pixels[i + 1] = g;  //blue
      pixels[i + 2] = b;  //green
      pixels[i + 3] = 255;  //alphaß
    }
  }
  updatePixels();
  video.updatePixels();
}
