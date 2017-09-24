##17.2.MDDN342 PS3

###Generative Landscape
My goal for this part of the project was to create a representation of a world that you would see in a video game. At first I was using a colour scheme that you would expect to see for an earth based world.  However I decided that it wasn't very interesting so I changed the colour scheme and the landscape is now representative of an alien planet. 

The grid I have used to create the landscape is made of cubes as I wanted it to appear three dimensional.  The noise value for each tile is stored in an array and used to determine whether a tile will be land, mountain or water.  There is a second array of noise values which is used to determine if a land tile can host a city or forest.  For a land tile to host a city it also needs to be near water and I have created a function which checks to make sure this is the case.