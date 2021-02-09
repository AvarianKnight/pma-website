import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound';
import Whitelist from './components/Whitelist';

const App = () => {
	return (
		<Router>			
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/#">
							<Whitelist />
						</Route>
						<Route path="/whitelist">
							<Whitelist />
						</Route>

						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
