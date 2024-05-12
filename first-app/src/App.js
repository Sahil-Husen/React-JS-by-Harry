
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
function App() {

  // This stuff will change the NAV BAR Theme to Dark and Light logic
  // that is defined in the Navbar.js
  const [mode, setMode] = useState('light');   //whether dark mode is enable of not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      //  NOW  setting the body of the webpage to dark and light
      document.body.style.backgroundColor ="rgb(41 100 158)";
    }
    else {
      setMode('light')
      //  NOW  setting the body of the webpage to dark and light
      document.body.style.backgroundColor ="white";
    }
  }
  return (
    <>
      {/* Here I AM CREATING A PROPS Title ='any props' */}
      <Navbar title="Text_Utilizer" about="About" mode={mode} toggleMode={toggleMode}></Navbar> {/** yaha mode={mode} props pass kiya gaya hai jo   NAVBAR.JS RECIEVE KAREGA*/}
      <div className="container">
        <Alert></Alert>
        <TextForm className='container ' heading='This is a Word Analyzer by Sahil.' mode={mode}></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
