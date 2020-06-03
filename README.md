## Creative Coding 2: Custom Pixel

Following the layering example given in class today, I have incoporated it into my code to have the ellipse's draw on top from when the mask is white. This did create some harsh edges between shapes that did not look good. To fix this, I changed the mask to have a more steady gradient between whatever colour was next to the white in the mask. I found that by extending, for example the black part of the mask, to be slightly over the white area it allowed the shape drawn to pick up some of the colour from the ellipses and have a nicer edge. 

The images above are photos from around my farm and the area I live in algorithmically processed with a lightly modified version of the [p5.js Pointillism example](https://p5js.org/examples/image-pointillism.html). The masks for each photo highlight various objects.
