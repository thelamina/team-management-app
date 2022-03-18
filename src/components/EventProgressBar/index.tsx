type Props = {
	event: {
		event: {
			title: string;
			start: string;
			end: string;
			className: string;
			color: string;
			extendedProps: {
				colorScheme: string;
				title: string;
			};
			backgroundColor: string;
		};
	};
};

export const EventProgressBar = ({ event: { event } }: Props) => {
	return (
		<>
			<div
				className='w-full relative h-12 bg-gray-200 rounded-full'
				// onMouseEnter={() => setShowUser(true)}
				// onMouseLeave={() => setShowUser(false)}
			>
				<div
					className={`w-3/4 transition-all duration-200 ease-linear h-full flex items-center text-center ${'bg-'+event.extendedProps.colorScheme} rounded-full`}
				>
					<div className='h-6 w-6 bg-white border-8 mx-4 rounded-full border-[#7c606057]' />
					<p className='font-medium text-white'>{event.title}</p>
				</div>
				<div className={`font-medium absolute top-3 right-3`}>
					<p className={` text-${event.extendedProps.colorScheme}`}>
						75%
					</p>
				</div>
			</div>
		</>
	);
};
