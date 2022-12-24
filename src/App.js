import './App.css';
import { ContactUs ,Footer , Home , Mussoorie , Dehradun , Rishikesh , Badrinath , Kedarnath , Nainital } from './containers';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/mussoorie" element={ <Mussoorie />} />
        <Route path="/dehradun" element={ <Dehradun />} />
        <Route path="/rishikesh" element={ <Rishikesh />} />
        <Route path="/badrinath" element={ <Badrinath />} />
        <Route path="/kedarnath" element={ <Kedarnath />} />
        <Route path="/nainital" element={ <Nainital />} />
      </Routes>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
