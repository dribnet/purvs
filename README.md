  if(mask[0] < 5 && i < 3500 ){ //Black, background
    let pointSize = 10;
    strokeWeight(0)
    stroke(0)
    rect(x, y, pointSize, pointSize,1);
  }
  else if(mask[0] > 100 && mask[0] < 200) { //light Grey, Sky
    let pointSize = 10;
    strokeWeight(0);
    fill(pix[0], pix[1] - 0, pix[2], 200)
    ellipse(x, y, pointSize, pointSize)
  }
  else if(mask[0] > 5 && mask[0] < 100) { //Dark Grey, Foreground
    let pointSize = 4;
    strokeWeight(0);
    rect(x, y, pointSize, pointSize,2)
  }
  else if(mask[0] > 200 && i < 2000){ //White, water
    let pointSize = random(2);

    for (let ii = 0; ii < 255; ii++) { //drawing transparent edges
      stroke(pix[0], pix[1], pix[2], 350 - ii);
      strokeWeight(pointSize + (ii / 20))
    }
      line(x - random(5,20), y, x + random(5,20), y)
  }


Fixes / Cleanup

  - Decreased number of objects drawn

Added:

  + Fine tuned some variables
  + Added soft edges and water transparency

Issues / progress:

  - Water mask bleeds over other masks
  - Image 2's mask uses wrong gray mask, doesn't work with new code.
  - Need to redraw / update mask for images 2 and 3 
