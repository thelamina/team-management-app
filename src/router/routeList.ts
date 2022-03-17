import { Projects } from '../pages';
import { DashboardLayout } from '../components/layout';
export const routes = [
	{
		path: '/',
		name: 'Dashboard',
		protected: false,
		component: DashboardLayout,
		children: [
			{
				path: '/',
				component: Projects,
			},
		],
	},

	// {
	// 	path: '*',
	// 	protected: false,
	// 	component: PageNotFound,
	// },
];
