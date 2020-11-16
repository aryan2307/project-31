const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(240, 775, 480, 50);

    for(var k = 0; k <= width;  k+=80){
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }

    for(var j = 40; j <= width; j+=50){
      plinkos.push(new Plinko(j, 75));
    }

    for(var j = 15; j <= width; j+=50){
      plinkos.push(new Plinko(j, 175));
    }

    for(var j = 40; j <= width; j+=50){
      plinkos.push(new Plinko(j,275));
    }

    for(var j = 15; j <= width; j+=50){
      plinkos.push(new Plinko(j,375));

    }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  drawSprites();
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(210, 270), 10, 10));
   }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
  }

  for (var i = 0; i < particles.length; i++) {
   
    particles[i].display();
  }

  for (var k = 0; k < divisions.length; k++){
     divisions[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
     plinkos[j].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
 }

  for (var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
 }

 for (var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
 }
}



