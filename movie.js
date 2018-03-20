var movie;
var x = 0;
var y = 0;
var img;
var video//, video_slice

function setup(){
  //imageMode(CENTER)
  createCanvas(960, 500);
  img = createImage(960, 500);
  pixelDensity(1);
  movie = createVideo('test.mp4')
  movie.size(320, 500);
  movie.play();
  movie.loop(true);
}

function draw() {
  movie.loadPixels();

  var w = movie.width;
  var h = movie.height;

  img.copy(movie, w/2, 0, 1, h, x, y, 1, h/4);

  x = x + 1;
  if (x>width){
    x=0;
    y += h/4;
  }

  image(img, 0, 0);

}
