import { useState } from 'react';
import HomePage from './pages/home-page/home-page';
import './App.css';

function App() {
  const [ currentLanguage, setCurrentLanguage ] = useState("english");
  const handleSelectLanguage = (event) => {
    console.log(event.target.value);
    setCurrentLanguage(event.target.value)
  }
  return (
    <div className="App">
      <HomePage 
        handleSelectLanguage={handleSelectLanguage} 
        currentLanguage={currentLanguage}
        />
    </div>
  );
}

export default App;
