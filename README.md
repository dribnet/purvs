## PS2 MDDN 242 2018

This is a system where characters are drawn by the motion of 1-pixel particles
tracing a path between four points that they approach in sequence.

Each character is an instance of my Character class, containing four Vertex instances and a variable number of Tracer instances.
The tracers draw their distinct visuals by writing directly to the canvas's pixel buffer in one of three colour channels. Since the tracers do not touch the other channels as they draw, this allows demoscene-esque colour mixing.
By using this approach, the cost of having multiple trailing particles onscreen at once can be heavily mitigated.

Unfortunately, I designed my system early on and neglected to keep track of the API we would be using, and ended up with my design as implemented being entirely incompatible with the rest of the code.
I was unable to effectively bridge the gap between my animations and the interpolation effects without breaking one or the other, even though I designed my system with interpolation in mind at the start - it was the wrong sort.


Due to the architecture of this design it took a bit to get it to all come together. Were I to attempt it again, I would produce code in stages working up to my final design as I did in the clock project, rather than attempting to build top-down from a vision of a finished system. This also would have avoided my API issues early on.
In the future I intend to much more carefully keep on top of what else is going on with the assignment! I got carried away with my excessive design which ended up being mostly wasted, as the animation isn't visible and the interpolation allowances never go to be used.

Despite my failure to unify all aspects of the project as assigned, I am pleased with how the particle system itself came out, and I think the visuals are quite striking. This project has mostly been a lesson in organisation and academic mindfulness rather than programming advancement, but I think that's more valuable in the end.

---
