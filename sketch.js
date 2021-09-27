var ball;
var groundObj;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(950, 850);
	engine = Engine.create();
	world = engine.world;
	groundObj=new Ground(475,860,width,20);
    leftSide=new Ground(550,850,20,120);
    rightSide=new Ground(0,850,20,120);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball=Bodies.circle(475,425,20,ball_options);
	World.add(world,ball);
	console.log(ball);
	//Engine.run(engine);
    //ellipseMode(RADIUS);
}


function draw() {
  background("black");
  Engine.update(engine);
  console.log("high");
  //ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display()
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.1});
	}
}


