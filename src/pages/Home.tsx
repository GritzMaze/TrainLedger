import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import Head from 'components/Head';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
	return (
		<>
			<Head title='TrainLedger' />
			<div className='fixed left-1/2 top-1/2 m-auto flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center'>
				<ArrowRightEndOnRectangleIcon
					aria-hidden='true'
					className='h-20 w-20'
				/>
				<div className='text-md mt-6 leading-6 text-gray-200'>
					Sign in to write your first training entry.
				</div>
				<a
					href='/#'
					className='mt-6 rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600'
				>
					Sign in
				</a>
			</div>
		</>
	);
}
