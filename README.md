# Hex Map Generator

An overworld terrain map generator for tabletop games. The map is aimed at people who want to create a homebrew Dugeons & Dragons campaign - they can scroll through the map a until they find a set of continents they like and use them as a basis for their lore.
While this program is designed for role playing tabletop games, the hexagonal grid system means that these maps would also be suited for territorial strategy games like Risk, or Setlers of Catan.

The map is made tessellated hexagonal tiles. At deeper zoom levels, the map draws glyphs on the map at key landmarks. The tiles each have 3 different perlin noise values that determine what terrain type they are, the biome they are in, and which glyphs are drawn. 


## Biomes
The map is split into 4 biomes:

	- Plains: Lush, grassy plains surrounding thick forests.

	- Mountains: Colder, rockier, and more arid than the forests.

	- Desert: Bone dry & covered in sand.

	- Islands: Smaller, sandy landmasses dotted with rocks and vegetation.

Each biome has its own set of terrain types & a corresponding color pallette. These are defined by arrays in "/biomes.js" these arrays pair noise value thresholds (between 0 and 1) with color values and names of terrain types. The sketch checks the "bioNoise" of a tile and picks a corresponding biome array from that value.
After the biome is determined, the sketch makes another noise value from the x,y position of the tile. This value is used to determine the terrain type of the tile - for example, in most biomes, any tile with a value below 0.5 is a sea tile.
Each terrain type has a single set color, however ,  this color can vary slightly depending on a tile's noise value. Depending on how close to the threshold for the next terrain type in the order, the tile's color will be a blend of the color values for both types. 

## Zoom Scaling

As the sketch zooms, the viewport will show less tiles, and more glyphs.
At it's most zoomed out, the map will render larger hex tiles with less frequency. This abstracts the composition of the map into a simplified, chunky monet painting. Scaling improves performance so the user can actively explore their worldsape without significant loading delays. Tile scaling only happens for zoom levels 0 & 1, at higher zoom levels, the sketch uses the same "native" size for tiles.

At & after zoom level 2 (starting zoom level), the tiles will stop changing size. The scaling that happens inherently when zooming will still occur but tiles will remain a constant size in the world space. This zoom level is where the map starts to focus on glyphs -  symbols marking significant points. As a general rule, zooming in further will reveal more glyphs; the exact rules to this pattern is different for every glyphs though.
For example - forest tiles will draw multiple tree glyphs per tile at high zoom levels, giving the appearance of a thick forest as opposed to a forest marker on a map. 
The bone glyphs on the other hand, are lonely anomalies in their sparse domain and do not increase in regularity at all with increased zoom.

## Glyphs
Each biome has different landmarks with unique corresponding glyphs. 
The Plains biome is home to forests. As zoom increases, these forests become more dense.
The Mountains biome has hills, mountains & snowy peaks. The snowy peaks are rare and signify *very* tall moutnain ranges.
The Desert's glyphs are scattered widely and not clustered as in the mountains and plains. Here you will see sun-bleached skeletons in the harsh, dryer areas. The footsteps of living nomads can be found in the more forgiving parts of the desert, especially around oases.
There are no glyphs for the Island biomes, as I feel the rock & vegetation tiles are enough to keep the space visually interesting.

#### Glyphs You Will See:

- Plains biome
	- Forest
		- clustered in "forest" and "deep_forest" tiles.
		- drawn with randomised x/y offset for a hand-drawn feel.

- Mountain biome
	- Hills
		- drawn over "cliff" terrain tiles.
	- Mountain
		- drawn over "mountain" tiles.
	-Snowy Mountain
		- drawn on "mountain" tiles with high values.

- Desert biome
	- Bones
		- scattered widely across dry sand tiles.
	- Footsteps
		- randomly ditributed in inland tiles. Clusters in tiles with higher noise values.

- Islands biome
	-none
- Ocean (all biomes)
	- Waves

### Scatter
The third type of noise in the sketch is scatter noise. This only comes into play when glyphs are being drawn. Scatter noise is drawn from a very volatile noise map and is basically a random number generator with an x & y seed. Scatternoise is used to make the positioning of the glyphs feel more hand-drawn. Drawing an identical glyph on each tile of a given type makes the map look rigidly formulated; scatter noise alleviates this by reducing the number of glyphs in an area and randomising their positioning.



I used this article extensively for information on hex grids. I cannot reccomend it enough
https://www.redblobgames.com/grids/hexagons/