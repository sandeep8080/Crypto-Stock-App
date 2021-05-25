import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import ViewPage from './pages/View';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <HomePage />
        </Route>
        <Route path='/view' >
          <ViewPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
