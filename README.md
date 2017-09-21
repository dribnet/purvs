17.2.MDDN342 PS3

This readme explains my assignment 3 sketch.
This version contains a lot of focus on technical development, in terms of a gui. It also contains a much better version of my old SliderValues object. Now called ValueScaler it is created  with no parameters. It has functions that can take ten focused random numbers defined outside the object.  It also has a function that creates ten unfocused randoms within the object itself, finally it has a method which takes seven sliders and stores them. 
Then when a value is required, it takes a value between 1 and 27, indicating which value should be scaled, the minimum and maximum numbers, and whether the value being returned should be rounded to an integer. This function also now handles the case whete the number is rounded, ensuring that the number of representations is fairly met and there is no number that is massively under-represented.
![experiment]()



