import React,{useState} from 'react';
// useState : 상태를 관리하기 위해 사용되는 함수
//사용법 : 배열형식으로 사용을 하며, 
//첫번째 배열은 현재 상태값   두번째 배열은 상태 업데이트 하는 값
// const [count, setCount] = useState(0);

function Counter () {
  //자바스크립트 코드 작성하는 공간
  // [초기값, 변경될 값] = 초기값 설정해주는 공간
  const [count, setCount] = useState(3);

  const increament = () => {
    setCount(count + 1);
  }
  return ( //html 태그 코드는 return 안에 작성해줌
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increament}>증가시키는 버튼</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;


    //순수자바스크립트 에서는 onclick 작성을 했지만
    //리액트자바스크립트 에서는  onClick C를 대문자로 활용하는
    //카멜케이스를 사용함 