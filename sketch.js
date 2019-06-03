let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "artwork_2.png";

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


function drop (x, y, g, s) {
 //  beginShape();
 // strokeWeight(1);
 // vertex(0,-5);
 // quadraticVertex(3, 0, 0, 1);
 // quadraticVertex(-3,0, 0, -5);
 // endShape(CLOSE);
fill(255, 0,0);
 ellipse(0,0,15);
}



function draw () {

     // rect(0,0,704, 1252);
  for(let i=0;i<10000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 7;
    let offset = pointSize - 4;
    let offset2 = pointSize - 3;
    let halfSize = 5;
    let halfSize2 =12;
     let x1 = floor(random(sourceImg.width));
      let y1 = floor(random(sourceImg.height));
      let r = pix[0];
      let g = pix[1];
      let b = pix[2];

    fill(pix);
    if(mask[0] > 200) {
      noStroke();
      //ellipse(x, y, pointSize, pointSize);
     

    }
    else {
        //noStroke();
      //  fill(255, 0, 0);

        rect(x, y, halfSize, halfSize2);
          //  fill(pix, 50);
          rect(x, y, halfSize, halfSize);
var die = int(random(0,100));
    if (die == 5) {
      var gray = int(random(0, 100));
      var gray2 = int(random(0, 50));
      var scalar = random (0.2, 0.45);
     ellipse(x,y,scalar,gray);
    ellipse(x,y,gray2,scalar);
         noStroke();
         fill(255, 0,0);
         ellipse(x,y,50,1);

    }
      }



  }
//fill(255, 0,0);


  for(let y=0; y<height; y = y + 1) {
     for(let x=0; x<width; x = x + 1) {
       let pix = sourceImg.get(x, y);
       let mask = maskImg.get(x, y);
       if(mask[0] == 255) {
         let r = pix[0];
         let g = pix[1];
         let b = pix[2];
        // let g = pix[1];
         stroke(r,g,b);
         point(x, y);
        
          fill(255, 0, 0);
    var die = int(random(0,10));
    if (die == 5) {
      var gray = int(random(0, 100));
      var gray2 = int(random(0, 50));
      var scalar = random (0.2, 0.45);
     ellipse(x,y,scalar,gray);
    ellipse(x,y,gray2,scalar);
         noStroke();
         fill(255, 0,0);
         ellipse(x,y,50,1);

    }
     
       }
     }
   }



for(let y=0; y<height; y = y + 1) {
     for(let x=0; x<width; x = x + 1) {
       let pix = sourceImg.get(x, y);
       let mask = maskImg.get(x, y);
       if(mask[0] == 100) {
       let r = pix[0];
         let g = pix[1];
         let b = pix[2];
        // let g = pix[1];
         stroke(r,g,b);
         point(x, y);
     
       }
     }
   }




   fill(250, 0 ,0);
   noStroke();
   stroke(255, 0,0);
   strokeWeight(1);
   line(322, 361, 47, 761);
   line(47, 761,50, 1010);
   line(50, 1010, 653, 354);
   line(653, 354,47, 761);
   line(322, 361,653, 354);
   

   ellipse(322, 361, 8,8);
   ellipse(653, 354, 8,8);
   ellipse(47, 761, 8,8);
   ellipse(50, 1010, 8,8);


   
   fill(255);
   noStroke();
   textFont('Chalkduster');;
   text('Long Hair', 280, 589);
   // text('Antisocial Personality', 100, 864);
   // text('No fingerprint', 201, 186);
   // text('Murderer',560, 100);

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
