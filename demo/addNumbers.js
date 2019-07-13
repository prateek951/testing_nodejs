// Utility method to add the two numbers
exports.addNumbers = (numberOne, numberTwo) => {
  if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
    const error = new Error('Invalid arguments');
    throw error;
  }
  return numberOne + numberTwo;
};

// Callback based approach for same problem

exports.additionCB = (numberOne, numberTwo, cb) =>
  setTimeout(() => {
    cb(null, numberOne + numberTwo);
  }, 5000);

// Promise based addition
exports.pr = (numberOne, numberTwo) => {
  if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') {
    return Promise.reject('Invalid arguments');
  }
  return Promise.resolve(numberOne + numberTwo);
};
