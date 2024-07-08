// строка проверить строку на наличие . и после нее на com или ru
// let string = 'www.google.com'
// if (string.includes('.')){
//     if (string.includes('com') || string.includes('ru')){
//         console.log('есть com или ru')
//     } else console.log('есть .')
// } else console.log('нету .')
// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4
// let string = 'asdasd'
// if (string.length % 2 === 0 && string.length < 8 && string.length > 4) {
//     console.log('да')
// } else console.log('нет')
// строка поменять букву каждого четного индекса на E можно решить через map
// let string = 'zxczxczxc'
// let result = ''
// for (let i = 0; i < string.length; i++) {
//     if (i % 2 === 0) {
//         result += 'E';
//     } else {
//         result += string[i];
//     }
// }
// console.log(result)
// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале
// string1 = 'qwerty'
// string2 = 'qwerty'
// if (string1 === string2 && !string1.includes(' ') && !string2.includes(' ')){
//     console.log('пароли совпадают')
// } else console.log('пароли не совпадают')
// ['lorem', 'ipsum', 'dolor', 'sit'] => [5,5,5,3]
// let arr = ['lorem', 'ipsum', 'dolor', 'sit']
// for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//         arr[i] = 3
//     } else arr[i] = 5
// }
// console.log(arr)
// ['lorem', 'ipsum', 'dolor'] => [1,2,3]
// let arr = ['lorem', 'ipsum', 'dolor']
// let j = 1
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = j
//     j++
// }
// console.log(arr)
// ['lorem', 'ipsum', 'dolor'] => ['Lorem', 'Ipsum', 'Dolor']
// const arr = ['lorem', 'ipsum', 'dolor']
// const arrUpperCase = arr.map(a => a[0].toUpperCase() + a.slice(1).toLowerCase())
// console.log(arrUpperCase)
// ['lorem', 'ipsum', 'dolor'] => ['LOREM', 'IPSUM', 'DOLOR']
// let arr = ['lorem', 'ipsum', 'dolor']
// const arrUpperCase = arr.map(a => a.toUpperCase())
// console.log(arrUpperCase)
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'
// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let result = arr.join('-')
// console.log(result)
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'
// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let result = arr.join('/')
// console.log(result)
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'
// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let result = arr.join(' ')
// console.log(result)
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']
// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let result = arr.splice(0,1) + arr.splice(1,1) + arr.splice(2,1)
// console.log(arr)
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']
// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let result = arr.splice(1,1) + arr.splice(2,1)
// console.log(arr)
// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
// let arr = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let result = arr.push('consectetur', 'adipiscing', 'elit')
// console.log(arr)
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]
// let arr = [123,33,444,'22',55,66,77,88,99]
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         delete arr[i]
//     }
// }
// console.log(arr)
// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]
// let arr = [123,33,444,'22',55,66,77,88,99]
// let result
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         result = arr + ',' + arr[i]
//     }
// }
// console.log(result)
// ['null', undefined, 0, false, true, ''] => [0, false, true]
// let arr = ['null', undefined, 0, false, true, '']
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'boolean' && typeof arr[i] !== 'number') {
//         delete arr[i]
//     }
// }
// console.log(arr)
// ['null', undefined, 0, false, true, ''] => [true, 'null']
// let arr = ['null', undefined, 0, false, true, '']
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== true && arr[i] !== 'null') {
//         delete arr[i]
//     }
// }
// console.log(arr.reverse())
// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']
// let arr = [1123, 'qwe']
// let result = arr.concat(arr)
// console.log(result)
// [null, undefined] => [null, undefined, null, undefined]
// let arr = [null, undefined]
// let result = arr.concat(arr)
// console.log(result)
// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'
// let string = 'lorem ipsum dolor sit amet'
// let arr = string.split(' ')
// arr.splice(1,1) + arr.splice(2, 1)
// console.log(arr)
// let result = arr.join(' ')
// console.log(result)
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// const a = [1, 2, 3]
// const b = [4, 5, 6]
// const result = a.concat(b)
// console.log(result)

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// const a = [1, 2, 3]
// const result = a.reverse()
// console.log(result)

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// const a = [1, 2, 3]
// const result = a.concat([4, 5, 6])
// console.log(result)

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// const a = [1, 2, 3]
// const result = [4, 5, 6].concat(a)
// console.log(result)

// Дан массив ['js', 'css', 'jq']. Выведите в консоли  первый элемент.
// const a = ['js', 'css', 'jq']
// console.log(a[0])

// Дан массив ['js', 'css', 'jq']. Выведите в консоли последний элемент.
// const a = ['js', 'css', 'jq']
// console.log(a[a.length - 1])

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// const a = [1, 2, 3, 4, 5]
// const result = a.slice(0,3)
// console.log(result)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// const a = [1, 2, 3, 4, 5]
// const result = a.slice(3)
// console.log(result)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// const a = [1, 2, 3, 4, 5]
// const result = a.splice(1,1) + a.splice(2,1)
// console.log(a)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// const a = [1, 2, 3, 4, 5]
// const result = a.splice(1,3)
// console.log(result)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// const a = [1, 2, 3, 4, 5]
// const result = a.splice(2, 0, 'a', 'b', 'c')
// console.log(a)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// const a = [1, 2, 3, 4, 5]
// const result = a.splice(1, 0, 'a', 'b') + a.splice(6, 0, 'c') + a.splice(8, 0, 'e')
// console.log(a)

// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// const countElement = 5
// let array = []
// let symbol = 'x'
// for (let i = 0; i < countElement; i++) {
//     array.push(symbol)
//     symbol += 'x'
// }
// console.log(array)

// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
// const countElement = 5
// let array = []
// for (let i = 1; i < countElement + 1; i++) {
//     let symbol = '';
//     for (let j = 0; j < i; j++) {
//         symbol += i;
//      }
//      array.push(symbol);
//  }
// console.log(array)

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']
// const countElement = 5
// let array = []
// let symbol = 'x'
// function arrayFill(sym, count) {
//     for (let i = 0; i < count; i++) {
//         array.push(sym)
//     }
//     console.log(array)
// }
// arrayFill(symbol, countElement)

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// const array = [1, 2, 4, 4, 5];
// let result = 0
// for (let i = 0; i < array.length; i++) {
//     result += array[i];
//     if (result > 10){
//         console.log(array[i]);
//         break;
//     }
// }
// console.log(result)

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// const array = [1, 2, 3, 4, 5, 6];
// let arr = []
// for (let i = array.length - 1; i >= 0; i--) {
//     arr.push(array[i]);
// }
// console.log(arr)

// Дан массив с числами. Найти самое большое число в этом массиве и вывести в консоли.
// const array = [1, 2, 3, 4, 5];
// const maxNumArray = Math.max.apply(array)
// console.log(maxNumArray)

// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// let arr = [2, 5, 3, 9]
// let result = (arr[0] * arr[1]) + (arr[2] * arr[3])
// console.log(result)

// Дан массив из имен например ['john', 'jane', 'kate', 'peter']. Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.
// const names = ['john', 'jane', 'kate', 'peter']
// const namesUpperCase = names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
// console.log(namesUpperCase)