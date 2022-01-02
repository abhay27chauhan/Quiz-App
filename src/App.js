import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import Home from "pages/Home/Home";
import Quiz from "pages/Quiz/Quiz";
import Result from "pages/Result/Result";

import "styles/main.scss";

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/result">
                        <Result />
                    </Route>
                    <Route path="/quiz">
                        <Quiz />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
