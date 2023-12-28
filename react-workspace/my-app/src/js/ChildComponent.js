import React from 'react';
//function과 const로 작성한 함수는 큰 차이가 없음
//보통 const 작성한 함수는 함수 표현식 (Function Expression)
//const ChildComponent = (props) => <div>{props.message}</div>;
// const는 주로 간단하게 함수를 표현할 때 많이 사용

// function으로 작성한 함수는 함수 선언식 (Function Declaration)
function ChildComponent(props) {
    return <div>{props.message}</div>

}

export default ChildComponent;