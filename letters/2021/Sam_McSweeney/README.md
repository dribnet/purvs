## MDDN 242 2021 Assignment 2

(Replace this README with information about your alphabet. This is an example.)

29/4 - Design Process
Overall I struggled with this assignment, I decided to do some thing simple that just used to blocks segemented to be able to make letters and designing the "abc" for the sketch was quite easy and fun and I enjoyed the process, when it came to making the rest of the letters tho I struggled with either being able to represent the letter how Iwould like it and also establishing parameters so that there werent to many and making the code nice and easy to read,
*I struggled with how to make the blocks skip over multiple, I wanted to put the values into an array, and hopefully it would check the array for all values, and then skip all of those. Eventually I had to submit and just have multiple skip values for some of the letters which required multiple skips*
After I had gotten over the array issue, I was able to progress pretty quickly with the designs of the letters and I am overall pretty happy with how most of them turned out. It was definitely a challenge trying to represent all 26 letters and 10 numbers with just 2 blocks and also make them look too similar.
For the final result for the Exhibition i definitly found my font to not be the most readable but this maybe because of the Kearning that is applied between each indivual letter and if there was more space I believe would make the font more readable.

29/4-Update 
- big update i had struggled with getting the letters to turn out how i wanted and wanted the process to be smother in implememting such as all the skips contained within one parameter but couldnt figure out how to get that done so they have been spread more over the letters 
- all letters have been enetered and show on the alphabet page
-added new preview and thumbnail to file to showcase letter 
-intereaction works 
-changed some values in the draw letter code so that it is smoother and added constants for values which do not change over all the letters.
-Letter Testing for alphabet in sketch(later fixed)
-added the var words 

24/3-Update
-inital commit came up with concept and implemented a very rough idea of what i want to do i want to be able to have an array withtin the constants that allows there to be more control over what rectangles are drawn.
-added first preview and thumbnail.
-notes of what i want to implement
-added console log to try and get array working

Each of my letters is composed with 20 Rectangles. The size(X and Y) of each rectangle, and their relation to each other is fixed, but the location of which rectangles are drawn in each coloumn is controlled by these parameters:

The three parameters per letter:
   * `squaresL` : number of squares in left block 
   * `squaresR` : number of square in right block
   * `skipL` : where a block should be skipped (on the left side)in sequence to define shape (there may be more skips than one)
   * `skipR` : where a block should be skipped (on the right side)in sequence to define shae (there may be more skips than one)
   * `sizex` : width of each block
   * `sizey` : height of each block 
   * `offsetx` : x offset of the second block relative to the first one
   * `offsety` : y offset of the second block relative to the first one

