## PS4 MDDN 342 2018

FINAL README:
There are TWO final versions: the full version which is /incredibly/ slow, and the simplified version which is only self-similar in the grid intersections.

When I started this project, I had a very strong idea of what I wanted, a self-similar fractal like design, where you would zoom in to find more of the same thing but smaller. It took some time to get used to the new drawing space using the map api, but I got there. After that it was relatively simple to get the infinite grid working.

One difficult but not all that important problem came up when I tried to use the noise to make a discrete choice (e.g. picking an output canvas), as I used to with random (). The problem is that the noise very rarely goes all the way down to zero or up to one. I solved this by scaling the noise up by a lot and taking the result modulo one to get back a number between 0 and 1.

Surprisingly the recursive grid structure was one of the easiest steps in the whole project. I had some trouble with layering, but it all got solved in the end. Overall I really enjoyed the development process and I couldn't be prouder of the final design.

project diary:
1/10
Started from where the last project left off, I have an idea for the procedural map. When you zoom in on a line, you see a similar arrangement where the background is the now out of scale line you zoomed in on. In my example, I zoomed in on a pink region to find a new design with a pink background and the pink lines have been replaced by white. The reveal, other than finding a smaller design, would be the change in colour

4/10
I've imported the map code and I've figured out a simple way to deal with the co-ordinate system.

10/10
I still had some bugs I wasn't aware of with the map code, which I /think/ I've fixed now.

A) I have an idea for how to alter my design from the last project. I think I might make it so you never see the end of a line, they are of infinite length. I think that would be the best way to adapt to the infinite plane.

B) I now have a grid on the infinite plane, starting work on adapting the last project's design

11/10
I have the Lines drawing but as I thought, having the stripes without line endings isn't as interesting. Also, I have ideas about how to implement the zooming details, I'm working on that next.

15/10
The self-similar structure is at a start, though it still needs a lot of work. The key will be adding to the colour channel that has been subtracted from in the super context. The fact that I don't have that functionality is why most of the lines are grey at the moment.

29/10 A)
For simplicity, only the intersections between lines contain a smaller version of the design. Otherwise, I got the design working exactly how I wanted

B)
I decided to get the full version working, but it's extremely slow.