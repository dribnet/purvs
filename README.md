## MDDN 242 2020 Assignment 2
21/05/2020

I finally designed my last form, my default character. Since my forms are rounded, I decided to make my default character a question mark. I also noticed that when my set code was plugged into the interpolation maps, that the animation made my arcs spin very fast between letter/number transitions. This made the transitions very messy, especially since some letters transitioned more smoothly than others. Instead of my arcs spinning really fast, I wanted them to smoothly transition between forms. I personally liked the spinning, as it looked neat at the very end of the transition, when the arcs would look like they were locking into place. To incorporate a smooth transition and have my arcs click/lock into place, I placed the following if and else statements for all my start and end parameters for my arcs. By controlling the start and stop points of my arcs, I would be able to control the spinning.

if (percent < 85) {
  new_letter["arcS"] = oldObj["arcS"];
  new_letter["arcE"] = oldObj["arcE"];
}

else {
  new_letter["arcS"] = map(percent, 0, 100, oldObj["arcS"], newObj["arcS"]);
  new_letter["arcE"] = map(percent, 0, 100, oldObj["arcE"], newObj["arcE"]);
}

By controlling the animation through percent, this allowed the forms to transition smoothly without the fast, chaotic spinning. By ensuring a smoother transition, it made the fast spin and lock at the end of the transition more effective. I intend to receive feedback, to see if the smooth portion of the transition is long enough before the lock, or if I should extend it to make the lock even more effective in contrast. I also started looking at words that associated with my font. Being inspired by retro space posters, I started looking into themes of space exploration, fantasy space themes such as robots and terms to do with technology, as I felt that the fast lock at the end of transitions resembled machinery and gears in stop and go motion. I have not finalized my font name, but this exercise helped me see what direction to take.

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
