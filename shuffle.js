function shuffle(arr) {
  for (var x = arr.length - 1; x > 0; x--) {
    var holder = Math.floor(Math.random() * (x + 1));
    var temp = arr[x];
    arr[x] = arr[holder];
    arr[holder] = temp;
  }
  return arr;
}
