//function functionName(...para) {
//
//
//}

class Crad {
    constructor(initailName) {
        console.log('this',this);
        this.name = initailName;
        //this 
        //綁定function 方法
        //方法一：
        //this.helloooo = this.hello.bind(this);
        //被 new n次就會出現n次
    }

    //方法二 將function 變成箭頭函式
    // hello=()=> {
    //     console.log("hello "+ this.name);
    // }

    hello() {
        console.log("hello "+ this.name);
    }
    //會出現在 Card.Prototype.hello = function() {xxxx};
}

const c1 = new Crad('Jason');

console.log('c1',c1);
c1.hello();  //result= hello Jason

//this
//指向當下執行的來源

const a={name:'AA'};
a.helloooo=c1.hello;
a.helloooo();// result= hello AA 

//繼承

class Car{
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log("車子啟動");
    }
}

class Porshe extends Car {
    constructor(namePorse) {
        super(namePorse);
    }

    start2() {
        super.start();
        console.log(this.name +"車子排氣");
    }

    start() {      
        super.start();  
        console.log("將" + this.name +"引擎啟動");
    }
}

const p1 = new Porshe("Jason's Porshe");

console.log(p1);
p1.start();