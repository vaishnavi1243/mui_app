
import './App.css';
import Appbar from './Components/Appbar'
import Mainpage from './Components/Mainpage';
import Footer from './Components/Footer';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Appbar/>
      <Mainpage/>
      <Footer/>
    </div>
  );
}

export default App;
