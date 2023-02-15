import Joke from '../joke'

const ChuckJoke: React.FC<Joke> = ( {id, joke} ) => 
	
	<>		
		<p> { joke } </p>

	</>	
	

export default ChuckJoke;