import { IInfoHeadVideo } from './InfoHeadVideo.props'
import { FC } from 'react'

export const InfoHeadVideo: FC<IInfoHeadVideo> = ({ nickname, hashTitle, musicTitle }) => {
	return (
		<>
			<h3 className='font-bold text-2xl'>{nickname}</h3>
			<div className=''>
				{hashTitle && hashTitle.split('#').map((title, i) => <span key={i} className='mr-1 last:mr-0'>{`#${title} `}</span>)}
			</div>
			<span>Original: {musicTitle}</span>
		</>
	)
}