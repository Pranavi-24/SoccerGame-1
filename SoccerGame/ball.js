class Ball{
    constructor(){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(400,250,10,20,options)
        World.add(world,this.body)
    }
    display(){
        ellipseMode(CENTER)
        ellipse(this.body.position.x, this.body.position.y, 10, 10)
    }
}