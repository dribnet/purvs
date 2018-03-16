var playing = true;
var movie;
var button;

function setup(){
  createCanvas(0, 0);
  movie = createVideo('assets/test.mp4')
  movie.size(500, 500);
  movie.play();
  movie.loop();
}