import logo from './logo.svg';
import './App.css';
import Valaszt from './components/Valaszt';
import Public from './components/Public';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Szótár program</h1>
      </header>
      <article>
      <div className='tema'>
        <Valaszt/>
      </div>
      <div className='szavak'>
      <Public/>
      </div>
      </article>
    </div>
  );
}

export default App;
