// WARNING 메시지 끄는 법
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';

  // a : 남자코트추천이 들어있음, b : state 변경도와주는 함수
  // stat 언제쓰는가? -> 변동시 자동으로 html에 변경되게 만들고 싶을 때
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [logo, setLogo] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  // 동적인 UI 만드는 step
  // 1. html css로 미리 UI 디자인 다 놓기
  // 2. UI의 현재 상태를 state로 저장해두고
  // 3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성
  // state변경함수는 set을 앞에 붙이는게 관습
  let [modal, setModal] = useState(false);

  // function 함수() {
  //   console.log(1);
  // }

  // 모든 array 자료 우측에는 map()를 붙일 수 있음
  // 기능1. array에 들어있는 자료갯수만큼 그 안에 있는 코드를 반복실행
  // 기능2. 콜백함수에 파라미터 아무렇게나 작명하면 그 파라미터는 어레이 안에 있는 모든 자료를 하나씩 출력
  // 기능3. return 오른쪽에 뭐 적으면 array로 담아줌 그리고 map() 쓴 자리에 남겨줌
  // [1, 2, 3].map(function (a) {
  //   console.log(a);
  // });

  return (
    <div className='App'>
      {/* JSX 문법1. class 넣을 땐 className */}
      <div className='black-nav'>
        {/* JSX 문법2. style 넣을 땐 style={{이름:'값'}} */}
        {/* <h4 style={{ color: 'red', fontSize: '16px' }}>블로그임</h4> */}

        {/* 블로그 제목은 잘 변경되지 않기 때문에 굳이 안써도됨.. */}
        {/* <h4>{logo}</h4> */}

        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}>
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}>
        글수정
      </button>

      <div className='list'>
        {/* JSX 문법2. 변수꽂을 땐 {변수명} */}
        {/* <h4>{post}</h4> */}

        <h4>
          {글제목[0]}
          {/* 클릭시 뭔가 실행하고 싶으면 onClick={함수} 이렇게 이벤트 핸들러를 달아서 사용  */}
          {/* state 변경하려면 변경함수를 꼭 이용해야함 state변경함수는 () 안에 입력한걸로 기존 state를 갈아취워줌 */}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}>
            👍
          </span>
          {따봉}
        </h4>
        <p>6월 27일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>6월 27일 발행</p>
      </div>

      <div className='list'>
        <h4
          onClick={() => {
            setModal(!modal);
          }}>
          {글제목[2]}
        </h4>
        {modal == true ? <Modal /> : null}
        <p>6월 27일 발행</p>
      </div>

      {/* <Modal></Modal> */}
      {/* <Test /> */}
      {/* {modal == true ? <Modal /> : null} */}

      {글제목.map(function (a, i) {
        return (
          <div className='list'>
            <h4>
              {글제목[i]}{' '}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                }}>
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>6월 27일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

// html은 단점이 너무 더러워짐 그래서 컴포넌트를 생성함
// 1. function 만들고 (위의 function말고 밑에 새로 생성)
// 2. return() 안에 html 담기
// 3. <함수명></함수명> 쓰기 (원래 쓰고자 한 자리에 쓰기)

// 컴포넌트를 그럼 언제 만들면 좋은가?
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지 (페이지 전환할때)
// 3. 자주변경되는 것들

// 이런 식으로 만들어도 됨 (const를 사용하는 이유는 나중에 변경되었을 때 오류를 알려주기 때문)
// const Modal = () => {
//   return <div></div>;
// };

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// const Test = () => {
//   return (
//     <div>
//       <p>안녕하세요</p>
//     </div>
//   );
// };

export default App;
