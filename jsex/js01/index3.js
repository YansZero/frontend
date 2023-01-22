// window 彈窗
// document 拿html 屬性/元素

//callback 回呼
window.addEventListener('load', function(para){
    //網頁執行入口
    //console.log('load');
    const p1=document.getElementById('title')
    console.log(p1)
    //若前端script沒有寫在最下面 dom操作有可能會失效

    p1.innerText = "give jason money";
    const b1 = document.getElementById('btn');
    b1.addEventListener('click',()=>{
        console.log('haha')        
    })

    const box1 = document.getElementById('box');
    box1.innerHTML = '<p>yesyes</p>'

    const in1 = document.getElementById('input1');
    in1.addEventListener('keypress', function (e) {
        console.log('input',e.target.value)
    })

})