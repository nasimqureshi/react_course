// import logo from './logo.svg';
// import './App.css';
import Person from './Components/Person';
import Demo from './Demo';
// import Man from './Components/Man';

function App() {
  
  return (
    <div className='App'>
      {/* <Demo number= "1"></Demo>
      <Person name= "Nasim" age ="69" />
      <Demo number= "2"></Demo>
      <Person name= "Qamar"  age = "57"/>
      <Demo number= "3"></Demo>
      <Person name= "Samreen" age = "41" /> */}
      <person name="Nasim Qureshi" age="69" />
      <button type='button' onClick={this.buttonClickHandler} >Click Me</button>
    </div>
  );
}

export default App;
