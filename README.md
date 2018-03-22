## PS1 MDDN 242 2018

### Sine Wave Clock
My design is to have a static sine wave drawn on the canvas with different balls along it, each ball being a unit of time. The distance the balls are along the sine wave relates to the time they represent.

I have got my sine wave clock working as a functioning clock now. Each ball represents a unit of time from smallest to largest - millis to hours and they travel along the sine wave near perfectly, I also had to smooth all of their movement so it wasnt jagged. I have implemented a day/night colour change. From 7am-7pm there is a light yellow 'day' colour scheme and from 7pm-7am there is a dark blue 'night' colour scheme.
I also have a working alarm function, when the countdown starts a red ellipse travels from left to right along the middel line, it takes the alarm countdown time to reach the end. Aswell when the countdown gets to 15 seconds, each second a square of the sine wave 'graph' changes to a light pink, once the whole background is light pink it iterates again over top with a darker pink/red, when the alarm goes off the background flashes between a dark and light pink/red.
