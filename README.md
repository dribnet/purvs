[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11439596&assignment_repo_type=AssignmentRepo)

## MDDN 242 Project 1: Time-based Media  

# Roadtrip Clock | Rita Close | 03/08/2023

### Design Process

For this project, I wanted to create a landscape that would reflect time and be reminicent of it's passing, rather than making a clock in itself. In the panning process I had too many bits of concepts with roman numerals, buildings, cars, hourglasses, sunrises and more - as a result, my final concept became a culmination of these ideas. When I was younger, my family would often go on road trips to see family living far away, so I remember spending entire days in the back of a car, watching the landscpae slip by and the sky fade from dawn to dusk.

The assembly of this idea began by setting up the different spheres of the composition - the rings which show the hours and minutes - as I thought it was important to get the clock working before I added in the scenery as I had time for it. The hour ring was made by setting up the circle of roman numerals and then simply rotating the entire system on the hour - whereas the minute ring was made with many thin rectangles. At first these moved quite jaggedly and it took a while to understand how the different obj.(time) variables effected their movement - it was not until later that I added in smooth transitions between them.

Though it was not essential I spent a very long morning making the car using vertex groups and other miscellaneous shapes, I was following the design of a Chevrolet Impala, but as long as it's recognised as 'classic' that's really the important thing.

I had a bit of trouble with the colours of the sky - I had wanted to have it change so that throughout the day it went from orange, to blue, to orange to black - in the sequence of the day. I think the variable solution I came up with is slightly convoluted but I am yet to find a better alternative. When I switched from RGB to HSB colour mode, things got a lot easier to manage.

Initially the seconds were difficult to make because if they are dependent on the millis/second time variables, the text on the sign would change halfway across the screen (I wanted to have more than one signpost on screen at a time, otherwise they would be too difficult to read). I managed to find a workaround for this problem by creating a second sign for the other half of the screen - even if they give the illusion of travelling the width, they actually reset halfway. The road lines were created in a similar fashion.

I decided to create the landscape using functions, primarily because it would greatly reduce the space it would take up in the code, but also because I found it made customising each part of the landscape a lot easier. To add believeablity to the changing times of day, all of the landscape alters brightness between sunset and night - as well as the lights in the buildings lighting up, much like the car lights do in the same way.

The alarm function was something I hadn't previously planned for and found it really interesting to complete. Although the transitions leave something to be desired - turning the car into a police car and having the landscape speed by is a concept I'm glad I thought of and I enjoyed the visual challenge of making it - I only wish I could add sound to it all.

### Reflection

Overall, I'm really happy with how my clock turned out and I had a lot of fun making it. If I had a bit more time I would look into fixing the transitions going into the alarm as it only works sometimes. I would also look more into the sky colour and how to better transition between the times of day - sunrise to daytime for example. It would also be interesting to add more detail to the landscape and make how it changes throughout the hour more drastic instead of just alternating between the city and the countryside. I think perhaps I could've come up with an alarm that suits the narritive a bit more, but I kind of like it's surprising nature and I do think it looks cool the way it is. It took me a while to figure out how to get the transition between the alarm on/off smooth because all of the transitions were linked to the obj.millis and if you didn't start the alarm at the right time it just clicked to the wrong place. Glad I found a way around it in the Eleventh hour.