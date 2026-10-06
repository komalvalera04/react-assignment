import TrendingSongs from './components/TrendingSongs';

function App() {
  return (
    <div className="App container">
      <h1>Welcome to My React Zomato App</h1>
      <TrendingSongs/><br/><br/>

      <h3>Virtual DOM explanation</h3>
      <p>
        React uses a Virtual DOM, which is a lightweight copy of the actual browser DOM. <br/>When something changes, React first updates the Virtual DOM and compares it with the previous version. <br/>It then identifies only the parts that actually changed and updates those parts in the real DOM. <br/>This avoids unnecessary DOM updates and makes UI rendering more efficient.
      </p>
    </div>
  );
}

export default App;
