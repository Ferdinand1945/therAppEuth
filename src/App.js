import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/layout/Navbar'; 
import Articles from './components/Articles';
import Article from './components/Article';
import Report from './components/Report';
import Hands from './components/bodyparts/Hands';
import Patients from './components/Patients';
import Stats from './components/Stats';
import { createBrowserHistory } from "history";
import {AnimatePresence} from 'framer-motion';

function App({articles}) {
  const history = createBrowserHistory();
 
  return (
    <div className="App">
    <AnimatePresence exitBeforeEnter>
    <Router history={history}> 
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/articles">
        <Articles/>
      </Route>
      <Route path="/report">
        <Report/>
      </Route>
      <Route path="/hands">
        <Hands/>
      </Route>
      <Route path="/article/:id">
        <Article articles={articles}/>
      </Route>
      <Route path="/patients">
        <Patients/>
      </Route>
      <Route path="/stats/:id">
        <Stats/>
      </Route>
    </Switch>
    </Router>
    </AnimatePresence>
     </div>
  );
}

export default App;
