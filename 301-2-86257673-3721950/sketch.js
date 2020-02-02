/*
The case of the Python Syndicate
Stage 3


Officer: 3721950
CaseNum: 301-2-86257673-3721950

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Countess hamilton has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Countess hamilton object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var anna_karpinski_img;
var pawel_karpinski_img;
var lina_lovelace_img;
var countess_hamilton_img;
var robbie_kray_img;
var rocky_kray_img;

var countess_hamilton_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	lina_lovelace_img = loadImage("lina.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	rocky_kray_img = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countess_hamilton_obj = {
		x: 115,
		y: 309,
		image: countess_hamilton_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countess_hamilton_obj.image, countess_hamilton_obj.x, countess_hamilton_obj.y);

	image(anna_karpinski_img, countess_hamilton_obj.x, countess_hamilton_obj.y - 269);
	image(pawel_karpinski_img,countess_hamilton_obj.x + 293,countess_hamilton_obj.y - 269);
	image(lina_lovelace_img, countess_hamilton_obj.x + 586,countess_hamilton_obj.y - 269);
	image(robbie_kray_img, countess_hamilton_obj.x + 293, countess_hamilton_obj.y);
	image(rocky_kray_img, countess_hamilton_obj.x + 586, countess_hamilton_obj.y);

}