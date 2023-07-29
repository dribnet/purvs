/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let  img;
function preload(){
  img_1=loadImage('1plate.png');
  img_hour=loadImage('1meat.png');
  img_minute=loadImage('1asparagus.png');
  img_seconds=loadImage('1green_pea.png');
  img_fork=loadImage('1fork.png')
  img_knife=loadImage('1knife.png')
  img_table = loadImage('1table.png')


}

function draw_clock(obj) {
    let hours = obj.hours;
    let minute = obj. minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let alarm = obj.seconds_until_alarm;

  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(50); //  beige
  fill(200); // dark grey
  textSize(40);
  
 
  text("Second:"+seconds, 80, 100);
  text("Hours:"+hours, 50, 50);
  text("minute:"+minute, 50, 150);
  
// reset the images point to 12:00
  let seconds_origin =PI/30*39.5
  let minute_origin =PI/30*55.85
  let hour_origin = PI/30*7


// let millis_map= map(millis,0,999,0,60)
// let seconds_rotation = map(millis_map,0,60,0,PI/30)

  let seconds_radius=map(seconds,0,59,1,150);
  ellipse(100,100,seconds_radius);
   


// text(seconds_rotation,150,30)
// text(seconds_origin+PI/30*seconds_rotation*seconds,150,350)

// text(millis,150,300)

    fill(255, 255, 0);
    
   
    translate(width / 2, height / 2);
    image(img_table,-480,-250,960,500)
    image(img_1,-200,-200, 400, 400)



 



    push ();

    rotate(hour_origin+PI/6*hours)
    image(img_hour,-200,-200, 400, 400)
    pop(); 

    push ();

    
    rotate( minute_origin+PI/30*minute)
    image(img_minute,-200,-200, 400, 400)
    pop(); 


    // rotate(PI/30*40-PI/60+PI/30*seconds_rotation)

    // push ();
    // rotate(seconds_origin+PI/30*seconds)
    // image(img_seconds,-200,-200, 400, 400)
    // pop();
    
    
    push ();
    let secondsWithFraction = obj.seconds + (obj.millis / 999.0);
    let secondRotateSmooth = map(secondsWithFraction, 0, 60, 0, 360);

    rotate(seconds_origin+secondRotateSmooth/60)
    image(img_seconds,-200,-200, 400, 400)
    pop(); 





 
  if(alarm > 0 && alarm < 1)  {
  movement_A=map(millis,120,0,10,0);
  print("change 1")


  }

  else if(alarm == 0){
    if(millis>0)
    movement_A=map(millis,500,50,50,0)
  }

    // else{
    //   movement_A=map(millis,50,1000,0,50)
    
    //   }
  

  else{
  movement_A = 0;

  }

  
  if(alarm < 0 )  {
    movement_B=0;
    print("change 2")
  
  
    }
 
    if(alarm > 0 && alarm < 1)  {
      movement_B=map(millis,100,50,10,0);
      print("change 1")
    
    
      }
    
      else if(alarm == 0){
        if(millis>0)
        movement_B=map(millis,50,0,10,0)
      }
    
        // else{
        //   movement_A=map(millis,50,1000,0,50)
        
        //   }
      
    
      else{
      movement_B = 0;
    
      }
    
      
      if(alarm < 0 )  {
        movement_B=0;
        print("change 2")
      
      
        }




  image(img_fork,-480,-250+movement_A/2,960,500)
  image(img_knife,-480,-250-movement_B/3,960,500)

  
  

}
