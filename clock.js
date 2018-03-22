/*
 * us p5.js to draw a clock on a 960x500 canvas
 */

function draw_clock(obj) {
  //background(20,5)
  var x = 0;
  var y = 0;
  var imgMil, imgS,imgM,imgH;
  var theta = 0;
  var radMil, radS, radM, radH;
  imgMil = createImage(960, 500);
  imgS = createImage(960, 500);
  imgM = createImage(960, 500);
  imgH = createImage(960, 500);

    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

  //Time Data
  let mil = obj.millis;
  let s = obj.seconds;
  let m = obj.minutes;
  let hour = obj.hours;
  let alarm = obj.seconds_until_alarm

  if (alarm > 0){
  	background(240)
  } 

//Video Pixels
  movie.loadPixels();
  var w = movie.width;
  var h = movie.height;

//Create Image based on frame of video from specified dimensiions
  imgMil.copy(movie, w/2, 0, 1, h/2, x, y, 5, h/30);
  imgS.copy(movie, w/2, 0, 1, h/2, x, y, 5, h/25);
  imgM.copy(movie, w/2, 0, 1, h/2, x, y, 5, h/20);
  imgH.copy(movie, w/2, 0, 1, h/2, x, y, 5, h/15);

  translate(width/2, height/2.5);

//Place image at this location and animate it in circluar motion based on time data
  radMil = 50;
  theta = map(mil, 0, 1000, 0, 360);
  var xMil = cos(theta)*radMil
  var yMil = sin(theta)*radMil
  image(imgMil,xMil,yMil);

  radS = 100;
  theta = map(s, 0, 59, 0, 360);
  var xS = cos(theta)*radS
  var yS = sin(theta)*radS
  image(imgS,xS,yS);

  radM = 150;
  theta = map(m, 0, 59, 0, 360);
  var xM = cos(theta)*radM
  var yM = sin(theta)*radM
  image(imgM,xM,yM);

  radH = 200;
  theta = map(hour, 0, 23, 0, 360);
  var xH = cos(theta)*radH
  var yH = sin(theta)*radH
  image(imgH,xH,yH);


}
