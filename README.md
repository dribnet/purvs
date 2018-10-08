## Part 3

I've updated the code so that there is now one big cell which you can see when zoomed all the way out. As you zoom in, you see hundreds of indvidual cells which make up this cell. Zooming in even more, you see each of these cells are themselves made of individual sub-cells.

My focus now is finding a way to optimize the code. It runs well until you reach the third layer of cells, after which it slows down considerably as it's having to draw tens of thousands of cells.