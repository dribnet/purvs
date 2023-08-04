[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11447837&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

# CONSTELLATION CLOCK

# Part 1: Sketch
Approaching this project, I initially wanted to create a clock as a visual experience which would change throughout the day. I would model a landscape using p5.js and then alter the colours/positions of objects to represent the current time of day. I ultimately did not use this idea as I wanted to be able to better show the time changing, as well as technical limitations with what I wanted verses what I could accomplish within the timeframe.

![image](https://github.com/23-2-DSDN242/mddn242-time-based-media-DanielIe/assets/94158822/e9b38cee-9e2c-45cc-b844-3d0950c2d8de)

# Part 2: Maeda Clock
For my John Maeda clock I recreated the one where previous times display behind the current time like shadows (this one:)

![image](https://github.com/23-2-DSDN242/mddn242-time-based-media-DanielIe/assets/94158822/4b02690a-7ca7-4032-9515-6fcc624655ce)

My recreation is very similar to the original. I changed the colours used, and also made the shadow-times fade into the background as I wanted the current time to stand out more. Creating this clock helped me get comfortable manipulating p5.js to my needs, and I feel confident in working on my own original clock.

![image](https://github.com/23-2-DSDN242/mddn242-time-based-media-DanielIe/assets/94158822/6f6c2749-bd11-4396-8690-528bad24aa2a)

# Part 3: Original Clock
The hardest part of this assignment for me was deciding on an idea to use for my clock. In the end after considering both my initial idea, and my John Maeda recreation, I decided to use a new idea altogether. I was inspired by the theme of stars/constellations and wanted to create a clock that embodied that theme. I first created a background using p5.js that looked like a galaxy, complete with circular decorations and stars created using noise (which I used a lot of in this project). I needed a fake-random way of generating locations for objects, as well as their movement, so I created a function that generates a number based on the iteration it is called, and its noise value. I used this instead of the random() function in my project. I also used lots of arrays and maps to help with my design. For displaying the time, I wanted a circle with different 'planets' orbiting it at different speeds to represent the hour/mins/secs. Implementing this, it looks nice but does not have enough visual clarity of the actual time, so I also display the time in digital form made out of stars. This was the most fun part of making this clock, as it challenged my technical skills and was satisfying to accomplish. I wanted a way to display the time as numbers, but in a special and visually interesting way. I decided in keeping with my theme of constellations, to make the numbers themselves constellations. I did this by storing each number as an array of lines, then generating stars around these lines, and connecting the close stars to form the constellations. I also added mouse interaction to be able to push apart the numbers as if you are some sort of god manipulating the universe. I am aware with these additions that my clock has poor performance on some computers, so I have included a short video showing how it should run (see OriginalClock-Video.mp4). To improve the visuals of my clock, I added a glow around the visual elements to show them emitting light. Many small details have gone into making my clock something I am happy with visually. 

![image](https://github.com/23-2-DSDN242/mddn242-time-based-media-DanielIe/assets/94158822/3a8f9454-a03a-4874-a5d7-5e5a95a76ba5)

# Part 4: Alarm Feature
I wanted a pulsing effect when the alarm goes off, and to implement this I added a few pulsating layers of wavy noise, as well as stars exploding out of the clock every second. I think this creates the feel of an alarm going off. I also added a little bell 'planet' with a line connecting the seconds 'planet' and the bell to show when the alarm will go off.

(Counting down to alarm)

![image](https://github.com/23-2-DSDN242/mddn242-time-based-media-DanielIe/assets/94158822/593d537b-1a57-4a0b-a784-dfb55b5e4dc9)

(Alarm going off)

![image](https://github.com/23-2-DSDN242/mddn242-time-based-media-DanielIe/assets/94158822/27ccb03a-02dc-43bc-ae25-6cfdc17f57b7)

# Part 5: Final Clock and Reflection

I had a lot of fun creating my original clock, I challenged myself technically and created something that I am proud of visually. I was inspired by stars and constellations, as well as swirling galaxies and took elements from these ideas to create my own original clock. The hardest part for me was coming up with an idea, but once I was happy with my vision, implementation went fairly smoothly. Finding a way to get around using 'random' was also a fun challenge, as a lot of my clock is based on randomness with the placement of stars, constellations, etc. Overall I am happy with my clock and think it makes for a unique and interesting visual experience. 

