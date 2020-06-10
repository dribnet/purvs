## Creative Coding 2: Custom Pixel
EXPERIMENTATION WITH GREY MASKS

I decided to explore the idea of using text and grey masks, as I wanted to be able to know how to code it in, in case I decided to change my mind about not using text. After checking out the console.log, I discovered that the colour that kept appearing aside from 255 and 0 was 60. Using this number, I used it to RGB colour my text for my mask, and decided to have the text drawn in ellipses, to contrast all the straight edges from my cross-hatching and and squares. I was very happy with the result, and I decided to keep the text. I also decided to keep the squares for the Kaka, as they captured more of the finer details of the Kaka, which helped to really contrast the Kaka against the abstracted background.

For the background, I decided to try and see what it would look like without the animation. I liked how the new effect allowed more of the background to be seen, so that the colouring was not only darkened, but it also further abstracted the background. By adding another layer (in this instance, another mask if statement), I was able to halt the animation. However, I do in a way miss the animation, and I liked how it gave the background movement, which further contrasted it against the text and the Kaka. I am undecided as to whether or not I animate the background, or leave as is.

for(let i=0;i<8000;i++) {
   let x_line = floor(random(sourceImg.width));
   let y_line = floor(random(sourceImg.height));
   let pix = sourceImg.get(x_line, y_line);
   let mask = maskImg.get(x_line, y_line);
   fill(pix[0], pix[1], pix[2]);
   stroke(pix);

let point_size = 90;
let dice = random (1,6);
//console.log(mask[0]);

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
              rect(x, y, tileWidth, tileHeight);
            }

            else if (mask[0] == 60) {
              fill(255);
              noStroke();
              ellipse(x, y, tileWidth + 1, tileHeight + 1);
            }
          }
        }

        if(mask[0] > 60) {
        fill(pix);
        stroke(pix);
        }
      }
