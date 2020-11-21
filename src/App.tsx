import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld/HelloWorld'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HelloWorld} />
			</Switch>
		</BrowserRouter>
	)
}



export default App
