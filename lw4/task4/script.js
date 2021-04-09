String.prototype.countСoincidence = function(str) {
  var regexp = new RegExp(str, 'gi');
  var searchString = this.match(regexp);
  if (searchString === null) {
    return 0;
  } else {
    return searchString.length;
  }
}
