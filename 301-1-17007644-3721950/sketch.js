/*
The case of the Python Syndicate
Stage 2


Officer: 3721950
CaseNum: 301-1-17007644-3721950

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Robbie kray

- The variables for Robbie kray have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Robbie kray for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var countessHamiltonImage;
var annaKarpinskiImage;
var robbieKrayImage;
var cecilKarpinskiImage;
var linaLovelaceImage;
var rockyKrayImage;


var robbieKrayXLoc = 701;
var robbieKrayYLoc = 40;

var countessHamiltonXloc = robbieKrayXLoc - 586;
var countessHamiltonYloc = robbieKrayYLoc;

var annaKarpinskiXloc = robbieKrayXLoc - 293;
var annaKarpinskiYloc = robbieKrayYLoc;

var cecilKarpinskiXloc = robbieKrayXLoc - 586;
var cecilKarpinskiYloc = robbieKrayYLoc + 269;

var linaLovelaceXloc = robbieKrayXLoc - 293;
var linaLovelaceYloc = robbieKrayYLoc+ 269;

var rockyKrayXloc = robbieKrayXLoc;
var rockyKrayYloc = robbieKrayYLoc+ 269;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImage = loadImage("countessHamilton.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	linaLovelaceImage = loadImage("lina.png");
	rockyKrayImage = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbieKrayImage, robbieKrayXLoc, robbieKrayYLoc);

	image(countessHamiltonImage, robbieKrayXLoc - 586, robbieKrayYLoc);
    
	image(annaKarpinskiImage,robbieKrayXLoc - 293, robbieKrayYLoc);
    
	image(cecilKarpinskiImage, robbieKrayXLoc - 586, robbieKrayYLoc + 269);
    
	image(linaLovelaceImage, robbieKrayXLoc - 293, robbieKrayYLoc+ 269);
    
	image(rockyKrayImage, robbieKrayXLoc, robbieKrayYLoc+ 269);

}