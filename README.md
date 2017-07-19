## PS1 MDDN 342 2017

Basic sketch of Jules (from Pulp Fiction) and Prince. The faces have no features other than skin and hair. I think this is an interesting (perhaps contrived) style; currently the sketch attempts to illicit facial recognition with the minimal detail possible.

I thought it would be interesting to try and do two people with very similar hair styles, as a way of testing whether or not the art style is able to clearly articulate the difference between them. In future, I would like to extend the sketch with portraits of Marilyn Monroe and Donald Trump, another pair of similar skin/hair colour who both have fairly definitive hair styles.

The portraits are based primarily off these images:
![Jules](http://i.imgur.com/BLOtTtL.jpg)
![Prince](http://i.imgur.com/2blD1c7.png)

Their facial hair is generated relative to a few scalar parameters and a small number of manually determined points. 

The eyebrows are a hard-coded set of points, which are then mirrored onto the other side. These were fairly painstaking to create. I also think that they are the least effective part of the design. I felt Prince did not have enough defining details without them, and then added them to Jules for consistency. 

The only other hard-coded points on Jules are seven corners of the face, the position of the hair, and the elevated sections of the moustache. 

Prince's moustache is much more highly parametised than Jules'. It is based entirely off the rest of the face, with six additional scalar parameters (although two of them more or less make up a 2D vector).

The colour in the background is a nice aesthetic touch I think, but it serves an important role in helping to identify Prince. Prince is so strongly associated with purple that I beleive the portrait would be much less recognisable without it. This could be considered a failure of the portrait style to effectively communicate. 

I think the background helps for Jules a bit as well. Yellow is the main font colour in Pulp Fiction, and it is also a strong and flamboyant colour, which fits Jules' character.

The use/reliance on colour could probably be considered cheating, but I think it is a pretty interesting way of doing so.