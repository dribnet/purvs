## PS1 MDDN 242 2017

### Cliffside Clock

This is my final version of the "Cliffside Clock". The clock mimics the ocean tides as a way of measuring time, running in 6 hour intervals of high and low tides. The hours are mapped to the tide coming in and out. The seconds occur with every wave, and for the last two seconds of each minute a seagull flies across the top of the scene, above the cliff. When the alarm is set, just before it goes off, a black seagull flies across the screen then as it goes off it hits the cliff face. The clock was inspired by the time I spent filming during the summer, we were on a cliff similar to this one and having to carefully avoid getting caught at high tide by timing when we filmed. 

I found mapping the tide to 6 hour intervals challenging, until I rememebred how to use the modulo to give a remainder of 4 (2 x high tide, 2 x low). Fixing this definitely helped me stay motivated to continue fixing the areas that weren't working. Ideally I would have liked to have the bird fall down once it hits the wall but it had a large lag which ment the seagul dissapeared before reappearing and falling, as well as an issue with this resetting.

Overall I am fairly pleased with this outcome, although it does not match my original vision of a very ambient and aesthetically pleasing scene with graphics and sound. But I compromised on this due to the complexity of setting up a server to host the external assets and instead went with this jagged blocky style that could be coded using the beginShape(); function. 

