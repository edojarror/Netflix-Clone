
import { useEffect, useState } from 'react';
import './input-form.css';

export default function InputForm ({type, labelFor, textOnLabel, className, currentLanguage}) {
    
    const [ noTextInputed, setNoTextInputed ] = useState(true);
    const [ inputValue, setInputValue ] = useState("");
    const [showPasswordTextContent, setShowPasswordTextContent] = useState("TAMPILKAN");

    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
        console.log(noTextInputed === true)  
    } 

    const onClickHandler = (event) => {
        console.log(showPasswordTextContent);
        if(inputValue !== "") {
            if(event.target.textContent === "SHOW") {
                event.target.previousSibling.previousSibling.setAttribute("type", "text");
                event.target.textContent = "HIDE";
            } else if(event.target.textContent === "HIDE") {
                event.target.previousSibling.previousSibling.setAttribute("type", "password");
                event.target.textContent = "SHOW"
            } else if(event.target.textContent === "TAMPILKAN") {
                event.target.previousSibling.previousSibling.setAttribute("type", "text");
                event.target.textContent = "SEMBUNYIKAN";
                setShowPasswordTextContent(event.target.textContent);
            } else if(event.target.textContent === "SEMBUNYIKAN") {
                event.target.previousSibling.previousSibling.setAttribute("type", "password");
                event.target.textContent = "TAMPILKAN"
                setShowPasswordTextContent(event.target.textContent);      
            }
        }
    }

    useEffect(() => {
        if(inputValue === "") {
            setNoTextInputed(true);
        } else if(inputValue !== ""){
            setNoTextInputed(false);
        }
    },[inputValue])
    
    return (
        <div>
            <div className="input-container">
                <input 
                    type={type} 
                    className={className} 
                    placeholder=""
                    value={inputValue}
                    onChange={onChangeHandler}
                >
                </input>
                <label 
                    className={noTextInputed ? "" : "textInputed"}
                    htmlFor={labelFor} 
                >
                    {textOnLabel}
                </label>
                {
                    type === "password" && currentLanguage === "english" 
                        ?   <button className="showText" onClick={onClickHandler}>
                                SHOW
                            </button>
                        :   null
                        
                }
                {
                    type === "password" && currentLanguage === "indonesia"
                        ?   <button className={showPasswordTextContent === "TAMPILKAN" ? "showTextBahasa" : "showTextBahasa-2"} onClick={onClickHandler}>
                                TAMPILKAN
                            </button>
                        :   null 
                }   
                
            </div>
        </div>
    )
}
