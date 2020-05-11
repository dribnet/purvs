## MDDN 242 2020 Assignment 2

Doing further work on my alphabet file to creat the rest of the letters. 
It's a bit fiddly to work with but I drew up the shapes of the ideas I'm working with so it's easier for me to tweak it to the way I want. (see idea.png and idea 2.png).

They're not looking as round as cutsy as my drawings since the arc is a perfect circle while in my mock-up I've used more, a circle but with a line cut through it. kind of model. I'll probably end up trying to use a bezier curve to get the look right but for now I'm just going to work with the arc.

The lines that define the letter the most are the most difficult to code for. It figured out that the origin of the box in which they're drawn is the top left corner which took me a while to get as I'm used to graphs where the y value is positive when going up instead of down. I hope I can get used to it soon. 

it's a bit of a challenge to get the words to fit inside the boxes but once I figured out that it was 100x200 it made it a lot easier

I have 12 parameters per letter:
  * `height` : the height of the arc 
  * `width` : the width of the arc
  * `line 1 x1` : x coordinate of first point of first line
  * `line 1 y1` : y coordinate of first point of first line
  * `line 1 x2` : x coordinate of second point of first line
  * `line 1 y2` : y coordinate of second point of first line
  * `line 2 x1` : x coordinate of first point of second line
  * `line 2 y1` : y coordinate of first point of second line
  * `line 2 x2` : x coordinate of second point of second line
  * `line 2 y2` : y coordinate of second point of second line
  * `angleStart` : begining angle of arc
  * `angleEnd` : ending angle of arc
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

