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

const max_thickness = 64
const ball_radius = 32
const line_width = 8
const grid_size = 64
const noise_density = 0.1

/* the random number seed for the tour */
var tourSeed = 301
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 517.527343750000, 505.882812500000],
  [1, 565.439453125000, 339.044921875000],
  [3, 607.114257812500, 386.653808593750],
  [5, 596.244018554688, 362.087646484375],
  [8, 595.576950073242, 363.224914550781]
]

var circlex = 0
var circley = 0
var circlewid = 63
var circlehei = 63

var color1
var color2
var color3
var background_color

let do_animation = true

/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid (num, gsize) {
  return num - num % gsize
}

function drawGrid (p5, x1, x2, y1, y2, z, zoom) {
  let dz = p5.globalFrameCount / 100.0
  z = z + dz
  /* max_shift is the amount of overlap a tile can spill over into its neighbors */
  let max_shift = max_thickness

  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size)
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size)
  let min_y = snap_to_grid(y1 - max_shift, grid_size)
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size)

  // // Circle Colors
  color1 = p5.color(150, 206, 180)
  color2 = p5.color(255, 238, 173)
  color3 = p5.color(255, 111, 105)
  background_color = p5.color(255, 255, 224)

  let local_circlex = p5.map(circlex, x1, x2, 0, 256)
  let local_circley = p5.map(circley, y1, y2, 0, 256)
  let local_circlex_edge = p5.map(circlex + circlewid, x1, x2, 0, 256)
  let local_circley_edge = p5.map(circley + circlehei, y1, y2, 0, 256)
  let local_circlewid = local_circlex_edge - local_circlex
  let local_circlehei = local_circley_edge - local_circley

  p5.noStroke()
  p5.background(background_color)

  for (let x = min_x; x < max_x; x += grid_size) {
    for (let y = min_y; y < max_y; y += grid_size) {
      let x_pos_left = p5.map(x + grid_size, x1, x2, 0, 256)
      let y_pos_down = p5.map(y + grid_size, y1, y2, 0, 256)

      x_pos_left += local_circlewid / 2
      y_pos_down += local_circlehei / 2

      wid = getRandomValue(
        p5,
        x,
        y,
        z,
        'wid',
        local_circlewid / 6,
        local_circlewid,
        noise_density
      )

      hei = getRandomValue(
        p5,
        x,
        y,
        z,
        'hei',
        local_circlehei / 4,
        local_circlehei,
        noise_density
      )

      xpos = getRandomValue(
        p5,
        x,
        y,
        z,
        'xpos',
        x_pos_left - 10,
        x_pos_left + 10,
        noise_density
      )

      ypos = getRandomValue(
        p5,
        x,
        y,
        z,
        'ypos',
        y_pos_down - 10,
        y_pos_down + 10,
        noise_density
      )

      drawCircle(xpos, ypos, wid, hei, p5, zoom)
    }
  }

  // debug - show border
  // p5.noFill()
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255)
}

function drawCircle (x, y, wid, hei, p5, zoom) {
  var iIncrease
  var countStart
  switch (zoom) {
    case 0:
      countStart = 1
      iIncrease = 0.3
      break
    case 1:
      countStart = 2
      iIncrease = 0.2
      break
    case 2:
      countStart = 3
      iIncrease = 0.1
      break
    case 3:
      countStart = 1
      iIncrease = 0.05
      break
    case 4:
      countStart = 2
      iIncrease = 0.04
      break
    case 5:
      countStart = 3
      iIncrease = 0.03
      break
    case 6:
      countStart = 1
      iIncrease = 0.025
      break
    case 7:
      countStart = 2
      iIncrease = 0.02
      break
    case 8:
      countStart = 3
      iIncrease = 0.015
      break
    case 9:
      countStart = 1
      iIncrease = 0.01
      break
  }

  let iVal
  for (var i = 1, count = countStart; i <= 2; (i += iIncrease), count++) {
    if (count % 3 == 0) {
      p5.fill(color1)
    } else if (count % 3 == 1) {
      p5.fill(color2)
    } else {
      p5.fill(color3)
    }

    p5.ellipse(x, y, wid / i, hei)
    iVal = i
  }

  p5.fill(background_color)
  p5.ellipse(x, y, wid / iVal, hei)
}
