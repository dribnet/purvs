## MDDN 242 2022 Assignment 2

1 / 5 / 22:

Today I'm updating the last change of Letter F. I've changed the letter F because That was look like capital F but all of the letters are based on the lowercase style (according to the Hazel's feedback).

I have plan to work on alignment of some letters on the cut off parts, they are out of the box at some parts. Also,I'll working on the numbers height, some of those are taller and some shorter. I need to aline them in same height (shorter).

I'll come back by my process.

my parameters still are:

   let ell_x = 80;
   let ell_y = 260;
    push();
   scale(0.57);
   translate(10,10);
   // let ellSize = 90;//size of main circles
   let eyesSize = 25;
   let eyesSpace = 40;

 // determine parameters for other circles

  let cntrWidth = letterData["cntr_w"];
   let cntrHeight = letterData["cntr_h"];
   let handle_width = letterData["handle_w"];
   let handle_height = letterData["handle_h"];
   let cutterWidth = letterData["cutter_w"];
   let cutterHeight = letterData["cutter_h"];
   let ellMain_size = letterData["mainSize"];  //// new parameter
   let ellMain_y = letterData["main_ypos"];
   let ell1_x = ell_x + letterData["cntr_xpos"];
   let ell1_y = ell_y + letterData["cntr_ypos"];
   let ell2_x = ell_x + letterData["handl_xpos"];
   let ell2_y = ell_y + letterData["handl_ypos"];
   let ell3_x = ell_x + letterData["eyes_xpos"];
   let ell3_y = ell_y + letterData["eyes_ypos"];
   let ell4_x = ell_x + letterData["cutter_xpos"];
   let ell4_y = ell_y + letterData["cutter_ypos"];
