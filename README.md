## PS1 MDDN 242 2017

### Geometric Clock Progress

I have developed my code today in order to make it more refined. I realised I had all of my rotate functions /30 which made my clock too fast. This was an easy fix when I realised what was wrong. I adjust the movement animation of my geometry so it no longer shifts off the screen. I set their size according to their value on the clock, with hour growing the largest, and millisecond growing the smallest. I also set the timing of these movements according to these values, with hour shifting the slowest and millisecond moving the fastest. I also coded a bit of colour change today, with the colors of the geometries fading in and out, again according to their time value. My main problem now is that all if my values are upside down apart from the hour. I still haven't found a way to fix this. I also need to implement an alarm function, I have planned for this to be the geomteries pulsing in and out.

EDIT: Found a solution to fixing my flipped clock by reversing some of my vertex values. Hopefully this solves the problem.


TESTING FROM STORAGE