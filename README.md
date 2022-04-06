## MDDN 242 2022 Assignment 2

6 / 4 / 22:

I updated "sketch.js", "draw_letters.js", and "editor.js". 
I think this code need to upgrad with extra parameters for the shapes 
because some letters complete with more shapes with different sizes and locations so those need parameterizing.

this is my recent parameters for this stage:

   let ell_x = 50;
   let ell_y = 150;

   let ellSize = 90;//size of main circles
   let handleSize_x = 20// width of handle

   // determine parameters for other circles
   let cntrSize = letterData["cntrSize"];
   let handleHeight = letterData["handleHeight"];
   let eyeSize = letterData["eyeSize"];
   let cutSize_x = letterData["cutSize_x"];
   let cutSize_y = letterData["cutSize_y"];
   let ell1_x = ell_x + letterData["locCntr_x"];
   let ell1_y = ell_y + letterData["locCntr_y"];
   let ell2_x = ell_x + letterData["locHandl_x"];
   let ell2_y = ell_y + letterData["locHandl_y"];
   let ell3_x = ell_x + letterData["locEyes_x"];
   let ell3_y = ell_y + letterData["locEyes_y"];
   let ell4_x = ell_x + letterData["loc4X"];
   let ell4_y = ell_y + letterData["loc4Y"];
   let eyesSpace = letterData["eyesSpace"];

I still think about it how can I build my letters with less parametersand I hope to find some way.