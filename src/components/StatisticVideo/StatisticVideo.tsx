import { formatterCompactNum } from '../../utils';

export const StatisticVideo = ({ playCount, diggCount, commentCount, shareCount }: {
	playCount: number;
	diggCount: number;
	commentCount: number;
	shareCount: number;
}) => {
	const details = [
		{
			icon: <i className="ri-eye-line"></i>,
			count: playCount
		},
		{
			icon: <i className="ri-heart-fill"></i>,
			count: diggCount
		},
		{
			icon: <i className="ri-chat-1-fill"></i>,
			count: commentCount
		},
		{
			icon: <i className="ri-share-fill"></i>,
			count: shareCount
		},
	]

	return (
		<ul className='flex gap-2 justify-center'>
			<div className='flex flex-col'>
				{details.map((d, i) => (
					<li key={i} className='mt-4 text-center flex flex-col'>
						<span className='text-2xl 2xl:text-4xl'>{d.icon}</span>
						<p className="text-sm mt-2">{formatterCompactNum(d.count)}</p>
					</li>
				))}
			</div>
		</ul>
	);
}