let main_canvas = null;
let pos1_slider = null;
let tilt1_slider = null;
let pos2_slider = null;
let tilt2_slider = null;
let pos3_slider = null;
let tilt3_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

const fW = canvasWidth/3;
const fH = canvasHeight/3;

let setStroke = 0;
let numStroke = 0;
let r = 0;

const bWidth = 40;
let fWidth = 0;

let inter = 0;

let length = 0.0;
let rA = 0.0; //The Angle Ratio

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  angleMode(DEGREES);
}

function calculate(ang){
	rA = ang - (Math.floor(ang/90));
	length = (fW + (fW*(1-Math.sin(ang))));
}

function artStroke(ang, x){
    line((canvasWidth/fun[1])*cS, canvasHeight/2, (canvasWidth/fun[1])*(cS+1), canvasHeight/2);
    rotate((fun[cS]));
    artStroke(cS, A[]);
  } 
}

function letter(array[]){
	for(i:array.length){
		artStroke(array[i]);
	}
}

/*
function rGen(){
  r = Math.floor(random(0, 40));
  fWidth = bWidth - r;
}*/

function draw(){
  background('#80dfff');
  fill(0);
  calculate(45);
  ellipse(canvasWidth/3, canvasHeight/3, 100, 100);
  //artStroke(A[1], A);
}

// let savedValues = {
//   "A":
//     {
//       artStroke(255, 0, 0, 0);
//       },
//       artStroke(315, 0, 0, 0);
//       },
//       artStroke(0, 0, 0, 0);
//       }
//     }
// }

// const A = [225, 0, 315];

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

