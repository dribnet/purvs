## PS2 MDDN 242 2019

In the interaction part,there is code that responds	to keyboard	presses	by	
showing	you	the	current	and	last letter	typed.So I add the function in my draw_letter.js file:
new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  
  new_letter["size1"]    = map(percent, 0, 100, oldObj["size1"], newObj["size1"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["arcS"] = map(percent, 0, 100, oldObj["arcS"], newObj["arcS"]);
  new_letter["arcE"] = map(percent, 0, 100, oldObj["arcE"], newObj["arcE"]);
  new_letter["arcS2"] = map(percent, 0, 100, oldObj["arcS2"], newObj["arcS2"]);
  new_letter["arcE2"] = map(percent, 0, 100, oldObj["arcE2"], newObj["arcE2"]);

Then,the codes works well.


 And also, I changed  colorBack and color Lines in the interaction.js file so that the background is suitable for the letters.
The interaction part is dramatic and interesting to animate transition between letters.I like this part.





