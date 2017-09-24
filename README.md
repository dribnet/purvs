17.2.MDDN342 PS3

This program draws either a wallpaper, or a landscape.
You can press the spacebar to switch between the modes.
You can click on the canvas to generate a new wallpaper or landscape.

--Wallpaper--
The wallpaper uses simple rects and lines
to create a detailed pattern. It uses the same shapes
as the landscape, but colored and sized differently.

The color scheme is neon and bright, randomly changing between 3 color schemes.
It takes inspiration from future japanese night lighting. The goal of this wallpaper
is to create an aesthetically pleasing composition using simple shapes to create
a complex pattern.

In the future this could be iterated on by providing more complicated shapes -
I was considering using fractals to create even more depth in the shapes.
I could have also experimented with whitespace as the composition is currently
very cluttered.

--Landscape--

The landscape uses a similar minimalist aesthetic to the wallpaper, but is this time
more representative of an actual environment, and is focused on conveying symbols that represent
a snowy tiaga biome from a top-down view.

It uses simple shapes to represent things like trees and rocks. Each type of terrain
has its own probability of spawning, which is changed each time a new landscape is generated.
The terrain pieces are generated using perlin noise, which is a lot more aesthetically pleasing
than pure randomness. Through this interesting clumps of terrain pieces and snow are combined.

My goal with this landscape generator was to create a lot of depth in the randomness of the
terrain. I wanted each new screen to provide something interesting. There are lots of variables
being changed each time a new composition is created, including the amount of space, the populations
of the terrain, specific colors, and the number of rows and columns. I feel like I managed to get a
fairly good amount of depth happening in the end.

There are many things I would have liked to do to extend this design. I could have added even more even more depth in
the randomization, with things like different biomes, more color variation, and more terrain pieces.
I would also have liked to work on the aesthetic a little more. The simple line shapes worked well initially,
but are a little primitive and I feel could be worked on to really get them to pop out. It also would have
been good to be able to get your seed and enter in a seed so you could revisit specific landscapes.
