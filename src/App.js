
import ItemList from './container/ItemList'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {

    return (
      <div className="App">
      <BrowserRouter>
      <ItemList />
      </BrowserRouter>
      </div>
    );
}

export default App;
