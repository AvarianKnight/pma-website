import { useEffect, useState } from "react"
const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [failed, setFailed] = useState(null)

	
	useEffect(() => {
		const abortFetch = new AbortController()
		
		fetch(url, { signal: abortFetch.signal })
			.then((res) => {
				if(!res.ok) {
					throw Error('Could not fetch data, received error code: ' + res.status)
				}
				return res.json()
			})
			.then((data) => {
				setData(data)
			})
			.catch((e) => {
				if(e.name === 'AbortError') {
					console.log('fetch aborted')
				} else {
					console.log(e)
					setFailed(e.message)
				}
			})
		
			return () => abortFetch.abort()
	}, [url])

	return { data, failed }
}

export default useFetch