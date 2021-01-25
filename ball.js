class Ball{
    constructor(x,y){
        var options ={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
        }
    this.image = loadImage("paper.png");
    this.ball = Bodies.circle(x,y,50,options)
    World.add(world,this.ball)


    }
    display() {
        var pos = this.ball.position
        push()
        //ellipseMode(RADIUS)
        //ellipse(pos.x,pos.y,70)
        imageMode(RADIUS)
        image(this.image,pos.x,pos.y,57,57)
        pop()
    }
}