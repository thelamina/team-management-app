import { useContext, useEffect } from 'react';
import FullCalendar, { EventContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { EventProgressBar, UserPill } from '../../components';
import { Users } from '../../utils';
import { EventContext } from '../../store/event/provider';

export const Projects = () => {
	const { state, getAllEvents } = useContext(EventContext);
	console.log(state.events);

	useEffect(() => {
		getAllEvents();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='w-full relative'>
			<div className='flex justify-between items-center'>
				<div>
					<h2 className='text-xl font-medium'>GSE Banking App</h2>
					<div className='flex items-center  mt-2'>
						<span className='mr-2 text-sm text-gray-400'>
							{state.progress}%
						</span>
						<div className='w-20 h-[5px] bg-blue-100 rounded-full'>
							<div
								style={{ width: state.progress + '%' }}
								className='h-full animate-pulse text-center text-xs text-white bg-gradient-to-r from-blue-200 to-blue-500 rounded-full'
							/>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap justify-end items-center'>
					<button className='border-dashed border-2 border-gray-300 px-8 py-2 text-gray-500 rounded-2xl text-base font-medium'>
						+ Invite
					</button>
					<div className='flex -space-x-2 ml-4 my-3'>
						<img
							className='inline-block h-8 w-8 rounded-full object-cover ring-1 ring-white'
							src='https://randomuser.me/api/portraits/med/men/30.jpg'
							alt='Guy'
						/>

						<img
							className='inline-block h-8 w-8 rounded-full object-cover ring-1 ring-white'
							src='https://randomuser.me/api/portraits/med/women/31.jpg'
							alt='Max'
						/>

						<img
							className='inline-block h-8 w-8 rounded-full object-cover ring-1 ring-white'
							src='https://randomuser.me/api/portraits/med/men/32.jpg'
							alt='Charles'
						/>

						<div className='font-medium text-xs h-8 w-8  bg-gray-800 rounded-full object-cover ring-1 text-white flex items-center justify-center ring-white'>
							+15
						</div>
					</div>
				</div>
			</div>

			<div className='mt-8 relative'>
				<FullCalendar
					themeSystem='standard'
					resourceAreaHeaderContent={' '}
					dayHeaderFormat={{ weekday: 'narrow', day: 'numeric' }}
					schedulerLicenseKey='CC-Attribution-NonCommercial-NoDerivatives'
					plugins={[
						dayGridPlugin,
						timeGridPlugin,
						resourceTimelinePlugin,
					]}
					initialView='resourceTimeline'
					// initialView='dayGrid'
					views={{
						pastAndFutureView: {
							type: '',
							visibleRange: (currentDate) => {
								let startDate = new Date(currentDate.valueOf());
								let endDate = new Date(currentDate.valueOf());

								startDate.setDate(startDate.getDate() - 9); // One day in the past
								endDate.setDate(endDate.getDate() + 7); // Two days into the future

								return { start: startDate, end: endDate };
							},
						},
					}}
					eventDidMount={(event) => {
						console.log('event', event);
					}}
					resourceAreaWidth={0}
					resourcesInitiallyExpanded={true}
					resources={Users.map((user) => ({
						id: user.id,
						extendedProps: { ...user },
					}))}
					resourceLabelClassNames='p-0'
					resourceLabelContent={(resource) => (
						<div
							className={`left-0 bg-white transition-all duration-300 ease-in-out z-[99] rounded-xl border p-0 min-w-52`}
						>
							<UserPill
								name={resource.resource.title}
								email={''}
								image={`https://randomuser.me/api/portraits/med/men/${
									Math.floor(Math.random() * 50) + 1
								}.jpg`}
							/>
						</div>
					)}
					resourceLaneClassNames='p-0 top-0 items-center align-middle'
					resourceLaneContent={(resource) => (
						<div
							className={`left-0 w-64 relative bg-white transition-all duration-300 ease-in-out z-[999] rounded-xl border p-0 min-w-52`}
						>
							<UserPill
								name={resource.resource.extendedProps.name}
								email={resource.resource.extendedProps.email}
								image={`https://randomuser.me/api/portraits/med/men/${
									Math.floor(Math.random() * 50) + 1
								}.jpg`}
							/>
						</div>
					)}
					slotLabelFormat={{
						weekday: 'narrow',
						day: 'numeric',
					}}
					slotLabelClassNames={(e) => {
						return `sticky top-0 text-sm text-center text-gray-400 rounded-lg h-8 hover:no-underline font-medium hover:text-gray-700 py-4 ${
							false ? 'bg-blue-500 text-white' : ''
						}`;
					}}
					customButtons={{
						searchBtn: {
							hint: 'Search',
							click: function () {
								alert('clicked the custom button!');
							},
						},
					}}
					dayHeaderClassNames={(e) => {
						return `sticky top-0 text-sm text-gray-400 rounded-lg h-8 hover:no-underline font-medium hover:text-gray-700 py-4 ${
							e.isToday ? 'bg-blue-500 text-white' : ''
						}`;
					}}
					titleFormat={{
						month: 'long',
						year: 'numeric',
					}}
					headerToolbar={{
						left: 'title,prev,next',
						center: '',
						end: 'searchBtn, dayGridMonth', // will normally be on the right. if RTL, will be on the left
					}}
					visibleRange={(currentDate) => {
						let startDate = new Date(currentDate.valueOf());
						let endDate = new Date(currentDate.valueOf());
						startDate.setDate(startDate.getDate() - 9); // 9 day in the past
						endDate.setDate(endDate.getDate() + 7); // 7 days into the future
						return { start: startDate, end: endDate };
					}}
					slotDuration='24:00'
					nowIndicator={true}
					navLinks={true}
					eventContent={(event: EventContentArg) => {
						return <EventProgressBar {...event} />;
					}}
					// eventOrderStrict={true}
					eventClassNames='border-0 bg-transparent'
					eventOrder='-id'
					// progressiveEventRendering={false}
					events={state.events}
				/>
			</div>
		</div>
	);
};
