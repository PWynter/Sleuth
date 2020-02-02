/*

Officer: 3721950
CaseNum: 202-1-11290743-3721950

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Lime filled text with a Sienna outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(566,491);
	textFont(letterFont);
	textSize(31);
}

function draw()
{
	background(255);

	fill(240,230,140);
	stroke(139,0,0);
	////text("of", 365,165);
	fill(255,105,180);
	stroke(75,0,130);
	////text("Forever", 7,330);
	fill(0,128,0);
	stroke(153,50,204);
	////text("have", 467,237);
	fill(135,206,250);
	////text("I", 451,237);
	fill(64,224,208);
	stroke(255,215,0);
	//text("again", 87,200);
	fill(218,112,214);
	stroke(255,165,0);
	//text("kissed", 131,131);
	fill(144,238,144);
	stroke(255,255,0);
	//text("urs,", 97,330);
	fill(135,206,250);
	stroke(255,140,0);
	//text("u", 32,200);
	fill(144,238,144);
	stroke(0,139,139);
	//text("my", 449,200);
	fill(233,150,122);
	stroke(255,0,255);
	//text("can", 241,165);
	fill(0,0,128);
	stroke(0,100,0);
	//text("be", 7,200);
	fill(128,0,0);
	stroke(218,165,32);
	//text("miss", 65,93);
	fill(255,0,0);
	//text("it", 539,93);
	fill(128,0,128);
	stroke(0,0,128);
	//text("?", 193,131);
	fill(205,133,63);
	stroke(34,139,34);
	//text("last", 91,131);
	fill(244,164,96);
	stroke(0,0,255);
	//text("in", 365,131);
	fill(218,165,32);
	stroke(128,0,128);
	//text("your", 312,268);
	fill(165,42,42);
	//text("long", 226,131);
	fill(255,0,255);
	stroke(0,128,128);
	//text("stare", 487,131);
	fill(178,34,34);
	stroke(0,206,209);
	//text("the", 221,200);
	fill(135,206,250);
	stroke(0,0,128);
	//text("you", 389,200);
	fill(255,69,0);
	stroke(128,128,0);
	//text("longing", 104,268);
	fill(205,133,63);
	stroke(0,255,255);
	//text("?", 137,200);
	fill(255,0,255);
	stroke(46,139,87);
	//text("feels", 148,237);
	fill(100,149,237);
	stroke(0,255,255);
	//text("I", 49,93);
	fill(176,224,230);
	stroke(255,69,0);
	//text("desolate.", 196,237);
	fill(72,209,204);
	stroke(0,255,255);
	//text("you", 331,131);
	fill(0,0,255);
	stroke(25,25,112);
	//text("in", 201,200);
	fill(255,140,0);
	stroke(107,142,35);
	//text("town", 99,237);
	fill(0,255,0);
	stroke(255,165,0);
	//text("night", 96,165);
	fill(153,50,204);
	stroke(0,250,154);
	//text("How", 353,93);
	fill(123,104,238);
	stroke(0,255,0);
	//text("will", 482,165);
	fill(139,69,19);
	stroke(50,205,50);
	//text("x", 61,392);
	fill(154,205,50);
	stroke(32,178,170);
	//text("?", 166,268);
	fill(199,21,133);
	stroke(0,0,128);
	//text("only", 326,165);
	fill(250,128,114);
	stroke(199,21,133);
	//text("think", 277,165);
	fill(184,134,11);
	stroke(0,255,255);
	//text("How", 7,93);
	fill(124,252,0);
	stroke(0,128,128);
	//text("this", 9,237);
	fill(244,164,96);
	stroke(178,34,34);
	//text("to", 513,237);
	fill(210,105,30);
	stroke(127,255,0);
	//text("Daisy", 7,392);
	fill(139,0,139);
	stroke(34,139,34);
	//text("we", 58,131);
	fill(144,238,144);
	stroke(178,34,34);
	//text("you", 173,93);
	fill(107,142,35);
	stroke(0,255,0);
	//text("to", 265,131);
	fill(0,255,0);
	stroke(199,21,133);
	//text("return.", 411,268);
	fill(148,0,211);
	stroke(0,0,128);
	//text("up", 10,165);
	fill(255,215,0);
	stroke(0,255,255);
	//text("much", 319,237);
	fill(160,82,45);
	stroke(255,140,0);
	//text("do", 424,237);
	fill(154,205,50);
	stroke(0,0,255);
	//text("many", 395,93);
	fill(144,238,144);
	stroke(210,105,30);
	//text("My", 7,31);
	fill(173,216,230);
	stroke(0,191,255);
	//text("longer", 368,237);
	fill(100,149,237);
	stroke(127,255,0);
	//text("Even", 154,200);
	fill(32,178,170);
	stroke(0,255,255);
	//text("having", 113,93);
	fill(220,20,60);
	stroke(32,178,170);
	//text("I", 210,131);
	fill(176,224,230);
	stroke(0,0,128);
	//text("banking", 218,268);
	fill(238,232,170);
	stroke(0,0,139);
	//text("at", 423,200);
	fill(205,133,63);
	stroke(0,100,0);
	//text("I'm", 183,268);
	fill(0,255,0);
	stroke(218,165,32);
	//text("you.", 391,165);
	fill(250,128,114);
	stroke(32,178,170);
	//text("arms.", 417,131);
	fill(148,0,211);
	stroke(148,0,211);
	//text("swift", 354,268);
	fill(233,150,122);
	stroke(0,139,139);
	//text("I", 225,165);
	fill(0,128,0);
	stroke(139,0,139);
	//text("nited", 39,200);
	fill(238,232,170);
	stroke(255,69,0);
	//text("yo", 77,330);
	fill(244,164,96);
	//text("small", 50,237);
	fill(0,100,0);
	stroke(255,165,0);
	//text("Bob,", 102,31);
	fill(34,139,34);
	stroke(218,165,32);
	//text("I", 471,131);
	fill(0,0,128);
	stroke(199,21,133);
	//text("How", 277,237);
	fill(0,128,0);
	stroke(46,139,87);
	//text("and", 189,165);
	fill(255,0,255);
	stroke(0,100,0);
	//text("the", 61,165);
	fill(100,149,237);
	stroke(0,255,0);
	//text("sky,", 145,165);
	fill(173,216,230);
	stroke(128,0,128);
	//text("on", 286,268);
	stroke(210,105,30);
	//text("we", 516,165);
	fill(0,255,0);
	stroke(160,82,45);
	text("at", 35,165);
	fill(152,251,152);
	stroke(0,191,255);
	//text("months", 446,93);
	fill(0,0,139);
	stroke(124,252,0);
	//text("darling", 41,31);
	fill(0,255,0);
	stroke(160,82,45);
	text("store", 9,268);
	text("side", 481,200);
	fill(50,205,50);
	stroke(184,134,11);
	//text("hold", 291,131);
	fill(0,255,0);
	stroke(160,82,45);
	text("spring", 256,200);
	fill(152,251,152);
	stroke(255,255,0);
	//text("this", 63,268);
	fill(218,112,214);
	stroke(255,0,0);
	//text("When", 428,165);
	fill(255,99,71);
	stroke(0,128,0);
	//text("around", 207,93);
	fill(0,255,0);
	stroke(160,82,45);
	text("place", 303,93);
	text("is", 517,93);
	text("the", 268,93);
	fill(135,206,250);
	stroke(0,128,128);
	//text("since", 8,131);
	fill(165,42,42);
	stroke(25,25,112);
	//text("my", 385,131);
	fill(64,224,208);
	stroke(153,50,204);
	//text("without", 316,200);



}
