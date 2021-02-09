import axios from "axios";
import { useEffect, useState } from "react";
import StreamerList from "./StreamerList";

const Home = () => {
	const [featured, setFeatured] = useState(null)
	const [streamers, setStreamers] = useState(null)
	const [failed, setFailed] = useState(false)
	
	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
			
		axios.get('https://api.pmarp.com/twitch/fetch-streamers', {
			cancelToken: source.token
		}).then((res) => {
			const data = res.data
			setFeatured(data.filter((streamer) => {return streamer.featured}))
			setStreamers(data.filter((streamer) => {return !streamer.featured}))
		}).catch((e) => {
			if (axios.isCancel(e)){
				console.log('changed components during fetch, request canceled.')
			} else {
				setFailed(e.message + ', if this error persists please report it on the discord.')
			}
		})

		// cancel the request if the component changed.
		return () => source.cancel()
	}, [])
	  
	return (
		<div className="home">
			{!featured? failed? failed : 'Awating Data...' : ''}
			{featured && featured.length > 0? <StreamerList streamers={featured} title="Featured Streamers" /> :
				(<div className="no-streamers">
					<h1>Featured Streamers</h1>
					<p>Theres currently no featured streamers online</p>
				</div>)
			}
			{streamers && featured.length > 0 ? 
				<StreamerList streamers={streamers} title="Streamers" /> :
				(<div className="no-streamers">
					<h1>Streamers</h1>
					<p>Theres currently no streamers online</p>
				</div>)
			}
		</div>
	 );
}
 
export default Home;