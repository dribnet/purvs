## PS1 MDDN 242 2017

### Final Cloud Hop Clock

This is the final Version of the Clock. This clock follows a primarily analog look, with a Pixel art style. The clock is set in the sky amongst the clouds where the Main Character, Dino, moves from cloud to cloud on the turn of the hour, while performing small animations over time. When the alarm goes off Dino will start playing an instrument on top of the cloud he is currently on to alert the user.

Its Main Features include:
	- Changing Backgrounds and Icons showing a day and night cycle
	- Animated Main character
	- Animated background clouds

I choose to make this design because I thought that it could look quite dynamic and interesting, as well as my interest in pixel art styled applications. I originally wanted to have dino jump from cloud to cloud, however this proved to be quite difficult as the jump would look too unnatural a lot of the time, and the amount of code needed to have it look natural and account for all sections of the clock that he will jump to, so that he doesn't do something like clip through the bottom of the clouds, was going to be to much work. So instead 2 clouds will pop up in front of him and the cloud he will appear on, revealing dinos has switched positions when the clouds fade away. 

All the clouds in the program use the same cloud class, rather than use inheritance and polymorphism to create subbranches of cloud types. Because of this a had to consider a few things. Because each cloud needs a character so that the ones on the clock show something, I made the character '' for the background clouds so that nothing appears to resolve that problem. Also I had to limit the amount of background clouds as there was the potential that they program will slow down from too many objects on screen.

One final major issue that I had to over come was the loading of images and other external files. For starters, Gist does not like it when you use a asset folder, at least when I tried it, so this meant that all the files are bunched in the root folder. While this isn't too big of a deal, the real problem with the external files comes into play when you try and load them in. Generally external files should be loaded via the preload method so that by the time the program starts everything is available to be used without the worry of it not still loaded in. We were not allowed to use the preload and setup methods from what I read so I had to improvise a little. I made my own version of setup/preload which will only run once during the entire program. In this method I load all external files as well as create all the objects needed. Once this is done I set a boolean to false which will tell the program to very enter this method again during runtime, because we do not want to reload everything again on every loop, as the program would just not run as intended. This gets the job done, but you can still see at the start of the program stuff popping in for a second or 2. This is really all I can do without the use of preload and setup. 
	
Things I would have liked to have added include:
	- More artwork and animations
	- Connection to a weather API to also show the current weather
	- Cleaner fades and transitions between backgrounds and animations
	
Overall I am happy with how the clock looks in the end, given the time to create it, as i believe that it gives the end user what they want to know, the time, while having a cute appealing look.
