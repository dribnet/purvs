const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

}

// Update this function to draw you own maeda clock
function draw () {
  background(0); 
  
  var hr = hour();
  var mn = minute();
  var sc = second();
  var a = 90;
  var b = 45;
  var s = 1;
  var d = 2;
 
  if(s == 1){
   Enlarge();
  } else {
   Shrink();
  }

// fill(50, 40, 240, 250);
// noStroke();
// textAlign(CENTER);
// textSize(a);
// text(hr, 390, 250);
// textSize(b);
// text(mn, 500, 250);





}


//function below should enlarge the hour if its below textsize 90 and shrink the minutes
function Enlarge (){
hr = hour();
mn = minute();

  if(a > 45){
fill(50, 40, 240, 250);
noStroke();
textAlign(CENTER);
  textSize(a);
  text(hr, 390, 250);
    textSize(b);
    text(mn, 500, 250);
a++;
b--;
}else{
  s = 2;
}
}

function Shrink () {
hr = hour();
mn = minute(); 

if(a <= 90){
  fill(50, 40, 240, 250);
  noStroke();
  textAlign(CENTER);
textSize(a);
text(hr, 390, 250);
    textSize(a);
    text(mn, 500, 250);
  a--;
  b++;
  }else{
    s = 1
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