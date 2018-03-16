var movie;
var x = 0;

function setup(){
  createCanvas(960, 500);
  pixelDensity(3);
  movie = createVideo('test.mp4')
  movie.size(320, 500);
  movie.play();
  //movie.loop();
}

function draw() {
  movie.loadPixels();

  var w = movie.width;
  var h = movie.height;

  copy(movie, w/2, 0, 1, h, x, 0, 1, h);

  x = x + 1;
}