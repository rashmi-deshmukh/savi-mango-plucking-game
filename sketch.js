
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rock;
var boy

function preload() 
{
    boyimg=loadImage("boy.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Box(600,height,1200,20);
    
    mango1 = new Mango(380,260,70,70);
    mango2 = new Mango(920,320,70,70);
    mango3 = new Mango(810,350,70,70);
    mango4 = new Mango(810,260,70,70);

    //mango5 = new Box(700,240,70,70);
    tree = new Tree(800,200,400,390);
    
    rock = new Rock(400,200);
    sling= new Sling(rock.body, {x:400, y:200});    
}

function draw(){
    background("white");
    Engine.update(engine);
    
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();

    ground.display();
    
    tree.display();
   
    sling.display();
    rock.display();    
    image(boyimg, 100,300,150,150)

}

function keyPressed(){

    if(keyCode===32){
        Matter.Body.setPosition(rock.body, {x:400,y:200})//changed
        sling.attach(rock.body);
    }
}


function mouseDragged()
{
    Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY})   
}

function  mouseReleased()
{
    sling.fly();
}

