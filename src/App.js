
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'

const cities = ['Hamilton', 'Ancaster', 'Dundas']

function App() {
  return (
    <Nav cities={cities}/>
  );
}

export default App;
