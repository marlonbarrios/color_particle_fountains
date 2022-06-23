
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(6, 10));
    this.acc = createVector(0, 4);
    this.r = 8;
    this.lifetime = 255;
  }

  finished() {
    return this.lifetime < 2;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(map(mouseX,0, width, -1,1), (map(mouseY,0, height, -1,1)));
    this.lifetime -= 5;
  }

  show() {
   
    stroke(random(255), random(255), random(255), this.lifetime);
    fill(random(255),  random(255), random(255), this.lifetime);
    strokeWeight(this.r * 2)
    point(this.pos.x, this.pos.y );
   

  }


}
