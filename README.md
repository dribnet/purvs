## PS1 MDDN 342 2017

I added a lot of parameterised values to the face. All of the basic facial features have some form of randomisation. A lot of these randomised values do not have too big of a range, as I wanted to try bring out different expressions, emotions and personalities from the faces without completely changing the structure. You can often see a smug happy face, a curious and surprised face, a sad face, and a blank expression. Other emotions are mixed in there but I find those are naturally the most prominent. 

Along with the basic facial features, the colours of the face and earrings also have varying values.  The main face colour is decided between two different values, which combine two separate lerpColor functions together. Contrasting to this, the earring colours are discrete values so they can only ever be one out of five options. 

The hair was probably the biggest and most time consuming challenge yet. Discrete values are used to place segments of the hair on the head, then there is a normal parameterised value to adjust the sharpness of the hair spikes.  It didn't work out great initially, as some combinations of hair would look awful, and not stylized in a dragon ball hair type format. To fix this, I added some conditions to when some pieces of hair could be placed. In other words random discrete values that rely on other random discrete values. I did end up making the centerpiece of hair static throughout each face, as it always seemed like something was needed to tie the faces together.

I also added some shading to the faces. The shading isn't independently randomised, but will match the jawline and ear shape values. The main reason for this was to enhance the clean aesthetic I am trying to draw my faces in.


