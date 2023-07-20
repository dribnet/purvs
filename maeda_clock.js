// let rowAmount = 25;
// let columnAmount = rowAmount / 2 + 1;
// let gridSize = 960 / rowAmount;

// let alive = true;

// // Update this function to draw you own maeda clock on a 960x500 canvas
// function draw_clock(obj) {
//   // YOUR MAIN CLOCK CODE GOES HERE
//   background(50); //  beige
//   fill(200); // dark grey

//   grid();
//   checkNeighbours(6, 8, gridSize);
//   checkNeighbours(7, 9, gridSize);

//   checkNeighbours(10, 5, gridSize);
// }

// //background grid
// function grid() {
//   for (row = 0; row < rowAmount; row++) {
//     for (column = 0; column < columnAmount; column++) {

//       // new activeSquare(row, column, gridSize);
//       //array added?
//       // new checkNeighbours(row, column, gridSize);

//       textAlign(CENTER, CENTER);
//       textSize(rowAmount / 3);
//       stroke(0);
//       fill(200);
//       text(
//         row + "," + column,
//         row * gridSize,
//         column * gridSize,
//         gridSize,
//         gridSize
//       );

//       // if(activeSquare(row) >= activeSquare.checkNeighbours(row)){

//       // }
//     }
//   }
// }

// //main body
// function activeSquare(bodyX, bodyY, size) {
//   this.bodyX = bodyX;
//   this.bodyY = bodyY;
//   this.size = size;

//   stroke(0);
//   fill(150);
//   rect(bodyX * gridSize, bodyY * gridSize, size);
// }

// //checks neighbour
// function checkNeighbours(hitX, hitY, size) {
//   this.hitX = [hitX] + 1;
//   this.hitY = [hitY] + 1;
//   this.size = size;

//   if (alive === true) {
//     stroke(255, 0, 0);
//     noFill();
//     rect([hitX] * gridSize, [hitY] * gridSize, gridSize * 3);

//     stroke(0);
//     fill(150);
//     new activeSquare([hitX + 1], [hitY + 1], gridSize);
//   }
// }

let rowAmount = 25;
let columnAmount = Math.floor(rowAmount / 2) + 1;
let gridSize = 960 / rowAmount;

let grid = [];
let alive = true;

// Update this function to draw your own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); // beige
  fill(200); // dark grey

  drawGrid();
  // console.log(mouseX);

  // put alive nubmer her
  one();
  activeNumbers(10);
}

// Initialize the grid
function initializeGrid() {
  for (let row = 0; row < rowAmount; row++) {
    grid[row] = [];
    for (let column = 0; column < columnAmount; column++) {
      grid[row][column] = {
        row: row,
        column: column,
        size: gridSize,
      };
    }
  }
}

// Background grid
function drawGrid() {
  for (let row = 0; row < rowAmount; row++) {
    for (let column = 0; column < columnAmount; column++) {
      drawSquare(grid[row][column]);
    }
  }
  activeNumbers(10, 10, number[0]);
}

// Draw square
function drawSquare(square) {
  stroke(0);
  rect(square.row * square.size, square.column * square.size, square.size);
}

function one() {
  // if (alive === true) {
  //   fill(255, 0, 0);
  //   drawSquare(grid[7][5]);
  //   drawSquare(grid[8][4]);
  //   drawSquare(grid[8][5]);
  //   drawSquare(grid[8][6]);
  //   drawSquare(grid[8][7]);
  //   drawSquare(grid[8][8]);
  //   drawSquare(grid[8][9]);
  // }

  // if (activeNumbers.noZero[i][j] == 1){
  //   fill(255, 0, 0);
  //     drawSquare(grid[row][column]);
  // }

  activeNumbers();
}

function activeNumbers(placeA, placeB) {
  let number = [5];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      noZero = [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
      ];

      if (number == 0) {
        if (noZero[i][j] == 1) {
          fill(255, 0, 0);
          drawSquare(grid[placeA][placeB]);
        }
      }

      let noOne = [
        [0, 0, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
      ];

      if (number == 1) {
        if (noOne[i][j] == 1) {
          fill(255, 0, 0);
          drawSquare(grid[row][column]);
        }
      }

      let noTwo = [
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
      ];

      if (number == 2) {
        if (noTwo[i][j] == 1) {
          fill(255, 0, 0);
          drawSquare(grid[row][column]);
        }
      }

      let noThree = [
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 1, 1, 1, 0],
      ];

      if (number == 3) {
        if (noThree[i][j] == 1) {
          fill(255, 0, 0);
          drawSquare(grid[row][column]);
        }
      }

      let noFour = [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1],
      ];

      if (number == 4) {
        if (noFour[i][j] == 1) {
          fill(255, 0, 0);
          drawSquare(grid[row][column]);
        }
      }
    }
  }
}

initializeGrid();
drawGrid();
