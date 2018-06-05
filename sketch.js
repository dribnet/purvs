const finalVersion = true;

var xoff = 0;
var yoff = 0;

sizeSq = 30;
halfSizeSq = sizeSq / 2;
scl = 5;
bend = 15;
var pos = [];

var animate = [];
var num = 0;

var xSZ = 216;
var ySZ = 384;

sourceImg = null;
maskImg = null;
renderCounter = 0;

function shuffler(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var arr = [];

//console.log(arr);

function preload() {
  sourceImg = loadImage("3.jpg");
  maskImg = loadImage("3.png");
}

function setup() {


  main_canvas = createCanvas(xSZ * scl, ySZ * scl);
  main_canvas.parent('canvasContainer');


  imageMode(CENTER);


  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();



  for (i = 0; i < ySZ; i++) {
    pos[i] = [];
    for (j = 0; j < xSZ; j++) {
      arr[i * xSZ + j] = [];
      pos[i][j] = [];

      pos[i][j][0] = map(noise(i * yoff), 0, 1, j * scl, (j + 1) * scl);
      pos[i][j][1] = map(noise(j * xoff), 0, 1, i * scl, (i + 1) * scl);
      arr[i * xSZ + j][0] = j * scl;
      arr[i * xSZ + j][1] = i * scl;
      xoff += 0.01;

    }
    yoff += 0.01;

  }
  print("arr = " + arr)
  arr = shuffler(arr);
  print("arr = " + arr);
}



function draw() {
  
   for (i = 0; i < ySZ; i++) {
    for (j = 0; j < xSZ; j++) {

      pix = sourceImg.get(pos[i][j][0], pos[i][j][1]);
      mask = maskImg.get(pos[i][j][0], pos[i][j][1]);



   
      
       if (mask[0] > 50) {
         
         let brightness = pix[0] + pix[1] + pix[2] /3;
         pix[3] = 150;
         
        
        stroke('rgba(230,230,230,0.25)');
        print("y = " + i + " x = " + j);
        animate[num] = [];
        animate[num][0] = pos[i][j][0] * scl;
        animate[num][1] = pos[i][j][1] * scl;
        animate[num][3] = brightness/255 * sizeSq;
        animate[num][4] = pix;

        num++;
      }else{
            stroke('rgba(230,230,230,0.25)');
         strokeWeight(1);

 

      }

    }
  }

  for (c = 0; c < arr.length / 10; c++) {
    stroke('rgba(230,230,230,0.5)');
    strokeWeight(1);
    ellipse(arr[c][0], arr[c][1], 1, 1);
  }
  for (num = 0; num < animate.length-1; num++) {
    //noStroke();
    print("color value" + animate[num][4]);
 //   fill(animate[num][4]);
    //rect(animate[num][0] - halfSizeSq, animate[num][1] - halfSizeSq, animate[num][3], animate[num][3]);
  //     ellipse(animate[num][0], animate[num][1], animate[num][3]/3, animate[num][3]/3);
       if (abs(animate[num][0]-animate[num+1][0]) < 50){}
       
       line(animate[num][0], animate[num][1], animate[num+1][0], animate[num+1][1]);
       
       
  }


  print("done!");
  noLoop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}