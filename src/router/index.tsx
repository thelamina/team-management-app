import { Routes, Route } from 'react-router-dom';
import { routes } from './routeList';

export const Router = () => {
	return (
		<Routes>
			{routes.map((route) => {
				const Element = route.component;

				return (
					<Route
						key={route.path}
						path={route.path}
						element={<Element />}
					>
						{route?.children?.map((childRoute) => {
							const ChildElement = childRoute.component;
							return (
								<Route
									key={childRoute.path}
									path={childRoute.path}
									element={<ChildElement />}
								/>
							);
						})}
					</Route>
				);
			})}
		</Routes>
	);
};

export { routes };
