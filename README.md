## PS4 Infinite LandScape Part 3

Got my landscape drawing infinitely with some noise going on, took a bit of playing around and had to steal some of the example code but its working. From here I want to start adding in more details to different zoom levels and add some more variety to the landscape in general (thinking biomes). I'll try and add some waters and trees next before moving onto mountains. Lag doesn't seem to be too bad at the moment, so I won't worry about that now, but will keep it in mind moving forward. 

Added in water and mountains, although getting clipping issues with mountains tiles if they go outside their grid. I had to change the noise value i was using as it was jumping to far between two tiles and didn't look like a proper terrian because of this. I will look into making it have bigger jumps between two tiles noise value the more zoomed out you are.

Had to tone down the height of the map to avoid the clipping issue, but this really takes away from the terrian and adds a lot less variety so I'm not happy with this change. I'm also now using a second noise value to set what biome the tile is in, which is either: desert, field, forest, beach, or ocean.