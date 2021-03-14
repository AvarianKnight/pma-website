import axios from "axios";
import { useEffect, useState } from "react";
import StreamerList from "./StreamerList";

const Home = () => {
	const [featured, setFeatured] = useState<null|IStreamer[]>(null)
	const [streamers, setStreamers] = useState<null|IStreamer[]>(null)
	const [failed, setFailed] = useState<string|boolean>(false)
	
	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
			
		axios.get(`${API_URL}/twitch/fetch-streamers`, {
			cancelToken: source.token
		}).then((res) => {
			const data = res.data
			setFeatured(data.filter((streamer: IStreamer) => {return streamer.featured}))
			setStreamers(data.filter((streamer: IStreamer) => {return !streamer.featured}))
		}).catch((e) => {
			if (axios.isCancel(e)){
				console.log('changed components during fetch, request canceled.')
			} else {
				setFailed(e.message + ', if this error persists please report it on the discord.')
			}
		})

		const intervalId = setInterval(() => {
			axios.get(`${API_URL}/twitch/fetch-streamers`, {
				cancelToken: source.token
			}).then((res) => {
				const data = res.data
				setFeatured(data.filter((streamer: IStreamer) => {return streamer.featured}))
				setStreamers(data.filter((streamer: IStreamer) => {return !streamer.featured}))
			}).catch((e) => {
				if (axios.isCancel(e)){
					clearInterval(intervalId)
					console.log('changed components during fetch, request canceled.')
				} else {
					setFailed(e.message + ', if this error persists please report it on the discord.')
				}
			})
		}, 5000)

		return () => source.cancel()
	}, [])
	  
	return (
		<div className="home">
			{!featured? failed? failed : 'Awating Data...' : ''}
			{featured && featured.length > 0 ? <StreamerList streamers={featured} title="Featured Streamers" /> : featured &&
				(<div className="no-streamers">
					<h1>Featured Streamers</h1>
					<p>Theres currently no featured streamers online</p>
				</div>)
			}
			{streamers && streamers.length > 0 ? 
				<StreamerList streamers={streamers} title="Streamers" /> : streamers &&
				(<div className="no-streamers">
					<h1>Streamers</h1>
					<p>Theres currently no streamers online</p>
				</div>)
			}

			<div className="streamer-info">
				<h1>How do I get put on here??</h1>
				<p>In order to get put as regular streamer you will need to open a ticket on the <a href="http://discord.gg/pmarp">discord</a> and discuss it with a Community Manager+.</p>
				<p>In order to get put as a featured streamer you have to display characteristics that we think will benefit the server, like wanting to extend interactions, making interactions for <strong>everyone</strong> and not just yourself, and overall be a good roleplayer.</p>
			</div>
		</div>
	 );
}
 
export default Home;