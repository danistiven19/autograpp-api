const FamousModel = require("../models/famousModel");

const getAllFamous = async () => {
  try {
    return await FamousModel.find({});
  } catch(err) {
    throw new Error(err);
  }
}

const createFamous = async (data) => {
  try {
    return await FamousModel.create(data);
  } catch(err) {
    throw new Error(err);
  }
}

module.exports = {
  getAllFamous,
  createFamous
};
