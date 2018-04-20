## PS2 MDDN 242 2018

This is the Final Alphabet.

Each letters is composed using three equilateral triangles. Each triangle has its own 3 parameters, an X and Y position and a rotation. All three triangles receive a size and scale parameter too.

I created a draw triangle function which takes x, y, size and rotation and scale and creates a equilateral triangle out of the parameters.

using some trigonometry and pythagorus I was able to figure out the position of each point of a triangle as well as its centre point. 

Then by translating the canvas so the the 0,0 becomes the centre of the trinagle allows it to be rotated, after the triangle is rotated, the canvas position and rotation is reset. 

These are the 11 parameters per letter:
  * `size` : length of the sides of the triangle
  * `scale` : scales the size of triangle and keeps all the proportions and relationships the same.

  * `offx` : X position of the first triangle
  * `offy` : Y position of the first triangle
  * `rot` : rotation of the first triangle in degrees

  * `offx1` : X position of the second triangle
  * `offy1` : Y position of the second triangle
  * `rot2` : rotation of the second triangle in degrees


  * `offx2` : X position of the third triangle
  * `offy2` : Y position of the third triangle
  * `rot3` : rotation of the third triangle in degrees

I chose the colors based of a moroccon pallete for two reasons, first I felt the alphabet I had created resembled moroccon tiling, Which was an aesthetic i had admired and appreciated 

I found this project challenging and spent more time figuring out the best way to implement my idea into code, though I found it very easy to code once I had figured out what parameters I needed, and how to go about creating each triangle. 

At the start of the project, I jumped straight into the code and it got very messy very quick, and so I ended up starting over multiple times. 

I dont have alot of experimentation to show and most experimentation was done on paper, I do however have a notebook full of arrangements of triangles that form each letter

Overall though Im happy with the compactness of the code, I wouldve hope to use less parameters, but I actually dont think it wouldve been possible. Although the alphabet I have created isnt the most readable, I like the abstraction of the alphabet and its aethesthetic, If we were able to use more parameters however this alphabet would be functional and readable, as I'd be able to add more triangles. 

