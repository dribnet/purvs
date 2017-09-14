let tiles;

function setup () {
    createCanvas(960, 500);
    angleMode(DEGREES);
    tiles = penrose.generate(10);
    push();
    {
        scale(2000, 2000);
        translate(-0.4, 0);
        noStroke();

        tiles.forEach((tri) => {
            if (tri.acute) {
                fill('#FFFE99');
            } else {
                fill('#7847B2');
            }
            beginShape();
            vertex(tri.left.x, tri.left.y);
            vertex(tri.apex.x, tri.apex.y);
            vertex(tri.right.x, tri.right.y);
            endShape(CLOSE);
        })
    }
    pop();
}

function draw () {
    // if (mouseIsPressed) {
    //     fill(0);
    // } else {
    //     fill(255);
    // }
    // ellipse(mouseX, mouseY, 80, 80);
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    }
}
