17.2.MDDN342 PS3

# Penrose Garden

The Penrose tiling has always been of interest to me, and this project seemed like a good oppportunity to explore it. The most notable feature of the Penrose tiling is that it is aperiodic, meaning there are no translationally repeating units.

The sketch uses an algorithm to recursively subdivide a small set of inital tiles into a larger tiling. The algorithm also calculates tile adjacencies, to form a graph structure. This is what allows for intuitive traversals of the tiling.

Pressing space generates a series of 'vines.' These traverse the tiling using a very simple sequence of traversal instructions. One turns left every time, the other alternates left and right. These produce ornate cyclic 'flowers' or 'stars,' and 'ribbons.'

Both of these elegantly display properties of the Penrose tiling. Local rotational symmetry clusters produce the flowers. The ribbons can be though of as a visualisation of the pentagrid, which is a structure that is dual to the Penrose tiling. In other words, these are the foundation of the tiling itself.

![partial Penrose tiling and its dual](http://intendo.net/penrose/images/dual.gif)

![illustration of parallel Penrose ribbons](http://www.ams.org/featurecolumn/images/december05/mg6.jpg)

I was inspired by Art Nouveau when working on this project. I love the intricate, winding stems and lush floral reliefs that are common in the movement, and, if I were to continue working on this, would pursue that aesthetic with my vines.

![Art Nouveau floral design](https://images.fineartamerica.com/images-medium-large-5/peonies-alfons-mucha.jpg)

I have been doing a lot of research - some resources I have enjoyed:

[http://preshing.com/20110831/penrose-tiling-explained/]() - currently using this algorithm  
[http://www.ams.org/samplings/feature-column/fcarc-ribbons]() - example of bad tiling  
[http://www.stephencollins.net/penrose/]() - example of the aforementioned 'walks'; introduction to de Brujin's pentagrid  
[http://www.mathpages.com/home/kmath621/kmath621.htm]() - more on pentagrid  
[http://www.cs.williams.edu/~bailey/06le.pdf]() - beyond the scope of this project but formally explains much of de Brujin's work
