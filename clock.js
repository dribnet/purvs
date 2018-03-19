const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function draw () {
  background(0)

  translate(200, 200);
 rotate(-90)

  let h = hour();
  let m = minute();
  let s = second();


  noFill()
    strokeWeight(40);
  stroke(74, 143, 229);
  let end3 = map (h % 12, 0, 12, 0, 360);
  arc (0, 0, 300, 300, 0, end3); 

  strokeWeight(20);
  stroke(75, 229, 98);
  let end2 = map (m, 0, 60, 0, 360);
  arc (0, 0, 300, 300, 0, end2); 

  strokeWeight(8);
  stroke(234, 168, 60);
  let end1 = map (s, 0, 60, 0, 360);
  arc (0, 0, 300, 300, 0, end1); 

  noStroke()
  
    fill(74, 143, 229);
  let end33 = map (h % 12, 0, 12, 0, 360);
  arc (0, 0, 100, 100, 0, end33); 
  
    fill(75, 229, 98);
  let end22 = map (m, 0, 60, 0, 360);
  arc (0, 0, 80, 80, 0, end22); 

  fill(234, 168, 60)
  let end11 = map (s, 0, 60, 0, 360);
  arc (0, 0, 50, 50, 0, end11); 
    

rotate(90)
stroke(214, 0, 0)
strokeWeight(1)
   fill(240);
   textSize(25)
   text (h + ':' + m + ':' + s, -50, 5)
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
