'use strict';

let canvasElem = document.getElementById('chart')


function renderChart() {
    let state = new AppState();

    state.loadItems();

let name = [];
let timesClicked = [];
let timesShown = [];

for( let i = 0; i < state.allProducts.length; i++) {
  name.push( state.allProducts[i].name );
  timesClicked.push( state.allProducts[i].timesClicked);
  timesShown.push( state.allProducts[i].timesShown);
  console.log(state.allProducts[i].name)
}

console.log(name);
console.log(timesClicked);
console.log(timesShown);

const data = {
  labels: name,
  datasets: [
    {
      label: 'Times Clicked',
      data: timesClicked,
      borderWidth: 1,
      backgroundColor: [
        '#AAE2C3'
      ]
    },
    {
      label: "Views",
      data: timesShown,
      borderWidth: 1,
      backgroundColor: ['#D2C0E0']
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
new Chart(canvasElem, config);
}

renderChart();
