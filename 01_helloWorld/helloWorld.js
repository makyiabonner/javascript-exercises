const helloWorld = function(name) {
  const newName = name[0].toUpperCase() + name.substring(1, name.length).toLowerCase();
  return 'Hello, ' + newName + '!'
};

module.exports = helloWorld;
