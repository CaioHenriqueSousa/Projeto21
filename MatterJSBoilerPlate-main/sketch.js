var ball
var ground
var rightTrash
var leftTrash
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic: false,
		restituition:0.3,
		friction: 0,
		density:1.2
	}

	var ground_options={
		isStatic: true
	}
    
	var right ={
		isStatic: true
	}
	var left={
		isStatic: true
	}
	ball.circle(100,500,30,ball_options)
	World.add(world,ball)
	
	ground.rectangle(400,650,200,20,ground_options)
	World.add(world,ground)
    
	rightTrash.rectangle(700,650,10,50,right)
	World.add(world,rightTrash)

	leftTrash.rectangle(750,650,10,50,left)
	World.add(world,leftTrash)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  keyPressedd()

  drawSprites();
}

function keyPressedd() {
	if(keyCode == UP_ARROW){
		ball.applyForce(ball,725,10)
	}
}

