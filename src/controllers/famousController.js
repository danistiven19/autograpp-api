const FamousService = require('../services/famousService');

const getAll = async(req, res) => {
  try {
    const famous = await FamousService.getAllFamous();
    res.json(famous);
  } catch(err) {
    res.status(500).send('Something broke!');
  }
}

const createFamous = async(req, res) => {
  try {
    const famous = await FamousService.createFamous(req.body);
    res.json(famous);
  } catch(err) {
    res.status(500).send('Something broke!');
  }
}

module.exports = {
  getAll,
  createFamous
};
