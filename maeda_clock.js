// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {

  let hours = obj.hours;
  let minute = obj. minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;

  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill(200); // dark grey
  textSize(60);
  textAlign(CENTER, CENTER);
  text("Second:"+seconds, width/2, height/2);
  text("Hours:"+hours, 50, 50);
  
  

  
  let secondsWithFraction = (millis/25)
  let minute_size=map(secondsWithFraction,0,60,40,300);
  if (secondsWithFraction<= 30){
    let minute_size=(secondsWithFraction,0,60,40,300);
  }
  else{
    let minute_size= map(secondsWithFraction,0,60,300,40) 
  }
  textSize(minute_size);
  text(minute,width/4*3,height/2)

  // let Fraction_2 = (millis/25)
  // let hours_size=map(Fraction_2,0,60,40,300);
  // if (Fraction_2 >= 30){
  //   let minute_size=(Fraction_2,0,60,40,300);
  // }
  // else{
  //   let minute_size= map(Fraction_20,60,300,40) 
  // }
  // textSize(hours_size);
  text (hours,width/4,height/2);

let seconds_radius=map(seconds,0,59,1,150);
ellipse(100,100,seconds_radius);


}
