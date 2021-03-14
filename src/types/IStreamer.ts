interface IStreamer {
	featured: boolean
	channel: {
		display_name: string
		status: string
		url: string
	}
	viewers: number
	preview: {
		large: string
	}
}

declare const API_URL: string;