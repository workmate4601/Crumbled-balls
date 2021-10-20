
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1350,600,20,120);

	var ball_options={

		
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,20,ball_options);
	
World.add(world,ball);
	
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  leftSide.display();  
  rightSide.display();

  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	 Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	 
	 
	 

	}
}

