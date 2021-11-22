const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var backgroundimg, platform;
var log5;
var estadodeJogo = "onSling";
var bg = "sprites/bg.png";

function preload(){
    getBgimg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //log5 = new Log(230,180,80,PI/2);
    platform = new Ground(150,305,300,170);
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);

    bird = new Bird(200,50);

    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

    //linha invisivel
    restriction = new Slingshot(bird.body,{x:200, y:50});

}

function draw(){
    if(backgroundimg){
        background(backgroundimg);
    }
    Engine.update(engine);
    
    platform.display();
    ground.display(); 

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    //pig1.display();
    //pig2.display();

    bird.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    //log5.display();
    restriction.display();
}

function mouseDragged(){
    if(estadodeJogo === "onSling"){
    Matter.Body.setPosition(bird.body,{x: mouseX, y: mouseY});
}}

function mouseReleased(){
    restriction.fly();
    estadodeJogo = "no";
}

function keyPressed(){
    if(keyCode === 32){
      restriction.attach(bird.body);
    estadodeJogo = "onSling";
}}

async function getBgimg(){
    var resposta = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var respostaJson = await resposta.json();
    console.log(respostaJson.datetime);
    var horario = respostaJson.datetime.slice(11,13);
    if(horario > 17 && horario < 05){
        bg = "sprites/bg2.png";
    } else{
        bg = "sprites/bg.png";
    }
    backgroundimg = loadImage(bg);
    console.log(horario);
    console.log(backgroundimg);
}