function processData(data, id) {
  return { id, ...data };
}

function validateInput(data) {
  return data.name && data.age ? true : false;
}

module.exports = { processData, validateInput };
