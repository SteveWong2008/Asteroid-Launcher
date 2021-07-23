function createBall() {
 cannonball= createSprite(windowWidth/2-100, 100, 60, 10);
  cannonball.depth = cannon.depth-1
  cannonball.addImage(select);
  cannonball.x = cannon.x;
  cannonball.y=cannon.y;
  cannonball.pointTo(World.mouseX,World.mouseY);
  cannonball.setSpeed(20);
  cannonball.lifetime = 300;
  cannonball.scale = 0.15 ;
  
  gamestate="reload"
  sBallGroup.add(cannonball);
 
}