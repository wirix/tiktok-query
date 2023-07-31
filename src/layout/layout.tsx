import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom';
import { Search } from '../components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='bg-gray-900 min-h-screen min-w-full text-gray-50'>
			<div className='grid gap-5 grid-rows-layoutRows sm:grid-cols-layoutColumnsSm lg:grid-cols-layoutColumnsLg'>
				<header className='px-5 py-4 flex row-span-1 col-start-1 sm:col-span-3 lg:col-span-4 bg-slate-600'>
					<div className="container">
						<h1>
							<Link to='./'>
								logo
							</Link>
						</h1>
					</div>
				</header>
				<nav className='hidden lg:block lg:col-start-2 lg:col-span-1'>
					<Search />
				</nav>
				<main className='row-span-2 sm:col-start-2 lg:col-start-3 col-span-1'>
					<div className="container">
						{children}
					</div>
				</main>
				<footer className='row-span-3 col-start-1 sm:col-span-3 lg:col-span-4 bg-slate-600'>footer</footer>
			</div>
		</div>
	);
}

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
	return function layoutWithProps(props: T) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}