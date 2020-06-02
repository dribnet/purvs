## Creative Coding 2: Custom Pixel

With my third experiment, I adjusted my stroke weight and ellipse diameter, as too much of the black background was coming through. This experiment made me realize that if I wish to continue with this theme, then I will need to consider having a mask for each layered aspect of the photo, so that the foreground, mid ground and background are all distinctly visible and not lost. This will be a great opportunity to start experimenting with more shapes. After seeing the results for my third experiment, I am considering changing my subject material, and simplify it.

if(mask[0] > 128) {
  let pointSize1 = 2.5;
  stroke(pix);
  strokeWeight(pointSize1)
  line(x, y, x + 70, y);
}
else {
  let pointSize = 12;
  noStroke();
  fill(pix);
  ellipse(x, y, pointSize, pointSize);
}
