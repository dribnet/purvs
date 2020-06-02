## Creative Coding 2: Custom Pixel

In further experimenting with my theme, I decided to experiment with ellipses to create the background of the image with the foreground once again, being drawn out using lines, so I only slightly altered my if statements. I tried increasing the diameter of my ellipses, however, I discovered that this made it difficult to see the details of the background versus the foreground.

if(mask[0] > 128) {
  let pointSize1 = 1;
  stroke(pix);
  strokeWeight(pointSize1)
  line(x, y, x + 70, y);
}
else {
  let pointSize = 10;
  noStroke();
  fill(pix);
  ellipse(x, y, pointSize, pointSize);
}

This experiment was interesting, as it made me realize that photos that are not well lit will not show up well after being pixelated. While I was able to capture some of the detail of the buildings and trees, it is very difficult to recognize what they are. There was also a bug in automatically saving my thumbnail and preview, so I had to manually save both individually. I am currently trying to fix that.
