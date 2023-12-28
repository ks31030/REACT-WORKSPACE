# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


##todo List를 만들며 알게된 점
   //복사된 배열에서 지정된 자리값(index)를 1개 제거하겠다는 의미
    //updateTodos : 복사된 배열

    // slice splice : 배열 조작
    // slice : 배열 일부분 복사해서 새로운 배열 반환
    // 원본에 있던 배열은 변경되지 않지만 시작 - 종료 인덱스

    // splice : 배열의 내용을 수정하거나 삭제하고, 필요에 따라
    // 새로운 요소를 추가할 수 있음
//my-app 
// map 배열 객체 메서드
// 배열의 각 요소에서 함수를 호출하고, 그 함수의 반환값으로
// 새로운 배열을 생성
/*
예제코드 : 
  const newArray = array.map((value, index, array) => {});

  //value : 현재 배열 안에 있는 배열의 요소
  //index : 배열 안에 있는 자리값
  //array : 배열의 원본
  //반환값{} : 새로운 배열에서 해당하는 인덱스에 들어갈 값


  {todos.map((todo, index) => (
    //key={index} map 함수로 요소를 생성할 때 
    //각 요소에 고유한 key 값을 지정
    // react 각 값에 대한 번호를 부여함으로써 목록을 부여된 번호로
    //추적하기 위해 사용됨
    <li key={index}> 
      {todo}
      <button onClick={()=>removeTodo(index)}>삭제하기</button>
    </li>
  ))}

  array.map((요소, 자리값,만약 새로운 배열이 필요하다면 배열 값 넣어줌)=> {
    //리턴값으로 새로운 배열을 구성
  });
  */