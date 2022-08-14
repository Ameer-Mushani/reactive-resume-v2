import './App.css';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesContainer from './components/ParticlesContainer';
import Projects from './components/Projects/Projects';
import Timeline from './components/Timeline/Timeline';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

function App() {

   return (
      <div className="App">
         <SimpleBar className='simple-scrollbar' style={{ maxHeight: '100vh' }}>
            <ParticlesContainer className="particles" />
            <About></About>
            <Projects></Projects>
            <Timeline></Timeline>
         </SimpleBar>
      </div>
   );
}

export default App;
