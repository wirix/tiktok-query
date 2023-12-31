import axios from 'axios';

interface IOptions {
	url: string;
	method: string;
	headers?: Record<string, string>;
	body?: any;
	credentials?: boolean;
}

interface IRequest {
	path: string;
	method?: string;
	body?: any;
}

export const request = async ({ path, method = 'GET', body }: IRequest) => {
	const options: IOptions = {
		url: `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`,
		method,
		headers: {
			'X-RapidAPI-Key': '6e528b9265msh04caae5bebbb93ap18d837jsn900d868939b8',
			'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
		}
	};
	if (body) options.body = body

	try {
		const response = await axios.request(options);
		const result = await response.data
		return result
	} catch (error) {
		console.error(error);
	}
} 

export const formatterCompactNum = (num: number) => {
	const formatter = Intl.NumberFormat('en', {
		notation: 'compact'
	})
	return formatter.format(num)
}