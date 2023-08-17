const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
var angle = 30;
var amount = 0;
var res_scale = 2;

let text;

function setup () {
  // create the drawing canvas, optimise for 3D and save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT,WEBGL);
    main_canvas.parent('canvasContainer');
    text = createGraphics(960*res_scale,960*res_scale);
    
}

function draw () {  
    fill(0,0); //Force Webgl to accept RGBa instead of RGB
    background(100); // Black Background
    
    //Global Rotation and position\\
    translate(-75-amount,25+amount*2,50);
    rotateX(radians(angle));
    rotateZ(radians(30));
    
    for (let i=0; i<amount; i+=1){
        texture(text);
        CreateText(i);
    }
    angle += 0.02;
    amount+= 0.01;
    
    //reset after 15
    if (amount >= 15) {
        angle = 30;
        amount = 0;
    }
}

//Function to modify the next iteration of text
function CreateText(x) {
    translate(0,0,x);
    rotateX(-radians(angle/40));
    text.fill( 255, 20+x*40, 20+x*(2*x) );
    text.smooth();
    text.textAlign(CENTER);
    text.textSize(800);
    text.text('6:45',480*res_scale,480*res_scale);
    plane(800);
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