## Creative Coding 2: Custom Pixel
EXPERIMENTATION WITH RANDOM

For this experiment, my main focus was to abstract the background much more, as the Kaka could not be seen too well. With this intention in mind, I decided to use random and lines to create more texture, as well as abstract the background more. I experimented with the cross-hatching pattern that Phoebe demonstrated to us, and I decided to also plug in my x_step and y_step variables, to see how changing the spacing would affect my background. The effect was very interesting, and I could see that my background had become more abstract. I do like the animated effect, however, I know that I will definitely have to bring the saturation down or play with the colour, so that as the cross-hatching shapes continue to layer, that the background does not become too bright. I am also deciding whether to have squares or ellipses for my Kaka, as I do feel that the squares make them look very digital, while the ellipses make them look more organic and painterly. With this new discovery, I have decided to flag the addition of text, as I feel that the background and the Kaka will stand stronger on their own, and with alot already happening, I feel that the addition of text with make my photos look cluttered.

function draw () {
  for(let i=0;i<4000;i++) {
     let x_line = floor(random(sourceImg.width));
     let y_line = floor(random(sourceImg.height));
     let pix = sourceImg.get(x_line, y_line);
     let mask = maskImg.get(x_line, y_line);
     fill(pix[0], pix[1], pix[2]);
     stroke(pix);

  let point_size = 45;
  let dice = random (1,6);
    if(mask[0] > 200) {
    noStroke();
    fill(0);
    }

    else {
      line(x_line + x_step, y_line, x_line + x_step + point_size, y_line);
      line(x_line, y_line + y_step, x_line, y_line + y_step + point_size);

      }
        }

        for (var x = 0; x < sourceImg.width; x = x + x_step) {
            for (var y = 0; y < sourceImg.height; y = y + y_step) {
              let pix = sourceImg.get(x, y);
              let mask = maskImg.get(x, y);

              if(mask[0] > 128) {
                fill(pix);
                stroke(pix);
                rect(x, y, tileWidth + 5, tileHeight + 5);

              }
            }
          }
        }
