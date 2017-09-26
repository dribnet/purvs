## 17.2.MDDN342 PS3

### 22/09
When looking into this first part of the assignment, I was really interested in using geometric shapes to create a tiling pattern.
I've always been interested in isometric views - I'm a big fan of the game Monument Valley, which takes inspiration from M.C. Escher drawings, optical illusions, and impossible objects.

I've decided to create a cube for my tiling pattern. So far, I've just been working on figuring out all the math required to make such an object. I mucked around with drawing it using sheared and rotated rects to begin with, but this got really confusing really quickly. So, I looked up how to draw hexagons (much easier than I thought), and then set about manipulating those first 6 points of the hexagon that I drew to get the rest of the cube's perspective.

### 24/09
I've now slightly changed the slider controls - the first turns on/off the randomised rotation of the cubes, while the second still controls the size of the cubes.
I've also reduced the number of cubes drawn, as I feel they are quite an intricate shape, so less is more, especially as bigger cubes allow you to see the detail more easily.

When refining this design I began to think about how I could make the design easier to look at. I knew colour would make a huge difference, but the way I'd draw the cube was a bit hacky, so this didn't work as I had originally drawn them. So, I decided to spend several hours reworking how I drew the 'supporting beams' of the cube so that I could use fills and have a shape I could use colour with! It's looking great now, and I'm hoping to try out some cool combinations/randomised colour palettes when I pick up on this again tomorrow.

### 25/09
There is now an array of colour palettes randomly chosen each time the wallpaper is rendered/clicked, this is a (technically 3-dimensional) array of 8 colour palettes each containing three colours - a background, stroke and cube fill colour. The palette is chosen through using focusedRandom().

### 26/09
I've now started work on the landscape part of this assignment - again I've taken inspiration from Monument Valley with the colours and shapes used. The scene is made up of a gradient sky, stars, mountains and eventually a column/columns in the center front of the landscape. I set about creating the gradient sky first which was quite a simple lerpColor() between two colours, and then drawing the stars in a grid with a random X and Y offset. Then I began drawing the mountains, which are essentially just layered triangles darkening in colour the closer they get to the front of the scene.
The stars and mountains both have random variables that change how they are drawn each time the mouser is clicked.

### 27/09
For the columns I took my cube code and reworked it to create these 'infinite' columns that appear to be rising up from the ground thousands of meters below.
I also created functionality for drawing a center column with a number of smaller columns randomly drawn surrounding it using x, y, and scale offsets.
The colouring of the columns also changes (lerps) based on the y offset. The result is a really pleasant piece to look at with several different elements that draw the eye's attention.
