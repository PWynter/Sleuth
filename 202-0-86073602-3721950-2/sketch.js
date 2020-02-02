/*

Officer: 3721950
CaseNum: 202-0-86073602-3721950

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Yellow text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(663,595);
	textFont(letterFont);
	textSize(31);
}

function draw()
{
	background(255);

	fill(65,105,225);
	//text("I", 77,93);
	//text("oment", 382,201);
	//text("that", 459,201);
	fill(250,128,114);
	//text("in", 81,201);
	//text("hear", 344,125);
	fill(64,224,208);
	//text("lovely", 78,240);
	fill(128,0,128);
	//text("unny", 567,162);
	fill(0,0,139);
	//text("mus", 178,162);
	fill(30,144,255);
	//text("luckiest", 296,347);
	fill(186,85,211);
	//text("your", 21,240);
	fill(173,216,230);
	//text("kisses,", 139,441);
	fill(0,128,0);
	//text("Daisy,", 140,31);
	//text("green", 552,312);
	fill(255,69,0);
	//text("From", 180,201);
	fill(165,42,42);
	//text("your", 401,312);
	fill(255,255,0);
	text("It", 356,93);
	text("April", 116,201);
	text("make", 115,93);
	fill(0,100,0);
	//text("my", 512,162);
	fill(128,128,0);
	//text("that", 537,347);
	fill(135,206,235);
	//text("I", 229,240);
	fill(176,224,230);
	//text("lovely", 64,31);
	//text("eyes.", 20,347);
	fill(210,105,30);
	//text("knew", 267,240);
	//text("blessed", 75,162);
	fill(240,128,128);
	//text("x", 77,503);
	//text("day", 24,201);
	fill(0,128,128);
	//text("Love", 17,441);
	fill(144,238,144);
	//text("and", 84,441);
	fill(107,142,35);
	//text("alone", 17,125);
	//text("the", 242,347);
	fill(233,150,122);
	//text("only", 236,312);
	fill(152,251,152);
	//text("I", 516,201);
	//text("must", 134,347);
	fill(75,0,130);
	//text("m", 366,201);
	//text("you", 82,277);
	fill(233,150,122);
	//text("the", 21,162);
	fill(107,142,35);
	//text("that", 25,277);
	fill(255,0,255);
	//text("like", 536,125);
	//text("chosen.", 120,379);
	fill(32,178,170);
	//text("May", 17,93);
	fill(0,0,205);
	//text("love.", 360,277);
	fill(34,139,34);
	//text("the", 289,162);
	fill(219,112,147);
	//text("darling,", 458,312);
	//text("are", 460,162);
	fill(255,99,71);
	//text("ce", 493,125);
	fill(218,165,32);
	//text("a", 170,93);
	fill(255,255,0);
	text("second", 538,240);
	fill(139,0,139);
	//text("from", 337,240);
	fill(238,232,170);
	//text("few", 475,240);
	fill(218,165,32);
	//text("saw", 554,201);
	//text("harp.", 343,162);
	fill(255,127,80);
	//text("of", 247,162);
	fill(240,230,140);
	//text("when", 435,93);
	fill(220,20,60);
	//text("You", 407,162);
	//text("hink", 299,312);
	fill(34,139,34);
	//text("is", 402,93);
	fill(127,255,0);
	//text("Oh", 17,31);
	fill(255,140,0);
	//text("voi", 466,125);
	fill(205,133,63);
	//text("alive", 470,347);
	fill(148,0,211);
	//text("true", 301,277);
	fill(123,104,238);
	//text("the", 121,125);
	fill(135,206,250);
	//text("your", 409,125);
	fill(139,0,139);
	//text("am", 19,379);
	fill(0,191,255);
	//text("that", 249,125);
	fill(139,69,19);
	//text("I", 506,93);
	//text("since", 493,277);
	//text("were", 131,277);
	fill(0,255,0);
	//text("t", 291,312);
	fill(152,251,152);
	//text("our", 563,277);
	fill(0,255,255);
	//text("my", 202,277);
	fill(184,134,11);
	//text("your", 63,379);
	//text("ic", 213,162);
	fill(173,255,47);
	//text("first", 301,201);
	//text("I", 306,125);
	fill(184,134,11);
	//text("the", 247,201);
	//text("confession", 198,93);
	//text("face,", 154,240);
	fill(178,34,34);
	//text("?", 322,93);
	//text("one", 248,277);
	fill(72,209,204);
	//text("those", 403,240);
	fill(244,164,96);
	//text("s", 558,162);
	fill(0,206,209);
	//text("date,", 76,312);
	//text("I", 149,312);
	//text("last", 26,312);
	fill(160,82,45);
	//text("in", 86,125);
	//text("Ever", 423,277);
	fill(138,43,226);
	//text("I", 594,347);
	fill(222,184,135);
	//text("can", 187,312);
	fill(173,216,230);
	//text("person", 390,347);
	fill(127,255,0);
	//text("quiet", 175,125);
	fill(173,216,230);
	//text("be", 194,347);
	//text("I", 96,347);
	fill(106,90,205);
	//text("of", 359,312);
	fill(127,255,0);
	//text("am", 544,93);
	fill(173,255,47);
	//text("s", 609,240);
	//text("Bob", 17,503);



}
