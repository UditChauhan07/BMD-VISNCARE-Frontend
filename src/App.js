import logo from './logo.svg';
import './App.css';
import Visncare from './Components/Pages/Visncare/Visncare';
import Vifilcon from './Components/Pages/Vifilcon/Vifilcon';
import Inquires from './Components/Pages/Inquires/Inquires';
import Footer from './Components/Pages/Footer/Footer';
import Benefits from './Components/Pages/Benefits/Benefits';

function App() {
  return (
    <div className="App">
      <Visncare />
      <Vifilcon />
      <Benefits/>
      <Inquires />
      <Footer/>
    </div>
  );
}

export default App;
