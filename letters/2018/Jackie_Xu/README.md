## PS2 MDDN 242 2018
Exhibition:
I suppose I select the the first word because of the characteristic is overlaps.when I overlap the 2D shapes and lines, I'd like to give a sense of 3D of these letters. The original inspriation by my daughter's toy so that I choose the brighter colours, also adding the transparent setting to the overlap layer, hopefully looks more vibrant. Then, some portions of  overlaps are drawn with the shape, the others depend on the order of drawing and the position of shapes.
Totally, I create the style of alphabet for children, that's why I switch the straight line into curve. To fulfill my intention, that's really a long way from beginning to the exhibition version. I absorb some concepts from my original sketchs like the combination of colours and the shapes.
The biggest challenge for me is how to set the appropiate amount of variables. At first, I set so many variables to define every single details. I was thinking of the personality of each letter. with the guide, I started to think of the constant work with variable.
Review the development of Alphabet, I don't know how to track back the previous code, but if having a look at the preview photo, they are not in a consistant style. I unified all the letters and numbers, then, adjust the aethetics, the size, the order of overlap, the positions.
After putting them into the interaction, I have to keep modifying the letters to make the process of animation more naturally.
<!-- Alphabet:
I continued to develop one of my original idea. I used this style to create a couple of letters. In this case, the problem is I need more variables to define the different letter, like the colour for each part, the handle point, and so on. Also, I keep working on the details of my letters.
I got inspried by some of precedent including colours, shapes, and so on.
I try to define my consistent style with adding some constant value instead of variables. Anyway, with all the helps, I work out them within 12 variables. They refined all the details of each letter and number like size, position, joint, ratio, colour, shadow to make them stand out. I use blocks to emphasis the main part because of the contrast between blocks and lines. Also, I draw another shape with transparent colour to show the visual effect.
 -->
 PS: For the exhibition version, the consts and variables.
I set up the constant for colours(fill and stroke); also, I set the angle as degree mode.

I set up eleven parameters per letter are now:
  * `bottomletterX` : the arc1 with filled colour coordinate X
  * 'bottomletterY' : the arc2 with filled colour coordinate Y
  * 'bottomletterR' : the radius of this ellipse
  * 'bRa1' : the beginning of the angle of arc1
  * 'bRa2' : the end of the the angel of arc1
  * 'topletterX' : X axis (the stroke of an arc2)
  * 'toplettery' : Y axis (the stroke of an arc2)
  * 'topletterR': the vertical radius
  * 'topletterR1' : the horizonal radius
  * 'tRa1' : the beginning of the angle of arc2
  * 'tRa2' : the end of the angle of arc2


interaction
unify my letters in a consistent size, position, angle. Especially, I embrace slightly differenct styles in letters and numbers, the numbers look more like hand writing style. The interaction between each letter looks smoothly. one looks like fill the colour into the shape, the other looks the children's hand writing. I'd like to show the animation natrually.

<!-- In the beginning, I had created the original sketch letters. I simplified the background to black, and I drawed the lines and  arcs, I was going to use the 2D shapes to build the 3D form. 

I created 3 different drafts. For the first one, I control the angle of ellipses and the position of lines to contruct different letters.Also, I changed the opacity of colous, looks a little bit like the 3 dimention.
The second one, I used the linear gradient to create the distinctive visual effect.
The third one, I draw the different basic shapes and control the parameter include the position, scale, opacity and so on to show the different combination. Also, I used the superellipse to get the interesting form.
I am going to put them into the system to have a look at what happen next step.
 -->




