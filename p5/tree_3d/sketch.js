function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    angleMode(DEGREES)

    noLoop()
}

function draw() {
    background(200)
    translate(0, 200, -200)

    branch(212)
}

function branch(len) {
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

        var B_Y = random(0, 100)

        if(B_Y > 49) {
            var r_A = 67
            var g_A = 108
            var b_A = 153
            fill(r_A, g_A, b_A, 255)
        } else {
            var r_B = 232
            var g_B = 215
            var b_B = 110
            fill(r_B, g_B, b_B, 255)
        }
        noStroke()
        translate(5, 0, 0)
        rotateZ(90)
        beginShape()
        sphere(1.5)
        endShape(CLOSE)
    }
}