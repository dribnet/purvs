## PS1 MDDN 342 2017

This readme describes the final version of parametric faces assignment (part5/assignment1/CCIII).

In this final version, I have decided to make the characters interact with each other in some ways through physically moving around the scene in an organic, childish way. I have created a basic physics system with velocities to do this (the PhysicsObject class), and to create the childlike interactions and animations I have made a system for managing the Slerping and Lerping of values over time (the Slerper and Lerper classes).
For this final version I have paid specific attention to the distribution of values as well as using different seed sources. I generate them at the start, then I use a special seed source to generate new versions when the end of a lerp/slerp is triggered.
I have added a fourth character, Elmo, which reacts in a similar way to the others.
Bert and Oscar move their eyebrows instead of their eyes, as for their characters I think it represents a similar change of emotion.
All of the characters have changing mouths and tilts.
The mouths are distributed to mostly be quite smiley, but rarely low and extreme values.
The eyes change more than the mouth as the distribution of their period is lower.

The velocity of each character is constantly changing direction and speed. The speed is normally 1, but can get as high as 5, and the velocity direction can be changing up to a 1/40th of a revolution each tick, but its mean is keeping straight.

Characters get happier as they get closer together, and if they touch then they do a little chatter animation.

When they randomise, objects are kept the same pos/vel, but change their draw function and all of their easing functions reset as it lets people keep on following the objects they were while showing an interesting change.