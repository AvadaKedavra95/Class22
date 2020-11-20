const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var option
var engine,world,ground;
var ball;
var ballOption;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  option = {
    isStatic : true
  }

  ballOption = {
    restitution : 1.0
  }
  
  ball=Bodies.circle(200,50,20,ballOption);
  ground=Bodies.rectangle(200,370,400,60,option);

  World.add(world,ground)
  World.add(world,ball);
}

function draw() {

  Engine.update(engine);
  background(0);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,60); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 
}