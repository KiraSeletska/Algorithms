
/*

1. Допишите реализацию динамического массива с урока. Так чтобы он содержал в себе следующий набор методов:
DynamicArray() - конструктор по умолчанию
DynamicArray(capacity) - конструктор создающий массив определенного размера
add(data) - добавляет в конец
remove() - удаляет последний
removeAt(index) - удаляет по индексу
growSize() - увеличивает размер
set(index, data) - изменяет элемент
clean() - удаляет все элементы
contains(data) - проверяет существует ли элемент
isEmpty() - вернет false, если в структуре есть элемент
*/

class DynamicArray {
    constructor(capacity = 4) {
        this.capacity = capacity;
        this.arr = new Array(capacity);
        this.size = 0;
    }

    add(data) {
        if (this.size === this.capacity) {
            this.growSize();
        }
        this.arr[this.size++] = data;
    }

    remove() {
        if (this.size === 0) {
            throw new Error('Array is empty');
        }
        const removed = this.arr[--this.size];
        this.arr[this.size] = null;
        return removed;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Wrong index');
        }
        const removed = this.arr[index];
        for (let i = index; i < this.size - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }
        this.arr[--this.size] = null;
        return removed;
    }

    growSize() {
        const newCapacity = this.capacity * 2;
        const newArr = new Array(newCapacity);
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
        this.capacity = newCapacity;
    }

    set(index, data) {
        if (index < 0 || index >= this.size) {
            throw new Error('Wrong index');
        }
        this.arr[index] = data;
    }

    clean() {
        for (let i = 0; i < this.size; i++) {
            this.arr[i] = null;
        }
        this.size = 0;
    }

    contains(data) {
        for (let i = 0; i < this.size; i++) {
            if (this.arr[i] === data) {
                return true;
            }
        }
        return false;
    }

    isEmpty() {
        return this.size === 0;
    }
}

/*
2. Реализуйте программу, которая принимает на вход строку и возвращает список букв и то как часто они в этой строке встречаются
Пример:
Входные данные: "абракадабра"
Выходные данные: "а" : 5 , "б" : 2 , "р" : 2 , "к" : 1 , "д" : 1
*/
function count(str) {
    let alfa = [];
    for (let i = 0; i < str.length; i++) {
        if (alfa[str[i]] === undefined) {
            alfa[str[i]] = 1;
        
        } else {
            alfa[str[i]]++;
        }
    }
    return alfa;
}

console.log(count("moloko"));
console.log(count("фффщшыощщлы"));