// Zadanie 1.

class Stack {
    constructor() {
        this.data = {};
        this.highestIndex = 0;
    }

    push(elem) {
        if(this.highestIndex !== 0) {
            this.highestIndex++;
        }
        this.data[this.highestIndex] = elem;
    }

    pop() {
        delete this.data[this.highestIndex];
    }
}

// Zadanie 2.

Function.prototype.bindClone = function(obj) {
    // const funcIntoString = this.toString();
    // const params = funcIntoString.match(/(?<=\()(.*?)(?=\))/)[0]; // Pytanie: pomimo braku flagi g znajduje oba wystąpienia
    // const paramsArr = params.split(', ');
    // const bodyFunc = funcIntoString.substring(funcIntoString.indexOf('{') + 1, funcIntoString.lastIndexOf('}')).trim();

    // const newFunc = new Function(paramsArr, bodyFunc);
    // obj.newFunc = function() {
    //     return newFunc;
    // };
    // const blabla = obj.newFunc;
    // return blabla();

    const test = function(callback) {
        callback();
    }
    return test(this);

    // const wrapper = function(obj) {
    //     obj.func = new Function(paramsArr, bodyFunc);
    //     const bla = obj.func;
    //     return bla;
    // }(obj);
    // return wrapper(obj);

    // const newObj = { obj, func: new Function(paramsArr, bodyFunc) };
    // const newObj = { ...obj, newFunc(params) {
    //     return bodyFunc;
    // } };
    // function newFunc() {
    //     newObj.func();
    // }
    // console.log(newObj.newFunc(paramsArr));
}

const foo = function(param1, param2) {
    console.log(this, param1, param2);
}
  
const fooBinded = foo.bindClone({ test: 'Bar' });
fooBinded('baz', 'eggs'); // { test: 'Bar' },  'baz', 'eggs';

