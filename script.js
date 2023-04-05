"use strict";

(function () {
  // INFO: helper functions

  function getCurrentYear() {
    return new Date().getFullYear();
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

  const setGridBtn = document.querySelector("#set-grid");
  const clearBtn = document.querySelector("#clear");
  const copyright = document.querySelector(".copyright");

  copyright.textContent = `${copyright.textContent} ${getCurrentYear()}`;

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
