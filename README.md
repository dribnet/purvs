## PS2 MDDN 342 2017

SCREENGRABS, in case the sizing is wrong

![My image](https://2.bp.blogspot.com/-5xo14D_phtU/WaRYuKYLChI/AAAAAAAAARg/OgObDNBtW5UR8q1tA0wS-vfN67Od7sZvgCLcBGAs/s320/preview.jpg)

![My image](https://2.bp.blogspot.com/-Hc_PuKowdlo/WaRYMmhNCMI/AAAAAAAAARM/AThAaymlOtc9cFEqRtFfgGivVS6J2AhSwCLcBGAs/s320/grid1.png)

![My image](https://2.bp.blogspot.com/-7zRVkLaRpQg/WaRYQYe9rdI/AAAAAAAAARY/IVLTkJsWNncBKg97v2GYoJVdlDkNWKJCwCLcBGAs/s320/grid2.png)

![My image](https://3.bp.blogspot.com/-I-thwFcW8K8/WaRYRpVBjeI/AAAAAAAAARc/pyUOZUCfyR8qsFcePL0zmeBkdAy70S6-wCLcBGAs/s320/grid3.png)

![My image](https://1.bp.blogspot.com/-8Y06S4lxjSQ/WaRYQSdauYI/AAAAAAAAARU/Fciatc2Q-WwZ_iqrIDqPzITwbmo7zvgugCLcBGAs/s320/grid%2Btrain.png)

The grid pattern of faces has been completed and loads when called. Because of the numbers needed to draw I have opted for drawing rag dolls here, rather than pattern faces, which require a lot more processing power. The face object simply creathes and draws the already existing rag doll objects, it also creates the random numbers, stored within a SliderValues object.


The patterned face is drawing in aproximately the right size and placement, still as an object, however there are still issues  with the amount of time it takes. I intend to use a different method for creating the masking, whereby each pixel is only checked once, regardless of how many different patterns are being created. I intend to do this by creating a masking canvas, for each shape that will be rendered in a different pattern a Red value will be assigned, and the shape drawn in that colour. Then the pattern canvases will be created. The pattern and mask canvases will both be converted to arrays of pixels. If a pixel in the mask array matches the key colour of a pattern array, then the mask pixel at that position will be set to the pattern pixel colour at that position, otherwise it will be left clear.