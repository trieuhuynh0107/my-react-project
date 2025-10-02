
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App colorful-bg">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="rainbow-text">Welcome to Your Colorful Website!</h1>
        <p className="subtitle">Built with React and bursting with color.</p>
        <div className="colorful-buttons">
          <button className="btn btn-pink">Pink</button>
          <button className="btn btn-blue">Blue</button>
          <button className="btn btn-yellow">Yellow</button>
        </div>
      </header>
      <main className="main-content">
        <section className="card card-gradient">
          <h2>Vibrant Section</h2>
          <p>Enjoy a modern, lively design with gradients and bold colors.</p>
        </section>
        <section className="card card-solid">
          <h2>Solid Colors</h2>
          <p>Mix and match your favorite shades for a unique look.</p>
        </section>
      </main>
      <footer className="footer">
        <span>Made with <span className="heart">♥</span> in React</span>
      </footer>
    </div>
  );
}

export default App;