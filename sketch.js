
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var left,right,base,ground,ball1
function preload()
{
dustbin = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 500);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var options ={
	   isStatic: true
   }
   ground = Bodies.rectangle(400,475,800,15,options);
   World.add(world,ground);

   left = Bodies.rectangle(451,405,20,125,options);
   World.add(world,left);

   base = Bodies.rectangle(538,457,155,15,options);
   World.add(world,base);

   right = Bodies.rectangle(625,405,20,125,options);
   World.add(world,right);

  Engine.run(engine);
  ball1 = new Ball(200,200)
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rect(ground.position.x,ground.position.y,800,15);
  fill("red");
  rect(left.position.x,left.position.y,20,125);
  rect(base.position.x,base.position.y,155,20);
  rect(right.position.x,right.position.y,20,125);
  image(dustbin,425,220,230,250);
  fill("purple");
  ball1.display();
  
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === 38) {
  Matter.Body.applyForce(ball1.ball,ball1.ball.position,{x: 200, y: -550});
  }
}



