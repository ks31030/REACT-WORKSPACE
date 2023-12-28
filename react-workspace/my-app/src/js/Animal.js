//컴포넌트가 function , class로 묶어  
//재사용할 수 있도록 만들어준 
//함수나 클래스 
import React, {useState,useEffect} from "react";
function AnimalSound(){
    const [animal, setAnimal] = useState('cat');
    useEffect(() => {
        //마운트될 때 바로 실행이 되는 부분
        console.log(`시작 :${animal} : 야옹`);
        //언마운트될 때 실행되는 함수
        return () => {
            console.log(`종료`);
        };
    }, [animal]); //animal이 바뀔때마다 실행

    const handleSound = (newAnimal) => {
        setAnimal(newAnimal);
    }
    return(
        <div>
            <h1>동물 소리 앱</h1>
            <p>{animal} 소리는</p>
            <button onClick={() => handleSound('cat')}>Cat</button>
            <button onClick={() => handleSound('dog')}>Dog</button>
            <button onClick={() => handleSound('bird')}>Bird</button>
        </div>

    )
}
export default AnimalSound;


        // console.log안에 함수나 변수명을 
        //사용하고자 한다면
        // '' "" 대신 `` 사용