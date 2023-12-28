import React, {useState} from "react";
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
function ImageChange () {
    //초기 이미지 경로는 ../img/image1.jpg로 설정돼있는 
    //image1으로 초기 이미지 설정
    const [imageSrc, setImageSrc] = useState(image1);
    const [isClick, setIsClick] = useState(true);

    //이미지를 클릭할 때마다 이미지가 변경될 수 있도록 
    // 클릭 함수 만들기

    /*
    이미지 두 가지를 활용해서
    true false로 변환할 때 사용하는 코드
    const handleClick = () => {
        if (isClick) {
            setImageSrc(image2);
            //setIsClick(false);
        } else { //거짓일 때 //false 로 돼있는 값을 true 변경
            setImageSrc(image1);
            //setIsClick(true);
        }
    }
*/
    //이미지 3개를 활용해서 클릭할 때 각 이미지를 보여주고
    //첫 이미지로 돌아오는 메서드
    // == 동등연산자로 자동으로 형 변환을 수행하기 때문에
    // 데이터 타입이 다를 경우에도 변환을 일부 시도하기도 함
    // === 일치연산자로 값과 데이터 타입이 모두 값아야지 
    // true 를 변환함

    const handleClick = () => {
        if (imageSrc === image1) {
            setImageSrc(image2);
        } else if (imageSrc === image2) { //거짓일 때 //false 로 돼있는 값을 true 변경
            setImageSrc(image3);
        } else {
            //image가 image3일 경우 다시 처음 이미지로 돌아가게 설정
            setImageSrc(image1);
        }
    }



    return (
        <div>
            <img src={imageSrc} onClick={handleClick}/>
        </div>
    )
}
export default ImageChange;