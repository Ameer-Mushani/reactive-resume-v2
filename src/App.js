import logo from './logo.svg';
import './App.css';
import TopNav from './components/Navbar/Navbar';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import PartticlesContainer from './components/ParticlesContainer';

function App() {

  return (
    <div className="App">
      <PartticlesContainer> </PartticlesContainer>
      <TopNav></TopNav>
      <About></About>
      
    </div>
  );
}

export default App;
