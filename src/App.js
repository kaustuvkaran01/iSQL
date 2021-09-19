import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Editor from "./pages/Editor";
import Landing from "./pages/Landing";

function App() {
	// Write new routes by adding a route tag underneath the home route by doing something like this:
	// <Route path="<YOUR_PATH_URL>" component={<NAME_OF_COMPONENT>}/>
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/editor" component={Editor} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
