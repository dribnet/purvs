## MDDN 242 2022 Assignment 2

## Final Submission

### GREENERY

#### Iterations

At the beginning, I wanted to use as less shapes as I can to make my letter forms. Two shapes are not enough, so I started with three shapes: one arc (with an offset arc) and two rectangles(no rotations) and soon I found that I quite like how they making up the weird letter forms.
I even did another letter forms set design which uses four lines to make up letters, see below:

![Four-line design](https://live.staticflickr.com/65535/52051396529_b6158261b3.jpg)

But I think it's difficult to read, though every single letter form has a unique looking, so I decided to stick with my original design.

#### Designs

My letters are in lower-case, so I split (in mind) the bounding box into three parts (top, mid & bottom) to make each letters matching a typography shape. I tried to keep the letter forms unified in some aspect, like the 'b, d, p, q' share the same size and shapes but different positions, and most of the rectangles' x or y size of the letters are same. For the default letter I'm choosing the PI because it's infinite *lol*

When I was choosing colors for my letters I've found they look like plant, especially the two offset arcs reminds me of stems, so I went to this green and red colors.

#### Animation

For the animation part, I've made the shapes of each letter changing size when transforming from one to another. If the shape is small it will grow larger and if it's large it will shrink smaller, which happens in the mid way of animation (percent at 50), and then they will be back to the normal size. Even just typing the same letter the animation will still showing, which gives a smooth and organic feel to the letter forms, like a plant is growing.

So finally I gave my letter forms a font name: **GREENERY**

#### Parameters

- **Arc's parameters**
  - `arcA_PosX` *: arc position X*
  - `arcA_PosY` *: arc position Y*
  - `arcA_SizeX` *: arc width*
  - `arcA_SizeY` *: arc height*
  - `arcA_Begin` *: where arc begins (clockwise)*
  - `arcA_End` *: where arc ends (clockwise)*

- **Rectangle A's parameters**
  - `rectA_PosX` *: Rectangle A's position X*
  - `rectA_PosY` *: Rectangle A's position Y*
  - `rectA_SizeX` *: Rectangle A's width*
  - `rectA_SizeY` *: Rectangle A's height*

- **Rectangle B's parameters**
  - `rectB_PosX` *: Rectangle B's position X*
  - `rectB_PosY` *: Rectangle B's position Y*
  - `rectB_SizeX` *: Rectangle B's width*
  - `rectB_SizeY` *: Rectangle B's height*
