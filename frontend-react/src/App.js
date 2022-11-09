import { Header, About, Testimonials, Skills, Work, Footer } from './container/index';
import Navbar from './component/Navbar/Navbar';

import './App.scss';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
