import { useState } from 'react';
import ReactPlayer from 'react-player';

export const Player = ({ play }: { play: string }) => {
	const [isPlayVideo, setIsPlayVideo] = useState<boolean>(false);
	const [progressVideo, setProgressVideo] = useState<number>(0);

	const onProgressHandler = ({ loaded, played }: { loaded: number, played: number }) => {
		if (!loaded) {
			return
		}
		setProgressVideo(played * 100)
	}

	const onClickVideoHandler = () => {
		setIsPlayVideo(!isPlayVideo)
	}

	return (
		<div className='rounded-2xl overflow-hidden relative' onClick={onClickVideoHandler}>
			<ReactPlayer
				playing={isPlayVideo}
				url={play}
				onProgress={onProgressHandler}
				width={350}
				height={'auto'}
				loop
				muted={!isPlayVideo}
			/>
			{!isPlayVideo && <span onClick={onClickVideoHandler} className='cursor-pointer absolute top-2/4 left-2/4 text-2xl 2xl:text-4xl'>
				<i className="ri-play-fill"></i>
			</span>}
			<span className='h-1 bg-cyan-400 block rounded-2xl' style={{ width: `${progressVideo}%` }}></span>
		</div>
	);
}