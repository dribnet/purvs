## PS1 MDDN 342 2017

This README explains the final composition

It's a quiet day in this contemporary mansion. Stately portraits stare majestically along the corridor, and sunshine streams down. 
A beautiful day, you might say, to be invaded by disembodied zombie-dolls. The normal dolls, beheaded of course, were cute, in a slightly morbid way. But now those adorable dolls have been infected with a zombie virus, the serene picture turns gruesome, and infected dolls are beginning to escape!


CONCEPT
For my final composition, I brought together a selection of juxtaposing elements. I wanted to create a cohesive scene, with contrast and discord simmering below the surface. I want the veiwer to have to take a second to realise why such a bright, cheerful scene is so creepy. The right amount of gruesomeness against a cheerful backdrop can be more effective at conveying spookiness than spiders and dark corners.

by placing the disturbing dolls in a clinical, bright, opulant environment, I gave the cute dolls a helping hand. The point of cute and creepy dolls was always the contrast. In my experiments I went too far, removing too many creepy dolls, while this was interesting in a large, evenly spaced, population, it was too subtle for the pile of carnage needed for my final. 

OVERALL JOURNEY
when I began this assignment, my idea, right from the first portraits, was to create several different drawing styles. At first I did this by recreating a cartoon, and a live-action character. 
For the 3 faces I moved on to very different art styles, with some different underlying code. My doll drawing utilises a large number of variables, some of them very  subtle and interconnected, such as the mouth widening to accomodate more stitches. As I took the design forward, I made some bolder choices too, mostly regarding color. My doll  also features a very binary state of being, with a boolean determining whether the traits she has should be chosen from the pools of normal or creepy traits. Later I deliberately and carefully broke this, allowing cute dolls to, very occassionally, have one creepy eye. I also allowed creepy dolls to have the 'bright' hair colours, although all other hair shades were divided.
My cartoon drawing too has some subtlty, such as the tip of the nose lengthening slightly, many of these too, are interconnected. However the effect of the cartoon is  bold and simple. By removing the colour and distractions I focused on the essense of what gives a face character.
The abstracted, patterned, face uses fewer variables and more random generation. While it may be light on the variables, it was the code that took me longest to master, as it involved building my own function for masking shapes out of patterns using pixel arrays. I created some simple patterns focusing on the essense of what I wanted to convey. The flower function I created came in handy later when I needed a pattern for my mansion walls, I accidentally put it in the wrong place and realised it made the most terrific, subtly patterned, shiny floor. The main shortcoming of the masking I did, apart from its fiddly nature, is how long it takes to process, which, with all the other items I am already drawing, was not a reasonable option for the final composition, besides, I didn't want to add more, for fear it might get too busy.

CODING STRUCTURE
I wanted to push myself in terms of code, as well as design and composition. I new that, to create the kind of faces I wanted too, I would need to be organised in my code. I began by placing my sliders into an object, this made it very easy to scale them. Later it also greatly reduced the amount of code needed to switch to using focused random, and also allowed me to easily keep the relationships between variables; if two facial features called on the same slider originally, they would now get the same random number. In some cases I moved away  from this, using focused random directly, but in cases where I needed the random numbers within an object to stay the same,  it was nice not to have to assign variables to them all the time.
Each of the 3 paramaterised faces I created is an object, and, instead of drawing directly to the canvas, draws to a graphics object. This also allows for the re-use of the same face  without the need to redraw it. 
Iteration has robbed some of my function names, variable names, and even object names of their clarity, unfortunately. In the scramble to create a cohesive final image, a few things got added higgldy-piggldy but, considering the sheer quantity of code involved, it could definately be worse. I have tried to provide clear comments and explainations wherever possible, and I have mostly achieved that goal.

ADDITIONAL VARIABLES AND RANDOMS USED IN THE FINAL COMPOSITION
(for other decisions, and variables from other stages, including those detailing the features of the dolls, please see the 3 faces ReadMe)

floor & frame color
x possition of rising dolls
hair colours (depends whether creepy or cute, uses focus)
possitioning of dolls in pile (uses focus)
occassional deviations in hair bow colour (focused)
regularity of creepy vs cute
focus on round faces and pointed noses in portraits





