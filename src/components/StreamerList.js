const StreamerList = ({streamers, title}) => ( 
	<div>
		<h1>{title}</h1>
		<div className="streamer-list">
			{streamers.map((streamer) => (
				<div className="streamer-preview" key={streamer.channel.display_name}>
					<a href={streamer.channel.url}>
						<img src={streamer.preview.large} width="300" height="180" alt={streamer.channel.display_name} />
						<h3>{streamer.channel.display_name}</h3>
						<p>{streamer.channel.status}</p>
						<h6>Viewers: {streamer.viewers}</h6>
					</a>
				</div>
			))} 
		</div>
	</div>
);
 
export default StreamerList;