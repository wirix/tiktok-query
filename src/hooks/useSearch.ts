import { useState } from 'react'
import { REGION, request } from '../utils'
import { IFeedVideoData } from './useFeed'
import { useInfiniteQuery } from '@tanstack/react-query'

const getSearchFeedByKeyword = async ({ keywords, cursor }: { keywords: string, cursor: number}) => {
	const response: IResponseFeedSearch = await request({
		path: `feed/search?region=${REGION}&count=20&publish_time=0&sort_type=0&cursor=${cursor}&keywords=${keywords}`
	})
	return response
}

export const useSearch = () => {
	const [params, setParams] = useState({
		keywords: '',
		cursor: 0
	})

	const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
		queryKey: ['searchFeed', params.keywords],
		queryFn: ({ pageParam = params }) => getSearchFeedByKeyword(pageParam),
		getNextPageParam: ({data}) => {
			return data.hasMore ? { ...params, cursor: params.cursor + 10} : undefined
		},
		enabled: !!params.keywords
	})

	return { data: data?.pages || [], isLoading, setParams, fetchNextPage, hasNextPage, params }
}

export interface IResponseFeedSearch {
	code: number;
	msg: string;
	processed_time: number;
	data: IVideoSearchData;
}

export interface IVideoSearchData {
	videos: IFeedVideoData[]
	cursor: number
	hasMore: boolean
}
