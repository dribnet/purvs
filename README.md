17.2.MDDN342 PS3

*This is a test for PS3 to test different tessellations. I am exploring the theory of wallpaper groups. 
All possible permutations of patterns can be mathematically defined by 17 sets of rules called Wallpaper groups. In my experimentation I want to define a wallpaper group to work within before I make the design.*


#### Wallpaper Groups
A table with descriptions and diagrams of the wallpaper groups can be found [on wikipedia](https://commons.wikimedia.org/wiki/Wallpaper_group_diagrams)
Clark University has a less mathematical explaination. [here](http://www2.clarku.edu/~djoyce/wallpaper/seventeen.html)

A repeating pattern can always be defined by a quadrilateral polygon in which all opposite sides are parallel. ![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Wallpaper_group_diagram_pgg.svg/150px-Wallpaper_group_diagram_pgg.svg.png)

Translation, rotation, reflection, and *gliding* (translation+reflection) of elements wihin this space is what characterises the 17 wallpaper groups.


#### The Sketch
The first test will be based on the 'p1' group: one with no rotation, reflection, or glides. 
I want to try to write re-usable code when creating the p1 wallpaper. p1 is the simplest wallpaper group, and this exercise is and opportunity to make a flexible method of tiling an arbitrary quadrilateral poygon.