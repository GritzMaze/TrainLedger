import type { MouseEvent, ReactElement } from 'react';

function onClick(event: MouseEvent): void {
	event.stopPropagation();
}

export default function ImageAttribution(): ReactElement {
	return (
		<>
			<div className='absolute top-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-current text-black text-opacity-50' />
			<div className='absolute bottom-1 right-1 px-1 text-xs text-white'>
				<span>Photo by </span>
				<a
					data-testid='FruitImageAuthor'
					href='google.com'
					target='_blank'
					rel='noreferrer noopener'
					className='underline'
					onClick={onClick}
				>
					author
				</a>
				<span> on </span>
				<a
					href='https://unsplash.com'
					target='_blank'
					rel='noreferrer noopener'
					className='underline'
					onClick={onClick}
				>
					Unsplash
				</a>
			</div>
		</>
	);
}
