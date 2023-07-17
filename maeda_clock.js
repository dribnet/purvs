// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("yOUr mAEdA clOck cOdE gOEs hErE", width/2, height/2);



  function clock(x, y) {
    fill(255);
    ellipse(x, y, 100);
    stroke(0);
    strokeWeight(3);
    beginShape(LINES);
    vertex(x, y-40);
    vertex(x, y);
    vertex(x+30, y);
    vertex(x, y);
    endShape();
  }

  scale(.3);
  clock(100, 100);
  clock(210, 100);
  clock(320, 100);
  clock(430, 100);
  clock(430, 210);
  clock(430, 210);
  clock(430, 320);
  clock(430, 430);
  clock(320, 430);
  clock(210, 430);
  clock(430, 540);
  clock(430, 650);
  clock(430, 760);
  clock(320, 760);
  clock(210, 760);
  clock(100, 760);

  clock(650, 210);
  clock(650, 650);

 
  clock(870, 100);
  clock(870, 210);
  clock(870, 320);
  clock(870, 430);
  clock(870, 540);
  clock(870, 650);
  clock(870, 760);
  clock(980, 760);
  clock(1090, 760);
  clock(1200, 760);
  clock(1200, 650);
  clock(1200, 540);
  clock(1200, 430);
  clock(1200, 320);
  clock(1200, 210);
  clock(1200, 100);
  clock(1090, 100);
  clock(980, 100);

  translate(540, 0);
  clock(870, 100);
  clock(870, 210);
  clock(870, 320);
  clock(870, 430);
  clock(870, 540);
  clock(870, 650);
  clock(870, 760);
  clock(980, 760);
  clock(1090, 760);
  clock(1200, 760);
  clock(1200, 650);
  clock(1200, 540);
  clock(1200, 430);
  clock(1200, 320);
  clock(1200, 210);
  clock(1200, 100);
  clock(1090, 100);
  clock(980, 100);

}
