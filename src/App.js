import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "components/Navbar/Navbar";
import Home from "pages/Home/Home";
import Quiz from "pages/Quiz/Quiz";
import Result from "pages/Result/Result";

import "styles/main.scss";
import StateProvider from "context/StateProvider";

function App() {
    return (
        <Router>
            <Toaster
                toastOptions={{
                    duration: 4000,
                    position: "bottom-left",
                    style: { marginBottom: "30px", marginLeft: "30px" },
                }}
            />
            <div className="app">
                <StateProvider>
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
                </StateProvider>
            </div>
        </Router>
    );
}

export default App;
