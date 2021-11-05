import footerDataEN from '../../utility/footer-en.json';
import footerDataID from '../../utility/footer-id.json';
import './footer.css';
import SelectLanguage from '../select-language/select-language';

export default function Footer ({currentLanguage}) {
    return (
        <div className="footer-container">
            <div className="footer-container-2">
                <h1 className="title">{ currentLanguage === "english" ? "Questions? " : "Ada pertanyaan? " }
                    <a href="asdf">{ currentLanguage === "english" ? "Call 007-803-321-2130" : "Hubungi 007-803-321-2148" }</a>
                </h1>               
                <div className="footer-ul-container">
                    <ul className="footer-ul"> 
                    { currentLanguage === "english"
                        ? footerDataEN.map(data => 
                            <li key={data.id} > 
                                <a href="asdf">{data.text}</a> 
                            </li> 
                        )
                        : footerDataID.map(data => 
                            <li key={data.id} > 
                                <a href="asdf">{data.text}</a> 
                            </li> 
                        )
                    }
                    </ul>
                </div>
                <div className="footer-select-subtitle">
                    <SelectLanguage isBottomSelect="true" />
                    <h1 className="subtitle">Netflix Indonesia</h1>    
                </div>
            </div>
        </div>
    )
}