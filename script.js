"use strict";

const GRID_SIZE = 600;

(function () {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  const gridContainer = document.querySelector(".grid");
  gridContainer.style.width = `${GRID_SIZE}px`;
  gridContainer.style.height = `${GRID_SIZE}px`;

  let squaresPerSide = 16;
  let squareSize = `${GRID_SIZE / squaresPerSide}px`;

  for (let r = 0; r < squaresPerSide; r++) {
    const row = document.createElement("div");
    row.classList.add("grid__row");

    for (let c = 0; c < squaresPerSide; c++) {
      const square = document.createElement("div");
      square.classList.add("grid__square");
      square.style.width = squareSize;
      square.style.height = squareSize;
      row.appendChild(square);
    }

    gridContainer.appendChild(row);
  }

  const copyright = document.querySelector(".copyright");
  copyright.textContent = `${copyright.textContent} ${getCurrentYear()}`;
})();
