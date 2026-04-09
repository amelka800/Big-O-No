document.addEventListener("DOMContentLoaded", () => {

  console.log("main.js running");

  const nodes = {
  1: [53.34802, -6.27585],
  2: [53.34802, -6.27679],
  3: [53.34766, -6.27690],
  4: [53.34862, -6.27795],
  5: [53.34878, -6.27625],
  6: [53.34782, -6.27816],
  7: [53.349, -6.27781],
  8: [53.34853, -6.27846],
  9: [53.34936, -6.27954],
  10: [53.34863, -6.27979],
  11: [53.34936, -6.27954]  // updated
};

const graph = {
  1: [{ to: 2, weight: 63.0 }],
  2: [
    { to: 1, weight: 63.0 },
    { to: 3, weight: 40.6 },
    { to: 4, weight: 102.5 },
    { to: 5, weight: 91.8 }
  ],
  3: [{ to: 2, weight: 40.6 }, { to: 6, weight: 86.3 }],
  4: [{ to: 2, weight: 102.5 }],
  5: [{ to: 2, weight: 91.8 }, { to: 7, weight: 107.3 }],
  6: [{ to: 3, weight: 86.3 }, { to: 8, weight: 81.3 }],
  7: [{ to: 5, weight: 107.3 }, { to: 9, weight: 69.5 }],
  8: [{ to: 6, weight: 81.3 }, { to: 11, weight: 470.6 }],
  9: [{ to: 7, weight: 69.5 }, { to: 10, weight: 87.8 }],
  10: [{ to: 9, weight: 87.8 }, { to: 11, weight: 476.5 }],
  11: [{ to: 10, weight: 476.5 }, { to: 8, weight: 470.6 }]
};