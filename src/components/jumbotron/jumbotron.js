
import jumbotronDataEN from '../../utility/jumbotron-en.json';
import jumbotronDataID from '../../utility/jumbotron-id.json';
import './jumbotron.css';

export default function Jumbotron ({currentLanguage}) {
  return (
    <div className="jumbotron-wrapper">
      { currentLanguage === "english" 
        ? jumbotronDataEN.map(data => 
          <div 
            className={data.direction === "row" 
              ? "jumbotron-container row-jumbotron"
              : "jumbotron-container row-reverse-jumbotron"} 
            key={data.id}
          >

            <div 
              className={data.direction === "row" 
                ? "jumbotron-texts-wrapper textGotPaddingRight" 
                : "jumbotron-texts-wrapper"}
            >
              <h1 className={data.direction === "row" ? "jumbotron-title row-text" : "jumbotron-title row-reverse-text"}>{data.title}</h1>
              <h3 className={data.direction === "row" ? "jumbotron-subtitle row-text" : "jumbotron-subtitle row-reverse-text"}>{data.subTitle}</h3>
            </div>
            <div 
              className={data.direction === "row-reverse" 
              ? "jumbotron-images-wrapper imageGotPaddingRight" 
              : "jumbotron-images-wrapper"}>
              <img src={data.image} alt={data.alt} />
            </div>
          </div> 
        )
        : jumbotronDataID.map(data => 
            <div 
              className={data.direction === "row" 
                ? "jumbotron-container row-jumbotron"
                : "jumbotron-container row-reverse-jumbotron"} 
              key={data.id}
            >

              <div 
                className={data.direction === "row" 
                  ? "jumbotron-texts-wrapper textGotPaddingRight" 
                  : "jumbotron-texts-wrapper"}
              >
                <h1 className={data.direction === "row" ? "jumbotron-title row-text" : "jumbotron-title row-reverse-text"}>{data.title}</h1>
                <h3 className={data.direction === "row" ? "jumbotron-subtitle row-text" : "jumbotron-subtitle row-reverse-text"}>{data.subTitle}</h3>
              </div>
              <div 
                className={data.direction === "row-reverse" 
                ? "jumbotron-images-wrapper imageGotPaddingRight" 
                : "jumbotron-images-wrapper"}>
                <img src={data.image} alt={data.alt} />
              </div>
            </div> 
          )
      }
    </div> 
  )
}




