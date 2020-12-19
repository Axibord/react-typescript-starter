import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
