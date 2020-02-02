/*

Officer: 3721950
CaseNum: 202-3-55899667-3721950

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Light Sea Green filled text with a Dark Turquoise outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(638,561);
	textSize(34);
}

function draw()
{
	background(255);

	push();
	fill(238,130,238);
	stroke(32,178,170);
	textFont(Melissa);
	//text("Perhaps", 10,173);
	pop();
	fill(138,43,226);
	stroke(255,255,0);
	textFont(RonsFont);
	//text("yours,", 92,401);
	fill(233,150,122);
	stroke(107,142,35);
	textFont(Melissa);
	//text("can", 67,253);
	push();
	fill(0,0,205);
	stroke(255,140,0);
	textFont(RonsFont);
	//text("The", 135,333);
	pop();
	fill(255,0,255);
	//text("?", 560,138);
	fill(127,255,0);
	stroke(255,165,0);
	textFont(RonsFont);
	//text("all", 139,211);
	push();
	fill(30,144,255);
	stroke(139,69,19);
	textFont(Diggity);
	//text("If", 581,211);
	pop();
	stroke(160,82,45);
	textFont(Diggity);
	//text("how", 335,294);
	fill(220,20,60);
	stroke(0,139,139);
	textFont(Ballpointprint);
	//text("Are", 234,211);
	fill(210,105,30);
	stroke(0,255,127);
	textFont(RonsFont);
	//text("we", 96,173);
	stroke(255,215,0);
	//text("break", 422,173);
	push();
	fill(240,230,140);
	textFont(Melissa);
	//text("I", 49,253);
	pop();
	fill(34,139,34);
	//text("Are", 274,138);
	push();
	fill(199,21,133);
	stroke(0,128,128);
	textFont(Ballpointprint);
	//text("money", 453,211);
	pop();
	stroke(0,250,154);
	textFont(Melissa);
	//text("send", 107,253);
	fill(222,184,135);
	stroke(255,0,0);
	textFont(RonsFont);
	//text("can", 531,294);
	push();
	fill(123,104,238);
	stroke(0,0,255);
	//text("secrets,", 186,333);
	pop();
	fill(0,250,154);
	stroke(124,252,0);
	textFont(Melissa);
	//text("delays.", 484,102);
	fill(106,90,205);
	stroke(127,255,0);
	//text("much", 392,294);
	fill(244,164,96);
	stroke(199,21,133);
	textFont(Ballpointprint);
	//text("avoiding", 396,138);
	fill(240,230,140);
	stroke(160,82,45);
	textFont(RonsFont);
	//text("are", 267,253);
	fill(255,105,180);
	stroke(220,20,60);
	textFont(Melissa);
	//text("can", 31,102);
	fill(64,224,208);
	stroke(0,0,139);
	textFont(Ballpointprint);
	//text("?", 97,333);
	fill(100,149,237);
	stroke(0,191,255);
	//text("should", 147,173);
	push();
	fill(139,69,19);
	stroke(255,0,255);
	textFont(Diggity);
	//text("away", 272,173);
	pop();
	stroke(32,178,170);
	textFont(RonsFont);
	//text("darling", 73,34);
	fill(218,165,32);
	stroke(218,165,32);
	//text("relationship", 17,138);
	fill(218,112,214);
	stroke(255,140,0);
	textFont(Ballpointprint);
	//text("My", 19,34);
	fill(255,0,255);
	stroke(255,215,0);
	textFont(RonsFont);
	//text("no", 71,102);
	fill(220,20,60);
	stroke(160,82,45);
	textFont(Ballpointprint);
	//text("sort", 22,211);
	fill(138,43,226);
	stroke(0,0,128);
	textFont(RonsFont);
	//text("continual", 349,102);
	fill(255,105,180);
	stroke(34,139,34);
	textFont(Diggity);
	//text("silence.", 372,333);
	push();
	fill(154,205,50);
	stroke(255,165,0);
	textFont(Melissa);
	//text("a", 403,173);
	pop();
	fill(0,139,139);
	stroke(0,100,0);
	textFont(RonsFont);
	//text("me", 509,138);
	fill(64,224,208);
	stroke(0,250,154);
	textFont(Melissa);
	//text("You", 226,253);
	fill(0,250,154);
	stroke(0,0,139);
	//text("x", 90,469);
	push();
	fill(139,0,139);
	stroke(0,0,128);
	textFont(Ballpointprint);
	//text("?", 543,211);
	pop();
	fill(0,255,255);
	stroke(0,100,0);
	textFont(RonsFont);
	//text("this", 79,211);
	push();
	fill(255,0,255);
	stroke(0,139,139);
	textFont(Melissa);
	//text("I", 513,294);
	pop();
	fill(255,0,255);
	stroke(32,178,170);
	textFont(Ballpointprint);
	//text("so", 328,253);
	fill(238,130,238);
	stroke(0,128,128);
	textFont(RonsFont);
	//text("of", 413,211);
	fill(0,0,255);
	stroke(128,128,0);
	textFont(Ballpointprint);
	//text("sometimes.", 19,294);
	push();
	fill(218,112,214);
	stroke(0,0,255);
	textFont(Melissa);
	//text("so,", 12,253);
	pop();
	fill(139,0,139);
	stroke(128,0,128);
	textFont(Melissa);
	//text("ver", 54,401);
	fill(178,34,34);
	stroke(199,21,133);
	textFont(Diggity);
	//text("Bob,", 179,34);
	push();
	fill(173,255,47);
	stroke(0,255,127);
	textFont(RonsFont);
	//text("these", 271,102);
	pop();
	fill(218,165,32);
	textFont(Melissa);
	//text("our", 585,102);
	fill(65,105,225);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("you", 299,211);
	fill(255,0,0);
	stroke(154,205,50);
	textFont(Diggity);
	//text("out.", 181,211);
	fill(255,99,71);
	stroke(46,139,87);
	textFont(RonsFont);
	//text("and", 511,173);
	push();
	fill(128,128,0);
	stroke(0,128,128);
	textFont(Melissa);
	//text("short", 352,211);
	pop();
	fill(238,232,170);
	stroke(25,25,112);
	textFont(Ballpointprint);
	//text("take", 25,333);
	push();
	fill(135,206,235);
	stroke(148,0,211);
	//text("I'm", 160,294);
	pop();
	fill(123,104,238);
	stroke(32,178,170);
	textFont(Melissa);
	//text("longer", 113,102);
	fill(255,127,80);
	stroke(0,206,209);
	textFont(Diggity);
	//text("I", 14,102);
	push();
	fill(138,43,226);
	stroke(153,50,204);
	textFont(Melissa);
	//text("sure", 288,294);
	pop();
	fill(32,178,170);
	textFont(RonsFont);
	text("for", 343,173);
	text("ignore", 176,102);
	fill(219,112,147);
	stroke(165,42,42);
	textFont(Melissa);
	//text("Fore", 14,401);
	fill(0,206,209);
	stroke(0,191,255);
	textFont(Ballpointprint);
	//text("guarded", 367,253);
	fill(173,255,47);
	stroke(220,20,60);
	textFont(RonsFont);
	//text("you", 337,138);
	fill(154,205,50);
	stroke(154,205,50);
	textFont(Ballpointprint);
	//text("not", 238,294);
	fill(32,178,170);
	stroke(0,206,209);
	textFont(RonsFont);
	text("safe", 187,138);
	text("go", 233,173);
	fill(147,112,219);
	stroke(139,0,0);
	//text("Daisy", 12,469);
	push();
	fill(32,178,170);
	stroke(0,206,209);
	text("cash", 158,253);
	pop();
	fill(50,205,50);
	stroke(255,0,255);
	textFont(Diggity);
	//text("more", 446,294);
	push();
	fill(127,255,212);
	stroke(0,206,209);
	textFont(Melissa);
	//text("Is", 555,102);
	pop();
	fill(250,128,114);
	stroke(0,128,128);
	textFont(Ballpointprint);
	//text("the", 311,333);
	stroke(124,252,0);
	textFont(Melissa);
	//text("?", 255,138);



}
