const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygoni, polygon,block, slingshot;
var ground;

var engine,world;
var score=0;

var gamestate = "onsling";

function preload() {
polygoni = loadImage("sprites/polygon.png");
}

function setup() {
   var Canvas = CreateCanvas(800,700);
   engine = Engine.create();
    world = engine.world;


    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    polygon = addImage(polygoni);

    slingshot = new SlingShot(this.polygon,{x:100,y:200});

     //level two
     block8 = new Block(330,235,30,40);
     block9 = new Block(360,235,30,40);
     block10 = new Block(390,235, 20,40);
     block11 = new Block(420,235,30,40);
     block12 = new Block(450,235,30,40);

     //level three
     block13 = new Block(360,195,30,40);
     block14 = new Block(390,195,30,40);
     block15 = new Block(420,195,30,40);

      //top
      block16 = new Block(390,155,30,40);
}

      function Draw() {
          background("grey");
          textSize(35);
    text("score:"+score,700,50);

        Engine.update(engine);
        
       polygon.display();
        slingshot.display();

        ground.display();

        block8.display();
        block8.score();

        block9.display();
        block9.score();

        block10.display();
        block10.score();

        block11.display();
        block11.score();

        block12.display();
        block12.score();

        block13.display();
        block13.score();

        block14.display();
        block14.score();

        block15.display();
        block15.score();

        block16.display();
        block16.score();;
      }

      function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingshot.fly();
    }
    
    function keyPressed(){
        if(keyCode === 32){
            slingshot.attach(polygon.body);
        }
    }
    





