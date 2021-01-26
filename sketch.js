const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var thunderbolt = 0
var thunder
var drops = []

function preload(){
    t1 = loadImage("images/thunderbolt/1.png")
    t2 = loadImage("images/thunderbolt/2.png")
    t3 = loadImage("images/thunderbolt/3.png")
    t4 = loadImage("images/thunderbolt/4.png")

    
}

function setup(){
   engine = Engine.create()
   world = engine.world
   createCanvas(400,700)
   umbrella = new Umbrella(200,500)
if (frameCount%150===0){
    for (var i=0; i<100; i++){
        drops.push(new createDrop(random(0,400),random(0,400)))
    }
}

}

function draw(){
    Engine.update(engine)
    background("black")
    rand = Math.round(random(1,4))
    if (frameCount%80===0){
        thunderbolt = frameCount
        thunder = createSprite(random(10,370),random(10,30))
        switch(rand){
            case 1: thunder.addImage(t1)
            break
            case 2: thunder.addImage(t2)
            break
            case 3: thunder.addImage(t3)
            break
            case 4: thunder.addImage(t4)
            break
        }
        thunder.scale = random(0.3,0.6)
    }
    if (thunderbolt+10===frameCount&&thunder){
        thunder.destroy()
    }
    umbrella.display()
    for (var i=0; i<100; i++){
        drops[i].showDrop()
        drops[i].updateY()
    }
     drawSprites()
}   

