const Canary = () => {
	return (
		<div>
			<h1>You need to be on canary!</h1>
			<p style={{marginTop: '15px'}}>On 03/15/21 we will going back to native audio which means <strong>you need to be on canary!</strong> You might be wondering, why are we doing this? <a href="https://fivem.net/">FiveM</a> has recently recently released a <a href="https://github.com/citizenfx/fivem/commit/db7e4899a966c7d0fc4c7fe98adb8f50c0f4ca4b">patch</a> for the native audio issues that we were previously experiencing, which is currently on canary for testing.</p>
			
			<p style={{marginTop: '15px'}}>Alongside this the voice system we use (called 3d audio) is currently deprecated, meaning it will get no further changes. All effort will go into making native audio better, so if <i>anything</i> breaks we will be told to pound sand and to use native audio (which is already happening).</p>

			<p style={{marginTop: '15px'}}>
			The current issues with 3d audio are:
			<ul>
				<li>Random disconnection from voices</li>
				<li>Voices will randomly go insanely laggy.</li>
				<li>Sometimes players will go global with older headsets.</li>
				<li>Random stuttering</li>
			</ul>
			</p>

			<p style={{marginTop: '15px'}}>These are all things that should <i>hopefully</i> be fixed when switching back to native audio, alongside that, we will also get cool new features like radio and phone submixs.</p>

			<p style={{marginTop: '7px'}}>The steps to updating to canary are pretty simple!</p>
			<h3 style={{marginTop: '18px'}}>Step 1: Click the settings tab!</h3>
			<img src="https://image.dillonskaggs.dev/CtHVxv"></img>
			<h3 style={{marginTop: '15px'}}>Step 2: Click Canary (Experimental/Unstable)!</h3>
			<img src="https://image.dillonskaggs.dev/rrlRzw"></img>
			<h3 style={{marginTop: '15px'}}>Step 3: Now just restart your game, that's it! You're now on canary!</h3>
		</div>
	);
}
 
export default Canary;