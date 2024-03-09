import './App.css';
import { Header } from './components/Header';
import "./assets/js/script";
import { Services } from './components/Services';
import { About } from './components/About';
import { Qualities } from './components/Qualities';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <About/>
      <Qualities/>
      <Features/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
