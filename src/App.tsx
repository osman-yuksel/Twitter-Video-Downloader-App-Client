import Header from './components/Header';
import QueryFrom from './components/QueryFrom';
import { QueryProvider } from './components/QueryContext';

const api = {
  host: import.meta.env.VITE_API_HOST,
}

function App() {
  return (
    <div className="App">
      <p>{ api.host }</p>
      <Header />
      <QueryProvider>
        <QueryFrom />
      </QueryProvider>
    </div>
  );
}

export default App;
