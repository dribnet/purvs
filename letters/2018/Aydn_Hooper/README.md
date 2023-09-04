## PS2 MDDN 242 2018
FINAL README
For my final design of my font "RTR0SPEC" i have chosen the swap words of "NEGATIVE" "ETC12345" COLORFUL" "GOOD1420" "ACCURATE" "PLEASANT" "ABSOLUTE" "EXPLICIT" because i feel like they match the design style. The over all aesthetic that i tried to capture was a retro tech style similar to digital display clocks allthough i have abstracted it to my own style. The flickering change in colour is intentional to look like a bug to match the theme I chose. I have gone over the paramater cap by 8 and unforuntaly couldnt drop the total ammount without taking away crucial parts of my design. The reason i chose to move away from the BLUR filters i started this assignment with was because they cant be used in animations or loops as they have to apply to every frame and every layer over and over again. so i shifted the design focus into more of a retro glitch instead of neon light style.

My goal was to create an easy to read and understand alphabet that anyone can read and understand (English). I believe i have accomplished that goal with my font with all characters being coherent shapes.  which relates back to the going over the parameter cap as if i were to remove any of them the shapes wouldnt form in a readible way and still match my design to a satisfactory level. The only problems that i have with my chosen shapes is that "5" and "S" and "O" and "?" are the same. but other than that they are all unique. 

When i was doing the interpolation of the characters i discovered that since i had removed excess paramters in the letter.js page the animations were jumpy and didnt work well. This was a quick fix as all i had to do was add them back in but set the variables to 0,0,0,0 which i believe made the transitions smoother and made it appear that the characters all return and grow from a set point making and creating a nice smooth transition.

The flickering effect that i used was created by setting the values of RGB,A to a Random() between the colours I wanted to use initially of Hot pink (255,105,180) and neon blue (70,173,212) and an alpha value for transparancy (60-90). since this happens so rapidly it creates a nice looking effect that old video and digital projection has/had.

If i were to do this assignment again I would go with a different design style that allows me to create shapes and remain within the parameter limit.

My final 20 parameters were:
 - x: co-ordinate used for first part of line "left"
 - y: co-ordinate used for first part of line "left"
 - x2; co-ordinate used for second point of line "left"
 - y2: co-ordinate used for second point of life "left"
 - x3: co-ordinate used for first point of line "top"
 - y3: co-ordinate used for first point of line "top"
 - x4: co-ordinate used for second point of line "top"
 - y4: co-ordinate used for second point of line "top"
 - x5: co-ordinate used for first point of line "mid"
 - y5: co-ordinate used for first point of line "mid"
 - x6: co-ordinate used for second point of line "mid"
 - y6: co-ordinate used for second point of line "mid"
 - x7: co-ordinate used for first point of line "right"
 - y7: co-ordinate used for first point of line "right"
 - x8: co-ordinate used for second point of line "right"
 - y8: co-ordinate used for second point of line "right"
 - x9: co-ordinate used for first point of line "bot"
 - y9: co-ordinate used for first point of line "bot"
 - x10: co-ordinate used for second point of line "bot"
 - y10: co-ordinate used for second point of line "bot"