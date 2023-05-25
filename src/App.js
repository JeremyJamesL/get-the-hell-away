import Header from './components/Layout/Header';
import Actions from './components/Input/Actions/Actions';
import ResultsList from './components/Components/Results/ResultsList';
import './sass/main.scss'

function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Actions/>
        <ResultsList />
      </main>
    </div>
  );
}

export default App;
