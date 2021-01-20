const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImage;
var stone;
var ground;
var tree, treeImage;
var mango1, mango2, mango3,mango4,mango5;
var sling;

function preload(){
	boyImage = loadImage('images/boy.png');
	treeImage = loadImage('images/tree.png');
}

function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,510);
	boy.addImage(boyImage);
	boy.scale = 0.12;

	tree = createSprite(850,310);
	tree.addImage(treeImage);
	tree.scale = 0.45;

	stone = new Stone(130,440);
	ground = new Ground(600,590,1200,10);

	mango1 = new Mango(700,200,30);
	mango2 = new Mango(800,110,30);
	mango3 = new Mango(900,220,30);
	mango4 = new Mango(1000,230,30);
	mango5 = new Mango(900,100,30);

	sling = new SlingShot(stone.body,{x: 130,y: 440});

	Engine.run(engine);  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
       sling.attach(stone.body);
       Matter.Body.setPosition(bird.body, {x:130, y:440});
    }
}

function draw() {
	rectMode(CENTER);
  	background(230,230,230);
	
	drawSprites(); 
	stone.display();
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	sling.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
}

function detectCollision(lstone,lmango){
	mangoPosition = lmango.body.position;
	stonePosition = lstone.body.position;
	
	var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);

	if(distance <= lstone.r + lmango.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}