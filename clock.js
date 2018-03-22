/*
 * us p5.js to draw a clock on a 960x500 canvas
 */ 
let millRotate;
let secRotate;
let minRotate;
let hourRotate;
let bgR;
let bgG;
let bgB;
let fgR = 255;
let fgG = 255; 
let fgB = 255;

function draw_clock(obj) {  
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    
    background(bgR,bgG,bgB);        // Black Background
    ortho();                        // Force orthographic camera
    
    push();
    rotate (PI/30)
    for (var i = 0; i < 12; i+=1){
        rotate(PI/6);

        fill (255);
        ellipse (20,215,3,3); 
    }
        pop();

    //Plane Customization\\
    //-------------------\\
    /*Clock is made up of three 3D planes each with it's own sketch as a texture*/
    
    fill(0,0); // Force Webgl to accept RGBa instead of RGB
    
    //Text only plane (currently broken)
//    texture(timeP);
//    timeP.fill(fgR,fgG,fgB);
//    timeP.textAlign(CENTER,CENTER);
//    timeP.textSize(500);
//    timeP.text(obj.hours+":"+obj.minutes+":"+obj.seconds,480,480);
    

    //Outer ring (plane)
    texture(outerP);
    outerP.clear();
    
    outerP.fill(fgR,fgG,fgB);
    outerP.textAlign(CENTER,CENTER);
    outerP.textSize(22);
    outerP.text(obj.hours+":"+obj.minutes+":"+obj.seconds,480,480);
    
    rotateZ(radians(hourRotate + minRotate/12));    //Add second data for more granular rotation
    outerP.fill(0,0);
    outerP.stroke(fgR,fgG,fgB);
    outerP.strokeWeight(50);
    outerP.ellipse(480,480,400,400);
    outerP.fill(bgR,bgG,bgB,255);
    outerP.strokeWeight(0);
    outerP.rect(480,255,5,15); 
    plane(800);
    
    //Middle ring (plane)
    texture(innerP);
    innerP.clear();
    rotateX(radians(secRotate + millRotate/60));      //Add millisecond data for more granular rotation
    innerP.fill(0,0);
    innerP.stroke(fgR,fgG,fgB);
    innerP.strokeWeight(50);
    innerP.ellipse(480,480,290,290);
    plane(800);
    
    //Inner ring (plane)
    texture(clockP);
    clockP.clear();
    clockP.strokeWeight(0);
    rotateY(radians(millRotate));
    clockP.fill(0,0);
    clockP.stroke(fgR,fgG,fgB);
    clockP.strokeWeight(50);
    clockP.ellipse(480,480,180,180);
    plane(800);
    
    

    
    //Data conversion\\
    //---------------\\
    
    //Maps time to rotation and colour values
    millRotate = map(obj.millis,0,1000,0,360);
    secRotate = map(obj.seconds,0,60,0,360);
    minRotate = map(obj.minutes,0,60,0,360);
    hourRotate = map(obj.hours,0,24,0,720);
    
    if (obj.hours < 12){
    bgR = map(obj.hours+ obj.minutes/100, 0,12,181,255);
    bgG = map(obj.hours+ obj.minutes/100, 0,12,205,108);
    bgB = map(obj.hours+ obj.minutes/100, 0,12,255,0);
 
//  Change colours of foreground overtime        
//  fgR = map(obj.hours+ obj.minutes/100, 0,12,255,255);
//  fgG = map(obj.hours+ obj.minutes/100, 0,12,108,255);
//  fgB = map(obj.hours+ obj.minutes/100, 0,12,0,255); 
        
    }else{
    bgR = map(obj.hours+ obj.minutes/100, 12,24,255,181);
    bgG = map(obj.hours+ obj.minutes/100, 12,24,108,205);
    bgB = map(obj.hours+ obj.minutes/100, 12,24,0,255);
    
//  fgR = map(obj.hours+ obj.minutes/100, 12,24,255,181);
//  fgG = map(obj.hours+ obj.minutes/100, 12,24,255,205);
//  fgB = map(obj.hours+ obj.minutes/100, 12,24,255,255); 
    }
}


