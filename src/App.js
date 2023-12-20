import './App.css';
import { Routes, Route } from 'react-router-dom';
import DocumentUpload from './components/documentUpload';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DocumentUpload />} />
    </Routes>
  );
}

export default App;
