// creating the Dustbin class
class Dustbin {
    constructor(x,y,width,height, color){
      var options = {
        isStatic: true
      }

// setting the parameters of the Dustbin
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("dustbingreen.png")
      this.width = width;
      this.height = height;
      this.color = color;
      World.add(world, this.body);
    }

// displaying the function
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, -100, 200, 200);
        pop();
    }
}