// import functions and grab DOM elements
// import { makeStatsString } from './utils.js';

const characterSelect = document.getElementById('character-select');
const environmentSelect = document.getElementById('environment-select');
const opponentSelect = document.getElementById('opponent-select');

const characterImageEl = document.getElementById('character-image');
const environmentImageEl = document.getElementById('environment-image');
const opponentImageEl = document.getElementById('opponent-image');
const captionImageEl = document.getElementById('caption');

const captionList = document.getElementById('caption-list');
const captionInput = document.getElementById('caption-input');
const captionButton = document.getElementById('caption-button');

// let state
let characterCount = 0;

let environmentCount = 0;

let opponentCount = 0;

let captions = [];

// set event listeners 
characterSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    console.log(value);
    characterCount++;

    characterImageEl.src = `./assets/character-${value}.png`;

    displayStats();
});

environmentSelect.addEventListener('change', (e) => {
    const value = e.target.value;

    environmentCount++;

    environmentImageEl.src = `./assets/environment-${value}.png`;
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
