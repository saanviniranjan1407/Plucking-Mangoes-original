class Stone{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,50,options);
        this.r = 50;
        this.x = x;
        this.y = y;
        this.image = loadImage("images/stone.png");

        World.add(world,this.body);
    }

    display(){
        //vb = this.body.position;
        //angle = this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}