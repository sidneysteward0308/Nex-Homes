import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form'; // Assuming this is your login form
import RegForm from './components/RegForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/register" element={<RegForm />} />
      </Routes>
    </Router>
  );
}

export default App;