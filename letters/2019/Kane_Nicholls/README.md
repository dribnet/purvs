## PS2 MDDN 242 2019

(Replace this README with information about your alphabet. This is an example.)

Each of my letters is composed with a rectangle and two arcs. 

The fourteen parameters per letter:

  * `CPX1`: centerpoint of first arc XPosition,
  * `CPY1`: centerpoint of first arc YPosition,
  * `R1`: Radius of first arc,
  * `SA1`: staring angle of first arc,
  * `EA1`: ending angle of first arc,

  * `CPX2`: centerpoint of second arc XPosition,
  * `CPY2`: centerpoint of second arc YPosition,
  * `R2`: Radius of second arc,
  * `SA2`: staring angle of second arc,
  * `EA2`: ending angle of second arc,

  * `X1`: starting XPos of rectangle,
  * `Y1`: starting YPos of rectangle,
  * `X2`: ending XPos of rectangle,
  * `Y2`: ending XPos of rectangle

my font is named swizzles becasue my font kinda swizzles around to form the next letter.
i progresssed my initial sketch idea by adding colour to the 2 arcs so define how each individual letter interpolates to the next one.
i also made all of it have alpha as i didnt stay inside the box for all of my letters.
the reason some of then dont fit is becasue every arc i used is a perfect circle or a part of one so letters like D, O and Q which are very round cant fit into a rectangle
the reasons i chose such vibrant contrasting colours is so that you can keep track of how each arc moves and transitions around the letters.
the rectangle in the letters is very minimal becasue not every letter needs it and another colour makes it very overwhelming.
to make the smooth interpolation work the start angle always had to be smaller than the firt so it doesnt overlap.
