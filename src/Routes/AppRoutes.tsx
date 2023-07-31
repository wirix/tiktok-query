import { Route, Routes } from 'react-router-dom'
import { Feed, SearchFeed } from '../pages';

export const AppRoutes = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<Feed />} />
			<Route path='/search' element={<SearchFeed />} />
		</Routes>
	);
}
