import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  let name = "Nasim Qureshi"
  return (
    <div className='App'>
      <Header />
      <Footer />
      <h1>{name}</h1>
    </div>
  );
}

export default App;
