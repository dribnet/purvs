let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

// let sourceFile = "input_2.jpg";
// let maskFile   = "mask_2.png";
// let outputFile = "artwork_2.png";

// let sourceFile = "input_3.jpg";
// let maskFile   = "mask_3.png";
// let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}



function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');
angleMode(DEGREES)
  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
 
}

  //triangle long
  function wild (x,y){
    


    push();
    translate(x,y);
     
        rotate(random(1 , 360));
        beginShape()
        vertex(0,-10);
        vertex(-50,0);
        vertex(0,10);
        vertex(5,0);

        endShape(CLOSE);

pop();



  }

    function wild2 (x,y){
    


    push();
    translate(x,y);
       
        rotate(random(1 , 360));
        beginShape()
        vertex(0,-5);
        vertex(-1000,0);
        vertex(0,5);
        vertex(10,0);

        endShape(CLOSE);

pop();



  }

  // const tile_width1 = 3.7;
  // const tile_height1 =3.7;

  // const tile_step_x = 5;
  // const tile_step_y = 5;

  const tile_width1 = 15;
  const tile_height1 =15;

  const tile_step_x = 15;
  const tile_step_y = 15;

function draw () {

    // background
    for(let y=0; y<height; y = y + 30) {
      for(let x=0; x<width; x = x + 30) { 

        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        // fill(pix);
         // fill(pix[0]+50); 
        // rect(x, y, 30, 30);
      }
    }

    for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) { 

  // for(let i2=0;i2<2000;i2++) {
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    // let pointSize = 4;
    // let halfSize = 180;
    // fill(pix);
    fill(pix[0]+50);
   
    // if(mask[0] < 255) {
    //   stroke(pix);
    //   noFill();
    //   // rect(x, y, pointSize, pointSize);
    //     // ellipse(x, y, pointSize, pointSize);
    //     push();
        
        
    //     // rect(0, 0, 5, 100);
    //     wild(x,y);
    //     pop();
    //       // triangle(x-40, y-40, x+20, y+20,x+30, y+30);  
    //       // triangle(x+40, y+40, x-20, y-20,x-30, y-30);  
 
               
    //     }

    //body black
    if(mask[0] >= 0 && mask [0] < 100) { 
     //  stroke(pix);
     //  noFill();
     //  push()
     // wild(x, y)
     //  pop()
   }
   //gray highlights
    else if (mask [0] >= 100 && mask [0] < 101){ 
    //   stroke(pix);
    //   noFill();
    //   push()
    //   wild2(x, y)
    //   pop()
    }
      
  //   else {  
  //       // console.log(pix);
  //       // stroke(pix[0]+50);
  //       // push();
  //       noStroke();  
  //          fill(pix[0]+50); 
  //     // noFill();
  //  // ellipse(x, y, pointSize, pointSize);
  //  ellipse(x,y,tile_width,tile_height);
  //  // pop();
  //   // }
  // }


   // fill(pix);
    else if (mask[0] >250) {
    rect(x, y, tile_width1, tile_height1);
    }

}
}


    // for(let y=0; y<height; y = y + tile_step_y) {
    // for(let x=0; x<width; x = x + tile_step_x) { 

  for(let i2=0;i2<2000;i2++) {
  // for(let i2=0;i2<10;i2++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    // let pointSize = 4;
    // let halfSize = 180;
    fill(pix);
   
    // if(mask[0] < 255) {
    //   stroke(pix);
    //   noFill();
    //   // rect(x, y, pointSize, pointSize);
    //     // ellipse(x, y, pointSize, pointSize);
    //     push();
        
        
    //     // rect(0, 0, 5, 100);
    //     wild(x,y);
    //     pop();
    //       // triangle(x-40, y-40, x+20, y+20,x+30, y+30);  
    //       // triangle(x+40, y+40, x-20, y-20,x-30, y-30);  
 
               
    //     }

    //body black
    if(mask[0] >= 0 && mask [0] < 100) { 
      stroke(pix);
      noFill();
      push()
     wild(x, y)
      pop()
   }
   //gray highlights
    else if (mask [0] >= 100 && mask [0] < 101){ 
      stroke(pix);
      noFill();
      push()
      wild2(x, y)
      pop()
    }
      
    else {  
        // console.log(pix);
        // stroke(pix[0]+50);
   //      push();
   //      noStroke();  
   //         fill(pix[0]+50); 
   //    // noFill();
   // // ellipse(x, y, pointSize, pointSize);
   // rect(x,y,tile_width,tile_height);
   // pop();
  //   }
  // }

}
}


  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
