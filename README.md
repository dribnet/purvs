## MDDN 242 2022 Assignment 2

###Inspiration
I think I got the idea of using sinewaves when looking at one of the first assigned readings for this project. I used them to create my first sketch and kept going with it. I'm into music and have messed around in Ableton before so I had a theme of audio signals in my head, specifically sinewave signals. I looked at oscilloscopes as well, mostly as inspiration for the colour.

###Alphabet
I set some rules for myself creating the letters:
-Don't adjust the wavelength too much.
-Every wave must be curved in some way.
-Use only two waves. (This rule was broken because of the H)

I got the editor working quickly, I found it extremely useful. It also helped that I had already done my sketch using code, I had an idea of how the waves should move.
Each wave is controlled by six parameters:
-Offset X, sets X position.
-Offset Y, sets Y position.
-Wavelength, sets the length of the 'line'.
-Rotate, changes the rotation.
-Peak Amount, how many peaks and troughs there are.
-Peak Height, how tall these peaks and troughs are.
The letters are made controlling mostly the peak amount, peak height, and rotation.
Some letters needed a slightly shorter or longer wavelength, such as the V having a shorter one to differentiate it from the U.

Later in the versions I started adding more lines to the middle of the original waves. I felt like it was 'too boring' having just lines making letters. I didn't really have any inspiration doing this I just tried it out and liked it. I added another colour line on top of the background colour one which is the same colour as the main wave. I had tried making all the waves stroke end cap round but preferred it straight. I did add a round end cap to the middle colour line to add to it being more 'interesting'.

I originally only had two waves and I really wanted to stick to that, but I couldn't do a capital 'H' without a third one. Near the end versions I added the third wave, only the 'H' and 'I' use it. The H really stuck out as it was the only lower-case letter before the third wave.

###Numbers
I had planned to do the numbers drawn how they typically would, but this idea was changed to something more related to a sine wave before I even started the numbers.
The numbers are shown by counting the peaks and troughs on the wave. 0 having no peaks, 6 to 9 having two waves which added together give the correct number. The reason I have numbers greater than 5 add together instead of just having more peaks and troughs is because if there was more than 5, the amount would become unreadable, they would squish together.
The orientation of the numbers was changed late to flip them back on their side, so they look more traditionally as sinewaves. This also helped differentiate them from the letters if they are shown together.

###Colours
I got all the characters done before I worked on the colour. As mentioned in my inspiration I looked at oscilloscopes. I choose more modern oscilloscopes because they had multiple colours for different types of waves. I'm using a map which is mapped to the peak height for the letters. Generally, 'harsher' colours like red or yellow are used for a high peak. And 'neutral' colours are used for low peaks. I'm using yellow for when the peak height is high and blue for when the peak height is low. This gives each wave used in the letters its own colour. I have a parameter which is either 0 for a letter or 1 for a number which controls which character gets which colour.
For the numbers I wanted to use a different colour to differentiate them from the letters. Because the peak height stays the same for the numbers, I'm using the peak amount instead for the map. I changed the high colour for this map to red and the low colour to the same yellow as the letters. I feel like this yellow ties them together without being the same.
When interpolating characters when I first implemented these colours, the colour would change instantly, but this was fixed when I worked on interpolation more.

###Interpolation
I stuck with the default interpolation for most of the project, I felt like it worked all right. I messed up when I first added interpolation and the waves went crazy, but this was easily fixed. (See Broken Interpolation version)
Once I was happy with the colours, I worked on the interpolation more. I hadn't used the 'default' character yet and didn't even have one. I saw I could use this as an in-between for the interpolation. I made this default character to show off sine waves and it made an infinity looking symbol which I liked. I really liked how it looked when it changed to this symbol before changing to the next character, but I felt like it was too fast. I increased the percentage of how long it should be the default character before changing to the new letter, but it was still too fast. With permission from Phoebe, I changed the number of frames of the interpolation animation from 30 to 120. This gives you time to 'read' the animation and it turned out really satisfying.
Using this in-between character also fixed the issue I had when changing from a letter to a number or vice versa. The colour would instantly change between the two but having this interpolation in the middle, I can make the colour change when the in-between 'clicks' into place.

###Final Thoughts
At the start of this project when I was making the characters, I found it a bit boring. Once I got past that part, I found it fun, adding colours and getting the satisfying interpolation.
I think it was an interesting project because I hadn't made a font before, so it was something new to work through.
I ended up using 19 parameters, 6 for each wave and 1 for the colour control.
(I vote for not removing this project from the paper)
