class Chain{
    constructor(body1,body2,offsetX,offsetY){
      this.offsetY=offsetY
      this.offsetX=offsetX
      var option={  
        bodyA: body1,
        bodyB: body2,
        stiffness:0.04,
        //pointB:{x:this.offsetX,y:this.offsetY}
      }
      this.chain=Constraint.create(option);
     
      World.add(world,this.chain)
    }
   
    display()
    {
      var pointA=this.chain.bodyA.position;
      var pointB=this.chain.bodyB.position;
  
      strokeWeight(2);
  
      var Anchor1X=pointA.x
      var Anchor1Y=pointA.y
  
      var Anchor2X=pointB.x+this.offsetX
      var Anchor2Y=pointB.y+this.offsetY
  
      line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
  
  }
  function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
