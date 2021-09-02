// Вам нужно написать функции indexOf, lastIndexOf, find, findIndex, includes, every и some, которые работают так же, как одноименные методы массивов.



// Алгоритм выполнения:

// Читаете документацию по методу над которым работаете
// разбираетесь как он работает и что возвращает
// пишете функцию которая полностью имитирует работу метода





let arr = [1, 8, 11, 7, 4, -5];
//1.
// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
function indexOf(arr, num) {
    for (i = 0; i < arr.length; i++) {

        if (arr[i] === num) return i;

    }
    return -1;
}
console.log(indexOf(arr, -5));
//2.
//Метод lastIndexOf() возвращает индекс последнего вхождения указанного значения в строковый объект String, на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу, начиная с индекса fromIndex.
function lastIndexOf(arr, num) {
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === num) return i;
    }
    return -1;
}
console.log(indexOf(arr, 11));
//3.
//Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.

let callback = function (a) { // callback функция для всех функций.
    return a === 7;
};
function find(arr, callback) {
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i])) return arr[i];
    }
};
console.log(find(arr, callback));
//4.
//Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
function findIndex(arr, callback) {
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i])) return i;
    }
    return -1;
};
console.log(findIndex(arr, callback));
//5.
//Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.
function includs(arr, num) {
    for (i = 0; i < arr.length; i++) {

        if (arr[i] === num) return true;


    }
    return false;
}
console.log(includs(arr, -5));//true
//6.
//Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
function every(arr, callback) {
    if (arr.length === 0) return true;
    for (i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) return false;
    }
    return true;
};
console.log(every(arr, callback));
//7.
//Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
function some(arr, callback) {
    if (arr.length === 0) return true;
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i])) return true;
    }
    return false;
};
console.log(some(arr, callback));