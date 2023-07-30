// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE

  background(0);

  const symbols = {
    zero: [ [0,1,1,1,0],
            [1,0,0,0,1],
            [1,0,0,1,1],
            [1,0,1,0,1],
            [1,1,0,0,1],
            [1,0,0,0,1],
            [0,1,1,1,0]],
    spacer: [ [0],
              [0],
              [0],
              [0],
              [0],
              [0],
              [0]],
    colon:  [ [0,0,0,0,0],
              [0,0,1,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,0,0,0],
              [0,0,1,0,0],
              [0,0,0,0,0]],
    one:    [ [0,0,1,0,0],
              [0,1,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0]],
    two:    [ [0,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [0,0,0,1,0],
              [0,0,1,0,0],
              [0,1,0,0,0],
              [1,1,1,1,1]],
    three:  [ [0,1,1,1,0],
              [1,0,0,0,1],
              [0,0,0,0,1],
              [0,0,1,1,0],
              [0,0,0,0,1],
              [1,0,0,0,1],
              [0,1,1,1,0]],
    four:   [ [0,0,0,1,0],
              [0,0,1,1,0],
              [0,1,0,1,0],
              [1,0,0,1,0],
              [1,1,1,1,1],
              [0,0,0,1,0],
              [0,0,0,1,0]],
    five :  [ [1,1,1,1,1],
              [1,0,0,0,0],
              [1,1,1,1,0],
              [0,0,0,0,1],
              [0,0,0,0,1],
              [1,0,0,0,1],
              [0,1,1,1,0]],
    six:    [ [0,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,0],
              [1,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [0,1,1,1,0]],
    seven:  [ [1,1,1,1,1],
              [0,0,0,0,1],
              [0,0,0,0,1],
              [0,0,0,1,0],
              [0,0,1,0,0],
              [0,0,1,0,0],
              [0,0,1,0,0]],
    eight:  [ [0,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [0,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [0,1,1,1,0]],
    nine:   [ [0,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [0,1,1,1,1],
              [0,0,0,0,1],
              [1,0,0,0,1],
              [0,1,1,1,0]],
    p:      [ [1,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,1,1,1,0],
              [1,0,0,0,0],
              [1,0,0,0,0],
              [1,0,0,0,0]],
    a:      [ [0,1,1,1,0],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,1,1,1,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1]],
    m:      [ [1,0,0,0,1],
              [1,1,0,1,1],
              [1,0,1,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1],
              [1,0,0,0,1]]
    
  }

  const c1 = color(114, 180, 224);
  const c2 = color(145, 15, 15);
  var numbers = [symbols.zero, symbols.one, symbols.two, symbols.three, symbols.four, symbols.five, symbols.six, symbols.seven, symbols.eight, symbols.nine];
  var time = [symbols.zero, symbols.spacer, symbols.zero, symbols.colon, symbols.zero, symbols.spacer, symbols.zero, symbols.colon, symbols.zero, symbols.spacer, symbols.zero, symbols.spacer, symbols.spacer, symbols.a, symbols.spacer, symbols.m];


  var hours = obj.hours;

  if(hours > 11)  time[13] = symbols.p;
  else time[13] = symbols.a;

  time[0] = numbers[floor((obj.hours%12)/10)];
  time[2] = numbers[(obj.hours%12)%10];

  time[4] = numbers[floor(obj.minutes/10)];
  time[6] = numbers[obj.minutes%10];

  time[8] = numbers[floor(obj.seconds/10)];

  console.log(obj);
  
  
  push();
  translate(350, 20);
  for(let iteration = 0; iteration < 10; iteration++) {
    noStroke()
    fill(30, 10, 40, 50);
    rect(-width,-height,width*2,height*2);

    noFill()
    var colour = lerpColor(c1, c2, iteration/8);
    if(iteration == 9) colour = color(255);
    stroke(colour);
    strokeWeight(lerp(1, 3, iteration/9));

    translate(-20,20);
    push();

    var sec = obj.seconds%10-(9-iteration);
    if(sec < 0) sec = 10+sec;
    time[10] = numbers[sec];

    for(let n = 0; n < time.length; n++) {
      let number = time[n];
      for(let i = 0; i < number[0].length; i++) {
        push();
        for(let j = 0; j < number.length; j++) {
          translate(0,10);
          if(number[j][i] == 0) continue;
          beginShape();
          vertex(0, 0);
          vertex(10, 1);
          vertex(10, 11);
          vertex(0, 10);
          endShape(CLOSE);
        }
        pop();
        translate(10,1);
      }
    }
    pop(); 
  }
  pop();


}
