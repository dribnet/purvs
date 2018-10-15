## Part 4 - Optimisation

I figured out that the majority of the reason that the higher zoom levels take so long to render is that each canvas is trying to draw every one of the thousands of circles, even if they are not visible within the frame. I put in an if statement which checks whether the circle will be visible before trying to draw it and the program runs a lot better.