// constant variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// creating variables
var paper,ground, leftBox,middleBox,rightBox;

function setup() {
	createCanvas(800, 600);

// creating engine and world
	engine = Engine.create();
	world = engine.world;

// created the Bodies
	paper = new Paper(120,570,15);
	ground = new Ground(width/2, height-23, width, 10);
    middleBox = new Dustbin(630,570, 200,10);

	leftBox = new Box1(538, 471, 7,200);
	rightBox = new Box1(720,471, 7,200);
	Engine.run(engine);
  
}

function draw() {
  	background(255);
	Engine.update(engine);

// displaying the variables
	paper.display();
	ground.display();
	 middleBox.display();
 	
// calling the function Keypressed in Draw
 	KeyPressed();
  	drawSprites();
}

// creating the function Keypressed
function KeyPressed(){
	if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-3});
    }

}
