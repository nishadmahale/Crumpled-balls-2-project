
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dustbin1,Dustbin2,Dustbin3,ground,paper,paperImage,dustbinImage;

function preload(){

	paperImage=loadImage("paper.png");
	dustbinImage=loadImage("dustbingreen.png");
	
}



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Dustbin1=new Dustbin(532,660,280,25);
	Dustbin2=new Dustbin(400,510,30,300);
	Dustbin3=new Dustbin(670,510,30,300);
	paper=new Paper(40,600,70);
	ground = new Ground(400,680,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Dustbin1.shapecolor='white';
  Dustbin2.shapecolor='white';
  Dustbin3.shapecolor='white';
  














  
  image(dustbinImage,400,330);
 
  paper.display();
 
  
  ground.display();
  
  

	

  drawSprites();
 
}



function keyPressed(){

	if (keyCode===UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-90})
	}




}




