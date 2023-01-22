
//問題起源: 非同步的程式

// function delayAdd(n1,n2,delayTime) {
//     // 設定排程,延遲一段時間執行
//     //因為程式會往下執行 所以原本的會是null
//     window.setTimeout(function(){
//         return n1+n2;
//     },delayTime);
    
// }

// function test(){
//     let result =delayAdd(3,4,2000);
//     console.log('result',result);
// }

//解法1：
//callback 回呼函式
// function delayAdd(n1,n2,delayTime,callback) {
//     // 設定排程,延遲一段時間執行
//     //因為程式會往下執行 所以原本的會是null
//     window.setTimeout(function(){
//         // 延遲一段時間之後，計算加法，呼叫callback函式
//         callback(n1+n2);
//     },delayTime);
    
// }

// function test(){
//     delayAdd(3,4,2000,function(result){
//         console.log('result',result);
//     });    
// }

//解法2：
//Promise
// function delayAdd(n1,n2,delayTime) {
//     // 建立promiss物件： new Promise(執行函式)
//     // resolve：正確沒問題  reject：有異常
//     return new Promise(function(resolve,reject){
//         window.setTimeout(function(){
//             resolve(n1+n2); //工作完成,呼叫resolve函式,並且把結果透過函數傳遞進去
//         },delayTime);
//     });   
// }

// function test(){
//     // let promise = delayAdd(3,4,2000);
//     // promise.then(function(result){
//     //     // 執行正確的
//     //     console.log(result);
//     // }).catch(function(error){
//     //     // 執行時發生異常
//     //     console.log('error',error);
//     // });  
//     let promise1 = delayAdd(3,4,2000);
//     let promise2 = delayAdd(2,3,3000);
//     //多個 Promise都完成後 才繼續工作
//     Promise.all([promise1,promise2]).then(function(results){
//         let answer = results.reduce(function(total,value){
//             return total*value;
//         })
//         console.log('answer',answer);
//     })  
// }

//解法3：
//async/await 語法（背後原理就是promise）： 簡化promise語法
//一定有一個函式會回傳Promise物件
//改善呼叫的部份,若函式中使用await 需要在函式前加上async
function delayAdd(n1,n2,delayTime) {
    // 建立promiss物件： new Promise(執行函式)
    return new Promise(function(resolve,reject){        
        window.setTimeout(function(){
            console.log('hello');
            resolve(n1+n2); //工作完成,呼叫resolve函式,並且把結果透過函數傳遞進去
        },delayTime);
    });   
}

async function test(){
    console.log(1);
    try {
        let result1 = await delayAdd(3,4,2000);
        let result2 = await delayAdd(2,3,3000);
        let answer = result1 * result2;
        console.log(answer);    
    } catch(e) {
        // await 中間有異常
    }
}