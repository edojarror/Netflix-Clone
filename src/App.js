import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page/home-page';
import SignInPage from './pages/sign-in/sign-in-page';
import './App.css';

function App() {
  const [ currentLanguage, setCurrentLanguage ] = useState("english");
  const handleSelectLanguage = (event) => {
    console.log(event.target.value);
    setCurrentLanguage(event.target.value)
  }
  return (
    // test implementing react-router
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage 
            handleSelectLanguage={handleSelectLanguage} 
            currentLanguage={currentLanguage}
            />  
          </Route>
        </Switch>
        <Switch>
          <Route path="/signin">
            <SignInPage
            handleSelectLanguage={handleSelectLanguage} 
            currentLanguage={currentLanguage}
            />  
          </Route>
        </Switch>
        
      </div>  
    </Router>
    
  );
}

export default App;
