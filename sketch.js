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

let vines = [];

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

    vines = [];
}

function draw () {
    push();
    {
        //clear()
        //scale(width/viewWidth, width/viewWidth);
        //rotate(random(72))
        translate(-viewPos.x, -viewPos.y);
        scale(zoom, zoom);

        if (iterations < maxIterations) {
            background(palette[0]);
            let {tris} = data;

            tris.forEach((tri) => {
                if (tri.acute) {
                    fill(palette[1]);
                } else {
                    fill(palette[0]);
                }

                strokeWeight(0.0000003 * zoom);
                //line(tri.points[0].x, tri.points[0].y, tri.points[2].x, tri.points[2].y)

                noStroke();
                //noSmooth();
                beginShape();
                    vertex(tri.points[0].x, tri.points[0].y);
                    vertex(tri.points[1].x, tri.points[1].y);
                    vertex(tri.points[2].x, tri.points[2].y);
                endShape(CLOSE);

                strokeWeight(0.0000003 * zoom);
                //line(tri.points[0].x, tri.points[0].y, tri.points[2].x, tri.points[2].y)
                stroke(0);
                line(tri.left.edge.a.x, tri.left.edge.a.y, tri.left.edge.b.x, tri.left.edge.b.y);
                line(tri.right.edge.a.x, tri.right.edge.a.y, tri.right.edge.b.x, tri.right.edge.b.y);
                //line(tri.base.edge.a.x, tri.base.edge.a.y , tri.base.edge.b.x, tri.base.edge.b.y);
            })

            data = penrose.subdivide(data, 1, penrose.pruneAABB(
                viewPos.copy().div(zoom),
                viewPos.copy().div(zoom).add(createVector(width/zoom, height/zoom))
            ));

            if (++iterations == maxIterations) {
                console.log("done");
                for (let i = 0; i < 10; i++) {
                    vines.push(new vine.Vine(data.tris[floor(random(data.tris.length))], [vine.Dir.base, vine.Dir.left]));
                }
                for (let i = 0; i < 10; i++) {
                    let ribbon = new vine.Vine(data.tris[floor(random(data.tris.length))], [vine.Dir.base, vine.Dir.left, vine.Dir.base, vine.Dir.right]);
                    vines.push(ribbon);
                    ribbon.ribbon = true;
                }
            }
        } else {
            vines.forEach(vine => {
                if (vine.pos == null) return;
                console.log(vine);
                let oldPos = vine.pos;
                vine.creep();
                if (vine.pos == null) return;

                stroke(palette[1]);
                if (vine.ribbon) {
                    strokeWeight(0.002);
                } else {
                    strokeWeight(0.004);
                }
                line(oldPos.midBase.x, oldPos.midBase.y, vine.pos.midBase.x, vine.pos.midBase.y);
            })
        }
    }
    pop();
}

function mouseClicked() {
    init();
}

function keyTyped() {
    if (key == '!') {
        saveBlocksImages();
    }
}
