const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
var n = 7;
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

function draw () {

  background(10);
 
  //letters();

  numbers();
  


}
function letters (){
// p start

/*  const esize = esize;
  for(let i =0;i<esize;i++ ){
    ellipse(width/2, height/2+esize*i, esize, esize);
  }
*/


  ellipse(width/2, height/2, 7, 7);
  ellipse(width/2+7, height/2, 7, 7);
  ellipse(width/2+7+7, height/2, 7, 7);
  ellipse(width/2+7+7+7, height/2, 7, 7);
  ellipse(width/2+7+7+7+7, height/2+7, 7, 7);
  ellipse(width/2+7+7+7+7, height/2+7+7, 7, 7);
  ellipse(width/2+7, height/2+7+7+7, 7, 7);
  ellipse(width/2+7+7, height/2+7+7+7, 7, 7);
  ellipse(width/2+7+7+7, height/2+7+7+7, 7, 7);
  ellipse(width/2, height/2+7, 7, 7);
  ellipse(width/2, height/2+7+7, 7, 7);
  ellipse(width/2, height/2+7+7+7, 7, 7);
  ellipse(width/2, height/2+7+7+7+7, 7, 7);
  ellipse(width/2, height/2+7+7+7+7+7, 7, 7);
  ellipse(width/2, height/2+7+7+7+7+7+7, 7, 7);
// p finish

// m start
  ellipse(width/2+45, height/2, 7, 7);
  ellipse(width/2+45, height/2+7, 7, 7);
  ellipse(width/2+45, height/2+7+7, 7, 7);
  ellipse(width/2+45, height/2+7+7+7, 7, 7);
  ellipse(width/2+45, height/2+7+7+7+7, 7, 7);
  ellipse(width/2+45, height/2+7+7+7+7+7, 7, 7);
  ellipse(width/2+45, height/2+7+7+7+7+7+7, 7, 7);
    ellipse(width/2+45+7, height/2+7, 7, 7);
    ellipse(width/2+45+7+7, height/2+7+7, 7, 7);
    ellipse(width/2+45+7+7, height/2+7+7, 7, 7);
    ellipse(width/2+45+7+7+7, height/2+7, 7, 7);


  ellipse(width/2+45+7+7+7+7, height/2, 7, 7);
  ellipse(width/2+45+7+7+7+7, height/2+7, 7, 7);
  ellipse(width/2+45+7+7+7+7, height/2+7+7, 7, 7);
  ellipse(width/2+45+7+7+7+7, height/2+7+7+7, 7, 7);
  ellipse(width/2+45+7+7+7+7, height/2+7+7+7+7, 7, 7);
  ellipse(width/2+45+7+7+7+7, height/2+7+7+7+7+7, 7, 7);
  ellipse(width/2+45+7+7+7+7, height/2+7+7+7+7+7+7, 7, 7);

// m finish

}


function numbers (){
// 4 start
  ellipse(width/2-28-28, height/2+7+7+7+7+7+7, 7, 7);
  ellipse(width/2-28-28, height/2+7+7+7+7+7, 7, 7);

      ellipse(width/2-28-28-7, height/2+7, 7, 7);
      ellipse(width/2-28-28-7-7, height/2+7+7, 7, 7);
      ellipse(width/2-28-28-7-7-7, height/2+7+7+7, 7, 7);
    ellipse(width/2-28-28-7-7-7, height/2+7+7+7+7, 7, 7);
    ellipse(width/2-28-28-7-7, height/2+7+7+7+7, 7, 7);
    ellipse(width/2-28-28-7, height/2+7+7+7+7, 7, 7);

  ellipse(width/2-28-28, height/2+7+7+7+7, 7, 7);

    ellipse(width/2-28-21, height/2+7+7+7+7, 7, 7);

  ellipse(width/2-28-28, height/2+7+7+7, 7, 7);
  ellipse(width/2-28-28, height/2+7+7, 7, 7);
  ellipse(width/2-28-28, height/2+7, 7, 7);
  ellipse(width/2-28-28, height/2, 7, 7);
// 4 finish

// : start
  ellipse(width/2-28, height/2+7, 7, 7);
  ellipse(width/2-28, height/2+35, 7, 7);
// : finish

// 0 start
  ellipse(width/2, height/2, 7, 7);
  ellipse(width/2+7, height/2, 7, 7);
  ellipse(width/2+14, height/2, 7, 7);
  
  ellipse(width/2+21, height/2+7+7+7+7+7, 7, 7);
  ellipse(width/2+21, height/2+7+7+7+7, 7, 7);
  ellipse(width/2+21, height/2+7+7+7, 7, 7);
  ellipse(width/2+21, height/2+7+7, 7, 7);
  ellipse(width/2+21, height/2+7, 7, 7);

  ellipse(width/2-7, height/2+7+7+7+7+7, 7, 7);
  ellipse(width/2-7, height/2+7+7+7+7, 7, 7);
  ellipse(width/2-7, height/2+7+7+7, 7, 7);
  ellipse(width/2-7, height/2+7+7, 7, 7);
  ellipse(width/2-7, height/2+7, 7, 7);

  ellipse(width/2, height/2+42, 7, 7);
  ellipse(width/2+7, height/2+42, 7, 7);
  ellipse(width/2+14, height/2+42, 7, 7);
// 0 finish

// 2 start
  ellipse(width/2+35, height/2+7, 7, 7);
  ellipse(width/2+35+7, height/2, 7, 7);
  ellipse(width/2+35+7+7, height/2, 7, 7);
  ellipse(width/2+35+7+7+7, height/2, 7, 7);
  ellipse(width/2+35+7+7+7+7, height/2+7, 7, 7);

  ellipse(width/2+n*9, height/2+n*2, 7, 7);
  ellipse(width/2+n*8, height/2+n*3, 7, 7);
  ellipse(width/2+n*7, height/2+n*4, 7, 7);
  ellipse(width/2+n*6, height/2+n*5, 7, 7);

  ellipse(width/2+n*5, height/2+n*6, 7, 7);
  ellipse(width/2+n*6, height/2+n*6, 7, 7);
  ellipse(width/2+n*7, height/2+n*6, 7, 7);
  ellipse(width/2+n*8, height/2+n*6, 7, 7);
  ellipse(width/2+n*9, height/2+n*6, 7, 7);
// 2 finish

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
