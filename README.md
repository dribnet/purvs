## MDDN 242 2022 Assignment 2

19-21 / 4 / 22:

Today I am uploading the last thing I have done so far. 
I'm updating "preview.jpg", "thumbnail.png", sketch.js", "draw_letter.js", and "letters.js" with changes:

- Change the color palette
- Edit the letters of the D F G H L M N Q R S T V X V Z with a few tweaks to improve the visual display, which can be compared to the last work I uploaded.
But there is still room for improvement and I will work on them.
I'm going to jump to "interaction.js" and "exhibition.js" in the next step and finally push the project forward after the next class on Tuesday.

Also, I used "translate" and "scale" to fix the letters inside the slider box and include them in "push" and "pop" for the effect of "translate" and "scale".

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
   let ellMain_y = letterData["main_ypos"];
   let ell1_x = ell_x + letterData["cntr_xpos"];
   let ell1_y = ell_y + letterData["cntr_ypos"];
   let ell2_x = ell_x + letterData["handl_xpos"];
   let ell2_y = ell_y + letterData["handl_ypos"];
   let ell3_x = ell_x + letterData["eyes_xpos"];
   let ell3_y = ell_y + letterData["eyes_ypos"];
   let ell4_x = ell_x + letterData["cutter_xpos"];
   let ell4_y = ell_y + letterData["cutter_ypos"];


