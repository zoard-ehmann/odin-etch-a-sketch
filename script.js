"use strict";

(function () {
  // INFO: helper functions

  function getCurrentYear() {
    return new Date().getFullYear();
  }

  function getRGBComponent() {
    return Math.floor(Math.random() * 255);
  }

  function setColor(e) {
    const currentColor = e.target.style.backgroundColor;
    const lightness = e.target.getAttribute("data-lightness");
    const newLightness = lightness - 0.1;
    let newColor;

    e.target.setAttribute("data-lightness", newLightness);

    if (currentColor === "") {
      newColor = `rgb(${getRGBComponent()}, ${getRGBComponent()}, ${getRGBComponent()})`;
    } else {
      const re = /(rgb\()|\ |\)/g;
      const rgbCode = currentColor.replace(re, "").split(",");
      const r = +rgbCode[0] * newLightness;
      const g = +rgbCode[1] * newLightness;
      const b = +rgbCode[2] * newLightness;

      newColor = `rgb(${r}, ${g}, ${b})`;
    }

    e.target.style.backgroundColor = newColor;
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

        square.setAttribute("data-lightness", "1");
        square.classList.add("grid__square");

        square.style.width = squareSize;
        square.style.height = squareSize;

        row.appendChild(square);

        square.addEventListener("mouseover", setColor);
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
