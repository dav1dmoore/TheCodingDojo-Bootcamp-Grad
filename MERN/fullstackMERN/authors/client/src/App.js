import './App.css';
import {Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import EditView from './views/EditView';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<IndexView/>}/>
        <Route path="/new" element={<CreateView/>}/>
        <Route path="/edit/:id" element={<EditView/>}/>
      </Routes>
    </div>
  );
}

export default App;
