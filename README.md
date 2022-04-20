## MDDN 242 2022 Assignment 2

I tried to simplify my code further from the previous iteration. I did this by identifying redundant pieces of code. I also wanted to rely less on the use of true/false to feature the custom shape in each letterform so the interpolation would look better. 

Each letterform is made up of two functions of the custom shape and one rect function. It was helpful to use the editor to speed-run the process to completion.

My letterform system is made up of 15 variables. 
1. **size** 
...controls the radius of the custom shape, i found this necessary to include because i wanted to be able to try out different radius-es and seeing which would work best in relation to the kerning of each letterforms.
2-3. **orientation**
...works like true/false, where the value of 1 represents the right corner while -1 is the left. 
4-5. **edge**
...controls the edging of each custom shape, is it round or cornered from the left/right?
6-7. **angle**
...controls the angle of each custom shape in degrees
8-11. **offset**
...enables each custom shape to be moved left,right,up,down
12-15. **rX,rY...**
...the r values represent the x,y,w,h of the rect as i wanted to be able to manipulate it separate from the custom shape
                    
Overall, I am currently satsified with my letterform system. It is still modern and elegant like I had originally wanted in my sketch but more fun and playful.