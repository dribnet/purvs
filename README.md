## MDDN 242 2021 Assignment 2

(Replace this README with information about your alphabet. This is an example.)

My idea for my alphabet is a total cirular alphabet. My letters will be composed of 1 or 2 arcs and up to 4 lines. After drawing the entire alphabet with what would be this method I liked the constenicy, minimalist style, and most importantly (for me at least) legibility. The size and dimensions of the arcs are fixed but their starting and stopping points are adjustable. During my testing I found that the maxium number of arcs needed across the alphabet was 2 and a maximum of 4 lines were needed. The idea is that if less than these maximus are needed that can easily overlap eachother. The lines size is also fixed between the radius and 0 and can be rotated and overlapped to suit the letters need.

The currently 9 parameters per letter:
* `line1R` : rotation of the first line around the centre of the letter
* `line2R` : rotation of the second line around the centre of the letter
* `line3R` : rotation of the third line around the centre of the letter
* `line4R` : rotation of the fourth line around the centre of the letter
* `arc1Start` : start of the first arc
* `arc1End` : end of the first arc
* `arc2Start` : start of the second arc
* `arc2End` : end of the second arc
* `lineOn` : the line length being between the radius and 0
