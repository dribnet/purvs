## Creative Coding 2: Custom Pixel
COMMIT ONE <br/>
Attempted to add triangle that point towards the previous triangle. At the moment it doesn't work, which I suspect is due to how the script assigns variables. I will have to look into getting around this. <br/>
I should mention for a while now I have been fascinated by simple rules creating complex "life": like Conway's "the Game of Life" and Craig Reynolds "Boids". My first instinct way to overlay some static Boid like shapes over an image of the Wellington Harbour - As a Landscape architecture major I have a great appreciation for Wellingtons waterfront and what it has done for world wide development in the public realm, which I may or may not elaborate further on. This would present some natural aspects to the view and could create a powerful image where colour is only shown in the Boids. <br/>
<br/>
COMMIT TWO <br/>
Fixed the rotation of the Boids. The issue came around as the `yprev` variable was being given the x coordinate so would only flip vertically. This meant I wasn't having an issue with how values are stored. At the moment the only point towards the previous triangle but this will have to do as running a simulation for a full Boid effect would be wasteful and time sinking <br/>
I added some Mask functionality in where the opacity is dictated by the mask image's value. more specifically the red channel but seem as how greyscale colours have equal RGB it acts as a value detector.




The images above are photos of Wellington CBD algorithmically processed with a lightly modified version of the [Pointillism Example done in p5.js](https://p5js.org/examples/image-pointillism.html). The masks for each photo highlight various objects. Replace this text with your own which explains the source of your photos, masking, and applied algorithm.
