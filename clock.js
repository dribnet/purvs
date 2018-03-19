/*
 * us p5.js to draw a clock on a 960x500 canvas
 */

function draw_ovals(pos_x) {
    ellipse(pos_x, 100, 10, 10);
    ellipse(pos_x, 200, 10, 10);
}

function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-1000
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off
    let hours = obj.hours;
    let minutes = obj.minutes;
    let seconds = obj.seconds;
    let millis = obj.millis;
    let seconds_until_alarm = obj.seconds_until_alarm;

    // background(200);
    // fill(200);
    // rect(100, 100, 200, 200);

    // let a = map(30, 0, 100, 0, 10);
    // console.log(a);

    // let sum = 0;
    // background(0);
    // fill(255);
    // for (let i = 0; i < 100; i = i+10) {
    //      rect(i, 100, 5, 5);
    // }
    // console.log(sum)

    draw_ovals(100);
    draw_ovals(200);
    draw_ovals(300);

    // const BACK_COLOR=0;

    // background(BACK_COLOR);

    // const start_y = 300;
    // const end_y = 400;

    // fill(0, 0, 255);
    // rect(0, start_y, width, 5);

    // fill(0, 255, 0);
    // rect(0, end_y, width, 5);

    // fill(200);
    // stroke(60);

    // let cur_pos = map(millis, 0, 1000, start_y, end_y);

    // for(let x=100; x<=600; x = x + 100) {
    //     rect(x, cur_pos, 50, 50);
    // }

    // draw_ovals(200, cur_pos);
}

// function draw_ovals(start_x, cur_y) {
//     for(let x=start_x; x<=600; x = x + 100) {
//         ellipse(x, cur_y, 50, 50);
//     }
// }
