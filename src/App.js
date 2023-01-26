import './App.css';
import freecodecampLogo from '../src/images/freecodecamp-logo.png'
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react'; // hooks

function App() {


  const [ numberOfClicks, SetNumberClicks] = useState(0);

  const  clickManager = () =>{
    SetNumberClicks(numberOfClicks + 1)
  };

  const resetCounter = () => {
    SetNumberClicks(0)
  };


  return (
    <div className="App">

      <div className='freecodecamp-logo-container'>

        <img 
        className='freecodecamp-logo' 
        src={freecodecampLogo} 
        alt='Freecodecamp Logo' 
        />
      </div>

      <div className='principal-container'>

        <Counter 
          clicksNumber={ numberOfClicks }
        />

        <Button 
          text = 'click'
          buttonClick={true}
          clickDri={clickManager}
        />

        <Button 
          text = 'Reset'
          buttonClick={false}
          clickDri ={resetCounter}
        />

      </div>

    </div>
  );
}

export default App;
