import React from 'react'
import "../styles/DescriptionPage.css"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import StartPage from './Description/StartPage'
import CodePage1 from './Description/CodePage1';
import CodePage2 from './Description/CodePage2';

function DescriptionPage() {
    const navi = useNavigate();
    const location = useLocation();

    const handleNext = () => {
        const currentPath = location.pathname.split('/').pop(); // 현재 경로의 마지막 부분 가져오기
        let nextPage;

        if (currentPath === 'start') {
            nextPage = '1'; // start에서 1로 이동
        } else {
            const nextNumber = parseInt(currentPath) + 1; // 현재 번호 + 1
            nextPage = isNaN(nextNumber) ? 'start' : nextNumber.toString(); // 숫자가 아니면 start로
        }

        nextPage = "/description/" + nextPage

        navi(nextPage);
    };

    return (
        <div className='house description'>
            <div className='title_container'>
                <button className='back_button' onClick={() => {navi(-1)}}>&lt;</button>
                <h1>설명</h1>
            </div>
            <div className='route_container'>
                <Routes>
                    <Route path='start' element={<StartPage/>}/>
                    <Route path='1' element={<CodePage1/>}/>
                    <Route path='2' element={<CodePage2/>}/>
                </Routes>
            </div>
            <div className='nexta_container'>
                <button className='next_button' onClick={handleNext}>다음으로</button>
            </div>
        </div>
    )
}

export default DescriptionPage
