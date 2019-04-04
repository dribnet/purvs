## PS2 MDDN 242 2019

I added the quads to the interpolation code so that these don't just randomly appear when a letter is drawn that has a quad in it. I then realised that this only works when it switches from a letter with a quad to another letter with a quad (eg x to g). To fix this I added a quad to every letter but just hid it in the top left corner. Now when the letter switches from a to k for example a quad will move from the top left to the quad position on k (a smoother transition if that makes sense)

I also made one of the lines have a thicker stroke because I want to make the letters more interesting but I don't think it really works. I thought another thing I could do is make arcs behind the letters to make them more interesting. I have attempted this for the letter A but I want it to be less opaque but I don't know how to do this.

I think the arc idea might look good but I need to figure out how to do it with less parameters since I only have 4 left :(

The parameters I added:
X  position 
`  let Xarc1 = letterData["arcX1"];`
Y position
`  let Yarc1 = letterData["arcY1"];`
Arc width
`  let arcwidth = letterData["arcH"];`
Arc height
`  let archeight = letterData["arcW"];` 
