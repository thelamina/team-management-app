import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventProgressBar } from '../../components';

export const Projects = () => {
	return (
		<div className='w-full relative'>
			<div className='flex justify-between items-center'>
				<div>
					<h2 className='text-xl font-medium'>GSE Banking App</h2>
					<div className='flex items-center  mt-2'>
						<span className='mr-2 text-sm text-gray-400'>56%</span>
						<div className='w-20 h-[5px] bg-blue-100 rounded-full'>
							<div className='w-3/5 h-full text-center text-xs text-white bg-gradient-to-r from-blue-200 to-blue-500 rounded-full' />
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
					dayHeaderFormat={{ weekday: 'narrow', day: 'numeric' }}
					plugins={[dayGridPlugin, timeGridPlugin]}
					initialView='dayGrid'
					customButtons={{
						search: {
							text: 'Search',

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
						// start: 'dayGridMonth,timeGridWeek,timeGridDay',
						left: 'title,prev,next',
						center: '',
						end: 'search, dayGridMonth', // will normally be on the right. if RTL, will be on the left
					}}
					visibleRange={(currentDate) => {
						let startDate = new Date(currentDate.valueOf());
						let endDate = new Date(currentDate.valueOf());

						startDate.setDate(startDate.getDate() - 9); // One day in the past
						endDate.setDate(endDate.getDate() + 7); // Two days into the future

						return { start: startDate, end: endDate };
					}}
					navLinks={true}
					// navLinkDayClick={(date, jsEvent: any) => {
					// 	.log('day', date.toISOString());
					// 	console.log('coordconsoles', jsEvent.pageX, jsEvent.pageY);
					// }}
					eventContent={(event: any) => {
						return <EventProgressBar event={event} />;
					}}
					// eventMouseEnter={(event: any, createElement) => {
					// 	console.log('eventMouseEnter', event);
					// }}
					
					eventBackgroundColor='transparent'
					eventBorderColor='transparent'
					eventOrderStrict={true}
					eventOrder='-id'
					// progressiveEventRendering={true}
					events={[
						{
							title: 'Flow Swift transfer',
							start: new Date('03/13/2022'),
							end: new Date('03/19/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'blue-400',
							},
						},

						{
							title: 'Evening Shift',
							start: new Date('03/11/2022'),
							end: new Date('03/22/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'blue-400',
							},
						},

						{
							title: 'User Profile',
							start: new Date('03/10/2022'),
							end: new Date('03/14/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'blue-400',
							},
						},
						{
							title: 'Transfers by phine number',
							start: new Date('03/08/2022'),
							end: new Date('03/19/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'blue-400',
							},
						},
						{
							title: 'Chat bot',
							start: new Date('03/12/2022'),
							end: new Date('03/19/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'blue-400',
							},
						},
						{
							title: 'Transaction Analytics',
							start: new Date('03/19/2022'),
							end: new Date('03/24/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'blue-400',
							},
						},
						{
							title: 'Settings',
							start: new Date('03/12/2022'),
							end: new Date('03/27/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'blue-400',
							},
						},
					]}
				/>
			</div>
		</div>
	);
};
