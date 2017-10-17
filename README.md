## Rainbow Spiral Map

The rainbow spiral map is a gigantic diamond shape consisting of approximately 1.5 million octagon zones.  Each octagon zone is placed on the map in a specific order with the first zone located slightly to the left of the maps center.  Every following zone is placed on the map based on the location of the zone that precedes it.

The colour palette of the map uses the HSB colour mode.  Beginning from the first octagon zone, there is a repeating pattern consisting of 24 colours used to determine the colour of each zone.  This creates the rainbow spiral effect present at the highest zoom level.

Each octagon zone also consists of a set of 24 glyphs. At the higher zoom levels the glyphs consist of a simple shape.  This shape is chosen using the perlin noise value obtained from the x and y co-ordinates of the glyphs center.  As you zoom into the map the glyphs start transforming into intricate patterns made by rotating the shape around it's center.

The zooming functionality of each octagon zone has been designed to be an interesting and constantly evolving experience.  If you start from the center of a zone at the highest level and then zoom into the deepest level you will see more details become visible the deeper you get. At the center of a zone there is also glyph that represents the primary colour of the zone.  This glyph only becomes visible at the deepest zoom levels and further adds to the zooming experience.
