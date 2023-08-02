## MDDN 242 Project 1: Time-based Media  

### Moving Points Clock by Treion Raquid

17/07/2023
Begin work on maeda clock task, I have decided to recreate 7th clock where AM/PM is centered, whereas the actual time behaves like a clock hand.

18/07/2023
I finished a prototype for my clock, this only runs on the minute hand. In order to add points to a circle I used code from this webpage:
https://www.alpharithms.com/evenly-spacing-objects-around-a-circle-in-p5js-processing-180222/
The movement of the points however, I did by myself.

19 - 24 July
I successfully implemented the hours and minute rings

26/07/2023
Created alarm ring that fills up as alarm counts down. I have yet to add a proper alarm active mode.

31/07/2023
I have further implemented the alarm function. I initially wanted to have the ring flash once the countdown hit zero. However, my attempts to do so kept freezing the program. Instead, when the countdown reaches zero the colour scheme changes to an orange palette.

02/08/2023
Added proper metadata and referred to the hand-in checklist

HOW TO READ THE CLOCK:

The inner-most ring are the seconds. There are 6 points that move in a circle, each at different speeds. If three points converge at the top, and the rest converge at the bottom then 30 seconds have passed since the minute started. If the points create a "T" shape, this means 15 seconds past the minute, or 15 seconds till the next minute. If the points create a triangle shape, the clock is 20 seconds past/till the minute.
If all points coverge at the top this means that a minute has passed.

This same principle is also applied to the middle-most ring, the minutes ring.

The outermost ring behaves exactly like an hour hand on a real clock.

Inspiration and implementation:

I was inspired by the clock in the PlayStation 2 menu. where dots would move around at different rates, converging once a certain unit of time passed. However, that version has the points move in a 3D space. My version can only use a 2D plane (unless I use the 3D aspect of p5js).

I was initially going to have a 12 diamonds circulating the clock, each one that light up would represent the current hour. I scrapped it because it would seem too clock to the original PS2 clock system. So I used a standard hour hand to represent hours.