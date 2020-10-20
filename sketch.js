const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();

  for (var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75, 10));
  } 

  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175, 10));
  }

  for (var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275, 10));
  } 

  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375, 10));
  }

  for (var i = 0; i <= width; i = i + 80) {
    divisions.push(new Division(i, height - divisionHeight/2, 10, divisionHeight));
  }

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);

  if (frameCount % 90 === 0) {
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  
  

  drawSprites();
}