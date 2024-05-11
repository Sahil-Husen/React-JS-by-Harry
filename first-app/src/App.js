
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
   <>
   {/* Here I AM CREATING A PROPS Title ='any props' */}
   <Navbar title="WordUtilizer" about="About" ></Navbar>
   <div className="container">

    <TextForm className='container ' heading='This is a Word Analyzer by Sahil.'></TextForm>
    <About></About>
   </div>
   </>
  );
}

export default App;
