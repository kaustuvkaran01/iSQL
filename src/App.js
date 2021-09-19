import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
	// Write new routes by adding a route tag underneath the home route by doing something like this:
	// <Route path="<YOUR_PATH_URL>" component={<NAME_OF_COMPONENT>}/>
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/home" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
