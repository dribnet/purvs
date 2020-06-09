## Creative Coding 2: Custom Pixel

THEME: Awareness of Our Wildlife

For my theme, I decided to shift my theme from landscape to wildlife, as I wanted my pictures to have a central focus, rather than several focus points, differentiating between the different aspects that can be captured in landscape photos. I decided to focus on the Kaka, a native species of bird of New Zealand, that is considered endangered.  As someone who grew up only seeing native birds inside aviaries and other sectioned off enclosures in zoos, my personal interaction with them was limited. However, when I visited Zealandia for the first time, I was shocked and pleasantly surprised at how different an experience it is, and how visitors were able to have more closer interactions with the wildlife there. Due to the devastating effects of COVID-19, Zealandia has been kind enough to offer free entry for visitors. This kind gesture made me realize that this gave many more people the opportunity to not only enjoy the company of the wildlife there in a more intimate way, but to also remind them that these creatures can only enjoy this sanctuary so long as we do our part to protect them and their environment.

GRID EXPERIMENT 1

For my pictures, I solely focused on using a basic grid system for my pictures, so I could start getting a better understanding of how I could pixelate it. I noticed right away that larger pixel squares omitted some of the finer details of the Kaka. Since the Kaka will be the main focus of the photo, I will need to use smaller shapes, so that finer details of the Kaka are more apparent to the viewer. I am also considering whether or not I should add statistics to add to the informative aspect of my theme.

const tileHeight = 10;
const tileWidth = 10;

for (var x = 0; x < sourceImg.width; x = x + tileWidth) {
  for (var y = 0; y < sourceImg.height; y = y + tileHeight) {
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    rect(x, y, tileWidth, tileHeight);
  }
}
