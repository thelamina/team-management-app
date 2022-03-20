import { useState, useEffect } from 'react';

export const EventProgressBar = ({ event }: any) => {
	const color = event.extendedProps.colorScheme;
	const [progress, setProgress] = useState(event.extendedProps.progress);
	// console.log(event.id);
	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((curr: number) => {
				const newValue =
					curr + Math.round(Math.random() * (30 - 10) + 10);
				if (newValue >= 100) {
					return 100;
				}
				return newValue;
			});
			// getTotalProgress();
			// incrementProgress(event.id);
		}, 10000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className='hover:z-50 w-full relative h-12 bg-gray-200 rounded-full'>
				<div
					style={{
						width: `${progress}%`,
						backgroundColor: color,
					}}
					className={` animate-pulse transition-all duration-200 ease-linear h-full flex items-center text-center ${
						'bg-' + color
					} rounded-full`}
				>
					<div className='h-6 w-6 absolute bg-white border-8 mx-4 rounded-full border-[#7c606057]' />
					<p className='font-medium text-white min-w-max ml-12'>
						{event.title}
					</p>
				</div>
				<div className={`absolute top-3 right-3 text-${color}`}>
					<p
						style={{ color }}
						className={`font-medium text-${
							progress >= 100 ? 'white' : color
						}`}
					>
						{progress}%
					</p>
				</div>
			</div>
		</>
	);
};
