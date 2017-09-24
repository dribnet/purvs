let data;

let iterations;
let maxIterations = 25;
let zoom = 2500;

let palettes = [
    ['#7847B2', '#FFFE99'], // purple + tan
    ['#8CFFA6', '#FFA5AE'], // mint + pink
    ['#FFA381', '#CAFFD4'], // peach + space grey
    ['#FFF078', '#B21D40'], // sand + burgundy
]
let palette = [];
let paletteNum;

function setup () {
    createCanvas(960, 500);
    angleMode(DEGREES);
    init();
}

function init() {
    viewPos = createVector(Math.random(0.65) * width, Math.random(0.8) * height);
    console.log(viewPos);

    data = penrose.generate(960);
    iterations = 0;

    let newPalette
    do {
        newPalette = floor(random(palettes.length));
    } while(newPalette == paletteNum);
    paletteNum = newPalette;
    palette = palettes[paletteNum];
}

function draw () {
    if (++iterations > maxIterations) return;
    let {tris} = data;
    push();
    {
        //clear()
        //scale(width/viewWidth, width/viewWidth);
        //rotate(random(72))
        background(palette[0]);
        translate(-viewPos.x, -viewPos.y);
        scale(zoom, zoom);

        tris.forEach((tri) => {
            if (tri.acute) {
                fill(palette[1]);
            } else {
                fill(palette[0]);
            }

            strokeWeight(0.0000003 * zoom);
            //line(tri.points[0].x, tri.points[0].y, tri.points[2].x, tri.points[2].y)

            noStroke();
            noSmooth();
            beginShape();
                vertex(tri.points[0].x, tri.points[0].y);
                vertex(tri.points[1].x, tri.points[1].y);
                vertex(tri.points[2].x, tri.points[2].y);
            endShape(CLOSE);

            strokeWeight(0.0000003 * zoom);
            //line(tri.points[0].x, tri.points[0].y, tri.points[2].x, tri.points[2].y)

            smooth();
            stroke(0);
            line(tri.left.edge.a.x, tri.left.edge.a.y, tri.left.edge.b.x, tri.left.edge.b.y);
            line(tri.right.edge.a.x, tri.right.edge.a.y, tri.right.edge.b.x, tri.right.edge.b.y);
            //line(tri.base.edge.a.x, tri.base.edge.a.y , tri.base.edge.b.x, tri.base.edge.b.y);
        })
    }
    pop();

    data = penrose.subdivide(data, 1, penrose.pruneAABB(
        viewPos.copy().div(zoom),
        viewPos.copy().div(zoom).add(createVector(width/zoom, height/zoom))
    ));

    if (iterations == maxIterations) console.log("done");

    // if (mouseIsPressed) {
    //     fill(0);
    // } else {
    //     fill(255);
    // }
    // ellipse(mouseX, mouseY, 80, 80);
}

function mouseClicked() {
    init();
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    }
}
