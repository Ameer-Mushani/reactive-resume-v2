import './App.css';
import TopNav from './components/Navbar/Navbar';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesContainer from './components/ParticlesContainer';

function App() {

  return (
    <div className="App">
      <ParticlesContainer className="particles"/>
      <TopNav></TopNav>
      <About></About>

    </div>
  );
}

export default App;
