
// change these for marking
let init = false;
var waitForHourChange = false;

// global varibles 
let customFrameCount = 0;
var maxSize = 200;
var maxSizeConst = 200;
var minSize = 40;
var minSizeConst = 40;
var alramActive = false;
var elements = 12;
var frameStrokeWeightConst = 32;
var frameStrokeWeight = 32;

function draw_clock(obj) {
  //setup
  background(50);
  angleMode(DEGREES);
  fill(255)
  stroke(255);
  textSize(29)
  translate(width/2,height/2);
  var hour = 0;
  // convert hours to number of elements 
  if(obj.hours+1>12){
    hour = obj.hours - 12;
  }else{
    hour = obj.hours ;
    
  }
  if(hour == 0){
    hour = 12;
  }
  // waiting for seconds to equal zero until starting so clock rotation is alligned 
  if(init){
    text("The clock will start in "+ (60 - obj.seconds), -150, 0);
    if(obj.seconds == 0){
      init = false;
      elements = hour;
    }
    
  }else {
    textSize(20);
    //text(obj.hours + " : " + obj.minutes +  " : " + obj.seconds +" Number of elements: " + hour + " alarm in "+ obj.seconds_until_alarm+ "   time until alligned -" + customFrameCount % 3600, -0, -220 );
    noFill();
    strokeWeight(4);
    var highlight = true;
    // set number of elements to the correct hour every minute on the correct part of the animaion 
    if(waitForHourChange){
      if( customFrameCount % 3600 < 150 && customFrameCount % 3600 > 135){
        elements = hour;
      } 
    } else{
      elements = hour;
    }
    
    // decrease the size of the clock before update the hour to make the size jump less noticable 
    if( customFrameCount % 3600 < 125 || customFrameCount % 3600 > 3550){
      maxSize-=0.5;
      minSize -= 0.5;
      frameStrokeWeight++;
    } else{
      // change back to regular values 
      if(frameStrokeWeight > frameStrokeWeightConst){
        frameStrokeWeight--;
      }
      if(maxSize < maxSizeConst){
        maxSize+= 0.3;
      }
      if(minSize < minSizeConst){
        minSize += 0.3;
      }
    }
    var numberOfShapes = elements;
    var rotation = customFrameCount / (10 * elements);
   
    var alramTimer = obj.seconds_until_alarm;
    if(alramTimer== 0){
      alramActive = true;
    }
      
    if(alramActive){
      maxSize+= 0.75;
      minSize-= 0.06;
      
    } else {
      if(maxSize > maxSizeConst){
        maxSize-= 0.5;
      }
      if(minSize < minSizeConst){
        minSize += 0.5;
      }
      
    }
    push();
    for(var i = 0; i < numberOfShapes; i++){
      strokeWeight(4);
      if(alramActive){
        if(highlight){
          stroke(255,255,50);
          highlight = false;
        } else {
          stroke(255,10+ i * 20 ,10 + i* 20);
        }
      } else {
        stroke(240);
      }
      
      beginShape();
      // loop over points 
      for(var j = 0; j < 360; j += 5){
        // map radius to sin wave
        var rad = map(sin(j * elements + customFrameCount) , -1, 1, minSize , maxSize);
        var x = rad * cos(j);
        var y = rad * sin(j);
        vertex(x,y);
        // make alarm finish at perfect time 
        if(rad == minSize && alramTimer!= 0){
          alramActive = false;
        }
      }
      endShape(CLOSE);
      strokeWeight(frameStrokeWeight);
      ellipseMode(RADIUS);
      ellipse(0, 0, rad, rad);
      if(true){
        rotate(rotation);
  
      }
      
    }
    pop();
    strokeWeight(2);
    stroke(255);
    noFill(255);
    textSize(15);
    textAlign(CENTER, CENTER);
    // tune correction 
    

    //text(newMinute + " old number - " + (obj.minutes+1)/5 , -200,-200);
    
    draw_face(rad,obj);

    customFrameCount+=1;
  }
  
  
}

function draw_face(rad,obj){
    var newMinute = int((obj.minutes+1)/5);
    //rotate 90 degrees
    newMinute = newMinute -3;
    if(newMinute < 0){
      newMinute = 12 + newMinute;
    }

    for (var i = 0; i < 12; i++) {
      var angle = map(i, 0, 12, 0, 360);
      var x = rad * cos(angle);
      var y = rad * sin(angle);
      
      if(i == newMinute){
        fill(50);
      } else{
        noFill();
      }
      push();
      strokeWeight(2);
      stroke(50);
      translate(x, y);
      ellipse(0, 0, 5, 5);
      pop();
  }
}