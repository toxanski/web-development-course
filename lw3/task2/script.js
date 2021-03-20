var isTimeRangesIntersect = function (timeRange1, timeRange2) {
  if (Array.isArray(timeRange1) && Array.isArray(timeRange2)) {

    var arr = timeRange1.concat(timeRange2);
    let newArr = [];
    for (var item of arr) {
      var str = +item.replace(/[:]/, "");
      newArr.push(str);
    }

    if (newArr[0] <= newArr[3] && newArr[1] >= newArr[2]) {
      console.log('true');
    } else {
      console.log('false');
    }
  } else {
    console.log('false (Введите два массива!)');
  }
}
isTimeRangesIntersect(['08:30', '09:30'], ['10:30', '12:00']); // return false
isTimeRangesIntersect(['18:30', '19:30'], ['19:00', '21:00']); // return true