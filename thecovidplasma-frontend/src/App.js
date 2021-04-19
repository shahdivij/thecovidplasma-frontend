import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
// import SingleArticlePage from "./pages/SingleArticle";
// import Layout from "./components/Layout";
// import Archive from "./components/Archive";


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
