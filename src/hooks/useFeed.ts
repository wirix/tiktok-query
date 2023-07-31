import { useQuery } from '@tanstack/react-query'
import { request } from '../utils/common'
import { REGION } from '../utils'

const getFeed = async () => {
	const response: IFeedResponse = await request({
		path: `feed/list?region=${REGION}&count=20`
	})
	return response
}

export const useFeed = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['feed'],
		queryFn: getFeed
	})
	return { data: data?.data || [], isLoading }
}

export interface IFeedResponse {
	code: number;
	msg: string;
	processed_time: number;
	data: IFeedVideoData[];
}

export interface IFeedVideoData {
	aweme_id: string;
	video_id: string;
	region: string;
	title: string;
	cover: string;
	origin_cover: string;
	duration: number;
	play: string;
	wmplay: string;
	music: string;
	music_info: IMusicInfo;
	play_count: number;
	digg_count: number;
	comment_count: number;
	share_count: number;
	download_count: number;
	create_time: number;
	anchors: any;
	anchors_extras: string;
	is_ad: boolean;
	commerce_info: ICommerceInfo;
	commercial_video_info: string;
	author: IAuthorInfo;
	is_top: number;
}

export interface IMusicInfo {
	id: string;
	title: string;
	play: string;
	cover: string;
	author: string;
	original: boolean;
	duration: number;
	album: string;
}

export interface ICommerceInfo {
	adv_promotable: boolean;
	auction_ad_invited: boolean;
	branded_content_type: number;
	with_comment_filter_words: boolean;
}

export interface IAuthorInfo {
	id: string;
	unique_id: string;
	nickname: string;
	avatar: string;
}
