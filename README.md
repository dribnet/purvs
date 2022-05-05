## MDDN 242 2022 Assignment 2

05 / 05 / 22:

The alphabet "emoticon", I designed is Inspired by my default smiley face, which is created with 10 circle shapes in different sizes and dimensions. When I designed the initial sketch, I thought about using it in family, social/cultural, and a bit art subjects. The choice of the "Emotion" name was mostly due to its visual impact. Despite the modern style of this font, its elegance and legibility were very important to me.
I failed several times to code my original design and figured out my code again, but in the end, I got the result I wanted. First, I drew the details of the shapes on paper and explained them. After that, I needed parameters that could be moved smoothly and resized for any possible design.
So, I made successive changes to the parameters, resulting in a general coherence and applicable to all letters and numbers.  Some of the letters and numbers were very similar, such as "w" and "m", "u" and "v", and more. I focused time on how to make them different and I think it was very successful.
After finishing the letters and numbers, I changed the colour of the alphabet, which was very important in visual appeal. The tips I did for polishing my design First, I tried to have them all in the middle of the box and aline them all. Secondly, in most parts, the two cut-off circles I had drawn were a little out of the box. I knew the letters might lose their form by moving the cut-off shapes. It was very difficult, but I successfully move them slowly and carefully.
In the last step, I did the "interpolate" and spent huge time on the movements. I effort more than 15 times for the changes, but I preferred to finish it like what you can see now. It was not difficult, but I get stuck on every method I tried. Maybe if I used other shapes I could use their parameters for animation in this section.
final line: I wish I had more time and worked to animate my design. I think there must be a way I should try.
my parameters are:

   let cntrWidth = letterData["cntr_w"];
   let cntrHeight = letterData["cntr_h"];
   let handle_width = letterData["handle_w"];
   let handle_height = letterData["handle_h"];
   let cutterWidth = letterData["cutter_w"];
   let cutterHeight = letterData["cutter_h"];
   let ellMain_size = letterData["mainSize"];  
   let ellMain_y = letterData["main_ypos"];
   let ell1_x = ell_x + letterData["cntr_xpos"];
   let ell1_y = ell_y + letterData["cntr_ypos"];
   let ell2_x = ell_x + letterData["handl_xpos"];
   let ell2_y = ell_y + letterData["handl_ypos"];
   let ell3_x = ell_x + letterData["eyes_xpos"];
   let ell3_y = ell_y + letterData["eyes_ypos"];
   let ell4_x = ell_x + letterData["cutter_xpos"];
   let ell4_y = ell_y + letterData["cutter_ypos"];
