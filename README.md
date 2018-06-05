## Artificial Painting

These artificial paintings were created to try to reflect the high-definition pixel based images in a paint-like format, mostly in terms of what is in focus in the pictures. In order to properly represent this "focus on focus" I have created a series of three image layers, all taken from the original photo. The first layer is the original photo, unedited. This layer acts as an input for the base coat of paint that will happen. This base layer consists of large brush strokes, that don't allow for much detail to get through, which allows this layer to represent the "out of foucs" elements in the original photo. The second layer creates the "somewhat in focus" elements of the painting. The input image for this is a png file which has all of the out of focus elements erased from it, leaving only alpha space. The brush strokes for this paint layer are medium in size, allowing for more definition in the painting, but not enough to show all of the detail needed. The third and final layer creates the focal point of the image. In the cases of my photos, that would be the center stomata of the flowers. This layer has an input of only the elements of the photo that are completely in focus, painting very fine and small brush strokes onto the image in order to show all of small detail that is there. The result is an artificial painting with a sense of distance and focus.

In order to create this, I originally was going to use the standard masking technique used in the base code provided by Tom. I created mask images with three layers to them, and tried out some renders. The code, however, didn't seem to want to work. I tried using these default masks for ages before finally adapting my code in order to create the images and effects that I wanted. This resulted in me photoshopping the base input image into three images, using png image files to make sure that no bursh strokes were painted into the wrong places, acting as an "if else" statement for when and where to paint finer or larger brush strokes.

The code created is now a series of three main for loops which allow for three seperate image renders that happen in a specific order to create the layering effect needed. Each for loop is contained within it's own function, to be called upon during the drawing in order by only allowing them to run during a certain point of the render by using the "renderCounter" variable and a series of "if" statements.

The final images created do look like paintings, with a very unique "melting" look to them. They allow for a sense of depth, and also create a point in the image which the viewers eye is drawn to, just like a proper painting should.