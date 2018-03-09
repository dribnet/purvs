const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
const X = 50;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(204); // light gray background
  strokeWeight(3); // Stroke weight to 8 pixels
  stroke(0);

//number 1 start
fill(51);

  beginShape();
  vertex(100, 330);
  vertex(70, 330);
  vertex(70, 390);
  vertex(90, 410)
  vertex(190, 390);
  vertex(210, 350);
  vertex(190, 330);
  vertex(160, 330);
  vertex(180, 80);
  vertex(160, 60);
  vertex(100, 60);
  vertex(70, 90);
  vertex(70, 130);
  vertex(90, 150);
  vertex(100, 130);
  endShape(CLOSE);

fill(255);

  beginShape();
  vertex(120, 350);
  vertex(90, 350);
  vertex(90, 410);
  vertex(210, 410);
  vertex(210, 350);
  vertex(180, 350);
  vertex(180, 80);
  vertex(120, 80);
  vertex(90, 110);
  vertex(90, 150);
  vertex(120, 150);
  endShape(CLOSE);

  line(100, 330, 120, 350);
  line(70, 330, 90, 350);
  line(100, 60, 120, 80);
  line(70, 90, 90, 110);
//number 1 end

//number 1 start
fill(51);

  beginShape();
  vertex(X+300, 330);
  vertex(X+270, 330);
  vertex(X+270, 390);
  vertex(X+290, 410);
  vertex(X+390, 390);
  vertex(X+410, 350);
  vertex(X+390, 330);
  vertex(X+360, 330);
  vertex(X+380, 80);
  vertex(X+360, 60);
  vertex(X+300, 60);
  vertex(X+270, 90);
  vertex(X+270, 130);
  vertex(X+290, 150);
  vertex(X+300, 130);
  endShape(CLOSE);

fill(0);
  beginShape();
  vertex(X+300, 330);
  vertex(X+270, 330);
  vertex(X+270, 390);
  vertex(X+290, 410);
  vertex(X+390, 390);
  vertex(X+410, 350);
  vertex(X+390, 330);
  vertex(X+360, 330);
  vertex(X+320, 220);
  vertex(X+300, 200);
  endShape(CLOSE);

fill(255);

  beginShape();
  vertex(X+320, 350);
  vertex(X+290, 350);
  vertex(X+290, 410);
  vertex(X+410, 410);
  vertex(X+410, 350);
  vertex(X+380, 350);
  vertex(X+380, 80);
  vertex(X+320, 80);
  vertex(X+290, 110);
  vertex(X+290, 150);
  vertex(X+320, 150);
  endShape(CLOSE);

  line(X+300, 330, X+320, 350);
  line(X+270, 330, X+290, 350);
  line(X+300, 60, X+320, 80);
  line(X+270, 90, X+290, 110);

fill('#fae');
  beginShape();
  vertex(X+320, 350);
  vertex(X+290, 350);
  vertex(X+290, 410);
  vertex(X+410, 410);
  vertex(X+410, 350);
  vertex(X+380, 350);
  vertex(X+380, 220);
  vertex(X+320, 220);
  endShape(CLOSE);

//number 1 end

//number 2 start

fill(51);

beginShape(CLOSE);
  vertex(X+780, 330);
  vertex(X+800, 350);
  vertex(X+780, 390);
  vertex(X+560, 410);
  vertex(X+540, 390);
  vertex(X+540, 330);
  bezierVertex(X+900, 80, X+600, 60, X+590, 160);
  vertex(X+560, 150);
  vertex(X+540, 130);
  bezierVertex(X+590, -20, X+980, 50, X+630, 330);
  vertex(X+780, 330);
endShape();

fill(255)

beginShape(CLOSE);
  vertex(X+800, 350);
  vertex(X+800, 410);
  vertex(X+560, 410);
  vertex(X+560, 350);
  bezierVertex(X+920, 100, X+620, 80, X+610, 180);
  vertex(X+560, 150);
  bezierVertex(X+610, 0, X+1000, 70, X+650, 350);
  vertex(X+800, 350);
endShape();

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
