## MDDN 242 2022 Assignment 2

6 / 4 / 22:

This is my recent work with updating "letters.js", "draw_letters.js", and "sketch.js".
I've changed my parameters with consideration of the letter requiring.
I have completed the letters A-H. I have difficulty in some letters with my recent parameters. So I'm still thinking about some little changes in parameters to draw the letters easier with the lower number of parameters. Maybe, I can add 2 extra shapes with fixed locations and flexible sizes. With this structure, I can create all the letters easier and with fewer parameters. This way can be helpful for the numbers too.

recent parameters:

 let ell_x = 85;
   let ell_y = 260;
    push();
   scale(0.57)
   // let ellSize = 90;//size of main circles
   let handleWidth = 25// width of handle
 // determine parameters for other circles
 let cntrSize_x = letterData["cntrSize_x"];
 let cntrSize_y = letterData["cntrSize_y"];
 let handleHeight = letterData["handleHeight"];
 let eyeSize = letterData["eyeSize"];
 let cutSize_x = letterData["cutSize_x"];
 let cutSize_y = letterData["cutSize_y"];
 let ell1_x = ell_x + letterData["locCntr_x"];
 let ell1_y = ell_y + letterData["locCntr_y"];
 let ell2_x = ell_x + letterData["locHandl_x"];
 let ell2_y = ell_y + letterData["locHandl_y"];
 let ell3_x = ell_x + letterData["locEye_x"];
 let ell3_y = ell_y + letterData["locEye_y"];
 let ell4_x = ell_x + letterData["locCut_x"];
 let ell4_y = ell_y + letterData["locCut_y"];
 let eyesSpace = letterData["eyesSpace"];
