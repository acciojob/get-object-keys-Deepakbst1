var student = {
  name: "John Doe"
};
Object.prototype.getKeys = function() {
  return Object.keys(this);
};
var keys = student.getKeys();
console.log("Keys:", keys);