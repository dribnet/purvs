[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11448456&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Update this file as you go along to record your progress.

for this project, i wanted to visualise time with a grim reaper theme, while sketching my ideas, i wanted to incorperate themes like the grim reaper and its signature weilding the scythe, i also wanted to incorparate souls in some way. 

further deveolping idea i sketeched out a grim reaper character and its holding a scythe and lantern. my idea is for the latern swaying left and right to represent the seconds on the clock. and for the minutes i designed the "minute necklace", the grim reaper will be wearing this necklace and it will show the minutes passed on the face of it. and for the hours i wanted to make the amount of souls floating around represent the hours 0 to 24 souls. the design aestehtic i was initially going for was a scarier theme but i want to make it alittle more playful by not using dark colors but a pretty chill color pallete.

throughout designing the images on CLIP STUDIO PAINT, i managed to get the outlines i wanted, as for the colors i liked the way the water color pen looked. i have finished designing and coloring the assets i need. 

im now trying to implement by images to vs studio, for my process i want to work on seconds then minutes, then hours. 
for seconds, i loaded in the first 2 images (the grim reaper holding a lantern, the animation being played will be it swaying left to right).
after i loaded the images into vs studio i am ready to bring my idea to life so first i stored seconds into a variable then next i needed to make a function that fires every second.
i struggled with this initially but after some researching and testing i got it. i first made a variable and made it compare variables with the seconds value, if the numbers didnt match then every second the variable would update and compare values again so every second, it would run the code below every second which updates the lantern swaying images.

the next part of this process way the Minute Necklace, this was quite easy all i did was display text on the screen that updates with the minutes variable that i made, and i positioned the text in the middle of the Minute Necklace, also changed the color and font to my liking.

for the hours i had to import all the soul images which was 24 images and every hour, it would display the next image, this was quite easy because i made a function where the image would update according to the hour number 0-24. so this function would do its thing every hour. i also created a little animation where the souls move up and down in unison using the milliseconds variable, i mapped it to my liking and made the souls update their position. (i made alittle function that i played around with, overall it just makes the souls shake very quickly, like they are vibrating)

the background will update every 12 hours, this is how i further developed my idea to somehow represent AM  and PM.

the Alarm function was simply designed, when the alarm is off, the scythe is a regular scythe, when you turn on the alarm the scythe changes its form going into a more bloodier scythe, and when the alarm is going off it changes to a more angelic brigther form, the scythe also moves to the variable that i mapped.

in conclusion i liked the design aesthetic  of this project and i think the execution was ok from me, although it was quite simple i think its fun to look at and if i wanted to develop this idea further i would make more things move such as the robe.
