class SlingShot{
constructor(polygon,point){
var options={
   bodyA:polygon,
   pointB:point,
   length:2.00001,
   stiffness:0.100001

}
this.sling=Matter.Constraint.create(options);
World.add(world,this.sling)
}
display(){
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)


}
}