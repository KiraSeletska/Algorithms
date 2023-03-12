// Решение с лекции
/*
function binarySearch(sortArr, findeEl) {
  let left = 0;
  let right = sortArr.length - 1;

  while (left <= right) {
    let middle = parseInt((left + right) / 2);

    if (sortArr[middle] === findeEl) {
      return middle;
    } else if (sortArr[middle] < findeEl) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}
*/

//Решение первое - не рабочее частично
/*
function findNum(arrey, el) {
  const left = 0;
  const right = arrey.length - 1;
  if (right < left) {
    return -666;
  }
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (el === arrey[mid]) {
      return mid;
    }
    else if (el < arrey[mid]) {
      return findNum((arrey.slice(0, arrey[mid])), el);
    }
    else if (el > arrey[mid]) {
      return findNum((arrey.slice(arrey[mid])), el); //!!не получается написать поиск справа
    } else {
      return 'error'
    }
  }
  
}
*/

// Рабочее решение, только усложненное

function binarySearchRec(arr, num) {
  return find(arr, num, 0, arr.length - 1);}

function find(arr, num, l, r) {
  const mid = l + parseInt((r - l) / 2);
  if (r < l) {
    return -666;
  } else if (num === arr[mid]) {
    return mid;
  } else if (num < arr[mid]) {
    return find(arr, num, l, mid - 1);
  } else {
    return find(arr, num, mid + 1, r);
  }
}

let col = [1, 5, 15, 8, 9, 4, 10, 2].sort((x, y) => x - y);
document.write(col + "<br>");
let f = 1;

//document.write('binarySearch from lesson: ' + binarySearch(col, f) + "<br>");
//document.write('My first attempt. findNum: ' + findNum(col, f)+ "<br>");
document.write(
  "My second attempt.BinarySearchRec: " + binarySearchRec(col, f) + "<br>"
);
