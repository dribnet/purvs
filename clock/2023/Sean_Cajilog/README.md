[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11442426&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Update this file as you go along to record your progress.

Jul 26
I made a function that drew the main outlines for the clock (shaped like some sort of battery). Then, I called that function into the draw_clock function.
I also played around with what the obj's and maps do - I tried the 'seconds with fraction' as well as making a bar for the "minutes" - I made the height of the rectangle increase every minute.

Then, I made another function and this time it drew a simple rectangle shape that I want to use for the "hours". I called it in the draw_clock function inside a 'for' loop to draw twelve of them inside the main body of the clock (six on the left and six on the right). I tried to make the "hours" bars work (be filled when every hour passes), but on my first attempt, I didn't know how to do it. All I did at the moment is make only one of the bars (and it takes 24 hours to fill up that one bar).


Jul 27
I changed the shape of the main body a little bit (just made it a little taller).

I made two functions (one for the minutes and one for the seconds) that do the exact same thing - draw a line. I used a for loop to make it so a new line was drawn as every second (or minute) passes. However, I chose only the "seconds" to have the lines being drawn. For the minutes, it was back to a coloured bar where the height increases as every minute passes, then resets after an hour.

I also changed the "hours bars" inside the main body. I made it so there were five smaller boxes on the right and five on the left. I did this because I decided to make 1100 and 2300 the last hours (all the bars are filled/coloured) and it resets at 1200 and 0000.

I figured out how to make the bars get coloured as every hour passes, but I had a problem. I only got it to work properly from 0000 to 1100. Firstly, It wouldn't restart at 1200, and secondly, it kept drawing more bars on the right side (outside of the boundaries). I didn't know how to fix it yet so I'll leave it for tomorrow.


Jul 28
I managed to figure out (mostly by trial and error and playing with values) how to fix the problem from yesterday. Now, it works as intended (a bar gets coloured every hour and all are filled at 1100 and 2300 and reset at 0000 and 1200). I was thinking about making the "hours bars" actually "fill up" every minute by making the width of the rectangle be mapped to the minutes but I decided to just leave it.
Now the main bulk of my clock is finished and it's about making it look pretty now.
Then I have to do the alarm as well.

Jul 31 - Aug 01
I started playing around with the colours. Firstly, I made the "minutes" bar be red when it's low, and slowly become green as it gets taller.
Also, I thought of an idea for what to do for the milliseconds - I will have a text that says AM (when it's between 0000 and 1159) and PM (when it's between 1200 and 2359) and it's alpha value will oscillate as the milliseconds pass.
After receiving help, the flashing AM and PM text worked as intended (used sin wave)

Also, I played around with what I wanted the colours to be like and what I wanted the backgrounds to do at different times of the day. I decided to make the background change at 0600 and 1800 (light and dark respectively).

I then gave the clock colours so it wasn't just the default and blacks and whites. I went for a purple theme.
0600 - 1759: The background is a lighter shade
1800 - 0559: The background is a darker shade

+ For the "minutes" bar, I made it go from darker purple to lighter purple (to match the colour scheme) instead of red to green.

Then I did my alarm.
For the countdown timer, a bar (decided to make it red since it didn't look bad and it's a good colour for an alert) was going from max height to min height (at 0 seconds).
The alarm itself is a flashing red (slightly lowered alpha value so you can still see the clock) colour over the whole screen.

The rest was just touching up, cleaning up the code, and commenting.