import React from 'react';
import ExecutiveSummary from './components/ExecutiveSummary';
import Timeline from './components/Timeline';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Methodology from './components/Methodology';
import RawData from './components/raw-data';
import Graphs from './components/Graphs';
import { IoIosHome, IoIosArrowUp } from "react-icons/io"; // import Home and ArrowUp icons
import ScrollToTop from 'react-scroll-up';




function App() {
  return (
    <Router>
      <div className="App">
      
      <h1>LOP/MLO   Evaluation</h1>
      <div className="toolbar">
          <Link to="/"><IoIosHome size={24} /></Link>
          <ScrollToTop showUnder={160}>
              <IoIosArrowUp size={24} />
          </ScrollToTop>
      </div>
      <br></br>
      <Timeline />
        <Routes>
      <Route path="/" element={<ExecutiveSummary />} />  {/* Empty component, only Timeline will show */}
          <Route path="/executive-summary" element={<ExecutiveSummary />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/raw-data" element={<RawData />} />
          <Route path="/graphs" element={<Graphs />} />
          
        </Routes> 
        <Timeline />
    </div>
    </Router>
    
  );
}

export default App;

