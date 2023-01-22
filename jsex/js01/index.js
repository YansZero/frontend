// string
let title = '提示訊息:';
let title1= '錯誤';
let title2= '成功';

let alert1= title + title1;
let alert2= title + title2;

console.log(alert1);
console.log(alert2);

// number
let score = 100;
console.log('score',score);
// score = score **2;
// console.log('score',score);
// + - * / %

// true or undefined
let aaa=undefined;
let bbb=true;
console.log('aaa',aaa);
console.log('bbb',bbb);

// const var let
// const 參數不能改
// let 可以取代var
const xxx=123;
console.log(xxx);
//change const error 
// xxx=456;  //無法異動 會出現錯誤訊息
// Uncaught TypeError: Assignment to constant variable.at index.js:27:4

// array
let classA=['小明','小美','小王'];
classA.push('小黃');
console.log('class member:',classA);

//object
let card = {
    name:'小王',
    address:'Taipei xyz commmunity',
    age:18
};

let photo = {
    name:'xxx.jpg',
    url:'htts://127.0.0.1/abc/xxx.jpg',
    description:'this is xxx image',
    comment:['haha','error','what?']
};


let photo2 = {
    name:'xxx2.jpg',
    url:'htts://127.0.0.1/abc/xxx2.jpg',
    description:'this is xxx2 image',
    comment:['haha','error','what?']
};

let photoList=[photo,photo2];

console.log('photo name',photo.name);
console.log('photo2 url',photo2.url);

//true or false
// && || !
// && all condition true return true, else false
// || one condition is true return true

// let con = !(true && false);

// console.log('con is:',con);

// if (con) {
//     console.log('this is true condition');
// }
// else {
//     console.log('this is false condition');
// }

// > < >= <= === !==
let con = score===100;
console.log('con is:',con);

let i=1;
let j=2;

console.log('i++ =',i++);
console.log('++i =',++i);
console.log('j-- =',j--);
console.log('--j =',--j);


//function
function addMoney(x=0,...y) {
    let result = x;
    y.map(data=>result += data);
    return  result;
}

console.log('money',addMoney(1,2,3,4,5));

let abcd=()=>{
    console.log("aaaa");
}

abcd();