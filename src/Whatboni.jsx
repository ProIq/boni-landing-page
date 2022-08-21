import React from 'react';
import path from "./images/path.png";
import "./what.css";
function Whatboni() {
    return (
        <>
        <div className="container">
            <div className="round">
                <div className="circle">
                    <div className="text">
                        BONI
                        <div className="content1">
                            Meaning - First sale of the day
                        </div>
                        boˈnɪ
                    </div>
                </div>
            </div>
            <div className="cont">
                <div className="head">
                    What is Boni?
                </div>
                <div className="material">
                    Boni is a platform for small local businesses to manage and grow their business digitally
                </div>
                <div className="imgpath">
                    <img src={path} alt="" className="path" />
                    <div className="Boni">
                        <span className="boni">
                            List your Business
                            on Boni
                        </span>
                    </div>
                    <div className="bino">
                        <span className="Bino">
                            Get found by customers on Bino
                        </span>
                    </div>
                </div>
            </div>
            <button className="button1">
                <span className='get-app'>Get App</span>
            </button>
            <button className="button2">
                <span className='get-app'>Get App</span>
            </button>
        </div>
        <div className="why-boni">
            <div className="text1">
            Why Boni?
            </div>
            <div className="text2">
            There are over 50 million small local businesses all over India serving their neighbourhood customers. 
            </div>
            <div className="circle1">
                <span className='circle1-text1'>50+<br/> million</span>
                <span className="circle1-text2">small local businesses</span>
            </div>
            <div className="exclaim">
                <div className="income">
                But these businesses are stuck in a 
                low income trap
                </div>
                <div className="disclaimer1">
                    <span className="disclaim1">!</span>
                </div>
                <div className="disclaimer2">
                    <span className="disclaim1">!</span>
                </div>
                <div className="disclaimer3">
                    <span className="disclaim1">!</span>
                </div>
                <div className="disclaimer4">
                    <span className="disclaim1">!</span>
                </div>
                <div className="d1-text">
                Limited customer discovery
                </div>
                <div className="d2-text">
                No engagement beyond usual customers
                </div>
                <div className="d3-text">
                Limited access to business tools
                </div>
                <div className="d4-text">
                No access to credit
                </div>
            </div>
        </div>
        </>
    )
}

export default Whatboni