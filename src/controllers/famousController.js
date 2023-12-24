const FamousService = require('../services/famousService');

function getAll(req, res) {
  FamousService.getAllFamous()
    .then(famous => {
      res.json(famous);
    })
    .catch(err => {
      console.log(err);
    });
}

// Function to get a specific famous item by ID
function getById(req, res) {
  const itemId = req.params.id;
  
  // Logic to fetch the famous item with the given ID from the database
  // ...
  
  // Return the fetched item as a response
  res.json(famousItem);
}

module.exports = {
  getAll,
  getById
};
