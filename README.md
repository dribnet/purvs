[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11440819&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

17/07/2023
Begin work on maeda clock task, I have decided to recreate 7th clock where AM/PM is centered, whereas the actual time behaves like a clock hand.

18/07/2023
I finished a prototype for my clock, this only runs on the minute hand. In order to add points to a circle I used code from this webpage:
https://www.alpharithms.com/evenly-spacing-objects-around-a-circle-in-p5js-processing-180222/
The movement of the points however, I did by myself.

19 - 24 July
I successfully implemented the hours and minute rings

26/07/2023
Created alarm ring that fills up as it counts down. I have yet to add a proper alarm active mode.

31/07/2023
I have further implemented the alarm function. I initially wanted to have the ring flash once the countdow hit zero. However, my attempts to do so kept freezing the program. Instead, when the countdown reaches zero the colour scheme changes to an orange palette.


HOW TO READ THE CLOCK:

The inner-most ring are the seconds. There are 6 points that move in a circle, each at different speeds. If three points converge at the top, and the rest converge at the bottom then 30 seconds have passed since the minute started.
If all points coverge at the top this means that a minute has passed.

This same principle is also applied to the middle-most ring, the minutes ring.

The outermost ring behaves exactly like an hour hand on a real clock.

I was inspired by the clock in the PlayStation 2 menu. where dots would move around at different rates, converging once a certain unit of time passed. However, that version has the points move in a 3D space. My version can only use a 2D plane (unless I use the 3D aspect of p5js)