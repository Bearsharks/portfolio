import Intro from 'components/Intro';
import MyFooter from 'components/MyFooter';
import Projects from 'MainContents';
import Modal from 'popups/Modal';
import './App.scss';

function App() {
  return (
    <div className="App">
      <main>
        <header>
          <h1>
            Portfoilo
          </h1>
        </header>
        <Intro></Intro>
        <Projects></Projects>
        <footer>
          <MyFooter />
        </footer>
      </main>
      <Modal></Modal>
    </div>
  );
}

export default App;
