## Powers of 10 PRINT

### Part 1

1. Groupings of small ellipses not unlike the stars in my PS3 atop of a green/dark blue background
2. Mountain shapes become apparent instead of the green/dark blue background
3. Ellipses change to become the crystal-like columns in my PS3
4. Increased detail on the columns and full zoom on the mountain shapes (should take up entirety of screen)

### Part 2

I've adjusted the example_fence.js code to fit my stars design for the first zoom level.
Initially I struggled with understanding how the design would be translated to pixel space, but talking to Tom helped me figure out how I could get my design to work.
I think I will fiddle around with how many 'stars' are drawn initially, and how they are grouped, as I think it would work better in clusters. But for now, I am happy with the progress.

### Part 3

I've added some initial code for the Voronoi diagram/mountain background pattern. It's using the d3.js library to calculate the vertices and how the cells should be drawn, but p5.js to actually draw the shapes.
I think what I want the code to do is actually take the stars as the vertices points and then draw the cells around each of the stars - each mountain will have it's own 'star', which then means when it is zoomed in, each set of columns will be contained inside it's own mountain.
I still have a lot to fiddle around with, especially cause I'm still trying to get my head around the whole 'drawing so that when it zooms in it doesn't redraw' thing.

### Part 3 cont.

I've now got the Voronoi diagram drawing properly - the clipping was affecting how the cells were being drawn at a higher zoom level, and am now passing the world_vertices of the cell polygon points through, so that the same colours are used across the different grids.
I've also added in code for redrawing the 'stars' as 'cities'. This is not quite working properly, as I believe I'm passing in the wrong variable, which causes them to be redrawn each time I zoom in. Currently working on fixing this.
