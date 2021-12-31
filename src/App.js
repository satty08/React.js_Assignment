import './App.css';
import About from './Components/About/About';
import FAQS from './Components/FAQ/FAQS';
import Header from './Components/Header/Header';
import Roadmap from './Components/Roadmap/Roadmap';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Roadmap />
      <Team />
      <FAQS />
    </div>
  );
}

export default App;
