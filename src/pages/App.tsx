import LoadingOrError from 'components/LoadingOrError';
import Nav from 'components/nav';
import type { ReactElement } from 'react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(async () => import('pages/Home'));

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<div className='min-h-screen'>
				<Suspense fallback={<LoadingOrError />}>
					<Nav />
					<Routes>
						<Route path='/' element={<Home />} />
						{/* <Route path=':fruitName' element={<Details />} /> */}
					</Routes>
				</Suspense>
			</div>
		</BrowserRouter>
	);
}
