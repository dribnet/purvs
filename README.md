## MDDN 242 2022 Assignment 2

24-27 / 4 / 22:

Today I'm updating "draw_letter.js", "letters.js", "editor.js", "interaction.,js", and "exhibition.js".

Recently, I completed all the letters and numbers as well as fix the existing flaws. I have successfully launched the exhibition and completed the interaction, but I need to review that, so I'll talk to Hazel about it.
In developing my work with a new parameter to resize the center circle. That parameter gave me a chance to fix some bumps and dents. In the letters that were somewhat similar in appearance, I showed a little difference, such as the letters U and V - M and W - B and D.
But I'm still working on the number 2 might change it. I like the numbers are not balanced in height, meaning that some letters look a little shorter and some a little taller. But I'm not sure yet, because I thought that if the numbers were two digits or more, maybe two numbers next to each other could not be symmetrical. But it's debatable, and I'll talk to Hazel about it.
I have not yet chosen a name for my design, but I'm still thinking about it.

Now my recent parameters are:

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

I'll com back with my process.
