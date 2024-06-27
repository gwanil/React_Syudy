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
  let [따봉, 따봉변경] = useState(0);

  // function 함수() {
  //   console.log(1);
  // }

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
          let copy2 = [...글제목];
          copy2.sort();
          글제목변경(copy2);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}
      >
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
            }}
          >
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
        <h4>{글제목[2]}</h4>
        <p>6월 27일 발행</p>
      </div>
    </div>
  );
}

export default App;
