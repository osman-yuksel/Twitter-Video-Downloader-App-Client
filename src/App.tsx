import Header from './components/Header';
import QueryForm from './components/QueryForm';
import { QueryProvider } from './components/QueryContext';
import MediaData from './components/MediaData';

const api = {
  host: import.meta.env.VITE_API_HOST,
}

function App() {
  return (
    <div className="App bg-primary flex flex-col items-center transition-all">
      <Header />
      <QueryProvider>
        <QueryForm />
        <MediaData />
      </QueryProvider>
    </div>
  );
}

export default App;
