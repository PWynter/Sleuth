/*

Officer: 3721950
CaseNum: 202-2-23180939-3721950

Case 202 - The case of Bob and Daisy - stage 3

Wow these two like to ham it up. Here’s the next letter. This time it’s from Bob (aka. Jobs).
I need you to decode it to uncover more details about their plan.

Discover the hidden code by commenting out all text commands except
those which produce Medium Turquoise filled text in Melissa font.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var Ballpointprint;
var Melissa;
var Diggity;
var RonsFont;


function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(676,682);
	textSize(35);
}

function draw()
{
	background(255);

	fill(219,112,147);
	textFont(Ballpointprint);
	//text("back", 226,434);
	fill(199,21,133);
	textFont(Diggity);
	//text("we", 511,147);
	fill(72,209,204);
	//text("so", 151,396);
	fill(255,140,0);
	textFont(Melissa);
	//text("raising", 415,314);
	fill(50,205,50);
	//text("shall", 560,147);
	fill(255,140,0);
	textFont(Ballpointprint);
	//text("despair", 68,314);
	textFont(Diggity);
	//text("our", 523,191);
	fill(0,128,128);
	textFont(Melissa);
	//text("every", 242,229);
	fill(124,252,0);
	//text("counting", 185,105);
	fill(65,105,225);
	textFont(Diggity);
	//text("harbou", 494,270);
	textFont(Ballpointprint);
	//text("my", 372,147);
	fill(139,0,0);
	//text("I", 445,229);
	fill(0,0,128);
	textFont(RonsFont);
	//text("my", 448,396);
	fill(219,112,147);
	textFont(Diggity);
	//text("not", 17,314);
	fill(153,50,204);
	textFont(Melissa);
	//text("keep", 72,191);
	fill(72,209,204);
	text("down", 317,270);
	text("at", 573,314);
	text("the", 611,353);
	fill(147,112,219);
	textFont(Ballpointprint);
	//text("from", 151,147);
	fill(65,105,225);
	//text("car", 498,396);
	fill(255,0,0);
	//text("Bob", 8,574);
	fill(0,191,255);
	textFont(Melissa);
	//text("kisses,", 116,504);
	fill(218,165,32);
	//text("our", 599,229);
	fill(165,42,42);
	textFont(Ballpointprint);
	//text("rn", 471,147);
	textFont(Melissa);
	//text("too", 37,105);
	fill(135,206,235);
	//text("love", 159,191);
	fill(220,20,60);
	//text("we", 272,314);
	fill(72,209,204);
	text("arcade", 12,396);
	text("hidden", 203,191);
	text("gun", 148,105);
	fill(144,238,144);
	textFont(Diggity);
	//text("hall", 324,191);
	//text("woods", 170,270);
	fill(178,34,34);
	textFont(Melissa);
	//text("playing", 307,353);
	fill(138,43,226);
	//text("right", 550,396);
	fill(218,165,32);
	textFont(Diggity);
	//text("you.", 347,434);
	textFont(RonsFont);
	//text("and", 86,434);
	fill(0,0,139);
	textFont(Melissa);
	//text("the", 412,270);
	//text("and", 76,504);
	fill(124,252,0);
	textFont(RonsFont);
	//text("run", 155,434);
	fill(25,25,112);
	//text("We", 268,191);
	textFont(Ballpointprint);
	//text("sy,", 192,35);
	//text("Dai", 145,35);
	fill(154,205,50);
	//text("tempted", 189,396);
	fill(0,128,128);
	//text("Soon", 198,314);
	textFont(Diggity);
	//text("devotion", 23,229);
	fill(184,134,11);
	//text("old", 451,270);
	fill(0,0,139);
	textFont(Ballpointprint);
	//text("retu", 424,147);
	fill(127,255,212);
	//text("jump", 349,396);
	fill(173,255,47);
	textFont(Diggity);
	//text("to", 309,396);
	fill(0,255,0);
	textFont(Melissa);
	//text("in", 426,396);
	fill(135,206,235);
	textFont(Ballpointprint);
	//text("of", 552,229);
	//text("be", 361,314);
	fill(173,216,230);
	textFont(Diggity);
	//text("days", 398,105);
	fill(184,134,11);
	textFont(Ballpointprint);
	//text("and", 245,353);
	fill(255,99,71);
	textFont(Melissa);
	//text("Love", 15,504);
	fill(148,0,211);
	textFont(Diggity);
	//text("opportunity.", 301,229);
	fill(233,150,122);
	//text("at", 200,229);
	fill(0,255,127);
	textFont(RonsFont);
	//text("lovely", 63,35);
	fill(34,139,34);
	textFont(Melissa);
	//text("be", 128,105);
	fill(255,0,255);
	textFont(RonsFont);
	//text("to", 300,434);
	fill(135,206,250);
	textFont(Diggity);
	//text("t", 484,314);
	fill(147,112,219);
	textFont(RonsFont);
	//text("get", 17,147);
	fill(0,0,128);
	textFont(Melissa);
	//text("Upon", 316,147);
	fill(176,224,230);
	//text("have", 77,105);
	//text("at", 582,353);
	fill(100,149,237);
	textFont(Diggity);
	//text("by", 372,270);
	fill(138,43,226);
	textFont(Ballpointprint);
	//text("now", 29,434);
	fill(250,128,114);
	textFont(Melissa);
	//text("I", 19,105);
	fill(128,0,128);
	textFont(Ballpointprint);
	//text("I", 528,105);
	fill(222,184,135);
	//text("il", 496,105);
	fill(124,252,0);
	textFont(RonsFont);
	//text("the", 343,105);
	fill(0,250,154);
	//text("shooters", 378,353);
	fill(255,105,180);
	textFont(Ballpointprint);
	//text("down", 268,105);
	fill(30,144,255);
	textFont(Melissa);
	//text("no", 610,147);
	fill(128,128,0);
	textFont(Ballpointprint);
	//text("Jerrys", 26,353);
	fill(139,0,139);
	textFont(Diggity);
	//text("all", 167,229);
	fill(0,100,0);
	textFont(Melissa);
	//text("in", 93,270);
	fill(127,255,212);
	textFont(Diggity);
	//text("down", 509,353);
	fill(255,69,0);
	//text("all", 225,147);
	fill(220,20,60);
	//text("oasts", 497,314);
	fill(219,112,147);
	textFont(RonsFont);
	//text("x", 76,574);
	//text("the", 115,270);
	fill(32,178,170);
	//text("bar", 183,353);
	fill(233,150,122);
	textFont(Diggity);
	//text("r.", 570,270);
	fill(34,139,34);
	textFont(RonsFont);
	//text("broadcast", 369,191);
	fill(244,164,96);
	textFont(Ballpointprint);
	//text("can", 570,105);
	fill(0,255,255);
	//text("am", 101,396);
	fill(100,149,237);
	textFont(Melissa);
	//text("wine", 132,353);
	fill(30,144,255);
	textFont(Ballpointprint);
	//text("Do", 601,270);
	fill(128,0,0);
	textFont(Diggity);
	//text("this.", 258,147);
	fill(0,255,255);
	//text("walks", 17,270);
	fill(255,0,255);
	textFont(Ballpointprint);
	//text("unt", 464,105);
	fill(127,255,0);
	textFont(Diggity);
	//text("away", 75,147);
	fill(30,144,255);
	textFont(Ballpointprint);
	//text("to", 129,229);
	fill(127,255,0);
	textFont(Melissa);
	//text("I", 83,396);
	fill(219,112,147);
	//text("dream", 487,229);
	fill(127,255,0);
	textFont(Ballpointprint);
	//text("and", 255,270);
	textFont(RonsFont);
	//text("!", 175,314);
	fill(210,105,30);
	textFont(Diggity);
	//text("s", 313,191);
	fill(0,255,255);
	textFont(Melissa);
	//text("our", 123,191);
	textFont(RonsFont);
	//text("Oh", 19,35);
	fill(139,0,0);
	textFont(Ballpointprint);
	//text("will", 308,314);
	fill(255,0,255);
	textFont(Melissa);
	//text("longer", 9,191);



}
