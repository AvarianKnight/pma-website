import React, { Suspense } from "react"
const Home = React.lazy(() => import("./components/Home"))
const Navbar = React.lazy(() => import("./components/Navbar"))
const NotFound = React.lazy(() => import("./NotFound"))
const Whitelist = React.lazy(() => import("./components/Whitelist"))
const Canary = React.lazy(() => import("./components/Canary"))
const GangLanding = React.lazy(() => import('./components/Gang/GangLanding'))
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => {
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<div>Loading...</div>}>
					<Navbar />
				</Suspense>
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Suspense fallback={<div>Loading...</div>}>
								<Home />
							</Suspense>
						</Route>
						<Route path="/whitelist">
							<Suspense fallback={<div>Loading...</div>}>
								<Whitelist />
							</Suspense>
						</Route>
						<Route path="/gangs">
							<Suspense fallback={<div>Loading...</div>}>
								<GangLanding />
							</Suspense>
						</Route>
						<Route path="/canary">
							<Suspense fallback={<div>Loading...</div>}>
								<Canary />
							</Suspense>
						</Route>
						<Route path="*">
							<Suspense fallback={<div>Loading...</div>}>
								<NotFound />
							</Suspense>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
