## PS2 MDDN 242 2018

Episode 05

The transition was fixed my changing the following values from their respective const. show below.

  FROM:
  new_letter["w"] = map(percent, 0, 100, oldObj["w"], newObj["w"]);
  new_letter["h"] = map(percent, 0, 100, oldObj["h"], newObj["h"]);
  new_letter["x"] = map(percent, 0, 100, oldObj["x"], newObj["x"]);
  new_letter["y"] = map(percent, 0, 100, oldObj["y"], newObj["y"]);

  TO:
  new_letter["width_1"] = map(percent, 0, 100, oldObj["width_1"], newObj["width_1"]);
  new_letter["height_1"] = map(percent, 0, 100, oldObj["height_1"], newObj["height_1"]);
  new_letter["pos_x1"] = map(percent, 0, 100, oldObj["pos_x1"], newObj["pos_x1"]);
  new_letter["pos_y1"] = map(percent, 0, 100, oldObj["pos_y1"], newObj["pos_y1"]);

Which created an issue which loaded in empty variables that were not clearly showing the following transitions of each shapes..

	(A TOTAL OF 20 values for each rect/circle)
  * this values goes onto 4 eg pos_x4 for each rect
  * `pos_x` : x position of the rect
  * `pos_y` : y position of the rect
  * `width_` : width of the rect
  * `height_` : height of the rect
  * the remaining values go on as pos_x2, pos_x3, pos_x4 and so on.

  
  * The value for x and y for the ellipse is fixed, x = 50 and y 135
  * `c_width` : width of the ellipse is stored here
  * `c_height` : height of the ellipse is stored here

