/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 3721950
CaseNum: 201-3-87253486-3721950

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    
    beginShape(LINES);
    vertex(470, 534);
    vertex(430, 425);
    vertex(430,425);
    vertex(475,408);
    vertex(475,408);
    vertex(270,200);
    vertex(270,200);
    vertex(408,110);
    vertex(408,110);
    vertex(600,320);
    vertex(600,320);
    vertex(700,230);
    vertex(700,230);
    vertex(750,280);
    vertex(750,280);
    vertex(624,456);
    vertex(624,456);
    vertex(470,534);
    
    endShape();

}
