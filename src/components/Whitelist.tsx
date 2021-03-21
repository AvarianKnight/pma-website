import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
// @ts-ignore
import Reaptcha from "reaptcha"

const Whitelist = () => {
	const [ip, setIp] = useState<string | null>(null)
	const [loaded, setLoaded] = useState<boolean>(false)

	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
			
		axios.get(`${API_URL}/whitelist/ip`, {
			cancelToken: source.token
		}).then((res: AxiosResponse) => setIp(res.data.ip)).catch((err) =>  console.error)
		
		return () => source.cancel()
	}, [])

	const onVerify = (verification: string) => {
		axios.post(`${API_URL}/whitelist`, {}, {
			headers: {
				"Content-Type": "application/json",
				"g-recaptcha-response": verification,
			},
		})
		.then((res: AxiosResponse) => {
			if (res.status === 201) {
				window.location.href ="fivem://connect/fivem.pmarp.com:30120"
			} else {
				alert(
					"Failed to whitelist your ip, please refresh the page and try again."
				)
			}
		})
		.catch((err) => {
			console.error(err)
			alert("Failed to whitelist your ip, please refresh the page and try again.")
		})
	}

	return (
		<div className="whitelist">
			<h1>Whitelist</h1>
			<p>
				Please note, you will have to rewhitelist daily, as the soft
				whitelist resets every day at restart.
			</p>
			<p>
				<span className="ip">{ip}</span> (hover to reveal ip) will be
				whitelisted until the daily restart in the morning.
			</p>
			<Reaptcha
				onLoad={() => setLoaded(true)}
				className="recaptcha"
				// actual
				sitekey="6LeUrSsaAAAAAK0OpPxDixgAFJ_wmLeJCestJGDs"
				// test
				// sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
				onVerify={onVerify}
			/>
			{!loaded && (
				<div style={{margin: '10px'}}>Loading reCAPTCHA...</div>
			)}
		</div>
	)
}
export default Whitelist;