var starImg,bgImg;
var star, starBody;
var fairy,fairyImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//Star
	starImg = loadImage("images/star.png");
	//Background
	bgImg = loadImage("images/starNight.png");
	//Fairy
	fairyImage=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);
	//Star
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	//Fairy
	fairy=createSprite(130,520);
	fairy.addAnimation("fairyImage",fairyImage);
	fairy.scale=0.2;

	//Engine
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  keyPressed();
  //write code to stop star in the hand of fairy
  if(star.y>470 && starBody.position.y>470){
	  Matter.Body.setStatic(starBody,true);
  }
  drawSprites();

}

function keyPressed() {
	if (keyDown(RIGHT_ARROW)) {
		fairy.x=fairy.x+7;
	}
	if (keyDown(LEFT_ARROW)) {
		fairy.x=fairy.x+7;
	}
	if (keyDown(DOWN_ARROW)) {
		Matter.Body.setStatic(starBody,false); 
	}
	
}
