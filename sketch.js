
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var Roof,chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof=new roof(400,200,300,20);
	bobDiameter=40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	//chain1=new Chain(bobObject1.body,Roof.body);
	//chain2=new Chain(bobObject2.body,Roof.body);
	//chain3=new Chain(bobObject3.body,Roof.body);
	//chain4=new Chain(bobObject4.body,Roof.body);
	//chain5=new Chain(bobObject5.body,Roof.body);
	chain1=new Chain(bobObject1.body,Roof.body,-bobDiameter*2, 0)
	chain2=new Chain(bobObject2.body,Roof.body,-bobDiameter*1, 0)
	chain3=new Chain(bobObject3.body,Roof.body,0, 0)
	chain4=new Chain(bobObject4.body,Roof.body,bobDiameter*1, 0)
	chain5=new Chain(bobObject5.body,Roof.body,bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	}
}
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
