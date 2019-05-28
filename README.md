## Creative Coding 2: Custom Pixel

 Ive reworked my code quite a bit to make it much smoother when running. Previously i had been checking against every single edge pixel that was held in the array of edge points. This meant for every fractured piece that was on an edge, about 7200 loops were running when checking for the correct edge point. I refined this by adding an extra parameter, one that includes the size of the piece. This size is then used to only check through edge pieces that are in the direct area around the piece, so far fewer loops are needed for the calculations. 

 Ive also adjusted to script to remove the randomization. I liked the fractured appearence however it looked too messy. Ive instead added an odd/even variation to the tiles. The are bigger at top when even and bigger at the bottom when odd, this creates a cleaner mosaic tile appereance. 

 Im still trying to figure out how to draw the outlines, as the piece needs certain strong outlines. I might see if i can experiment with multiple masks, as its going to be very difficult to code it naturally. 