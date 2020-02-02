/*

Officer: 3721950
CaseNum: 101-3-13278563-3721950

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a Lime Green filled rectangle with a Forest Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Lime filled
rectangle with a Olive Drab outline around him.

Identify the man reading the newspaper by drawing a Purple filled rectangle
with a Tomato outline around him.

Identify the woman with the dog by drawing a Cornflower Blue filled rectangle with a
Medium Spring Green outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    //Lina red dress
    fill(50, 205, 50, 100); 
	stroke(34, 139, 34);
    rect(1155,105,219,445);

    //Monocle man
    fill(0, 255, 0,100);
    stroke(107, 142, 35);
    rect(683,194, 111, 145);
    
    //Newspaper man
    stroke(255, 99, 71);
    fill(128, 0, 128,100);
    rect(39,135, 225, 453);
    
    //woman with dog
     stroke(0, 250, 154);
    fill(100, 149, 237,100);
    rect(1438,90,210,460);
    

}
