# MDDN 242 Project 1: Time-based Media  

## Plant O'Clock by Jade Little

Original Sketch:

My original idea for my code was to be of a plant and a solid colour as the background. However, at this stage I wasn’t certain about the background and how to make it more interesting. To act as a clock, there were to be 12 leaves starting as white – one leaf appearing yellow each hour.  The AM would be represented by the first 12 hours leaves being yellow, then the PM 12 hours would be green (slowly changing the leaves from yellow to green, one by one). The plant pot itself was to represent the minutes and the seconds. The minutes were to be represented by the collar of the plant pot, where the time would count up from 0-59 and then reset. There was going to be small circles that would appear – representing the seconds (0-59) – on the main part of the plant pot. 

This idea was still in its early stages, and I hadn’t developed it properly at this point. The main objective for the initial sketch was to roughly showcase my pot plant idea. This idea was based of the nurturing/growth of plants, and how they change throughout the seasons (hence the colour changes in the leaves, and them slowly appearing).   


Maeda Clock:

I chose to recreate clock #9 of the maeda clocks https://codingtrain.github.io/12oclocks/#clock-09 

I picked this maeda clock because I liked the concept of having the numbers made up of small clocks. This was a little tricky for me to recreate as I was a bit rusty at coding, so it took me a bit longer to recreate than I would've liked. 


Final Clock and Alarm:

When starting on my final clock design, I still loved the concept of my plant idea, but I wasn’t particularly happy with my initial sketch execution. I felt in particular that the minutes representation was very boring just showing the time, and the background lacked interest. I also didn’t love the idea of the seconds being displayed by small circles appearing on the plant pot. Overall, I wanted more visual interest in my design, rather than just having a single plant. 

There was mention in the initial feedback to have the plant being watered, this sparked an idea of how to effectively display my plant nurturing concept. Therefore, I decided to have rain drops in the background to represent the plant being watered. These rain drops are mapped to the seconds and milliseconds, so they flow gently down the screen. However, there was some trouble with the rain drops initially, as I had placed each rain drop where I wanted it, and hoped to have one rain drop appear every second, and then all 59 would disappear when once a minute had passed. This idea meant that there was going to be a lot of code required to achieve this, and it was apparent that it would be quite distracting visually due to the speed they would be appearing/disappearing at. Therefore, with lots of discussion, these raindrops were changed to having 5 rows of raindrops gradually falling. So, when the raindrops are all on the page, this is the start of the seconds countdown. Then when they are all off the page, this marks 59 seconds, and then the process starts again once the full 60 seconds has passed. I think the overall look of the raindrops turned out really well and compliments the plant nicely. I'm aware that the raindrops don't act completely like they would in real life, as they aren't continuously falling (instead they move down the page), but I felt if i were to represent them accurately then the amount of seconds that had passed would not be clear. 

The leaves stayed relatively the same from the initial idea. The difference here is that instead of already having the leaves drawn, the plant starts with no leaves. For the first 12 hours (AM) the green leaves are appearing one by one. Then for the second 12 hours (PM) the leaves are gradually changing from green to orange each hour. After 18 hours have passed (in total) the left leaves will stay orange, while the right side will continue fading between green and orange. At 24 hours all leaves are orange. The background is also mapped to the hours and reinforces visually what hour of the day it is, by gradually switching between night and day sky. 

After going back and forth lots on how to represent the minutes, I settled on the idea of having a bee slowly moving across the screen. The movement of the bee from the far left side of the screen to the far right side of the screen, is coded between 0 and 59 minutes. Then once 60 minutes has passed the bee will reappear on the far left hand side of the screen, and repeat its motion. To give the bee a more life like appearance, I have added a 'wiggle' to the bee, to make it seem like it's actually flying, like it would in real life.

The bee may not make a heap of sense at first, however, the idea behind this is that the bee is waiting for a flower to pollinate. Therefore, when the alarm goes off, a flower appears (replacing the leaves) and the bee pollinates the flower. Furthermore, since a flower has appeared, the rain stops, and the sun comes out. As there is no sound to the alarm, I wanted to have the sound represented by the visuals some way. In the end, I have made the flower spin and increase/decrease in size to achieve this. 


Flower rotation code credit:

I borrowed and adapted this code to make my flower rotate in the alarm screen. 

Rushcode.(2021, January 29). How to Rotate Multiple Objects in Javascript Coding on P5.js - 10 subscriber special. [Video]. Youtube. https://www.youtube.com/watch?v=H6QQIZeVuew 
