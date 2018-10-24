const max_thickness = 64;
const max_movement = 16;
const ball_radius = 3;
const ball_radius2 = 1.5;
const line_width = 8;
const grid_size = 15;
const maxLevel = 4;
let do_animation = false;


var tourSeed = 401;
var tourPath = [
  [1, 356.500000000000, 665.750000000000],
  [3, 353.250000000000, 668.187500000000],
  [4, 337.937500000000, 760.250000000000],
  [5, 461.497558593750, 710.335205078125],
  [6, 465.483459472656, 700.684997558594],
  [2, 317.984375000000, 643.636718750000],
  [1, 317.984375000000, 643.636718750000]
]
/* this function takes a coordinate and aligns to a grid of size gsize */
function snap_to_grid(num, gsize) {
  return (num - (num % gsize));
}


/* this function returns a point offset by noise at that location */
function getOffsetPoint(p5, x, y, z, noiseScale) {
  let noiseX = p5.noise(x * noiseScale,
                        y * noiseScale, z);
  let noiseY = p5.noise(x * noiseScale,
                        y * noiseScale, z+50);
  let offsetX = p5.map(noiseX, 0, 1, -max_movement, max_movement);
  let offsetY = p5.map(noiseY, 0, 1, -max_movement, max_movement);
  return [x+offsetX, y+offsetY]
}



function snowflake(p5, x1, x2, y1, y2, x, y, z, pos_x, pos_y, rad1, rad2, drawLines, drawLines2, drawLines3, drawCircles, drawSpikes) {
  const offsets = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]
  let noiseScale = 0.5;
  let pixel_posx1 = p5.map(pos_x, x1, x2, 0, 256);
  let pixel_posx2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  let pixel_radius = pixel_posx2 - pixel_posx1;

  for(var i=0; i<offsets.length; i++) {
    let offset = offsets[i];
    let pixel_x = p5.map(pos_x+0.6*rad1*offset[0], x1, x2, 0, 256);
    let pixel_y = p5.map(pos_y+0.6*rad1*offset[1], y1, y2, 0, 256);
    p5.strokeWeight(0);

    if(drawCircles) {
      p5.ellipse(pixel_x, pixel_y, pixel_radius);
    }
    if(drawLines) {
      p5.strokeWeight(pixel_radius / 5);

      // p5.line(pixel_x, pixel_y-pixel_radius, pixel_x, pixel_y+pixel_radius);
      p5.strokeWeight(0);
    }  


  // spokes
  let spokeLength = getRandomValue(p5, pos_x, pos_y, z, "spokeLength", 0.5, 2.9, 0.1);
  let spokeRadius = rad2 * spokeLength;
  let center_pixel_x = p5.map(pos_x, x1, x2, 0, 256);
  let center_pixel_y = p5.map(pos_y, y1, y2, 0, 256);
  let spoke_pixel_x2 = p5.map(pos_x+rad2, x1, x2, 0, 256);
  if(drawLines) {
        p5.fill("#FCDDFF");
        p5.stroke("#FCDDFF");
    for(let angle=0; angle<360; angle=angle+60) {
      p5.strokeWeight(pixel_radius / 6);
      let spike_x = pos_x + spokeRadius * p5.cos(angle);
      let spike_y = pos_y + spokeRadius * p5.sin(angle);
      let spike_pixel_x = p5.map(spike_x, x1, x2, 0, 256);
      let spike_pixel_y = p5.map(spike_y, y1, y2, 0, 256);
      p5.line(center_pixel_x, center_pixel_y, spike_pixel_x, spike_pixel_y);
  // draw spikes on the spikes
 }
 }    
       if(drawLines2) { 
        p5.fill("#8CD4FF");
        p5.stroke("#8CD4FF");
      for(let angle=0; angle<360; angle=angle+60) {
      let spreadAngle = getRandomValue(p5, pos_x, pos_y, z, "spreadAngle", 10, 40, 0.9);
      let fractionOut = 0.3;
      let fractionRadius = fractionOut * spokeRadius;
      let fractionThin = 0.25;
      p5.strokeWeight(fractionThin * pixel_radius / 5);
      let spike_fork_x = pos_x + fractionRadius * p5.cos(angle);
      let spike_fork_y = pos_y + fractionRadius * p5.sin(angle);
      let subspike1_x = pos_x + spokeRadius * p5.cos(angle-spreadAngle);
      let subspike1_y = pos_y + spokeRadius * p5.sin(angle-spreadAngle);
      let subspike2_x = pos_x + spokeRadius * p5.cos(angle+spreadAngle);
      let subspike2_y = pos_y + spokeRadius * p5.sin(angle+spreadAngle);
      let spike_fork_pixel_x = p5.map(spike_fork_x, x1, x2, 0, 256);
      let spike_fork_pixel_y = p5.map(spike_fork_y, y1, y2, 0, 256);
      let subspike_pixel1_x = p5.map(subspike1_x, x1, x2, 0, 256);
      let subspike_pixel1_y = p5.map(subspike1_y, y1, y2, 0, 256);
      let subspike_pixel2_x = p5.map(subspike2_x, x1, x2, 0, 256);
      let subspike_pixel2_y = p5.map(subspike2_y, y1, y2, 0, 256);

      p5.line(spike_fork_pixel_x, spike_fork_pixel_y, subspike_pixel1_x, subspike_pixel1_y);
      p5.line(spike_fork_pixel_x, spike_fork_pixel_y, subspike_pixel2_x, subspike_pixel2_y);
    p5.strokeWeight(0);
  }
     if(drawLines3) { 
        p5.fill("#9AADE8");
        p5.stroke("#9AADE8");
      for(let angle=0; angle<360; angle=angle+20) {
      let spreadAngle2 = getRandomValue(p5, pos_x, pos_y, z, "spreadAngle2", 0, 80, 0.9);
      let fractionOut2 = 0.3;
      let fractionRadius2 = fractionOut2 * spokeRadius;
      let fractionThin2 = 0.25;
      p5.strokeWeight(fractionThin2 * pixel_radius / 100);
      let spike_fork_x2 = pos_x + fractionRadius2 * p5.cos(angle);
      let spike_fork_y2 = pos_y + fractionRadius2 * p5.sin(angle);
      let subspike1_x2 = pos_x + spokeRadius * p5.cos(angle-spreadAngle2);
      let subspike1_y2 = pos_y + spokeRadius * p5.sin(angle-spreadAngle2);
      let subspike2_x2 = pos_x + spokeRadius * p5.cos(angle+spreadAngle2);
      let subspike2_y2 = pos_y + spokeRadius * p5.sin(angle+spreadAngle2);
      let spike_fork_pixel_x2 = p5.map(spike_fork_x2, x1, x2, 0, 256);
      let spike_fork_pixel_y2 = p5.map(spike_fork_y2, y1, y2, 0, 256);
      let subspike_pixel1_x2 = p5.map(subspike1_x2, x1, x2, 0, 256);
      let subspike_pixel1_y2 = p5.map(subspike1_y2, y1, y2, 0, 256);
      let subspike_pixel2_x2 = p5.map(subspike2_x2, x1, x2, 0, 256);
      let subspike_pixel2_y2 = p5.map(subspike2_y2, y1, y2, 0, 256);

      p5.line(spike_fork_pixel_x2, spike_fork_pixel_y2, subspike_pixel1_x2, subspike_pixel1_y2);
      p5.line(spike_fork_pixel_x2, spike_fork_pixel_y2, subspike_pixel2_x2, subspike_pixel2_y2);
      p5.strokeWeight(0);
}
}

      }  
    }
  }


function drawGrid(p5, x1, x2, y1, y2, z, zoom, drawBackground) {

 p5.background(255);

 let max_shift = max_thickness + max_movement;

  p5.angleMode(p5.DEGREES);

  // For animation: updated z based on global frame count 
  let dz = p5.globalFrameCount / 50.0;
  z = z + dz;


  /* this rectangle defines the region that will be drawn and includes a margin */
  let min_x = snap_to_grid(x1 - max_shift, grid_size);
  let max_x = snap_to_grid(x2 + max_shift + grid_size, grid_size);
  let min_y = snap_to_grid(y1 - max_shift, grid_size);
  let max_y = snap_to_grid(y2 + max_shift + grid_size, grid_size);


  let c_p00 = p5.map(0, x1, x2, 0, 256);
  let c_plwidth = p5.map(line_width, x1, x2, 0, 256);
  let c_pball = p5.map(ball_radius2, x1, x2, 0, 256);
  let cur_line_width = c_plwidth - c_p00;
  let cur_ball_radius = c_pball - c_p00;

  for(let x=min_x; x<max_x; x+=grid_size) {
    for(let y=min_y; y<max_y; y+=grid_size) {
      /* first compute all three points with offsets */
      let shift_point = getOffsetPoint(p5, x, y, z, 0.1);
      let x_pos = p5.map(shift_point[0], x1, x2, 0, 256);
      let y_pos = p5.map(shift_point[1], y1, y2, 0, 256);

      let shift_point_left = getOffsetPoint(p5, x+grid_size, y, z, 0.1);
      let x_pos_left = p5.map(shift_point_left[0], x1, x2, 0, 256);
      let y_pos_left = p5.map(shift_point_left[1], y1, y2, 0, 256);

      let shift_point_down = getOffsetPoint(p5, x, y+grid_size, z, 0.1);
      let x_pos_down = p5.map(shift_point_down[0], x1, x2, 0, 256);
      let y_pos_down = p5.map(shift_point_down[1], y1, y2, 0, 256);

   

      // ZOOM 

      p5.stroke(236, 233, 255);
      p5.fill(236, 233, 255);
      p5.noStroke();
      p5.ellipse(x_pos, y_pos, cur_ball_radius);


      if(zoom >= 2) {
        var drawLines = false;
        var drawLines2 = false;
        var drawLines3 = false;
      }

        if (zoom >= 2) {
          var drawCircles = true; 
        }

        if (zoom >= 3) {
          var drawLines= true;
          var drawCircles = false; 
        }

          if (zoom >= 4) {
          var drawLines2= true;

        }
          if (zoom >= 6) {
          var drawLines3= true;

        }        

        snowflake(p5, x1, x2, y1, y2, x_pos, y_pos, z, shift_point[0], shift_point[1], ball_radius/2, line_width/3, drawLines, drawLines2, drawLines3, drawCircles);
        

      }

    }
  }

