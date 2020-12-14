class Paper {
    constructor (x,y,radius){
        
        var options ={
            'isStatic' : false,
            'restitution' :0.5,
            'friction' : 0.5,
            'density' : 1.2
        }
        
       
        this.body = Bodies.circle(x, y,radius,options);
        this.radius = radius
        this.image = loadImage("Sprites/paper.png")
        World.add(world, this.body);
    }

    display(){
    
    var pos = this.body.position
   
    push ();
    fill ("red");
    stroke ("red");
    ellipseMode(RADIUS);
    circle(pos.x, pos.y, this.radius, this.radius);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,70,70);;
    pop ();
    }

    
};

/*function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(this.image,70,70);
    }
}*/

