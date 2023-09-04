## MDDN 242 2021 Assignment 2
**Overall project**
At first, I was extremely intimidated by this project. Hence me taking a few steps back from my first sketch and just starting to draw my letter in black and white. After hitting a creative block this helped me develop the overall look I was trying to achieve without having to worry about other major aspects like color etc.

I'm really happy with how my alphabet turned out and the progress I've made from the start of this project. I'm walking away with more knowledge of p5.js compared to when I started. I am happy that I maintain a unified size among all the letters, making them look more aesthetically pleasing.

I was going to add more texture with thin black lines underneath my drop shadow using the same method I used to create the little dots but my typeface is already busy as it is. Maybe if I had more time I would look into experimenting more with this.

**Inspiration**
I've been researching how geometric shapes make up letterforms in
Typography which has made me view letterforms in a completely different light. Leaving me feeling inspired to create my alphabet from some geometric shapes in p5.js.

As a [Pop Art](https://www.tate.org.uk/art/art-terms/p/pop-art) enthusiast, my overall design approach is inspired by pop art.

Now that I am at the end of my project I feel like creating my alphabet from geometric shapes complements the pop art-inspired theme I was aiming to achieve.

[Click here for my inspo pic :D](https://www.freepik.com/premium-vector/modern-pop-art-font-effect_2082708.htm)

**Background Information**
Because most words used in a Pop Art Space make use of an uppercase alphabet, I've used a lowercase alphabet. Because after all, Pop Art began as a rebellion against traditional forms of art so why not rebel against the original pop art?

Because I used a lowercase alphabet, I purposely drew the letters smaller than the box that served as a guideline.

Pop art is characterized by its bold and bright colors, black outlines, hard-edged compositions, and fragmented shapes. Hence why I used the rectangle, ellipse, and half an ellipse(arc) to create my alphabet. The rectangle represents the hard-edged compositions, and multiple little dots represent the fragmented shapes.

I designed this alphabet with the idea of it being used as a heading text, as it's too busy to be a body text.

I designed my default character to look like both a question mark and an exclamation mark, it will depend on the viewers' personal interpretation.

In my purview.json I included my first sketch, and my second sketch because my final work is a combination of the two fused together.

In total, I have 15 parameters. I would have 12 but I kept one for the width of the rectangle allowing me to have more control over it for aesthetic purposes and there was a problem with the translation of the rotated texture(dots).  The only way to fix it was to add 2 extra parameters. The transition of the x axis, and the transition of the y axis allowing me to get the position perfect.

All the words I have chosen in my exhibition are directly related to pop art. The name Bazinga! Which may or may not be inspired by Big Bang Theory!  Some of the words I used include:
- MUNDANE! - Artists made use of mundane imagery
- QUESTION - Questioned what art represented
- ADVOCATE -  Promoted contemporary mass culture
- BOUNDARY - Pushed the boundaries of what was acceptable as art
- COLORFUL - Describing word for pop art
- RIDICULE - It ridiculed modern art
- REBELLED - Pop art rebelled against the traditional art standards

**Interpolation**
When it came to the interpolation, I already liked how my letters animated so it came pretty easily. They only need a small amount of tweaking in order for them to transition smoothly.

I left the starting value of the arcs at 0, and the end value at 100 because I already like how they swoosh slowing from one position to another. When I increased the value they go quickly swooshing multiple times making it really hard to focus on the letterform.

I did consider maybe having letters transition quickly and having the effect of jumping them out but I feel because the letter design is already busy this might be too harsh on the viewer's eyes.

I changed the starting values for the sizes of all the shapes to 25 making the transition between each letter smoother which I like.

**My 15 parameters:**
*Shape1 the arc*
1. size: The size of the arc
2. offsetx: x offset of the arc
3. offsety: y offset of the arc
4. arcStart: starting angle for the arc
5. arcEnd: ending angle for the arc

*Shape2 the ellipse*
6. size1: The size of the circle
7. offsetx2: x offset of the circle
8. offsety2: y offset of the circle

*Shape 3 the rectangle*
9. width: width of the rectangle
10. height: height of the rectangle
11. offsetx3: x offset of the rectangle
12. offsety3: y offset of the rectangle
13. angle: angle of rotation of the rectangle
14. translatex: the x translation for the degree of rotation
15. translatey: the y translation for the degree of rotation
