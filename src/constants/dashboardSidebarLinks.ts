import { HiViewGrid, HiChartBar, HiFolder } from 'react-icons/hi';
import { MdTimer, MdAvTimer, MdSettings } from 'react-icons/md';

export const DashboardLinks = [
	{
		path: '/',
		children: [
			{
				match: '/dashboard',
				path: '/',
				title: 'Dashboard',
				icon: HiViewGrid,
			},
			{
				match: `/analytics`,
				path: '/',
				title: 'Analytics',
				icon: HiChartBar,
			},
			{
				match: `/`,
				path: `/`,
				title: 'Projects',
				icon: HiFolder,
			},
			{
				match: `/tracking`,
				path: '/',
				title: 'Tracking',
				icon: MdTimer,
			},
			{
				match: `/history`,
				path: '/',
				title: 'History',
				icon: MdAvTimer,
			},
			{
				match: `/settings`,
				path: '/',
				title: 'Settings',
				icon: MdSettings,
			},
		],
	},
];
