import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const HomePage = React.lazy(() => import('./Pages/HomePage'));

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <React.Suspense fallback={<div>loading...</div>}>
            <Route path="/">
              <HomePage />
            </Route>
          </React.Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
