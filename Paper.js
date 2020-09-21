// creating the Paper class
class Paper {
  constructor(x,y,radius){
    var options = {
      'restitution':0.5,
      'friction':1.0,
      'density':1.0   
    }
 // setting the parameters of the paper 
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    this.width = 50;
    this.height = 50;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  } 
  
  // displaying the function
   display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
   }
}
