Array.prototype.forEachRight = function(callback) {
<<<<<<< HEAD
  for (let i = this.length - 1; i >= 0; i--) {
    callback(this[i], i, this);
  }
}

const myArr = ['path', 'fs', 'os', 'events'];
myArr.forEachRight(function(item, i, arr) {
  console.log(item, i);
=======
  for (let i = 0; i < this.length; i++) {
    callback(this, i, this[i]);
  }
}

myArr = ['path', 'fs', 'os'];
myArr.forEachRight(function(arr, i, item) {
  console.log(arr, i, item);
>>>>>>> 7df762d8dad9ea2647057763e41fd2cf69075fc4
});
