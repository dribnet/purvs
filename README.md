## MDDN 242 2020 Assignment 2
SETTING UP INERPOLATION & REFINEMENT OF IDEA

I continued with making my alphabet. I found that the kind of styles I am going for isn't really working, this is because I'm working above the X-height. When I sketched out my letters (pictures below) before I started coding I was working in a square grid (100,100) and now that I'm making them in code I have been using a rectangle grid (100,150) this was because it thought we had to be over X-height but this isn't the case so I am going to go back and change the proportions so they fit in a square grid. I also set up the interpolation between the letters so I could get an idea on how this works. 

The fourteen parameters per letter:
  * `rectX` : x location of the rectangle
  * `rectY` : y location of the rectangle
  * `rectW` : width of the rectangle
  * `rectH` : height of the rectangle
  * `arcW` : width of the arc
  * `arcH` : height of the arc
  * `arcX` : x location of the first arc
  * `arcY` : y location of the first arc
  * `arcS` : angle to start the first arc
  * `arcE` : angle to end the first arc
  * `arcX` : x location of the second arc
  * `arcY` : y location of the second arc
  * `arcS` : angle to start the second arc
  * `arcE` : angle to end the second arc


Sketch Links: 
These also relate to my sketch designs from my first sketch.js i did, I did these before I started coding. 
![Sketch A-G](HTTPS://ibb.co/VHf5ZwT)
![Sketch Lowercase](HTTPS://ibb.co/MVps3Tz)
![Sketch H-L](HTTPS://ibb.co/gMGxGhL)