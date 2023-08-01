[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JAZAP9dv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11439611&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Update this file as you go along to record your progress.

18 JULY
  Seconds in this clock are defined by a gear that rotates. Once one tooth passes some pointer, one second will have passed.
  To make this, I defined a class called SecondsGear. This class will take in some arguments and construct a hollow gear with them, which can be rotated through a method that will change its angle property.

  Later on I will define the teeth with a separate class called SecondsTooth.
  This is important for when I make the alarm functionalities; the tooth that will pass the pointer, denoting when the alarm is going off, needs to be a different colour. 

20 JULY
  Initially, I was having some trouble trying to get my gear to rotate.

  I first defined the method turn(...) for the SecondsGear class, which when given some angle (in degrees), the gear will rotate by that amount. With this, I also defined in the main routine a variable called rotationIncrement, which tells the gear how much to rotate by in one second. However, I could not for whatever reason get the gear to rotate the way I wanted; it was either going too fast or moving a small increment before resetting its angle entirely. I then removed this method and tried using a new one called setAngle(...), whereby the angle propety is set opposed to incremented. This also yielded undesired results and so it was scrapped. In hindsight, all of was probably due to having bad values of rotationIncrement. I eventually settled on changing the angle property directly, using a p5 map(...) function to map the sum of seconds and milliseconds to degrees, which ended up working perfectly.

  The draw(...) method of the SecondsGear class has been updated to allow for a specific tooth to have a different colour than the rest. Its contemporary purpose is to help fix bugs with the rotation. The class was also given a new property in the constructor called initialAngle, which offsets the rotation of the gear by some amount.

  The SecondsTooth class has been defined. It simply consists of a constructor(...) and a draw(...) method. The SecondPointer class has also been defined. This is just a triangle that sits 90 degrees clockswise from the top. Beside it is some text that shows how many seconds in the minute have gone by. The text is also sideways; in the original design, it was in the correct orientation. However, I felt that it looked better that way, so I kept it so.

  Deviating from my original design, I added another, much larger gear in the background that turns counter clockwise at the same rate as the foreground gear. 

22 JULY
  My plans for today were to add the minutes element of the clock, however, I felt that the way I named the seconds related elements were inconsistent, so I changed all the references of 'gear' to 'display' and 'tooth/teeth' to 'indicator/indicators.' All other clock elements will follow this naming scheme.

  SecondsDisplay now has rotationIncrement built into it as a propety since the calculation to get this number can be done interally.
  SecondsIndicators used to need to store some xCenter and yCenter, but that has since been removed since secondsDisplay already contains those values.

  MinutesDisplay and MinutesIndicator are two new classes that represent minutes in this clock. Their appearance is a circular array of rectangles. There are 60 inducators in total, each representing the minutes 0 to 59. The current minute (active indicator) has an increased length, while some number around it also have a slightly smaller increase in length. This change in length is not instant. The height of each rectangle, whether it is increasing or decreasing, changes over time to have a smooth animated effect. The grow and decay are values that were first paremeters of the MinutesDisplay draw(...) method, however, I changed them to just be constants as I felt that I most likely would not be adjusting them. There are two colours for this indicator, an inactive colour and an active colour. All indicators unaffected by the spread have this inactive colour. The current minute has the active colour. All the indicators inbetween have a lerpColor(...) between the two; the ratio of inactive to inactive depends on its proximity to the current minute.

24 JULY
  The HoursDisplay and HoursIndicator classes were defined. Hours are represented by a circular arrangement of 12 arcs, each representing 0 to 11 hours initially, before looping back for the next 12 to 23 hours. Like with the MinutesDisplay, the current hour is represented with an active colour, while the others are coloured by some inactive colour. The current minute also has a larger radius. The transition between inactive and active is also not gradual. Unlike MinutesDisplay, however, there is no spread from the current hour.

25 JULY
  Because it is impossible to tell whether the clock is show AM or PM, a new class called AMPMDisplay has been defined to solve this problem. This class is simply a circle that lerps forwards between two colours during AM to PM (a dark colour going to light), then lerps backwards between the same two colours during PM to AM (a light colour going to a dark colour). In contrast with the other displays, this one was the most simple to program. 

  A bit later on I realised that this does not actually solve the problem at all; because the lerp backwards is just the inverse of the lerp forwards, two times 12 hours appart, lets say 5AM and 5PM, look identical. The only way to tell them apart is by waiting for the next hour to go by and seeing if the AMPMDisplay would get lighter or darker. To remedy this, a new static method was added that displayed in text AM or PM depending on the current hour. This was positioned near the centre of the background gear, with the same lerp colour as the main display.

27 JULY
  I began working on the alarm today, starting with the indications before the alarm would go off. 

  Firstly, I wanted to make it so that no matter how long the delay is, some highlighted indicator would pass the pointer exactly as the alarm goes off. This was apparently really simple: by subtracting the max total seconds (60) by the current second in the minute (this effectively resets the seconds back to zero), and then by the time until the alarm would go off, it would compute which indicator needed to be highlighted. Somehow I managed to not see the solution immediatly and spent an hour on this problem.

28 JULY
  The minute and hour of when the alarm is going off is now also highlighted. Furthermore, if the sum of the alarm time and current second is over 59, then the following minute will be highlighted. This also applies to the hours; If the following minute is 0 (as in, it has passed 59 minutes), then the following hour will be highlighted.

  Another HoursDisplay has been added to complimemt the background gear. Like with the background gear, it was not part of the original design and was added as a means to make the clock look better. The first HoursDisplay is a full circle, surrounded by the secondsDisplay. However, this background gear is off to the side and does not fit inside the canvas. As a result of this, the HoursDisplay class has a new parameter that lets it adjust the total size of the arc. This has made it so that this new HoursDisplay entirelly fits on the canvas.

  SecondsDisplay and MinutesDisplay have both been rescaled and repositioned, deviating from the clocks original composition. This new arrangement has the SecondsDisplay gear smaller and the MinutesDisplay larger and on the outside. The latter's alpha colour has also been halved to make it semi transparent.

01 AUGUST


