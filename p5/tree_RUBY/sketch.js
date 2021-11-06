function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    angleMode(DEGREES)

    noLoop()
}

function draw() {
    background(255)
    translate(0, 200, -200)
    
    branch(212)
}

function branch(len) {
    stroke(206, 50, 46)
    strokeWeight(map(len, 10, 100, 0.5, 5))
    line(0, 0, 0, 0, -len-2, 0)
    translate(0, -len, 0)
    
    if (len > 10) {
        for (var i = 0; i < 3; i++) {
            rotateY(random(120, 140))
            push()
            rotateZ(random(20, 50))
            branch(len * 0.7)
            pop()
        }
    } else {
        translate(5, 0, 0)
        rotateZ(90)
        beginShape()
        sphere(1.5)
        endShape(CLOSE)
    }
}