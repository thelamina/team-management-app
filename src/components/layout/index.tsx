import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
type Props = {
	children?: React.ReactNode;
	title?: string;
	subtitle?: string;
};

export const DashboardLayout = ({ children }: Props) => {
	const [open, setOpen] = useState(false);
	const toggleSidebar = () => setOpen(!open);
	const [currentRoute, setCurrentRoute] = useState('');
	const [currentSubRoute, setCurrentSubRoute] = useState('');
	const [collapsed, setCollapsed] = useState(false);
	return (
		<div className='bg-white dark:bg-gray-800 h-screen overflow-hidden relative'>
			<div className='flex items-start'>
				<Sidebar
					open={open}
					onClose={toggleSidebar}
					collapsed={collapsed}
					setTitle={setCurrentRoute}
					setSubtitle={setCurrentSubRoute}
					setCollapsed={setCollapsed}
				/>
				<div className={`w-full pl-0 md:space-b-4`}>
					<div
						className={`${
							open &&
							'h-screen w-full lg:hidden block absolute bg-[#9694a1f3] backdrop-blur'
						}`}
						onClick={toggleSidebar}
					/>
					<Header
						toggleMenu={toggleSidebar}
						title={currentRoute}
						subtitle={currentSubRoute}
					/>
					<div className='overflow-auto bg-white h-screen pb-24 pt-2 px-4 md:pt-0 md:px-8'>
						<div className='flex flex-col flex-wrap sm:flex-row pt-4 w-full'>
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const withDashboardLayout =
	(Component: React.ComponentType<any>) => (props: any) =>
		(
			<DashboardLayout>
				<Component {...props} />
			</DashboardLayout>
		);

DashboardLayout.withLayout = withDashboardLayout;
