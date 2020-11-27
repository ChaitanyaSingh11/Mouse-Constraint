class Pendulum {
    constructor(x, y, r) {
        var options = {
            restitution: 1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.image = loadImage("Assets/ball.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 2 * this.r, 2 * this.r);
        pop();
    }
}