if(mask[0] < 5 && i < 3000 ){ //Black, background
  let pointSize = 9;
  strokeWeight(0)
  rect(x, y, pointSize, pointSize,1);
}

else if(mask[0] > 5 && mask[0] < 200) { //Grey, Foreground
  let pointSize = 4;
  strokeWeight(0);
  rect(x, y, pointSize, pointSize,2)
}

else if(mask[0] > 200 && i < 2000){ //White, water
  let pointSize = random(4, 10);
  stroke(pix)
  strokeWeight(pointSize)
    line(x - random(5,20), y, x + random(5,20), y)
}

Added and fine tuned the random variables drawing the water
Updated mask to include rope in the foreground

Issues:
  - Water mask bleeds over other masks
  - water looks flat, might add transparency to edges to soften edges make it look more fluid.

  - Might add a third mask for the sky to further differentiate it between the background
