var movie;
var x = 0;
var y = 0;
var img;
var video
var theta = 0;
var radius = 59;

function setup(){
  //imageMode(CENTER)
  createCanvas(960, 500);
  img = createImage(960, 500);
  pixelDensity(1);
  movie = createVideo('test.mp4')
  movie.size(320, 500);
  movie.play();
  movie.loop(true);
  movie.hide(true);
  background(20);
}

function draw() {
  
  movie.loadPixels();

  var w = movie.width;
  var h = movie.height;
  var s = second();

  img.copy(movie, w/2, 0, 1, h/2, x, y, 1, h/8);

  // x = x + s;
  // if (x>width){
  //   x=0;
  //   y += h/4;
  // }

  translate(width / 2, height / 2);
  theta = map(s, 0, 59, 0, 360);
  var xS = cos(theta)*radius
  var yS = sin(theta)*radius
  image(img, xS, yS);

  if(s > 59){
    background(20);
  }

}
