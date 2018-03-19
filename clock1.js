var clockDiv = [0, 60, 60, 1000];

function draw_clock(obj) {
	background(0);

	fill(255);
	noStroke();
	textSize(48);
	textStyle(NORMAL);
	textAlign(CENTER, CENTER);

	translate(width / 2, height / 2); 

	var time = new Date();
	var milliseconds = time.getMilliseconds();
	var seconds = obj.seconds = time.getSeconds() + milliseconds / clockDiv[3];
	var minutes = obj.minutes = time.getMinutes() + seconds / clockDiv[2];
	var hours = obj.hours = time.getHours();
	var clock = [hours, minutes, seconds];

	translate(500, 100);

		clock.forEach(function (n, c) {
		push();
		var d = clockDiv[c];
		rotate(-n / d * TAU);
		var c = color(198, 156, 109);
		for (var i = 0; i < d; i++) {
			if (i >= n) {
				fill(255, (1 - i / d) * 102.4 + 153.6);
			} else {
				fill(c);
			}
			var t = c === 0 ? i || d : i;
			text(t, -400, -200);
			rotate(TAU / d);
		}
		pop();
		translate(150,80);
	});
}