"use strict";

(function () {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

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

  const setGridBtn = document.querySelector("#set-grid");
  const copyright = document.querySelector(".copyright");

  copyright.textContent = `${copyright.textContent} ${getCurrentYear()}`;

  setGridBtn.addEventListener("click", () => {
    let gridSize;
    while (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
      gridSize = prompt(
        "Please specify grid size in squares per side (max 100)."
      );
    }
    createGrid(gridSize);
  });
})();
