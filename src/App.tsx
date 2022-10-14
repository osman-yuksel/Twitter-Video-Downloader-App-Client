import Header from './components/Header';
import QueryFrom from './components/QueryFrom';
import { useQueryContext } from './components/QueryContext';

const api = {
  host: import.meta.env.VITE_API_HOST,
}

function App() {
  const query = useQueryContext();
  query!.queryURL = "Fuck"
  return (
    <div className="App">
      <p>{ api.host }</p>
      <p>{ query!.queryURL }</p>
      <Header />
      <QueryFrom />
    </div>
  );
}

export default App;
