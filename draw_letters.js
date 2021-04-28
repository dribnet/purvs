/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000";
var systemLineColor = "#000000";
var systemBoxColor = "#00c800";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

    //Nodes - These make up the custom shape used. These can be manipulated with letters.js

    let TopAxis = -75 + letterData["offsetRightTop"];
    let TopMidAxis = -100 + letterData["offsetMidTop"];
    let LeftAxis = -50;
    let BottomSideAxis = 75 + letterData["offsetBottom"];
    let BottomMidAxis = BottomSideAxis + 25 + letterData["offsetBottomMid"];
    let RightAxis = 50;
    let RightMidAxisY = BottomSideAxis + TopAxis; //was 0, this makes it more adpaptive but at the cost of how far it can change. 
    let RightMidAxisX = RightAxis + letterData["offsetMidRight"];
    let leftMidNodeX = LeftAxis + letterData["offsetMidLeft"];
    let leftMidNodeY = TopAxis + BottomSideAxis;

    // Translation Parameters -  Parameters used to adjust and polish letter forms to create more cohesive font family

    let ShapeRotation = letterData["Rotation"];
    let ShapeTranslationX = letterData["TranslateX"];
    let ShapeTranslationY = letterData["TranslateY"];

    // These variables take the Y information given to the Middle nodes and uses that to 
    let width = letterData["offsetMidTop"] - letterData["offsetBottomMid"];
    let WidthScaleChange = map(width, -25, 25, -.15, .05);


    //Second Shape - these are the parameters used to adjust and move the second shape that can help to create forms

    let SecondShapeX = 50 + letterData["offsetsecondShapeX"];
    let SecondShapeY = 100 + letterData["offsetsecondShapeY"];
    let SecondShapeScale = letterData["secondShapeScale"];
    let SecondShapeRotation = letterData["SecondShapeRotation"];

    //Node Variables
    let NodeSize = 10;
    let NodeTransitionSize = 2;

    angleMode(DEGREES);

    //Colours used

    let lineColor = color(255, 255, 255, 5);


    lineBright = color(247, 207, 255);
    c = color(215, 66, 245);

    OrangeColour = color(255, 207, 53, 10);
    GreenColour = color(4, 217, 178, 10);

    c.setAlpha(10);
    let illumination = 2; //illuminations is the strokesize used within the for loop used when making the glowing shape

    let ShapePosX = 50 + ShapeTranslationX;
    let ShapePosY = 100 + ShapeTranslationY;


    GlowShape(); //Draws the letterform


    function GlowShape() { //Function uses for loops and layer stacking to give the illusion of a glowing form

        for (let i = 0; i < 10; i++) {
            illumination = illumination + i;
            MainShape(GreenColour, illumination, .75, ShapePosX, ShapePosY, GreenColour, 0);
            MainShape(OrangeColour, illumination, SecondShapeScale, SecondShapeX, SecondShapeY, OrangeColour, SecondShapeRotation);
        }

        //These single white lined forms of the shape are helpful to make the typeface more readable and to avoid any illegibility of the shapeforms
        c.setAlpha(0);
        transparentFill = color(0, 0, 0, 0)
        MainShape(lineBright, .5, .75, ShapePosX, ShapePosY, transparentFill, 0);
        MainShape(lineBright, .5, SecondShapeScale, SecondShapeX, SecondShapeY, OrangeColour, SecondShapeRotation);

    }

    function NodePoints() { //Function to add all the vertices as a point. This helps to round off the harsh edges of the shape 

        stroke(lineColor);
        strokeWeight(NodeSize);

        point(LeftAxis, TopAxis);
        point(RightAxis - 50, TopMidAxis);
        point(RightAxis, TopAxis);
        point(RightMidAxisX, RightMidAxisY);
        point(RightAxis, BottomSideAxis);
        point(RightAxis - 50, BottomMidAxis);
        point(LeftAxis, BottomSideAxis);
        point(leftMidNodeX, leftMidNodeY);

    }

    function MainShape(StrokeColour, lineWeight, shapeSizeX, posX, posY, solidFill, OffsetRotation) {


        stroke(StrokeColour);
        strokeWeight(lineWeight);

        push();

        //Transformation variables that should not change with scaling
        translate(posX, posY);
        scale(shapeSizeX, shapeSizeX); //This scale is used for the secondary orange shape. Put outside the push-pop so that it retains the symmetry to the green
        rotate(ShapeRotation + OffsetRotation);
        strokeCap(ROUND);

        noFill();

        //CustomShape used for the typeface
        push();
        scale(1 + WidthScaleChange, 1.05); //This scale effects both shapes and is used to control propotions between axis of the shape

        beginShape();
        vertex(LeftAxis, TopAxis);
        vertex(RightAxis - 50, TopMidAxis);
        vertex(RightAxis, TopAxis);
        vertex(RightMidAxisX, RightMidAxisY);
        vertex(RightAxis, BottomSideAxis);
        vertex(RightAxis - 50, BottomMidAxis);
        vertex(LeftAxis, BottomSideAxis);
        vertex(leftMidNodeX, leftMidNodeY);
        endShape(CLOSE);

        NodePoints();
        pop();
        pop();
    }

}


function interpolate_letter(percent, oldObj, newObj) {



    let new_letter = {};

    let NodeSize = 10;
    let NodeTransitionSize = 2;
    let targetScale = oldObj["secondShapeScale"] + .1;
    let illuminationPulse = 5;
    let targetRotation = oldObj["Rotation"] - 1;
    let targetSquish = [-10, 10]; //see i know how arrays work :)

    if (percent < 50) {

        new_letter["offsetRightTop"] = oldObj["offsetRightTop"];
        new_letter["offsetMidRight"] = oldObj["offsetMidRight"];
        new_letter["offsetMidLeft"] = oldObj["offsetMidLeft"];
        new_letter["offsetBottom"] = oldObj["offsetBottom"];

        //Since i know these two can be manipulated to increase the size of the shape without adding another scale variable i can increase the size by manipulating these variables
        new_letter["offsetMidTop"] = map(percent, 0, 50, oldObj["offsetMidTop"], (oldObj["offsetMidTop"] + targetSquish[0]));
        new_letter["offsetBottomMid"] = map(percent, 0, 50, oldObj["offsetBottomMid"], (oldObj["offsetBottomMid"] + targetSquish[1]));
        new_letter["secondShapeScale"] = map(percent, 0, 50, oldObj["secondShapeScale"], targetScale);


    } else {
        new_letter["offsetRightTop"] = map(percent, 51, 100, oldObj["offsetRightTop"], newObj["offsetRightTop"]);
        new_letter["offsetMidRight"] = map(percent, 51, 100, oldObj["offsetMidRight"], newObj["offsetMidRight"]);
        new_letter["offsetMidLeft"] = map(percent, 51, 100, oldObj["offsetMidLeft"], newObj["offsetMidLeft"]);
        new_letter["offsetBottom"] = map(percent, 51, 100, oldObj["offsetBottom"], newObj["offsetBottom"]);

        // Used to scale the shapes
        new_letter["secondShapeScale"] = map(percent, 51, 100, targetScale, newObj["secondShapeScale"]);
        new_letter["offsetMidTop"] = map(percent, 51, 100, (oldObj["offsetMidTop"] + targetSquish[0]), newObj["offsetMidTop"]);
        new_letter["offsetBottomMid"] = map(percent, 51, 100, (oldObj["offsetBottomMid"] + targetSquish[1]), newObj["offsetBottomMid"]);

    }



    //These manipulate the rotation of the shapes. They were given a slight target rotation that moves slightly from it's original location. This helps to give a "breathing" effect
    if (percent < 20) {

        new_letter["Rotation"] = map(percent, 0, 20, oldObj["Rotation"], targetRotation);
        new_letter["SecondShapeRotation"] = oldObj["SecondShapeRotation"];


    } else {
        new_letter["Rotation"] = map(percent, 21, 100, targetRotation, newObj["Rotation"]);
        new_letter["SecondShapeRotation"] = map(percent, 21, 100, oldObj["SecondShapeRotation"], newObj["SecondShapeRotation"]);

    }


    //This gives the tranlating parameters
    if (percent < 10) {

        new_letter["offsetsecondShapeX"] = oldObj["offsetsecondShapeX"];
        new_letter["offsetsecondShapeY"] = oldObj["offsetsecondShapeY"];
        new_letter["TranslateX"] = oldObj["TranslateX"];
        new_letter["TranslateY"] = oldObj["TranslateY"];


    } else {

        new_letter["offsetsecondShapeX"] = map(percent, 11, 100, oldObj["offsetsecondShapeX"], newObj["offsetsecondShapeX"]);
        new_letter["offsetsecondShapeY"] = map(percent, 11, 100, oldObj["offsetsecondShapeY"], newObj["offsetsecondShapeY"]);
        new_letter["TranslateX"] = map(percent, 11, 100, oldObj["TranslateX"], newObj["TranslateX"]);
        new_letter["TranslateY"] = map(percent, 11, 100, oldObj["TranslateY"], newObj["TranslateY"]);

    }

    return new_letter;
}

var swapWords = [
    "NEONVOLT",
    "DAFTPUNK",
    "APEXTWIN",
    "ADAPTIVE",
    "?OUTRUN?",
    "?NUWAVE?",
    "GLITCHED",
    "ELECTRON",
    "COMPUTER",
    "ADDITION",
    "COMPLETE",
    "PROGRAMS",
    "STANDARD",
    "CONTINUE"
]