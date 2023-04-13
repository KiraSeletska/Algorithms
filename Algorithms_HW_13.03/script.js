/*
Задание 1.
Написать функцию, которой на вход подаётся 
два упорядоченных массива
a = 1 3 5 7 9
b = 4 10
НУЖНО составить новый упорядоченный массив 
из двух пришедших
c = 1 3 4 5 7 9 10
i  v
a  1 3 5 7 9
b  4 10

j  ^
заготовка функции
function name(arr1, arr2) {
  let c = Array(arr1.length + arr2.length);
  // sort использовать нельзя
  return c;
}
*/

const a = [1, 3, 5, 7, 9];
const b = [4, 10];
const c = [];

/*
---Простоая первая попытка, работает. Но не то, что надо 
const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    let leftArr = [];
    let rightArr = [];
   let pivot = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };
*/

function swap(arr, fInd, secInd){//двигатель шага
    const temp = arr[fInd];
    arr[fInd] = arr[secInd];
    arr[secInd] = temp;
}

function division(arr, left, right) {//разделение массива, получение pivot 
    let pivot = arr[Math.floor((right + left) / 2)],//делим длинну массива на 2 и получаем pivot = ind[4]
        i = left,//заданная левая граница
        j = right;//заданная правая граница
    while (i <= j) {
        while (arr[i] < pivot) {i++}
        while (arr[j] > pivot) {j--}
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = division(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function sortArrays(arr1, arr2, arr3) {
 arr3.push(...arr1, ...arr2)
    return(quickSort(arr3, 0, arr3.length-1))
  }

 console.log(sortArrays(a, b, c))

  /*
  Постараться ответить на вопросы: 

1. Сколько "указателей" нужно для начала сортировки?
--- Один опорный элемент и два указателя: девый и правый

2. На что они указывают?
--- Левый - с первого элемента в массиве, 
правый - с последнего элемента в массиве

3. Что такое опорный(pivot) элемент?
--- Основа для последуюзей сортировки на каждой итерации

4.* Как будет выглядеть массив [7 -2 4 1 6 5 0 -4 2] после первой итерации?
--- Если pivot - элемент arr.length/2:
[2 -2 4, 1 6 5 0 -4 7]
Зависит от выбранного опорного элемента

5.** Какая худшая и лучшая оценка сложности алгоритма?
 O(n^2) И O(n*log*n) соответственно
  */
