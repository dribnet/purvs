const vine = {};

(function(exports) {

    exports.Dir = {
        base : 0,
        left : 1,
        right : 2,
    };;

    function getEdge(tri, dir) {
        switch (dir) {
            case 0:
                return tri.base.edge;
            case 1:
                return tri.left.edge;
            case 2:
                return tri.right.edge;
            default:
                console.log("hey");
        }
    }

    function adjacentTri(tri, dir) {
        let adjacent = getEdge(tri, dir).adjacent;
        for (let i = 0; i < adjacent.length; i++) {
            if (adjacent[i] != tri) return adjacent[i];
        }
        return null;
    }

    // pos: <Tri>
    // edgeSequence: <[vine.Dir]>
    exports.Vine = function(startPos, edgeSequence) {
        this.pos = startPos

        let cycle = false;
        let index = 0;
        this.creep = function(steps = 1) {
            //if (cycle) return;

            for (let i = 0; i < steps; i++) {
                this.pos = adjacentTri(this.pos, edgeSequence[index]);
                index = (index + 1) % edgeSequence.length;
                // if (pos == startPos && index == 0) {
                //     cycle = true;
                // }
            }
        }

        this.twin = function() {
            let backwardsSequence = [];
            for (let i = edgeSequence.length-1; i >= 0 ; i--) {
                let next = edgeSequence[i];
                // if (next == 1) next = 2;
                // else if (next == 2) next = 1;
                backwardsSequence.push(next);
            }
            return new exports.Vine(startPos, backwardsSequence);
        }
    }

})(vine);
