/*
 1 уровень сложности: Задача getMin().
Реализовать структуру данных SpecialStack, которая поддерживает все операции со стеком, 
такие как push(), pop(), isEmpty(), … и дополнительную операцию getMin(), 
которая должна возвращать минимальный элемент из SpecialStack. 
Все эти операции SpecialStack должны быть O(1). Пространство O(n)
Чтобы реализовать SpecialStack, используйте структуру данных Stack, 
реализованную ранее в классе.
*/
class SpecialStack {
  constructor() {
    this.stack = [];
    this.helper = [];
  }

  isEmpty() {
    return (this.stack < 0);
}

  push(x) {
    if (this.stack.length === 0) {
      this.stack.push(x);
      this.helper.push(x);
    } else {
      this.stack.push(x);
      let min = this.helper.pop();
      if (x < min) {
        this.helper.push(x);
      } else {
        this.helper.push(min);
      }
    }
  }

  pop() {
    let x = this.stack.pop();
    this.helper.pop();
    return x;
  }

  getMin() {
    let min = this.stack[0];
    for (const el of this.stack) {
      if (el < min) {
        min = el;
      }
    }
    return min;
  }
}

let spacialTest = new SpecialStack();
spacialTest.push(10);
spacialTest.push(24);
spacialTest.push(36);
console.log(spacialTest.getMin());
spacialTest.push(5);
console.log(spacialTest.getMin());
spacialTest.push(-2);
console.log(spacialTest.getMin());

/*
const arr = [5, 10, 4, 100, 2, 3, -3];//тренировка и проверка 
getMin = (arr) => {
  let min = arr[0];
  for (const el of arr) {
    if (el < min) {
      min = el;
    }
  }
  return min;
};
console.log(getMin(arr));*/
