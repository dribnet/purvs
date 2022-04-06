## MDDN 242 2022 Assignment 2

6 / 4 / 22:

My final sketch for the alphabet design:

The preview and thumbnail are updated with this sketch today. I try to show a happy face in the form of letters.
I only use the circles for the whole letter design and used 14 parameters: 4 sizes and 8 (X/Y) Locations and 1 space. But all of the parameters are not used for all forms and depend on what I need for that specific letter, might be less or more.
This is for now. I'll come back with the rest of my work one by one.


  let ellSize = 150;  //size of main circles
  let handleSize_x = 25;  // width of handle
  
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


I still think about other letters and might be change my parameters in some parts.