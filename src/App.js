import './App.css';
import { ContactUs ,Footer , Home , Mussoorie , Dehradun , Rishikesh , Badrinath , Kedarnath , Nainital } from './containers';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/mussoorie-tour-package" element={ <Mussoorie />} />
        <Route path="/dehradun-tour-package" element={ <Dehradun />} />
        <Route path="/rishikesh-tour-package" element={ <Rishikesh />} />
        <Route path="/badrinath-tour-package" element={ <Badrinath />} />
        <Route path="/kedarnath-tour-package" element={ <Kedarnath />} />
        <Route path="/nainital-tour-package" element={ <Nainital />} />
      </Routes>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
