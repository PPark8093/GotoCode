import React from 'react'
import "../styles/DescriptionPage.css"
import { Route, Routes } from 'react-router-dom'
import StartPage from './Description/StartPage'

function DescriptionPage() {
    return (
        <div className='house description'>
            <div className='title_container'>
                <h1>설명</h1>
            </div>
            <div className='route_container'>
                <Routes>
                    <Route path='start' element={<StartPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default DescriptionPage
