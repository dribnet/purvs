// based off algorithm posted here:
// http://preshing.com/20110831/penrose-tiling-explained/

const penrose = {};

(function(exports) {

    const phi = (1 + Math.sqrt(5)) / 2  // golden ratio
    exports.phi = phi;

    const acute = 36;
    const obtuse = 108;

    function Tri(angle, apex, left, right) {

        this.apex = apex;
        this.left = left;
        this.right = right;

        this.acute = Math.abs(angle) == acute;
        this.obtuse = Math.abs(angle) == obtuse;

        function splitAcute(fringe) {    // split into a acute and a obtuse
            let split = left.copy().sub(apex).mult(1 / phi).add(apex);
            fringe.push(new Tri(acute, right, split, left));
            fringe.push(new Tri(obtuse, split, right, apex));
        }

        function splitObtuse(fringe) {
            let splitLeft = apex.copy().sub(left).mult(1 / phi).add(left);
            let splitRight = right.copy().sub(left).mult(1 / phi).add(left);
            fringe.push(new Tri(obtuse, splitLeft, splitRight, left));
            fringe.push(new Tri(acute, splitRight, splitLeft, apex));
            fringe.push(new Tri(obtuse, splitRight, right, apex))
        }

        this.splitInto = this.acute ? splitAcute : splitObtuse;
    }

    exports.generate = function(iterations) {
        //console.log(createVector(1, 0));
        let tris = [new Tri(acute, createVector(0, 0), createVector(1, 0), createVector(1, 0).rotate(acute))];

        for (let i = 0; i < iterations; i++) {
            let fringe = [];
            tris.forEach(function(tri) {
                console.log(tri);
                tri.splitInto(fringe);
            })
            tris = fringe;
        }
        return tris;
    }

})(penrose);
