17.2.MDDN342 PS3
#### LANDSCAPE

My landscape was incepted as a tool to generate world maps for Dungeons & Dragons. The map is made up of tessellated hexagonal cells. Each cell is a javascript object which is initialised at a co-ordinate position. Each cell will generate a value for itself based on it's position an 2D perlin noise. This value determines the "State" of the cell:" whether it is land, sea, shallows, beach, or mountain. Once a cell knows it's value and state, it can calculate it's color.

Alongside the cells, the map has waves, squiggly lines that appear only in deeper oacean, and scale up in size and squiggliness as the ocean gets deeper. The waves are placed independantly of the cell grid but still with reference to the same 2d noise as the cells have - this is to help the map look a little more hand-drawn and less procedural. 

Cells' color is semi-fixed,  based on it's state and value. Each cell's state can easily be read by it's color but there are subtle variations in tone for each cell based on value. 

Cell objects can read the properties of adjacent cells with the Cell.getNeighbor() function. This opens up a huge amount of possibilities in defining the rules of the landscape. Here getNeighbors() is used to outline groups of land cells to create "islands".
This method is more powerful than just this though! It could be used to make many new type of unique terrain at more specific places such as:
	- beaches that only appear at the edge of shallow sea and land
	- grey, rocky cliffs where deep sea and land cell neighbor.
	- features like towns & forests in the middle of otherwise uninteresting plains of land cells

In the future I want to 
 

---
####WALLPAPER

*This nauty little number emulates classic seaside wallpaper styles, rejigged to mimic the swirling eddies of my first love: the ocean.*

The color scheme and drawing style of the glyphs is simplistic and almost childish, which I think gives a tenor of [seafaring whimsy](https://www.youtube.com/watch?v=cmt-MlMuPzg) I imagine this pattern being used as a wallpaper for a bathroom at a nice waterfront café or a child's room in a modern oriental bay home.
 

The **radialArrange()** method is the heart of this pattern. The pattern's radial arrangement is based off fibbonacci spirals, specifically those found in  the seed arrangement of sunflowers ![](./sunflower.jpg)
I think the most visually impressive part of the design is the spiral arms naturally formed by the arrangement of the glyphs. I  used a lot of negative space in the design to give these arms room to be appreciated.

The swirling pseudo-tesselation in this pattern is a refreshing take on the simple diamond tiling that can be seen on a lot of pale, ocean themed wallpapers.


###### Alternate Patterns

**radialArrange()** can be used to create a range of different patterns depending on the 'seed' - the number of nodes in the first ring of the pattern. At lower seed numbers, the fibbonacci spiral arms are bold, and effective. This effect decreases with higher seeds and, after a seed of around 6, the method will generate an arrangement that looks more like a series of rings than the churning eddies seen here.

At a seed of one, the pattern looks quite disordered.  ![](./debug1.jpg)

A seed of two creates a very bold, and interesting arrangement which I really like, and want to re-use in my landscape generator. ![](./debug2.jpg)

I almost settled on this 3-seeded pattern, but felt that a seed of 4 played a little more nicely with the square canvas. ![](./pattern3.jpg)

