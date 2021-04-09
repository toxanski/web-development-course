Array.prototype.forEachRight = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this, i, this[i]);
  }
}

myArr = ['path', 'fs', 'os'];
myArr.forEachRight(function(arr, i, item) {
  console.log(arr, i, item);
});
