## PS2 MDDN 242 2018

Andrija Djorovic

My alphabet is based on the Morse Code, where the order of the goes from top to bottom.

this was not my first idea, but I ended up on it.

My first idea was to have a 3D cube subdivided into a grid, and then a letter in called it would pop the needed subdivisions with some sort of extra feature, would it change color or something else.
The cube would be divided in a 7x7 grid, and all the letters would look like the letters used in the original Nintendo Game Boy and Game Boy Advance Pokemon games(Red/Blue/Gold/Silver...).
After talking to Tom and seeing that there was a limit to how much variable I can use, I could not make that happen. So I decided to look at other inspirations, maybe something more simplistic.

After looking for inspiration I found Braille, I was simple. But I found it lacking in the usefulness of it, i just did not feel right.
Then I remember Morse code, the idea was similar to Braille, but had more depth and made more sense in a way.

My first idea was to more the dots and dashes around so that they look like the letter they represent, but I soon found out that that as well needed much more than 12 variables for it to look nice.

And that I how I came to this idea, a simple idea with a clean look.

The six parameters per letter:
  * `first` : Object shape(dot or dash) or null; of the first character
  * `second` : Object shape(dot or dash) or null; of the second character
  * `third` : Object shape(dot or dash) or null; of the third character
  * `fourth` : Object shape(dot or dash) or null; of the fourth character
  * `fifth` : Object shape(dot or dash) or null; of the fifth character
  * `offset` : the offset in the y axis; the more characters the smaller the offset(offset = # of null’s)

  * `length and Alpha` : I did not add this into the letter parameters even though they technically are, they are constants that chance in a set pattern in the interaction. So each letter has the same length and alpha

P.S. I was sick for most of the last 2 weeks so I did not show up to most of the tectues and did not do regular work, so my commits are lacking.
