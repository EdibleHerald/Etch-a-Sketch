// Builds a browser verison of something between a sketch pad
// and an Etch-a-Sketch

// Create a webpage with a 16x16 grid of square grids
// NOTE: USE Javascript TO CREATE DIVS
// NOTE: PUT SAID DIVS INSIDE OF A CONTAINER DIV (Can be added using html)

// Use flexbox to make divs appear as a grid
// Setup a "hover" effeect so that the grid divs change color
// when mouse passes over them, leaving a trail

// Create a popup that asks the user how many squares per side
// Should generate a new grid with the same space as the 16x16
// NOTE: Set MAXIMUM as 100(100x100)





// Create a function that makes a 16x16 square div grid 

function createCanvas(sqPerSide){
    // Delete previous divs before creating new ones
    clearCanvas();


    let container = document.querySelector(".container");
    sqTotal =sqPerSide*sqPerSide;

    // New issue: divs must actually fit container or else they leak out
    // solution: I added a border that adds on 2 pixels horiziontally and vertically, explaining the error;
    // NOTE: adjust accordingly if deciding to remove border.

    widthAndHeight = determineHeightWidth(sqTotal)-2;
    
    for(let i=0;i<sqTotal;i++){

        let div = document.createElement("div");

        div.classList.add("canvas");

        div.style.width = `${widthAndHeight}px`;
        div.style.height = `${widthAndHeight}px`;

        container.appendChild(div);
    }
    
}

// Tricky siutation here, I need to create a value using the amount of squares per side
// to determine the length/width of the divs
//
// Here's what we need:
// area of containerDiv : 800 x 800 = 640,000
// Width and Height of each square : sqrt(640,000/(sqPerSide*sqPerSide))

// Lets make a seperate function to handle these calculations

function determineHeightWidth(sqTotal){
    let containerDiv = document.querySelector(".container");
    let width = containerDiv.clientWidth;
    let height = containerDiv.clientHeight;

    let containerDivArea = width * height;
    

    widthAndHeight = Math.sqrt((containerDivArea/sqTotal));

    return widthAndHeight;
}

// Now we need a function that actually asks the user to input 
// the size of the canvas

function canvasSize(){
   let input = document.getElementById("size");
   let inputValue = input.value;
   
   createCanvas(inputValue);
}

// Problem: The createCanvas() function only creates, it 
// does NOT dispose of older divs and I want it to automatically
// create canvas based on input 

// Solution: Create a function that clears child divs 
// that runs BEFORE any new divs are created.

function clearCanvas(){
    let containerDiv = document.querySelector(".container");
    containerDiv.innerHTML = '';
}



