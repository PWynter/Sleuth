/*
The case of the Python Syndicate
Stage 4

Officer: 3721950
CaseNum: 301-3-71179042-3721950

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
//var robbieKrayImg;
//var pawelKarpinskiImg;
//var linaLovelaceImg;
//var countessHamiltonImg;
//var rockyKrayImg;
//var annaKarpinskiImg;



//declare your new objects below

//var robbieKrayLocationX = 115;
//var robbieKrayLocationY = 40;
//var pawelKarpinskiLocationX = 408;
//var pawelKarpinskiLocationY = 40;
//var linaLovelaceLocationX = 701;
//var linaLovelaceLocationY = 40;
//var rockyKrayLocationX = 408;
//var rockyKrayLocationY = 309;
//var annaKarpinskiLocationX = 701;
//var annaKarpinskiLocationY = 309;

var countessHamiltonObj;
var robbieKrayObj;
var pawelKarpinskiObj;
var linaLovelaceObj;
var rockyKrayObj;
var annaKarpinski;



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImg = loadImage("krayBrothers2.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	linaLovelaceImg = loadImage("lina.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countessHamiltonObj = {
		x: 115,
		y: 309,
		image: countessHamiltonImg
	};


	//define your new objects below
	robbieKrayObj = {
		x: 115,
		y: 40,
		image: robbieKrayImg
	};
	
	pawelKarpinskiObj = {
		x: 408,
		y: 40,
		image: pawelKarpinskiImg
	};
	
	linaLovelaceObj = {
		x: 701,
		y: 40,
		image: linaLovelaceImg
	};
	
	rockyKrayObj ={
		x: 408,
		y: 309,
		image: rockyKrayImg
	};
	
	annaKarpinskiObj ={
		x: 701,
		y: 309,
		image: annaKarpinskiImg
	};
	
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbieKrayObj.image, robbieKrayObj.x, robbieKrayObj.y) 
	
	image(pawelKarpinskiObj.image,
		  pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	
	image(linaLovelaceObj.image,
		  linaLovelaceObj.x, 
		  linaLovelaceObj.y);
	
	image(countessHamiltonObj.image, 
		  countessHamiltonObj.x, countessHamiltonObj.y);
	
	image(rockyKrayObj.image,
		  rockyKrayObj.x, 
		  rockyKrayObj.y);
	
	image(annaKarpinskiObj.image,
		  annaKarpinskiObj.x, 
		  annaKarpinskiObj.y);


}