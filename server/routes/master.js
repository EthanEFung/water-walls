
const handleWaterWallsPost = require('./handlers/handleWaterWallsPost');
const router = require('express').Router();

router.get('/', (req, res) => res.sendStatus(200))
router.post('/waterwalls', handleWaterWallsPost)

module.exports = router;