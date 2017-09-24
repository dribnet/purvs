// based off algorithm posted here:
// http://preshing.com/20110831/penrose-tiling-explained/

const penrose = {};

(function(exports) {

    const phi = (1 + Math.sqrt(5)) / 2  // golden ratio
    exports.phi = phi;

    const acute = 36;
    const obtuse = 108;

    function Edge(a, b) {
        // list of (up to 2) Tris
        this.adjacent = [];

        this.a = a;
        this.b = b;

        // get point A or B
        this.vert = function(isA) {
            if (isA) return a;
            else     return b;
        }

        // split edge at point length/phi along from point A or B
        let subA, subB;
        this.splitEdge = function(nearA) {
            if (subA != null) return;   // mustn't produce equivalent edges

            let near, far;
            if (nearA) {
                near = a;
                far = b;
            } else {
                near = b;
                far = a;
            }

            let splitPoint = near.copy().sub(far).div(phi).add(far);
            subA = new Edge(a, splitPoint);
            subB = new Edge(splitPoint, b);
        }

        // get the subsection of the Edge near point A or B
        this.subEdge = function(nearA) {
            if (nearA) return subA;
            else       return subB;
        }

        // returns a single copy of the edge to use for new generations
        let copy
        this.clone = function() {
            if (copy == null) {
                copy = new Edge(a, b);
            }
            return copy;
        }
    }

    // edge parameters are objects of {edge:<Edge>, ab:<bool>}
    // ab indicates whether or not the Edge's vertecies align with what
    // we expect for the triangle: apex should be the a of both side-edges,
    // left-base should be the b of the left-edge and a of the base-edge.
    function Tri(angle, base, left, right) {
        this.base = base;       base.edge.adjacent.push(this);
        this.left = left;       left.edge.adjacent.push(this);
        this.right = right;     right.edge.adjacent.push(this);

        this.acute = Math.abs(angle) == acute;
        this.obtuse = Math.abs(angle) == obtuse;

        // for these splitting functions, it helps to think that
        // true = point A; false = point B; for the Edges

        this.splitInto = this.acute ? splitAcute : splitObtuse;

        function splitAcute(fringe) {    // split into a acute and a obtuse
            this.left.edge.splitEdge(false == this.left.ab);

            // get new Edges
            let leftUpperEdge = this.left.edge.subEdge(true == this.left.ab);
            let leftLowerEdge = this.left.edge.subEdge(false == this.left.ab);

            let crossEdge = new Edge(
                leftLowerEdge.vert(true == this.left.ab),
                this.right.edge.vert(false == this.right.ab)
            );

            let base = this.base.edge.clone();
            let right = this.right.edge.clone();

            // build Tris
            fringe.push(new Tri(
                acute,
                { edge:leftLowerEdge,   ab:true  == this.left.ab },
                { edge:crossEdge,       ab:false },
                { edge:base,            ab:false == this.base.ab }
            ));

            fringe.push(new Tri(
                obtuse,
                { edge:right,           ab:false == this.right.ab },
                { edge:crossEdge,       ab:true },
                { edge:leftUpperEdge,   ab:false == this.left.ab }
            ));
        }

        function splitObtuse(fringe) {
            this.left.edge.splitEdge(true  == this.left.ab);
            this.base.edge.splitEdge(false == this.base.ab);

            // get new Edges
            let leftUpperEdge = this.left.edge.subEdge(true == this.left.ab);
            let leftLowerEdge = this.left.edge.subEdge(false == this.left.ab);

            let baseLeftEdge = this.base.edge.subEdge(true == this.base.ab);
            let baseRightEdge = this.base.edge.subEdge(false == this.base.ab);

            let leftCrossEdge = new Edge(
                leftLowerEdge.vert(true == this.left.ab),
                baseLeftEdge.vert(false == this.base.ab)
            );

            let apexCrossEdge = new Edge(
                leftCrossEdge.vert(false),
                leftUpperEdge.vert(true == this.left.ab)
            )

            let right = this.right.edge.clone();

            // build Tris
            fringe.push(new Tri(
                obtuse,
                { edge:baseLeftEdge,    ab:false == this.base.ab },
                { edge:leftCrossEdge,   ab:true },
                { edge:leftLowerEdge,   ab:true  == this.left.ab }
            ));

            fringe.push(new Tri(
                acute,
                { edge:leftUpperEdge,   ab:false == this.left.ab },
                { edge:leftCrossEdge,   ab:false },
                { edge:apexCrossEdge,   ab:true  }
            ));

            fringe.push(new Tri(
                obtuse,
                { edge:right,           ab:false == this.right.ab },
                { edge:baseRightEdge,   ab:true  == this.base.ab },
                { edge:apexCrossEdge,   ab:true  }
            ));
        }
    }

    exports.generate = function(iterations) {
        //console.log(createVector(1, 0));
        let apex = createVector(0, 0);
        let leftBase = createVector(1, 0);
        let rightBase = leftBase.copy().rotate(obtuse);
        let otherApex = leftBase.copy().add(rightBase);

        let sharedEdge = new Edge(leftBase, rightBase);

        let tris = [
            new Tri(
                obtuse,
                { edge: sharedEdge,                     ab: true },
                { edge: new Edge(apex, leftBase),       ab: true },
                { edge: new Edge(apex, rightBase),      ab: true }
            ),
            new Tri(
                obtuse,
                { edge: sharedEdge,                     ab: true },
                { edge: new Edge(otherApex, leftBase),  ab: true },
                { edge: new Edge(otherApex, rightBase), ab: true }
            )
        ];

        for (let i = 0; i < iterations; i++) {
            let fringe = [];
            tris.forEach(function(tri) {
                //console.log(tri);
                tri.splitInto(fringe);
            })
            tris = fringe;
        }
        return tris;
    }

})(penrose);
