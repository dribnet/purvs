## PS2 MDDN 342 2017

I have done a major overhaul of the masking function, and it works much more quickly now. Instead of iterating throught the array of pixels multiple times to set the interior and esterrior of the shape, I iterate through once, directly updating the pixels  of the masking canvas with the pixels from the pattern canvas