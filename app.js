// import functions and grab DOM elements
import { makeStatsString } from './test/utils.js';

const characterSelect = document.getElementById('character-select');
const environmentSelect = document.getElementById('environment-select');
const opponentSelect = document.getElementById('opponent-select');

const characterImageEl = document.getElementById('character-image');
const environmentImageEl = document.getElementById('environment-image');
const opponentImageEl = document.getElementById('opponent-image');

const statsEl = document.getElementById('stats');
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

    displayStats();
});

opponentSelect.addEventListener('change', (e) => {
    const value = e.target.value;

    opponentCount++;

    opponentImageEl.src = `./assets/opponent-${value}.png`;

    displayStats();
});

captionButton.addEventListener('click', () => {
    const value = captionInput.value;

    captions.push(value);

    captionInput.value = '';

    displayCaptions();
});

function displayStats() {
    const statsString = makeStatsString(characterCount, environmentCount, opponentCount);

    statsEl.textContent = statsString;
}

function displayCaptions() {
    captionList.textContent = '';

    for (let caption of captions) {
        const p = document.createElement('p');

        p.textContent = caption;

        captionList.append(p);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
