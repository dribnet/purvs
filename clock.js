    // global variables
    let bodyMain;
    let backgroundMain;
    let soulMain;
    let scytheMain;

    let soulVariable = 0;
    let bodyMainValue = 0;
    let backgroundMainValue = 0;
    let secondsMain = 0;
    let testvar = 0;

    function preload() {
      // Preload images
      bodyMain = [
        loadImage("bodyMain/bodyMain1.png"),
        loadImage("bodymain/bodyMain2.png")
      ];

      backgroundMain = [
        loadImage("background/backgroundMain1.jpg"),
        loadImage("background/backgroundMain2.png")
      ];

      soulMain = [
        loadImage("soul/soul_00.png"),
        loadImage("soul/soul_01.png"),
        loadImage("soul/soul_02.png"),
        loadImage("soul/soul_03.png"),
        loadImage("soul/soul_04.png"),
        loadImage("soul/soul_05.png"),
        loadImage("soul/soul_06.png"),
        loadImage("soul/soul_07.png"),
        loadImage("soul/soul_08.png"),
        loadImage("soul/soul_09.png"),
        loadImage("soul/soul_10.png"),
        loadImage("soul/soul_11.png"),
        loadImage("soul/soul_12.png"),
        loadImage("soul/soul_13.png"),
        loadImage("soul/soul_14.png"),
        loadImage("soul/soul_15.png"),
        loadImage("soul/soul_16.png"),
        loadImage("soul/soul_17.png"),
        loadImage("soul/soul_18.png"),
        loadImage("soul/soul_19.png"),
        loadImage("soul/soul_20.png"),
        loadImage("soul/soul_21.png"),
        loadImage("soul/soul_22.png"),
        loadImage("soul/soul_23.png"),
        loadImage("soul/soul_24.png"),
      ];

      scytheMain = [
        loadImage("scytheAlarm/scythe_Idle.png"),
        loadImage("scytheAlarm/scytheAlarm_01.png"),
        loadImage("scytheAlarm/scytheAlarm_02.png")
      ];
    }

    function setup() {
      createCanvas(960, 500);
    }

    function draw_clock(obj) {
      // Draw your own clock here based on the values of obj:
      // obj.hours goes from 0-23
      // obj.minutes goes from 0-59
      // obj.seconds goes from 0-59
      // obj.millis goes from 0-999
      // obj.seconds_until_alarm is:
      // < 0 if no alarm is set
      // = 0 if the alarm is currently going off
      // > 0 --> the number of seconds until the alarm should go off

      // time variables
      let seconds = obj.seconds;
      let minutes = obj.minutes;
      let hours = obj.hours;
      let milliseconds = obj.millis;
      let alarmMain = obj.seconds_until_alarm;

      // animation mapping for souls
      let soulMovement = map(milliseconds, 0, 999, 0, 0.5);
      let soulMovement2 = soulMovement - 1;
      let scytheMovement = map(milliseconds, 0, 999, 0, 5);

      function lanternMain() { 
        // lantern function every second set value to 1 or 0.
        if (secondsMain !== seconds) {
          secondsMain = seconds;

          if (bodyMainValue === 0) {
            bodyMainValue = 1;
          } else if (bodyMainValue === 1) {
            bodyMainValue = 0;
          }
        }
      }

      function minuteNecklaceTimer() {
        // minute necklace display & design function
        textSize(20);
        fill(0);
        stroke(4);
        textFont('Georgia');
        text(minutes, 456, 182.5);
      }

      function soulVAR() {
        soulVariable = hours;
      }

      function checkAM_PM() {
        // AM PM background change function
        if (hours < 12) {
          backgroundMainValue = 0;
        } else if (hours > 12) {
          backgroundMainValue = 1;
        } else if (hours === 12) {
          backgroundMainValue = 1;
        }
      }

      function alarm() {
        // alarm scythe function
        if (alarmMain < 0) {
          image(scytheMain[0], 0, 0);
        } else if (alarmMain === 0) {
          image(scytheMain[1], 0, scytheMovement);
        } else if (alarmMain > 0) {
          image(scytheMain[2], 0, scytheMovement);
        }
      }

      function soulsShake (){ 
        // souls shaking animation function
        if (testvar === 0){
          image(soulMain[soulVariable], 0, soulMovement);
          testvar = 1;
        } else if (testvar === 1){
          image(soulMain[soulVariable], 0, soulMovement2);
          testvar = 0;
        }

      }

    //load background & lantern images
      image(backgroundMain[backgroundMainValue], 0, 0);
      image(bodyMain[bodyMainValue], 0, 0);

      //call functions
      checkAM_PM();
      alarm();
      lanternMain();
      minuteNecklaceTimer();
      soulVAR();
      soulsShake();
    }
