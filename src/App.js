import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <h1>Posts App!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <PostDetails />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
