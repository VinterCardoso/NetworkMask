import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;