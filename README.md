## MDDN 242 2022 Assignment 2

3 / 5 / 22:

Today, I've added a few fixed shapes/circles like a bright shadow inside my little eyes for better visualisation. Also, I've checked all the letters in the interaction part and the letters continued in the lower part, out of the box -like p, q, and y- need to be shorter. So I fixed those.

My next step is:
Change "systemLineColor" and "systemBoxColor". Because systemLineColor is the same colour as the letters. Communication between lines and letters
In some parts, it has caused a visual error.
Also, I'm still playing around the interpolate part to which the changes. I've applied for some ideas but they've not worked fine in the exhibition. so I removed them:

I'm in the process, and I'll come back with the rest of my changes.

my parameters still same:

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
