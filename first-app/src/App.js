
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
   <>
   {/* Here I AM CREATING A PROPS Title ='any props' */}
   <Navbar title="WordUtils" about="About"></Navbar>
   <div className="container">

    <TextForm className='container' heading='Enter the text for analyze below'></TextForm>
   </div>
   </>
  );
}

export default App;
