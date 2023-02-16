import './App.css';
import { useState } from 'react';
import ChuckCard from './components/chuck_card';
import ChuckInfo from './components/chuck_info';
import Joke from './joke';
import ChuckJoke from './components/chuck_joke';

function App() {

	const [chuckGreeting, setChuckGreeting] = useState<string>("I am Chuck Norris!!!")

	const [whalesSaved, setWhalesSaved] = useState<number>(700)

	const [roundHouseKicks, setRoundHouseKicks] = useState<number>(300000)

	const [jokes, setJokes] = useState<Array<Joke>>

	([{
		"id": 1,
		"joke": "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.",
	},
	{
		"id": 2,
		"joke": "Time waits for no man. Unless that man is Chuck Norris.",
	},
	{
		"id": 3,
		"joke": "The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them.",
	},
	{
		"id": 4,
		"joke": "Chuck Norris does not own a stove, oven, or microwave, because revenge is a dish best served cold.",
	}])

	const filteredJokes = jokes.filter (jokes => jokes.id === 3)

	return (
		<div className="App">

			<h1>React props and state</h1>

				<ChuckCard 
					i_chuckGreeting= {chuckGreeting}
					i_whalesSaved={whalesSaved}
					i_roundHouseKicks={roundHouseKicks} 
				/>
	
			<h2>Jokes: </h2>

			{jokes.map ((joke) => 
			(
				
				<ChuckJoke
					id ={joke.id}
					joke={joke.joke}
				/>
			) )}

			<h2>Filtered Jokes: </h2>

			{filteredJokes.map ((filteredJoke) => 
			(	
				<ChuckJoke
					id ={filteredJoke.id}
					joke={filteredJoke.joke}
				/>
			) )}
			

	


		</div>
	);
}

export default App;
