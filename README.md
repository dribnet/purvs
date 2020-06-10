## Creative Coding 2: Custom Pixel
ELLIPSE EXPERIMENT

For this experiment, I was interested in seeing how ellipses could change my photos. I decided to keep the tileWidth and tileHeight variables the same, as I liked the amount of detail that could be seen on the Kaka. For the background, I wanted to increase the size of the ellipses, so that there was a definite difference between the Kaka and the background. The results were definitely interesting, as the large ellipses in the background made the details more blurry, so that the details of the Kaka were more noticeable. While I enjoyed the blurry effect, the down-side was that the background was not seen as well, and as a result, the background became alot more brighter. If I am to continue along this route, I will need to adjust the background colouring, so that it is still darker than the Kaka, so that the focus remains on the Kaka.

let tileHeight = 5;
let tileWidth = 5;

let x_step = 0;
let y_step = 0;

function draw () {
x_step = x_step + 10
y_step = y_step + 5;

  for (var x = 0; x < sourceImg.width; x = x + x_step) {
    for (var y = 0; y < sourceImg.height; y = y + y_step) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

    if(mask[0] > 128) {
      fill(pix);
      stroke(pix);
      ellipse(x, y, tileWidth + 5, tileHeight + 5);

    }
      else {
        noFill();
        stroke(pix);
        ellipse(x, y, tileWidth + 15, tileHeight + 15);
        }
      }
    }
  }
