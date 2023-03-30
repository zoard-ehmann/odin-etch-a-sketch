# Algorithm: Etch-a-Sketch

## Plan

### UI

- Does the program will have a UI?
  - The program will have a web browser based GUI.
- How will it look like?
  - 16×16 grid of squares (HTML divs)
  - When mouse passes over a square, the square will change its color to a randomly generated RGB color
    - Each pass-through on the same square will deepen the color with 10%
  - Grid density can be modified with a button at the top of the screen up to 100×100
  - Grid area will not depend on grid density, it will take up the same amount of space every time
- What functionality will it has?

### Inputs

- What inputs the program will have?
  - Grid size: the size of the grid (max 100)
  - Submit button: apply the new size
  - Reset button: to reset the board
- Will the program get the inputs from the user or elsewhere?
  - Grid size will be prompted from the user

### Outputs

- What will be the desired output?
  - A grid that matches with the user input in both X and Y
  - Grid squares will change their color to a randomly generated RGB color when the mouse passes over them
    - When the mouse passes over a square that already has a color, it will deepen by 10%

### Steps

- What will be the steps necessary to return the desired output based on the inputs?
  1. Render a default 16×16 grid
     - Get the desired grid size from the user if specified and re-render it
  2. Render the grid based on the user input
  3. Set mouse-over event listeners for each square
     1. Check if square has color
        - If not: generate a random color when mouse is over the square
        - If yes: deepen the actual color by 10% if possible
     2. Apply changes to square

## Pseudocode

- Render a default grid (16×16)
- If user specifies a new grid size, apply it and re-render the grid
- When mouse passes over a square
  - Check if square is colored
    - True: deepen it by 10%
    - False: generate a random RGB color
  - Apply the changes to the square
- When reset button is triggered, clear the board

## Flowchart
