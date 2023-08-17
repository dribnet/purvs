const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
var r1 = 0;
var r2 = 0;
var r3 = 0;
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES);

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
    var hr = hour();
    var mn = minute();
    var sc = second()
    var ed1 = map(sc,0,60,0,360);
    var ed2 = map(mn,0,60,0,360);
    var ed3 = map(hr,0,24,0,360);
    background(204); // light gray background
    translate(width/2,height/2);
    //for hours
    rotate(ed3)
    fill(0);
    textSize(300);
    text(hr,-170,120);
    //for minutes
    rotate(ed2);
    fill(255);
    textSize(280)
    text(mn,-155,115);
    //for seconds
    rotate(ed1)
    fill('Red');
    textSize(260)
    text(sc,-145,110);

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
