## Creative Coding 2: Custom Pixel

To draw my custom pixels, my program takes a grid approach to drawing, going left to right, top to bottom, 5 pixels at a time.
In the areas of the mask which are white, the 'pixel' is draw as either an ellipse or a rect depending on colour value, with the x and y having slight variation (random change between -5 and 5). The shape is a rect when all 3 rgb values are greater than 175, meaning they're closer to white. All other values are drawn as an ellipse, which is slightly bigger than a rect.
In the areas of the mask which are black, the pixel is a small line with varying position and weight. This part relies heavily on random numbers, as the strokeweight, and all 4 of the position values are affected by random numbers in some way.
I'm really liking how this method is working so far, I feel like it gives a sort of painted effect, especially on the background of output_3.
I would definitely endeavour to make the rendering more detailed and complex, but I am happy with this as a starting point.
As far as my images go, I picked these because I think the lighting is really strong and interesting, giving avenue to a lot of slight colour variations.
I also picked these because I've always been proud of these photos, I think it really shows off how beautiful my cats are and I miss them as I haven't seen them since January since they live with my family.


The images above are photos of my cats from back home, algorithmically processed with a lightly modified version of the [p5.js Pointillism example](https://p5js.org/examples/image-pointillism.html). The masks for each photo highlight various objects. Replace this text with your own which explains the source of your photos, masking, and applied algorithm.
