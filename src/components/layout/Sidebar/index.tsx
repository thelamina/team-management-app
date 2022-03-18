import React from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { ImStack } from 'react-icons/im';
import { BsArrowBarLeft } from 'react-icons/bs';
import { DashboardLinks } from '../../../constants';
import { MdKeyboardArrowUp, MdOutlineAddCircle } from 'react-icons/md';

type Props = {
	open: boolean;
	onClose: () => void;
	collapsed: boolean;
	setCollapsed: (collapsed: boolean) => void;
	setTitle: (title: string) => void;
	setSubtitle: (subtitle: string) => void;
};

const Sidebar = ({
	open,
	onClose,
	collapsed,
	setCollapsed,
	setTitle,
	setSubtitle,
}: Props) => {
	const { pathname } = useLocation();

	const toggleSidebar = () => {
		setCollapsed(!collapsed);
		onClose();
	};

	return (
		<div
			className={`h-screen w-96 border-r border-gray-100 max-w-80 transition-all duration-300  ${
				open
					? 'absolute block lg:relative z-50'
					: 'hidden lg:block opacity-0 lg:opacity-100'
			}
			 ${collapsed ? 'lg:w-20' : 'w-80'}
			 lg:block`}
		>
			<div className='bg-gray-50 w-full overflow-y-auto overflow-x-hidden flex flex-col justify-between h-full dark:bg-gray-700 py-2'>
				<div className='w-full overflow-y-auto overflow-x-hidden h-5/6'>
					<div className='flex w-full items-center justify-between px-6 pb-4 pt-3'>
						<Link
							to='/'
							className={`flex items-center ${
								collapsed ? 'lg:hidden' : 'flex'
							}`}
						>
							<ImStack className='bg-[#1D5CFC] rounded-full h-12 w-12 p-3 text-white' />
							<h1 className='ml-3 text-2xl font-semibold'>PJ</h1>
						</Link>
						<button onClick={toggleSidebar}>
							<BsArrowBarLeft
								size='24'
								className={`transition-all origin-center duration-300 ease-in-out ${
									collapsed ? 'lg:rotate-180' : 'rotate-0'
								}`}
							/>
						</button>
					</div>
					<nav className='mt-2 overflow-y-auto overflow-x-hidden'>
						<ul>
							{DashboardLinks.map((link, index) => {
								return (
									<li key={link.path + index}>
										<ul className='mb-8 '>
											{link.children.map((childLink) => {
												const Icon = childLink.icon;
												const active = matchPath(
													pathname,
													childLink.match
												)?.pattern.end;

												const style = `w-full font-medium hover:text-blue-500 hover:scale-110 origin-left text-black flex items-center py-4 my-2 transition-all duration-200 ${
													active && 'text-blue-500'
												} ${
													collapsed
														? 'lg:justify-center px-8 lg:px-0'
														: 'justify-start px-8'
												}`;
												return (
													<li key={childLink.title}>
														<Link
															title={
																childLink.title
															}
															to={childLink.path}
															onClick={() => {
																setTitle(
																	childLink.title
																);
															}}
														>
															<div
																className={
																	style
																}
															>
																<Icon className='w-6 h-6 mr-0' />

																<p
																	className={`ml-3 text-base ${
																		collapsed
																			? 'lg:opacity-0 inline-block lg:hidden'
																			: 'lg:opacity-100'
																	}`}
																>
																	{
																		childLink.title
																	}
																</p>
															</div>
														</Link>
													</li>
												);
											})}
										</ul>
									</li>
								);
							})}
						</ul>
					</nav>
					<div className={`${collapsed ? 'lg:px-4' : 'px-6'} my-6`}>
						<button
							className={`bg-blue-100 rounded-2xl w-full ${
								collapsed ? 'lg:p-2' : 'p-6'
							} flex items-center justify-between`}
						>
							<span
								className={`font-medium text-left w-20 ${
									collapsed ? 'lg:hidden' : 'inline-block'
								}`}
							>
								Create new task
							</span>
							<MdOutlineAddCircle
								className='text-blue-600'
								size='36'
							/>
						</button>
					</div>
				</div>
				<div className='inline-flex w-full p-6 items-center min-w-max'>
					<img
						className='object-cover rounded-full h-12 w-12 bg-black'
						src='https://randomuser.me/api/portraits/med/men/32.jpg'
						alt='User'
					/>
					<div className='mx-4'>
						<p className='text-gray-900 text-base font-semibold'>
							Finna A.
						</p>
						<p className='text-gray-400 text-sm'>finna@iksg.com</p>
					</div>
					<MdKeyboardArrowUp size='24' className='text-gray-400' />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
