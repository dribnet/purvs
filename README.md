[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11439689&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### Urban Rhythm Clock

*Artist Statement*
An animated piece which represents time by using a city silhouette, with three main cities representing seconds, minutes and hours. The landscape changes according to the night or day time, and gives either late night city vibes or a bright and early day time aesthetic. The alarm gives a twist for the viewer, as it zooms out to show that the bigger perspective of the landscape is actually on a TV. The reason for this is because its rare these days to look out at a raw city landscape, its usually through a TV, or laptop, or any technology. The inspiration for this project is viewing Wellington city through a window, where you get to see the different windows turn on and off at random times in the day or night. It's quite comforting knowing you're not the only one awake in a big city.  

*My Initial Ideas*
I will be making a clock represented by three city building silhouettes, and a large moon behind these. All the buildings will have lights turned on/off, and the amount of lights turned on will be the time for each of the buildings. The 3 buildings represent the month, hour, and minute of the day, the stars will be pulsing according to each second, like a visual metronome. The big moon behind the three city buildings will change according to the months moon phases.
There could be a rotation of sun and clouds and moon and stars, to make the scene not as static. 
Instead of the month, I could do the date of the month. 

*Maeda Clock*
I made a clock ticking in an analog clock-like motion. I added my own types of colours and outline of the clock (the outline changes its 
visibility according to the seconds). This clock was practice for the actual clock project. 

*The Actual Clock Project*
I tried to implement my sketch. Instead of using the day of the month, I used the seconds, minutes and hours instead, as there was no variable for the day of the month. This also meant I couldn't do the different moon phases, so I stuck with a big full moon, which gave the landscape better night life vibes. 

It used to just be night time for all 24 hours of the day, but after some consideration, I decided to change the background according to the time of day: the sky, moon/sun and clouds/stars. I tried to make it more interesting by making the buildings bounce and the moon pulse, but this got way too busy and weird for the static windows. If a city building is bouncing, it also gives a more kid-like version of what I'm trying to portray. 

To improve the overall aesthetic of the landscape, I had to use Adobe Color to grab some nice palettes for the night/day skies, buildings and the different shades of yellow. To give it a more detailed look, I added lamp posts and an ombre sky. I was also given advice to add differently coloured windows on the background buildings, but when I went to do this, it stole too much attention away from the three main buildings, as the background buildings were meant to be *far* in the background, so far the viewer is unable to see the windows. 

For the alarm, I had several ideas: shooting stars, santa and his sleigh shooting across the sky with christmas lights turning on counting up to the alarm, or a meteor coming in and burning the whole landscape. Reasons why I didn't do these: the shooting stars were too suttle in my opinion, and there's no shooting stars in the day time. Santa and his sleigh don't fit quite right for the middle of the year and the meteor was way too much to code in the amount of time that I was given. 
So, I came up with the idea of zooming out of the landscape using scale and translate, to give the audience a twist: they thought that it was a nice landscape, but turns out, it's just a screen saver for a TV! 


Attribution:
In this project, I used an image from Stable Foundation in the lights, and an image <a href="https://www.freepik.com/free-vector/vintage-television-cartoon-icon-illustration_10340616.htm#query=tv%20cartoon%20yellow&position=1&from_view=search&track=ais">by catalyststuff</a> on Freepik. 
I also used some code from various places for some functions: <a href="https://stackoverflow.com/questions/60196138/lerp-background-colour-based-on-time-of-day">The lerpSkyColor function</a>, <a href="https://chat.openai.com/c/65fb3860-69f2-4e44-abf4-2457b2d9566f">the drawCloud function</a>, <a href="https://p5js.org/examples/form-star.html">the star function</a> and finally the shuffleArray function uses the <a href="https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/">Fisher-Yates algorithm</a>. 