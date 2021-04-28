## MDDN 242 2021 Assignment 2

PROTOCOS
For project 2 of MDDN242, we were tasked with creating a customised representation of the alphabet which share common elements and differ between each respective letterform using p5.js. It was encouraged to use 12 or fewer parameters. In my earliest sketch, I scribbled down on pen and paper an uppercase triangular typeface using only two triangles to represent each letter. I knew it would be difficult to represent letters such as "E", "M", "S", etc. but I persisted and kept on working with this concept. I came up with the name for my project "Protocos" by joining the words "proto" (the combining form/prefix for "original" or "primitive") because I stuck with one of the first concepts I thought of for this project, and "cosine" because, well, triangles. While this font is simple in concept, I am happy with how I used the limited parameters to represent a stylised and angular alphabet letter set.

SKETCH
In the Sketch section, you will see my first coded version of the Protocos font. Simply put, A B C was the beginning stage of my project and led to an onslaught of challenges. The letterforms work by having each parameter plugged into one point of each triangle. Two triangles = 12 parameters. The first triangle uses the parameter points 1A, 2A, 3A, 1B, 2B, 3B. The second triangle uses the parameter points 1C, 2C, 3C, 1D, 2D, 3D. The first triangle connects as follows: A1 to B1, A2 to B2, A3 to B3 [triangle(A1, B1, A2, B2, A3, B3)]. The black triangle connects as follows: C1 to D1, C2 to D2, C3 to D3 [triangle(C1, D1, C2, D2, C3, D3)].

ALPHABET
When I got my first rough version of my alphabet down, I combed through to decide which letterforms weren't 'readable' enough (E, M, N, W, etc.) and refined them to become as readable as my 12 parameters and negative space would allow. I will admit that I'm not entirely thrilled that I stuck to using a lowercase E while everything else remained uppercase, but other than that I'm pretty happy with how I used angles  and negative space in the midpoint of the M and W to create the illusion of a three-pronged letter, and the N uses the red triangle to create the first two stems of the letter and the black triangle finishes off the final upward stem. I'm pretty happy with how I problem-solved the more difficult letters in this set. For my default character I decided to make an underscore as it is both a neutral character and allows to act as a space if you write more than one word in the exhibition panel.

EDITOR
As I progressed through this project I found that the easiest way to work out the coordinates for each letterform was to plug my parameters into editor.js. It helped to have the sliders intuitively correspond with each point in the triangles, and pretty quickly I found myself with a rough version of every letterform.

INTERACTION
What I hadn't accounted for was applying each point of the triangles consistently throughout the letterforms, and I found that the triangles would flip flop and mirror on themselves during interpolation, causing a kind of janky and cluttered animation. I knew this wasn't what I wanted, so I sat down with editor.html and painstakingly ensured that each coordinate was plotted consistently relative. To most effectively achieve this result I used functions to create custom shapes which allowed me to plot different coloured dots on the points of each triangle. You can see this in more detail in my "Debugging" block commit.

EXHIBITION
When I was debugging my work, I found that many people responded well to including an accent on each point of the triangles, so I toned it down a bit, opting for smaller off-white rectangles. When I did this it reminded me of the anchor points featured on the border of your shapes in Adobe Illustrator (and most other photo editing/drawing software). The interpolation sees a varied delay between points when transitioning between letters, with the purpose of adding to that "anchor point" feel, as if each letter is being edited in Illustrator with each interpolation. You can find an alternatively styled Protocos letter set in my "Stylised" block commit, and a stripped-back version of Protocos in my "Stripped-Back" block commit.
I hope you enjoy. Christopher.

