import useFetch from "../hooks/useFetch";
import StreamerList from "./StreamerList";

const Home = () => {
	const { data: streamers, failed } = useFetch('https://api.pmarp.com/twitch/fetch-streamers')
	  
	return (
		<div className="home">
			{streamers ? <StreamerList streamers={streamers.filter((streamer) => {return streamer.featured})} title="Featured Streamers" /> : failed ? failed :'Awaiting Data...'}
			{streamers && <StreamerList streamers={streamers.filter((streamer) => {return !streamer.featured})} title="Streamers" /> }
		</div>
	 );
}
 
export default Home;