import type { ReactElement } from 'react';

export default function Dashboard(): ReactElement {
	return (
		<div className='flex flex-1 justify-center px-40 py-5'>
			<div className='layout-content-container flex max-w-[960px] flex-1 flex-col'>
				<div className='flex flex-wrap justify-between gap-3 p-4'>
					<p className='tracking-light min-w-72 text-[32px] font-bold leading-tight text-white'>
						Training Dashboard
					</p>
					<button
						type='button'
						className='flex h-8 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#223449] px-4 text-sm font-medium leading-normal text-white'
					>
						<span className='truncate'>Go to Calendar</span>
					</button>
				</div>
				<div className='flex flex-wrap gap-4 p-4'>
					<div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-[#223449] p-6'>
						<p className='text-base font-medium leading-normal text-white'>
							Total Distance
						</p>
						<p className='tracking-light text-2xl font-bold leading-tight text-white'>
							120 km
						</p>
					</div>
					<div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-[#223449] p-6'>
						<p className='text-base font-medium leading-normal text-white'>
							Total Workouts
						</p>
						<p className='tracking-light text-2xl font-bold leading-tight text-white'>
							14
						</p>
					</div>
					<div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl bg-[#223449] p-6'>
						<p className='text-base font-medium leading-normal text-white'>
							Average Workout Time
						</p>
						<p className='tracking-light text-2xl font-bold leading-tight text-white'>
							35 min
						</p>
					</div>
				</div>
				<div className='@3xl:grid-cols-4 grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3'>
					<div className='flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#314b68] bg-[#182534] p-6'>
						<div className='flex flex-col gap-1'>
							<h1 className='text-base font-bold leading-tight text-white'>
								Cycling
							</h1>
							<span className='text-4xl font-black leading-tight tracking-[-0.033em] text-white'>
								45 minutes
							</span>
						</div>
						<div className='flex flex-col gap-2'>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								120 km
							</div>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								14
							</div>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								35 min
							</div>
						</div>
					</div>
					<div className='flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#314b68] bg-[#182534] p-6'>
						<div className='flex flex-col gap-1'>
							<h1 className='text-base font-bold leading-tight text-white'>
								Strength Training
							</h1>
							<span className='text-4xl font-black leading-tight tracking-[-0.033em] text-white'>
								30 minutes
							</span>
						</div>
						<div className='flex flex-col gap-2'>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								120 km
							</div>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								14
							</div>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								35 min
							</div>
						</div>
					</div>
					<div className='flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#314b68] bg-[#182534] p-6'>
						<div className='flex flex-col gap-1'>
							<h1 className='text-base font-bold leading-tight text-white'>
								Rest Day
							</h1>
							<span className='text-4xl font-black leading-tight tracking-[-0.033em] text-white'>
								30 minutes
							</span>
						</div>
						<div className='flex flex-col gap-2'>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								120 km
							</div>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								14
							</div>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								35 min
							</div>
						</div>
					</div>
					<div className='flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#314b68] bg-[#182534] p-6'>
						<div className='flex flex-col gap-1'>
							<h1 className='text-base font-bold leading-tight text-white'>
								Running
							</h1>
							<span className='text-4xl font-black leading-tight tracking-[-0.033em] text-white'>
								5 km
							</span>
						</div>
						<div className='flex flex-col gap-2'>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								120 km
							</div>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								14
							</div>
							<div className='flex gap-3 text-[13px] font-normal leading-normal text-white'>
								<div
									className='text-white'
									data-icon='Check'
									data-size='20px'
									data-weight='regular'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='20px'
										height='20px'
										fill='currentColor'
										viewBox='0 0 256 256'
									>
										<path d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z' />
									</svg>
								</div>
								35 min
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap gap-4 px-4 py-6'>
					<div className='flex min-w-72 flex-1 flex-col gap-2'>
						<p className='text-base font-medium leading-normal text-white'>
							Weekly Distance
						</p>
						<div className='flex min-h-[180px] flex-1 flex-col gap-8 py-4'>
							<svg
								width='100%'
								height='148'
								viewBox='-3 0 478 150'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								preserveAspectRatio='none'
							>
								<path
									d='M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z'
									fill='url(#paint0_linear_1131_5935)'
								/>
								<path
									d='M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25'
									stroke='#90abcb'
									strokeWidth='3'
									strokeLinecap='round'
								/>
								<defs>
									<linearGradient
										id='paint0_linear_1131_5935'
										x1='236'
										y1='1'
										x2='236'
										y2='149'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#223449' />
										<stop offset='1' stopColor='#223449' stopOpacity='0' />
									</linearGradient>
								</defs>
							</svg>
							<div className='flex justify-around'>
								<p className='text-[13px] font-bold leading-normal tracking-[0.015em] text-[#90abcb]'>
									July 1
								</p>
								<p className='text-[13px] font-bold leading-normal tracking-[0.015em] text-[#90abcb]'>
									July 15
								</p>
								<p className='text-[13px] font-bold leading-normal tracking-[0.015em] text-[#90abcb]'>
									August 1
								</p>
								<p className='text-[13px] font-bold leading-normal tracking-[0.015em] text-[#90abcb]'>
									August 15
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
