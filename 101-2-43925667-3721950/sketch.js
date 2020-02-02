/*

Officer: 3721950
CaseNum: 101-2-43925667-3721950

Case 101 - The Case of Lina Lovelace
Stage 3 - The Docks

You’ve followed Lina down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Lina by drawing a Dark Turquoise filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Midnight Blue filled
rectangle around him.

Identify the man in the striped top by drawing a Lime filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    //linda turquoise
    fill(0, 206, 209,100);
    rect(1197,52, 163,337);
    
    //stripped hat man lime colour
    fill(0, 255, 0, 100); 
    rect(1006,280,165,450);
    
    //hevy set man, Midnight blue
    fill(25, 25, 112,100);
    rect(217,158, 351,375);


}
