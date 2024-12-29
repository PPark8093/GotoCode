import React from 'react'
import "../styles/AboutPage.css"

function AboutPage() {
    return (
        <div className='house'>
            <div className='title_container'>
                <h1>About</h1>
            </div>
            <div className='content_container'>
                <h1>만든이유?</h1>
                <h2>1. 2025 동아리 대비</h2>
                <h2>2. 실력 양성</h2>
                <h2>3. 지식 정리 및 자랑</h2>
                <br/>
                <h1>제작</h1>
                <h2>개발자 : PPark8093</h2>
                <h2>Github : <a href='https://github.com/PPark8093' target='_blank'> PPark8093</a></h2>
                <h2>Email : parkjuwon8093@outlook.kr</h2>
            </div>
        </div>
    )
}

export default AboutPage
