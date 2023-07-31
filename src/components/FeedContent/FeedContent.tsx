import { FC } from 'react'
import { IFeedVideoData } from '../../hooks'
import { InfoHeadVideo } from '../InfoHeadVideo/InfoHeadVideo'
import { Player } from '../Player/Player'
import { StatisticVideo } from '../StatisticVideo/StatisticVideo'
import {Link} from 'react-router-dom'

export const FeedContent: FC<IFeedVideoData> = ({ video_id, title, music_info, author, play, play_count, digg_count, comment_count, share_count }) => {
	return (
		<div className='mb-16' key={video_id}>
			<InfoHeadVideo
				hashTitle={title}
				nickname={author.nickname}
				musicTitle={music_info.title}
			/>
			<div className='flex justify-center '>
				<Player
					play={play}
				/>
				<div className='self-end flex flex-col ml-4'>
					<Link to={`/user/${author.unique_id}`} className='self-center' >
						<img className='w-14 h-14 2xl:w-18 2xl:h-18 rounded-full' src={author.avatar} alt="avatar" />
					</Link>
					<StatisticVideo
						playCount={play_count}
						diggCount={digg_count}
						commentCount={comment_count}
						shareCount={share_count}
					/>
				</div>
			</div>
		</div>
	)
}