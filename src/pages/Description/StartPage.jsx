import React from 'react'
import "../../styles/Description/StartPage.css"

function StartPage() {
    return (
        <div className='start'>
            <div className='block_text'>
                <h1 className='title1'>웹 사이트란</h1>
                <text className='title2'>인터넷에서 정보를 제공하는 여러 페이지들이 모인 공간</text>
            </div>
            <br/>
            <div className='horizon_block'>
                <div className='block_text'>
                    <text className='title1'>웹 사이트의 구성요소</text>
                    <text className='title2'>1. html</text>
                    <text className='title2'>2. javascript</text>
                    <text className='title2'>3. CSS</text>
                </div>
                <hr className='vertical_line'/>
                <div className='block_text'>
                    <text className='title1 additional_'>html, javascript, CSS는 뭔가요?</text>
                    <text className='title2'>
                        웹 사이트의 구성요소로서, <br/>
                        웹의 토대를 마련하고 어떤 행동을 할건지 정하고 꾸미는 역할을 수행하는 것 <br/>
                        (html: 토대, javascript: 행동, CSS: 꾸미기)
                        </text>
                </div>
            </div>
            <br/>
            <div className='block_text'>
                <text className='title1'>React</text>
                <text className='title2'>
                    javascript와 html을 한번에 사용할 수 있도록 하는 것<br/>
                    (심지어 CSS도 함께 쓸 수 있음)
                    </text>
            </div>
            <br/>
            <div className='block_text'>
                <text className='title1'>React를 쓰는 이유</text>
                <text className='title2'>
                    편리함<br/>
                    </text>
            </div>
            <br/>
            <div className='block_text'>
                <text className='title1'>React의 기본 구조</text>
                <text className='title2'>
                    파일 확장자: <code> .jsx</code> (다른 것도 되나, 보편적으로 .jsx를 사용)<br/>
                    <div className='description_block'>
                        <text className='title2'>
                            javascript<br/>
                            함수<br/>
                            ├ useState 등 변수 선언<br/>
                            ├ javascript<br/>
                            └ return
                        </text>
                    </div>
                </text>
            </div>
        </div>
    )
}

export default StartPage
