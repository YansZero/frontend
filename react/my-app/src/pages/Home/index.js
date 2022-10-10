import { useState, useEffect } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     // every refresh will do 每次觸發刷新都會做的事情
    //     if (data.length !== 0) {
    //         window.alert("add is ok!")
    //     }
    //     return ()=>{
    //         // 可以將取消榜定事件寫在這邊
    //         //you can write cancel binding event here
    //     }      
    

        
    // }, [data])

    useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    })

    return (
        <div className="app">
            <Edit addData={setData} />
            <List lisData={data} deleteData={setData} />
        </div>
    )
}

export default Home
