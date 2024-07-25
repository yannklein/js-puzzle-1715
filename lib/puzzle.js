console.log("Welcome to the livecode!");

// ////////////////
// Rehearsal
// ////////////////

// 1. Select elements 
//    that the usser interacts with and 
//    the one that will change
//    (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint")

// 2. Listen to a click on the button
button.addEventListener("click", () => {
  console.log("clicked!");
  // 3. Change the DOM, add a class active to the hint
  hint.classList.add("active");
});


// ////////////////
/// Hints
// ////////////////

// tile13.cellIndex
// => 0
// tile13.parentElement.rowIndex
// => 3


// ////////////////
// Live code
// ////////////////

const isNearEmpty = (tile) => {
  const xTile = tile.parentElement.rowIndex
  const yTile = tile.cellIndex

  const empty = document.querySelector(".empty")

  const xEmpty = empty.parentElement.rowIndex
  const yEmpty = empty.cellIndex

  return (Math.abs(xTile - xEmpty) + Math.abs(yTile - yEmpty) === 1);
}

const moveTile = (tile) => {
  const empty = document.querySelector(".empty")
  empty.classList.remove("empty")
  tile.classList.add("empty")
  empty.innerText = tile.innerText
  tile.innerText = ""
}

const didWeWin = (tiles) => {
  const winResult = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  const actualResult = [];
  tiles.forEach((tile) => {
    actualResult.push(tile.innerText)
  });
  return actualResult.join() === winResult;
};

// select all tiles => node list
const allTiles = document.querySelectorAll('td');
// iterrate over the array 
allTiles.forEach((tile) => {
  // forEach tile listen to click
  tile.addEventListener('click', (event) => {
    const clickElement = event.currentTarget;
    // check if the empty tile is around
    console.log(isNearEmpty(clickElement));
    // if it's there -> swap position
    if (isNearEmpty(clickElement)) {
      moveTile(clickElement)
      // check if win or not
      // if win -> display a message 
      if (didWeWin(allTiles)) {
        alert("We won! 🎸⚡️")
      }
    }
  })
})

