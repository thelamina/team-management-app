import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { EventProgressBar, UserPill } from '../../components';

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
					resourceAreaWidth={0}
					resourcesInitiallyExpanded={true}
					resources={[
						{
							id: '01',
							extendedProps: {
								name: 'John Doe',
								email: 'johndoe@mail.com',
							},
						},
						{
							id: '02',
							extendedProps: {
								name: 'Mark Twain',
								email: 'mark@mail.com',
							},
						},
						{
							id: '03',
							extendedProps: {
								name: 'Olumide Bells',
								email: 'olu@mail.com',
							},
						},
						{
							id: '04',
							extendedProps: {
								name: 'Ayo Vector',
								email: 'vector@mail.com',
							},
						},
						{
							id: '05',
							extendedProps: {
								name: 'Marv O.',
								email: 'marv@mail.com',
							},
						},
						{
							id: '06',
							extendedProps: {
								name: 'Obilaja F.',
								email: 'obilaja@mail.com',
							},
						},
						{
							id: '07',
							extendedProps: {
								name: 'Tofunmi Oke',
								email: 'tofunmi@mail.com',
							},
						},
						{
							id: '08',
							extendedProps: {
								name: 'Opemipo I-D',
								email: 'opemipo@mail.com',
							},
						},
						{
							id: '09',
							extendedProps: {
								name: 'Dera Nath',
								email: 'dera@mail.com',
							},
						},
						{
							id: '10',
							extendedProps: {
								name: 'Mino Plank',
								email: 'plank@mail.com',
							},
						},
					]}
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
					slotDuration='24:00'
					nowIndicator={true}
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
							resourceId: '01',
							title: 'Flow Swift transfer',
							start: new Date('03/13/2022'),
							end: new Date('03/19/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: '[#fd7e2e]',
							},
						},

						{
							resourceId: '02',
							title: 'Evening Shift',
							start: new Date('03/11/2022'),
							end: new Date('03/22/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: '[#f9d018]',
							},
						},

						{
							resourceId: '03',
							title: 'User Profile',
							start: new Date('03/10/2022'),
							end: new Date('03/14/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: '[#131e3a]',
							},
						},
						{
							resourceId: '04',
							title: 'Transfers by phone number',
							start: new Date('03/08/2022'),
							end: new Date('03/19/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: '[#131e3a]',
							},
						},
						{
							resourceId: '05',
							title: 'Chat bot',
							start: new Date('03/12/2022'),
							end: new Date('03/19/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'blue-400',
							},
						},
						{
							resourceId: '06',
							title: 'Transaction Analytics',
							start: new Date('03/19/2022'),
							end: new Date('03/24/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'orange-400',
							},
						},
						{
							resourceId: '07',
							title: 'Settings',
							start: new Date('03/12/2022'),
							end: new Date('03/27/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: '[#f9d018]',
							},
						},
						{
							resourceId: '08',
							title: 'Settings',
							start: new Date('03/12/2022'),
							end: new Date('03/27/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'blue-400',
							},
						},
						{
							resourceId: '09',
							title: 'Settings',
							start: new Date('03/12/2022'),
							end: new Date('03/27/2022'),
							className: 'bg-transparent',
							extendedProps: {
								colorScheme: 'blue-400',
							},
						},
						{
							resourceId: '10',
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
