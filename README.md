if(mask[0] < 5 && i < 3500 ){ //Black, background
  let pointSize = 10;
  strokeWeight(0)
  stroke(0)
  fill(pix[0], pix[1] , pix[2])
  rect(x, y, pointSize, pointSize,1);
}
else if(mask[0] > 100 && mask[0] < 200 && i < 4000) { //light Grey, Sky
  let pointSize = random(6 ,8);
  strokeWeight(0.5);
  stroke(255, 255, 255, 100)
  //fill(pix[0], pix[1], pix[2], 255)

  for(let ii = 0; ii < 10; ii++) {
    fill(211, 233, 242, 255 - (ii * 1000))
    ellipse(x, y, pointSize + (ii / 5), pointSize + (ii / 5))
  }

}

else if(mask[0] > 5 && mask[0] < 100) { //Dark Grey, Foreground
  let pointSize = 5;
  strokeWeight(0);
  rect(x, y, pointSize, pointSize,2)
}

else if(mask[0] > 200 && i < 2000){ //White, water
  let pointSize = random(2);

  for (let ii = 0; ii < 255; ii++) { //drawing transparent edges
    stroke(pix[0] - 5 , pix[1] - 5, pix[2] - 5, 350 - ii);
    strokeWeight(pointSize + (ii / 20))
  }

    line(x - random(5,20), y, x + random(5,20), y)
}

Fixes / Cleanup

  - Increased number of objects drawn
  - fixed mask 2 for input image 2

Added:

  + Fine tuned some variables (again)
  + Added outlines for objects drawn in the sky masks
  + Made sky objects all one uniform colour
  + New masks for images 2 + 3
  + Added Loop to draw soft circles for the sky

Issues / progress:

  - Water mask bleeds over other masks
  - Photoshop brush anti-aliasing means edges of masks are lighter than they should be, causing objects to be drawing
    in incorrect areas of the canvas 
