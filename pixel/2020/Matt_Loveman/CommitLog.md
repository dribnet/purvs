## Custom Pixel Commit Log
COMMIT ONE <br/>
Attempted to add triangle that point towards the previous triangle. At the moment it doesn't work, which I suspect is due to how the script assigns variables. I will have to look into getting around this. <br/>
I should mention for a while now I have been fascinated by simple rules creating complex "life": like Conway's "the Game of Life" and Craig Reynolds "Boids". My first instinct way to overlay some static Boid like shapes over an image of the Wellington Harbour - As a Landscape architecture major I have a great appreciation for Wellingtons waterfront and what it has done for world wide development in the public realm as well that its a enjoyable place I frequent a lot. This would present some natural aspects to the view and could create a powerful image where colour is only shown in the Boids. <br/>
For the sake of what I intend for the triangles I will be referring to them as Boids, despite them really just being triangles.<br/>
<br/>
COMMIT TWO <br/>
Fixed the rotation of the Boids. The issue came around as the `yprev` variable was being given the x coordinate so would only flip vertically. This meant I wasn't having an issue with how values are stored. At the moment the only point towards the previous triangle but this will have to do as running a simulation for a full Boid effect would be wasteful and time sinking <br/>
I added some Mask functionality in where the opacity is dictated by the mask image's value. more specifically the red channel but seem as how greyscale colours have equal RGB it acts as a value detector.<br/>
<br/>
COMMIT THREE <br/>
I added a "second pass" that only displays Boids within the mask which allows for greater density within the masked area. At the moment it is quite crude as I literally only run the script again, however since this project is grade on the final image as an actual image file, I dont really need to worry about runtime issues except for when testing so I will not be spending much time to refine this system. <br/>
I also played around by generating the Boids in zones so the would more accurately point towards Boids near themselves. This technically worked but how I thought it would turn out isn't how I hoped it would turn out. It however does make an interesting effect where all the Boids line up<br/>
I finally introduced a gradient mask to text if my system works.<br/>
<br/>
COMMIT FOUR<br/>
The orderly line look didn't look very good to me so I moved back to the non segmented chaos. However I left in the code and set the segments to 1 just in case I wanted to use it later
To really accentuate details I thought most important in the image I decided to add a secondary mask that would affect the "third pass", I messed around with combining the mask effects but decided to just leave it my itself for maximum effect.
The swirly nature of some of the background Boids made the main picture a little to prominent so I re-added the segmentation to the "first pass" and decreased the Boid size, so that the background image is makes an impression but is less pronounced to really highlight the second and third passes. <br/>
<br/>
FINAL<br/>
Added in the proper images and tweaked some parameters and the mask to create the effect I was looking for. I messed around with background colours but found that a plain black background emphasised the highlights more and really showed what I was thinking of when I first thought of this idea.<br/>
In the end it really did look like a snapshot of Boids roaming around the canvas so I was quite happy with how it turned out.
