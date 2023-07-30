[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11439596&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Update this file as you go along to record your progress.

I really didn't know what to do for this, I had lots of ideas but not really something that would work. I like the idea of incorporating a car and a road somehow, I thought other options could be one from a drivers perspective and use maybe the speedo and road signs instead - or have a top down view of some car lanes - the cars would have numebers on their roofs - the fast lane being the seconds of course. In the below example the mile signs would show seconds, the minutes in the midground and the hours on the sun - sort of based off the parallax concept.

27/07
Working on changing the colour modes so that they work more cohesively in the landscapes and make sense changing colours in the daytime vs. at night.
I also found a way to use the modulo % to keep the 'hour' numeral a different colour from the rest of the others. This mostly works except at night the background colours are a bit similar, but I think I've found a way around that.
I have begun adding elements to create the alarm - my idea is that the car will start speeding - maybe with a siren and the landscape will start to blur past while the hour flahses. Getting a seamless transition between the alarm going and not may be difficult though.

31/07
Over the past few days I have been trying to add in a transition between the alarm beginning and the regualr time. I don't know if it's possible to do a transition after the alarm has ended though. I'm thinking instead of making all the transitions seamless, I could try adding a bright flash covering the screen that would block out the glitching. At the moment it only works if the millis counter is at the right time - I don't know how to get around that.

Maeda Clock:
I don't know whether this clock needs to be working throughout the day or not - if it doesn't it would be a lot easier to replicate. As it is, it isn't a perfect replica of the original Maeda clock but at least it works - the other issue is there isn't a debugging fuction for that one so making sure it always works has been tricky.

31/07
I think the next thing I need to work on is commenting my code and cleaning it up so it looks nicer. There are parts that I don't know whether I can condense or not.