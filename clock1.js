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
  // var c = 90;
  var s = 1;
  var d = 2;
 

 // if(s == 1){
 //  Enlarge();
 // } else {
 //  Shrink();
 //}

fill(50, 40, 240, 250);
noStroke();
textAlign(CENTER);
textSize(a);
text(hr, 390, 250);

textSize(b);
text(mn, 500, 250);





// textSize(c);
// text(sc, 420, 250);
}



// function Enlarge (){
// hr = hour();
// mn = minute();
// fill(50, 40, 240, 250);
// noStroke();
// textAlign(CENTER);
// textSize(a);
// text(hr, 390, 250);

// textSize(b);
// text(mn, 500, 250);

// if(a < 90){
//   a++;
//   b--;
// }

// }

// function Shrink () {
// hr = hour();
// mn = minute(); 
// fill(50, 40, 240, 250);
// noStroke();
// textAlign(CENTER);

// textSize(a);
// text(hr, 390, 250);

// textSize(a);
// text(mn, 500, 250);

// if(a == 90){
//   a--;
//   b++;
//   }


//}





// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
