[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11439582&assignment_repo_type=AssignmentRepo)

# MDDN 242 Project 1: Time-based Media  
## UFO Clock by Phoebe Oliff 


### Part 1 Sketch 

When I started brainstorming for this assignment, I automatically started thinking of space themed clocks and how we use the stars and moon to measure time. Looking through examples I saw a lot of planets revolving around eachother so I started thinking more in the sci-fi realm to make something more unique which is when I started thinking about UFO's and how that would be quite fun and challenging to animate. I thought it would be a funny idea to have each of the numbers being abducted by the aliens. 

### Part 2 Maeda Clock 

For my Maeda clock recreation, I chose the '12 o'clocks' design as I was feeling extremely rusty with p5.js and this looked like an easy one to replicate. I wasn't sure of how to array the ellipses in the shape of the time I was aiming for so I manually placed them all, which proved quite difficult when thinking about adding the clock hands on each individual one which I ultimately couldn't achieve, but I got the general idea of the Maeda clock down. 

### Part 3 Original Clock 

My strength is visual design so I aimed to make as much as I could of my clock in code so I could challenge myself and hopefully learn some new things. This proved to be a good choice as I realised I was quite out of practice with coding so I was basically relearning a lot which was good as I felt it stuck more this time. 

I started coding by making the UFOs with ellipses and in a way where one was smaller than the other to give depth of field and imply there were numbers all around the scene to be picked up. I then started making the light beams, I started with triangles but then realised I couldn't get the point at the top to animate with my UFO's so I turned them into quads so I could map the 4 corners to shift in and out with the UFO. Before animating the light beams, I placed my hour and minute numbers underneath then started mapping the Y position to the duration of the seconds and minutes so each new number appeared on the ground to be lifted up in time.  

I then started coding the UFO movement to create the illusion of hovering above the numbers, this was done using the class example done by Tom where he was mapping the ellipses using TWO_PI to bob up and down sing millis and seconds. I then adjusted it so both UFOs are offset to eachother. I also used this technique with the light beams by making a new positive and negative variable for 'shift' to add to each vertex of the quad so it streched in and out. 

I wasn't happy with the appearance of the bottom of the beam as it was a flat line, so I added a streched ellipse to the bottom of each light beam to have more of a 3D spotlight effect. Then animated this with the same variables as the beams but with more tweaking. 

### Part 4 Clock Alarm 

For my alarm, I tried a few ideas before settling on my final. Originally I wanted my UFO's to land then add a lighting storm using arrays, but as I thought about it more I thought it would be too jarring on the eyes. I then started trying to code my new idea of having an explosion in the background that revealed a much larger time display in the background. I was having difficulty with mapping colours out of the black & white range and when I tried making them variables (eg. let orange1 = color();) it was not applying the colours at all. At this point I started running out of time so I just followed Tom's tutorial on the colour changing background to make a B&W explosion that reveals a large time display in the background. 

I am happy with this final alarm as it gives the impression of the numbers (currently being abducted) dissapearing from the beam and appearing large and mighty behind the UFOs as if they have come for their revenge. 

### Part 5 Final Clock

I managed to make all the moving/animated aspects of my clock in code which I am very proud of, and only used png's for the background mountains and trees. I did have some trouble towards the end with adjusting my index.html to display the proper information but I believe this is all working fine. If I were to do this assignment again, I would dedicate more time to experimenting with the alarm as I ran out of time towards the end to try achieve my first idea. But overall I am very happy with my design and it's functionality, and look forward to applying what I've learnt for the next project. 