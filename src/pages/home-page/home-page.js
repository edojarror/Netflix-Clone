
import Header from "../../components/header/header";
import Jumbotron from '../../components/jumbotron/jumbotron';
import Accordion from '../../components/accordion/accordion';
import Footer from '../../components/footer/footer';

function HomePage({handleSelectLanguage, currentLanguage}) {
    return (
        <div>
            <Header handleSelectLanguage={handleSelectLanguage} currentLanguage={currentLanguage} />
            <Jumbotron currentLanguage={currentLanguage} />
            <Accordion currentLanguage={currentLanguage} />
            <Footer currentLanguage={currentLanguage}  />
        </div>
    )
}

export default HomePage;