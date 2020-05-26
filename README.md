## Creative Coding 2: Custom Pixel

For my theme, I am interested in exploring concepts related to water, landscape and urban spaces, as I am interested in exploring difference in textures to indicate different portions/movements of the subject matter within my photos.

For the mask, I modified the shape for my if statement, switching from ellipses to thin, straight lines, to illustrate the movement of the water as well as the reflection of the mountains, and the nearby village. I wanted to experiment with two very contrasting textures between the land and the water, and so for the mountains, I modified the else statement to draw rectangles to illustrate the details of the mountain-face, the aurora borealis and the lights of the town.

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
  rect(x, y, pointSize, pointSize);
}

I am pleased with the result, and feel that the different shapes and textures display the different characteristics of the landscape versus the lake very nicely. I was also conscious to make sure that the background was black, and that the shapes were not too big or small, so that enough of the background could be seen to indicate that the picture is pixelated.
