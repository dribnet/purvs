## MDDN 242 2021 Assignment 2

Being relativly simple the trasitions added in the interaction come across quite smooth though the radius lines pop in and out which isnt very clean.

Changed the `lineOn` parameter to `lineLength` as lineOn used an if statment meaning there was no transition between lines and no lines. lineLength however ranges from 0-47 allowing for a full smooth transition in line length between letters.

The 9 parameters per letter:
* `line1R` : rotation of the first line around the centre of the letter
* `line2R` : rotation of the second line around the centre of the letter
* `line3R` : rotation of the third line around the centre of the letter
* `line4R` : rotation of the fourth line around the centre of the letter
* `arc1Start` : start of the first arc
* `arc1End` : end of the first arc
* `arc2Start` : start of the second arc
* `arc2End` : end of the second arc
* `lineLength` : the line length being between the radius and 0
