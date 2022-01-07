import logo from './logo.svg'
import TimeInput from '@time-input-polyfill/react'
import './App.css'
import { useState } from 'react'

function App() {
	const [value, setValue] = useState()
	return (
		<div className="App">
			<header className="App-header">
				<TimeInput value={value} setValue={setValue} />
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
