import MyFooter from 'components/MyFooter';
import Projects from 'MainContents';
import './App.scss';

function App() {
  return (
    <div className="App">
      <main>
        <header></header>
        <Projects></Projects>
        <footer><MyFooter></MyFooter></footer>
      </main>
    </div>
  );
}

export default App;
