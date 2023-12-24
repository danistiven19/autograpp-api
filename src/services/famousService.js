
function getAllFamous() {
  return new Promise((resolve, reject) => {
    resolve(["daniel", "james", "jenny"]);
  });
}

module.exports = {
  getAllFamous
};
