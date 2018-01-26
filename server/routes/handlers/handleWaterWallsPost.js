const createWaterPools = require('../../actions/createWaterPools');
const findMaxWaterWalls = require('../../actions/findMaxWaterWalls');

module.exports = function handleWaterWallsPost({ body: { walls } }, res) {
  const waterPools = createWaterPools(walls);
  waterPools.largestPool = findMaxWaterWalls(walls);
  res.send(waterPools);
}