import axios from "axios";
import { useEffect, useState } from "react";

 const GangLanding = () => {
	const [gangs, setGangs] = useState<Gangs[]|null>(null)
	// const [curPreview, setCurPreview] = useState<string|null>(null)
	// useEffect(() => {
	// 	const CancelToken = axios.CancelToken;
	// 	const source = CancelToken.source();
			
	// 	axios.get(`${API_URL}/twitch/fetch-streamers`, {
	// 		cancelToken: source.token
	// 	}).then((res) => {
	// 		setGangs(res.data)
	// 	}).catch((e) => {
	// 		if (axios.isCancel(e)){
	// 			console.log('changed components during fetch, request canceled.')
	// 		}
	// 	})

	// 	return () => source.cancel()
	// }, [])

	return ( <div>
		{gangs && (
			<ul>
				{gangs.map((gang: Gangs) => (
					<li key={gang.id}>
						{gang.name}
							{/* <img src={streamer.preview.large} width="300" height="180" alt={streamer.channel.display_name} />
							<h3>{streamer.channel.display_name}</h3>
							<p>{streamer.channel.status}</p>
							<h6>Viewers: {streamer.viewers}</h6> */}
					</li>
			))} 
				{/* {gangs.forEach((gang: Gang) => {
					<div>????</div>
				})} */}
			</ul>
		)}
		You little sneaky, you, finding all of the secret pages, Gang stuff will be here soom (tm)
	</div> );
}
 
export default GangLanding;