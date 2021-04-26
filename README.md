## This is my final read me

### Overall Project

I really enjoyed working on this project. Thanks to our first assignment, I was a lot more relaxed and confident using p5.js and finding ways to fix or create some things.
I am quite happy with the overall project progression and with my final alaphabet.

In the future I would like to be able to change the design of the background with shapes and different colours to maybe elevate de design even more.

### Interpolations

The size of each element interpolates to the default size before interpolating to the new shape's size. This helps to see the change in letter even when you press the same one twice in a row. It also gives a nice bounciness to the overall interpolation of the letter.
The interpolation of the arc and rectangle's angles are left to default as they did not look nice when I changed them.
I also made the offset of each shapes start at 30% to give them a little bit more of a snapping affect which goes well with the bounciness of the size interpolations.

### Inspiration

This alphabet takes inspiration from [**Wassily Kandinsky**](https://www.wassilykandinsky.net), a Russian painter and pioneer of abstract art (1866-1944).
The [**Bauhaus art**](https://i.pinimg.com/originals/af/be/fb/afbefbd7da9a1aea6ddf6237a48f7b50.jpg) movement inspires the colour palette as Kandinsky took part in it.

### Letters composition

Each of my letters is composed of a circle, an arc and a rectangle. The size and position of each shape vary, the arc start and end, the rectangle rotation, and the rectangle rotation.

### Parameters

There are twelve parameters per letter:
  * `size` : height of the rectangle
  * `recOffsetx` : x offset of the rectangle
  * `recOffsety` : y offset of the rectangle
  * `rectAngle` : angle of rotation of the rectangle

  * `size1` : radius of the ellipse
  * `offsetx` : x offset of the ellipse
  * `offsety` : y offset of the ellipse

  * `size2` : radius of the arc
  * `arcOffsetx` : x offset of the arc
  * `arcOffsety` : y offset of the arc
  * `angleStart` : angle start for the arc
  * `angleEnd` : angle end for the arc