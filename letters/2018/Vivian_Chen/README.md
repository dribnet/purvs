## PS2 MDDN 242 2018

My inspiration of the alphabet is Oreo cookies. I noticed that the side look of oreo is in the shape of rectangle and the front look of its is circle, so that I designed these letters using these two different status of cookies.

At the beginning I plan to use 3D function of p5.js to code cookies and let them stand or lay, but then I found that I actually just need cookies in two status so I did not really need the 3D function. I decided to draw two kinds of cookies, one standing and one laying.

In the process I code the alphabet, I expanded these two status into four (standing, laying, half cookie and bigger size cookie), but I cut them down to the original two status(standing and laying) in the end. I created a parameter called status in the letterData and used if() and else if() function to draw different shapes of cookies in the drawLetter. However, when it comes to the interaction step, the if() and else if() function made some of the animation of changing between letters that in different status disappeared. I deleted the if statement and replaced that with transparence function. I changed the "status" into 0 and 255 to control the cookies showed or hidden. Using transparence will give a fade-in and fade-out effect when swiching letters which in different status.

Besides, I used to have 16 parameters, which was much more than the limit of 12. I tried my best to cut them down and now there are 13 parameters. In the past, I also use parameters to contain the data that used on drawing the patterns on the oreo circles. After, I found a much better way to draw the oreo and patterns. I created a new function to draw the oreo with pattern and call it when I need to draw circle oreo.

Moreover, I moved the code of drawing parts of letters out of the draw function and put them in two new functions to tidy the code.

In future, if I could further refine this project, I may add some more interesting movement on the interactive animation such as cookies in side look truning around to the front look, milk splashing out, etc.

Last but not least, thank my lecturer, tutors and friends for giving me so much help when I got stucked on this project.


The parameters per letter are now:
	* `status` : the status of two status of cookies, show or hide
	* `movex` : x position of where the coordinate of the first cookie will move to
	* `movey` : y position of where the coordinate of the first cookie will move to
	* `r` : how many degrees the first cookies should rotate
	* `r2` : offset degrees of the second cookies should rotate relative to the first one
	* `r3` : how many degrees the third cookies should rotate
	* `r4` : how many degrees the fourth cookies should rotate
	* `offset2x` : x offset of the second cookie relative to the first one
	* `offset2y` : y offset of the second cookie relative to the first one
	* `offset3x` : x offset of the third cookie relative to the second one
	* `offset3y` : y offset of the third cookie relative to the second one
	* `offset4x` : x offset of the fourth cookie relative to the third one
	* `offset4y` : y offset of the fourth cookie relative to the third one