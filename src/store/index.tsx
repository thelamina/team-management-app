import { EventProvider } from './event/provider';

export const Store = ({ children }: any) => {
	return <EventProvider>{children}</EventProvider>;
};
