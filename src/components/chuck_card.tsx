
import ChuckImage from '../assets/chuck_norris.jpg';

interface ChuckCardProps {

	i_chuckGreeting : string;
	i_whalesSaved : number;
	i_roundHouseKicks : number;

}

const ChuckCard : React.FC <ChuckCardProps> = ( {i_chuckGreeting, 
												i_whalesSaved, 
												i_roundHouseKicks}) => 

	<>
		<h2> {i_chuckGreeting} </h2>
		<img src={ ChuckImage } alt='A handsome man' />

		<h2>Chuck Info:  </h2>
			<p>Whales saved - { i_whalesSaved } </p>
			<p>Round house kicks - { i_roundHouseKicks } </p>
	</>


export default ChuckCard;

