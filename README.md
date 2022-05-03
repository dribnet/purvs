## MDDN 242 2022 Assignment 2

3 / 5 / 22:

Today, following of previous plan list, first I've changed my "systemLineColor", and then came up with the idea of blinking the eyes between the "oldObj" and the "newObj". that become very funny.
But what might be a problem caught my eye: in the "interaction" section the letters still need another step for their final shape after 100%. This is something to talk about, I will definitely share it with Phoebe or Hazel.

I'm still working on "interpolate" to animating my design if that possible.

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
