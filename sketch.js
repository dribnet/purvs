let tiles;

function setup () {
    createCanvas(960, 500);
    angleMode(DEGREES);
    tiles = penrose.generate(8);
    push();
    {
        translate(200, 0)
        scale(510, 510);

        tiles.forEach((tri) => {
            if (tri.acute) {
                fill('#FFFE99');
            } else {
                fill('#7847B2');
            }

            noStroke();
            beginShape();
                vertex(tri.base.edge.a.x, tri.base.edge.a.y);
                vertex(tri.base.edge.b.x, tri.base.edge.b.y);
                vertex(tri.apex.x,        tri.apex.y);
            endShape(CLOSE);

            strokeWeight(0.001);
            stroke(0);
            line(tri.left.edge.a.x, tri.left.edge.a.y, tri.left.edge.b.x, tri.left.edge.b.y);
            line(tri.right.edge.a.x, tri.right.edge.a.y, tri.right.edge.b.x, tri.right.edge.b.y);
            //line(tri.base.edge.a.x, tri.base.edge.a.y , tri.base.edge.b.x, tri.base.edge.b.y);
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
