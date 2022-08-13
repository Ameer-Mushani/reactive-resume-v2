import './App.css';
import TopNav from './components/Navbar/Navbar';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesContainer from './components/ParticlesContainer';
import Projects from './components/Projects/Projects';
import Timeline from './components/Timeline/Timeline';

function App() {

  return (
    <div className="App">
      <ParticlesContainer className="particles"/>
      {/* <TopNav></TopNav> */}
      <About></About>
      <Projects></Projects>
      <Timeline></Timeline>
    </div>
  );
}

export default App;
