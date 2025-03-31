import dpsLogo from './assets/DPS.svg';
import './App.css';
import { FormEvent, useRef, useState } from 'react';

function App() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isLoading, setIsLoading] = useState(false);

	const callHuggingface = async (e: FormEvent) => {
		e.preventDefault();
		try {
			setIsLoading(true);
			const response = await fetch(
				import.meta.env.VITE_HUGGINGFACE_ENDPOINT,
				{
					headers: {
						Authorization: `Bearer ${
							import.meta.env.VITE_HUGGINGFACE_API_KEY
						}`,
					},
					method: 'POST',
					body: JSON.stringify(inputRef.current?.value),
				}
			);
			const result = await response.json();
			console;
			setIsLoading(false);
			alert(`Huggingface replied with: ${JSON.stringify(result)}`);
		} catch (e) {
			alert('Whoops, something went wrong 🤖');
			setIsLoading(false);
		}
	};

	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<h1>DPS + Vite + React</h1>
			<div className="home-card">
				<form onSubmit={callHuggingface}>
					<input
						ref={inputRef}
						type="text"
						placeholder="Tell me What do you want to send to Huggingface?"
						required
						autoFocus
						disabled={isLoading}
					/>
					<input type="submit" value="Call huggingface 🤗" />
				</form>
				<p>
					To start coding go to <code>src/App.tsx</code>
				</p>
			</div>
		</>
	);
}

export default App;
