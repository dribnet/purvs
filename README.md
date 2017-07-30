## PS1 MDDN 342 2017

Lots of changes have been brewing - I decided to try out some fade effects for the transition between rendering faces.
I looked at a few options before I realised that interpolating between opaque and transparent fills and strokes was really the only viable way to do this.

From there, I decided to create two classes - Face and Timer. I was then able to use these to create objects to work with. This was because I wanted to experiment with a fade effect when rendering and then replacing the faces. I set up an array of 15 faces to render from the beginning, and then a Timer for each face. Each Timer runs for a slightly different amount of time, so that the faces appear to fade in and out at random.

I had to do a lot of fiddling around to get this all working, one of the things that took me a while to realise was that the resetFocusedRandom() method in my draw() function had to be removed in order to get my idea to work. I didn't want the curRandomSeed to be set each time draw() was called, as I wanted to handle this myself in fading the opacity in and out (interpolating the alpha value of all the shape strokes and fills).
