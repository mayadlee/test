// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

// Extra practice: https://cdn.glitch.com/20b95798-6f01-45c6-8fc7-a706c95d44a9%2Flogos.jpg?v=1512863797321

function setup(){
    // Code here runs only once
    createCanvas(800, 600)
  }
  
  function draw(){
    // Code here runs continuously
    background(255)
    strokeWeight(1)
    
    olympics()
    chrome()
    
  }
  
  function makePerson() {
    fill('tan')
    stroke('tan')
    ellipse(100, 100, 75)
    
    stroke('purple')
    fill('purple')
    rect(50, 137.5, 100, 200, 20)
    
    stroke('black')
    strokeWeight(3)
    noFill()
    line(90, 80, 90, 100)
    line(110, 80, 110, 100)
    arc(100, 110, 40, 30, PI/4, 3 * PI / 4)  
  }
  
  function olympics() {
    
    strokeWeight(5)
    noFill()
    
    stroke('#0085C7')
    ellipse(50+100, 50, 50)
    
    stroke('#F4C300')
    ellipse(80+100, 80, 50)
    
    stroke('#000000')
    ellipse(110+100, 50, 50)
    
    stroke('#009F3D')
    ellipse(140+100, 80, 50)
    
    stroke('#DF0024')
    ellipse(170+100, 50, 50)
    
    
    stroke('#0085C7')
    arc(50+100, 50, 50, 50, 0, PI/6)
    
    stroke('#F4C300')
    arc(80+100, 80, 50, 50, 3 * PI / 2, 7 * PI / 4)
    
    stroke('#000000')
    arc(110+100, 50, 50, 50, 0, PI / 4)
    
    stroke('#009F3D')
    arc(140+100, 80, 50, 50, 3*PI/2, 7 * PI / 4)
    
  }
  
  function chrome() {
    // Arcs of each section to split into thirds
    strokeWeight(1)
    stroke('#ffcd46')
    fill('#ffcd46')
    arc(100, 100, 50, 50, 0 - 0.2, 2*PI/3 - 0.2)
    
    stroke('#1da462')
    fill('#1da462')
    arc(100, 100, 50, 50, 2*PI/3 - 0.2, 4*PI/3 - 0.2)
    
    stroke('#dd5144')
    fill('#dd5144')
    arc(100, 100, 50, 50, 4*PI/3 - 0.2, 6*PI/3 - 0.2)
    
    
    //Triangles to make the straight line edges
    stroke('#ffcd46')
    fill('#ffcd46')
    triangle(97, 89, 125, 89, 122, 110)
    
    stroke('#1da462')
    fill('#1da462')
    triangle(110, 105, 100, 125, 80, 120)
    
    stroke('#dd5144')
    fill('#dd5144')
    triangle(90, 105, 75, 85, 100, 75)
    
    //Dot in the center
    stroke('white')
    fill('white')
    ellipse(100, 100, 23, 23)
  
    stroke('#4c8bf5')
    fill('#4c8bf5')
    ellipse(100, 100, 19, 19)
    
    //White circle to make the edges clean
    noFill()
    stroke('white')
    strokeWeight(8)
    ellipse(100, 100, 58, 58)
  }