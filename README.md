## MDDN 242 2021 Assignment 2
**Overall project**
At first, I was extremely intimidated by this project. Hence me taking a few steps back from my first sketch and just starting to draw my letter in black and white. After hitting a creative block this helped me develop the overall look I was trying to achieve without having to worry about other major aspects like color etc.

I'm really happy with how my alphabet turned out and the progress I've made from the start of this project. I'm walking away with more knowledge of p5.js compared to when I started. I am happy that I maintain a unified size among all the letters, making them look more aesthetically pleasing.

**Inspiration**
I've been researching how geometric shapes make up letterforms in
Typography which has made me view letterforms in a completely different light. Leaving me feeling inspired to create my alphabet from some geometric shapes in p5.js.

As a [Pop Art](https://www.tate.org.uk/art/art-terms/p/pop-art) enthusiast, my overall design approach is inspired by pop art.

Now that I am at the end of my project I feel like creating my alphabet from geometric shapes complements the pop art-inspired theme I was aiming to achieve.

Format: ![Inspo pic](https://www.vecteezy.com/vector-art/555479-modern-pop-art-font-effect)

**Background Information**
Because most words used in a Pop Art Space make use of an uppercase alphabet, I've used a lowercase alphabet. Because after all, Pop Art began as a rebellion against traditional forms of art so why not rebel against the original pop art?

Because I used a lowercase alphabet, I purposely drew the letters smaller than the box that served as a guideline.

Pop art is characterized by its bold and bright colors, black outlines, hard-edged compositions, and fragmented shapes. Hence why I used the rectangle, ellipse, and half an ellipse(arc) to create my alphabet. The rectangle represents the hard-edged compositions, and multiple little dots represent the fragmented shapes.

I designed this alphabet with the idea of it being used as a heading text, as it's too busy to be a body text.

In my purview.json I included my first sketch, and my second sketch because my final work is a combination of the two fused together.

In total, I have 15 parameters. I would have 12 but I kept one for the width of the rectangle allowing me to have more control over it for aesthetic purposes and there was a problem with the translation of the rotated texture(dots).  The only way to fix it was to add 2 extra parameters. The transition of the x axis, and the transition of the y axis allowing me to get the position perfect.

I have 15 parameters:
*Shape1 the arc*
1. size: The size of the arc
2. offsetx: x offset of the arc
3. offsety: y offset of the arc
4. arcStart: starting angle for the arc
5. arcEnd: ending angle for the arc
*Shape2 the second circle*
6. size1: The size of the circle
7. offsetx2: x offset of the circle
8. offsety2: y offset of the cicrle
*Shape3 the rectangle*
9. width: width of the rectangle
10. height: height of the rectangle
11. offsetx3: x offset of the rectangle
12. offsety3: y offset of the rectangle
13. angle: angle of rotation of the rectangle
14. translatex: the x translation for the degree of rotation
15. translatey: the y translation for the degree of rotation
