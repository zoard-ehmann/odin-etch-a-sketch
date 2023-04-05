"use strict";

(function () {
  // INFO: helper functions

  function getCurrentYear() {
    return new Date().getFullYear();
  }

  function getColorCode() {
    return Math.floor(Math.random() * 255);
  }

  function getRandomColor() {
    return `rgba(${getColorCode()}, ${getColorCode()}, ${getColorCode()}, 0.0)`;
  }

  function increaseOpacity(color) {
    if (color.includes("rgba")) {
      let opacity = color.split(",")[3].replace(")", "");
      return color.replace(opacity, +opacity + 0.1);
    }
  }

  // INFO: UI related functions

  function createGrid(squares) {
    const gridContainer = document.querySelector(".grid");
    let squareSize = `${gridContainer.offsetWidth / squares}px`;

    for (let r = 0; r < squares; r++) {
      const row = document.createElement("div");
      row.classList.add("grid__row");

      for (let c = 0; c < squares; c++) {
        const square = document.createElement("div");
        square.classList.add("grid__square");
        square.style.width = squareSize;
        square.style.height = squareSize;
        row.appendChild(square);
        square.addEventListener("mouseover", (e) => {
          let currentColor = e.target.style.backgroundColor;

          if (currentColor === "") {
            e.target.style.backgroundColor = increaseOpacity(getRandomColor());
          } else {
            e.target.style.backgroundColor = increaseOpacity(currentColor);
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
