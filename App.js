```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>This is the contact page.</p>
    </div>
  );
}

export default App; 
```