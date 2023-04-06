"use strict";

(function () {
  // INFO: classes

  class Square {
    constructor(size) {
      this.body = document.createElement("div");
      this.body.classList.add("grid__square");
      this.body.style.width = size;
      this.body.style.height = size;
      this.lightness = 1;
    }

    setColor() {
      this.color = {
        red: getRGBComponent(),
        green: getRGBComponent(),
        blue: getRGBComponent(),
      };
    }

    setLightness(ln) {
      this.lightness = ln;
    }

    updateColor() {
      const red = this.color.red * this.lightness;
      const green = this.color.green * this.lightness;
      const blue = this.color.blue * this.lightness;
      this.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
  }

  // INFO: helper functions

  function getCurrentYear() {
    return new Date().getFullYear();
  }

  function getRGBComponent() {
    return Math.floor(Math.random() * 255);
  }

  // INFO: UI related functions

  function createGrid(squares) {
    const gridContainer = document.querySelector(".grid");
    let squareSize = `${gridContainer.offsetWidth / squares}px`;

    for (let r = 0; r < squares; r++) {
      const row = document.createElement("div");

      row.classList.add("grid__row");

      for (let c = 0; c < squares; c++) {
        const squareObj = new Square(squareSize);
        const squareEl = squareObj.body;

        row.appendChild(squareEl);

        squareEl.addEventListener("mouseover", () => {
          if (squareObj.lightness === 1) squareObj.setColor();

          if (squareObj.lightness > 0) {
            squareObj.updateColor();
            squareObj.setLightness(squareObj.lightness - 0.1);
          }
        });
      }

      gridContainer.appendChild(row);
    }
  }

  function resetGrid() {
    const gridContainer = document.querySelector(".grid");
    const gridRows = document.querySelectorAll(".grid__row");

    gridRows.forEach((row) => {
      gridContainer.removeChild(row);
    });

    return gridRows.length;
  }

  // INFO: main entry point

  const setGridBtn = document.querySelector("#set-grid");
  const clearBtn = document.querySelector("#clear");
  const copyright = document.querySelector(".copyright");

  copyright.textContent = `${copyright.textContent} ${getCurrentYear()}`;
  createGrid(16);

  // INFO: button functions

  setGridBtn.addEventListener("click", () => {
    let gridSize;
    let previousGrid = resetGrid();

    while (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
      gridSize = prompt(
        "Please specify grid size in squares per side (max 100).",
        previousGrid
      );
    }

    createGrid(gridSize);
  });

  clearBtn.addEventListener("click", () => {
    createGrid(resetGrid());
  });
})();
