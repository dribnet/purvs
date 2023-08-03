# MDDN 242 Project 1: Time-based Media  

## Galactic Orbits by Hannah Newland

Student ID: 300609902

My process began with a sketch. I had come up with an idea pretty quickly, and I sketched it out so on paper so I could translate my idea to adobe illustrator. Initially I wanted the orbits to be closer to what an actual orbit time would be like - the earth orbitting the sun over a year, the moon orbitting the earth over a month etc. I realised pretty early on this wasn't the right way to go, and I actually switched which planets orbitted on each time function around a lot until I found what I thought looked best.

After I made my sketch on illustrator, I wanted to get the code down first and then add the actual planets in later. I played around with the map() function for a bit until I remembered how to use it, and then I added in my placeholder ellipses. I hit quite a few roadblocks trying to get my planets to rotate intially; there was an attempt using cosine and sine functions, and there were many attempts with the rotate function. I finally got them to work using push() and pop(), and translating the placeholder planets all the way out from 0,0. I made maps that would go inside the brackets of rotate() that would get each planet to orbit on its specific time function.

At this point, I was missing a few things to make it fit all the time functions and work like a clock. I created a satellite to be the 3rd time rotation - this ended up representing the seconds. I also wasn't sure what I wanted to do with the sun in the centre. I didn't see myself following my original sketch where I had the rays appear and kind of tick into place with each hour, I wanted something a bit more straightforward.

I created all the planets on adobe illustrator and loaded them in as pngs through an assets file I created. It was a bit tricky getting them to line up properly, but I ended up just changing the x,y coordinates of each image a little bit at a time until it slotted on top of the placeholder, then I deleted the placeholders.

For the sun, I decided on having one ray be slightly longer than the other, and having it tick round like a 12 hour clock (it completes a full orbit twice a day), like an hour hand. 

I created a background on illustrator to fill some of the empty space.


I then started creating the alarm. I knew I wanted to do something like a meteor shower or field for the alarm countdown, so I experimented with some ellipses and a millisecond map to have them fly across the canvas at different distances and sizes. I then made a meteor on illustrator and put it over the placeholder ellipses. 

For the actual alarm, I wanted to do a rocket flying across the screen. I had a lot of difficulty with this, because it was working, but only from the 0 second mark, meaning if the alarm went off at 45 seconds for example, it would wait 15 seconds before the rocket moved. I also wanted to have the rocket get closer and further away from the planets. With some help I changed the movement so it wasn't dependent on the seconds map, but I was still having difficulty getting it to change size because it would expand and unexpand several times before reaching the middle. 

I couldn't quite work out how to resolve the size issue, so I changed my idea and had the flames behind the rocket change as it flew past, like it was flickering. This also took quite a lot of googling to understand just how to get the && AND and ||OR in the if statements to match my conditions. 

I made the rockets on illustrator, and in the end just had my if statement switch between the two different images to mimic the flames changing.

I finished off by removing unnecessary bits of code, and tidying it up a bit.

The end result:

The earth ticks through the orbit on the minute, and is orbitted by the moon which orbits on the millisecond.

The earth and the satellite orbit the sun. The satellite ticks through the orbit on the second. 

The sun itself reflects the hour, with the longest ray pointing to the place where the number would be on a traditional clock.

Once the alarm is set, the countdown is indicated by the meteors. The alarm has gone off when the rocket flies across the canvas.