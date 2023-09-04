  var systemBackgroundColor = "#3d3737";
  var systemLineColor = "#bdf0ce";
  var systemBoxColor = "#f78b8b";
  var backDrop = 2; //set to 1 for rgb, 2 for 3D effect

  function drawLetter(letterData) {
    noStroke();
    let sq1_posx = 0 + letterData["sq1_posx"];
    let sq1_posy = 0 + letterData["sq1_posy"];
    let sq2_posx = 0 + letterData["sq2_posx"];
    let sq2_posy = 0 + letterData["sq2_posy"];
    let sq3_posx = 0 + letterData["sq3_posx"];
    let sq3_posy = 0 + letterData["sq3_posy"];
    let sq4_posx = 0 + letterData["sq4_posx"];
    let sq4_posy = 0 + letterData["sq4_posy"];
    let sq5_posx = 0 + letterData["sq5_posx"];
    let sq5_posy = 0 + letterData["sq5_posy"];
    let sq6_posx = 0 + letterData["sq6_posx"];
    let sq6_posy = 0 + letterData["sq6_posy"];
    let sq7_posx = 0 + letterData["sq7_posx"];
    let sq7_posy = 0 + letterData["sq7_posy"];
    let sq8_posx = 0 + letterData["sq8_posx"];
    let sq8_posy = 0 + letterData["sq8_posy"];
    let sq9_posx = 0 + letterData["sq9_posx"];
    let sq9_posy = 0 + letterData["sq9_posy"];
    let sq10_posx = 0 + letterData["sq10_posx"];
    let sq10_posy = 0 + letterData["sq10_posy"];
    let lightPixelClr = letterData["lightPixelClr"];
    let darkPizelClr = letterData["darkPixelClr"];
    let pixelClr = color(lightPixelClr, lightPixelClr - 3, lightPixelClr - 20);

    if (backDrop === 1) {
      //-----! RED AND BLUE DROP-SHAODW !-----

      //-----! Red Shadow !-----
      fill(255, 100, 100, 175);
      rect(sq1_posx - 2, sq1_posy + 2, 20, 20);
      rect(sq2_posx - 2, sq2_posy + 2, 20, 20);
      rect(sq3_posx - 2, sq3_posy + 2, 20, 20);
      rect(sq4_posx - 2, sq4_posy + 2, 20, 20);
      rect(sq5_posx - 2, sq5_posy + 2, 20, 20);
      rect(sq6_posx - 2, sq6_posy + 2, 20, 20);
      rect(sq7_posx - 2, sq7_posy + 2, 20, 20);
      rect(sq8_posx - 2, sq8_posy + 2, 20, 20);
      rect(sq9_posx - 2, sq9_posy + 2, 20, 20);
      rect(sq10_posx - 2, sq10_posy + 2, 20, 20);

      //-----! Green Shadow !-----
      fill(50, 200, 50, 175);
      rect(sq1_posx + 2, sq1_posy - 2, 20, 20);
      rect(sq2_posx + 2, sq2_posy - 2, 20, 20);
      rect(sq3_posx + 2, sq3_posy - 2, 20, 20);
      rect(sq4_posx + 2, sq4_posy - 2, 20, 20);
      rect(sq5_posx + 2, sq5_posy - 2, 20, 20);
      rect(sq6_posx + 2, sq6_posy - 2, 20, 20);
      rect(sq7_posx + 2, sq7_posy - 2, 20, 20);
      rect(sq8_posx + 2, sq8_posy - 2, 20, 20);
      rect(sq9_posx + 2, sq9_posy - 2, 20, 20);
      rect(sq10_posx + 2, sq10_posy - 2, 20, 20);

      //-----! Blue Shadow !-----
      fill(50, 50, 200, 175);
      rect(sq1_posx + 2, sq1_posy + 2, 20, 20);
      rect(sq2_posx + 2, sq2_posy + 2, 20, 20);
      rect(sq3_posx + 2, sq3_posy + 2, 20, 20);
      rect(sq4_posx + 2, sq4_posy + 2, 20, 20);
      rect(sq5_posx + 2, sq5_posy + 2, 20, 20);
      rect(sq6_posx + 2, sq6_posy + 2, 20, 20);
      rect(sq7_posx + 2, sq7_posy + 2, 20, 20);
      rect(sq8_posx + 2, sq8_posy + 2, 20, 20);
      rect(sq9_posx + 2, sq9_posy + 2, 20, 20);
      rect(sq10_posx + 2, sq10_posy + 2, 20, 20);

    } else {

      /*
         -----!  3D Fade Drop-Shadow  !-----
      */

      //3D Fade Drop Shadow Variables
      let dropShadowOnePosx = 2;
      let dropShadowOnePosy = 5;
      let dropShadowTwoPosx = 4;
      let dropShadowTwoPosy = 10;
      let dropShadowThreePosx = 6;
      let dropShadowThreePosy = 15;
      let dropShadowFourPosx = 8;
      let dropShadowFourPosy = 20;
      let dropShadowFivePosx = 10;
      let dropShadowFivePosy = 25;

      //3D Fade Drop Shadow Pixel #1
      fill(lightPixelClr, 70);
      rect(sq1_posx - dropShadowOnePosx, sq1_posy + dropShadowOnePosy, 20, 20);
      rect(sq2_posx - dropShadowOnePosx, sq2_posy + dropShadowOnePosy, 20, 20);
      rect(sq3_posx - dropShadowOnePosx, sq3_posy + dropShadowOnePosy, 20, 20);
      rect(sq4_posx - dropShadowOnePosx, sq4_posy + dropShadowOnePosy, 20, 20);
      rect(sq5_posx - dropShadowOnePosx, sq5_posy + dropShadowOnePosy, 20, 20);
      rect(sq6_posx - dropShadowOnePosx, sq6_posy + dropShadowOnePosy, 20, 20);
      rect(sq7_posx - dropShadowOnePosx, sq7_posy + dropShadowOnePosy, 20, 20);
      rect(sq8_posx - dropShadowOnePosx, sq8_posy + dropShadowOnePosy, 20, 20);
      rect(sq9_posx - dropShadowOnePosx, sq9_posy + dropShadowOnePosy, 20, 20);
      rect(sq10_posx - dropShadowOnePosx, sq10_posy + dropShadowOnePosy, 20, 20);

      //3D Fade Drop Shadow Pixel #2
      fill(lightPixelClr, 55);
      rect(sq1_posx - dropShadowTwoPosx, sq1_posy + dropShadowTwoPosy, 20, 20);
      rect(sq2_posx - dropShadowTwoPosx, sq2_posy + dropShadowTwoPosy, 20, 20);
      rect(sq3_posx - dropShadowTwoPosx, sq3_posy + dropShadowTwoPosy, 20, 20);
      rect(sq4_posx - dropShadowTwoPosx, sq4_posy + dropShadowTwoPosy, 20, 20);
      rect(sq5_posx - dropShadowTwoPosx, sq5_posy + dropShadowTwoPosy, 20, 20);
      rect(sq6_posx - dropShadowTwoPosx, sq6_posy + dropShadowTwoPosy, 20, 20);
      rect(sq7_posx - dropShadowTwoPosx, sq7_posy + dropShadowTwoPosy, 20, 20);
      rect(sq8_posx - dropShadowTwoPosx, sq8_posy + dropShadowTwoPosy, 20, 20);
      rect(sq9_posx - dropShadowTwoPosx, sq9_posy + dropShadowTwoPosy, 20, 20);
      rect(sq10_posx - dropShadowTwoPosx, sq10_posy + dropShadowTwoPosy, 20, 20);

      //3D Fade Drop Shadow Pixel #3
      fill(lightPixelClr, 40);
      rect(sq1_posx - dropShadowThreePosx, sq1_posy + dropShadowThreePosy, 20, 20);
      rect(sq2_posx - dropShadowThreePosx, sq2_posy + dropShadowThreePosy, 20, 20);
      rect(sq3_posx - dropShadowThreePosx, sq3_posy + dropShadowThreePosy, 20, 20);
      rect(sq4_posx - dropShadowThreePosx, sq4_posy + dropShadowThreePosy, 20, 20);
      rect(sq5_posx - dropShadowThreePosx, sq5_posy + dropShadowThreePosy, 20, 20);
      rect(sq6_posx - dropShadowThreePosx, sq6_posy + dropShadowThreePosy, 20, 20);
      rect(sq7_posx - dropShadowThreePosx, sq7_posy + dropShadowThreePosy, 20, 20);
      rect(sq8_posx - dropShadowThreePosx, sq8_posy + dropShadowThreePosy, 20, 20);
      rect(sq9_posx - dropShadowThreePosx, sq9_posy + dropShadowThreePosy, 20, 20);
      rect(sq10_posx - dropShadowThreePosx, sq10_posy + dropShadowThreePosy, 20, 20);

      //3D Fade Drop Shadow Pixel #4
      fill(lightPixelClr, 25);
      rect(sq1_posx - dropShadowFourPosx, sq1_posy + dropShadowFourPosy, 20, 20);
      rect(sq2_posx - dropShadowFourPosx, sq2_posy + dropShadowFourPosy, 20, 20);
      rect(sq3_posx - dropShadowFourPosx, sq3_posy + dropShadowFourPosy, 20, 20);
      rect(sq4_posx - dropShadowFourPosx, sq4_posy + dropShadowFourPosy, 20, 20);
      rect(sq5_posx - dropShadowFourPosx, sq5_posy + dropShadowFourPosy, 20, 20);
      rect(sq6_posx - dropShadowFourPosx, sq6_posy + dropShadowFourPosy, 20, 20);
      rect(sq7_posx - dropShadowFourPosx, sq7_posy + dropShadowFourPosy, 20, 20);
      rect(sq8_posx - dropShadowFourPosx, sq8_posy + dropShadowFourPosy, 20, 20);
      rect(sq9_posx - dropShadowFourPosx, sq9_posy + dropShadowFourPosy, 20, 20);
      rect(sq10_posx - dropShadowFourPosx, sq10_posy + dropShadowFourPosy, 20, 20);

      //3D Fade Drop Shadow Pixel #5
      fill(lightPixelClr, 10);
      rect(sq1_posx - dropShadowFivePosx, sq1_posy + dropShadowFivePosy, 20, 20);
      rect(sq2_posx - dropShadowFivePosx, sq2_posy + dropShadowFivePosy, 20, 20);
      rect(sq3_posx - dropShadowFivePosx, sq3_posy + dropShadowFivePosy, 20, 20);
      rect(sq4_posx - dropShadowFivePosx, sq4_posy + dropShadowFivePosy, 20, 20);
      rect(sq5_posx - dropShadowFivePosx, sq5_posy + dropShadowFivePosy, 20, 20);
      rect(sq6_posx - dropShadowFivePosx, sq6_posy + dropShadowFivePosy, 20, 20);
      rect(sq7_posx - dropShadowFivePosx, sq7_posy + dropShadowFivePosy, 20, 20);
      rect(sq8_posx - dropShadowFivePosx, sq8_posy + dropShadowFivePosy, 20, 20);
      rect(sq9_posx - dropShadowFivePosx, sq9_posy + dropShadowFivePosy, 20, 20);
      rect(sq10_posx - dropShadowFivePosx, sq10_posy + dropShadowFivePosy, 20, 20);
    }

    /*
         -----!  Main Letter Pixels  !-----
    */

    fill(pixelClr);
    rect(sq1_posx, sq1_posy, 20, 20);
    rect(sq2_posx, sq2_posy, 20, 20);
    rect(sq3_posx, sq3_posy, 20, 20);
    rect(sq4_posx, sq4_posy, 20, 20);
    rect(sq5_posx, sq5_posy, 20, 20);
    rect(sq6_posx, sq6_posy, 20, 20);
    rect(sq7_posx, sq7_posy, 20, 20);
    rect(sq8_posx, sq8_posy, 20, 20);
    rect(sq9_posx, sq9_posy, 20, 20);
    rect(sq10_posx, sq10_posy, 20, 20);
  }

  function interpolate_letter(percent, oldObj, newObj) {

    /*
           The upper map numbers are set so high to
           stop the individual pixels from moving on
           the screen. I had to do this to achieve
           the interpolation I wanted while still
           keeping the X and Y variables in the
           code.
    */
    let new_letter = {};
    new_letter["sq1_posx"] = map(percent, 0, 5000, oldObj["sq1_posx"], newObj["sq1_posx"]);
    new_letter["sq1_posy"] = map(percent, 0, 5000, oldObj["sq1_posy"], newObj["sq1_posy"]);
    new_letter["sq2_posx"] = map(percent, 0, 5000, oldObj["sq2_posx"], newObj["sq2_posx"]);
    new_letter["sq2_posy"] = map(percent, 0, 5000, oldObj["sq2_posy"], newObj["sq2_posy"]);
    new_letter["sq3_posx"] = map(percent, 0, 5000, oldObj["sq3_posx"], newObj["sq3_posx"]);
    new_letter["sq3_posy"] = map(percent, 0, 5000, oldObj["sq3_posy"], newObj["sq3_posy"]);
    new_letter["sq4_posx"] = map(percent, 0, 5000, oldObj["sq4_posx"], newObj["sq4_posx"]);
    new_letter["sq4_posy"] = map(percent, 0, 5000, oldObj["sq4_posy"], newObj["sq4_posy"]);
    new_letter["sq5_posx"] = map(percent, 0, 5000, oldObj["sq5_posx"], newObj["sq5_posx"]);
    new_letter["sq5_posy"] = map(percent, 0, 5000, oldObj["sq5_posy"], newObj["sq5_posy"]);
    new_letter["sq6_posx"] = map(percent, 0, 5000, oldObj["sq6_posx"], newObj["sq6_posx"]);
    new_letter["sq6_posy"] = map(percent, 0, 5000, oldObj["sq6_posy"], newObj["sq6_posy"]);
    new_letter["sq7_posx"] = map(percent, 0, 5000, oldObj["sq7_posx"], newObj["sq7_posx"]);
    new_letter["sq7_posy"] = map(percent, 0, 5000, oldObj["sq7_posy"], newObj["sq7_posy"]);
    new_letter["sq8_posx"] = map(percent, 0, 5000, oldObj["sq8_posx"], newObj["sq8_posx"]);
    new_letter["sq8_posy"] = map(percent, 0, 5000, oldObj["sq8_posy"], newObj["sq8_posy"]);
    new_letter["sq9_posx"] = map(percent, 0, 5000, oldObj["sq9_posx"], newObj["sq9_posx"]);
    new_letter["sq9_posy"] = map(percent, 0, 5000, oldObj["sq9_posy"], newObj["sq9_posy"]);
    new_letter["sq10_posx"] = map(percent, 0, 5000, oldObj["sq10_posx"], newObj["sq10_posx"]);
    new_letter["sq10_posy"] = map(percent, 0, 5000, oldObj["sq10_posy"], newObj["sq10_posy"]);
    new_letter["lightPixelClr"] = map(percent, 0, 1000, oldObj["darkPixelClr"], newObj["lightPixelClr"]);
    return new_letter;
  }

  var swapWords = [
    "VINPIXEL",
    "ABCDEFGH",
    "IJKLMNOP",
    "QRSTUVWX",
    "YZ-12345",
    "6789----"
  ]
