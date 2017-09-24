17.2.MDDN342 PS3

## Overall
In my two works, I wanted to show how inorganic functions can create organic and lifelike movement in the time domain. They change over time with different values and can always suprise the viewer through behaviour at a higher scale view in time. It was important of course for it to also be interesting to view at a low level, so the interactions between different objects are made to compliment each other, such as with the large shapes in the wallpaper becoming transparent. The design i went for both of these is very minimal, just showing the algorithms in their element.

## Wallpaper
I am quite interested in how sin/cos waves work through interference etc, and different ways that we can use it to show more organic and reactive movement over time in designs.

The wallpaper generates a grid of moving shapes, all driven by the same base interval so that they line up in the time domain. I started with rendering it with lines and tracers, which looked much like a mandela when the shapes were big enough, but ended up changing it to be a checkerboard fill pattern so that the edges of different objects overlap and create interesting complexity. I also made the largest sizes of shape loose some opacity so that the viewer gets to look into the innards every now and then.

This piece required a lot of iteration, but I am happy with the result and how it looks very simple at first glance but exhibits an interesting and organic movement when time is spent being mesmerized by it.

## Landscape
In my landscape design I wanted to show off the next level of complexity of random noise. I spent a lot of time changing around the area and variety of perlin noise it generated. I started this one by just generating lines of noise, and ended up filling them with an increacing darkness. Then I wanted to show the viewer to scale of the perlin noise, so i added a bit of animation in showing multiple scales of the noise. I also modulate the noise over time, by mapping the third noise dimension to millis. I ended up also mirroring it in the middle so that the viewer can more easily follow the scale increace.