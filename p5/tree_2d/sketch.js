function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
  
    noLoop()
  }
  
  function draw() {
    background(100)
    translate(width / 2, height / 2+600)
    branch(220)
  }
  function branch(len) {
    push()
    if(len > 10) {
      strokeWeight(map(len, 10, 78, 0.1, 10))
  
      line(0, 0, 0, -len)
      translate(0, -len)
      rotate(random(-24, -32))
      branch(len * random(0.7, 0.9))
      rotate(random(45, 62))
      branch(len * random(0.7, 0.9))
    } else {
      var B_Y = random(0, 100)
      if (B_Y > 49) {
        var r_A = 67
        var g_A = 108
        var b_A = 153
        fill(r_A, g_A, b_A)
      } else {
        var r_B = 232
        var g_B = 215
        var b_B = 110
        fill(r_B, g_B, b_B)
      }
      noStroke()
      ellipse(0, 0, 10)
    }
    pop()
  }function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)

  noLoop()
}

function draw() {
  background(100)
  translate(width / 2, height / 2+600)
  branch(220)
}
function branch(len) {
  push()
  if(len > 10) {
    strokeWeight(map(len, 10, 78, 0.1, 10))

    line(0, 0, 0, -len)
    translate(0, -len)
    rotate(random(-24, -32))
    branch(len * random(0.7, 0.9))
    rotate(random(45, 62))
    branch(len * random(0.7, 0.9))
  } else {
    var B_Y = random(0, 100)
    if (B_Y > 49) {
      var r_A = 67
      var g_A = 108
      var b_A = 153
      fill(r_A, g_A, b_A)
    } else {
      var r_B = 232
      var g_B = 215
      var b_B = 110
      fill(r_B, g_B, b_B)
    }
    noStroke()
    ellipse(0, 0, 10)
  }
  pop()
}