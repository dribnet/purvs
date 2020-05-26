if(mask[0] < 5 && i < 3000 ){ //black
  let pointSize = 8;
  strokeWeight(0)
  rect(x, y, pointSize, pointSize,1);
}

else if(mask[0] > 5 && mask[0] < 200) { //grey
  let pointSize = 4;
  strokeWeight(0);
  rect(x, y, pointSize, pointSize,2)
}

else if(mask[0] > 200 && i < 1500){ //white
  let pointSize = 6;
  stroke(pix)
  strokeWeight(pointSize)
    line(x - 15, y, x + 15, y)
}

Made new mask with grey where the junk is, my last plan to draw more pixels didn't work and ended up drawing multiple pixels over each other\

New if statements allow
  - ability to differentiate between grey, white and black portions of the mask_1
  - control the amount of pixels drawn in each mask area

My original photo meant that the image was hard to discern what it was. My new if statements along with the masks ability to control the number
of pixels in each sections means I can control the 'resolution' of each section, highlighting the focus of the image.

Fine tuned the drawing of water and background. original water looked like it was bleeding into the surrounding objects.

Future updates
Add randomness  to length of stroke for the water, to make it feel more fluid / dynamic
desaturate certain parts of the image? 
