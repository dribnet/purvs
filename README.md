## PS2 MDDN 342 2017

For this final version, I have done a small amount of iterative work and mostly just been working on making sure all properties map to realistic values, so that for example the fro is a good size in relation to the head.
While originally the hard drawing lines was just a step in my process of getting to smooth lines, I thought that it showed an interesting difference in the faces, so decided to bring that style back for this final version.
I find it interesting how well the clown faces are able to show expression, such as in the first 5 custom faceMaps.
While on the vibe of adding discrete styles, I also added the possibility for no fro.

I found it very useful to make my own centering functions, as in function doCentered() in facemap.js. This takes a list of points and runs the provided function transformed to the center of the points. It was great for drawing the mouth paint in the same centered place as the lips, but larger and using a different draw system. My custom Rect class was also useful in the same way.
I focused on code that allowed quick experimentation using functional programming techniques, which allowed me to try out a range of different styles without much code change.