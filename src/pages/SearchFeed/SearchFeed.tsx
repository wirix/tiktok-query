import { useSearchParams } from 'react-router-dom';
import { useSearch } from '../../hooks';
import { FeedContent, Loader } from '../../components';
import { Fragment, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export const SearchFeed = () => {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('q')
	const { data: feed, isLoading, setParams, fetchNextPage, hasNextPage } = useSearch();

	useEffect(() => {
		setParams({ cursor: 10, keywords: query ?? '' })
	}, [])

	if (isLoading) {
		return <Loader />
	}

	return (
		<div>
			{feed.map(({ data: { videos } }, idx) => {
				return !videos.length ? (
					<div>нет видео</div>
				) : (
					<Fragment key={idx}>
						<InfiniteScroll
							loader={<Loader />}
							dataLength={videos.length}
							scrollThreshold={'600px'}
							hasMore={hasNextPage ?? false}
							next={fetchNextPage}
						>
							{videos.map(item => <FeedContent {...item} />)}
						</InfiniteScroll>
					</Fragment>
				)
			}
			)}
		</div>
	);
}