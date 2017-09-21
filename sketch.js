//This code was modified from flemin's original sketch 'pattern' found on OpenProcessing - https://www.openprocessing.org/sketch/386139


//Global Variables

var Num = focusedRandom(15, 25);

function setup() {
    createCanvas(960, 500);
}

function draw () {
    background(20, 20, 20);

    var w = width;
    var h = height;

    for (k = 0; k < 5; k += 1) {

        translate(0, h/4);

        for (j = 0; j < 5; j += 1) {

            translate(w / 6, 0);

            for (i = 0; i < 360; i += 7) {

                var r = 100 * sin(radians(Num));
                var x = sin(radians(i)) * r;
                var y = cos(radians(i)) * r;

                push();
                translate(x, y);
                rotate(radians(-2 * i + Num / 2));

                noFill();
                stroke(50, 157, 234, 200);
                ellipse(-y, x, 8, 8);
                ellipse(y, -x, 8, 8);

                pop();

            }
        }
    }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
