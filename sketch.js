let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}






function draw () {

     // rect(0,0,704, 1252);
  for(let i=0;i<16000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 15;
    let offset = pointSize - 4;
    let offset2 = pointSize - 3;
    let halfSize = 3;
    let halfSize2 =100;
     let x1 = floor(random(sourceImg.width));
      let y1 = floor(random(sourceImg.height));
      let r = pix[0];
      let g = pix[1];
      let b = pix[2];

    fill(pix);
    if(mask[0] > 250) {
      noStroke();
      //rect(x, y, halfSize, halfSize2);
      // var die = int(random(0,100));
      //     if (die == 5) {
      //       var gray = int(random(0, 100));
      //       var gray2 = int(random(0, 50));
      //       var scalar = random (0.2, 0.45);
      //      ellipse(x,y,scalar,gray);
      //     ellipse(x,y,gray2,scalar);
      //          noStroke();
      //          fill(255, 0,0);
      //          ellipse(x,y,5,5);
      //     }

      //noFill();
      stroke(pix);
      rect(x, y, 2, 50);
    }
    else if (mask[0] < 10) {
        //noStroke();
      //  fill(255, 0, 0);
        //
        // rect(x, y, halfSize, halfSize2);
        //   //  fill(pix, 50);
        //   rect(x, y, halfSize, 20);
          noFill();
          stroke(pix);
         rect(x, y, pointSize, pointSize);

             var die = int(random(0,100));
     if (die == 1) {
       var gray = int(random(0, 50));
       var gray2 = int(random(0, 50));
       var scalar = random (0.2, 0.45);
       fill( 255, 0,0);
      ellipse(x,y,5,5);
      ellipse(x,y,scalar, gray);
     }

         

      }

  }
//fill(255, 0,0);

//lip print
  for(let y=0; y<height; y = y + 1) {
     for(let x=0; x<width; x = x + 1) {
       let pix = sourceImg.get(x, y);
       let mask = maskImg.get(x, y);
       if(mask[0] == 157) {
         let r = pix[0];
         let g = pix[1];
         let b = pix[2];
        // let g = pix[1];
         stroke(r,g,b);
         point(x, y);

    //       fill(255, 0, 0);
    // var die = int(random(0,10));
    // if (die == 5) {
    //   var gray = int(random(0, 100));
    //   var gray2 = int(random(0, 50));
    //   var scalar = random (0.2, 0.45);
    //  ellipse(x,y,scalar,gray);
    //  ellipse(x,y,gray2,scalar);
    //      noStroke();
    //      fill(255, 0,0);
    //      ellipse(x,y,50,1);
    //
    // }

       }
     }
   }


   for(let y=0; y<height; y = y + 1) {
      for(let x=0; x<width; x = x + 1) {
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        if(mask[0] == 106) {
          let r = pix[0];
          let g = pix[1];
          let b = pix[2];
         // let g = pix[1];
          stroke(r,g,b);
        //  point(x, y);
          // fill(255, 0, 0);
     var die = int(random(0,20));
     if (die == 5) {
       var gray = int(random(0, 50));
       var gray2 = int(random(0, 50));
       var scalar = random (0.2, 0.45);
      ellipse(x,y,scalar,gray);
     }






        }
      }
    }



// for(let y=0; y<height; y = y + 1) {
//      for(let x=0; x<width; x = x + 1) {
//        let pix = sourceImg.get(x, y);
//        let mask = maskImg.get(x, y);
//        if(mask[0] == 156) {
//        let r = pix[0];
//          let g = pix[1];
//          let b = pix[2];
//         // let g = pix[1];
//          stroke(r,g,b);
//          point(x, y);
//
//        }
//      }
//    }




   fill(250, 0 ,0);
   noStroke();
   stroke(255, 0,0);
   strokeWeight(1);
   line(249, 430, 608, 499);
   line(608, 499,259, 1031);
   line(259, 1031, 249, 430);
   line(608, 499,256, 734);
   line(259, 1031,581, 965);
   //
   //
   ellipse(249, 430, 8,8);
   ellipse(608, 499, 8,8);
   ellipse(259, 1031, 8,8);
   ellipse(256, 734, 8,8);
    ellipse(581, 965, 8,8);


   //
   fill(255);
   noStroke();
   textSize(16);
   textFont('Chalkduster');
   text('Blood and wine mixture', 135, 1075);
   text('No trace', 580, 481);
   text('From victim', 199, 415);
   // text('Women',249, 596);

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
