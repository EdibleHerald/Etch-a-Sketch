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
    
    let container = document.querySelector(".container");
    sqPerSide *=sqPerSide;

    widthAndHeight = determineHeightWidth(sqPerSide);

    for(let i=0;i<sqPerSide;i++){

        let div = document.createElement("div");

        div.classList.add("canvas");

        div.style.width = `${widthAndHeight}px`;
        div.style.height = `${widthAndHeight}px`;

        container.appendChild(div);
    }
    
}
createCanvas(16);
// Tricky siutation here, I need to create a value using the amount of squares per side
// to determine the length/width of the divs
//
// Here's what we need:
// area of containerDiv : 800 x 800 = 640,000
// Width and Height of each square : sqrt(640,000/(sqPerSide*sqPerSide))

// Lets make a seperate function to handle these calculations

function determineHeightWidth(sqTotal){
    let containerDivArea = 640000;
    

    widthAndHeight = Math.sqrt((containerDivArea/sqTotal));

    return widthAndHeight;
}