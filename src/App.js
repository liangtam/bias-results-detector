import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import {ResultsContextProvider} from "./contexts/ResultsContext";
import {PhraseContextProvider} from "./contexts/PhraseContext";

function App() {
  return (
    <div className="App">
        <PhraseContextProvider>
            <ResultsContextProvider>
                <MainPage/>
            </ResultsContextProvider>
        </PhraseContextProvider>
    </div>
  );
}

export default App;
