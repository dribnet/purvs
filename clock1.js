const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  fill(0);
  background(20); // light gray background
  stroke(150, 200, 100); // Stroke weight to 8 pixels
  strokeWeight(2)
  for(let ypos=height/2-100;ypos<height/2+150;ypos+=50){ //first digit
    ellipse(width/13,ypos,40,40);
  }
  for(let ypos=height/2-100;ypos<height/2+150;ypos+=50){ //second digit
    ellipse(width/6,ypos,40,40);
  }
  for(let ypos=height/2-100;ypos<height/2;ypos+=50){ //top5
    ellipse(width/2.5,ypos,40,40);
  }
  for(let ypos=height/1.6;ypos<height/2.2;ypos+=50){ 
    ellipse(width/3.5, ypos, 40,40);
  
 }
  for(let ypos=height/2-100;ypos<height/2;ypos+=50){ //top55
    ellipse(width/1.5,ypos,40,40);
  
}
    ellipse(width/3.5, height/2.2, 40, 40); //dots
    ellipse(width/3.5, height/1.6, 40, 40); //dots


ellipse(width/2.5, height/2, 40, 40);
ellipse(width/2.2, height/2-100, 40, 40); 
ellipse(width/1.97, height/2-100, 40, 40); 
ellipse(width/1.79, height/2-100, 40, 40); 
ellipse(width/2.2, height/2, 40, 40); 
ellipse(width/1.97, height/2, 40, 40); 
ellipse(width/1.79, height/2, 40, 40); 
ellipse(width/1.79, height/1.66,40,40);
ellipse(width/1.79, height/1.43,40,40);
ellipse(width/1.97, height/1.43, 40, 40); 
ellipse(width/2.2, height/1.43, 40, 40); 
ellipse(width/2.5, height/1.43,40,40);

ellipse(width/1.5, height/2-100, 40, 40); 
ellipse(width/1.39, height/2-100, 40, 40); 
ellipse(width/1.30, height/2-100, 40, 40);
ellipse(width/1.22, height/2-100, 40, 40);
ellipse(width/1.5, height/2,40,40);
ellipse(width/1.5, height/2.5,40,40);
ellipse(width/1.39, height/2,40,40);
ellipse(width/1.3, height/2,40,40);
ellipse(width/1.22, height/2,40,40);
ellipse(width/1.22,height/2+100,40,40);
ellipse(width/1.3, height/2+100,40,40);
ellipse(width/1.5, height/2+100,40,40);
ellipse(width/1.5, height/2+50,40,40);
ellipse(width/1.22, height/2+50,40,40);
ellipse(width/1.39, height/2+100, 40, 40); 





 
  // The rectangle draws on top of the ellipse
  // because it comes after in the code

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
