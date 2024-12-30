import React from 'react'
import "../styles/HomePage.css"
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navi = useNavigate();

    return (
        <div className='house'>
            <div className='title_container'>
                <h1>개발자 해보기</h1>
            </div>
            <div className='about_container'>
                <h1>이런 사이트를 만들고 싶다고?</h1>
                <h2>그럼 <span className='highlight_span'>시작하기</span>를 눌러봐!</h2>
                <div className='about_inner_container'>
                    여기에 뭔가 넣으면 좋겠는데<br/>
                    크기도 좀 키우고
                </div>
            </div>
            <div className='contenta_container'>
                <button className='button start_button' onClick={() => {navi("/description/start")}}>시작하기</button>
                <button className='button' onClick={() => window.open("https://developer.mozilla.org/ko/docs/Web/CSS")}>MDN 읽기<span className='additional_description_span'>(css)</span></button>
                <button className='button' onClick={() => navi("/about")}>만든 이유</button>
                <button className='button' onClick={() => window.open("https://www.mozilla.org/ko/firefox/browsers/browser-history/")}>웹의 역사</button>
            </div>
            <footer className="footer">
                <p>&copy; 2024 <a href='https://github.com/PPark8093' target='_blank'>PPark8093</a>. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default HomePage
