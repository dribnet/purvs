/*
 * This is the function to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */

/* the random number seed for the tour */
var tourSeed = 301
/* triplets of locations: zoom, x, y */
var tourPath = [[1, 512, 512], [5, 30, 512], [4, 512, 700]]

let circlex = 512
let circley = 512
let circlewid = 900
let circlehei = 950

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid (p5, x1, x2, y1, y2, z, zoom) {
  p5.noStroke()
  p5.background(255, 204, 92)

  // Circle Colors
  let color1 = p5.color(150, 206, 180)
  let color2 = p5.color(255, 238, 173)
  let color3 = p5.color(255, 111, 105)

  let local_circlex = p5.map(circlex, x1, x2, 0, 256)
  let local_circley = p5.map(circley, y1, y2, 0, 256)
  let local_circlex_edge = p5.map(circlex + circlewid, x1, x2, 0, 256)
  let local_circley_edge = p5.map(circley + circlehei, y1, y2, 0, 256)
  let local_circlewid = local_circlex_edge - local_circlex
  let local_circlehei = local_circley_edge - local_circley

  // allows final circle to access the loops i value
  let iVal

  for (var i = 1, count = 1; i <= 3; (i += 0.05), count++) {
    if (count % 3 == 0) {
      p5.fill(color1)
    } else if (count % 3 == 1) {
      p5.fill(color2)
    } else {
      p5.fill(color3)
    }

    p5.ellipse(
      local_circlex,
      local_circley,
      local_circlewid / i,
      local_circlehei
    )
    iVal = i
  }

  p5.fill(255, 204, 92)
  p5.ellipse(
    local_circlex,
    local_circley,
    local_circlewid / iVal,
    local_circlehei
  )

  // debug - show border
  // p5.noFill()
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255)
}
