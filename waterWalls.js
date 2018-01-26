function waterWalls(walls) {
  let largestCavity = [];
  let firstWallIdx = 0;
  let secondWallIdx;

  for (let i = 1; i < walls.length; i++) {
    if (walls[i] >= walls[firstWallIdx]) {
      firstWallIdx = i;
    } else {
      secondWallIdx = searchFor2ndWallIdx(walls, firstWallIdx);
      if (secondWallIdx === null) {
        secondWallIdx = searchFor2ndWallIdxReverse(walls, firstWallIdx);
        if (secondWallIdx === null) return largestCavity;
      }
      const cavity = findCavityArea(walls, firstWallIdx, secondWallIdx);
      largestCavity = findLargestCavity(largestCavity, cavity);

      firstWallIdx = secondWallIdx;
      i = firstWallIdx;
    }
  }
  return largestCavity;
}

function searchFor2ndWallIdx(walls, firstWallIdx) {
  const firstWall = walls[firstWallIdx];
  for (let i = firstWallIdx + 1; i < walls.length; i++) {
    if (walls[i] >= firstWall) return i;
  }
  return null;
}

function searchFor2ndWallIdxReverse(walls, firstWallIdx) {
  const firstWall = walls[firstWallIdx];
  let secondWallIdx = walls.length - 1;
  let secondWall = walls[secondWallIdx];


  for (let i = secondWallIdx; i > firstWallIdx; i--) {
    if (walls[i] >= walls[secondWallIdx]) {
      secondWallIdx = i;
      secondWall = walls[i];
    }
  }
  if (secondWallIdx === firstWallIdx + 1) return null;
  return secondWallIdx;
}

// Returns the number of droplets that occupy the cavity
function findCavityArea(walls, firstWallIdx, secondWallIdx) {
  const x = secondWallIdx - firstWallIdx - 1;
  const y =
    walls[firstWallIdx] <= walls[secondWallIdx]
      ? walls[firstWallIdx]
      : walls[secondWallIdx];

  let areaOfLowerWalls = 0;
  for (let i = firstWallIdx + 1; i < secondWallIdx; i++) {
    areaOfLowerWalls += walls[i];
  }

  return [
    firstWallIdx + 1,
    secondWallIdx + 1,
    (x * y) - areaOfLowerWalls
  ];
}

function findLargestCavity(largestCavity, currCavity) {
  if (largestCavity[2] === undefined) return currCavity;
  return largestCavity[2] < currCavity[2] ? currCavity : largestCavity;
}

// function waterWalls(walls) {
//     Create a label for the largest cavity specifying the index of the walls and area
//     Have a label for the first wall assigned to the first indexed wall
//     Have a label for the second wall
//     Set a flag to search for the second wall

//     iterate on the walls starting with the second index
//     if the wall is greater than or equal the first wall reassign the first wall
//     if the wall is lesser begin the search for the second wall

//     find the cavity area between
//     compare and reassign the largestCavity

//     start the iteration at 1 less than the idx of the second wall
// }


module.exports = { waterWalls, searchFor2ndWallIdx, findCavityArea, findLargestCavity }