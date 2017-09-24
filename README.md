17.2.MDDN342 PS3

# Penrose Garden

The Penrose tiling has always been of interest to me, and this project seemed like a good oppportunity to explore it. The most notable feature of the Penrose tiling is that it is aperiodic, meaning there are no translationally repeating units.

The sketch uses an algorithm to recursively subdivide a small set of inital tiles into a larger tiling. The algorithm also calculates tile adjacencies, to form a graph structure. This will allow for intuitive traversals of the tiling.

There are several properties of the tiling I want to explore. As the tiling has rotational symmetry, it produces a flower-like singularity at its centre. An interesting consequence of this is that you are able to trace ornate walks around it, using only a simple stepping rule.

I would also like to experiment with multiple tilings. As it is nonperiodic, adjacent tilings will collide with eachother, which is an interesting effect that has analogues in nature.

There are several different Penrose tilings as well (think of it as a slightly different pattern in its centre.) Ideally, my sketch should be able to produce these variations too. Finally, there exist 'imperfect' tilings, which eventually come to a contradiction. These could be interesting to include.

I have been doing a lot of research - some resources I have enjoyed:

[http://preshing.com/20110831/penrose-tiling-explained/]() - currently using this algorithm  
[http://www.ams.org/samplings/feature-column/fcarc-ribbons]() - example of bad tiling  
[http://www.stephencollins.net/penrose/]() - example of the aforementioned 'walks'; introduction to de Brujin's pentagrid  
[http://www.mathpages.com/home/kmath621/kmath621.htm]() - more on pentagrid  
[http://www.cs.williams.edu/~bailey/06le.pdf]() - beyond the scope of this project but formally explains much of de Brujin's work
