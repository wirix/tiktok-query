import { useFeed } from '../../hooks';
import { FeedContent, Loader } from '../../components';

export const Feed = () => {
	const { data: feed, isLoading } = useFeed();

	if (isLoading) {
		return <Loader />
	}

	return (
		<div>
			{feed.map(item => <FeedContent key={item.aweme_id} {...item} />)}
		</div>
	);
}
