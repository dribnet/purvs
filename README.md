## MDDN 242 2020 Assignment 2
22/05/2020

I received final feedback for my set, and was advised to make further changes to my interpolation animation, as the locking/clicking portion of the animation transition was still a little too fast. I lowered the percent of my if statements for the start and end points of the arcs, to allow more time for the letters to click in the place.

//Percent transition control setup
if (percent < 70) { //Controls the transition of the letter switching from its previous form, from a smooth movement, until it finally clicks/locks into place in its new form
  new_letter["arcS"] = oldObj["arcS"];
  new_letter["arcE"] = oldObj["arcE"];
}

I also divided the percent value in the new letter map for the start and end points of my arcs, so that the arcs would transition at a slower rate, so that the form change was easier to watch.

else {
  new_letter["arcS"] = map(percent/5, 0, 100, oldObj["arcS"], newObj["arcS"]);
  new_letter["arcE"] = map(percent/5, 0, 100, oldObj["arcE"], newObj["arcE"]);

I also added a 1px stroke to my third arc, as the second arc was showing through on forms where the second and third arcs crossed over eachother. 

These alterations polished my set and made my animation more appealing and satisfying to watch.  

The fourteen parameters per letter:
"arcW" : width of all arcs
"arcH" : height of all arcs
"arcX" : x position of arc 1
"arcY" : y position of arc 1
"arcS" : starting point of arc 1
"arcE" : ending point of arc 1
"arcX2" : x position of arc 2
"arcY2" : y position of arc 2
"arcS2" : starting point of arc 2
"arcE2" : ending point of arc 2
"arcX3" : x position of arc 3
"arcY3" : y position of arc 3
"arcS3" : starting point of arc 3
"arcE3" : ending point of arc 3
