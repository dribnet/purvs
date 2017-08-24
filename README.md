## PS2 MDDN 342 2017

## Final Version

At the beginning of this assignment I had a goal of creating a tool can convert portrait photos in robot faces. I have come very close to achieving that goal.  The only thing missing is the ability for someone to upload their own photo.  

The project was quite challenging as it required some out of the box thinking to turn the provided data into features that would appear on a robot face.  I started with the most basic features your expect to find on a robot, the eyes and the mouth.  As I worked with the code I started to think of other ways I could use the data.  A great example of this is the antennas and static electricity with have been created from the eyebrow data.  

The last three parts of the assignment involved refining the output by adding variation based on the features present in the face. I added several variable properties to the face which has greatly enhanced the output.  There is also a lot more variation available as a result of this.  I think the most effective variable features that I added are the hair length, smile size, facial hair length and earrings settings.  

I spent a fair amount of time testing the output using the "TrainQuiz" and "ValidQuiz" modes and made adjustment to both the code and training data as a result of the testing.  I think these modes are reasonably successful.  However it would probably take a bit of practise to consistently get the right answer for someone who is not as familiar with the faces as I am. 

There are couple of rules you can be considered that will assist in picking the correct face:

* No hair or wearing a hat  | Robot will have a glass dome
* Wearing earrings          | Robot will have side antennas as well as antennas on the top
* Hair length               | The longer the hair the more static electricity above the robots head
* Smile size                | The bigger the smile the bigger the audio wave inside the robots mouth
* Facial hair               | Determines the size of the grill below the robots mouth
* Skin tone                 | Darker skin tone results in a darker robot
* Lip vibrancy              | The outer mouth of the robot will be brighter the more vibrant the lips are
* Eye brightness            | The brighter the eyes are the easier it will be to see the robots eyes

For the final submission I have not altered the code except to clean it up and improve the commenting. I have replaced all the previous images I had for the face map mode with new ones.  My previous images were images related to sci-fi themes which well with my robot face. However I decided that since I needed to update the images anyway I would choose another theme.  I have chosen to use DJ'ing as the theme which I think also works well with the robot face as it involves creating sound using mechanical means.  
