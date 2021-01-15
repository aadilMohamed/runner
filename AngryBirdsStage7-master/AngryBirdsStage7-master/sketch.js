var you;
var gamestate = 0
var score = 0
var obstacle
 function setup(){
    canvas = createCanvas(400,displayHeight-150);
      you = createSprite(200,500,50,50); 
      you.shapeColor = color("hotPink")
      createSprite(100,displayHeight/2,10,displayHeight)
      createSprite(300,displayHeight/2,10,displayHeight)
    } 
    function obstacles(){
        
        if(frameCount%30 === 0){
            obstacle = createSprite(random(0,400),0,30,30)
            obstacle.velocityY = random(8,15)
            obstacle.shapeColor = color("red")
                
        }

       
        }
        
function draw(){
    if(you.width/2+obstacle.width/2 === 40){
        gamestate = 1
    }
    if (gamestate === 0){ 
    background("black"); 
    
    score = Math.round(frameCount/20)
    fill("white")
    textSize(20)
    text("Score: "+score,310,50)
if(keyWentDown(RIGHT_ARROW)&&you.x === 200){
    camera.position.x = camera.position.x+200 
    you.x = you.x+200
}
if(keyWentDown(RIGHT_ARROW)&&you.x === 0){
    camera.position.x = camera.position.x+200 
    you.x = you.x+200
}
if(keyWentDown(LEFT_ARROW)&&you.x === 200){
    camera.position.x = camera.position.x-200 
    you.x = you.x-200
}
if(keyWentDown(LEFT_ARROW)&&you.x === 400){
    camera.position.x = camera.position.x-200 
    you.x = you.x-200
}
obstacles() 
drawSprites() 


}
if (gamestate === 1){
    text("Game")
    text("Over")
    text("¯\_(ツ)_/¯")

}
}


