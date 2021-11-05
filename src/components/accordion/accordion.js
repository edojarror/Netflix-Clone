import { useState } from 'react';
import parser from 'react-html-parser';
import './accordion.css';
import dataForAccordionEN from '../../utility/accordion-en.json';
import dataForAccordionID from '../../utility/accordion-id.json';
import InputEmail from '../input-email/inputEmail';

export default function Accordion ({currentLanguage}) {
    const [ isClosed, setIsClosed ] = useState(true)
    const handleClick = (event) => {
        setIsClosed(prev => !prev)
        if (isClosed) {
            console.log(event.target.nextSibling.style)
            event.target.nextSibling.className = "panel panel-clicked";
            event.target.className = "accordion accordion-active";
            event.target.style.marginBottom = 1+"px";
        } else {
            event.target.style.marginBottom = 8+"px";
            event.target.nextSibling.className = "panel panel-not-clicked"
            event.target.className = "accordion accordion-passive";
        }

    } 
    return (
        <div className="accordion-container">
            <div className="accordion-sub-container">
                <h1>{ currentLanguage === "english" ? "Frequently Asked Questions" : "Tanya Jawab Umum" }</h1>
                <div className="accordion-button-container">
                    { currentLanguage === "english"          
                        ? dataForAccordionEN.map(data => (
                            <div className="button-div" key={data.id}>
                                <button  className="acc-text accordion" onClick={handleClick} >
                                    {data.header}
                                </button>
                                <div className="panel panel-not-clicked">
                                    <p>{parser(data.body)}</p>
                                </div>
                            </div>    
                        ))
                        : dataForAccordionID.map(data => (
                            <div className="button-div" key={data.id}>
                                <button  className="acc-text accordion" onClick={handleClick} >
                                    {data.header}
                                </button>
                                <div className="panel panel-not-clicked">
                                    <p>{parser(data.body)}</p>
                                </div>
                            </div>    
                        ))
                    } 
                </div>         
            </div>

            <InputEmail />
            
            
        </div>
    )
}