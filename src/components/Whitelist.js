import axios from "axios";
import { useEffect, useState } from "react";
import Reaptcha from "reaptcha"

const Whitelist = () => {
	let [ip, setIp] = useState(null)
	let [captcha, setCaptcha] = useState(null)
	let [ready, setReady] = useState(false)

	useEffect(() => {
		fetch('https://api.pmarp.com/whitelist/get-ip')
			.then(res => res.json())
			.then(data => setIp(data.ip))
	}, [])

	const onVerify = (verification) => {
		axios.post('https://api.pmarp.com/whitelist/add-whitelist', {}, {
			headers: {
				'Content-Type': 'application/json',
				'g-recaptcha-response': verification
			}
		}).then((res) => {
			if (res.data === 'success') {
				window.location = "fivem://connect/fivem.pmarp.com:30120";
			} else {
				alert('Failed to whitelist your ip, please refresh the page and try again.')
			}
		}).catch((e) => {
			console.log(e)
			alert('Failed to whitelist your ip, please refresh the page and try again.')
		})
	}

	return ( 
	<div className="whitelist">
		<h1>Whitelist</h1>
		<p>Please note, you will have to rewhitelist daily, as the soft whitelist resets every day at restart.</p>
		<p><span className="ip">{ip}</span> (hover to reveal ip) will be whitelisted until the daily restart in the morning.</p>
		<Reaptcha className='recaptcha'
			ref={(e) => (setCaptcha(e))}
			// actual
			sitekey="6LeUrSsaAAAAAK0OpPxDixgAFJ_wmLeJCestJGDs"
			// test
			// sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
			onVerify={onVerify}
			onLoad={() => setReady(true)}
		/>
	</div>
	);
}
 
export default Whitelist;