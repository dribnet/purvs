## Creative Coding 2: Custom Pixel

-22/5- 2nd Commit
I am still using the same images as i haven't found final images to use yet, although I have changed the third image from the black and white gradient to a ranbow gradient so I could test my sketch easier and see different effects my code had.
The algorithm draws ellipses, squares and triangles. The shape that is drawn depends on the value of the colour from each point that is picked, so ellipses are a third of the colour space, squares the next third and triangles the last third. The shapes also still shrink over time which I think makes a nice layered affect where you can sometimes see bigger shapes that haven't been covered. The shapes also have a random rotation value to add some visual differences and prevent a grid-like appearance 
I have tried out a masking effect where the masked area draws in greyscale, I have used a simple circle in the middle of the canvas for all the images to test it out. I like the effect and will play around with maybe just desaturating the colours or inverting them next.

-18/5-
Im not sure what sort of theme I want to go with for the images yet, as placeholders to play around with I used a render from a previous project, a picture from a game that i happened to have on my USB and the same Te Aro campus photo as before. 
I removed the mask on my first two images, I want to play around with colour and try have over or under saturation in the masked area. 
For the algorithim I have the ellipses draw and get smaller over time, they start out quite large then draw smaller and smaller which slowly adds in extra detail to the image and creates a nice layered effect. the ellipses also have a range when they draw so that they pick a random size between two values (which get smaller over time).
