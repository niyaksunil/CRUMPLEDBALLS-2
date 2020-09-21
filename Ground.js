// created the class ground
class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
// setting the  parameters of the ground    
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
// displaying the function 
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };