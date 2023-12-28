import React, {useState,useEffect} from "react";

function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `남은티켓 : ${count}`;
    });

    /*
    <button onClick={() => setCount(count + 1)}>Click</button>
   
    위 버튼 클릭과 const increament로 작성해준 메서드는
    동일한 효능을 지닌다.

    <button onClick={() => setCount(count + 1)}>Click</button>
            
    const increament = () => {
        setCount(count + 1);
    }
     */
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
            {/*  <button onClick={increament}>Click</button>*/}
        </div>
    )
}
export default Timer;